/* Runaria gear stat explorer.
   Renders into #gear-explorer. Data comes from gear-data.js (window.RUNARIA_GEAR),
   which is generated from the live MMOItems configs. */
(function () {
  "use strict";

  var NAME_FIX = {
    "pve-damage": "PvE Damage",
    "pvp-damage": "PvP Damage",
    "pve-damage-reduction": "PvE Damage Reduction",
    "pvp-damage-reduction": "PvP Damage Reduction",
    "max-hp": "Max Health"
  };

  function pretty(k) {
    if (NAME_FIX[k]) return NAME_FIX[k];
    return k.split("-").map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
  }

  function fmt(n) {
    if (n === null || n === undefined) return "-";
    var a = Math.abs(n);
    if (a >= 100) return String(Math.round(n));
    if (a >= 10) return (Math.round(n * 10) / 10).toString();
    if (a >= 1) return (Math.round(n * 100) / 100).toString();
    return (Math.round(n * 1000) / 1000).toString();
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  /* The data ships ordered nodes ([chance, stat, lo, hi]) because the odds
     calculator replays the real roll. The explorer only needs "what range does
     this stat have", so fold the nodes down to a {stat: [lo, hi]} map once. */
  function tiersOf(set) {
    if (set._tiers) return set._tiers;
    var out = {};
    Object.keys(set.nodes || {}).forEach(function (t) {
      var m = {};
      set.nodes[t].forEach(function (n) { m[n[1]] = [n[2], n[3]]; });
      out[t] = m;
    });
    set._tiers = out;
    return out;
  }

  function build(root, D) {
    root.innerHTML = "";
    root.classList.add("rgx");

    var state = {
      cat: "weapon",
      sub: "Sword",
      tier: "legendary",
      quality: "mythic",
      roll: 50,
      filter: "",
      crafted: false,
      everyStat: false
    };

    // ---- controls -------------------------------------------------------
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
     ["backpack", "Backpacks"], ["gem", "Gemstones"]].forEach(function (o) {
      fCat.sel.appendChild(new Option(o[1], o[0]));
    });

    var fSub = field("Kind");
    var fTier = field("Rarity");

    var fFilter = el("label", "rgx-field rgx-field--grow rgx-field--search");
    fFilter.appendChild(el("span", "rgx-label", "⌕ Looking for one stat? Type it here"));
    var filterInput = el("input");
    filterInput.type = "search";
    filterInput.placeholder = "crit, health, mana, lifesteal…";
    fFilter.appendChild(filterInput);
    bar.appendChild(fFilter);

    var fCraft = el("label", "rgx-field rgx-check");
    fCraft.appendChild(el("span", "rgx-label", "Source"));
    var craftLine = el("span", "rgx-check-line");
    var craftBox = el("input");
    craftBox.type = "checkbox";
    craftLine.appendChild(craftBox);
    craftLine.appendChild(el("span", null, "Crafted"));
    fCraft.appendChild(craftLine);
    bar.appendChild(fCraft);

    var fEvery = el("label", "rgx-field rgx-check");
    fEvery.appendChild(el("span", "rgx-label", "View"));
    var everyLine = el("span", "rgx-check-line");
    var everyBox = el("input");
    everyBox.type = "checkbox";
    everyLine.appendChild(everyBox);
    everyLine.appendChild(el("span", null, "List every stat"));
    fEvery.appendChild(everyLine);
    bar.appendChild(fEvery);

    // ---- roll slider ----------------------------------------------------
    var rollWrap = el("div", "rgx-roll");
    var rollTop = el("div", "rgx-roll-top");
    rollTop.appendChild(el("span", "rgx-roll-title", "Roll quality"));
    var rollVal = el("span", "rgx-roll-val", "50% — mid roll");
    rollTop.appendChild(rollVal);
    rollWrap.appendChild(rollTop);
    var roll = el("input");
    roll.type = "range";
    roll.min = "0";
    roll.max = "100";
    roll.value = "50";
    roll.className = "rgx-range";
    rollWrap.appendChild(roll);
    var rollHint = el("p", "rgx-hint",
      "Drag to see where a roll lands. 0% is the floor of every range, 100% the ceiling.");
    rollWrap.appendChild(rollHint);
    root.appendChild(rollWrap);

    var out = el("div", "rgx-out");
    root.appendChild(out);

    /* Rows that move with the roll slider. Dragging must NOT re-render: a
       rebuild resets every <details> back to its default, which silently
       reopens sections the reader had folded away. */
    var live = [];

    function trackRoll(range, span, valueEl, knobEl) {
      live.push({ range: range, span: span, value: valueEl, knob: knobEl });
    }

    function updateRoll() {
      var f = state.roll / 100;
      for (var i = 0; i < live.length; i++) {
        var r = live[i];
        var lo = r.range[0], hi = r.range[1];
        r.value.textContent = fmt(lo + (hi - lo) * f);
        if (r.knob) {
          var w = r.span[1] - r.span[0];
          var left = ((lo - r.span[0]) / w) * 100;
          var width = ((hi - lo) / w) * 100;
          r.knob.style.left = (left + width * f) + "%";
        }
      }
    }

    /* Remembers which sections the reader opened or closed, so changing
       rarity or weapon does not undo it either. */
    var openState = {};

    // ---- data helpers ---------------------------------------------------
    function subOptions() {
      if (state.cat === "weapon") return Object.keys(D.weaponBase);
      if (state.cat === "armour") return Object.keys(D.armourBase);
      if (state.cat === "gem") return Object.keys(D.gems);
      return null;
    }

    function tierOptions() {
      if (state.cat === "gem") return D.gemQualities;
      return D.tiers;
    }

    function tierLabel(t) {
      return state.cat === "gem" ? D.gemQualityLabels[t] : D.labels[t];
    }

    /* Widest span for a stat across every rarity, so the bars share a scale
       and you can see a tier's slice of the whole ladder. */
    function fullSpan(stat, groups) {
      var lo = Infinity, hi = -Infinity;
      groups.forEach(function (g) {
        Object.keys(g).forEach(function (t) {
          var r = g[t] && g[t][stat];
          if (!r) return;
          if (r[0] < lo) lo = r[0];
          if (r[1] > hi) hi = r[1];
        });
      });
      if (lo === Infinity) return null;
      if (hi === lo) hi = lo + 1;
      return [Math.min(0, lo), hi];
    }

    function statRow(stat, range, span) {
      var row = el("div", "rgx-row");
      var head = el("div", "rgx-row-head");
      head.appendChild(el("span", "rgx-stat", pretty(stat)));
      var at = range[0] + (range[1] - range[0]) * (state.roll / 100);
      var v = el("span", "rgx-at");
      var strong = el("strong", null, fmt(at));
      v.appendChild(strong);
      head.appendChild(v);
      row.appendChild(head);

      var track = el("div", "rgx-track");
      var w = span[1] - span[0];
      var left = ((range[0] - span[0]) / w) * 100;
      var width = ((range[1] - range[0]) / w) * 100;
      var fill = el("div", "rgx-fill");
      fill.style.left = left + "%";
      fill.style.width = Math.max(width, 0.6) + "%";
      track.appendChild(fill);
      var knob = el("div", "rgx-knob");
      knob.style.left = (left + width * (state.roll / 100)) + "%";
      track.appendChild(knob);
      row.appendChild(track);
      trackRoll(range, span, strong, knob);

      var ends = el("div", "rgx-ends");
      ends.appendChild(el("span", null, "min " + fmt(range[0])));
      ends.appendChild(el("span", null, "max " + fmt(range[1])));
      row.appendChild(ends);
      return row;
    }

    /* Sections are <details> so the rarely-relevant slots (the bonus rolls,
       armour's "useful" prefix) stay folded away until asked for. */
    function section(title, note, delta, open, key) {
      var s = el("details", "rgx-sec");
      if (key && Object.prototype.hasOwnProperty.call(openState, key)) {
        s.open = openState[key];
      } else if (open !== false) {
        s.open = true;
      }
      if (key) {
        s.addEventListener("toggle", function () { openState[key] = s.open; });
      }
      var sum = el("summary", "rgx-sum");
      sum.appendChild(el("span", "rgx-sum-title", title));
      if (delta) sum.appendChild(el("span", "rgx-delta", delta));
      if (note) sum.appendChild(el("span", "rgx-sum-note", note));
      s.appendChild(sum);
      return s;
    }

    /* Which stat represents a cluster in the collapsed summary - prefer one a
       player recognises over whatever happens to sort first alphabetically. */
    /* Slots folded away by default. */
    var MINOR = { bmain: true, baffix: true, useful: true };

    var FACE = ["weapon-damage", "attack-damage", "pve-damage", "physical-damage",
      "critical-strike-chance", "max-health", "defense", "armor", "magic-damage",
      "damage-reduction", "block-power", "max-mana"];

    function faceOf(members) {
      for (var i = 0; i < FACE.length; i++) {
        if (members.indexOf(FACE[i]) !== -1) return FACE[i];
      }
      return members[0];
    }

    function countText(c) {
      if (!c) return null;
      return c[0] === c[1] ? String(c[0]) : c[0] + "–" + c[1];
    }

    /* A socket group is a weighted pick of gem-socket lists, so show it as
       "what you can get and how likely", not as a numeric range. */
    function socketSection(rows, craftRows) {
      var sec = section("Sockets — " + tierLabel(state.tier) +
        (state.crafted ? " (crafted)" : ""), null, null, true, state.cat + ":sockets");

      var tbl = el("div", "rgx-sock");
      rows.forEach(function (r) {
        var line = el("div", "rgx-sock-row");
        var left = el("div", "rgx-sock-name");
        left.appendChild(el("strong", null, r.label));
        var howMany = countText([r.min, r.max]);
        left.appendChild(el("span", "rgx-sock-count",
          r.min === r.max ? "always " + r.min : howMany + " of these"));
        line.appendChild(left);

        var opts = el("div", "rgx-sock-opts");
        r.options.forEach(function (o) {
          var pill = el("span", "rgx-pill");
          var n = o.sockets.length;
          var name = o.sockets[0];
          pill.textContent = (n > 1 ? n + "x " : "") + name;
          if (o.chance !== null && o.chance !== undefined) {
            pill.appendChild(el("em", null, " " + Math.round(o.chance * 100) + "%"));
          }
          opts.appendChild(pill);
        });
        line.appendChild(opts);
        tbl.appendChild(line);
      });
      sec.appendChild(tbl);
      return sec;
    }

    function matches(stat) {
      if (!state.filter) return true;
      return pretty(stat).toLowerCase().indexOf(state.filter.toLowerCase()) !== -1;
    }

    /* Most stats in a pool share one identical range - 28 of 34 at Legendary.
       Rendering them as 28 identical bars is all scroll and no information, so
       collapse each distinct range into one row and list its members as chips. */
    function groupedRow(range, members, span) {
      var row = el("div", "rgx-row rgx-row--group");
      var head = el("div", "rgx-row-head");
      var at = range[0] + (range[1] - range[0]) * (state.roll / 100);
      head.appendChild(el("span", "rgx-stat", fmt(range[0]) + " – " + fmt(range[1])));
      var v = el("span", "rgx-at");
      var strong = el("strong", null, fmt(at));
      v.appendChild(strong);
      head.appendChild(v);
      row.appendChild(head);

      var w = span[1] - span[0];
      var track = el("div", "rgx-track");
      var left = ((range[0] - span[0]) / w) * 100;
      var width = ((range[1] - range[0]) / w) * 100;
      var fill = el("div", "rgx-fill");
      fill.style.left = left + "%";
      fill.style.width = Math.max(width, 0.6) + "%";
      track.appendChild(fill);
      var knob = el("div", "rgx-knob");
      knob.style.left = (left + width * (state.roll / 100)) + "%";
      track.appendChild(knob);
      row.appendChild(track);
      trackRoll(range, span, strong, knob);

      if (members.length === 1) {
        var one = el("div", "rgx-chips");
        one.appendChild(el("span", "rgx-chip", pretty(members[0])));
        row.appendChild(one);
        return row;
      }

      /* One recognisable stat up front, the other 27 behind a click. */
      var face = faceOf(members);
      var rest = members.filter(function (m) { return m !== face; });
      var more = el("details", "rgx-more");
      var sum = el("summary");
      sum.appendChild(el("span", "rgx-chip-face", pretty(face)));
      sum.appendChild(el("span", "rgx-chip-count",
        "and " + rest.length + " more at this range"));
      more.appendChild(sum);
      var chips = el("div", "rgx-chips");
      rest.forEach(function (m) {
        chips.appendChild(el("span", "rgx-chip", pretty(m)));
      });
      more.appendChild(chips);
      row.appendChild(more);
      return row;
    }

    function renderPool(sec, stats, allGroups, emptyMsg) {
      var keys = Object.keys(stats).filter(matches).sort(function (a, b) {
        return pretty(a).localeCompare(pretty(b));
      });
      if (!keys.length) {
        sec.appendChild(el("p", "rgx-empty", emptyMsg || "No stat matches that filter."));
        return;
      }

      /* Filtering means you are hunting one stat, so show them individually. */
      if (state.everyStat || state.filter) {
        keys.forEach(function (k) {
          var span = fullSpan(k, allGroups) || [0, stats[k][1] || 1];
          sec.appendChild(statRow(k, stats[k], span));
        });
        return;
      }

      var byRange = {};
      var order = [];
      keys.forEach(function (k) {
        var r = stats[k];
        var id = r[0] + "|" + r[1];
        if (!byRange[id]) {
          byRange[id] = { range: r, members: [] };
          order.push(id);
        }
        byRange[id].members.push(k);
      });

      order.sort(function (a, b) {
        var x = byRange[a].range, y = byRange[b].range;
        if (y[1] !== x[1]) return y[1] - x[1];
        return byRange[b].members.length - byRange[a].members.length;
      });

      order.forEach(function (id) {
        var g = byRange[id];
        var span = fullSpan(g.members[0], allGroups) || [0, g.range[1] || 1];
        sec.appendChild(groupedRow(g.range, g.members, span));
      });
    }

    /* Crafted vs dropped is mostly a difference in slot COUNTS, odds and
       sockets, not in the stat ranges, so spell it out up front. */
    function craftSummary(t) {
      var slots = D.rolled[state.cat] || {};
      var bits = [];
      Object.keys(slots).forEach(function (key) {
        var slot = slots[key];
        if (!slot.craft || !slot.drop) return;
        var a = countText(slot.drop.count && slot.drop.count[t]);
        var b = countText(slot.craft.count && slot.craft.count[t]);
        if (a && b && a !== b) {
          bits.push(slot.label + " " + a + " → " + b);
          return;
        }
        /* Same count, better odds: some slots keep 0-1 but double the
           per-node chance, which the count alone would hide. */
        var pd = slot.drop.odds && slot.drop.odds[t];
        var pc = slot.craft.odds && slot.craft.odds[t];
        if (pd && pc && pc - pd > 0.01) {
          bits.push(slot.label + " " + Math.round(pd * 100) + "% → " +
            Math.round(pc * 100) + "% likely");
        }
      });
      var sk = D.sockets && D.sockets[t];
      if (sk && sk.craft && sk.drop) {
        bits.push("one coloured gem socket guaranteed instead of chanced");
      }
      var box = el("div", "rgx-summary");
      box.appendChild(el("strong", null, "What crafting changes: "));
      if (!bits.length) {
        box.appendChild(document.createTextNode(
          "nothing at this rarity — the same slots and the same ranges."));
      } else {
        box.appendChild(document.createTextNode(bits.join("; ") + "."));
        box.appendChild(el("span", "rgx-summary-sub",
          "Stat ranges themselves are identical — crafting gets you more rolls, not bigger ones."));
      }
      return box;
    }

    // ---- render ---------------------------------------------------------
    function render() {
      out.innerHTML = "";
      live = [];
      var t = state.tier;

      if (state.crafted && (state.cat === "weapon" || state.cat === "armour")) {
        out.appendChild(craftSummary(t));
      }

      if (state.cat === "gem") {
        var fam = D.gems[state.sub];
        var q = fam && fam[t];
        if (!q) return;
        var picks = q.picks || [1, 1];
        var pickTxt = picks[0] === picks[1]
          ? "Rolls " + picks[0] + " stat" + (picks[0] === 1 ? "" : "s") + " from this pool."
          : "Rolls " + picks[0] + "–" + picks[1] + " stats from this pool.";
        var s1 = section(state.sub + " — " + tierLabel(t), pickTxt + " Every stat in the pool is equally likely.");
        var allQ = D.gemQualities.map(function (qq) {
          var o = {};
          Object.keys(D.gems).forEach(function (f) {
            if (D.gems[f][qq]) o[f + qq] = D.gems[f][qq].stats;
          });
          return o;
        }).map(function (o) { return o; });
        // flatten to {tierKey: stats} shape for fullSpan
        var gGroups = [{}];
        D.gemQualities.forEach(function (qq) {
          var st = fam[qq] && fam[qq].stats;
          if (st) gGroups[0][qq] = st;
        });
        renderPool(s1, q.stats, gGroups);
        out.appendChild(s1);

        var eStats = D.empowered[t];
        if (eStats) {
          var chance = D.empoweredChance[t];
          var s2 = section("Empowered bonus stat",
            "About " + chance + "% of " + tierLabel(t) + " gems roll this. It is a second stat, drawn from the full pool regardless of the gem's colour.");
          var eGroups = [D.empowered];
          renderPool(s2, eStats, eGroups);
          out.appendChild(s2);
        }
        return;
      }

      if (state.cat === "weapon" || state.cat === "armour") {
        var src = state.cat === "weapon" ? D.weaponBase : D.armourBase;
        var base = src[state.sub] && src[state.sub][t];
        if (base && Object.keys(base).length) {
          var dur = D.durability[t];
          var s0 = section("Base stats — " + state.sub + ", " + tierLabel(t),
            "Always present on this item." + (dur ? " Durability " + dur + "." : ""),
            null, true, state.cat + ":base");
          renderPool(s0, base, [src[state.sub]]);
          out.appendChild(s0);
        }
      }

      var slots = D.rolled[state.cat] || {};
      Object.keys(slots).forEach(function (key) {
        var slot = slots[key];
        var wantCraft = state.crafted && slot.craft;
        var set = wantCraft ? slot.craft : slot.drop;
        if (!set) return;
        var stats = tiersOf(set)[t];
        if (!stats) return;

        var c = set.count && set.count[t];
        var p = set.odds && set.odds[t];
        var note = "";
        if (c) {
          note = c[0] === c[1]
            ? "Exactly " + c[0] + " of these."
            : c[0] + "–" + c[1] + " of these.";
          if (c[0] === 0) {
            note += p
              ? " Roughly " + Math.round(p * 100) + "% of items get one."
              : " Never guaranteed.";
          }
        }
        if (state.crafted && !slot.craft) {
          note += " Crafting does not change this slot.";
        }

        /* Crafted and dropped share identical stat ranges almost everywhere -
           what actually changes is how MANY you get. Surface that as a badge,
           otherwise ticking Crafted looks like it does nothing. */
        var delta = null;
        if (wantCraft) {
          var dropC = slot.drop && slot.drop.count && slot.drop.count[t];
          var a = countText(dropC), b = countText(c);
          if (a && b && a !== b) delta = a + " → " + b;
        }

        var title = slot.label + " — " + tierLabel(t) +
          (wantCraft ? " (crafted)" : "");
        /* The bonus rolls and armour's "useful" prefix are occasional extras,
           so fold them away by default; searching reopens everything. */
        var minor = MINOR[key] === true;
        var sec = section(title, note, delta, !minor || !!state.filter, state.cat + ":" + key);
        renderPool(sec, stats, [tiersOf(set)]);
        out.appendChild(sec);
      });

      if (state.cat === "weapon" || state.cat === "armour") {
        var sk = D.sockets && D.sockets[t];
        var rows = sk && (state.crafted ? sk.craft : sk.drop);
        if (rows && !state.filter) out.appendChild(socketSection(rows));
      }

      if (!out.children.length) {
        out.appendChild(el("p", "rgx-empty", "Nothing rolls in this combination."));
      }
    }

    function syncSubs() {
      var opts = subOptions();
      if (!opts) {
        fSub.wrap.style.display = "none";
      } else {
        fSub.wrap.style.display = "";
        fSub.sel.innerHTML = "";
        opts.forEach(function (o) { fSub.sel.appendChild(new Option(o, o)); });
        if (opts.indexOf(state.sub) === -1) state.sub = opts[0];
        fSub.sel.value = state.sub;
      }
      var tiers = tierOptions();
      fTier.sel.innerHTML = "";
      tiers.forEach(function (t) { fTier.sel.appendChild(new Option(tierLabel(t), t)); });
      if (tiers.indexOf(state.tier) === -1) state.tier = tiers[tiers.length - 1];
      fTier.sel.value = state.tier;
      fTier.wrap.querySelector(".rgx-label").textContent =
        state.cat === "gem" ? "Quality" : "Rarity";
      fSub.wrap.querySelector(".rgx-label").textContent =
        state.cat === "weapon" ? "Weapon" : state.cat === "armour" ? "Slot" : "Family";

      /* Only weapons and armour have crafted variants. Accessories and
         backpacks are drop-only, and gems are not gear. */
      var craftable = state.cat === "weapon" || state.cat === "armour";
      fCraft.style.display = craftable ? "" : "none";
      if (!craftable) state.crafted = false;
      craftBox.checked = state.crafted;
    }

    fCat.sel.addEventListener("change", function () {
      state.cat = this.value;
      if (state.cat === "gem") state.tier = "mythic";
      else if (D.tiers.indexOf(state.tier) === -1) state.tier = "legendary";
      syncSubs();
      render();
    });
    fSub.sel.addEventListener("change", function () { state.sub = this.value; render(); });
    fTier.sel.addEventListener("change", function () { state.tier = this.value; render(); });
    filterInput.addEventListener("input", function () { state.filter = this.value.trim(); render(); });
    craftBox.addEventListener("change", function () { state.crafted = this.checked; render(); });
    everyBox.addEventListener("change", function () { state.everyStat = this.checked; render(); });
    roll.addEventListener("input", function () {
      state.roll = Number(this.value);
      var word = state.roll === 100 ? "perfect roll"
        : state.roll >= 85 ? "high roll"
        : state.roll >= 60 ? "above average"
        : state.roll > 40 ? "mid roll"
        : state.roll > 15 ? "below average"
        : state.roll === 0 ? "floor" : "low roll";
      rollVal.textContent = state.roll + "% — " + word;
      updateRoll();
    });

    syncSubs();
    render();
  }

  function init() {
    var root = document.getElementById("gear-explorer");
    if (!root) return;
    var D = window.RUNARIA_GEAR;
    if (!D) {
      root.textContent = "Stat data failed to load.";
      return;
    }
    try {
      build(root, D);
    } catch (e) {
      root.textContent = "Stat explorer failed to render: " + e.message;
    }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
