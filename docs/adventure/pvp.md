# PvP & Bounties

Open-world PvP is strictly opt-in. Go **Rogue** to fight other rogues — and rack up a price on your head that anyone can claim.

## Going rogue

`/rogue` opens the menu: **Go Rogue** (with a confirmation screen) and **Bounties**.

Outside special zones, PvP only works when **both** players are Rogue or Neutral. Going rogue is broadcast to the server.

!!! warning "You're locked in for 24 hours"
    Once you go rogue, you can't leave for 24 hours. After that, un-rogueing is instant — **unless a bounty sits on you**, in which case you enter an 8-hour **Neutral** state: still killable, bounty still claimable, and you can still fight back. Survive the 8 hours and every player-placed bounty is refunded. Die during it and the un-rogue completes immediately.

- **One free cancel, ever.** Every player gets a single instant un-rogue that skips the 24-hour lock. It only works while you're not combat-tagged and not bountied.
- **15-minute grace.** Brand-new rogues can't have *player-placed* bounties put on them. Automatic bounties ignore this.

## Bounties

**Automatic bounties** are funded by the server. Your first triggers after a random 2–9 kills, and every 1–3 kills after that adds another **$500–$2,500**. When an automatic bounty is claimed, bonus items are also rolled into your death drops.

**Player bounties** are placed through `/bounty`:

- Pick a target, then set **money** (minimum $100), **items**, or both. Items are staked in a 27-slot deposit chest and go to whoever claims the bounty.
- Multiple players can stack contributions on the same head.
- Placing and claiming are both broadcast.

## Combat rules

**Combat tag lasts 60 seconds** and applies to both players in any allowed PvP hit. While tagged:

- **No teleports of any kind** — commands, plugin warps, ender pearls, chorus fruit, nether and end portals are all blocked.
- A countdown shows on your action bar.
- **Logging out kills you**, and your attacker still gets bounty credit.

## Free-for-all zones

Inside any [Siege Zone](siege-zones.md), any **Dangerous** [resource drop](resource-drops.md), or a forced-PvP [anomaly](anomaly-zones.md), *everyone* is attackable regardless of rogue status.

Kills in those zones count exactly like rogue kills — they feed your automatic bounty progression even if you never opted into rogue.

## Commands

| Command | What it does |
| --- | --- |
| `/rogue` | Open the rogue menu |
| `/bounty` | Open the bounty list directly |
