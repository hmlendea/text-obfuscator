# Testing

## Test strategy

**Manual testing only**. No automated test suite, no unit tests, no integration tests, no end-to-end tests.

## Test organisation

No test directory, no test files, no test runner, no CI test step.

## Coverage

No coverage measurement. No coverage reports.

## Manual test cases

### Core obfuscation

| Test case | Steps | Expected |
|-----------|-------|----------|
| Basic obfuscation | 1. Enter "Hello World" 2. Click Obfuscate | Output contains visually similar characters |
| Empty input | 1. Leave input empty 2. Click Obfuscate | Output empty |
| Special characters | 1. Enter "!@#$%^&*()" 2. Click Obfuscate | Some characters replaced per maps |
| Long input | 1. Enter 1000+ characters 2. Click Obfuscate | Output generated (may block UI) |

### Approximate characters

| Test case | Steps | Expected |
|-----------|-------|----------|
| Approximate enabled | 1. Check "Approximate characters" 2. Enter "ABC" 3. Click Obfuscate | Additional replacements from approximate maps |
| Approximate disabled | 1. Uncheck "Approximate characters" 2. Enter "ABC" 3. Click Obfuscate | Only identical replacements applied |

### Zero-width spaces

| Test case | Steps | Expected |
|-----------|-------|----------|
| Zero-width enabled (default) | 1. Ensure checkbox checked 2. Enter "Test" 3. Click Obfuscate | Output length > input length (invisible chars) |
| Zero-width disabled | 1. Uncheck "Add zero-width spaces" 2. Enter "Test" 3. Click Obfuscate | Output length ≈ input length (only replacements) |

### Copy to clipboard

| Test case | Steps | Expected |
|-----------|-------|----------|
| Modern API (HTTPS) | 1. Generate output 2. Click Copy 3. Paste elsewhere | Pasted text matches output |
| Fallback (HTTP/file://) | 1. Open via HTTP or file:// 2. Generate output 3. Click Copy 4. Paste | Pasted text matches output |

### Edge cases

| Test case | Steps | Expected |
|-----------|-------|----------|
| Surrogate pairs (emoji) | 1. Enter "😀🎉" 2. Click Obfuscate | Each code unit processed separately |
| Newlines | 1. Enter multi-line (not possible in `<input>`) | N/A — input is single-line |
| Unicode only | 1. Enter "αβγδε" 2. Click Obfuscate | Characters not in maps preserved |

## Known gaps

- No automated regression detection
- No surrogate pair handling verification
- No very long input performance testing
- No cross-browser testing automation
- No accessibility testing
- No security testing (CSP, SRI, etc.)

## Running tests

```bash
# No test command exists
# Manual testing:
# 1. Open index.html in browser
# 2. Execute test cases above
# 3. Verify visually
```

## CI/CD integration

None. No GitHub Actions workflow for testing. Deployment is manual push to `master`.

## References

- [Architecture](../architecture.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [Error handling](../error-handling.md)