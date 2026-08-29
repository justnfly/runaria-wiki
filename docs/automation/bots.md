# Bots

Placeable mini-robots that automate the grind: farming, planting, collecting, fishing, cooking, and smelting. Six families across six rarities each — 36 bots in all.

## Placing and managing

- Place a bot like any item. It appears as a small robot — by default wearing the face of whoever placed it.
- **Right-click** to open its menu. **Sneak + right-click** to pick it back up (empty its storage first).
- Bots wander up to **6 blocks** from where you set them.
- Each bot floats a status tag showing what it's doing with a countdown: *"Harvesting 4s"*, *"Fishing…"*, *"Planting 6s"*.
- In the menu you can collect loot, **rename** the bot, **change its head** to any skin, install a fishing rod, and pick it up.

!!! warning "Placement limits"
    You can have **10 bots** at once. Bots must be placed **inside your own [guild's claim](../guilds/guilds.md)**, and each guild has a shared cap of **5 + Mechanized Workforce upgrade level + (members ÷ 3)**.

## Farm bots

Walk a lane, dwell on each block to harvest a strip, and turn around at the field edge. They harvest custom crops (which replant themselves) and vanilla wheat, carrots, potatoes, beetroot, and nether wart — breaking then re-seeding those.

| Tier | Walk speed | Harvest time | Reach each side | Bonus crops |
| --- | --- | --- | --- | --- |
| Common | 1.5 b/s | 8.0s | 0 | — |
| Uncommon | 2.0 b/s | 6.0s | 1 | — |
| Rare | 2.5 b/s | 4.5s | 2 | +1 |
| Epic | 3.0 b/s | 3.0s | 3 | +1 |
| Legendary | 3.5 b/s | 2.0s | 4 | +2 |
| Unique | 4.0 b/s | 1.5s | 5 | +3 |

**Legendary and Unique farm bots are season-aware:** with one in-game day left in a season they fully harvest the field, bank the seeds, and replant the next season's crop from their seed bag.

## Planter bots

Patrol a field and fill **empty tilled farmland** from their seed bag. At season end they break the current crop and replant for the next season.

**Every planter tier is season-aware.** Their storage grid *is* the seed bag — click a stack to withdraw, click or shift-click to deposit, or use the "Empty seed bag" button. They also vacuum loose seeds within 6 blocks and get first claim on dropped seeds over a collector.

## Collection bots

Epic and above only. Stationary vacuums that pull ground items into storage, with per-category toggles for seeds, produce, and other.

| Tier | Coverage |
| --- | --- |
| Epic | 1 chunk |
| Legendary | 3×3 = 9 chunks |
| Unique | 5×5 = 25 chunks |

Seeds are handed to a nearby planter first. Farm bots inside a collector's coverage drop their haul for the collector instead of banking it themselves.

## Fishing bots

Install a fishing **rod** in the bot's menu and it catches exactly what that rod is capable of catching, on a timer.

| Tier | Catch time |
| --- | --- |
| Common | 20.0s |
| Uncommon | 16.0s |
| Rare | 12.0s |
| Epic | 9.0s |
| Legendary | 6.0s |
| Unique | 4.0s |

Each bot's **weight** stat biases toward common, high-volume loot, while **luck** biases toward rarer catches. If you're offline, catch attempts are banked and resolved later.

## Cooking & smelting bots

Auto-craft a chosen recipe with **your profession scaling, quality stamps, and profession EXP** — exactly as if you'd made it by hand at the station.

- **Cooking bots** discover every recipe with a food output. **Smelting bots** discover every recipe with an ingot output.
- Pick a recipe in the bot's menu, then feed ingredients by hand or by hopper.
- Craft time runs from 20.0s (Common) down to **4.0s (Unique)**.

!!! info "Rarity gates recipes"
    A bot only offers recipes whose output tier is **at or below its own rarity**. A Common cooking bot can't make Legendary food.

## Hopper support

A bot standing **on** a hopper unloads its storage into it. A hopper directly **above** a bot feeds it — seeds go to a planter's seed bag, everything else to storage.
