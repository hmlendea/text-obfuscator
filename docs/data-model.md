# Data model

## Domain entities

The application has no domain entities, data models, or persistent data structures. All processing operates on transient strings in memory.

## Data flow

```mermaid
flowchart LR
    UserInput[User input text] --> obfuscateText[obfuscateText()]
    obfuscateText --> ReplacementMaps[Replacement maps]
    obfuscateText --> OutputString[Obfuscated output string]
    OutputString --> DOMOutput[#output value]
    DOMOutput --> Clipboard[Clipboard (on copy)]
```

## Replacement map structure

### identicalGroupReplacements

```typescript
type IdenticalGroupReplacements = Record<string, string>;
// Key: multi-character sequence to match
// Value: string of candidate replacement characters (one selected randomly)
```

### approximateGroupReplacements

```typescript
type ApproximateGroupReplacements = Record<string, string>;
// Same structure as identicalGroupReplacements
```

### identicalReplacements

```typescript
type IdenticalReplacements = Record<string, string>;
// Key: single character to match
// Value: string of candidate replacement characters (one selected randomly)
```

### approximateReplacements

```typescript
type ApproximateReplacements = Record<string, string>;
// Same structure as identicalReplacements
```

## Character representation

- Input: JavaScript string (UTF-16 code units)
- Processing: Iterates by index (`input[i]`), treating each UTF-16 code unit as a character
- Output: JavaScript string (UTF-16 code units)
- **Limitation**: Surrogate pairs (characters outside BMP) are split and processed as two separate code units

## Zero-width characters

```typescript
const zeroWidthCharacters: string[] = [
    "\u200B", // Zero Width Space
    "\u200C", // Zero Width Non-Joiner
    "\u200D", // Zero Width Joiner
    "\uFEFF", // Zero Width No-Break Space (BOM)
    "\u2060"  // Word Joiner
];
```

## Persistence

None. No data is persisted to:
- localStorage
- sessionStorage
- IndexedDB
- Cookies
- Server
- File system

## Retention

No retention policies apply. All data exists only during the page session.

## Schema evolution

Not applicable. No persistent schema exists.

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Browser state](../components/browser-state-and-localisation.md)