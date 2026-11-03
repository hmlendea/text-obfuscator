# Logging

## Logging framework

**None**. The application does not use any logging framework (no Serilog, NLog, log4net, Winston, console.log wrappers, etc.).

## Log levels

Not applicable. No structured logging exists.

## Structured fields

Not applicable. No log entries are produced.

## Correlation

Not applicable. No request tracing, correlation IDs, trace IDs, or span IDs exist.

## Sinks/destinations

| Destination | Used | Configuration |
|-------------|------|---------------|
| Browser console | Only for unhandled exceptions | Native browser behaviour |
| File | No | N/A |
| Database | No | N/A |
| External service | No | N/A |

## Redaction/masking

Not applicable. No sensitive data is logged because no logging occurs.

## Retention

Not applicable. No logs are produced or retained.

## Sampling

Not applicable. No logging to sample.

## Performance considerations

No logging overhead. The application has zero logging impact on throughput.

## Error logging

Unhandled exceptions appear in the browser DevTools console with:
- Error message
- Stack trace
- Source file and line number

No application-level error logging, no custom error formatting, no context enrichment.

## Audit logging

None. No security-relevant events are logged separately.

## Configuration

No logging configuration exists. Cannot change log levels at runtime.

## Adding logging (if needed)

If logging were to be added, recommended approach:
1. Choose a lightweight browser-compatible logger (e.g., `loglevel`, `pino` for browser)
2. Wrap `console` methods with level filtering
3. Add structured fields: timestamp, level, component, correlation ID
4. Configure sink: console (development), remote endpoint (production)
5. Add redaction for any future sensitive data

## References

- [Architecture](../architecture.md)
- [Error handling](../error-handling.md)
- [Security](../security.md)
- [Browser state](../components/browser-state-and-localisation.md)