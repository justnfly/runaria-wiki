# Crafting Stations

**You open crafting stations by talking to the craftsman who runs them.** Four NPCs cover everything on the server between them — find the right one, and they'll open the station you need.

| Craftsman | Handles |
| --- | --- |
| **Velreal** | Every forge and workbench — all weapons and armor |
| **Browntul** | Every refinery — turning raw ore into ingots |
| **Kiko** | All gem crafting — catalysts, gemstones, enchant stones and ability stones |
| **Kate** | Cooking — she sells the stations rather than opening one |

Once a station is open, they all behave the same way: pick a recipe, and the craft goes into a **queue of up to ten items** that finishes on a timer. Click the queue slot to claim it.

!!! tip "Ranked players can skip the trip"
    Certain ranks unlock commands that open stations from anywhere, without visiting the NPC. If you don't have the rank, the craftsmen are the way in — and they're not going anywhere.

## The stations

| Station | Who runs it | What it's for |
| --- | --- | --- |
| **Basic Refinery** | Browntul | Refining tier-1 ores, and making Ember Stones and Big Ingots |
| **Advanced Refinery** | Browntul | Tier-2 ores and Blaze Cores |
| **Supreme Refinery** | Browntul | Tier-3 ores and Fire Essence |
| **Master Refinery** | Browntul | Tier-4 ores — the endgame metals |
| **Rusty Forge** | Velreal | Common weapons |
| **Iron Forge** | Velreal | Uncommon weapons |
| **Tempered Forge** | Velreal | Rare weapons |
| **Runed Forge** | Velreal | Epic weapons |
| **Mythic Forge** | Velreal | Legendary weapons |
| **Padded Workbench** | Velreal | Common armor |
| **Hardened Workbench** | Velreal | Uncommon armor |
| **Plated Workbench** | Velreal | Rare armor |
| **Runed Workbench** | Velreal | Epic armor |
| **Ascended Workbench** | Velreal | Legendary armor |
| **Apothecary** | Kiko | Gem Catalysts — the gateway to all gem and enchant crafting |
| **Gem Station** | Kiko | Stat gemstones |
| **Enchant Forge** | Kiko | Enchant Stones |
| **Ability Gem Forge** | Kiko | Your class's ability stones |
| **Cooking stations** | Kate | Food, buffs — [own section](../cooking/index.md) |

---

## The refineries

*Talk to **Browntul**.*

Raw ore is useless until it's refined. There are four refineries, one per mine tier, and **each only handles the ores from its own tier**.

| Refinery | Level | Yield | Fuel it burns | Fuel it makes |
| --- | --- | --- | --- | --- |
| Basic | 1 | 1 ore → **3** ingots | Ember Stone | **Ember Stone** |
| Advanced | 15 | 1 ore → **3** ingots | Blaze Core | **Blaze Core** |
| Supreme | 30 | 1 ore → **2** ingots | Fire Essence | **Fire Essence** |
| Master | 45 | 1 ore → **2** ingots | All three at once | — |

The chain matters: each refinery produces the fuel the *next one up* needs, so you can never skip a tier. Supreme is where yields drop from three to two and materials start getting genuinely scarce.

!!! warning "Master Refinery is expensive"
    A single Master refine costs **4 Ember Stones, 4 Blaze Cores and 8 Fire Essences** on top of the ore, and takes 12 seconds. Start stockpiling reagents long before you reach level 45.

The Basic Refinery is also where you make **Big Ingots** — six ingots plus two Ember Stones compress into one. See [Ores & Materials](materials.md) for why those matter.

Every refine awards both **Smelting** and **Blacksmithing** experience.

---

## Forges and workbenches

*Talk to **Velreal**.*

These don't create items from nothing — they **upgrade an item you already have**. You bring the base weapon or armor piece plus metal, and get back a crafted version with better, rolled stats.

There's a forge and a workbench for each rarity, and which one you use is decided by the rarity of the item you're upgrading.

### Weapons

Fifteen weapon types are supported: Sword, Great Sword, Katana, Dagger, Gauntlet, Spear, Axe, Great Axe, Hammer, Great Hammer, Staff, Wand, Bow, Crossbow and Shield.

**Every weapon has its own signature metal pair** — you can't substitute:

| Weapon | Metals | Weapon | Metals |
| --- | --- | --- | --- |
| Sword | Nightsteel + Sunsteel | Great Axe | Abyssium + Mystical Molten Alloy |
| Great Sword | Nightsteel + Starsteel | Hammer | Sunsteel + Mystical Molten Alloy |
| Katana | Nightsteel + Froststeel | Great Hammer | Starsteel + Mystical Molten Alloy |
| Dagger | Abyssium + Nightsteel | Staff | Sunsteel + Starsteel |
| Gauntlet | Abyssium + Froststeel | Wand | Sunsteel + Froststeel |
| Spear | Starsteel + Froststeel | Bow | Abyssium + Starsteel |
| Axe | Nightsteel + Mystical Molten Alloy | Crossbow | Abyssium + Sunsteel |
| | | Shield | Mystical Molten Alloy + Froststeel |

### Armor

Four pieces — Helmet, Chestplate, Leggings, Boots — each craftable in five ways:

| Recipe | Result |
| --- | --- |
| Plain | Rolls a **random** archetype |
| Arcane | Locked to Arcane |
| Deadeye | Locked to Deadeye |
| Reinforced | Locked to Reinforced |
| Savage | Locked to Savage |

That's the whole design: the plain recipe gambles on archetype, and the four named recipes let you **guarantee** the archetype you want by paying a different metal pair instead. Same cost, different metals — so what really gates your build is which ores you've stockpiled.

### Base versus "+"

- **Base grade** uses regular ingots in bulk — 18 to 48 of each metal, depending on the weapon's size.
- **"+" grade** uses **Big Ingots** — only two to five of each — plus Gold Ingots instead of Ember Stones, and awards more Blacksmithing experience.

Craft times run 5–10 seconds for weapons; armor is consistent by slot at 6 seconds for helmets and boots, 8 for leggings, 9 for chestplates.

---

## Gems and enchanting

*Talk to **Kiko**.*

Four stations feed into this, and the order matters:

```
Apothecary  →  Gem Catalyst  ─┬─→  Gem Station    (stat gemstones)
                              └─→  Enchant Forge  (enchant stones)

Ability Gem Forge  —  separate system, no catalyst needed
```

**The Apothecary** has exactly one recipe, and everything it consumes is a **dungeon reagent**. If you're wondering why you can't make gems, the answer is almost always that you haven't run dungeons for materials.

**The Gem Station** makes stat gemstones in four families and five quality grades. **The Enchant Forge** makes Enchant Stones — 123 of them, covering both Runaria's custom enchantments and vanilla ones, several at levels above the vanilla ceiling. Both award **Gemforging** experience.

**The Ability Gem Forge** is separate. It crafts the five levels of your class's signature ability, and it's gated by class — you only ever see recipes for the class you're currently playing, so the menu looks small even though it's one of the largest on the server.

See [Gems & Enchanting](gems.md) for the detail.

---

## Cooking stations

*Talk to **Kate** to get started.*

Cooking doesn't work like the stations on this page. Rather than opening a station at an NPC, you
**buy the furniture and place it in your own kitchen** — four different stations, each doing a
different job, and 120 dishes across them.

It's a large enough system to have [its own section](../cooking/index.md).

---

## Which profession does what

| Profession | Fed by |
| --- | --- |
| **Smelting** | Refineries only |
| **Blacksmithing** | Refineries, all forges, all workbenches |
| **Gemforging** | Gem Station and Enchant Forge |
| **Cooking** | The four [cooking stations](../cooking/stations.md) |

Blacksmithing and Gemforging both award experience on the same ladder — more for higher-rarity work — so the rarity you're working at matters more than the number of crafts.
