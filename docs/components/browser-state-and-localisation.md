# Browser state and localisation

## State management

The application maintains no persistent state. All state is transient and exists only in the DOM during a single page session.

### DOM state

| Element | State | Persistence |
|---------|-------|-------------|
| `#input` | User-entered text | Session only (lost on refresh/navigation) |
| `#output` | Obfuscated result | Session only (lost on refresh/navigation) |
| `#approximateCharactersCheckbox` | Boolean (checked/unchecked) | Session only (default: unchecked) |
| `#zeroWidthSpacesCheckbox` | Boolean (checked/unchecked) | Session only (default: checked) |

### JavaScript state

No module-level state variables. All variables are function-local within `obfuscateText()`, `copyText()`, and `fallbackCopy()`.

Replacement maps (`identicalReplacements`, `approximateReplacements`, `identicalGroupReplacements`, `approximateGroupReplacements`) are defined at script load and are effectively constants (never mutated).

## Localisation

The application has no localisation support. All user-facing strings are hardcoded in English in `index.html`:

- "Input:"
- "Output:"
- "Approximate characters"
- "Add zero-width spaces"
- "Obfuscate"
- "Copy"
- Placeholder text: "Hello world!" and "Неllo World!"

No language detection, translation files, or locale-aware formatting exist.

## Browser APIs used

| API | Purpose | Fallback |
|-----|---------|----------|
| `document.getElementById()` | Element access | None |
| `element.focus()` | Focus for copy | None |
| `element.select()` | Select text for copy | None |
| `element.setSelectionRange()` | Set selection for copy | None |
| `navigator.clipboard.writeText()` | Modern clipboard copy | `document.execCommand("copy")` |
| `window.isSecureContext` | Secure context detection | None |
| `Math.random()` | Random selection | None |
| `String.prototype.replace()` | Group replacements | None |
| `String.prototype.slice()` | Zero-width insertion | None |

## Event loop interaction

All operations are synchronous and execute on the main thread:
- `obfuscateText()` runs to completion without yielding
- `copyText()` runs to completion (Clipboard API is async but awaited via `.catch()`)
- No `setTimeout`, `setInterval`, `requestAnimationFrame`, or `Promise` chains (except Clipboard API catch)

## Memory profile

- Replacement maps: ~500 entries total, ~10 KB
- Input/output strings: proportional to user input
- Zero-width insertion: creates new string per insertion (O(n²) for many insertions)
- No memory leaks; all variables are function-scoped

## References

- [Architecture](./architecture.md)
- [Application services](./application-services.md)
- [Presentation](./presentation.md)
- [Flows/obfuscation.md](../flows/obfuscation.md)