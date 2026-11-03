# Frequently asked questions

## General

### What does this tool do?
Replaces characters in text with visually similar alternatives (homoglyphs) and optionally inserts invisible zero-width spaces. Useful for bypassing simple text filters or creating "invisible" watermarks.

### Is it secure?
Yes. All processing happens in your browser. No text is sent to any server. See [Security](../security.md) and root [SECURITY.md](../../SECURITY.md).

### Can I use it offline?
Yes. After loading once, it works fully offline (all assets cached by browser).

### Is there an API?
No. This is a client-side web application only. See [API reference](../api-reference/text-obfuscator.md) for internal function documentation.

## Usage

### Why does the output look the same?
Some characters have no replacements in the maps. Only characters with defined replacements change.

### What does "Approximate characters" do?
Enables additional replacement maps with less visually similar characters (e.g., `A` → `Д`, `B` → `В`). Increases obfuscation but reduces readability.

### What are zero-width spaces?
Invisible Unicode characters (U+200B, U+200C, U+200D, U+FEFF, U+2060) inserted randomly throughout the output. They increase string length without visual change.

### Can I obfuscate multiple lines?
No. The input uses `<input type="text">` which only accepts a single line.

### Why does copy sometimes not work?
- On HTTP or `file://`, the modern Clipboard API is unavailable; fallback `execCommand` is used
- Some browsers block clipboard access without user gesture
- Try selecting output manually and pressing Ctrl+C

## Technical

### How does the algorithm work?
Four phases:
1. Replace multi-character sequences (identical groups)
2. Replace multi-character sequences (approximate groups) — if enabled
3. Replace individual characters (identical + approximate if enabled)
4. Insert random zero-width spaces — if enabled

See [Obfuscation flow](../flows/obfuscation.md).

### Why are emoji corrupted?
JavaScript strings use UTF-16. Emoji are surrogate pairs (two code units). The algorithm processes each code unit separately, breaking the pair.

### Can I add my own replacements?
Yes. Edit `js/text-obfuscator.js` and add entries to the replacement map objects. See [Change guide](../change-guide.md).

### Is the output deterministic?
No. `Math.random()` selects replacements and zero-width positions. Same input produces different output each time.

### What browsers are supported?
Any modern browser with:
- ES5+ (all browsers since ~2015)
- Clipboard API (HTTPS) or `execCommand` fallback
- No polyfills needed

## Deployment

### How do I deploy my own copy?
1. Fork or clone the repository
2. Enable GitHub Pages on `master` branch, `/` folder
3. Access at `https://yourusername.github.io/text-obfuscator/`

### Can I host it elsewhere?
Yes. Any static file host (Netlify, Vercel, Cloudflare Pages, Apache, Nginx, etc.). Just serve the files.

### How do I update dependencies?
Edit `index.html` and change version numbers in CDN URLs. See [Change guide](../change-guide.md).

## References

- [Troubleshooting](../troubleshooting.md)
- [Ambiguities and open questions](../ambiguities-and-open-questions.md)
- [Change guide](../change-guide.md)
- [Architecture](../architecture.md)