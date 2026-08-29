# Quests & Quest Points

Three layers of quests: a **story line** that introduces the server, a **daily quest board** with 300 quests and its own shop currency, and **guild quest boards** that feed your guild's fame.

## The story line

Eight quests played in order, starting automatically for every new player:

*Welcome to Runaria → All About Classes → Meet Sylari's Citizens → Creating a Guild → The Sacred Garden → What Are Traits → What Are Skills → What Are Attributes*

They introduce every major system through NPC dialogue and pay money and skill points along the way.

Priest **Caelen** also offers **one daily quest** — End- and undead-themed — once you're a few story quests in. Each completion pays 500 money and deepens your [relationship](../world/npcs.md) with him.

## The daily quest board

Open it by clicking a **Quest Board** in a town, or with `/dailyquests`. It's a quest *log*, not a pick-one board — you take several quests at once.

- **Board slots grow with your lifetime quest points:** 9 slots to start, +1 per 10 lifetime points, capped at 27.
- **Quest rarity improves** as your lifetime points grow — from mostly Common draws at zero points to a healthy spread of Rare, Epic, and Legendary at 150+.
- **3 board refreshes per day**, and you earn them: clear every quest on your board and you can claim a whole new one. The quest day rolls over at 3:00 AM ET.
- All 300 daily quests are kill or delivery quests, and **every one ends with Kael** — she's where rewards are collected.

## Quest points & Quest Boxes

Every daily quest pays **1 spendable quest point**.

!!! note "Two different point counters"
    Your **lifetime** quest point score only unlocks board slots and better rarities. Your **spendable** points are the shop currency. Spending never reduces your lifetime score, so it can't cost you board slots or leaderboard rank.

Dailies also drop **Quest Boxes** — loot boxes you carry as items.

- **Left-click to preview** the full loot table with real odds. **Right-click to open.**
- Common / Uncommon / Rare quests give 1 / 2 / 3 common boxes. Epic / Legendary give 1 / 2 uncommon boxes.
- Boxes contain gear, ingots, seeds, potions, gemstones, money bundles, skill and attribute points, rare Class Tokens — and very rare rolls of any of the 33 [Bots](../automation/bots.md) or 10 [Backpacks](../economy/backpacks.md).

## The Quest Shop

`/questshop` spends your points.

| Item | Price | Daily limit |
| --- | --- | --- |
| Common Quest Box | 12 pts | — |
| Uncommon Quest Box | 40 pts | 2 |
| Class Token | 75 pts | 1 |
| Small Health Potion ×8 | 6 pts | — |
| Small Mana Potion ×8 | 6 pts | — |
| Assorted Seeds ×4 | 5 pts | — |
| Cracked Ruby Gemstone | 20 pts | — |
| $10,000 | 8 pts | 5 |
| Hunting Backpack (14–22 slots) | 50 pts | 1 |

## Guild quest boards

Served from the **guild menu**, not an NPC.

- Your guild's rank decides how many contracts are offered per cycle. You run one at a time — more with the Ambitious Endeavors upgrade.
- Progress is **shared across the guild**, and completion pays **guild fame + guild bank money**, plus an MVP bonus (an item or a skill/attribute point) for the top contributor.
- Rewards scale steeply with rank: an F-board quest pays ~20 fame and 1,000 bank; an S-board quest pays ~800 fame and 60,000 bank.
- Board refreshes are earned by finishing the whole assignment — base 5 per day, up to 20 with upgrades.
- The **Contract Broker** NPC sells 8 extra daily-rerolled contracts for guild bank money.

!!! info "Fame or points, never both"
    Guild quests award **fame**, not quest points. Daily quests award **points**, not fame.

## Commands & leaderboards

| Command | What it does |
| --- | --- |
| `/dailyquests` | Open the daily quest board (aliases `/daily`, `/dq`) |
| `/questshop` | Open the Quest Shop (aliases `/qshop`, `/dailyshop`) |
| `/questpoints` | Check your spendable point balance (aliases `/qp`) |
| `/questpoints top` | Quest point leaderboard |

The board GUI also holds leaderboards for lifetime points earned and dailies completed. Both rank on lifetime totals, so spending in the shop never drops your placing.
