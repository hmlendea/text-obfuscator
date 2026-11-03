# Configuration

## Configuration schema

The application has no formal configuration file, environment variables, or configuration management system. All configuration is hardcoded in the source.

## Hardcoded configuration values

### Obfuscation probabilities

| Parameter | Value | Location | Description |
|-----------|-------|----------|-------------|
| Group replacement probability | 60% (6/10) | `js/text-obfuscator.js` lines 200, 215, 235 | Probability that a group or character is replaced |
| Zero-width space minimum | 10% of input length | `js/text-obfuscator.js` line 255 | Minimum zero-width spaces to insert |
| Zero-width space maximum | 50% of input length | `js/text-obfuscator.js` line 256 | Maximum zero-width spaces to insert |

### Default checkbox states

| Checkbox | Default | Location |
|----------|---------|----------|
| Approximate characters | Unchecked | `index.html` (no `checked` attribute) |
| Zero-width spaces | Checked | `index.html` (`checked` attribute present) |

### Replacement maps

All replacement maps are hardcoded as JavaScript object literals in `js/text-obfuscator.js`:
- `identicalGroupReplacements`
- `approximateGroupReplacements`
- `identicalReplacements`
- `approximateReplacements`

### Zero-width characters

```javascript
var zeroWidthCharacters = ["\u200B", "\u200C", "\u200D", "\uFEFF", "\u2060"];
```

Hardcoded array of 5 zero-width Unicode characters.

## Configuration sources and precedence

No external configuration sources exist. Precedence is not applicable.

| Source | Precedence | Modifiable at runtime |
|--------|------------|----------------------|
| Source code (hardcoded) | Only source | No (requires code change and redeploy) |

## Runtime modification

Configuration cannot be modified at runtime without:
1. Editing the source files
2. Reloading the page

No API, UI, or mechanism exists for runtime configuration changes.

## Environment-specific configuration

None. The same code runs in all environments (local, GitHub Pages, any static host).

## Feature flags

The two checkboxes act as runtime feature flags:
- `#approximateCharactersCheckbox` — Enables approximate replacements
- `#zeroWidthSpacesCheckbox` — Enables zero-width space insertion

These are the only user-controllable configuration options.

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Design decisions](../design-decisions.md)
- [Obfuscation flow](../flows/obfuscation.md)