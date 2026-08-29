# Dungeons & Parties

Instanced dungeons spin up a private copy of the dungeon just for your group. World Dungeons are walk-in sites out in the world that run one group at a time. Both feed first-clear and speedrun leaderboards.

## Two kinds of dungeon

**Instanced dungeons** — enter with `/dungeon join <name>`, usually via an NPC or portal. You get a private copy that's cleaned up when the run ends. Each has its own player range, time limit, entry requirements, and per-player cooldown.

**World Dungeons** — fixed sites in the open world. **No command needed; you enter by walking in.** They run world-boss style: one active run at a time, with a global cooldown shared by everyone. The site resets in place, and respawns are announced on Discord.

## Entry requirements

Individual dungeons can require a class, a class level range, or a profession. Depending on the dungeon, that's checked against every player or just the party leader.

## Parties

`/party` opens the party GUI.

- Parties hold up to **6 players** and **survive server restarts**.
- Set them **Open** or **Closed**. Browse open parties, or post in **Looking-For-Players** with category, level-range, and class filters.
- Member heads in the menu show class, level, status, and their 3 fastest runs.
- **Party EXP sharing:** when any member earns main-class EXP from any source, every other online member gets the same full amount, wherever they are. Profession EXP is never shared.
- If your party leader starts a dungeon, everyone gets an opt-in prompt. The run launches once everyone accepts, or after 30 seconds.

## Inside a dungeon

- A scoreboard tracks elapsed time, lives remaining, players alive, and your current objective.
- Objectives range from kill counts and bosses to lever puzzles, hold zones, proximity triggers, and sealed doors.
- **Lives and checkpoints are shared by the party.** Activate checkpoints to move your respawn point.
- Dying **eliminates you into a spectator state** rather than ending the run — the rest of the party fights on.
- **Loot chests are per-player:** everyone opens the same chest and gets their own roll. Chests are never consumed.
- Loot that doesn't fit your inventory goes to a pending queue and is **delivered on your next login**.
- Disconnecting gives you **2 minutes** to reconnect before you're dropped from the run.

[Traits](../progression/traits.md) and [guild upgrades](../guilds/guilds.md#guild-upgrades) can shorten cooldowns, add loot rolls, and boost party EXP.

## Leaderboards

`/leaderboard` opens the browser: **solo and group first clears**, **solo and group fastest times** (top 3 each), and per-dungeon total clear counts. Your personal best is recorded per dungeon.

## Commands

| Command | What it does |
| --- | --- |
| `/dungeon list` | List dungeons and whether each is currently playable (aliases `/dg`) |
| `/dungeon info <id>` | Description, player range, time limit, cooldown |
| `/dungeon join <name>` | Enter a dungeon — party if you lead one, otherwise solo |
| `/dungeon join` | Accept a pending party launch |
| `/dungeon leave` | Leave your run, or exit safely from a World Dungeon |
| `/party` | Party GUI (alias `/p`) |
| `/party create\|invite\|accept\|leave\|disband\|open\|close\|inbox\|list` | Party shortcuts |
| `/leaderboard` | Dungeon leaderboards (alias `/lb`) |

!!! tip "Stuck in a World Dungeon?"
    `/dungeon leave` teleports you to the site's safe exit — useful if you've wandered into one mid-cooldown.
