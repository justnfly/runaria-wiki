# Bots

Placeable mini-robots that automate the grind: farming, planting, collecting, cooking, and smelting. Each family comes in six rarities, from Common up to Unique.

## Placing and managing

- Place a bot like any item. It appears as a small robot — by default wearing the face of whoever placed it.
- **Right-click** to open its menu. **Sneak + right-click** to pick it back up (empty its storage first).
- Bots wander up to **6 blocks** from where you set them.
- Each bot floats a status tag showing what it's doing with a countdown: *"Harvesting 4s"*, *"Planting 6s"*, *"Collecting…"*.
- In the menu you can collect loot, **rename** the bot, **change its head** to any skin, and pick it up.

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

## Cooking bots

One bot per [cooking station](../cooking/stations.md) — prep, chopping, stove and oven — each in six
rarities. Pick a recipe in the bot's menu, feed it ingredients by hand or by hopper, and it cooks with
**your Cooking level and your ingredient quality**, exactly as if you'd stood there yourself.

- **It has to stand next to a real station** of its own type, within about five blocks.
- **One cook at a time.** The bot queues for the station like anyone else, and it loses to a player.
- **It can only cook what you've discovered.** A bot is no way around the [recipe book](../cooking/recipe-book.md).
- **Cooking experience comes back at half rate**, and is held for you if you're offline.

!!! info "Rarity buys reliability, not just speed"
    Cheap bots are sloppy — they burn food, come up short, and fumble their cuts. Expensive ones
    rarely do. Rarity also gates recipes: below Epic a bot is capped at its own rarity, while an Epic
    or better bot can attempt anything up to Unique — but each tier above its own takes far longer.

## Smelting bots

Auto-craft a chosen smelting recipe with **your profession scaling, quality stamps, and profession
EXP** — exactly as if you'd made it by hand at the station.

- Smelting bots discover every recipe with an ingot output.
- A bot only offers recipes whose output tier is **at or below its own rarity**.

## Hopper support

A bot standing **on** a hopper unloads its storage into it. A hopper directly **above** a bot feeds it — seeds go to a planter's seed bag, everything else to storage.
