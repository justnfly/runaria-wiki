# Traits

Traits are permanent passive bonuses tied to your character. There are **560 traits across 7 rarities**, earned randomly by playing, upgraded with Runaria Coins, and catalogued in a public codex.

## Earning traits

- You receive **2 starting traits** after choosing your first class.
- After that, traits unlock from **earning class experience** — one new trait roughly every 2,000–10,000 main-class EXP. The exact threshold is random each time, so traits keep coming even at max level. A "Next Trait" progress bar sits in the `/traits` menu.
- You can hold **7 traits** by default. Higher ranks can hold 9, 11, 14, or unlimited.

## Rarities & costs

| Tier | Roll chance | Max level | Base upgrade cost | Extraction cost |
| --- | --- | --- | --- | --- |
| Common | 55% | 3 | 50 | 150 |
| Uncommon | 25% | 4 | 100 | 300 |
| Rare | 12% | 5 | 200 | 700 |
| Epic | 5% | 6 | 400 | 1,500 |
| Legendary | 2% | 7 | 800 | 3,500 |
| Unique | 0.9% | 8 | 1,500 | 8,000 |
| God-Like | 0.1% | 9 | 3,000 | 20,000 |

Upgrades are paid in **Runaria Coins** and get more expensive each level — each tier has its own cost curve.

## Pity system

After **100 trait rolls** without a Legendary or better, your next roll is guaranteed high-tier: 70% Legendary, 29% Unique, 1% God-Like. A "Pity: N/100" bar in the `/traits` menu shows your progress toward it.

## Extract, shatter & the codex

- **Extract** — pay the tier's extraction cost to pull a trait off your character into a tradeable **Trait Star**. Anyone can right-click a Trait Star to claim that trait; the star is only consumed on a successful claim, so it fails cleanly if your trait slots are full.
- **Shatter** — destroy a trait for free to clear a slot. No coins spent, but no star either.
- **Codex** (`/traits codex`) — a public catalogue of every trait and its stats. Entries show *Owned*, *Owned before (extracted)*, or *Not owned*. Discovery is permanent, so an extracted trait still reads as previously owned.
- **Boons** are special staff-granted traits that never roll and don't count toward your trait limit.

## Integration traits

Some traits reach into other systems: shop prices, dungeon cooldowns and bonus loot, crafting success and quality, resource-drop bonuses, and party EXP. They're normal traits — they roll like any other and count toward your limit.

!!! warning "Bonuses don't stack"
    When several traits affect the same thing, the **highest one wins**. Holding two loot-bonus traits is no better than holding the stronger one.

## Commands

| Command | What it does |
| --- | --- |
| `/traits` | Open the Traits menu |
| `/traits codex` | Open the trait codex |
| `/traits claim` | Claim the Trait Star you're holding |
| `/traits upgrade <trait>` | Upgrade a trait by name |
| `/traits extract <trait>` | Extract a trait into a Trait Star |
| `/traits shatter <trait>` | Destroy a trait for free |

**Menu controls:** left-click a trait for detail · right-click to upgrade · shift-right-click to extract · shift-left-click to shatter.
