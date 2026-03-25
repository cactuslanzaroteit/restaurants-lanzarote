# Phase 1: Lead Discovery & Guide Population (Optimized)

Use this prompt to run the **first phase** of the project. This session focuses exclusively on building the database and finding owners, *without* starting the pitch or redesign phase yet.

---

## The Prompt

"We are starting **Phase 1: Lead Discovery** for restaurantsinlanzarote.com. 

**Objective**: Scrape the Lanzarote restaurant scene and build a high-fidelity database of leads and directory content.

**Instructions**:
1. **Scrape**: Use Apify to find all active restaurants in Lanzarote.
2. **Enrich**: For every restaurant, attempt to find:
   * `owner_name`: The key decision maker.
   * `contact.email`: Professional contact email.
   * `status`: 'new' (modern site, good for the guide) or 'old' (outdated site, redesign target).
3. **Database Population**:
   * Add 'new' restaurants to `data/restaurants.json` so they appear in our guide.
   * Add all data to `data/leads.json` for future sales tracking.
4. **Pause Before Pitching**: Do NOT generate redesign concepts or drafting pitches yet. 

**Output**: Show me a summary table of the businesses found, sorted by 'status', highlighting those where you successfully identified an owner."
---
