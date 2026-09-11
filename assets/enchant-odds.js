/* Runaria enchant odds selector.
   Renders into #enchant-odds. Data from enchant-data.js.

   Pick an enchant and a Gemforging level, get the chance of every level it
   can roll. Recomputed live from the same curve the server uses, rather than
   read out of a fixed table, so the slider can land on any level.

   Server algorithm, mirrored exactly:
     maxRollable = floor(1 + min(1, prof/unlockCap) * (span - 1)), clamped [1,max]
       span = enchant's own max        ("per-enchant")
            = globalMaxLevel           ("global")
     low tier  (max <= lowMaxAffected): factor = base + slope*(prof/maxProf)
                                                 - penalty*(max-1)
     high tier (max >= highMinAffected): factor = lerp(atCap, atMax,
                                                 (prof-cap)/(maxProf-cap))
     weight[lv] = exp(factor * (lv-1)) for lv <= maxRollable, else 0; normalise. */
(function () {
  "use strict";

  var ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII",
               "IX", "X"];

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  function pct(v) {
    if (v <= 0) return "0%";
    if (v >= 99.95) return "100%";
    if (v < 0.1) return v.toFixed(2) + "%";
    if (v < 10) return v.toFixed(1) + "%";
    return Math.round(v) + "%";
  }

  function build(root, D) {
    root.innerHTML = "";
    root.classList.add("rge");

    var state = { id: null, prof: 75 };

    function maxRollable(prof, mx) {
      if (mx <= 1) return 1;
      if (prof <= 0) return 1;
      var progress = Math.min(1, prof / D.unlockCap);
      var span = (D.unlockScale === "global") ? D.globalMaxLevel : mx;
      return Math.max(1, Math.min(Math.floor(1 + progress * (span - 1)), mx));
    }

    function factor(prof, mx) {
      if (mx >= D.high.minAffected) {
        var p = Math.max(D.unlockCap, Math.min(prof, D.maxProfessionLevel));
        var denom = D.maxProfessionLevel - D.unlockCap;
        var t = denom === 0 ? 0 : (p - D.unlockCap) / denom;
        return D.high.atCap + (D.high.atMax - D.high.atCap) * t;
      }
      return D.low.baseFactor + D.low.slope * (prof / D.maxProfessionLevel)
        - D.low.penalty * Math.max(0, mx - 1);
    }

    function dist(prof, mx) {
      var mr = maxRollable(prof, mx);
      var f = factor(prof, mx);
      var w = [], tot = 0, lv;
      for (lv = 1; lv <= mx; lv++) {
        var x = (lv <= mr) ? Math.exp(f * (lv - 1)) : 0;
        w.push(x);
        tot += x;
      }
      return w.map(function (x) { return tot > 0 ? (x / tot) * 100 : 0; });
    }

    // ---- controls -------------------------------------------------------
    var bar = el("div", "rgx-bar");
    root.appendChild(bar);

    var fEnch = el("label", "rgx-field rgx-field--grow");
    fEnch.appendChild(el("span", "rgx-label", "Enchantment"));
    var sel = el("select");
    D.stones.forEach(function (s) {
      var o = new Option(s.name + "  (max " + ROMAN[s.max] + ")", s.id);
      sel.appendChild(o);
    });
    fEnch.appendChild(sel);
    bar.appendChild(fEnch);

    var profWrap = el("div", "rgx-roll");
    var top = el("div", "rgx-roll-top");
    top.appendChild(el("span", "rgx-roll-title", "Gemforging level"));
    var profVal = el("span", "rgx-roll-val", "75");
    top.appendChild(profVal);
    profWrap.appendChild(top);
    var slider = el("input");
    slider.type = "range";
    slider.min = "1";
    slider.max = String(D.maxProfessionLevel);
    slider.value = "75";
    slider.className = "rgx-range";
    profWrap.appendChild(slider);
    root.appendChild(profWrap);

    var out = el("div", "rge-out");
    root.appendChild(out);

    function stone() {
      for (var i = 0; i < D.stones.length; i++) {
        if (D.stones[i].id === state.id) return D.stones[i];
      }
      return D.stones[0];
    }

    function render() {
      out.innerHTML = "";
      var s = stone();
      var mx = s.max;
      var probs = dist(state.prof, mx);
      var mr = maxRollable(state.prof, mx);

      if (mx === 1) {
        out.appendChild(el("p", "rge-single",
          s.name + " only has one level, so it always rolls " + ROMAN[1] +
          " no matter your Gemforging level."));
        return;
      }

      var head = el("div", "rge-head");
      head.appendChild(el("div", "rge-big", pct(probs[mx - 1])));
      head.appendChild(el("div", "rge-sub",
        "chance of " + s.name + " " + ROMAN[mx] +
        " at Gemforging " + state.prof));
      out.appendChild(head);

      var list = el("div", "rge-levels");
      for (var lv = 1; lv <= mx; lv++) {
        var v = probs[lv - 1];
        var row = el("div", "rge-row" + (lv > mr ? " rge-row--locked" : ""));
        row.appendChild(el("span", "rge-lv", ROMAN[lv]));
        var track = el("div", "rge-track");
        var fill = el("div", "rge-fill");
        fill.style.width = Math.max(v, 0) + "%";
        track.appendChild(fill);
        row.appendChild(track);
        row.appendChild(el("span", "rge-pct",
          lv > mr ? "locked" : pct(v)));
        list.appendChild(row);
      }
      out.appendChild(list);

      if (mr < mx) {
        var need = null;
        for (var p = 1; p <= D.maxProfessionLevel; p++) {
          if (maxRollable(p, mx) >= mx) { need = p; break; }
        }
        out.appendChild(el("p", "rgx-note",
          "Levels above " + ROMAN[mr] + " are not unlocked yet. " +
          (need ? ROMAN[mx] + " unlocks at Gemforging " + need + "." : "")));
      }
    }

    sel.addEventListener("change", function () {
      state.id = this.value;
      render();
    });
    slider.addEventListener("input", function () {
      state.prof = Number(this.value);
      profVal.textContent = String(state.prof);
      render();
    });

    var pref = null;
    for (var i = 0; i < D.stones.length; i++) {
      if (D.stones[i].max >= 6) { pref = D.stones[i]; break; }
    }
    state.id = (pref || D.stones[0]).id;
    sel.value = state.id;
    render();
  }

  function init() {
    var root = document.getElementById("enchant-odds");
    if (!root) return;
    var D = window.RUNARIA_ENCHANTS;
    if (!D) { root.textContent = "Enchant data failed to load."; return; }
    try { build(root, D); }
    catch (e) { root.textContent = "Enchant selector failed: " + e.message; }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
