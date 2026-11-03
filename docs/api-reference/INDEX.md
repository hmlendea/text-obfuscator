# API reference index

## Overview

This project exposes a JavaScript API via global functions defined in `js/text-obfuscator.js`. There is no HTTP API, REST endpoint, or server-side interface.

## Global functions

| Function | Description | Parameters | Returns |
|----------|-------------|------------|---------|
| `obfuscateText()` | Reads input, applies obfuscation, writes output | None | `undefined` |
| `copyText()` | Copies output field value to clipboard | None | `undefined` |
| `fallbackCopy(element)` | Legacy clipboard copy for a given element | `element` (HTMLElement) | `undefined` |

## Replacement maps (read-only)

| Map | Type | Description |
|-----|------|-------------|
| `identicalGroupReplacements` | `Object<string, string>` | Multi-char identical replacements |
| `approximateGroupReplacements` | `Object<string, string>` | Multi-char approximate replacements |
| `identicalReplacements` | `Object<string, string>` | Single-char identical replacements |
| `approximateReplacements` | `Object<string, string>` | Single-char approximate replacements |

## DOM dependencies

The API implicitly depends on the following DOM elements existing with these IDs:

| Element ID | Type | Used by |
|------------|------|---------|
| `input` | `<input type="text">` | `obfuscateText()` |
| `output` | `<input type="text" readonly>` | `obfuscateText()`, `copyText()`, `fallbackCopy()` |
| `approximateCharactersCheckbox` | `<input type="checkbox">` | `obfuscateText()` |
| `zeroWidthSpacesCheckbox` | `<input type="checkbox">` | `obfuscateText()` |

## Authentication/authorisation

None. The API runs in the user's browser with the user's privileges. No authentication or authorisation mechanisms exist.

## Versioning

No formal versioning scheme for the JavaScript API. Changes are deployed with the application.

## Rate limiting / throttling

None. The API is client-side only; no rate limiting applies.

## Related documentation

- [TextObfuscator API](./text-obfuscator.md) — Detailed function documentation
- [Obfuscation flow](../flows/obfuscation.md) — Algorithm details
- [Copy to clipboard flow](../flows/copy-to-clipboard.md) — Clipboard details
- [Application services](../components/application-services.md) — Implementation details
- [Architecture](../architecture.md) — System context