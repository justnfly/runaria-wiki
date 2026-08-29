# Farming & Seasons

Runaria replaces vanilla farming with a seasonal system. Crops grow only in their season, need watering, and roll a quality grade when harvested.

## Seasons

Four seasons rotate automatically — **Spring → Summer → Autumn → Winter** — each lasting **28 in-game days**, or roughly **9 hours of real time**. A full year takes about a day and a half.

- Planting a crop **out of season is refused outright**.
- If the season turns while a crop is in the ground, it simply **stops growing**. It does not die.
- Farming is disabled in the spawn world — plant elsewhere.

!!! tip "Greenhouse Glass beats the calendar"
    **Greenhouse Glass within 5 blocks lets a crop grow in any season.** That's the real reason to build a greenhouse: not protection from winter, but the ability to farm a Spring crop in Autumn and keep every plot productive year-round.

## What actually kills crops

**Crows.** That's it.

Seasons don't kill anything on Runaria — an out-of-season crop just sits there until its season comes round again, or until you glass it in. **Scarecrows protect crops within 7 blocks** from crows, and a scarecrow plus greenhouse glass makes a plot effectively safe.

## How growth works

Crops advance by **growth points** rather than vanilla stages. Each tick that passes its conditions gives one point, and the crop is harvestable once it reaches its total.

Two things are checked every tick:

1. **Season** — must be one the crop accepts, unless Greenhouse Glass is covering it.
2. **Water** — the farmland has to stay hydrated. Tree and fruit crops are thirstier than field crops.

Runaria uses **ordinary vanilla farmland**, so the usual rules apply: keep water within range of your plot, or bring it to the crops yourself with a watering can or a sprinkler. Rain waters your fields for free. Dry farmland won't kill a crop, but it will stall it.

## Star quality

Every harvest rolls a grade:

| Grade | Base chance |
| --- | --- |
| Normal | 85% |
| **Silver Star** | 10% |
| **Golden Star** | 5% |

Quality fertilizer shifts those odds substantially:

| Fertilizer | Normal / Silver / Golden |
| --- | --- |
| Quality I | 70% / 20% / 10% |
| Quality II | 55% / 30% / 15% |
| Quality III | 40% / 40% / 20% |

Star crops aren't just worth more — **Silver and Golden crops are the required ingredients for Silver and Golden dishes** at the [Cooking Station](cooking.md).

## Seeds and rarity

Every crop has a rarity, and rarity is what decides how hard its seed is to come by. Seeds come from **Seed Bags**, which roll **three times** each.

| Rarity | Seeds in the pool | Chance of *any* seed of this tier, per bag | Chance of one **specific** seed, per bag |
| --- | --- | --- | --- |
| Common | 9 | 87.5% | 15.8% |
| Uncommon | 6 | 57.8% | 12.0% |
| Rare | 6 | 36.4% | 6.8% |
| Epic | 5 | 20.9% | 4.4% |
| Legendary | 4 | 8.7% | 2.2% |
| Unique | 1 | 1.5% | 1.5% |

!!! note "Reading those numbers"
    The last column is the one that matters when you're hunting a particular crop. Chasing **Lychee** specifically is roughly a 1-in-67 bag, while any given Common seed turns up in about one bag in six.

Seeds can also be bought from the [server shop](../economy/market.md), which restocks a small rotating selection every three hours — weighted so common seeds appear far more often than rare ones.

## The crops

"Points" is how many successful growth ticks a crop needs — lower is faster.

### Common

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Blackberry | Summer | 4 | 1–5 | Yes | 3 |
| Cabbage | Spring | 4 | 1 | Yes | 3 |
| Chili | Autumn | 3 | 1–5 | No | 3 |
| Corn | Summer | 3 | 1 | Yes | 3 |
| Cucumber | Spring | 4 | 1–5 | Yes | 3 |
| Garlic | Winter | 3 | 4 | Yes | 3 |
| Pepper | Autumn | 5 | 3–6 | Yes | — |
| Raspberry | Winter | 4 | 1–5 | Yes | 3 |
| Tomato | Spring, Autumn | 6 | 1–4 | Yes | 3 |

### Uncommon

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Blueberry | Summer | 4 | 1–5 | Yes | 6 |
| Cherries | Spring | 4 | 1–5 | Yes | 6 |
| Grape | Autumn | 8 | 3–5 | Yes | 6 |
| Hop | Summer | 3 | 2–5 | Yes | 6 |
| Napa Cabbage | Spring | 3 | 1 | Yes | 6 |
| Plum | Winter | 3 | 1–5 | No | 6 |

### Rare

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Avocado | Spring, Summer | 4 | 1–5 | Yes | 9 |
| Eggplant | Summer, Autumn | 3 | 2–5 | Yes | 9 |
| Goji Berry | Autumn, Winter | 4 | 1–5 | Yes | 9 |
| Lemon | Winter, Spring | 4 | 1–5 | No | 9 |
| Orange | Spring, Summer | 2 | 1–5 | No | 9 |
| Pineapple | Autumn, Winter | 4 | 1 | Yes | 9 |

Lemon is planted from a **sapling** rather than a seed.

### Epic

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Coconut | Spring, Summer | 4 | 1–5 | Yes | 21 |
| Guava | Summer, Autumn | 4 | 1–5 | Yes | 14 |
| Kiwi | Autumn, Winter | 4 | 1–5 | Yes | 14 |
| Mango | Winter, Spring | 4 | 1–5 | Yes | 14 |
| Papaya | Summer, Autumn | 4 | 1–5 | Yes | 14 |

### Legendary

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Dragon Fruit | Spring, Autumn, Winter | 8 | 3–5 | Yes | 21 |
| Durian | Summer, Autumn, Winter | 4 | 1–5 | Yes | **32** |
| Red Packet | Spring, Summer, Winter | 5 | 1–4 | No | **32** |
| Starfruit | Spring, Summer, Autumn | 4 | 1–5 | Yes | 21 |

### Unique

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| **Lychee** | **All four seasons** | 4 | 1–5 | Yes | 21 |

The only crop that grows year-round *and* has star grades — and the rarest seed in the game.

### No seed of their own

**Peach** (Spring–Autumn, 2 points, 1–5 yield, 6 XP) and **Apple** (any season, 8 points, 1–4 yield, 3 XP) don't appear in Seed Bags. Apple is a tree that keeps producing once established, and neither rolls star grades.

!!! tip "What to plant"
    **Durian and Red Packet** give the most farming experience by a wide margin. **Grape, Dragon Fruit and Apple** are the slowest growers. And because Greenhouse Glass frees you from the calendar, the practical question is less "what's in season" than "what's worth the plot".

## Tools

### Watering cans

| Tier | Water per use | Area |
| --- | --- | --- |
| I | 1 | 1×1 |
| II | 2 | 2×2 |
| III | 3 | 3×3 |
| IV | 5 | 5×5 |

### Sprinklers

| Tier | Range | Storage | Infinite water |
| --- | --- | --- | --- |
| I & II | 3×3 | 4 | No |
| **III** | **5×5** | **20** | **Yes** |

Sprinkler III is the one worth saving for — it never needs refilling.

### Fertilizers

Five families, three tiers each.

| Family | What it does |
| --- | --- |
| **Quality** | Better star odds (see above) |
| **Yield Increase** | Chance of extra crops per harvest — tier III guarantees at least two extra |
| **Speed Grow** | Chance of bonus growth points per tick |
| **Soil Retain** | 10%, 20% or 30% chance not to consume water |
| **Variation** | 2%, 4% or 8% chance to mutate into a variant crop |

Quality and Soil Retain last 28 growth cycles; the others last 14.

!!! note "Apply order matters"
    **Quality, Speed Grow and Yield Increase must go on before you plant.** Soil Retain and Variation can be applied at any time.
