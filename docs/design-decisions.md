# Design decisions

## Client-side only architecture

**Decision**: All processing occurs in the browser; no server component exists.

**Rationale**:
- Simplicity: no server deployment, scaling, or maintenance required
- Privacy: user text never leaves the browser
- Cost: free hosting on GitHub Pages
- Portability: runs anywhere a browser runs

**Trade-offs**:
- Cannot enforce rate limits or quotas
- Cannot log usage analytics
- Replacement maps must be downloaded to the client

## Static replacement maps

**Decision**: Replacement maps are hardcoded JavaScript objects loaded at script initialisation.

**Rationale**:
- Zero runtime dependencies beyond the browser
- Fast lookup: O(1) object property access
- Easy to extend by editing the source file
- No build step or data loading required

**Trade-offs**:
- Maps cannot be updated without redeploying
- Large maps increase initial download size
- No user customisation of maps

## Random selection with 60% probability

**Decision**: Each character has a 60% chance of being replaced (when candidates exist).

**Rationale**:
- Balances obfuscation strength with readability
- Preserves some original characters for visual anchoring
- Simple implementation using `Math.random()`

**Trade-offs**:
- Non-deterministic output for identical input
- Cannot reproduce a specific obfuscation result
- 60% is a heuristic; no user control over probability

## Zero-width space insertion range (10–50%)

**Decision**: Insert between 10% and 50% of input length zero-width characters at random positions.

**Rationale**:
- Provides meaningful obfuscation without excessive output bloat
- Random count and position increase entropy
- Uses standard zero-width Unicode characters

**Trade-offs**:
- Output length increases unpredictably
- Some platforms may strip zero-width characters
- No user control over count or character selection

## jQuery dependency

**Decision**: Use jQuery for DOM manipulation and event handling.

**Rationale**:
- Simplifies cross-browser DOM API differences
- Concise syntax for element selection and manipulation
- Already loaded by the Start Bootstrap template

**Trade-offs**:
- Additional ~30 KB download
- Not strictly necessary for this simple application
- Legacy library; modern vanilla APIs could replace it

## CDN dependencies

**Decision**: Load Bootstrap, Font Awesome, jQuery, Google Fonts, and Start Bootstrap template from CDNs.

**Rationale**:
- No build step or package manager required
- Leverages browser caching across sites
- Automatic updates for patch versions
- Reduces repository size

**Trade-offs**:
- External dependency availability affects functionality
- No integrity verification (no Subresource Integrity hashes)
- Privacy: CDN providers see requests
- Offline use requires pre-caching

## Read-only output field

**Decision**: Output field is `<input readonly>` rather than a `<textarea>` or `<div>`.

**Rationale**:
- Single-line input matches typical use case
- Built-in browser copy support via `select()` and `setSelectionRange()`
- Consistent styling with input field

**Trade-offs**:
- Cannot display multi-line obfuscated text
- Long output may be truncated visually
- No scrollable view for long results

## No automated tests

**Decision**: No unit, integration, or end-to-end test suite is configured.

**Rationale**:
- Simple logic with few branches
- Manual testing in browser is fast and sufficient
- No CI/CD pipeline to run tests
- Low risk of regression in static replacement maps

**Trade-offs**:
- No regression detection for logic changes
- Edge cases (surrogate pairs, emoji, very long input) untested
- No confidence metric for refactoring

## GNU GPL v3 license

**Decision**: Project is licensed under GNU General Public License v3.

**Rationale**:
- Ensures derivative works remain free and open source
- Compatible with GitHub Pages hosting
- Strong copyleft aligns with project philosophy

**Trade-offs**:
- Commercial proprietary use requires separate licensing
- May deter some corporate contributors
- License compatibility must be verified for dependencies

## References

- [Architecture](./architecture.md)
- [Repository overview](./repository-overview.md)
- [Components/application-services.md](./components/application-services.md)