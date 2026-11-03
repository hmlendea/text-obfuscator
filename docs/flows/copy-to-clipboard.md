# Copy to clipboard flow

## Overview

Clipboard copy with modern API and legacy fallback triggered by the Copy button.

## Sequence diagram

```mermaid
sequenceDiagram
    participant User
    participant DOM
    participant copyText as copyText()
    participant ClipboardAPI as navigator.clipboard
    participant fallbackCopy as fallbackCopy()

    User->>DOM: Clicks #copy button
    DOM->>copyText: onclick handler
    copyText->>DOM: document.getElementById("output")
    DOM-->>copyText: Output element
    copyText->>DOM: focus(), select(), setSelectionRange()
    alt Clipboard API available AND secure context
        copyText->>ClipboardAPI: writeText(output.value)
        alt Success
            ClipboardAPI-->>copyText: Promise resolved
        else Failure
            ClipboardAPI-->>copyText: Promise rejected
            copyText->>fallbackCopy: fallbackCopy(output)
    else Clipboard API unavailable OR insecure context
        copyText->>fallbackCopy: fallbackCopy(output)
    end
    fallbackCopy->>DOM: focus(), select(), setSelectionRange()
    fallbackCopy->>DOM: document.execCommand("copy")
    DOM-->>User: Text copied (or silent failure)
```

## Detailed steps

### copyText()

```javascript
function copyText() {
    var output = document.getElementById("output");

    output.focus();
    output.select();
    output.setSelectionRange(0, output.value.length);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(output.value).catch(function () {
            fallbackCopy(output);
        });
        return;
    }

    fallbackCopy(output);
}
```

1. **Element retrieval**: `document.getElementById("output")` — gets the readonly output field
2. **Selection preparation**:
   - `focus()` — gives element focus
   - `select()` — selects all text (standard behaviour for `<input>`)
   - `setSelectionRange(0, output.value.length)` — ensures full selection (redundant with `select()` but safe)
3. **Modern API check**: `navigator.clipboard && window.isSecureContext`
   - `navigator.clipboard` exists in secure contexts (HTTPS, localhost)
   - `window.isSecureContext` is `true` for HTTPS and `localhost`
4. **Modern copy**: `navigator.clipboard.writeText(output.value)`
   - Returns a Promise
   - On success: Promise resolves, function returns
   - On failure: Promise rejects, `.catch()` calls `fallbackCopy(output)`
5. **Legacy path**: If modern API unavailable or insecure context, directly calls `fallbackCopy(output)`

### fallbackCopy()

```javascript
function fallbackCopy(copyText) {
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);

    document.execCommand("copy");
}
```

1. **Selection preparation** (same as above)
2. **Legacy copy**: `document.execCommand("copy")`
   - Synchronous
   - Returns `true` on success, `false` on failure
   - No error handling; failure is silent
   - Deprecated but widely supported

## Security context requirements

| Context | `navigator.clipboard` | `window.isSecureContext` | Path taken |
|---------|----------------------|-------------------------|------------|
| `https://hmlendea.github.io/text-obfuscator` | ✅ Available | ✅ `true` | Modern API |
| `http://localhost:8000` | ✅ Available | ✅ `true` (localhost) | Modern API |
| `http://example.com` | ❌ Unavailable | ❌ `false` | Fallback |
| `file:///path/index.html` | ❌ Unavailable | ❌ `false` | Fallback |

## Failure modes

| Scenario | Behaviour |
|----------|-----------|
| Modern API succeeds | Text copied; no user feedback |
| Modern API fails (permission denied, etc.) | Falls back to `execCommand` |
| `execCommand` succeeds | Text copied; no user feedback |
| `execCommand` fails (unsupported, denied) | Silent failure; no user feedback |
| Output element not found | `TypeError` on `focus()`; unhandled exception |
| Output value empty | Copies empty string |

## User feedback

**None**. The application provides no visual or auditory feedback for copy success or failure. Users must verify by pasting elsewhere.

## Browser compatibility

| Browser | Modern API | `execCommand` |
|---------|------------|---------------|
| Chrome 66+ | ✅ | ✅ (deprecated) |
| Firefox 63+ | ✅ | ✅ (deprecated) |
| Safari 13.1+ | ✅ | ✅ (deprecated) |
| Edge 79+ | ✅ | ✅ (deprecated) |
| Older browsers | ❌ | ✅ |

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Browser state](../components/browser-state-and-localisation.md)
- [Obfuscation flow](./obfuscation.md)