# Security

This document complements the root [SECURITY.md](../SECURITY.md) with implementation-level security analysis.

## Security model

The application operates entirely within the browser trust boundary. No server-side component exists. The attack surface is limited to:

1. **CDN supply chain** — Compromised CDN assets could inject malicious code
2. **XSS via input** — User input reflected in output (but output is readonly, not executed)
3. **Clipboard API** — Clipboard access requires secure context
4. **Client-side logic** — No server-side validation or sanitisation needed

## Threat analysis

| Threat | Likelihood | Impact | Mitigation |
|--------|------------|--------|------------|
| CDN compromise | Low | High (full code execution) | No SRI; manual version pinning for critical deps |
| XSS via input | None | N/A | Output is readonly text input; not rendered as HTML |
| Clipboard data theft | Low | Medium | Requires user interaction (click Copy); secure context required |
| Malicious replacement maps | Low | Low | Maps are hardcoded; supply chain same as code |
| Denial of service (long input) | Medium | Low | Main thread blocks; no server impact |
| Information leakage | None | N/A | No network requests; no data collection |

## Security controls

### Content Security Policy

**None**. GitHub Pages does not support custom CSP headers for user pages.

### Subresource Integrity

**None**. No `integrity` attributes on CDN `<script>` or `<link>` tags.

### HTTPS enforcement

**Enforced by GitHub Pages**. All traffic served over HTTPS. `window.isSecureContext` is `true`.

### Input validation

**None required**. Input is treated as plain text, never parsed as HTML, SQL, or code. Output is set via `.val()` not `.html()`.

### Output encoding

**Not applicable**. Output is plain text in a readonly `<input>`. No HTML rendering.

### Clipboard security

- Modern Clipboard API requires secure context (HTTPS/localhost)
- Fallback `execCommand` works in more contexts but is deprecated
- No programmatic clipboard reading (only writing)

## Vulnerability reporting

Per root [SECURITY.md](../SECURITY.md):
- Report via GitHub Security Advisories
- Coordinated disclosure process
- Safe harbour for good-faith research

## Known security considerations

1. **No SRI**: CDN assets could be modified without detection. Mitigation: pin exact versions for critical dependencies.
2. **Unpinned dependencies**: Start Bootstrap template, Google Fonts, favicon load latest versions. Could introduce breaking changes or malicious code.
3. **Font Awesome loads full kit**: `all.js` includes all icons; larger attack surface than needed.
4. **jQuery 3.7.0**: Check for known vulnerabilities periodically.
5. **Bootstrap 5.3.0**: Check for known vulnerabilities periodically.

## Secure development practices

- No `eval()`, `Function()`, `innerHTML` with user data
- No dynamic code generation
- No authentication/authorisation (not needed)
- No secrets in code (no API keys, tokens)
- Dependencies loaded over HTTPS

## References

- [Root SECURITY.md](../SECURITY.md)
- [Architecture](../architecture.md)
- [Dependencies](../dependencies.md)
- [Integration models](../components/integration-models.md)
- [Error handling](../error-handling.md)