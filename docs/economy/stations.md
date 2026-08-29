# Crafting Stations

Every station works the same way: open it with its command, pick a recipe, and the craft goes into a **queue of up to ten items** that finishes on a timer. Click the queue slot to claim.

## The stations

| Station | Command | What it's for |
| --- | --- | --- |
| **Basic Refinery** | `/basicrefinery` | Refining tier-1 ores, and making Ember Stones and Big Ingots |
| **Advanced Refinery** | `/advancedrefinery` | Tier-2 ores and Blaze Cores |
| **Supreme Refinery** | `/supremerefinery` | Tier-3 ores and Fire Essence |
| **Master Refinery** | `/masterrefinery` | Tier-4 ores — the endgame metals |
| **Rusty Forge** | `/rustyforge` | Common weapons |
| **Iron Forge** | `/ironforge` | Uncommon weapons |
| **Tempered Forge** | `/temperedforge` | Rare weapons |
| **Runed Forge** | `/runedforge` | Epic weapons |
| **Mythic Forge** | `/mythicforge` | Legendary weapons |
| **Padded Workbench** | `/paddedbench` | Common armor |
| **Hardened Workbench** | `/hardenedbench` | Uncommon armor |
| **Plated Workbench** | `/platedbench` | Rare armor |
| **Runed Workbench** | `/runedbench` | Epic armor |
| **Ascended Workbench** | `/ascendedbench` | Legendary armor |
| **Apothecary** | `/apothecary` | Gem Catalysts — the gateway to all gem and enchant crafting |
| **Gem Station** | `/gemstation` | Stat gemstones |
| **Enchant Forge** | `/enchantforge` | Enchant Stones |
| **Ability Gem Forge** | `/abilityforge` | Your class's ability stones |
| **Cooking Station** | `/cooking` | Buff foods |

---

## The refineries

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

## The Cooking Station

The only station gated primarily on **profession level** rather than materials, and it has the widest range on the server — recipes from level 1 all the way to 180.

Thirty dishes, each in three grades depending on the star quality of the crop you cook with. See [Cooking & Food](../lifeskills/cooking.md).

!!! tip "It's its own roadmap"
    Unlike most stations, the Cooking Station **shows you recipes you haven't unlocked yet**. Open it at level 1 and you can see the entire progression ahead of you.

---

## Which profession does what

| Profession | Fed by |
| --- | --- |
| **Smelting** | Refineries only |
| **Blacksmithing** | Refineries, all forges, all workbenches |
| **Gemforging** | Gem Station and Enchant Forge |
| **Cooking** | Cooking Station only |

Blacksmithing and Gemforging both award experience on the same ladder — more for higher-rarity work — so the rarity you're working at matters more than the number of crafts.
