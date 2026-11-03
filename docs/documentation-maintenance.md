# Documentation maintenance

## Documentation structure

```
docs/
├── INDEX.md                          # Catalogue and navigation
├── architecture.md                   # System architecture (complements root ARCHITECTURE.md)
├── repository-overview.md            # High-level repository summary
├── repository-structure.md           # File tree and purpose
├── design-decisions.md               # Architectural decision records
├── quick-start.md                    # 5-minute onboarding
├── components/
│   ├── presentation.md               # UI components
│   ├── host-and-composition.md       # Composition root
│   ├── application-services.md       # Core logic
│   ├── browser-state-and-localisation.md
│   └── integration-models.md         # External interfaces
├── flows/
│   ├── startup-and-rendering.md      # Page load
│   ├── obfuscation.md                # Core algorithm
│   └── copy-to-clipboard.md          # Clipboard flow
├── api-reference/
│   ├── INDEX.md                      # Endpoint summary
│   └── text-obfuscator.md            # Function reference
├── behaviour/
│   ├── browse-and-search.md          # User browsing
│   └── inspect-edit-delete.md        # User interactions
└── cross-cutting/
    ├── configuration.md
    ├── dependencies.md
    ├── data-model.md
    ├── error-handling.md
    ├── invariants.md
    ├── logging.md
    ├── security.md
    ├── state-and-persistence.md
    ├── testing.md
    ├── build-and-deployment.md
    ├── concurrency-and-scheduling.md
    ├── integrations.md
    ├── change-guide.md
    ├── documentation-maintenance.md  # This file
    ├── troubleshooting.md
    ├── faq.md
    ├── ambiguities-and-open-questions.md
    └── api-usage-examples.md
```

## Maintenance rules

### When to update documentation

| Trigger | Required updates |
|---------|------------------|
| New function in `text-obfuscator.js` | `api-reference/text-obfuscator.md`, `components/application-services.md` |
| New checkbox in `index.html` | `components/presentation.md`, `flows/obfuscation.md`, `behaviour/inspect-edit-delete.md` |
| New CDN dependency | `dependencies.md`, `integrations.md`, `components/host-and-composition.md` |
| Algorithm change | `flows/obfuscation.md`, `invariants.md`, `design-decisions.md` |
| New file in repository | `repository-structure.md`, `repository-overview.md` |
| Deployment change | `build-and-deployment.md` |

### Link validation

All relative links must resolve. Check:
- `../` references to root documents
- Cross-references between `docs/` files
- No absolute paths to repository files

### Style compliance

Follow these rules (from instructions):
- **File names**: kebab-case (e.g., `api-reference.md`)
- **Headings**: sentence case (e.g., "## Data model" not "## Data Model")
- **Spelling**: British English (behaviour, colour, analyse)
- **Links**: relative, repository-relative
- **No duplication**: complement root documents, don't duplicate

## Review checklist

Before merging documentation changes:

- [ ] All new files follow kebab-case naming
- [ ] All headings use sentence case
- [ ] All links are relative and resolve
- [ ] No content duplicated from root ARCHITECTURE.md, SECURITY.md, ROADMAP.md, PRIVACY.md, LICENSE
- [ ] `INDEX.md` catalogue updated if files added/removed
- [ ] `api-reference/INDEX.md` endpoint table updated if API changed
- [ ] `logging.md` covers all 12 required topics if modified
- [ ] Cross-references use `../` for root, relative for `docs/`

## Automation

No automated documentation validation. Manual review required.

## Versioning

Documentation version matches code version (no separate versioning). Updated in same commit as code changes.

## References

- [INDEX.md](../INDEX.md)
- [Architecture](../architecture.md)
- [Repository structure](../repository-structure.md)
- [Root ARCHITECTURE.md](../../ARCHITECTURE.md)
- [Root SECURITY.md](../../SECURITY.md)
- [Root PRIVACY.md](../../PRIVACY.md)
- [Root LICENSE](../../LICENSE)

*Note: ROADMAP.md is not present in this repository.*