# Farming & Seasons

Runaria replaces vanilla farming with a seasonal system. Crops only grow in their season, need watering, and roll a quality grade when harvested.

## Seasons

Four seasons rotate automatically — **Spring → Summer → Autumn → Winter** — each lasting **28 in-game days**, or roughly **9 hours of real time**. A full year takes about a day and a half.

- Planting a crop **out of season is refused outright**.
- If the season turns while a crop is in the ground, it simply **stops growing**. It doesn't die.
- **Greenhouse Glass** within 5 blocks protects crops from seasonal withering.
- **Scarecrows** protect crops within 7 blocks from crows.

Farming is disabled in the spawn world — plant elsewhere.

## How growth works

Crops advance by **growth points** rather than vanilla stages. Each tick that passes its conditions gives one point, and the crop is harvestable once it reaches its total.

Two things are checked every tick:

1. **Season** — must be one the crop accepts.
2. **Water** — field crops need at least 1 in the pot, tree and fruit crops need at least 2.

A pot holds **12 water**, collects rainwater, and takes one fertilizer at a time. A water bucket adds 3, a bottle adds 1.

!!! warning "Dry pots kill crops"
    On any tick where the pot is dry, most crops have a high chance of withering. **Apple, Garlic and Dragon Fruit are the exceptions** — they have no death conditions at all, which makes them the safest crops to leave unattended.

## Star quality

Every harvest rolls a grade:

| Grade | Base chance |
| --- | --- |
| Normal | 85% |
| ⭐ **Silver Star** | 10% |
| ⭐ **Golden Star** | 5% |

Quality fertilizer shifts those odds substantially:

| Fertilizer | Normal / Silver / Golden |
| --- | --- |
| Quality I | 70% / 20% / 10% |
| Quality II | 55% / 30% / 15% |
| Quality III | 40% / 40% / 20% |

Star crops aren't just worth more — **Silver and Golden crops are the required ingredients for Silver and Golden dishes** at the [Cooking Station](cooking.md).

## The crops

"Points" is how many successful growth ticks a crop needs — lower is faster.

| Crop | Season | Points | Yield | Stars | Farming XP |
| --- | --- | --- | --- | --- | --- |
| Cucumber | Spring | 4 | 1–5 | Yes | 3 |
| Cabbage | Spring | 4 | 1 | Yes | 3 |
| Napa Cabbage | Spring | 3 | 1 | Yes | 6 |
| Cherries | Spring | 4 | 1–5 | Yes | 6 |
| Tomato | Spring, Autumn | 6 | 1–4 | Yes | 3 |
| Corn | Summer | 3 | 1 | Yes | 3 |
| Blackberry | Summer | 4 | 1–5 | Yes | 3 |
| Blueberry | Summer | 4 | 1–5 | Yes | 6 |
| Hop | Summer | 3 | 2–5 | Yes | 6 |
| Chili | Autumn | 3 | 1–5 | No | 3 |
| Pepper | Autumn | 5 | 3–6 | Yes | — |
| Grape | Autumn | 8 | 3–5 | Yes | 6 |
| Garlic | Winter | 3 | 4 | Yes | 3 |
| Plum | Winter | 3 | 1–5 | No | 6 |
| Raspberry | Winter | 4 | 1–5 | Yes | 3 |
| Eggplant | Summer, Autumn | 3 | 2–5 | Yes | 9 |
| Guava | Summer, Autumn | 4 | 1–5 | Yes | 14 |
| Papaya | Summer, Autumn | 4 | 1–5 | Yes | 14 |
| Avocado | Spring, Summer | 4 | 1–5 | Yes | 9 |
| Coconut | Spring, Summer | 4 | 1–5 | Yes | 21 |
| Orange | Spring, Summer | 2 | 1–5 | No | 9 |
| Lemon | Winter, Spring | 4 | 1–5 | No | 9 |
| Mango | Winter, Spring | 4 | 1–5 | Yes | 14 |
| Goji Berry | Autumn, Winter | 4 | 1–5 | Yes | 9 |
| Kiwi | Autumn, Winter | 4 | 1–5 | Yes | 14 |
| Pineapple | Autumn, Winter | 4 | 1 | Yes | 9 |
| Peach | Spring–Autumn | 2 | 1–5 | No | 6 |
| Starfruit | Spring–Autumn | 4 | 1–5 | Yes | 21 |
| Dragon Fruit | Spring, Autumn, Winter | 8 | 3–5 | Yes | 21 |
| Durian | Summer–Winter | 4 | 1–5 | Yes | **32** |
| Red Packet | Spring, Summer, Winter | 5 | 1–4 | No | **32** |
| **Lychee** | **All four** | 4 | 1–5 | Yes | 21 |
| **Apple** (tree) | **Any** | 8 | 1–4 | No | 3 |

**Reading that table:** Lychee is the only crop that grows year-round *and* has star grades. Apple is the only fully unrestricted one. **Durian and Red Packet** give the most farming experience. Grape, Dragon Fruit and Apple are the slowest.

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
