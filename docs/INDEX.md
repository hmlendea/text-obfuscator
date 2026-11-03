# Text Obfuscator Documentation

## Repository summary

Text Obfuscator is a client-side static web application that runs in the browser to replace characters in text with random Unicode equivalents. It provides a simple interface for obfuscating text while preserving visual appearance, with options for approximate character replacements and zero-width space insertion.

## Root document map

- [ARCHITECTURE.md](../ARCHITECTURE.md) — System design, components, and implementation approach
- [SECURITY.md](../SECURITY.md) — Security vulnerability reporting policy
- [PRIVACY.md](../PRIVACY.md) — Data handling and privacy practices
- [LICENSE](../LICENSE) — GNU General Public License v3
- [CONTRIBUTING.md](../CONTRIBUTING.md) — Guidelines for contributing
- [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md) — Community conduct standards

*Note: ROADMAP.md is not present in this repository.*

## Documentation catalogue

### Architecture and design
- [architecture.md](./architecture.md) — High-level architecture complementing root ARCHITECTURE.md
- [design-decisions.md](./design-decisions.md) — Key architectural and design choices with rationale
- [repository-overview.md](./repository-overview.md) — Repository purpose, scope, and entry points
- [repository-structure.md](./repository-structure.md) — Source tree layout and module organisation

### Components
- [components/presentation.md](./components/presentation.md) — HTML interface, CSS styling, and UI components
- [components/host-and-composition.md](./components/host-and-composition.md) — Composition root and browser hosting
- [components/application-services.md](./components/application-services.md) — Obfuscation logic and character replacement maps
- [components/browser-state-and-localisation.md](./components/browser-state-and-localisation.md) — DOM state management and localisation
- [components/integration-models.md](./components/integration-models.md) — External CDN dependencies and integration contracts

### Flows
- [flows/startup-and-rendering.md](./flows/startup-and-rendering.md) — Page load, DOM rendering, and initialisation
- [flows/obfuscation.md](./flows/obfuscation.md) — Character replacement, approximate replacements, zero-width space insertion
- [flows/copy-to-clipboard.md](./flows/copy-to-clipboard.md) — Clipboard copy with fallback

### API reference
- [api-reference/INDEX.md](./api-reference/INDEX.md) — API reference index and endpoint summary
- [api-reference/text-obfuscator.md](./api-reference/text-obfuscator.md) — JavaScript API documentation

### Cross-cutting concerns
- [configuration.md](./configuration.md) — Configuration schema, sources, and precedence
- [dependencies.md](./dependencies.md) — External and internal dependencies
- [data-model.md](./data-model.md) — Domain entities, relationships, and persistence (none in this project)
- [error-handling.md](./error-handling.md) — Error taxonomy, handling patterns, and recovery
- [invariants.md](./invariants.md) — System-wide invariants and contracts
- [logging.md](./logging.md) — Logging framework, levels, structured fields, correlation, sinks
- [security.md](./security.md) — Security model, threats, and mitigations (complements root SECURITY.md)
- [state-and-persistence.md](./state-and-persistence.md) — State management, stores, caches, migrations
- [testing.md](./testing.md) — Test strategy, organisation, and coverage
- [build-and-deployment.md](./build-and-deployment.md) — Build pipeline, deployment, and environments
- [concurrency-and-scheduling.md](./concurrency-and-scheduling.md) — Threading, async, schedulers, locks
- [integrations.md](./integrations.md) — External system integrations
- [change-guide.md](./change-guide.md) — How to modify common areas safely
- [documentation-maintenance.md](./documentation-maintenance.md) — How to keep docs current and ownership
- [troubleshooting.md](./troubleshooting.md) — Common issues and solutions
- [faq.md](./faq.md) — Frequently asked questions
- [ambiguities-and-open-questions.md](./ambiguities-and-open-questions.md) — Unresolved items, TODOs, known gaps
- [api-usage-examples.md](./api-usage-examples.md) — Example requests and responses for API usage
- [quick-start.md](./quick-start.md) — Getting started guide for newcomers

### Behaviour
- [behaviour/browse-and-search.md](./behaviour/browse-and-search.md) — User-facing browse and search behaviours
- [behaviour/inspect-edit-delete.md](./behaviour/inspect-edit-delete.md) — User-facing inspect, edit, and delete behaviours

## Navigation aids

- **Start here** (newcomers): [quick-start.md](./quick-start.md) → [repository-overview.md](./repository-overview.md) → [architecture.md](./architecture.md)
- **Deep dive** (component owners): [components/](./components/) → [flows/](./flows/) → [api-reference/](./api-reference/)
- **Flows** (debuggers): [flows/startup-and-rendering.md](./flows/startup-and-rendering.md) → [flows/obfuscation.md](./flows/obfuscation.md) → [flows/copy-to-clipboard.md](./flows/copy-to-clipboard.md)

## Maintenance metadata

- Last reviewed: 2026-11-03
- Owner: horatiu
- Coverage status: Complete for current implementation