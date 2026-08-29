# World Rules & Misc

The smaller systems and server-wide rules worth knowing about.

## Locked dimensions

The **Nether** and the **End** start sealed. Trying to enter tells you when the dimension opens, and each opening is announced server-wide exactly once.

Every route is blocked until then — portals, command teleports, and plugin warps alike.

## Keys & gates

Some doors and gates in the world only open for the **right key**: hold it and right-click. Others open when a particular boss dies nearby.

Doors close themselves after a set time, so don't dawdle once you've opened one. Re-triggering a door refreshes its timer.

## Item despawn timers

- Dropped items last **5 minutes**.
- Dropped **custom gear lasts 10 minutes** — twice as long, so a misclicked drop is more forgiving.
- Timers are stored on the item itself, so they **survive server restarts and chunk unloads**.

A periodic mob cleanup runs to keep the server fast, but it never touches:

- players, tamed pets, or leashed mobs
- mobs carrying or riding a player
- name-tagged mobs
- anything inside a dungeon

## Quest Boards in towns

The wooden **Quest Board** furniture you see in towns is the entrance to the [daily quest system](../guilds/quests.md#the-daily-quest-board) — click it to open your board.

## Region names

The area name in your HUD is cosmetic, showing whichever region you're currently standing in. There's nothing to interact with — though it's a decent way to tell when you've wandered somewhere notable.

## Twitch linking on Discord

In the server's Discord, run:

```
/twitch <minecraft-name> <twitch-name>
```

This links your Minecraft (Java) account to your Twitch username so any **Twitch Drops** you earn are waiting at your next login.

- Only you see the reply.
- Re-running the command **updates** your existing link rather than creating a second entry.
- Your Minecraft name must be 3–16 characters; your Twitch name 4–25.
