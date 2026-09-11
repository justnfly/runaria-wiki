/* Runaria item builder.
   Renders into #gear-builder. Shares gear-data.js with the stat explorer.

   Builds a REAL item: every roll slot the item actually has, filled in one at
   a time, plus gems in its sockets. It shows the finished tooltip with all the
   values totalled, and how likely that item is to come out of the game.

   The odds replay MMOItems' real procedure per slot (ordered pass over the
   node list, early stop at the slot's max, weighted top-up to its min) and
   then multiply the slots together, which is exact because the slots are
   independent of each other. Gems are quoted separately because you socket
   those yourself - they are not part of the item's own roll. */
(function () {
  "use strict";

  var NAME_FIX = {
    "pve-damage": "PvE Damage",
    "pvp-damage": "PvP Damage",
    "pve-damage-reduction": "PvE Damage Reduction",
    "pvp-damage-reduction": "PvP Damage Reduction"
  };

  /* Which stats the game shows with a "%". Comes from the server's own
     language file via gear-data.js - guessing from the name does not work,
     since attack-damage is flat while block-power and knockback-resistance
     are percentages. */
  var PERCENT = {};

  var QUALITY = {
    common: "cracked", common_plus: "cracked",
    uncommon: "polished", uncommon_plus: "polished",
    rare: "radiant", rare_plus: "radiant",
    epic: "perfect", epic_plus: "perfect",
    legendary: "mythic", legendary_plus: "mythic"
  };

  function pretty(k) {
    if (NAME_FIX[k]) return NAME_FIX[k];
    return k.split("-").map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
  }

  function fmt(n) {
    var a = Math.abs(n);
    if (a >= 100) return String(Math.round(n));
    if (a >= 10) return String(Math.round(n * 10) / 10);
    if (a >= 1) return String(Math.round(n * 100) / 100);
    return String(Math.round(n * 1000) / 1000);
  }

  var SUP = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²",
              "3": "³", "4": "⁴", "5": "⁵", "6": "⁶",
              "7": "⁷", "8": "⁸", "9": "⁹" };

  function sup(n) {
    return String(n).split("").map(function (ch) { return SUP[ch] || ch; }).join("");
  }

  /* Tiny probabilities are real, not zero - show them as a power of ten
     rather than rounding a one-in-a-million item down to "0%". */
  /* The game shows a rolled value rounded, so a displayed "24" really means
     anywhere in 23.95-24. Without accounting for that, typing your item's top
     value asks for P(X >= exactly 24) on a continuous range, which is zero -
     and a perfectly real item reads as "impossible". */
  function halfStep(v) {
    var a = Math.abs(v);
    if (a >= 100) return 0.5;
    if (a >= 10) return 0.05;
    if (a >= 1) return 0.005;
    return 0.0005;
  }

  function atLeastProb(v, lo, hi) {
    if (hi <= lo) return 1;
    var thresh = v - halfStep(v);
    if (thresh <= lo) return 1;
    var p = (hi - thresh) / (hi - lo);
    return Math.max(0, Math.min(1, p));
  }

  function pct(p) {
    if (p <= 0) return "0%";
    if (p >= 0.9999) return "~100%";
    var v = p * 100;
    if (v < 0.001) {
      var e = Math.floor(Math.log10(v));
      var mant = v / Math.pow(10, e);
      return (Math.round(mant * 100) / 100) + " × 10" + sup(e) + "%";
    }
    if (v < 0.01) return v.toPrecision(2) + "%";
    if (v < 1) return v.toFixed(2) + "%";
    if (v < 10) return v.toFixed(1) + "%";
    return Math.round(v) + "%";
  }

  function oneIn(p) {
    if (p <= 0) return "impossible";
    var n = 1 / p;
    if (n < 1.05) return "almost every one";
    if (n < 10000) return "1 in " + Math.round(n).toLocaleString();
    if (n < 1e7) return "1 in " + (Math.round(n / 1000) * 1000).toLocaleString();
    return "1 in " + n.toExponential(1).replace("e+", " × 10^");
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  // ---- the roll ---------------------------------------------------------
  function rollGroup(nodes, min, max) {
    var picked = [];
    var n = nodes.length;
    var cap = (max === null || max === undefined) ? n : max;
    var lo = min || 0;
    for (var i = 0; i < n && picked.length < cap; i++) {
      if (Math.random() < nodes[i][0]) picked.push(i);
    }
    if (picked.length < lo) {
      var pool = [];
      for (var j = 0; j < n; j++) if (picked.indexOf(j) === -1) pool.push(j);
      while (picked.length < lo && pool.length) {
        var tot = 0, k;
        for (k = 0; k < pool.length; k++) tot += nodes[pool[k]][0];
        var chosen = pool.length - 1;
        if (tot > 0) {
          var r = Math.random() * tot, acc = 0;
          for (k = 0; k < pool.length; k++) {
            acc += nodes[pool[k]][0];
            if (r <= acc) { chosen = k; break; }
          }
        } else {
          chosen = Math.floor(Math.random() * pool.length);
        }
        picked.push(pool[chosen]);
        pool.splice(chosen, 1);
      }
    }
    return picked;
  }

  // ---- exact slot probability -------------------------------------------
  /* Simulating this was wrong: asking for 4 specific sub-stats has a real
     probability near 2e-5, which is well under one hit in 20,000 trials, so
     the same valid item came back "impossible" about two thirds of the time
     and a number the rest. These are computed exactly instead.

     The ordered pass is a DP over (nodes seen, how many picked, which of the
     wanted stats were picked). The top-up that follows is a draw without
     replacement from whatever is left, which is a plain hypergeometric when
     the node chances are equal - true of every multi-pick slot here. The
     slots with unequal chances (armour archetypes, sockets) all pick exactly
     one, so they get the weighted single-draw instead. */
  function logC(n, k) {
    if (k < 0 || k > n) return -Infinity;
    var r = 0;
    for (var i = 0; i < k; i++) r += Math.log(n - i) - Math.log(i + 1);
    return r;
  }

  function choose(n, k) {
    if (k < 0 || k > n) return 0;
    return Math.exp(logC(n, k));
  }

  function slotProb(nodes, min, max, want, count) {
    var N = nodes.length;
    if (!want.length) return 1;
    var W = want.length;
    if (W > (max || 0)) return 0;

    var wantIdx = [];
    for (var w = 0; w < W; w++) {
      for (var i = 0; i < N; i++) {
        if (nodes[i][1] === want[w]) { wantIdx.push(i); break; }
      }
    }
    if (wantIdx.length < W) return 0;

    var bitOf = {};
    wantIdx.forEach(function (idx, b) { bitOf[idx] = 1 << b; });

    var c0 = nodes[0][0];
    var equal = nodes.every(function (n) { return Math.abs(n[0] - c0) < 1e-9; });
    var sumC = 0;
    nodes.forEach(function (n) { sumC += n[0]; });

    var cap = (max === null || max === undefined) ? N : max;
    var lo = min || 0;
    var full = (1 << W) - 1;

    // state[p][mask] = probability
    var state = [];
    for (var p = 0; p <= cap; p++) state.push(new Float64Array(1 << W));
    state[0][0] = 1;

    for (var i = 0; i < N; i++) {
      var c = nodes[i][0];
      var bit = bitOf[i] || 0;
      var next = [];
      for (p = 0; p <= cap; p++) next.push(new Float64Array(1 << W));
      for (p = 0; p <= cap; p++) {
        for (var m = 0; m < (1 << W); m++) {
          var v = state[p][m];
          if (!v) continue;
          if (p === cap) { next[p][m] += v; continue; }  // slot already full
          next[p][m] += v * (1 - c);
          next[p + 1][m | bit] += v * c;
        }
      }
      state = next;
    }

    var total = 0;
    for (p = 0; p <= cap; p++) {
      /* A short pass is topped up to the slot's minimum, so the number of
         stats the slot ends with is max(picked, min). */
      var finalCount = Math.max(p, lo);
      if (count !== null && count !== undefined && finalCount !== count) continue;
      for (m = 0; m < (1 << W); m++) {
        var pr = state[p][m];
        if (!pr) continue;
        if (m === full) { total += pr; continue; }

        // how many wanted stats are still missing, and how many picks remain
        var missing = [];
        for (var b = 0; b < W; b++) {
          if (!(m & (1 << b))) missing.push(wantIdx[b]);
        }
        var need = lo - p;
        if (need < missing.length) continue;   // top-up cannot reach them

        if (equal) {
          var avail = N - p;
          var t = choose(avail - missing.length, need - missing.length) /
                  choose(avail, need);
          total += pr * t;
        } else if (need === 1 && missing.length === 1 && p === 0) {
          total += pr * (nodes[missing[0]][0] / sumC);
        }
      }
    }
    return total;
  }

  /* P(the slot rolls exactly `count` stats) - only the count is constrained. */
  function countProb(nodes, min, max, count) {
    var N = nodes.length;
    var cap = (max === null || max === undefined) ? N : max;
    var lo = min || 0;
    if (count < lo || count > cap) return 0;
    var state = new Float64Array(cap + 1);
    state[0] = 1;
    for (var i = 0; i < N; i++) {
      var c = nodes[i][0];
      var next = new Float64Array(cap + 1);
      for (var p = 0; p <= cap; p++) {
        var v = state[p];
        if (!v) continue;
        if (p === cap) { next[p] += v; continue; }
        next[p] += v * (1 - c);
        next[p + 1] += v * c;
      }
      state = next;
    }
    var tot = 0;
    for (p = 0; p <= cap; p++) {
      if (p >= lo ? p === count : lo === count) tot += state[p];
    }
    return tot;
  }

  function build(root, D) {
    root.innerHTML = "";
    root.classList.add("rgb");

    var state = {
      cat: "weapon", sub: "Sword", tier: "legendary", crafted: false,
      slots: {}, gems: [], baseVals: {}
    };

    // ---- helpers ---------------------------------------------------------
    function slotDefs() {
      var slots = D.rolled[state.cat] || {};
      var out = [];
      Object.keys(slots).forEach(function (key) {
        var slot = slots[key];
        var set = (state.crafted && slot.craft) ? slot.craft : slot.drop;
        if (!set) return;
        var nodes = set.nodes[state.tier];
        if (!nodes) return;
        var c = (set.count && set.count[state.tier]) || [0, 1];
        var bands = {};
        nodes.forEach(function (n) { bands[n[1]] = [n[2], n[3]]; });
        out.push({
          key: key, label: slot.label, nodes: nodes,
          min: c[0], max: c[1], bands: bands,
          stats: Object.keys(bands).sort(function (a, b) {
            return pretty(a).localeCompare(pretty(b));
          })
        });
      });
      return out;
    }

    function socketRows() {
      var sk = D.sockets && D.sockets[state.tier];
      if (!sk) return [];
      return (state.crafted ? sk.craft : sk.drop) || [];
    }

    /* Every gem colour this rarity's sockets can actually accept. */
    function gemOptions() {
      var out = {};
      socketRows().forEach(function (r) {
        r.options.forEach(function (o) {
          o.sockets.forEach(function (name) {
            if (name === "Enchant") return;
            out[name] = true;
          });
        });
      });
      return Object.keys(out);
    }

    function maxGems() {
      var n = 0;
      socketRows().forEach(function (r) {
        if (r.key === "enchant") return;
        var most = 0;
        r.options.forEach(function (o) {
          if (o.sockets.length > most) most = o.sockets.length;
        });
        n += (r.max || 0) * most;
      });
      return n;
    }

    function gemFamilyOf(socketName) {
      var m = socketName.match(/(Ruby|Sapphire|Emerald|Amethyst)$/);
      return m ? m[1] : null;
    }

    function gemPool(family) {
      var q = QUALITY[state.tier];
      var g = D.gems[family] && D.gems[family][q];
      return g || null;
    }

    function ensureSlots() {
      var defs = slotDefs();
      var keep = {};
      defs.forEach(function (d) {
        var cur = state.slots[d.key] || { count: d.min, picks: [] };
        if (cur.count < d.min) cur.count = d.min;
        if (cur.count > d.max) cur.count = d.max;
        cur.picks = (cur.picks || []).filter(function (s) { return !!d.bands[s]; });
        cur.picks = cur.picks.slice(0, cur.count);
        var keptVals = {};
        Object.keys(cur.vals || {}).forEach(function (k) {
          if (cur.picks.indexOf(k) !== -1) keptVals[k] = cur.vals[k];
        });
        cur.vals = keptVals;
        keep[d.key] = cur;
      });
      state.slots = keep;
      var bs2 = (state.cat === "weapon" ? D.weaponBase
        : state.cat === "armour" ? D.armourBase : null);
      var bb = bs2 && bs2[state.sub] && bs2[state.sub][state.tier];
      Object.keys(state.baseVals).forEach(function (k) {
        if (!bb || !bb[k]) delete state.baseVals[k];
      });
      var allowed = gemOptions();
      state.gems = state.gems.filter(function (g) {
        return allowed.indexOf(g.socket) !== -1;
      }).slice(0, maxGems());
    }

    // ---- layout ----------------------------------------------------------
    var bar = el("div", "rgx-bar");
    root.appendChild(bar);

    function field(label) {
      var w = el("label", "rgx-field");
      w.appendChild(el("span", "rgx-label", label));
      var s = el("select");
      w.appendChild(s);
      bar.appendChild(w);
      return { wrap: w, sel: s };
    }

    var fCat = field("Item type");
    [["weapon", "Weapons"], ["armour", "Armour"], ["accessory", "Accessories"],
     ["backpack", "Backpacks"]].forEach(function (o) {
      fCat.sel.appendChild(new Option(o[1], o[0]));
    });
    var fSub = field("Kind");
    var fTier = field("Rarity");

    var fCraft = el("label", "rgx-field rgx-check");
    fCraft.appendChild(el("span", "rgx-label", "Source"));
    var craftLine = el("span", "rgx-check-line");
    var craftBox = el("input");
    craftBox.type = "checkbox";
    craftLine.appendChild(craftBox);
    craftLine.appendChild(el("span", null, "Crafted"));
    fCraft.appendChild(craftLine);
    bar.appendChild(fCraft);

    var cols = el("div", "rgb-cols");
    var formCol = el("div", "rgb-form");
    var itemCol = el("div", "rgb-item");
    cols.appendChild(formCol);
    cols.appendChild(itemCol);
    root.appendChild(cols);

    // ---- the build form --------------------------------------------------
    function renderForm() {
      formCol.innerHTML = "";
      var defs = slotDefs();

      /* Base stats are guaranteed, but most of them still roll inside a band -
         attack damage above all - so they are typeable like everything else.
         This replaces the old roll-quality slider: rather than sliding every
         value together, you enter the numbers your item actually has. */
      var baseSrc = state.cat === "weapon" ? D.weaponBase
        : state.cat === "armour" ? D.armourBase : null;
      var baseStats = baseSrc && baseSrc[state.sub] && baseSrc[state.sub][state.tier];
      if (baseStats && Object.keys(baseStats).length) {
        var bs = el("details", "rgb-slot");
        bs.open = true;
        var bsum = el("summary", "rgb-slot-sum");
        bsum.appendChild(el("span", "rgb-slot-name", "Base stats"));
        bsum.appendChild(el("span", "rgb-slot-count", "always on the item"));
        bs.appendChild(bsum);

        Object.keys(baseStats).sort(function (a, b) {
          return pretty(a).localeCompare(pretty(b));
        }).forEach(function (k) {
          var b = baseStats[k];
          var row = el("div", "rgb-pick");
          row.appendChild(el("span", "rgb-basename", pretty(k)));
          if (b[1] > b[0]) {
            var num = el("input", "rgb-val");
            num.type = "number";
            num.step = "any";
            num.placeholder = fmt(b[0]) + "–" + fmt(b[1]);
            if (state.baseVals[k] !== undefined) num.value = String(state.baseVals[k]);
            num.addEventListener("input", function () {
              var v = parseFloat(this.value);
              if (isNaN(v)) delete state.baseVals[k];
              else state.baseVals[k] = Math.max(b[0], Math.min(b[1], v));
              renderItem();
            });
            num.addEventListener("blur", function () {
              if (state.baseVals[k] !== undefined) this.value = String(state.baseVals[k]);
            });
            row.appendChild(num);
            row.appendChild(el("span", "rgb-band", fmt(b[0]) + "–" + fmt(b[1])));
          } else {
            row.appendChild(el("span", "rgb-band", fmt(b[0]) + " · fixed"));
          }
          bs.appendChild(row);
        });
        formCol.appendChild(bs);
      }

      defs.forEach(function (d) {
        var cur = state.slots[d.key];
        var sec = el("details", "rgb-slot");
        sec.open = true;
        var sum = el("summary", "rgb-slot-sum");
        sum.appendChild(el("span", "rgb-slot-name", d.label));
        sum.appendChild(el("span", "rgb-slot-count",
          d.min === d.max ? d.min + " stat" + (d.min === 1 ? "" : "s")
                          : d.min + "–" + d.max + " stats"));
        sec.appendChild(sum);

        if (d.min !== d.max) {
          var cw = el("label", "rgb-count");
          cw.appendChild(el("span", null, "How many"));
          var cn = el("input");
          cn.type = "number";
          cn.min = String(d.min);
          cn.max = String(d.max);
          cn.value = String(cur.count);
          cn.addEventListener("input", function () {
            var v = parseInt(this.value, 10);
            if (isNaN(v)) return;
            cur.count = Math.max(d.min, Math.min(d.max, v));
            cur.picks = cur.picks.slice(0, cur.count);
            renderForm(); renderItem();
          });
          cw.appendChild(cn);
          sec.appendChild(cw);
        }

        for (var i = 0; i < cur.count; i++) {
          (function (idx) {
            var row = el("div", "rgb-pick");
            var s = el("select");
            s.appendChild(new Option("— any stat —", ""));
            d.stats.forEach(function (st) {
              if (cur.picks.indexOf(st) !== -1 && cur.picks[idx] !== st) return;
              s.appendChild(new Option(pretty(st), st));
            });
            s.value = cur.picks[idx] || "";
            s.addEventListener("change", function () {
              cur.picks[idx] = this.value;
              cur.picks = cur.picks.filter(function (x) { return !!x; });
              renderForm(); renderItem();
            });
            row.appendChild(s);
            var st = cur.picks[idx];
            var b = st && d.bands[st];
            if (b && b[1] > b[0]) {
              /* A stat with a real range can be typed in exactly, so you can
                 reproduce an item you already own and see how lucky it was. */
              var num = el("input", "rgb-val");
              num.type = "number";
              num.step = "any";
              num.placeholder = fmt(b[0]) + "–" + fmt(b[1]);
              cur.vals = cur.vals || {};
              if (cur.vals[st] !== undefined) num.value = String(cur.vals[st]);
              num.addEventListener("input", function () {
                var v = parseFloat(this.value);
                if (isNaN(v)) { delete cur.vals[st]; }
                else { cur.vals[st] = Math.max(b[0], Math.min(b[1], v)); }
                renderItem();
              });
              num.addEventListener("blur", function () {
                if (cur.vals[st] !== undefined) this.value = String(cur.vals[st]);
              });
              row.appendChild(num);
              row.appendChild(el("span", "rgb-band",
                fmt(b[0]) + "–" + fmt(b[1])));
            } else if (b) {
              /* Fixed stats - attack speed, class proficiency - have no range
                 to choose from, so there is nothing to type. */
              row.appendChild(el("span", "rgb-band", fmt(b[0]) + " · fixed"));
            }
            sec.appendChild(row);
          })(i);
        }
        formCol.appendChild(sec);
      });

      // ---- gems ----
      var opts = gemOptions();
      if (opts.length) {
        var gs = el("details", "rgb-slot");
        gs.open = true;
        var gsum = el("summary", "rgb-slot-sum");
        gsum.appendChild(el("span", "rgb-slot-name", "Gems"));
        gsum.appendChild(el("span", "rgb-slot-count",
          "up to " + maxGems() + " sockets"));
        gs.appendChild(gsum);

        state.gems.forEach(function (g, i) {
          var row = el("div", "rgb-pick rgb-gem");
          var socket = el("select");
          opts.forEach(function (o) { socket.appendChild(new Option(o, o)); });
          socket.value = g.socket;
          socket.addEventListener("change", function () {
            g.socket = this.value;
            var f = gemFamilyOf(g.socket);
            if (f) g.family = f;
            g.picks = [];
            renderForm(); renderItem();
          });
          row.appendChild(socket);

          /* An Uncolored socket takes any family, so it needs its own picker. */
          if (g.socket === "Uncolored") {
            var fam = el("select");
            Object.keys(D.gems).forEach(function (f) {
              fam.appendChild(new Option(f, f));
            });
            fam.value = g.family || "Ruby";
            fam.addEventListener("change", function () {
              g.family = this.value; g.picks = []; renderForm(); renderItem();
            });
            row.appendChild(fam);
          }

          var fam2 = g.family || gemFamilyOf(g.socket) || "Ruby";
          var pool = gemPool(fam2);
          var picks = pool ? (pool.picks[0] || 1) : 1;
          for (var pi = 0; pi < picks; pi++) {
            (function (pidx) {
              var st = el("select");
              st.appendChild(new Option("— any stat —", ""));
              if (pool) {
                Object.keys(pool.stats).sort(function (a, b) {
                  return pretty(a).localeCompare(pretty(b));
                }).forEach(function (s) {
                  st.appendChild(new Option(pretty(s), s));
                });
              }
              st.value = (g.picks && g.picks[pidx]) || "";
              st.addEventListener("change", function () {
                g.picks = g.picks || [];
                g.picks[pidx] = this.value;
                renderForm(); renderItem();
              });
              row.appendChild(st);
            })(pi);
          }

          var rm = el("button", "rgo-rm");
          rm.type = "button";
          rm.textContent = "Remove";
          rm.addEventListener("click", function () {
            state.gems.splice(i, 1); renderForm(); renderItem();
          });
          row.appendChild(rm);
          gs.appendChild(row);
        });

        if (state.gems.length < maxGems()) {
          var addG = el("button", "rgo-add-btn");
          addG.type = "button";
          addG.textContent = "+ Socket a gem";
          addG.addEventListener("click", function () {
            var first = opts[0];
            state.gems.push({
              socket: first,
              family: gemFamilyOf(first) || "Ruby",
              picks: []
            });
            renderForm(); renderItem();
          });
          gs.appendChild(addG);
        } else {
          gs.appendChild(el("p", "rgx-note",
            "That is every socket this rarity can roll."));
        }
        formCol.appendChild(gs);
      }
    }

    // ---- the finished item ----------------------------------------------
    function renderItem() {
      itemCol.innerHTML = "";
      var defs = slotDefs();
      var totals = {};

      /* Nothing is averaged or guessed: a stat reads as its range until you
         type a number into it, and then it reads as that number. */
      function add(stat, lo, hi, source) {
        var t = totals[stat] || { lo: 0, hi: 0, parts: [] };
        t.lo += lo; t.hi += hi;
        t.parts.push({ lo: lo, hi: hi, source: source });
        totals[stat] = t;
      }

      // base stats
      var baseSrc = state.cat === "weapon" ? D.weaponBase
        : state.cat === "armour" ? D.armourBase : null;
      var base = baseSrc && baseSrc[state.sub] && baseSrc[state.sub][state.tier];
      if (base) {
        Object.keys(base).forEach(function (k) {
          var exact = state.baseVals[k];
          if (exact !== undefined) add(k, exact, exact, "base");
          else add(k, base[k][0], base[k][1], "base");
        });
      }

      // rolled slots
      defs.forEach(function (d) {
        var cur = state.slots[d.key];
        cur.picks.forEach(function (s) {
          if (!s) return;
          var b = d.bands[s];
          if (!b) return;
          var exact = cur.vals && cur.vals[s];
          if (exact !== undefined) add(s, exact, exact, d.label);
          else add(s, b[0], b[1], d.label);
        });
      });

      // gems
      state.gems.forEach(function (g) {
        var fam = g.family || gemFamilyOf(g.socket);
        var pool = gemPool(fam);
        (g.picks || []).forEach(function (s) {
          if (!s || !pool || !pool.stats[s]) return;
          add(s, pool.stats[s][0], pool.stats[s][1], fam + " gem");
        });
      });

      var card = el("div", "rgb-card");
      var tierName = D.labels[state.tier];
      card.appendChild(el("div", "rgb-card-name",
        tierName + " " + (state.cat === "weapon" || state.cat === "armour"
          ? state.sub
          : (state.cat === "accessory" ? "Accessory" : "Backpack"))));
      card.appendChild(el("div", "rgb-card-tier",
        (state.crafted ? "Crafted" : "Dropped") +
        " · ranges shown until you type a value"));

      var statKeys = Object.keys(totals).sort(function (a, b) {
        return pretty(a).localeCompare(pretty(b));
      });
      if (!statKeys.length) {
        card.appendChild(el("p", "rgx-note", "Pick some stats to build an item."));
      } else {
        var ul = el("div", "rgb-stats");
        statKeys.forEach(function (k) {
          var t = totals[k];
          var r = el("div", "rgb-stat");
          r.appendChild(el("span", "rgb-stat-name", pretty(k)));
          var suffix = PERCENT[k] ? "%" : "";
          var exact = Math.abs(t.hi - t.lo) < 1e-9;
          r.appendChild(el("span", exact ? "rgb-stat-val" : "rgb-stat-val rgb-stat-range",
            exact ? fmt(t.lo) + suffix
                  : fmt(t.lo) + "–" + fmt(t.hi) + suffix));
          if (t.parts.length > 1) {
            r.appendChild(el("span", "rgb-stat-src",
              t.parts.map(function (x) {
                return Math.abs(x.hi - x.lo) < 1e-9 ? fmt(x.lo)
                     : fmt(x.lo) + "–" + fmt(x.hi);
              }).join(" + ")));
          }
          ul.appendChild(r);
        });
        card.appendChild(ul);
      }

      // enchant sockets are always present, worth showing on the card
      socketRows().forEach(function (r) {
        if (r.key !== "enchant") return;
        var most = 0;
        r.options.forEach(function (o) {
          if (o.sockets.length > most) most = o.sockets.length;
        });
        card.appendChild(el("div", "rgb-card-sock",
          "+ " + r.options.map(function (o) { return o.sockets.length; }).join(" or ") +
          " enchant sockets"));
      });
      if (state.gems.length) {
        card.appendChild(el("div", "rgb-card-sock",
          state.gems.map(function (g) { return g.socket; }).join(", ")));
      }
      itemCol.appendChild(card);

      itemCol.appendChild(odds(defs));
    }

    // ---- odds ------------------------------------------------------------
    function odds(defs) {
      var box = el("div", "rgb-odds");
      var rows = [];
      var p = 1;
      var anything = false;

      defs.forEach(function (d) {
        var cur = state.slots[d.key];
        var want = cur.picks.filter(function (s) { return !!s; });
        var countFixed = (d.min !== d.max) ? cur.count : null;
        if (!want.length && countFixed === null) return;
        if (!want.length && countFixed !== null) {
          // only the count is constrained
          var pc = countProb(d.nodes, d.min, d.max, countFixed);
          if (pc < 0.999) {
            rows.push([d.label + " — exactly " + countFixed, pc]);
            p *= pc; anything = true;
          }
          return;
        }
        var ps = slotProb(d.nodes, d.min, d.max, want, countFixed);
        /* A typed value is treated as "rolled at least this well" - asking for
           one exact decimal has probability zero on a continuous range. */
        want.forEach(function (st) {
          var v = cur.vals && cur.vals[st];
          var b = d.bands[st];
          if (v === undefined || !b || b[1] <= b[0]) return;
          ps *= atLeastProb(v, b[0], b[1]);
        });
        rows.push([d.label + " — " +
          want.map(function (st) {
            var v = cur.vals && cur.vals[st];
            return pretty(st) + (v !== undefined ? " ≥ " + fmt(v) : "");
          }).join(", ") +
          (countFixed !== null
            ? " (out of " + countFixed + " rolled)" : ""), ps]);
        p *= ps;
        anything = true;
      });

      /* A typed base stat is a real roll requirement as well. */
      var bSrc = state.cat === "weapon" ? D.weaponBase
        : state.cat === "armour" ? D.armourBase : null;
      var bStats = bSrc && bSrc[state.sub] && bSrc[state.sub][state.tier];
      if (bStats) {
        Object.keys(state.baseVals).forEach(function (k) {
          var b = bStats[k];
          var v = state.baseVals[k];
          if (!b || b[1] <= b[0] || v === undefined) return;
          var pb = atLeastProb(v, b[0], b[1]);
          rows.push(["Base — " + pretty(k) + " ≥ " + fmt(v), pb]);
          p *= pb;
          anything = true;
        });
      }

      if (!anything) {
        box.appendChild(el("p", "rgx-note",
          "Choose a stat in any slot and the odds of that item appear here."));
        return box;
      }

      var head = el("div", "rgo-head");
      head.appendChild(el("div", "rgo-big", pct(p)));
      var what = (state.cat === "weapon" || state.cat === "armour")
        ? state.sub
        : (state.cat === "accessory" ? "accessory" : "backpack");
      head.appendChild(el("div", "rgo-sub", oneIn(p) + " — the chance a " +
        (state.crafted ? "crafted" : "dropped") + " " + D.labels[state.tier] +
        " " + what + " comes out like this"));
      box.appendChild(head);

      var tbl = el("table", "rgo-table");
      var tb = el("tbody");
      rows.forEach(function (r) {
        var tr = el("tr");
        tr.appendChild(el("td", null, r[0]));
        tr.appendChild(el("td", "rgo-num", pct(r[1])));
        tb.appendChild(tr);
      });
      tbl.appendChild(tb);
      box.appendChild(tbl);

      // gems are quoted separately - you socket those yourself
      var gemRows = [];
      state.gems.forEach(function (g) {
        var picks = (g.picks || []).filter(function (s) { return !!s; });
        if (!picks.length) return;
        var fam = g.family || gemFamilyOf(g.socket);
        var pool = gemPool(fam);
        if (!pool) return;
        var n = Object.keys(pool.stats).length;
        var take = pool.picks[0] || 1;
        /* Equal chances inside a gem pool, so each stat is an even draw and
           the gem takes `take` of them. */
        var pg = 1;
        for (var i = 0; i < picks.length; i++) {
          pg *= (take - i) / (n - i);
        }
        gemRows.push([fam + " gem — " + picks.map(pretty).join(", "), pg]);
      });
      if (gemRows.length) {
        var gp = 1;
        gemRows.forEach(function (r) { gp *= r[1]; });
        var gbox = el("div", "rgb-gemodds");
        gbox.appendChild(el("strong", null, "The gems, rolled separately: " + pct(gp)));
        var gt = el("table", "rgo-table");
        var gtb = el("tbody");
        gemRows.forEach(function (r) {
          var tr = el("tr");
          tr.appendChild(el("td", null, r[0]));
          tr.appendChild(el("td", "rgo-num", pct(r[1])));
          gtb.appendChild(tr);
        });
        gt.appendChild(gtb);
        gbox.appendChild(gt);
        gbox.appendChild(el("p", "rgx-note",
          "You socket gems yourself, so this is not part of the item's own roll " +
          "— it is the chance each gem rolls the stat you picked. Sockets to " +
          "put them in are a separate roll again."));
        box.appendChild(gbox);
      }

      box.appendChild(el("p", "rgx-note",
        "Every figure here is calculated exactly, not sampled, so a very rare " +
        "item reads as a very small number rather than rounding to zero. The " +
        "slots multiply together because they roll independently of each other."));
      return box;
    }

    // ---- wiring ----------------------------------------------------------
    function subOptions() {
      if (state.cat === "weapon") return Object.keys(D.weaponBase);
      if (state.cat === "armour") return Object.keys(D.armourBase);
      return null;
    }

    function sync() {
      var opts = subOptions();
      if (!opts) {
        fSub.wrap.style.display = "none";
      } else {
        fSub.wrap.style.display = "";
        fSub.sel.innerHTML = "";
        opts.forEach(function (o) { fSub.sel.appendChild(new Option(o, o)); });
        if (opts.indexOf(state.sub) === -1) state.sub = opts[0];
        fSub.sel.value = state.sub;
        fSub.wrap.querySelector(".rgx-label").textContent =
          state.cat === "weapon" ? "Weapon" : "Slot";
      }
      fTier.sel.innerHTML = "";
      D.tiers.forEach(function (t) {
        fTier.sel.appendChild(new Option(D.labels[t], t));
      });
      fTier.sel.value = state.tier;
      var craftable = state.cat === "weapon" || state.cat === "armour";
      fCraft.style.display = craftable ? "" : "none";
      if (!craftable) state.crafted = false;
      craftBox.checked = state.crafted;
      ensureSlots();
    }

    function redraw() { sync(); renderForm(); renderItem(); }

    fCat.sel.addEventListener("change", function () { state.cat = this.value; redraw(); });
    fSub.sel.addEventListener("change", function () { state.sub = this.value; redraw(); });
    fTier.sel.addEventListener("change", function () { state.tier = this.value; redraw(); });
    craftBox.addEventListener("change", function () { state.crafted = this.checked; redraw(); });
    redraw();
  }

  function init() {
    var root = document.getElementById("gear-builder");
    if (!root) return;
    var D = window.RUNARIA_GEAR;
    if (!D) { root.textContent = "Stat data failed to load."; return; }
    (D.percentStats || []).forEach(function (s) { PERCENT[s] = true; });
    try { build(root, D); }
    catch (e) { root.textContent = "Item builder failed to render: " + e.message; }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
