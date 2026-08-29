# Developer API

Integration points for plugin developers working on the Runaria stack.

!!! abstract "House pattern"
    Cross-plugin hooks are **soft-depend + reflective**, so every plugin loads and runs cleanly when a dependency is absent. Prefer that over a compile-time dependency unless you have a reason not to.

## RunariaGuilds — the API hub

`net.runaria.guilds.api.RunariaGuildsAPI`, obtained via `RunariaGuildsProvider.get()` or the Bukkit `ServicesManager`.

Consumers today: RunariaBots, RunariaDungeons, OmniMarket, SiegeZones, ResourceDrops.

**Membership**

: `hasGuild` · `getGuildId` · `getPlayerGuild` · `getGuildByTag` · `getGuildById` · `getGuilds` · `isSameGuild` · `getMemberCount`

**Progression**

: `getGuildRank` · `getGuildFame` · `isGuildRankAtLeast` · `addGuildFame` · `recordGuildQuestCompletion` · `submitDungeonClear(dungeonId, roster)`

**Upgrades & bonuses**

: `getUpgradeLevel` · `getClassXpMultiplier` · `getProfessionXpMultiplier` · `getSellBoostMultiplier` · `getTraitRarityBonus` · `getDungeonCooldownReductionSeconds` · `getExtraDungeonItemChances` · `getCropGrowthBonusAt`

**Territory**

: `getClaimGuildIdAt(world, x, z)`

**Home / waypoints**

: `setGuildHome` · `clearGuildHome` · `setWarpHandler`. The `GuildWarpHandler{warp, setWaypoint}` seam lets a waypoint plugin take over guild home teleports.

`net.runaria.guilds.api.Guild` exposes `getId`, `getTag`, `getName`, `getLeader`, `getMembers`, `getHome()` (Optional), `isMember`, `canManageWaypoint`.

**Events** (`net.runaria.guilds.api.event`, all main-thread): `GuildCreateEvent`, `GuildDisbandEvent`, `GuildMemberJoinEvent`, `GuildMemberLeaveEvent` (LEAVE / KICK / DISBAND), `GuildRenameEvent`, `GuildHomeSetEvent` (cancellable), `GuildHomeClearedEvent`

**BeautyQuests types:** rewards `guildFame`, `guildBank`, `guildMvpPoint`, `guildMvpItem`, `guildMvpCommand`; requirement `guildRank`; stage `GUILD_DONATE`; quester strategy id `guild`

**MythicLib:** same-guild players register as `GUILD_ALLY`, so friendly-target skills (buffs, heals) work on guildmates.

## RunariaEvents — event registration

Two options. **Reflective is the house default** — no shared jar, no hard dependency, and a safe no-op if RunariaEvents is absent.

### Option A — reflective hook (recommended)

Copy `RunariaEvents/integration/RunariaEventsHook.java` into your plugin, change its `package` line, and add `softdepend: [RunariaEvents]`. Then call the statics:

```java
RunariaEventsHook.pushTimed(id, key, name, durationMillis);
RunariaEventsHook.pushScheduled(id, key, name, region, startEpochMillis, endEpochMillis);
RunariaEventsHook.push(id, key, name, region, location, start, end, state, meta);
RunariaEventsHook.pushRaw(map);
RunariaEventsHook.end(id);
RunariaEventsHook.remove(id);
RunariaEventsHook.available();
```

### Option B — typed service

```java
Bukkit.getServicesManager()
      .getRegistration(RunariaEventsAPI.class)
      .getProvider()
      .push(record);
```

`me.justnfly.runariaevents.api.RunariaEventsAPI` is registered as a Bukkit service, with `EventRecord` and `EventState` (UPCOMING / ACTIVE / ENDED) as the data types.

### Record keys

| Key | Type | Notes |
| --- | --- | --- |
| `id` | String | **Required**, globally unique — prefix per plugin, e.g. `anomaly:north-3` |
| `key` | String | **Required**, the type token used in placeholders, e.g. `anomaly` |
| `source` | String | Source plugin name |
| `name` | String | Display name shown in `/events` |
| `region` · `world` | String | Optional |
| `x` · `y` · `z` | Number | Optional |
| `start` · `end` | Number | Epoch millis; absent or `<=0` means "now" / open-ended |
| `state` | String | Explicit UPCOMING / ACTIVE / ENDED — needed for open-ended events |
| `meta` | Map | Optional string map |

Two meta keys are special: **`icon`** (a Bukkit Material name for the GUI) and **`warp`** (a command run for the player when they click the event).

State is derived on read. Source-provided strings have `<` escaped to block MiniMessage tag injection.

**Read side** (1.2.0+): `snapshotEvents()` returns every record plus derived `state`, `secondsLeft`, and `lastUpdated`.

## RunariaTraits — bonus queries

`me.justnfly.runariatraits.api.RunariaTraitsAPI` — static `get()` or the `ServicesManager`.

!!! warning "Highest wins, online only"
    All values are **highest-wins, never stacked**, and resolve for **online players only**.

Consumers: OmniMarket, RunariaDungeons, LifeSkillsItemCore, ResourceDrops.

- `getServerShopBuyMultiplier(player, categoryId)` · `getServerShopSellMultiplier(player, categoryId)`
- `getDungeonCooldownReductionSeconds` · `getBonusLootRolls`
- `getStationSuccessRateBonus(player, stationId)` · `getStationSuccessRateCapBonus` · `getStationQualityBonus`
- `getGemLevelRollBonus` · `getGemforgingExpMultiplier`
- `getBonusResourceRolls` · `getPartyExpMultiplier(members)` · `hasPartyTrait`

## Other APIs

??? note "OmniMarket — Runaria Coins"
    `com.omnimarket.economy.OmniMarketCoins` — static and null-safe.

    ```java
    OmniMarketCoins.isAvailable();
    OmniMarketCoins.getBalance(uuid);
    OmniMarketCoins.has(uuid, amount);
    OmniMarketCoins.give(uuid, amount);
    ```

    Soft-depend OmniMarket and guard with `isAvailable()`, or dispatch `/omniadmin coins runaria give <player> <amount>` from console instead. **OmniMarket is the single source of truth** for coin balances (`runaria-coins.yml`).

??? note "RunariaDungeons — parties"
    `net.dungeoncore.dungeoncore.party.PartyService` is registered on the `ServicesManager` as a read-only view: party, leader, members, `sameParty`, `inDungeon`, roster.

    Bukkit events under `net.dungeoncore.dungeoncore.party.event`: `PartyCreate`, `PartyJoin`, `PartyLeave`, `PartyLeaderChange`, `PartyDisband`, `PartyDungeonStart`, `PartyDungeonFinish` — fired from `PartyManager` on every mutation.

??? note "LifeSkillsItemCore — BotCraftAPI"
    `com.drunkcraft.lifeskills.api.BotCraftAPI`, via `LifeSkillsItemCore.getInstance().getBotCraftAPI()`.

    Runs an MMOItems crafting-station recipe **as a player, off the station GUI**, and returns the finished item with the full LifeSkills pipeline applied: profession-level stat scaling, ingot quantity bonus, Forged-By stamping, and the recipe's XP triggers.

    Returns `BotCraftAPI.CraftResult` — `success`, a machine-readable `reason`, and the `output` ItemStack. Never throws on a missing station or recipe.

    **The owner must be online** — MMOItems rolls output from a live RPGPlayer and XP triggers require an online player.

??? note "RunariaRegionNames"
    `com.runaria.regionnames.api.RegionNamesAPI` via `RegionNamesProvider.get()` or the `ServicesManager`.

    `getResolvedNameComponent(player)` · `getResolvedName` · `getResolvedPlainName` · `getRegionId(player)` · `getDisplayName(id)` · `getAllDisplayNames()` · `setDisplayName` / `removeDisplayName` (persisted immediately)

??? note "RunariaQuests — BeautyQuests reward types"
    Three reward types other quest files can use:

    - `questBox` — keys `box:`, `amount:`, `shared:`
    - `questPointsSpendable` — key `points:`
    - `runariaCoins` — key `coins:`, pays OmniMarket Runaria Coins

    No Java API class.

??? note "Smaller integration points"
    - **RunariaBackpacks** registers the custom MMOItems stat `BACKPACK_SLOTS` (NBT `MMOITEMS_BACKPACK_SLOTS`). **Gotcha:** an API-registered stat **cannot** be used in a `modifiers/` group, because MMOItems parses that folder before the plugin enables. Put slot values in the item's `base:` block instead.
    - **RunariaClearlag** — call `entity.addScoreboardTag("keep")` to exempt any entity permanently from all sweeps.
    - **RunariaDoors** — no Java API. Dispatch console commands: `keydoor open <door> [seconds]`.
    - **RunariaBots** — MythicMobs drop syntax `runariabot{type=<id>;head=<skin>}`. Reads the RunariaGuilds `BOT_SLOTS` upgrade reflectively.

## House conventions

**ConfigMigrator** — every plugin versions its YAML and auto-migrates on update. Never hand-edit a live config to "fix" a version; add a migration and bump the version instead.

**wipeplayerdata** — every plugin holding player data ships `<admincmd> wipeplayerdata [confirm]` behind the same two-step, 30-second confirmation gate, for season resets.

**MiniMessage everywhere** — all text formatting is MiniMessage, never legacy `&`/`§` codes. Text crossing in from another plugin's API is legacy-coded and must be converted at the boundary.

!!! danger "Player-supplied formatting"
    Any MiniMessage a *player* supplies must be restricted to colour and formatting tags. Strip `click`, `run_command`, `open_url`, `hover`, and `insertion` via a restricted `TagResolver` — clickable commands in player-controlled text are a server-compromise vector.
