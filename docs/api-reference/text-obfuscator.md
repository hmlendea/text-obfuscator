# TextObfuscator API

Base path: Global scope (browser window)

## obfuscateText (function)

**Signature**: `function obfuscateText(): void`

**Controller action**: `window.obfuscateText`

**Authentication/authorisation**: None

### Request

No parameters. Reads from DOM implicitly.

**Implicit inputs**:

| Source | Element ID | Type | Description |
|--------|------------|------|-------------|
| DOM | `input` | `HTMLInputElement` | User input text |
| DOM | `approximateCharactersCheckbox` | `HTMLInputElement` | Checkbox state (checked = enable approximate) |
| DOM | `zeroWidthSpacesCheckbox` | `HTMLInputElement` | Checkbox state (checked = enable zero-width) |

### Response

**Success**: `undefined` (writes to DOM)

**Side effects**:
- Reads `#input` value
- Applies obfuscation algorithm
- Writes result to `#output` value

**Output element**: `#output` (readonly `<input type="text">`)

### Behaviour summary

Applies character obfuscation in four phases:
1. Identical group replacements (60% probability per group)
2. Approximate group replacements if enabled (60% probability per group)
3. Character-by-character replacements (60% probability per character)
4. Zero-width space insertion if enabled (10–50% of original input length)

Non-deterministic: each invocation produces different output for identical input.

### Flow references

- [Obfuscation flow](../flows/obfuscation.md)
- [Application services](../components/application-services.md)

### Error scenarios

| Condition | Behaviour |
|-----------|-----------|
| jQuery not loaded | `ReferenceError: $ is not defined` |
| `#input` element missing | `$("#input").val()` returns `undefined`; processes as empty string |
| `#output` element missing | `$("#output").val(output)` throws |
| Checkbox elements missing | `.is(':checked')` returns `false`; features disabled |

---

## copyText (function)

**Signature**: `function copyText(): void`

**Controller action**: `window.copyText`

**Authentication/authorisation**: None

### Request

No parameters. Reads from DOM implicitly.

**Implicit inputs**:

| Source | Element ID | Type | Description |
|--------|------------|------|-------------|
| DOM | `output` | `HTMLInputElement` | Obfuscated text to copy |

### Response

**Success**: `undefined` (copies to clipboard)

**Side effects**:
- Focuses, selects, and sets selection range on `#output`
- Writes to system clipboard

### Behaviour summary

Copies the value of `#output` to the clipboard using a two-tier strategy:
1. Modern Clipboard API (`navigator.clipboard.writeText`) if available and in secure context
2. Legacy `document.execCommand("copy")` fallback

No user feedback on success or failure.

### Flow references

- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [Application services](../components/application-services.md)

### Error scenarios

| Condition | Behaviour |
|-----------|-----------|
| `#output` element missing | `TypeError` on `focus()` |
| Clipboard API unavailable | Falls back to `execCommand` |
| Clipboard API permission denied | Falls back to `execCommand` |
| `execCommand` unsupported | Silent failure |
| Insecure context (HTTP, file://) | Uses fallback |

---

## fallbackCopy (function)

**Signature**: `function fallbackCopy(copyText: HTMLElement): void`

**Controller action**: `window.fallbackCopy`

**Authentication/authorisation**: None

### Request

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `copyText` | `HTMLElement` | Yes | Element to copy from (must support `focus`, `select`, `setSelectionRange`) |

### Response

**Success**: `undefined`

**Side effects**:
- Focuses, selects, and sets selection range on the element
- Executes `document.execCommand("copy")`

### Behaviour summary

Legacy clipboard copy implementation. Called by `copyText()` when modern API is unavailable or fails.

### Error scenarios

| Condition | Behaviour |
|-----------|-----------|
| Element doesn't support selection API | `TypeError` |
| `execCommand("copy")` returns `false` | Silent failure |
| `execCommand` not supported | Silent failure |

---

## Replacement maps (read-only objects)

### identicalGroupReplacements

**Type**: `Object<string, string>`

**Description**: Multi-character sequences mapped to visually identical Unicode replacement candidates.

**Example entries**:
```javascript
{
    "**": "ᕯ",
    "!!": "‼",
    "!?": "⁉",
    "??": "⁇",
    "?!": "⁈",
    "...": "…",
    " ": "     "
}
```

**Usage**: Iterated in `obfuscateText()` Phase 1. Each group has 60% replacement probability.

### approximateGroupReplacements

**Type**: `Object<string, string>`

**Description**: Multi-character sequences mapped to visually similar Unicode replacement candidates.

**Usage**: Iterated in `obfuscateText()` Phase 2 (if approximate checkbox checked). 60% probability per group.

### identicalReplacements

**Type**: `Object<string, string>`

**Description**: Single characters mapped to visually identical Unicode replacement candidates.

**Example entries**:
```javascript
{
    "A": "АΑꓮ",
    "B": "ВΒꓐ",
    "E": "ЕΕꓰ",
    "a": "а",
    "e": "е",
    "o": "оօο"
}
```

**Usage**: Consulted in `obfuscateText()` Phase 3 for each character. 60% replacement probability.

### approximateReplacements

**Type**: `Object<string, string>`

**Description**: Single characters mapped to visually similar Unicode replacement candidates.

**Usage**: Consulted in `obfuscateText()` Phase 3 (if approximate checkbox checked). Candidates appended to identical candidates. 60% replacement probability.

---

## DOM contract

The API requires the following DOM elements to exist with exact IDs:

| Element ID | Tag | Attributes | Required by |
|------------|-----|------------|-------------|
| `input` | `<input>` | `type="text"` | `obfuscateText()` |
| `output` | `<input>` | `type="text" readonly` | `obfuscateText()`, `copyText()`, `fallbackCopy()` |
| `approximateCharactersCheckbox` | `<input>` | `type="checkbox"` | `obfuscateText()` |
| `zeroWidthSpacesCheckbox` | `<input>` | `type="checkbox"` | `obfuscateText()` |

Changing any ID without updating the JavaScript will break the corresponding functionality.

---

## Global dependencies

| Dependency | Global symbol | Required by |
|------------|---------------|-------------|
| jQuery | `$` | `obfuscateText()` (DOM access, checkbox state) |
| Clipboard API | `navigator.clipboard` | `copyText()` (modern path) |
| Secure context | `window.isSecureContext` | `copyText()` (modern path guard) |
| Legacy copy | `document.execCommand` | `fallbackCopy()` |

---

## Versioning

No formal versioning. The API evolves with the application deployment.

---

## Rate limiting

None. Client-side only.

---

## Related documentation

- [API reference index](./INDEX.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [Application services](../components/application-services.md)
- [Architecture](../architecture.md)