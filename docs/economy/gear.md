# Gear, Rarities & Stats

Every weapon, armour piece and accessory in Runaria is built the same way: a **base item** that always has the same stats, plus a handful of **rolled stats** drawn at the moment the item is created. Two Legendary Swords are never identical.

This page is the complete reference — every rarity, every stat band, every socket, and what each prefix and suffix on an item actually means.

!!! tip "Want the exact numbers?"
    The **[Stat Explorer](stat-explorer.md)** lists every stat each item type and rarity can roll, with its exact range, a crafted-vs-dropped comparison and a roll-quality slider.

    The **[Item Builder](builder.md)** goes the other way: build an item slot by slot, gems included, and it works out how likely that item is.

    This page explains what the numbers mean; those two are where you look them up.

---

!!! info "The + tiers are half-steps, not a separate track"
    A `+` tier is its parent rarity with bigger numbers — same colour, same glow, same number of stat slots and sockets. Only the magnitudes grow, by roughly **30% of the gap to the next full rarity**. Legendary+ has no tier above it, so it is simply **Legendary x 1.3**.

    Outside the ladder entirely: **Unique** items (the **Sakura** set and weapons) are hand-built one-offs that roll nothing — every Unique is identical every time.

---

## The most important thing on this page

**Gear splits into two eras, and the break is between Uncommon and Uncommon+.**

| | Common → **Uncommon** | **Uncommon+** → Legendary+ |
| --- | --- | --- |
| Armour gives | A trickle of Armor and Defense | Armor, Defense, **Health**, **Resilience**, a **Resistance**, **Class Proficiency** |
| Look | Vanilla armour textures | Fully custom 3D models |
| Damage scale | Gentle | Jumps roughly **2.5x** at Uncommon+, then climbs steeply |
| Used by | Pre-dungeon world, Temple, Dungeon 2 | Dungeon 3 onward |

You can see the break without being told: **Uncommon+ and above are custom-modelled.** If a piece of armour has a real model, it carries Resilience. If it looks vanilla, it does not.

A Common chestplate gives **0.07 Defense and no health**. An Uncommon+ chestplate gives **~8.6 Defense, 80 Health and 640 Resilience**. That is not a typo, and it is why the old content was left alone rather than rebalanced.

---

## Weapons

### Base attack damage

Every weapon type has its own damage-and-speed identity. Damage is a range — your weapon rolls somewhere inside it.

??? note "Common through Rare+"

    | Weapon | Swings/s | Common | Common+ | Uncommon | Uncommon+ | Rare | Rare+ |
    |---|---|---|---|---|---|---|---|
    | **Sword** | 1.6 | 4.78–5.84 | 5.12–6.26 | 5.96–7.29 | 14.91–18.22 | 19.69–24.06 | 22.11–27.02 |
    | **Katana** | 1.8 | 3.87–4.73 | 4.14–5.06 | 4.82–5.89 | 12.06–14.74 | 15.93–19.46 | 17.88–21.86 |
    | **Dagger** | 2.0 | 4.37–5.34 | 4.63–5.66 | 5.09–6.22 | 12.38–15.13 | 15.49–18.93 | 16.57–20.25 |
    | **Spear** | 1.3 | 4.94–6.04 | 5.29–6.47 | 6.16–7.53 | 15.41–18.84 | 20.35–24.88 | 22.85–27.93 |
    | **Axe** | 0.5 | 14.84–18.14 | 15.89–19.42 | 18.51–22.62 | 46.27–56.55 | 61.11–74.69 | 68.62–83.87 |
    | **Hammer** | 0.9 | 7.22–8.83 | 7.73–9.45 | 9.01–11.01 | 22.52–27.53 | 29.75–36.36 | 33.40–40.83 |
    | **Gauntlet** | 2.6 | 2.94–3.60 | 3.15–3.85 | 3.67–4.48 | 9.17–11.21 | 12.12–14.81 | 13.60–16.63 |
    | **Greatsword** | 1.1 | 6.75–8.24 | 7.22–8.83 | 8.41–10.28 | 21.03–25.70 | 27.78–33.95 | 31.19–38.12 |
    | **Greataxe** | 0.4 | 19.12–23.38 | 20.47–25.02 | 23.85–29.15 | 59.62–72.88 | 78.75–96.25 | 88.42–108.07 |
    | **Greathammer** | 0.7 | 10.49–12.82 | 11.23–13.73 | 13.08–15.99 | 32.71–39.98 | 43.20–52.80 | 48.51–59.29 |
    | **Staff** | 0.7 | 10.93–13.36 | 11.70–14.30 | 13.63–16.66 | 34.07–41.64 | 45.00–55.00 | 50.53–61.76 |
    | **Wand** | 1.5 | 5.10–6.23 | 5.46–6.67 | 6.36–7.77 | 15.90–19.43 | 21.00–25.67 | 23.58–28.82 |
    | **Bow** | — | 10.20–12.47 | 10.92–13.35 | 12.72–15.55 | 31.80–38.87 | 42.00–51.33 | 47.16–57.64 |
    | **Crossbow** | 1.5 | 5.61–6.86 | 6.01–7.34 | 7.00–8.55 | 17.49–21.38 | 23.10–28.23 | 25.94–31.70 |

??? note "Epic through Legendary+"

    | Weapon | Swings/s | Epic | Epic+ | Legendary | Legendary+ |
    |---|---|---|---|---|---|
    | **Sword** | 1.6 | 27.68–33.83 | 33.07–40.42 | 45.68–55.83 | 59.29–72.46 |
    | **Katana** | 1.8 | 22.39–27.36 | 26.75–32.70 | 36.95–45.16 | 47.96–58.61 |
    | **Dagger** | 2.0 | 19.54–23.89 | 21.71–26.54 | 27.31–33.38 | 31.51–38.51 |
    | **Spear** | 1.3 | 28.61–34.97 | 34.19–41.79 | 47.22–57.71 | 61.29–74.92 |
    | **Axe** | 0.5 | 85.90–104.99 | 102.66–125.48 | 141.78–173.28 | 184.03–224.92 |
    | **Hammer** | 0.9 | 41.82–51.11 | 49.98–61.09 | 69.02–84.36 | 89.59–109.50 |
    | **Gauntlet** | 2.6 | 17.03–20.82 | 20.35–24.88 | 28.11–34.35 | 36.48–44.59 |
    | **Greatsword** | 1.1 | 39.05–47.72 | 46.67–57.04 | 64.44–78.76 | 83.65–102.24 |
    | **Greataxe** | 0.4 | 110.70–135.30 | 132.30–161.70 | 182.70–223.30 | 237.15–289.85 |
    | **Greathammer** | 0.7 | 60.73–74.22 | 72.58–88.70 | 100.22–122.50 | 130.09–159.00 |
    | **Staff** | 0.7 | 63.26–77.31 | 75.60–92.40 | 104.40–127.60 | 135.51–165.63 |
    | **Wand** | 1.5 | 29.52–36.08 | 35.28–43.12 | 48.72–59.55 | 63.24–77.29 |
    | **Bow** | — | 59.04–72.16 | 70.56–86.24 | 97.44–119.09 | 126.48–154.59 |
    | **Crossbow** | 1.5 | 32.47–39.69 | 38.81–47.43 | 53.59–65.50 | 69.56–85.02 |

!!! tip "Big numbers are not big DPS"
    A Greataxe hits for ten times a Gauntlet and swings six times slower. **Damage x swings per second** is the number that matters — and it lands in roughly the same neighbourhood for most types. Pick on playstyle, not on the number in the tooltip.

### Weapon extras

Some types carry a signature stat on top of damage:

| Weapon | Extra base stats |
| --- | --- |
| **Dagger** | Crit Chance and Crit Power — by far the biggest of any weapon (10.5–19.5% chance at Common, 28–52% at Legendary+) |
| **Katana** | A small Crit Chance roll |
| **Spear** | +3 Combat Range |
| **Staff / Wand** | Magic Damage and Max Mana |
| **Bow / Crossbow** | Projectile Damage and Arrow Velocity |
| **Shield** | Block Power, Health and Mana — no attack damage at all |
| **Greatsword / Greataxe / Greathammer** | **Two-handed**, and −1 Combat Range |

!!! warning "Two-handed weapons"
    Holding a two-handed weapon *and* something in your off hand disables your weapon and your abilities. An off-hand item marked **Handworn** is the exception — it does not count.

### Durability

Durability is tied to rarity, not to weapon type.

??? note "Durability by rarity"

    | Rarity | Durability |
    | --- | --- |
    | Common / Common+ | 450 |
    | Uncommon | 650 |
    | **Uncommon+** | **6,500** |
    | Rare | 8,000 |
    | Rare+ | 9,500 |
    | Epic | 11,500 |
    | Epic+ | 13,500 |
    | Legendary | 16,000 |
    | Legendary+ | 19,000 |

The jump from 650 to 6,500 at Uncommon+ is the same era break as everything else on this page.

---

## Armour

Four slots, and each slot carries a **different Resistance** — so a full set covers all four damage types, one slot each.

| Slot | Resistance it carries | Share of the set's Resilience |
| --- | --- | --- |
| **Helmet** | Magic Resistance | 15% |
| **Chestplate** | Weapon Resistance | 40% |
| **Leggings** | Projectile Resistance | 30% |
| **Boots** | Skill Resistance | 15% |

### Full-set base stats

Totals for all four pieces, before any rolled stats or gems.

| Rarity | Armor | Defense | Health | **Resilience** | Class Proficiency |
| --- | --- | --- | --- | --- | --- |
| Common | 9–13 | 0.2 | — | — | — |
| Common+ | 10–14 | 5.6–6.8 | — | — | — |
| Uncommon | 13–17 | 16–20 | 21–25 | — | — |
| **Uncommon+** | 14–18 | 20–24 | 180–220 | **1,440–1,760** | 1 |
| Rare | 17–21 | 23–29 | 225–275 | **2,070–2,530** | 2 |
| Rare+ | 18–22 | 28–34 | 279–341 | **2,790–3,410** | 3 |
| Epic | 21–25 | 34–41 | 342–418 | **3,600–4,400** | 4 |
| Epic+ | 22–27 | 40–49 | 414–506 | **4,500–5,500** | 5 |
| Legendary | 25–31 | 48–59 | 504–616 | **5,490–6,710** | 6 |
| Legendary+ | 33–40 | 58–71 | 612–748 | **6,210–7,590** | 7 |

---

## Resilience

**Resilience is the protection stat.** It is the single number that decides how much damage you take, and it only exists on Uncommon+ gear and above.

### What each tier is actually worth

More Resilience means less damage taken. It has **diminishing returns as a percentage but not as a value** — each chunk you add is worth the same amount of real survivability, so no point is ever wasted, and it can never reach 100%.

Roughly, in a full matched set:

| Rarity | Resilience | Damage taken cut by | Survivability vs Uncommon+ |
| --- | --- | --- | --- |
| Uncommon+ | ~1,600 | ~70% | 1.0x |
| Rare | ~2,300 | ~80% | 1.4x |
| Rare+ | ~3,100 | ~85% | 2.0x |
| Epic | ~4,000 | ~85% | 2.7x |
| Epic+ | ~5,000 | ~90% | 3.7x |
| Legendary | ~6,100 | ~90% | 4.9x |
| Legendary+ | ~6,900 | ~90% | 6.1x |

Your health bar roughly triples across that ladder, but how much you can actually take grows **six-fold** — because it is health *and* reduction working together.

### Resistances

The four Resistances **boost your Resilience**, but only against the matching damage type. Roughly **25 points is about 25% more Resilience** against that one type — and nothing at all against the others.

| Damage type | Answered by |
| --- | --- |
| Weapon | Weapon Resistance (chestplate) |
| Magic | Magic Resistance (helmet) |
| Projectile | Projectile Resistance (leggings) |
| Skill | Skill Resistance (boots) |

### Penetration

Some attacks **ignore a percentage of your Resilience**. It is always a percentage, never a flat amount, which means a signature boss attack stays dangerous exactly where armour stacking would otherwise trivialise it.

Penetration also carries the level difference: **every level the enemy has on you adds +1% penetration**, up to a ceiling of 85%. Out-levelling content makes you tankier; under-levelling it makes you fragile — and that is the *only* place level enters the calculation.

!!! danger "Anything that bypasses Resilience is dangerous"
    Damage-over-time, true damage, fall damage and environmental damage **do not go through Resilience at all** — they hit your raw health. A poison tick that is survivable in Uncommon+ is proportionally *worse* in Legendary+, not better. Never ignore ticks because your armour is good.

### Old content is untouched

The pre-dungeon world, the **Temple** (Dungeon 1) and **Dungeon 2** — including Valerius and every ritual mob — are deliberately frozen out of this system and fight exactly as they always did. Resilience applies from **Dungeon 3** onward.

---

## Rolled stats

Beyond its base stats, every item rolls extras from a pool. The number of slots is set by rarity; the size of each roll is set by rarity *and* by which slot it came from.

### How many stats you get

This is the **weapon** table — armour uses its own slots, covered [below](#armour-only-rolls).

| Rarity | Main | Sub-stats | Extra affix | Bonus main | Bonus affix |
| --- | --- | --- | --- | --- | --- |
| Common / Common+ | 1 | 0–2 | 0–1 | — | — |
| Uncommon / Uncommon+ | 1 | 0–2 | 0–1 | — | — |
| Rare / Rare+ | 1 | 1–3 | 0–1 | — | — |
| Epic / Epic+ | 1 | 1–4 | 0–1 | **0–1** | **0–1** |
| Legendary / Legendary+ | 1 | 2–5 | 0–1 | **0–1** | **0–1** |

So a Common weapon carries **1–4** rolled stats and a Legendary+ carries **3–9**.

#### The bonus slots

**Epic and Legendary weapons get two extra chances that nothing below them has.** They are the reason the top two rarities feel like a step change rather than another increment.

- **Bonus main** — a *second* main stat, rolling the same 10–24 band as the first at Legendary. Not a smaller version, a duplicate.
- **Bonus affix** — a *second* extra affix, rolling the same 16–36 band.

Both are 0–1, and neither is common:

| Slot | Epic | Legendary |
| --- | --- | --- |
| Bonus main | ~5% | ~18% |
| Bonus affix | ~13% | ~24% |

!!! tip "A weapon with both is a genuine chase item"
    Roughly **4%** of Legendary weapons roll bonus main *and* bonus affix. That weapon has two main stats and two affixes — comfortably better than anything else at its rarity, and priced accordingly.

!!! warning "Bonus slots are weapons only"
    All fifteen weapon types get them, **Shield included**. Armour never does — an Epic helmet has no bonus main or bonus affix at any rarity. If you are comparing a weapon and an armour piece of the same rarity, the weapon simply has more ways to roll well.

!!! tip "Crafted gear gets more rolls, not bigger ones"
    This is the part worth understanding: **a crafted item's stat ranges are identical to a dropped one's.** A crafted Legendary main stat rolls 10–24, exactly like a dropped Legendary main stat. Crafting does not raise the ceiling on any number.

    What it buys you is **more slots filled, and better sockets**:

    - the extra-affix slot goes from **0–1 to guaranteed** — that alone is a stat worth three times a main stat
    - sub-stats gain a floor (a Legendary rolls **3–5** instead of 2–5)
    - the **bonus main** slot roughly doubles in likelihood (Legendary 18% → 33%)
    - **one coloured gem socket is guaranteed** instead of a 20% chance, with 0–3 more on top

    Tick **Crafted** in the [Stat Explorer](stat-explorer.md) to see the exact difference at any rarity, and see [Crafting Stations](stations.md) for where each rarity is made.

### The stat pool

The main, sub, extra and bonus slots all draw from the same **34-stat pool**, uniformly — no stat is rarer than any other:

**Offence** — Crit Chance, Crit Power, Skill Crit Chance, Skill Crit Power, PvE Damage, PvP Damage, Weapon Damage, Skill Damage, Magic Damage, Physical Damage, Projectile Damage, Undead Damage, Lifesteal, Spell Vampirism, Arrow Velocity

**Defence** — Defense, Damage Reduction, Fall / Fire / Magic / Physical / Projectile / PvE / PvP Damage Reduction, Dodge Rating, Parry Rating, Dodge and Parry Cooldown Reduction, Knockback Resistance

**Utility** — Cooldown Reduction, Max Health, Max Mana, Mana Regeneration, Movement Speed

### Stat bands

Most stats share one baseline curve. A handful have their own scale because the units are different.

**Baseline** — all the `%` stats: crit, damage, reduction, cooldown, rating, lifesteal.

??? note "Baseline bands — Common through Rare+"

    | Slot | Common | Common+ | Uncommon | Uncommon+ | Rare | Rare+ |
    |---|---|---|---|---|---|---|
    | **Main** | 1–3 | 1.3–3.6 | 2–5 | 2.6–5.6 | 4–7 | 4.3–8.5 |
    | **Sub** | 0.5–1.5 | 0.65–1.95 | 1–3 | 1.3–3.3 | 2–4 | 2.3–4.9 |
    | **Extra affix** | 2.5–5 | 3.25–6.5 | 3.5–7 | 3.95–7.9 | 5–10 | 5.9–12.4 |

??? note "Baseline bands — Epic through Legendary+"

    | Slot | Epic | Epic+ | Legendary | Legendary+ |
    |---|---|---|---|---|
    | **Main** | 5–12 | 6.5–15.6 | 10–24 | 13–31.2 |
    | **Sub** | 3–7 | 3.9–9.1 | 6–14 | 7.8–18.2 |
    | **Extra affix** | 8–18 | 10.4–23.4 | 16–36 | 20.8–46.8 |
    | **Bonus main** | 5–12 | 6.5–15.6 | 10–24 | 13–31.2 |
    | **Bonus affix** | 8–18 | 10.4–23.4 | 16–36 | 20.8–46.8 |

!!! tip "The Extra Affix slot is the big one"
    It is never guaranteed on a drop (**0–1**) and it rolls **three times the main stat's magnitude**. An item that rolled its extra affix is worth noticeably more than one that did not — check for it before you buy.

??? note "Stats on their own scale"

    | Stat | Main slot, Common | Main slot, Legendary+ |
    | --- | --- | --- |
    | **Max Health** | 2–4 | 23.4–54.6 |
    | **Max Mana** | 10–20 | 97.5–234 |
    | **Mana Regeneration** | 1–3 | 2.6–7.8 |
    | **Knockback Resistance** | 0.025–0.05 | 0.16–0.31 |
    | **Movement Speed** | 0.005–0.015 | 0.02–0.04 |
    | **Arrow Velocity** | 0.05–0.1 | 0.39–0.85 |

---

## Armour-only rolls

Armour skips the weapon pools and uses three of its own.

### Archetype — the coloured prefix

**Every armour piece gets exactly one archetype prefix.** It is the first word of the item's name and it tells you what the piece is for at a glance.

| Prefix | Rolls from | Pool |
| --- | --- | --- |
| **Arcane** | Magic Damage, Skill Damage, Max Mana, Mana Regeneration, Cooldown Reduction, Spell Vampirism | 7 |
| **Reinforced** | Defense, every Damage Reduction, Max Health, Armor, Armor Toughness, Block Power / Rating / Cooldown, Health Regeneration, Knockback Resistance | 17 |
| **Deadeye** | Projectile Damage, Crit Chance, Crit Power, Dodge Rating, Dodge Cooldown, Movement Speed, PvE Damage, Arrow Velocity | 8 |
| **Savage** | Weapon Damage, Physical Damage, PvE Damage, PvP Damage, Undead Damage, Lifesteal, Crit Power, Sweeping Damage | 8 |

**Dropped armour rolls its archetype at random** from all 40 options combined, so Reinforced comes up most often simply because it has the most entries. **Crafted armour is made at a specific bench per archetype**, so you choose it — see [Crafting Stations](stations.md).

Archetype rolls are generous — **1–3 at Common up to 12–22 at Legendary** — wider than a main stat.

### Side stats — 0–2 rolls (1–2 if crafted)

Roughly half the size of a main stat, drawn from a 38-stat pool that adds a few armour-only entries: **Armor**, **Armor Toughness**, **Health Regeneration**, **Block Power / Rating / Cooldown Reduction**.

| Stat | Common | Legendary | Legendary+ |
| --- | --- | --- | --- |
| Baseline % stats | 0.5–1.5 | 7–13 | 9.1–16.9 |
| Armor | 0.5–1 | 3.5–6.5 | 4.55–8.45 |
| Armor Toughness | 0.25–0.75 | 2.5–5 | 3.25–6.5 |
| Health Regeneration | 0.1–0.3 | 1.75–3.5 | 2.27–4.55 |
| Max Health | 1–2 | 12–20 | 15.6–26 |

### The "useful" prefix — 0–1 roll

A rare quality-of-life roll with its own prefix. There are twelve, sharing six prefix words:

| Prefix | What it can give |
| --- | --- |
| **Resourceful** | Mining Speed, Underwater Mining Speed |
| **Versatile** | Block Reach, Underwater Movement |
| **Practical** | Combat Reach, Movement Efficiency |
| **Adaptive** | Step Height, Mining Efficiency |
| **Explorer** | Waterbreathing, Explosion Knockback Resistance |
| **Pathfinder** | Sneaking Speed, **less time on fire** |

These are flavour, not power — but **Step Height** (walk up full blocks) and **Pathfinder's** burning reduction are genuinely nice to have.

---

## The "Of …" suffixes — attribute rolls

A rare extra roll that adds a **suffix** to the item name and raises one of 36 underlying [attributes](../progression/attributes.md) by 1.

??? note "All 36 attribute suffixes"

    | Suffix | Attribute | Suffix | Attribute |
    | --- | --- | --- | --- |
    | **Of Power** | Attack Damage | **Of Might** | Weapon Damage |
    | **Of Haste** | Attack Speed | **Of Sorcery** | Magic Damage |
    | **Of Precision** | Crit Chance | **Of Technique** | Skill Damage |
    | **Of Ferocity** | Crit Power | **Of Accuracy** | Projectile Damage |
    | **Of Spell Precision** | Skill Crit Chance | **Of Strength** | Physical Damage |
    | **Of Spell Ferocity** | Skill Crit Power | **Of Vitality** | Max Health |
    | **Of Armor** | Armor | **Of Wisdom** | Max Mana |
    | **Of Toughness** | Armor Toughness | **Of Clarity** | Mana Regeneration |
    | **Of Anchoring** | Knockback Resistance | **Of Mending** | Health Regeneration |
    | **Of Blast Guard** | Explosion Knockback Res. | **Of Absorption** | Max Absorption |
    | **Of Tempo** | Cooldown Reduction | **Of Fortune** | Luck |
    | **Of Chance** | Chance | **Of Lightness** | Movement Speed |
    | **Of Mobility** | Speed Malus Reduction | **Of Silence** | Sneaking Speed |
    | **Of Efficiency** | Movement Efficiency | **Of Current** | Water Movement |
    | **Of Breathing** | Oxygen Bonus | **Of Soft Landing** | Safe Fall Distance |
    | **Of Mining** | Mining Efficiency | **Of Breaking** | Block Break Speed |
    | **Of Depth Mining** | Submerged Mining | **Of Handling** | Block Reach |
    | **Of Reach** | Entity Reach | **Of Sweeping** | Sweeping Damage |

!!! info "These are genuinely rare"
    The attribute slot is **0–1** and each of the 36 options is individually very unlikely, so most items never get one. Rare and above roll from a doubled pool that includes **rank II** versions (`Of Power II`) worth +2 instead of +1.

---

## Class locks

**Every weapon drop of Uncommon+ or better is locked to a set of classes.**

Each rolls **two of the six base classes** (Warrior, Assassin, Archer, Mage, Summoner, Shaman) plus **one wildcard from the full 48-class roster**, ignoring pools — so three classes per weapon, and any weapon can theoretically roll any class.

!!! tip "This is on purpose — sell what you cannot use"
    Class locks exist so that most of what you find has to be traded to someone else. A Legendary+ Staff locked to Warrior is not a bad roll; it is someone else's best weapon. Take it to [the market](market.md).

    Occasionally the wildcard repeats a class the first roll already took — that item simply has two classes instead of three.

**Crafted weapons never roll a class lock.** If you want a guaranteed-usable weapon, craft it at the [forge for its rarity](stations.md).

---

## Sockets

Two kinds of socket, rolled independently.

### Enchant sockets

**Every weapon and armour piece gets at least one.** They hold [Enchant Stones](gems.md).

| Rarity | Dropped | Crafted |
| --- | --- | --- |
| Common | 1 or 2 | 1 or 2 |
| Uncommon | 1 or 2 | 2 or 3 |
| Rare | 2 or 3 | 2 or 3 |
| Epic | 2 or 3 | 3 or 4 |
| Legendary | 3 or 4 | 3 or 4 |

It is a coin flip between the two counts every time.

### Gem sockets

Each rarity rolls one socket group per gem family plus an Uncolored group, each with a small chance to land. A socket's quality is tied to the item's rarity:

| Item rarity | Socket you can roll | Or, less often |
| --- | --- | --- |
| Common | Cracked (25%) | — |
| Uncommon | **Polished** (20%) | two Cracked (7%) |
| Rare | **Radiant** (20%) | two Polished (7%) |
| Epic | **Perfect** (20%) | two Radiant (7%) |
| Legendary | **Mythic** (20%) | two Perfect (7%) |

On top of that there is a **10–12% chance of an Uncolored socket**, and Legendary can roll two or even three of them.

**The `+` tiers roll gem sockets too**, at their parent rarity's quality — a Rare+ piece rolls from the Rare table above, a Legendary+ piece from the Legendary one.

!!! tip "Uncolored is the best socket in the game"
    A coloured socket only accepts gems of that family. **An Uncolored socket takes any gem**, which means it takes the gem you actually want. Treat an Uncolored roll as a significant upgrade.

**Crafted gear is much better for sockets:** one **guaranteed** coloured socket of a random family, **0–2 extra** coloured sockets (0–3 at Epic and Legendary), and its own Uncolored roll. A crafted Legendary can reach four coloured sockets plus three Uncolored. Crafting is done at the [tiered forges and workbenches](stations.md).

---

## Gemstones in depth

Four families x five qualities = **twenty gemstones**. Craft them at the **Gem Station** — talk to **Kiko**. See [Gems & Enchanting](gems.md) for the crafting chain itself.

### Qualities

| Quality | Rarity | Socket it fits |
| --- | --- | --- |
| **Cracked** | Common | Common gear |
| **Polished** | Uncommon | Uncommon gear |
| **Radiant** | Rare | Rare gear |
| **Perfect** | Epic | Epic gear |
| **Mythic** | Legendary | Legendary gear |

### What each family rolls

Every gem rolls **exactly one stat** from its family's pool, chosen uniformly — a Ruby is as likely to give Lifesteal as Attack Damage.

**Ruby — melee and physical (13 stats)**
Attack Damage · Attack Speed · Crit Chance · Crit Power · PvE Damage · PvP Damage · Blunt Power · Blunt Rating · Weapon Damage · Skill Damage · Projectile Damage · Physical Damage · Lifesteal

**Sapphire — caster and ranged (10 stats)**
Attack Speed · Skill Crit Chance · Skill Crit Power · Projectile Damage · Magic Damage · Cooldown Reduction · Range · Max Mana · Mana Regeneration · Spell Vampirism

**Emerald — defence (20 stats)**
Max Health · Armor · Armor Toughness · Knockback Resistance · Movement Speed · Damage Reduction · Defense · Fall / Projectile / Physical / Fire / Magic / PvE / PvP Damage Reduction · Max Absorption · Block Power · Block Rating · Block Cooldown Reduction · Dodge Rating · Dodge Cooldown Reduction

**Amethyst — generalist (all 41 stats)**
Everything the other three can roll, combined.

### Gem stat ranges

Most stats in a family share one band. These are the numbers:

??? note "Full gem stat range table"

    | Family | Stat | Cracked | Polished | Radiant | Perfect | Mythic |
    | --- | --- | --- | --- | --- | --- | --- |
    | **Ruby** | Attack Damage | 0.1–0.5 | 0.3–1 | 0.8–2 | 1.5–4 | **3–9** |
    | | Attack Speed | 0.05–0.1 | 0.1–0.15 | 0.15–0.25 | 0.25–0.4 | **0.3–0.7** |
    | | *everything else* | 0.5–1.5 | 1.5–4.5 | 4.5–8 | 8–15 | **12–30** |
    | **Sapphire** | Max Mana | 10–20 | 15–40 | 25–60 | 40–90 | **50–120** |
    | | Attack Speed | 0.05–0.1 | 0.1–0.15 | 0.15–0.25 | 0.25–0.4 | **0.3–0.7** |
    | | *everything else* | 0.5–1.5 | 1.5–4.5 | 4.5–8 | 8–15 | **12–30** |
    | **Emerald** | Max Health | 2–4 | 2–6 | 4–10 | 8–16 | **8–24** |
    | | Block Power | 1–4 | 2–7 | 3–14 | 5–20 | **5–30** |
    | | Knockback Resistance | 0.03–0.06 | 0.04–0.1 | 0.08–0.3 | 0.1–0.4 | **0.3–1** |
    | | Movement Speed | 0.02–0.04 | 0.02–0.06 | 0.02–0.08 | 0.02–0.1 | **0.04–0.15** |
    | | *everything else* | 0.5–1.5 | 1.5–4.5 | 4.5–8 | 8–15 | **12–30** |
    | **Amethyst** | *two stats, any pool* | 60% of the matching row above | | | | |

!!! info "Amethyst trades size for flexibility"
    An Amethyst rolls **two** stats instead of one, from the complete 41-stat pool — but each is **60% of what a pure gem would give**. Two stats at 60% is 120% of one stat, so on raw numbers Amethyst is slightly ahead. It loses when you need a *specific* stat, because you cannot aim it.

    A Mythic Ruby gives 12–30 of one offensive stat. A Mythic Amethyst gives 7.2–18 of each of two stats that might well be Block Cooldown Reduction and Fall Damage Reduction.

### Success Rate — read it before you socket

**Every gem rolls a Success Rate: the chance it actually applies instead of shattering.**

| Roll | Suffix on the gem | Range | Chance |
| --- | --- | --- | --- |
| Normal | *(none)* | 25–75% | 80% |
| **Lucky** | `Lucky` (green) | 75–100% | 10% |
| **Unlucky** | `Unlucky` (red) | 1–25% | 10% |

!!! warning "An Unlucky gem can be a 1% chance"
    The suffix is the warning label. A gem marked **Unlucky** will most likely be destroyed on the attempt. Put **Lucky** gems in the pieces you care about.

!!! tip "A failed gem never damages the item"
    Only the gem is lost. Your gear is untouched and the socket stays open, so there is no risk in trying again with another gem.

Your **Gemforging** profession adds **+1% success per 20 levels** — +10% at level 200.

### Empowered — the pink prefix

**Empowered is a second stat**, rolled on top of the gem's normal one, and it marks the gem with a pink `Empowered` prefix.

Two things make it unusual:

1. **It ignores the gem's family.** An Empowered *Ruby* can roll Max Health or Armor — the bonus stat is drawn from the complete 41-stat pool regardless of colour.
2. **It is worth about two-thirds of the gem's main roll**, at the same quality.

| Quality | Empowered bonus (baseline stats) | Chance |
| --- | --- | --- |
| Cracked | 0.33–1 | ~8.8% |
| Polished | 1–3 | ~6.3% |
| Radiant | 3–5.3 | ~3.4% |
| Perfect | 5.3–10 | ~1.6% |
| Mythic | **8–20** | ~0.8% |

!!! warning "Empowered gets rarer as gems get better"
    Roughly one in eleven Cracked gems is Empowered, but only about **one in 120 Mythic gems**. An Empowered Mythic gem is one of the rarest things you can produce — and worth pricing that way.

### Putting the prefixes and suffixes together

A gem's full name tells you everything about it:

```
Empowered   Mythic Ruby Gemstone   Lucky
    |               |                |
    |               |                +--> 75-100% chance to apply
    |               +-------------------> 12-30 main stat,
    |                                     fits Legendary sockets
    +-----------------------------------> a 2nd stat worth 8-20,
                                          from any pool
```

That is the best possible gem. The worst is an un-prefixed **Cracked** gem marked **Unlucky** — one small stat with a 1–25% chance of even applying.

---

## Accessories

**Rings, Amulets, Bracelets, Gloves and Artifacts have no base stats at all.** Everything an accessory does comes from **one single rolled stat**, drawn from a 108-entry pool.

??? note "Accessory stat ranges by rarity"

    | Rarity | Its one stat (baseline) | If it rolls Max Health | If it rolls Max Mana |
    | --- | --- | --- | --- |
    | Common | 1.2–3.6 | 2.4–4.8 | 12–24 |
    | Common+ | 1.5–4.3 | 3.2–5.8 | 13.8–27.6 |
    | Uncommon | 2.4–6 | 4.8–8.4 | 18–36 |
    | Uncommon+ | 3.2–6.8 | 5.6–9.4 | 20.5–40.3 |
    | Rare | 4.8–8.4 | 7.2–12 | 26.4–50.4 |
    | Rare+ | 5.1–10.2 | 8.2–15.6 | 31–65.8 |
    | Epic | 6–14.4 | 10.8–24 | 42–102 |
    | Epic+ | 7.8–18.8 | 14.1–32 | 56.4–136.2 |
    | Legendary | 12–28.8 | 21.6–50.4 | 90–216 |
    | Legendary+ | 15.6–37.5 | 28–65.6 | 117–280.8 |

Plus a **50% chance of one gem socket** — about 10% each for Ruby, Sapphire, Emerald, Amethyst and Uncolored, at the quality matching the accessory's rarity.

!!! warning "Accessories are a lottery"
    One stat out of 108 possibilities, and no base stats to fall back on. A Legendary+ Ring that rolled **Submerged Mining Speed** is worth nothing to a fighter. A Legendary+ Ring that rolled **Crit Power 15.6–37.5** is an enormous upgrade. **Look at the stat, not the rarity.**

Accessories also roll their appearance — **22 ring models, 27 amulets, 14 bracelets** and **108 artifact models**.

---

## Backpacks

[Backpacks](backpacks.md) are worn in the off hand and roll two stats: one **main** and one **side**.

| Slot | Pool |
| --- | --- |
| **Main** | Max Health, Max Mana, Defense, Damage Reduction, Cooldown Reduction, Movement Speed |
| **Side** | Armor, Armor Toughness, Fall Damage Reduction, Health Regeneration, Mana Regeneration, Knockback Resistance |

Both use the same rarity bands as weapon main and side stats. Backpacks also carry **14–22 slots** of storage, rolled per backpack.

---

## Quick reference

| If you want… | Look for |
| --- | --- |
| **The most survivability** | The highest **Resilience** total — it is the only protection number that really matters |
| **The best single item** | An **Extra Affix** roll (3x a main stat) on the highest rarity you can wear |
| **Gem flexibility** | **Uncolored** sockets — they take any gem family |
| **Guaranteed usability** | **[Crafted](stations.md)** gear — it never rolls a class lock |
| **The most sockets** | **Crafted Legendary** — up to four coloured plus three Uncolored |
| **The best gem** | **Empowered … Lucky** — a second stat *and* a near-certain application |
| **Money** | Class-locked weapons you cannot use — someone else needs them |
