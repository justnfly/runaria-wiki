# Gems & Enchanting

Two socketable systems share one starting point. Both begin at the **Apothecary**, and both are powered by your **Gemforging** profession.

**[Kiko](../economy/stations.md) runs all of it** — every station on this page is opened by talking to her.

```
Apothecary  →  Gem Catalyst  ─┬─→  Gem Station    →  stat gemstones
                              └─→  Enchant Forge  →  enchant stones
```

The Apothecary's single recipe consumes only **dungeon reagents**, so gem crafting is gated behind dungeon running rather than mining.

---

## Gemstones

Four families, five quality grades each — twenty gemstones, all crafted at the **Gem Station**. Talk to **Kiko**.

### Quality

| Grade | Rarity |
| --- | --- |
| **Cracked** | Common |
| **Polished** | Uncommon |
| **Radiant** | Rare |
| **Perfect** | Epic |
| **Mythic** | Legendary |

**Cracked gems of all four families are craftable from level 1**, and also drop from Temple chests. The higher grades unlock much later.

### Families

| Family | Theme | Stats it rolls |
| --- | --- | --- |
| **Ruby** | Melee and physical | Attack damage, attack speed, crit chance and power, PvE/PvP damage, weapon damage |
| **Sapphire** | Caster and ranged | Skill crit chance and power, magic damage, projectile damage, cooldown reduction, attack speed |
| **Emerald** | Defence | Max health, armor, armor toughness, knockback resistance, movement speed, damage reduction |
| **Amethyst** | Generalist | The same offensive spread as Ruby, at roughly 60% of the size. A flexible filler, not a best-in-slot gem. |

### Every gem rolls two extras

**Success Rate** — the chance the gem actually sockets instead of shattering. Most gems roll somewhere between 25% and 75%, but one in ten rolls **Lucky** (75–100%) and one in ten rolls **Unlucky** (1–25%).

!!! danger "Check the success rate before you socket"
    An Unlucky gem has as little as a 1% chance of applying. Read the number on the gem before you commit it to gear you care about.

Your Gemforging level helps: **+1% success per 20 levels**, so +10% at level 200.

**Empowered** — roughly a one-in-ten chance for a gem to gain the **Empowered** prefix, which rolls from a separate, tighter stat pool.

### Sockets

Gear rolls sockets randomly. Accessories — rings, amulets, bracelets, gloves and artifacts — have about a **50% chance of one socket**, which will be Ruby, Sapphire, Emerald, Amethyst or **Uncolored**.

**An Uncolored socket accepts any gem family**, which makes it the most valuable roll.

Use a **Gem Remover** to pop a gem back out.

---

## Enchant Stones

Enchant Stones carry an enchantment and socket into an item's Enchant Socket. There are **123 of them** — 81 custom Runaria enchantments and 42 vanilla ones.

### You roll the level, you don't pick it

This is the part that matters most:

- **Below Gemforging 75**, you're capped well under an enchant's maximum. At level 1 you will only ever roll level I.
- **At Gemforging 75**, every tier becomes reachable.
- **Past 75**, the odds keep shifting toward high rolls all the way to level 200.

You also earn **bonus Gemforging experience for rolling well** — 15% extra at three-quarters of max level, 30% at nine-tenths, and **50% for a perfect maximum roll**.

!!! tip "Grind Gemforging before chasing high-level stones"
    Nothing stops you crafting a top-tier stone at Gemforging 5 — you'll just roll level I and waste the materials. Get to 75 first.

### Vanilla enchantments, raised

Several vanilla enchantments go **above their normal ceiling** as stones:

| Enchantment | Max here | Vanilla max |
| --- | --- | --- |
| **Sharpness** | VIII | V |
| **Power** | VIII | V |
| **Protection** | VI | IV |
| **Looting** | VI | III |
| **Fortune** | VI | III |
| **Unbreaking** | VI | III |

### Custom enchantments

The 81 custom enchantments are also obtainable from **enchanting tables, villager trades and loot chests** — stones are just the reliable route.

**Melee** — *One for All* (+500% damage, but conflicts with every other enchantment), Bleed, Goliath, Lifesteal, Ender Slayer, Cubism, Introversion, Slaughter, Ninja, First Strike, Finishing, Brightness, End and Nether Affinity, Criticals, Abrasion, Fortitude, Shura

**Control** — Blackout (blind), Confusion (shuffles their hotbar), Stun, Caffeinated, Dexterity

**Spells**, activated abilities limited to one per item — Charge, Transmission, Ascend, Soul Storm, Rumble, Vitality, Dynamite, Xray

**Ranged** — Boss Hunter, Wound, Thor (calls lightning), Flashbang, Rapid, Snipe, Frost, Jumpshot, Skull Puncture, Tripleshot, Warp Drive, Contagion, Slipstream

**Gathering** — Veinminer, Lumberjack (fells a whole tree), Excavation, Blast Mining, Infernal Touch (auto-smelts), Nether Prospector, Telekinesis, Wisdom, Carve

**Farming** — Replenish (auto-replants), Feather Step (no trampling), Foraging

**Defence** — Arcane Defence, Thrive, Aura (protects nearby players too), Vanish, Poison Ivy, Haunting, Block Breather, Rebounding, Adrenaline

**Movement and utility** — Streamlining, Getaway, Escape, Stamina, Metabolism, Rocket Saver, Wyvern, Sparks

**Universal** — **Soulbound** (keep the item when you die), Repairing

### Curses

Curses are craftable too: **Breaklessness**, **Harmlessness**, **Hunger**, **Misfortune** and **Permanence**.

!!! danger "Curse of Permanence is irreversible"
    An item with Curse of Permanence can **never be modified in an anvil again**. And curses in general **cannot be removed with a grindstone**.

### Display rules

- Enchantment descriptions appear in the item's lore, but only while it has **five or fewer** enchantments.
- Past **nine** enchantments the list collapses into compact comma-separated lines.
- Enchantments above their normal max show in a distinct green gradient.
- **Spell** enchantments are limited to one per item — you cannot stack two spells.
- `/enchantinfo` opens a menu showing any enchantment's max level, rarity, valid targets and conflicts.
