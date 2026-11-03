# Invariants

## System-wide invariants

### I1: Client-side only processing
**Statement**: All text processing occurs within the browser. No input text is transmitted to any external server.
**Verification**: Network tab shows no requests during obfuscation or copy.
**Enforcement**: Architecture — no server component exists.

### I2: Output field is read-only
**Statement**: The `#output` element has `readonly` attribute; users cannot edit it directly.
**Verification**: `index.html` contains `<input ... readonly />`.
**Enforcement**: HTML attribute; browser enforces.

### I3: Replacement maps are immutable at runtime
**Statement**: The four replacement map objects are never mutated after script load.
**Verification**: `js/text-obfuscator.js` only reads from maps; no assignment to map properties.
**Enforcement**: Code convention; no runtime protection.

### I4: Non-deterministic output
**Statement**: Identical input with identical checkbox states produces different output on each invocation.
**Verification**: `Math.random()` used in all replacement decisions with no seed.
**Enforcement**: Algorithm design.

### I5: Zero-width insertion operates on post-replacement output
**Statement**: Zero-width spaces are inserted into the string after all character replacements complete.
**Verification**: `obfuscateText()` Phase 4 executes after Phase 3 loop completes.
**Enforcement**: Function structure.

### I6: Group replacements use first-occurrence-only
**Statement**: `String.prototype.replace(group, replacement)` replaces only the first occurrence of each group.
**Verification**: JavaScript `replace()` with string argument behaviour.
**Enforcement**: Language semantics.

### I7: Checkbox state read at execution time
**Statement**: Checkbox states are read during `obfuscateText()` execution, not cached.
**Verification**: `$("#approximateCharactersCheckbox").is(':checked')` called inside function.
**Enforcement**: Code structure.

### I8: Original input length determines zero-width count
**Statement**: Zero-width space count is based on `input.length` before any replacements (captured at function start).
**Verification**: `var inputLength = input.length;` captured before Phase 4, after Phases 1–2 but before Phase 3.
**Note**: Actually uses length after Phases 1–2, not original input. This is a discrepancy.

### I9: No persistent state
**Statement**: No data persists across page loads, sessions, or users.
**Verification**: No localStorage, sessionStorage, IndexedDB, cookies, or server calls.
**Enforcement**: Architecture.

### I10: Single-threaded execution
**Statement**: All processing runs on the main thread synchronously (except Clipboard API Promise).
**Verification**: No `setTimeout`, `setInterval`, `Web Workers`, or async/await in obfuscation.
**Enforcement**: Code structure.

## Component invariants

### Presentation
- **P1**: `#input` and `#output` elements exist with correct IDs
- **P2**: Checkbox elements exist with correct IDs
- **P3**: Button `onclick` handlers reference correct function names

### Application services
- **A1**: Replacement maps defined before any function calls
- **A2**: `obfuscateText()` reads `#input`, writes `#output`
- **A3**: `copyText()` operates on `#output` element

### Host and composition
- **H1**: `js/text-obfuscator.js` loads after jQuery
- **H2**: All CDN assets load before `text-obfuscator.js` executes
- **H3**: DOM is fully constructed before `text-obfuscator.js` executes

## Invariant violation consequences

| Invariant | Violation consequence |
|-----------|----------------------|
| I1 | Privacy breach; architectural deviation |
| I2 | User could edit output; breaks copy assumption |
| I3 | Unpredictable behaviour; map corruption |
| I4 | Reproducible obfuscation; reduced entropy |
| I5 | Zero-width spaces could be replaced; logic error |
| I6 | Only first group occurrence replaced; documented |
| I7 | Stale checkbox state; feature toggle broken |
| I8 | Zero-width count based on modified length; minor |
| I9 | Data leakage; privacy violation |
| I10 | UI freezing; no progress indication |

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Design decisions](../design-decisions.md)