# Item Builder

Build the item you want, slot by slot, the way the game actually rolls one — its base stats, a main stat, its sub-stats, its affixes, and gems in its sockets. The finished item appears on the right with every value totalled, along with how likely that item is.

Type your own item's numbers in to **recreate something you already own and see how lucky it was**.

**It will not let you build something impossible.** Each slot only offers stats it can actually produce, you cannot pick more stats than the slot holds, and you cannot socket more gems than the rarity's sockets allow.

<div id="gear-builder">Loading the builder…</div>

<script src="../../assets/gear-data.js"></script>
<script src="../../assets/gear-builder.js"></script>

---

## What the item is made of

A real item is several independent rolls stacked on top of each other:

| Part | What it is |
| --- | --- |
| **Base stats** | Always present, but most still roll inside a band — attack damage, armour, Resilience. |
| **Main stat** | Exactly one, from a 34-stat pool. |
| **Sub-stats** | Several, from the same pool at about half the size. |
| **Extra affix** | Not guaranteed, but worth three times a main stat. |
| **Bonus main / affix** | Epic and Legendary **weapons** only — a second main stat and a second affix. |
| **Archetype / Side / Useful** | Armour's own slots, including the Arcane/Reinforced/Deadeye/Savage prefix. |
| **Gems** | Whatever you socket yourself. Their stats add on top. |
| **Enchant sockets** | Always at least one. See [Gems & Enchanting](gems.md). |

Until you type a number into a stat, the card shows its **full range** rather than inventing an average — so `45.7–55.8` means the item rolls somewhere in there. Type a value and it pins to that.

## How the odds are worked out

Each slot rolls like this: it walks its list of possible stats **in order** giving each its own chance, stops early once the slot is full, and tops up with a weighted pick if it came up short. Very small chances are shown as a power of ten (2.4 × 10⁻⁵%) rather than rounded away.

!!! info "The numbers are exact, not sampled"
    The early stop and the top-up make the stats **depend on each other**, and the order they are listed in matters — so there is no one-line formula for it.

    The builder works it out exactly anyway: it walks the slot's stat list position by position, tracking every combination of how many stats have landed and which of the ones you asked for are among them, then handles the top-up as a draw without replacement from whatever is left.

    That matters for rare items. An earlier version sampled instead, and asking for four specific sub-stats — a real one-in-46-million item — came back as "impossible" more often than not, purely because the sample never happened to land on it. Nothing here rounds a rare item down to zero.

### Typing in exact values

Every stat with a range gets a number box, **base stats included** — attack damage on a weapon rolls between 45.7 and 55.8 on a Legendary, so it is as much a roll as anything else.

The odds read as "rolled **at least** this well". The game displays rolled values rounded, so a shown `24` means anywhere in 23.95–24 and is treated that way; without that, asking for exactly the top of a range would come out as zero and a perfectly real item would read as impossible.

Stats with no range — attack speed, class proficiency — are fixed by the item, so there is nothing to type.

### Gems are quoted separately

You socket gems yourself, so they are not part of the item's own roll. The builder gives them their own line: the chance each gem rolls the stat you picked, out of its family's pool. Actually having a socket to put it in is a third roll again — see [Gear, Rarities & Stats](gear.md#sockets).

### What it does not count

- **Class locks** on weapon drops are a separate roll and do not change stat odds.
- **Which gem sockets** an item rolls is not folded into the headline number.
- If a stat lands in two slots the values add, which the card shows as `4.2 + 1.1`.

## Related

- [Stat Explorer](stat-explorer.md) — every stat and its range, without building anything.
- [Gear, Rarities & Stats](gear.md) — what the slots are and what the numbers mean.
- [Crafting Stations](stations.md) — where crafted gear is made.
