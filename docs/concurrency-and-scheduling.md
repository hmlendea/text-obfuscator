# Concurrency and scheduling

## Execution model

**Single-threaded, synchronous, main-thread only**. The application runs entirely on the browser's main thread with no concurrency primitives.

## Threading

| Aspect | Detail |
|--------|--------|
| Web Workers | None |
| Service Workers | None |
| `setTimeout`/`setInterval` | None in application code |
| `requestAnimationFrame` | None |
| `async`/`await` | Only in Clipboard API Promise (not awaited) |
| `Promise` | Only `navigator.clipboard.writeText()` returns Promise |

## Scheduling

### Obfuscation execution

```javascript
// Synchronous, blocking
function obfuscateText() {
    // Phase 1: Group replacements (synchronous)
    // Phase 2: Approximate group replacements (synchronous)
    // Phase 3: Character-by-character (synchronous loop)
    // Phase 4: Zero-width insertion (synchronous)
    // All complete before function returns
}
```

- Triggered by `onclick="obfuscateText()"` on button
- Runs to completion without yielding
- Blocks main thread for duration
- No progress indication
- No cancellation mechanism

### Clipboard execution

```javascript
function copyText() {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(output.value).catch(function () {
            fallbackCopy(output);  // Microtask, runs after current task
        });
        return;
    }
    fallbackCopy(output);  // Synchronous
}
```

- Modern API: asynchronous (Promise), non-blocking
- Fallback: synchronous `execCommand('copy')`

## Blocking risks

| Operation | Risk | Mitigation |
|-----------|------|------------|
| Very long input (>100k chars) | Main thread blocked, "unresponsive script" dialog | None |
| Rapid repeated clicks | Queue of synchronous executions | None (button not disabled) |
| Clipboard Promise rejection | Microtask runs after current task | Fallback executes |

## Parallelism

None. No parallel processing of any kind.

## Race conditions

None. No shared mutable state accessed concurrently.

## Deadlocks

Impossible. No locks, no async/await chains, no inter-thread communication.

## Resource contention

Only main thread contention. Long obfuscation blocks UI (scrolling, typing, other tabs in same process).

## References

- [Architecture](../architecture.md)
- [Application services](../components/application-services.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Copy to clipboard flow](../flows/copy-to-clipboard.md)
- [Error handling](../error-handling.md)