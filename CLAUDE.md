# Project: restaurantsinlanzarote.com

## Core Objective
Build a premium, curated restaurant directory for Lanzarote and leverage it to sell high-ticket web redesign services to local businesses.

## Active Roadmap (Phased)

### Phase 1: Lead Discovery (CURRENT)
- **Goal**: Populate `data/leads.json` and `data/restaurants.json`.
- **Tasks**: Scrape restaurants, identify **Owner Names**, verify emails, and categorize as 'new' or 'old'.
- **Constraint**: Do NOT start pitches or redesigns yet.

### Phase 2: Guide Completion
- Integrate 'new' restaurants into the Next.js `website/`.
- Launch the live directory for social proof.

### Phase 3: Redesign Generation
- Generate premium concepts for 'old' websites using the `taste-skill`.
- Deploy prototypes to client-facing URLs.

### Phase 4: The Pitch
- Outreach to owners via personalized emails.

## Technical Context
- **Stack**: Next.js, Tailwind, Local JSON.
- **Data Location**: `/data/restaurants.json`.
- **Sales Instructions**: See `/SALES_PROMPT.md`.
- **Product Vision**: See `/PRODUCT_DEFINITION.md`.

## For Future Agents
Always read `SALES_PROMPT.md` before starting a new scraping or pitching session. Ensure `owner_name` and `status` fields are populated in the JSON database.
