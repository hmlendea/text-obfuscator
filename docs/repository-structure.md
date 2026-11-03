# Repository structure

## Source tree

```
text-obfuscator/
├── index.html                 # Composition root; DOM structure, asset loading
├── css/
│   └── custom.css             # Minimal custom styling
├── js/
│   └── text-obfuscator.js     # Core obfuscation logic and clipboard functions
├── docs/                      # Generated documentation (this directory)
│   ├── INDEX.md
│   ├── architecture.md
│   ├── repository-overview.md
│   ├── repository-structure.md
│   ├── design-decisions.md
│   ├── quick-start.md
│   ├── components/
│   │   ├── presentation.md
│   │   ├── host-and-composition.md
│   │   ├── application-services.md
│   │   ├── browser-state-and-localisation.md
│   │   └── integration-models.md
│   ├── flows/
│   │   ├── startup-and-rendering.md
│   │   ├── obfuscation.md
│   │   └── copy-to-clipboard.md
│   ├── api-reference/
│   │   ├── INDEX.md
│   │   └── text-obfuscator.md
│   ├── behaviour/
│   │   ├── browse-and-search.md
│   │   └── inspect-edit-delete.md
│   └── cross-cutting/
│       ├── configuration.md
│       ├── dependencies.md
│       ├── data-model.md
│       ├── error-handling.md
│       ├── invariants.md
│       ├── logging.md
│       ├── security.md
│       ├── state-and-persistence.md
│       ├── testing.md
│       ├── build-and-deployment.md
│       ├── concurrency-and-scheduling.md
│       ├── integrations.md
│       ├── change-guide.md
│       ├── documentation-maintenance.md
│       ├── troubleshooting.md
│       ├── faq.md
│       ├── ambiguities-and-open-questions.md
│       └── api-usage-examples.md
├── ARCHITECTURE.md            # Root architecture document
├── SECURITY.md                # Security policy
├── PRIVACY.md                 # Privacy policy
├── LICENSE                    # GPL-3.0
├── CONTRIBUTING.md            # Contribution guidelines
├── CODE_OF_CONDUCT.md         # Community standards
└── README.md                  # Project overview
```

## File purposes

### Root files

| File | Purpose |
|------|---------|
| `index.html` | Single-page application; defines all DOM elements, loads CDN assets and local scripts/styles |
| `css/custom.css` | Minor style overrides (label font-size, GitHub icon hover) |
| `js/text-obfuscator.js` | All application logic: replacement maps, `obfuscateText()`, `copyText()`, `fallbackCopy()` |
| `ARCHITECTURE.md` | High-level system design, components, runtime flows, deployment |
| `SECURITY.md` | Vulnerability reporting policy |
| `PRIVACY.md` | Data handling statement (no data collected) |
| `LICENSE` | GNU GPL v3 |
| `CONTRIBUTING.md` | Contribution guidelines |
| `CODE_OF_CONDUCT.md` | Community conduct standards |
| `README.md` | Project overview, usage, deployment, documentation links |

### Documentation (`docs/`)

| Directory | Purpose |
|-----------|---------|
| `components/` | Component-level design: presentation, host, services, state, integrations |
| `flows/` | Runtime flow documentation: startup, obfuscation, clipboard |
| `api-reference/` | JavaScript API documentation |
| `behaviour/` | User-facing behaviour specifications |
| Cross-cutting | Concerns spanning multiple components |

## Module organisation

No formal modules. Single JavaScript file with:
- Global replacement map objects
- Global functions (`obfuscateText`, `copyText`, `fallbackCopy`)
- Implicit dependency on jQuery (`$`)

## Naming conventions

- Files: kebab-case (`text-obfuscator.js`, `custom.css`)
- Functions: camelCase (`obfuscateText`, `copyText`, `fallbackCopy`)
- Global objects: camelCase (`identicalReplacements`, `approximateGroupReplacements`)
- DOM IDs: camelCase (`input`, `output`, `approximateCharactersCheckbox`)
- CSS classes: Bootstrap conventions (kebab-case)

## References

- [Repository overview](../repository-overview.md)
- [Architecture](../architecture.md)
- [Host and composition](../components/host-and-composition.md)
- [Application services](../components/application-services.md)