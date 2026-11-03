# Error handling

## Error taxonomy

| Category | Examples | Handling |
|----------|----------|----------|
| **Dependency load failure** | jQuery CDN unavailable, Bootstrap CSS fails | Degraded functionality; no automatic recovery |
| **DOM contract violation** | Element IDs changed, elements missing | Runtime exceptions; broken functionality |
| **API unavailability** | Clipboard API missing, insecure context | Fallback to legacy API; silent failure if both fail |
| **Logic errors** | Surrogate pair corruption, replacement map gaps | No detection; produces unexpected output |
| **Resource exhaustion** | Very long input blocking main thread | No protection; browser may show "unresponsive script" |

## Handling patterns

### No try/catch in application code

The application contains no `try`/`catch` blocks. Errors propagate to the browser's global error handler.

### Fallback pattern (clipboard only)

```javascript
if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(output.value).catch(function () {
        fallbackCopy(output);  // Only error handling in codebase
    });
    return;
}
fallbackCopy(output);
```

### Silent failure

- `fallbackCopy()` ignores `execCommand` return value
- No user notification for any error condition
- No logging or telemetry

## Recovery strategies

| Error | Recovery |
|-------|----------|
| CDN asset fails | Refresh page (may use cached version) |
| jQuery missing | Refresh page; no programmatic recovery |
| DOM element missing | Fix HTML/JS mismatch; redeploy |
| Clipboard API fails | Fallback executes automatically |
| Both clipboard methods fail | User must manually select and copy |
| Main thread blocked | Wait or kill tab; no cancellation |

## Error boundaries

None. The application has no error boundaries, no graceful degradation framework, and no error reporting.

## Browser error reporting

Errors appear in browser DevTools console only. No application-level error display.

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Browser state](../components/browser-state-and-localisation.md)