# Troubleshooting

## Common issues

### Obfuscate button does nothing

| Cause | Check | Fix |
|-------|-------|-----|
| jQuery not loaded | Browser console: `$ is not defined` | Check network tab for jquery CDN; refresh |
| `text-obfuscator.js` not loaded | Network tab: 404 on js/text-obfuscator.js | Verify file exists; check path in index.html |
| Element ID mismatch | Console: `Cannot read property 'value' of null` | Verify `#input` and `#output` IDs match HTML |
| Function name typo | Console: `obfuscateText is not defined` | Check `onclick="obfuscateText()"` matches function name |

### Output looks wrong

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| No replacements | Replacement maps empty or wrong | Check `identicalReplacements` etc. in JS |
| Only first group replaced | Expected behaviour | Group replacements use `String.replace()` (first only) |
| Emoji corrupted | Surrogate pairs split | Known limitation; no fix without rewrite |
| Zero-width spaces not added | Checkbox unchecked or logic error | Verify `#zeroWidthSpacesCheckbox` checked; check Phase 4 |

### Copy button fails

| Context | Expected behaviour | Troubleshooting |
|---------|-------------------|-----------------|
| HTTPS (GitHub Pages) | Modern Clipboard API used | Check `navigator.clipboard` exists; secure context |
| HTTP / file:// | Fallback `execCommand` used | Check browser supports `execCommand('copy')` |
| Both fail | Silent failure | Open DevTools console; check for errors |

### Styling broken

| Symptom | Cause | Fix |
|---------|-------|-----|
| Unstyled page | Bootstrap CSS failed to load | Network tab; check CDN; refresh |
| Icons missing | Font Awesome failed | Network tab; check kit URL |
| Fonts wrong | Google Fonts blocked | Check network; firewall may block fonts.googleapis.com |

## Debugging steps

1. **Open DevTools** (F12)
2. **Console tab** — Look for red errors
3. **Network tab** — Reload; check for failed requests (red)
4. **Elements tab** — Verify DOM structure matches expectations
5. **Sources tab** — Set breakpoint in `obfuscateText()` or `copyText()`

## Known limitations (not bugs)

- **Surrogate pairs**: Emoji and characters outside BMP are split into two code units
- **Group replacement**: Only first occurrence of each group is replaced per obfuscation
- **Zero-width count**: Based on post-replacement length, not original input length
- **No undo**: No history or revert functionality
- **Single line**: `<input>` cannot accept newlines
- **Blocking**: Large inputs freeze UI until complete

## Getting help

1. Check [FAQ](../faq.md)
2. Check [Ambiguities and open questions](../ambiguities-and-open-questions.md)
3. Search GitHub Issues
4. Create new issue with:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behaviour
   - Console errors (if any)

## References

- [Error handling](../error-handling.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [FAQ](../faq.md)
- [Ambiguities and open questions](../ambiguities-and-open-questions.md)