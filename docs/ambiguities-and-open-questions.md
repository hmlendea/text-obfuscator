# Ambiguities and open questions

## Ambiguities in current implementation

### A1: Zero-width space count basis
**Observation**: `var inputLength = input.length;` is captured after Phases 1–2 (group replacements) but before Phase 3 (character replacements).
**Question**: Should zero-width count be based on original input length, post-group-replacement length, or final output length?
**Impact**: Minor — affects only the number of invisible characters inserted.
**Decision needed**: Clarify intended behaviour; update code or documentation.

### A2: Group replacement scope
**Observation**: `String.prototype.replace(group, replacement)` replaces only the first occurrence of each group.
**Question**: Is this intentional (limit replacements) or a bug (should replace all occurrences)?
**Impact**: Input "aaa" with group "aa" → only first "aa" replaced.
**Decision needed**: Document as intended or fix with global regex.

### A3: Surrogate pair handling
**Observation**: Algorithm iterates by index (`input[i]`), splitting surrogate pairs.
**Question**: Should the algorithm handle Unicode code points correctly?
**Impact**: Emoji and characters > U+FFFF are corrupted.
**Decision needed**: Accept as limitation or rewrite with `for...of` or `Array.from()`.

### A4: Approximate vs identical precedence
**Observation**: Phase 1 (identical groups) runs before Phase 2 (approximate groups). Phase 3 checks both maps for each character.
**Question**: If a character is in both identical and approximate maps, which wins?
**Current**: Identical checked first in Phase 3 (`if (identicalReplacements[char] && ...)` then `else if (approximateReplacements[char] && ...)`).
**Decision needed**: Document precedence clearly.

### A5: Checkbox state timing
**Observation**: Checkboxes read during `obfuscateText()` execution.
**Question**: Could checkbox state change mid-execution? (Not possible in single-threaded JS, but worth noting.)
**Decision needed**: Document that state is read atomically per invocation.

### A6: Replacement map completeness
**Observation**: Maps cover Latin letters, digits, some punctuation. Many Unicode characters have no replacements.
**Question**: Is the map intended to be comprehensive for a specific script, or representative?
**Decision needed**: Define scope; consider expanding or documenting coverage.

## Open questions for future development

### Q1: Should a build step be added?
**Context**: Currently no build, no minification, no bundling.
**Options**: Keep as-is (simplicity), add minimal build (minification, SRI generation), add full build (TypeScript, testing).
**Trade-off**: Simplicity vs performance vs security (SRI).

### Q2: Should Subresource Integrity be added?
**Context**: No `integrity` attributes on CDN resources.
**Options**: Add SRI hashes for all CDN assets, use npm + bundler for controlled dependencies, accept risk.
**Trade-off**: Security vs maintenance burden (hash updates on version changes).

### Q3: Should automated testing be added?
**Context**: No tests of any kind.
**Options**: Unit tests for `obfuscateText()` logic, E2E tests with Playwright/Cypress, visual regression tests.
**Trade-off**: Confidence vs setup effort for a simple project.

### Q4: Should the algorithm handle Unicode properly?
**Context**: Surrogate pair splitting is a known issue.
**Options**: Rewrite with proper Unicode iteration, document as limitation, accept for target use case (Latin text).
**Trade-off**: Correctness vs complexity.

### Q5: Should group replacements be global?
**Context**: Only first occurrence replaced.
**Options**: Use regex with `/g` flag, keep first-only, make configurable.
**Trade-off**: Predictability vs thoroughness.

### Q6: Should output be copyable as rich text?
**Context**: Output is plain text in readonly input.
**Options**: Keep plain text, add rich text copy (HTML with styling), add formatted copy options.
**Trade-off**: Simplicity vs features.

### Q7: Should there be a "clear" or "reset" button?
**Context**: No way to clear input/output except manual selection.
**Options**: Add clear button, keep minimal UI, add keyboard shortcut.
**Trade-off**: UX vs minimalism.

### Q8: Should zero-width insertion be configurable?
**Context**: Count based on length, positions random, characters from fixed set.
**Options**: Add density slider, character set selector, position strategy, keep as-is.
**Trade-off**: Control vs simplicity.

## Decision log

| ID | Question | Decision | Date | Author |
|----|----------|----------|------|--------|
| A1 | Zero-width count basis | Documented as post-Phase-2 length | — | — |
| A2 | Group replacement scope | Documented as first-occurrence-only | — | — |
| A3 | Surrogate pairs | Documented as known limitation | — | — |
| A4 | Precedence | Documented: identical before approximate | — | — |

## References

- [Obfuscation flow](../flows/obfuscation.md)
- [Invariants](../invariants.md)
- [Design decisions](../design-decisions.md)
- [Change guide](../change-guide.md)