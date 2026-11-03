# Quick start

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

## Running locally

```bash
# Clone the repository
git clone https://github.com/hmlendea/text-obfuscator.git
cd text-obfuscator

# Open index.html in a browser
# On Linux:
xdg-open index.html
# On macOS:
open index.html
# On Windows:
start index.html
```

Or serve with a local HTTP server:

```bash
# Python 3
python3 -m http.server 8000
# Then open http://localhost:8000

# Node.js (if available)
npx serve .
# Then open the provided URL
```

## Using the application

1. Open the application (local or https://hmlendea.github.io/text-obfuscator)
2. Type text into the **Input** field
3. Optionally enable **Approximate characters** for additional replacements
4. Optionally enable **Add zero-width spaces** (enabled by default) to insert invisible characters
5. Click **Obfuscate** to generate the obfuscated output
6. Click **Copy** to copy the result to the clipboard

## Understanding the output

- **Identical replacements**: Characters replaced with visually identical Unicode equivalents (e.g., `A` → `А`, `e` → `е`)
- **Approximate replacements**: Characters replaced with visually similar but not identical equivalents (e.g., `A` → `ᗅ`, `e` → `ⴹ`)
- **Zero-width spaces**: Invisible characters (`U+200B`, `U+200C`, `U+200D`, `U+FEFF`, `U+2060`) inserted at random positions

## Development workflow

1. Edit `index.html`, `css/custom.css`, or `js/text-obfuscator.js`
2. Refresh the browser to see changes
3. Test manually with various inputs
4. Commit and push to deploy

## Key files to know

| File | Purpose |
|------|---------|
| `index.html` | Page structure, DOM elements, asset loading |
| `js/text-obfuscator.js` | Replacement maps and obfuscation logic |
| `css/custom.css` | Custom styling |

## Common modifications

- **Add character replacements**: Edit `identicalReplacements` or `approximateReplacements` in `js/text-obfuscator.js`
- **Add multi-character replacements**: Edit `identicalGroupReplacements` or `approximateGroupReplacements`
- **Change UI**: Edit `index.html` and `css/custom.css`
- **Modify obfuscation probability**: Change the `6` in `Math.floor(Math.random() * 10) + 1 <= 6` (60% chance)
- **Change zero-width space range**: Modify `0.1` and `0.5` multipliers in `obfuscateText()`

## References

- [Repository overview](./repository-overview.md)
- [Architecture](./architecture.md)
- [Components/application-services.md](./components/application-services.md)