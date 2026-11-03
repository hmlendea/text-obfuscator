# Change guide

## Purpose

This document describes how to make common changes to the Text Obfuscator codebase safely.

## Adding a new replacement character

### For identical replacements (single character)

1. Open `js/text-obfuscator.js`
2. Locate `identicalReplacements` object
3. Add entry: `"X": "YZ"` where X is source character, YZ are candidate replacements
4. Test: Enter "X" in input, click Obfuscate, verify output contains Y or Z

### For approximate replacements (single character)

1. Open `js/text-obfuscator.js`
2. Locate `approximateReplacements` object
3. Add entry following same pattern
4. Test with "Approximate characters" checkbox checked

### For group replacements (multi-character)

1. Open `js/text-obfuscator.js`
2. Locate `identicalGroupReplacements` or `approximateGroupReplacements`
3. Add entry: `"SEQ": "ABC"` where SEQ is sequence to match, ABC are candidates
3. **Note**: Only first occurrence of SEQ is replaced per invocation
4. Test with input containing SEQ

## Adding a new checkbox option

1. Open `index.html`
2. Add `<input type="checkbox" id="newOptionCheckbox" ...>` in form area
3. Add corresponding `<label for="newOptionCheckbox">`
4. Open `js/text-obfuscator.js`
5. In `obfuscateText()`, read state: `$("#newOptionCheckbox").is(':checked')`
6. Add conditional logic for the new option
7. Test both checked and unchecked states

## Modifying the obfuscation algorithm

### Adding a new phase

1. Open `js/text-obfuscator.js`
2. Insert new phase in `obfuscateText()` at appropriate position
3. Ensure phase operates on `output` variable (string)
4. Update zero-width insertion logic if it depends on output length
5. Test thoroughly with various inputs

### Changing replacement selection

Current: `replacements[Math.floor(Math.random() * replacements.length)]`

To change:
1. Replace with custom selection logic
2. Ensure it returns a single character string
3. Test distribution if randomness matters

## Updating CDN dependencies

1. Open `index.html`
2. Update version in CDN URLs (e.g., `jquery-3.7.0.min.js` → `jquery-3.7.1.min.js`)
3. Verify SRI hashes if adding (currently none)
4. Test all functionality in browser
5. Check browser console for errors

## Changing styling

1. Open `css/custom.css`
2. Add or modify rules
3. Use browser DevTools to inspect elements first
4. Test responsive behaviour at different widths

## Adding a new page/route

**Not applicable**. Single-page application with no routing.

## Deployment changes

1. Make changes locally
2. Test by opening `index.html` directly
3. Commit and push to `master`
4. GitHub Pages deploys automatically

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Host and composition](../components/host-and-composition.md)
- [Build and deployment](../build-and-deployment.md)