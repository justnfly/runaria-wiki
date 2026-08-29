# PlaceholderAPI Placeholders

For HUDs, scoreboards, chat formats, and tab lists.

## `%events_*%` — RunariaEvents

The most useful expansion, because it's **dynamic**: any plugin that registers a `key` automatically gets placeholders with no per-plugin code.

Format is `%events_<key>_<field>%`. The key resolves to the **active** event of that type, falling back to the soonest **upcoming** one.

| Field | Returns |
| --- | --- |
| `_time` | Friendly countdown — `15m 30s` |
| `_timer` | Clock countdown — `15:30` (the HUD-friendly one) |
| `_seconds` | Raw seconds remaining |
| `_state` | `ACTIVE` / `UPCOMING` / `NONE` |
| `_active` · `_upcoming` | `true` / `false` |
| `_name` · `_region` · `_world` | Event details |
| *(bare)* `%events_<key>%` | Shorthand for `_time` |

**Global fields:** `%events_next_name%`, `_next_time%`, `_next_timer%`, `_next_key%`, `_active_count%`, `_upcoming_count%`, `_total_count%`

With no matching event, time fields return empty, `--:--`, or `0`, and state returns `NONE`.

Keys registered today include anomaly event ids, `dungeon` (World Dungeon respawns), resource drops, and OmniMarket's `blackmarket` and market events.

## `%runariaguilds_*%` — RunariaGuilds

**Styled** (MiniMessage, tags auto-closed): `tag`, `tag_bracketed`, `name`

**Plain:** `plaintag`, `plainname`, `has_guild`

**Stats:** `member_count`, `max_members`, `rank` (also `role`), `owner`, `balance`, `balance_formatted`

**Fame:** `fame`, `fame_formatted`, `prestige` (also `guild_rank`), `streak`, `streak_bonus`, `refreshes_left`, `fame_position`, `decay_status`

**Leaderboard:** `%runariaguilds_top_<n>_<name|tag|fame|fame_formatted|rank>%`

## `%runaria_dungeon_*%` — RunariaDungeons

Leaderboard values, per dungeon id:

- `%runaria_dungeon_<id>_solo_first_<1-3>_player%` · `_time%`
- `%runaria_dungeon_<id>_group_first_<1-3>_players%` · `_time%`
- `%runaria_dungeon_<id>_solo_fastest_<1-3>_player%` · `_time%`
- `%runaria_dungeon_<id>_group_fastest_<1-3>_players%` · `_time%`
- `%runaria_dungeon_<id>_total_solo_clears%` · `_total_group_clears%`
- `%runaria_dungeon_<id>_first_clear_complete%` · `_leaderboard_status%`

**In-dungeon scoreboard tokens** (usable in `scoreboard.lines` config only, not PAPI): `%dungeon_name%`, `%dungeon_id%`, `%elapsed_time%`, `%time_limit%`, `%time_remaining%`, `%lives_remaining%`, `%max_lives%`, `%death_count%`, `%alive_players%`, `%total_players%`, `%current_objective%`, `%objective_progress%`

## `%omnimarket_*%` — OmniMarket

**Currency:** `coins_runaria` (or just `coins`), `coins_runaria_formatted`, `coins_formatted`, `vault_balance`, `vault_balance_formatted`

**This player:** `storefronts_owned`, `playershops_owned`, `shop_earnings`, `shop_earnings_formatted`, `shop_listings`, `shop_sales`

**Server-wide:** `storefronts_total`, `storefronts_for_sale`, `auctions_active`, `auctions_pending`, `playershops_total`, `playershops_available`

## Smaller expansions

**`%runariapvp_*%`** — `rogue`, `neutral`, `haskilled` (yes/no), `status` (none/rogue/neutral), `bounty` (total money on the player), `combat` (seconds of tag left)

**`%runariaclasses_*%`** — `tokens`, `class` (display name), `class_id`

**`%runariaregions_*%`** — `display` (MiniMessage name at the player's position), `display_legacy` (§ codes), `display_plain` (stripped), `region` (raw winning region id), `name_<regionid>` (a specific region's stored name)

!!! info "Plugins with no expansion"
    These register no PlaceholderAPI expansion, by design or not yet: AnomalyZones, ResourceDrops, RunariaQuests (planned), RunariaTraits, RunariaSkillHUD, LifeSkillsItemCore, RunariaBackpacks, RunariaBots, DynamicNPC, SiegeZones.
