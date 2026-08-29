# The Market

Runaria's entire economy: a server shop, a rotating Black Market, an Auction House, buy/sell orders, player shops, physical storefronts you can own, and the server's second currency — **Runaria Coins**.

`/omnimarket` (aliases `/om`, `/market`) is the hub menu for all of it.

## Server Shop

`/shop` opens the categorised server shop.

- Build a quantity with **+1 / +16 / +64 / Fill Inventory** buttons, then confirm once.
- Blocked purchases always tell you why — out of stock, can't afford, inventory full — rather than just failing.

### Seed Shop

The `seeds` category **restocks every 3 hours**, aligned to 12/3/6/9 o'clock Eastern. A clock in the shop shows the countdown.

- Only **3–6 seed types** are stocked per restock, weighted so common seeds appear far more often than unique ones.
- Each seed has a **per-player purchase limit** per cycle.

Crop sell prices climb from **400** (common) to **12,500** (unique) — and star-quality crops multiply that: **silver ×5, gold ×11**.

### Junk Vendor

The bottom-right button of `/shop`. Dump unwanted gear and drops into a 45-slot grid, preview the payout per stack and the running total, then sell it all at once. Anything unsellable is handed back.

Manastones pay best (around 75% of the matching crop price), while old gear sells as vendor trash at roughly 30%. `/sell hand` and `/sell all` use the same pricing.

## Black Market

`/blackmarket` — **9 limited-stock items**, rerolled daily at **1:00 AM Eastern** from weighted pools, each with its own randomised price and stock. The refresh is broadcast. When it's gone, it's gone.

## Auction House & Trading Hub

- **`/ah`** — list items for other players. Listings last **48 hours**, there's **no listing fee**, and a **5% tax** comes off each sale. You get **5 active listings** by default, more with rank.
- **`/trading`** — post **buy or sell orders** at your price and let the market come to you. Orders last up to 7 days by default; **5 active orders**, more with rank.
- **`/trends`** — live price trends and 30-day history for traded goods.

## Player shops

`/playershop` — rented virtual shops on a 4-tier ladder. Rent scales with how many shops are currently rented server-wide.

| Tier | Listings | Base rent | Upgrade cost |
| --- | --- | --- | --- |
| 1 | 10 | 8,000 | — |
| 2 | 20 | 12,000 | 25,000 |
| 3 | 35 | 20,000 | 75,000 |
| 4 | 50 | 32,000 | 200,000 |

## Physical storefronts

`/store` — real buildings you buy or rent from a **Realtor NPC**, including L-shaped plots.

- **Trust system:** assign helpers as Visitor, Builder, Manager, or Co-Owner. Each store also has its own blacklist.
- **Sales:** run limited-time discounts on your goods.
- **Upgrades:** more trust slots, more categories, longer sale durations, shorter sale cooldowns, custom titles and themes, longer rent grace.
- **Resale & auction:** sell or auction your store on. **The building and everything in it transfers as-is** — blocks, containers, decorations included.
- **`/store visit <storeId>`** unlocks teleports to stores you've found.

!!! tip "You never lose your stock"
    If a store is evicted or transferred, your listed items move to **eviction storage** instead of being deleted. Reclaim them with `/eviction`.

### Advertising

Pay to feature your shop or a specific item, or outbid others for a daily **broadcast slot**. The top 3 bidders get a featured row plus a rotating chat broadcast every 10 minutes — and their customers get a **server-covered 5% discount**.

### Reviews

Star-rate shops you've actually bought from, on a 24-hour cooldown. Sellers earn badges: **Trusted Seller** (100 sales at 4.5+), **High Volume** (1,000 items), **Customer Favorite** (25 repeat buyers).

## Money & Runaria Coins

!!! info "Two currencies"
    Regular **money** is what you earn and spend everywhere. **Runaria Coins** are the premium second currency, earned from gameplay rewards and spent on things like [trait upgrades](../progression/traits.md).

| Command | What it does |
| --- | --- |
| `/shop` | Server shop (also `/servershop`, `/bazaar`) |
| `/blackmarket` | Rotating black market (alias `/bm`) |
| `/ah` | Auction House (aliases `/auction`, `/auctionhouse`) |
| `/trading` | Trading Hub — buy/sell orders (aliases `/trade`, `/hub`) |
| `/playershop` | Player shops (aliases `/pshop`, `/ps`) |
| `/store` | Storefronts — buy, manage, trust, upgrades, sales, visit |
| `/eviction` | Reclaim items from eviction storage |
| `/trends` | Market analytics and price history |
| `/wallet` · `/balance` | Your money and Runaria Coins |
| `/coins pay <player> <amt>` | Send Runaria Coins to another player |
| `/baltop` | Money leaderboard |
| `/omnimarket` | Hub menu for everything above |
