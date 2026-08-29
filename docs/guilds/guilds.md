# Guilds

Create a guild for free, claim territory, bank money together, buy 16 guild upgrades, and climb the fame ladder from rank F to S by completing guild quest contracts.

## Creating & joining

- `/guild` opens the guild menu. Guildless players see **Create** and **Browse**. Creation is **free** — pick a name (max 24 characters) and a tag (max 4). Guilds start with **10 member slots**.
- Guilds can be **Open** (join instantly), **Request** (apply via the guild's inbox), or **Closed** (hidden from the list).
- Roles run **Member → Trusted → Admin → Leader**. Leaders customise exactly what each role can do — build, deposit, claim land, manage members, and so on. Withdrawing from the bank is leader-only by default.
- Your guild tag automatically appears in front of your name in chat.

## Guild bank & land claims

The **guild bank** funds everything. Claims, upgrades, and customisation are all paid from the bank, not your personal wallet. Deposit or withdraw in 1k / 10k / 100k / custom amounts.

**Three ways to claim land:**

1. The golden-shovel **wand** — set two corners and a live glowing outline previews the claim.
2. A **centred claim** — a 128×128 square around where you stand.
3. A **chunk claim** — just the 16×16 chunk you're in.

Type `confirm` in chat to buy the previewed claim, or `cancel` to back out. You're only charged on confirm.

- **Cost is 1.5 per block** — a chunk costs 384, a full 128×128 claim about 24,600.
- Claims draw from a **block budget** (base 16,384 blocks total across all claims, expandable with the Expanded Borders upgrade). You can make unlimited *numbers* of claims, but each new one must touch your existing territory in that world. The first claim in a world can go anywhere.
- Claims can't overlap another guild's land or a protected region.
- Entering guild land shows an *"Entering [TAG] Land"* title. Outsiders can't build, interact, or open containers on your claims.
- Unclaim by standing in a claim and shift-clicking. **There's no refund**, so claim deliberately.

**Guild home:** one per guild. Teleport with `/guild home` or the bed icon in the hub.

## Fame & prestige (F → S)

Fame comes from [guild quest contracts](quests.md#guild-quest-boards).

| Rank | Fame required |
| --- | --- |
| F | starting rank |
| E | 1,000 |
| D | 3,000 |
| C | 7,500 |
| B | 15,000 |
| A | 30,000 |
| S | 60,000 |

- **Rank passive:** every rank above F gives the whole guild **+2% class EXP**, up to +12% at S.
- **Renowned bonus:** the top 3 guilds on the fame board get an extra +5% / +3% / +2%.
- **Daily streak:** complete 3+ guild quests in a day to build a streak worth **+5% fame per day, capped at +25%**. A day with zero quests resets it; 1–2 quests holds it. Days roll over at 3:00 AM ET.
- **Weekend Rush:** all guild-quest fame is **×1.5 on Saturday and Sunday**.

!!! danger "Fame decay at rank B and above"
    Once your guild reaches rank B, you must complete **at least one guild quest every 7 days**. Miss that window and the guild drops a full rank, then keeps bleeding fame each further questless day until it falls below B. Members are warned at login when 2 days or fewer remain.

    The **Sabbatical Charter** upgrade pauses decay for 7 days, on a 30-day cooldown.

The #1 guild's leader is immortalised on the **Champion Monument** NPC at The Market.

## Guild upgrades

Sixteen upgrades bought from the guild bank (requires the Manage Settings role permission), each gated behind a prestige rank.

| Upgrade | Effect | Levels | Unlock rank |
| --- | --- | --- | --- |
| Growing Ranks | +1 member slot per level | 10 | F |
| Expanded Borders | Bigger claim block budget | 5 | F |
| Mechanized Workforce | +1 guild [bot](../automation/bots.md) slot per level | 5 | F |
| Ascendant Training | Class EXP ×1.15 → ×2.0 | 5 | E |
| Artisan's Wisdom | Profession EXP ×1.15 → ×2.0 | 5 | E |
| Verdant Blessing | +5% → +25% crop growth inside claims | 5 | E |
| Relentless Requisitions | +4 to +15 quest-board refreshes | 4 | D |
| Master Merchants | +5% market sell money | 1 | C |
| Compound Coffers | Daily bank interest, 1% per level | 10 | C |
| Ambitious Endeavors | +1 concurrent guild quest | 3 | C |
| Rallying Banner | Guild-wide potion effect, switchable daily | 1 | B |
| Treasure Hunters | Chance at extra dungeon loot | 5 | B |
| Seasoned Delvers | −1 to −5 min dungeon cooldown | 5 | B |
| Sabbatical Charter | Unlocks `/guild sabbatical` | 1 | B |
| Blessed Bloodline | +1% → +5% rare trait chance | 5 | A |
| Battle Hymn | +1% → +3% skill & magic damage | 3 | A |

!!! warning "Not yet active"
    **Master Merchants**, **Treasure Hunters**, **Seasoned Delvers**, and **Blessed Bloodline** can currently be purchased, but their effects are not yet wired up in-game. Save your bank money for the others until this notice is removed.

## Customisation

- Everyone can set their guild name/tag text and one solid colour **for free** with `/guild rename` and `/guild settag`.
- A one-time **50,000** bank purchase unlocks the full style builder: gradients, rainbow, a second colour, decorations, plus `/rename` for styled tags. The guild icon and map colour are set here too.
- Your guild's connected claims render as one merged shape on the web map, in your tag colour.

## Commands

| Command | What it does |
| --- | --- |
| `/guild` | Open the guild menu (aliases `/g`, `/guilds`, `/clan`) |
| `/guild create` | Start guild creation |
| `/guild list` · `/guild top` | Browse guilds · top 10 by fame |
| `/guild request <name>` | Join or request to join a guild |
| `/guild info` | Your guild's info in chat |
| `/guild deposit <amt>` · `/guild withdraw <amt>` | Guild bank |
| `/guild claim` · `/guild unclaim` | Claim / unclaim the chunk you stand in |
| `/guild home` · `/guild sethome` | Teleport to / set the guild home |
| `/guild upgrade <KEY>` | Buy a guild upgrade |
| `/guild rename <name>` · `/guild settag <tag>` | Free plain rename / retag |
| `/guild donate` | Donation GUI for guild donation quests |
| `/guild sabbatical` | Pause fame decay for 7 days |
| `/guild accept` · `/guild deny` · `/guild kick` | Membership management |
| `/guild leave` · `/guild disband` | Leave, or disband (leader only) |
| `/rename <tag\|guild> <style>` | Styled tag/name — requires the Customisation unlock |
