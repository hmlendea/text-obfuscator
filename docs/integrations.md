# Integrations

## External integrations

The application has **no external integrations** — no APIs, no webhooks, no third-party services, no databases, no message queues.

## CDN dependencies (runtime only)

| Dependency | Purpose | Integration type |
|------------|---------|------------------|
| jQuery 3.7.0 | DOM manipulation, event handling | `<script>` tag |
| Bootstrap 5.3.0 CSS | Styling, layout | `<link>` tag |
| Bootstrap 5.3.0 JS | Components (unused by app) | `<script>` tag |
| Font Awesome 6.4.0 | Icons | `<script>` tag |
| Google Fonts (Montserrat, Lato) | Typography | `<link>` tag |
| Start Bootstrap Freelancer CSS | Additional styling | `<link>` tag |
| Start Bootstrap Freelancer JS | Theme scripts (unused by app) | `<script>` tag |

## Integration patterns

### CDN load order (critical)

```html
<!-- 1. CSS first (render blocking) -->
<link href="bootstrap.min.css" ...>
<link href="freelancer.min.css" ...>
<link href="google-fonts.css" ...>
<link href="custom.css" ...>

<!-- 2. jQuery before app script -->
<script src="jquery-3.7.0.min.js"></script>

<!-- 3. Bootstrap JS (depends on jQuery) -->
<script src="bootstrap.bundle.min.js"></script>

<!-- 4. Font Awesome -->
<script src="all.js"></script>

<!-- 5. Freelancer theme JS -->
<script src="freelancer.min.js"></script>

<!-- 6. Application script (depends on jQuery) -->
<script src="js/text-obfuscator.js"></script>
```

### jQuery dependency

- Application code uses `$` globally
- Must load after jQuery, before `text-obfuscator.js`
- No module system; relies on global namespace

### No API contracts

No versioned APIs, no SLAs, no rate limits, no authentication.

## Integration failure modes

| Failure | Effect | Recovery |
|---------|--------|----------|
| jQuery CDN down | `$` undefined; `obfuscateText()` throws | Refresh; no programmatic recovery |
| Bootstrap CSS down | Unstyled page; functional | Refresh |
| Font Awesome down | Missing icons; functional | Refresh |
| Google Fonts down | Fallback fonts; functional | Refresh |
| Freelancer assets down | Minor styling differences; functional | Refresh |

## Version pinning

All CDN URLs use exact versions (e.g., `3.7.0`, `5.3.0`, `6.4.0`). No `@latest` or unpinned versions.

## References

- [Architecture](../architecture.md)
- [Dependencies](../dependencies.md)
- [Host and composition](../components/host-and-composition.md)
- [Build and deployment](../build-and-deployment.md)