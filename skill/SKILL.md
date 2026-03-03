---
name: dune-analytics
description: Query blockchain data via Dune Analytics API. Run SQL queries, fetch results, manage saved queries.
requires:
  env:
    - DUNE_API_KEY
---

# Dune Analytics Skill

Query blockchain data through the Dune Analytics API.

## Capabilities

- Execute SQL queries against blockchain data
- Fetch query results and metadata
- Manage saved/materialized queries
- Useful for Mento v3 monitoring, trading research, onchain analytics

## Environment Variables

| Variable       | Required | Description            |
| -------------- | -------- | ---------------------- |
| `DUNE_API_KEY` | Yes      | Dune Analytics API key |

## References

- [Dune API Reference](https://docs.dune.com/api-reference/agents/mcp)
