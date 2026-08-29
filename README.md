# Runaria Wiki

The player-facing wiki for the Runaria Minecraft server, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages at **https://wiki.runariamc.com**.

## Editing

All content lives in `docs/` as Markdown. One page per gameplay system:

```
docs/
  index.md                      home page
  progression/                  classes, traits
  guilds/                       guilds, quests
  adventure/                    dungeons, anomalies, resource drops, pvp, siege
  economy/                      market, crafting, backpacks
  automation/                   bots
  world/                        npcs, world rules
```

To add a page, create the `.md` file and add it to the `nav:` list in `mkdocs.yml`.

## Preview locally

One-time setup:

```bash
pip install -r requirements.txt
```

Then, from the repo root:

```bash
mkdocs serve
```

Open <http://127.0.0.1:8000>. The site rebuilds automatically as you save.

## Publishing

Push to `main`. A GitHub Actions workflow builds the site and deploys it to the `gh-pages` branch automatically.

```bash
git add -A
git commit -m "Update wiki"
git push
```

To build without deploying (output lands in `site/`, which is gitignored):

```bash
mkdocs build
```

## Conventions

- **This site is player-facing only.** Describe systems from the player's point of view — commands in tables, mechanics in prose.
- **No staff material here.** Admin commands, permission nodes, placeholders, and plugin APIs live in the internal Claude artifact, not on the public wiki. Don't reintroduce them.
- Some systems are deliberately **not** documented player-facing while they're out of alpha scope. Check `../WIKI-HANDOFF.md` before adding a new section.
- Branding assets live in `docs/assets/`.
