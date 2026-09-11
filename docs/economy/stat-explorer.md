# Stat Explorer

Every number on this page comes straight from the server's item configuration. Pick an item type and a rarity to see **every stat it can roll and the exact range of each**.

- Drag **Roll quality** to see where a given roll lands inside those ranges — 0% is the floor of every range, 100% the ceiling.
- Tick **Crafted** to compare a station-made piece against a dropped one.
- Type in the search box to find a single stat across every slot at once.

<div id="gear-explorer">Loading the stat explorer…</div>

<script src="../../assets/gear-data.js"></script>
<script src="../../assets/gear-explorer.js"></script>

---

## How to read it

The bar under each stat shows that rarity's slice of the stat's whole range across the ladder — a short bar near the left means you are near the bottom of what the stat can ever be.

!!! tip "Most stats share a bar because they share the numbers"
    A line reading *"Weapon Damage ▸ and 27 more at this range"* means those 28 stats are worth **identically the same** — click it to see the full list. The stats that get their own bar are the ones that genuinely differ, like Max Mana and Max Health.

    Sections with a **▸** are folded up; click to open them. **Bonus main** and **Bonus affix** start closed because they are occasional extras rather than something every item has.

    Typing in the search box expands everything and switches to one row per stat, so you can always find a single stat fast.

!!! info "Every weapon type draws from the same stat pool"
    There is **one shared pool** behind the Main, Sub and Affix slots, used by all fifteen weapon types. That is why a Sword lists Dodge Rating, Parry Rating, Arrow Velocity and the various Damage Reductions — they are genuinely in its pool, not a mistake in the list. What differs between weapon types is the **base stats**, not what they can roll.

!!! tip "Crafted gets you more rolls, not bigger ones"
    A crafted item's stat *ranges* are identical to a dropped one's. What crafting buys is more slots filled and better sockets — tick **Crafted** and the summary at the top spells out exactly what changes at that rarity.

    Crafting happens at the tiered forges and workbenches — see [Crafting Stations](stations.md).

## Where the numbers come from

| Section | What it covers |
| --- | --- |
| **Base stats** | Always on the item. Attack damage, armour, Resilience, durability. |
| **Main / Sub / Extra affix** | The rolled stats every item gets. See [Gear, Rarities & Stats](gear.md). |
| **Bonus main / Bonus affix** | Epic and Legendary weapons only — a second main stat and a second affix. |
| **Archetype / Side / Useful** | Armour's own roll slots, including the Arcane/Reinforced/Deadeye/Savage prefix. |
| **Sockets** | Enchant and gem sockets. See [Gems & Enchanting](gems.md). |

For what any of it *means*, start with [Gear, Rarities & Stats](gear.md). To build a full item slot by slot and see how likely it is, use the [Item Builder](builder.md).
