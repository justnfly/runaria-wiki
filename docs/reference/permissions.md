# Permissions

Three tiers:

- **Everyone** — granted by default, no setup needed.
- **Rank-grant** — default off, meant for donor and rank ladders.
- **Op** — staff only.

## Player permissions

Granted to everyone by default.

| Node | Grants |
| --- | --- |
| `runariaclasses.use` | `/class`, `/classes`, `/subclass`, own token balance |
| `runariatraits.use` | `/traits` and all its subcommands |
| `runariaguilds.use` · `.create` · `.claim` | Guild menu · creating guilds · claiming land |
| `runariaquests.use` | Quest shop and points (the commands are open regardless) |
| `dungeoncore.player.use` · `.start` · `.party` · `.clan` · `.leave` · `.leaderboard` | All player dungeon and party features |
| `runariaevents.use` | `/events` |
| `anomalyzones.participate` · `.claim` · `.list` · `.track` | Anomaly participation, cache claims, `/anomalys`, compass tracking |
| `resourcedrops.use` · `.info` · `.track` · `.compass` | Resource-drop GUIs, details, tracking |
| `runariapvp.use` | `/rogue` and `/bounty` |
| `siegezones.capture` | Capturing siege zones |
| `omnimarket.use` · `.analytics.view` · `.orders.*` · `.store.*` · `.eviction.use` · `.shop.customize` / `.advertise` / `.review` | All market features. Legacy `serverbazaar.use` is also honoured |
| `runariabackpacks.use` · `.upgrade` | Opening backpacks · the upgrade station |
| `runariabots.use` | Placing and managing your own bots |
| `dynamicnpc.chat` · `.relationships` · `.affinity.view` | NPC conversations · `/relationships` · `/affinity` |

## Rank-grant permissions

Default **off**. Assign these to donor or staff ranks.

| Node | Grants |
| --- | --- |
| `omnimarket.ah.limit.10\|25\|50\|100` | Auction House listing caps (base 5) |
| `omnimarket.orders.limit.10\|25\|50\|100` | Market order caps (base 5) |
| `omnimarket.store.limit.1\|2\|3` | Storefront ownership caps |
| `omnimarket.store.trusted.5\|10` · `.blacklist.25` | Trust and blacklist slots per store |
| `runariatraits.max.vip\|elite\|mythic\|unlimited` | Trait limits 9 / 11 / 14 / unlimited (base 7) |
| `resourcedrops.teleport` | `/rd tp` — teleport straight to a drop |
| `dimensionunlocker.bypass.nether\|end` | Enter a locked dimension |

!!! note "Highest wins"
    Where several limit nodes apply to the same player, the highest value is used — you don't need to strip lower ones when promoting a rank.

## Admin permissions

Default **op**.

| Node | Covers |
| --- | --- |
| `runariaclasses.admin` | Class tokens, unlocks, reload, wipe |
| `runariatraits.admin` · `runariatraits.codex.viewall` | `/traitsadmin` · fully revealed codex |
| `runariaguilds.admin` | `/guildadmin`, plus claim-protection bypass |
| `runariaquests.admin` | Boxes, points, shop, daily reset |
| `dungeoncore.admin.*` | Parent of ~20 children: `use`, `reload`, `setup`, `instances`, `cleanup`, `start`, `teleport`, `bypass`, `editor`, `create`, `publish`, `delete`, `import`, `test`, `wand`, `featuremanager`, `leaderboard` (`.edit` / `.reset` / `.reward` / `.rewardbag` / `.icon`) |
| `runariaevents.admin` | `/events reload` and the Discord bridge |
| `anomalyzones.admin` · `.admin.teleport` · `.bypass` | Full anomaly admin · GUI teleport · zone and cache restriction bypass |
| `resourcedrops.admin` | Parent of `info.admin`, `notify.admin`, `reload`, `debug`, `bypass`, `build`, `tables`, `mobs`, `scheduler`, plus all player nodes |
| `runariapvp.admin` | `/runariapvp` |
| `siegezones.admin` · `.bypass` | `/siege` and all subcommands · siege restriction bypass |
| `omnimarket.admin` | Umbrella covering `.coins`, `.reload`, `.debug`, `.stock.edit`, `.blackmarket.refresh`, `.seedshop.forcerestock`, `.npc.link`, `.admin.dashboard` / `.events` / `.categories` / `.market-history` / `.manipulation` / `.orders` / `.reviews` / `.advertising`, `.admin.storefront.*` (create, edit, delete, evict, transfer, rent, tax, worldguard, npc, priority), `.admin.eviction.*` (view, force, clear, restore), `.shop.customize.admin`, `.shop.badges.admin`. Implies legacy `serverbazaar.admin` |
| `runariabackpacks.admin` · `runariabots.admin` | Give / reload / inspect / wipe. Bots admin also bypasses the per-player cap and the guild-claim gate |
| `runariaclearlag.admin` · `runariadiscordcmd.admin` · `runariamythicflags.admin` · `runariaregionnames.admin` · `dimensionunlocker.admin` · `mysterymask.reload` | Their respective admin commands |
| `runariadoors.*` | Parent of `runariadoors.command.open` / `.close` / `.toggle` / `.reload` / `.admin`, plus any per-door `permission:` nodes defined in config |
| `runariaskillhud.*` | Parent of `runariaskillhud.command.sync` / `.info` / `.list` / `.debug` / `.reload` |
| `lifeskillsitemcore.admin` | Parent of `.reload`, `.inspect`, `.stamp`, `.applyfoodbuff`, `.rollstone`, `.givestone`, `.calcgemexp`, `.testgemexp` |
| `dynamicnpc.admin` | `/dnpc` and `/relationship` |
