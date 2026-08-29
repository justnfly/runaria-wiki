# Admin Commands

Staff-only commands, per plugin. All default to op unless noted.

!!! danger "Season resets"
    Several plugins ship a `wipeplayerdata` command. They all share the same safety gate: **run it once** to see exactly what will be destroyed, then **rerun it with `confirm` within 30 seconds** to execute. Each entry below notes what it keeps.

## Progression

??? note "RunariaClasses — `/classtokens`"
    Aliases `/classtoken`, `/ctokens`. All require `runariaclasses.admin`.

    - `give|take|set <player> [amount]` — manage token balances
    - `item <player> [amount]` — give the physical token item
    - `balance <player>` — check another player's balance
    - `reload` — reload config, messages, GUIs, and re-parse the class hierarchy
    - `wipeplayerdata [confirm]` — wipes token balances and unlock entitlements; **keeps** each player's current class

??? note "RunariaTraits — `/traitsadmin`"
    - `gui [player]` — trait editor (left-click +1 level, right-click −1, shift-right removes)
    - `give <player> <trait_id>` — grant a specific trait; **the only way to hand out Boons**
    - `random <player>` — grant a random rolled trait
    - `remove <player> <trait>` · `setlevel <player> <trait> <lvl>`
    - `reload` · `debug [player]` — shows identity mode, unlock mode, EXP progress, pity counter
    - `wipeplayerdata [confirm]` — deletes every owner profile and strips live stat modifiers without a relog; **keeps** trait definitions, tiers, GUIs

??? note "RunariaSkillHUD — `/skillhud`"
    Aliases `/rshud`, `/runariaskillhud`.

    - `sync [player|all]` — re-apply the correct casting HUD
    - `info [player]` — class, expected layout, active layouts, HUD readiness
    - `list` — the class → layout map, flagging layouts missing from MythicHUD
    - `debug [on|off|reset]` · `reload`

## Guilds & Quests

??? note "RunariaGuilds — `/guildadmin`"
    Aliases `/gadmin`, `/clanadmin`. Requires `runariaguilds.admin`.

    - `list` · `info <guild>` · `disband <guild>`
    - `setbank <guild> <amt>` · `setupgrade <guild> <KEY> <lvl>` — free of charge
    - `unclaimall <guild>` · `rename <guild> <name>` · `settag <guild> <tag>`
    - `fame give|take|set` — adjust fame
    - `decay pause|resume` — server-wide decay pause, persisted across restarts
    - `monument set` — place the Champion Monument NPC
    - `broker set` — place the Contract Broker NPC
    - `questreset [confirm]` — wipes guild quest data only; **keeps** fame, banks, upgrades, claims
    - `wipeplayerdata [confirm]` — full season reset: every guild, claim, region, marker, all fame and prestige, boards, broker contracts, donation ledger, MVP counters

??? note "RunariaQuests — `/questbox`, `/dailyreset`"
    - `/questbox list|give|open|preview|edit|reload` — `preview` prints real percentages; `edit` is the in-game loot editor (hold an item and click ADD)
    - `/questpoints give|take|set <player> <amt>` — manage spendable point balances
    - `/questshop <player>` and `/dailyquests <player>` — open the menus for someone else (console/NPC friendly)
    - `/dailyreset [confirm]` — wipes all daily-quest data: board assignments, refresh counters, spendable points, lifetime earned, completion counts. **Does not** touch story or guild quests, or boxes already in inventories

## Adventure

??? note "RunariaDungeons — `/dungeonadmin`, `/dungeon`, `/leaderboard`"
    Aliases `/dgadmin`, `/da`.

    **Instance management**

    - `/dungeonadmin reload|list|templates|instances`
    - `/dungeonadmin start <dungeon> <player>` — force-start for a player
    - `/dungeonadmin cleanup <instanceId>` · `cleanupall`
    - `/dungeonadmin wand` — the dungeon selection/placement wand

    **Authoring**

    - `/dungeon create <name>` — choose Instanced or World
    - `/dungeon edit [id]` — World Dungeons are edited **in place**; the site closes to players and reopens with a reset on `/dungeon leave`. Sessions auto-end after 600s idle
    - `/dungeon settings [id]` · `/dungeon reset <name>` · `/dungeon delete <id>`
    - `/dungeon join <name> <player>` — send another player in (console/NPC friendly)

    **Leaderboards**

    - `/leaderboard edit` · `reset <dungeon> <all|firstclears|speedruns|solo|group>` (takes a backup first)
    - `/leaderboard reward|rewardall|markpaid|rewardbag|icon|reload`

    **Reset**

    - `/dungeonadmin wipeplayerdata [confirm]` — wipes leaderboards, personal bests, clear counts, cooldowns, pending rewards, all parties and live instances. **Keeps** dungeon definitions, rooms, loot tables, editor worlds

??? note "AnomalyZones — `/az`"
    Base `/anomalyzones`, aliases `/az`, `/zones`. Requires `anomalyzones.admin`.

    - `menu` — admin GUI (events, drop tables, toggles, start/stop, reload)
    - `start <event> [--respect-cooldown]` — bypasses cooldown by default
    - `stop <event>` · `stopall` · `status`
    - `zones` (alias `diag`) — overlap, WorldGuard and mob diagnostics per zone
    - `drops` — drop-table editor GUI · `edit <event>` — event editor GUI
    - `purge` — remove every plugin-tagged entity · `purge orphans` — cleanup sweep only
    - `scheduler status|on|off|now [event]` — control the auto-spawn scheduler
    - `reload`

??? note "ResourceDrops — `/rd`, `/rbuild`, `/rtables`, `/rmob`"
    - `/rd start <type> [world|random|buildId]` — types are `ore_drop`, `crop_drop`, `crate_drop`, `grand_drop`
    - `/rd stop|cancel <id>` · `restore <id>` · `forcerestore <id>` — force restore ignores nearby players
    - `/rd rewards` — legacy reward manager GUI
    - `/rd debug hooks|location|event <id>|restore <id>|performance` · `/rd restoretest [size]`
    - `/rbuild` (`/rb`) — build authoring: `create|edit|wand|pos1|pos2|setorigin|save|list|info|objective add|remove|list`
    - `/rtables` — global drop-table manager GUI
    - `/rmob` — global mob-profile manager GUI

    Wand modes: BUILD_SELECTION, ANCHOR_LEVEL, OBJECTIVE, MOB_SPAWN_POINT.

??? note "RunariaPVP — `/runariapvp`"
    Alias `/rpvp`. Requires `runariapvp.admin`.

    - `reload` · `info <player>` — inspect a player's PvP record
    - `bounty add <player> <money>` · `bounty clear <player>` — clearing refunds player contributions
    - `setstatus <player> <none|rogue|neutral>` · `freecancel reset <player>`
    - `wipeplayerdata [confirm]` — statuses, kill counts, free cancels, all bounties, pending refunds, live combat tags. **Bounty money and items are not refunded**

??? note "SiegeZones — `/siege`"
    Requires `siegezones.admin`.

    - `wand` · `create` — guided zone creation
    - `setup <zone>` — configuration GUI (mobs, rewards, timings, chest link)
    - `delete <zone>` — also clears its mobs and map markers
    - `list` · `tp <zone>` · `spawnboss <zone>` · `reload`

## Economy

??? note "OmniMarket — `/omniadmin`"
    Aliases `/omadmin`, `/omadm`. Requires `omnimarket.admin`.

    - Hub subcommands: `market|items|pricing|playershops|stores|stock|logs|dashboard|maintenance|diagnostics|coins|reload`
    - `coins runaria give <player> <amount>` — grant Runaria Coins. Console-capable, and **the sanctioned way for other plugins to pay coins**
    - `/eviction force|restore|clear|cleanup` — eviction management
    - `wipeplayerdata [confirm]` — wipes all player shops, storefronts, auctions, food listings (listed stock is **not** returned), all coin balances, queued payouts, transaction log, daily limits, price trends, reviews, badges, ads, market orders and escrow, eviction storage. **Keeps** server-shop stock, black-market rotation, refresh timers, NPC links, cities, categories
    - Legacy `/bazaaradmin` (`/sbadmin`) still works

??? note "LifeSkillsItemCore — `/lsic`"
    Alias `/lifeskillsitemcore`.

    - `reload` — config, messages, station-scaling, food-buffs, enchant-stones
    - `inspect` — inspect LSIC metadata on the held item
    - `stamp` — manually stamp the held item
    - `applyfoodbuff` — apply a food buff directly (debug)
    - `rollstone <player> <stoneKey> <profLevel>` — roll a stone at a simulated level
    - `givestone <player> <stoneKey> <level>` — give a stone at an exact level
    - `calcgemexp` — print the Gemforging EXP breakdown · `testgemexp` — calculate **and grant**

??? note "MysteryStationMask — `/mysterymask`"
    Alias `/msm`. Requires `mysterymask.reload`.

    - `reload` — reloads `config.yml`, `lore.yml`, `static-stats.yml`, `textures.yml`

## Items & automation

??? note "RunariaBackpacks — `/backpacks`"
    Aliases `/backpack`, `/rbp`, `/runariabackpacks`. Requires `runariabackpacks.admin`.

    - `give <player> <id>` — give a backpack by MMOItems id, with modifier rolls applied
    - `reload`
    - `wipeplayerdata [confirm]` — wipes the stored contents of every backpack. **Keeps** the backpack items themselves; they simply open empty

??? note "RunariaBots — `/rbots`"
    Alias `/runariabots`. Requires `runariabots.admin`.

    - `give <player> <typeId> [amount] [head]` — console-runnable, for dungeon and reward drops
    - `list` · `inspect` · `clearcrops` · `reload`
    - `wipeplayerdata [confirm]` — removes every placed bot, its armor stand, label and in-progress state. **Keeps** bot items in player inventories

    MythicMobs drop syntax: `runariabot{type=<id>;head=<skin>}`

    Admin also bypasses the per-player cap and the guild-claim placement gate.

## World & infrastructure

??? note "RunariaEvents — `/events` admin"
    - `reload` — reloads `config.yml` and `discord.yml`, including the Discord bridge
    - `discord status` — bridge status
    - `discord test [route]` — post a test message through a route

??? note "RunariaDoors — `/keydoor`"
    Aliases `/rdoor`, `/rd`. Console and command-block safe, so dungeons and other plugins can drive doors — e.g. `keydoor open dungeon_gate 60`.

    - `open <door> [seconds]` · `close <door>` · `toggle <door> [seconds]`
    - `list` — managed doors with live state and UID · `info <door>`
    - `key` — prints the item in your hand as a ready-to-paste `key:` config block
    - `reload`

    `<door>` accepts a BigDoors door **name or UID**.

??? note "RunariaClearlag — `/clearlag`"
    Alias `/rcl`. Requires `runariaclearlag.admin`.

    - `status` — plugin status and which hooks resolved
    - `sweep [mobs|items]` — run a manual sweep now
    - `reload`

    **Integration:** add the scoreboard tag `keep` to any entity to exempt it permanently from all sweeps.

??? note "DimensionUnlocker — `/dimensionunlock`"
    Aliases `/du`, `/dunlock`. Requires `dimensionunlocker.admin`.

    - `status` — whether each dimension is OPEN / LOCKED / DISABLED, and why
    - `unlock <nether|end>` — force permanently open, overriding the time check
    - `lock <nether|end>` — force closed even if the unlock time has passed
    - `reload`

??? note "RunariaMythicFlags — `/mythicflags`"
    Alias `/rmf`. Requires `runariamythicflags.admin`.

    - `reload`
    - `test <mobName>` — evaluate the flags for a mob at your location

    Flags are set through WorldGuard itself:

    ```
    /rg flag <region> deny-mythic-spawn Boss_*,SkeletalKnight
    /rg flag <region> allow-mythic-spawn Dungeon_*
    ```

    Both take comma-separated glob lists (`*` and `?`, case-insensitive) matched against MythicMobs internal names. Values union across all applicable regions; if `allow-mythic-spawn` is set anywhere, only matching mobs may spawn. **Deny always beats allow.** With neither flag set, mythic mobs spawn normally even where vanilla `mob-spawning` is denied.

??? note "RunariaRegionNames"
    Requires `runariaregionnames.admin`.

    - `/adddisplayname <region> <display name...>` (alias `/setdisplayname`) — spaces and MiniMessage allowed
    - `/removedisplayname <region>` (alias `/deldisplayname`)
    - `/regionnames [list|reload]` (alias `/rrn`)

??? note "DynamicNPC — `/dnpc`, `/relationship`"
    Requires `dynamicnpc.admin`.

    - `/dnpc edit` — manager GUI for the selected NPC: personality preset, tone, memory tier, custom prompt, regions, quest priority, rewards, reset memory, command button, quest bypass list
    - `/dnpc rewards` — rewards manager / drop editor
    - `/dnpc affinity <player>` · `/dnpc clearmemory <player|all>`
    - `/dnpc debug` — with an NPC selected: quest hook state, detected quests, command-trait status, whether the chooser would open
    - `/dnpc help [tone|personality]` · `/dnpc reload`
    - `/dnpc wipeplayerdata [confirm]` — wipes all memory and summaries, every relationship score with its reward milestones, and global reputation with decay timers and granted permission rewards. **Keeps** NPC definitions, lore, tone, presets, reward tables
    - `/relationship <player> <npcId> <amount|reset|view>` — used by quest command rewards

??? note "RunariaDiscordCmd — `/rdc`"
    Aliases `/runariadiscordcmd`, `/discordcmd`. Requires `runariadiscordcmd.admin`.

    - `list [command] [page]` — usage log, 10 per page, oldest first
    - `lookup <query>` — find an entry by IGN, Twitch name, or Discord name/tag/ID
    - `export [command]` — CSV to `plugins/RunariaDiscordCmd/exports/`
    - `stats` — how many accounts linked, per command
    - `reload` — re-reads config and tracking. **Slash-command definitions still need a full restart**
    - `wipeplayerdata [confirm]` — wipes the giveaway entry list. **Keeps** CSVs already exported
