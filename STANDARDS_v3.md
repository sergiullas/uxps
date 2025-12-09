# Project Standards v3

## Key Selection Guidelines

Use index as key when:

- The list is content-driven (strings or simple objects).
- Items never reorder or get dynamically inserted/removed.
- UI is non-interactive.
- Order is meaningful and stable.

Examples:
- Resume Summary → highlights[]
- Resume Education → item.details[]
- Case Study → outcomes list
- Hero bullet lists
- Static footnotes, disclaimers, metadata entries

Use a stable unique ID when:

- Items are interactive.
- Items can reorder or filter.
- Items come from datasets (API, DB, CMS).
- Items have natural keys like id, slug, uuid.
