# Integration models

## External CDN dependencies

The application loads the following assets from CDNs at runtime:

| Asset | CDN URL | Purpose | Version pinning |
|-------|---------|---------|-----------------|
| jQuery | `https://code.jquery.com/jquery-3.7.0.slim.min.js` | DOM manipulation | Exact version (3.7.0) |
| jQuery Easing | `https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.12.1/jquery.easing.min.js` | Animation easing | Exact version (1.12.1) |
| Bootstrap CSS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css` | Layout and components | Exact version (5.3.0) |
| Bootstrap JS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js` | Interactive components | Exact version (5.3.0) |
| Start Bootstrap CSS | `https://startbootstrap.github.io/startbootstrap-freelancer/css/styles.css` | Template styling | Unpinned (latest) |
| Start Bootstrap JS | `https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js` | Template scripts | Unpinned (latest) |
| Font Awesome | `https://use.fontawesome.com/releases/v6.4.0/js/all.js` | Icons | Exact version (6.4.0) |
| Google Fonts (Montserrat) | `https://fonts.googleapis.com/css?family=Montserrat:400,700` | Typography | Unpinned (latest) |
| Google Fonts (Lato) | `https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic` | Typography | Unpinned (latest) |
| Favicon | `https://iconarchive.com/download/i106193/papirus-team/papirus-apps/preferences-desktop-user-password.ico` | Browser tab icon | Unpinned |

## Integration contracts

### jQuery

**Expected global**: `$` (jQuery object)

**Used methods**:
- `$(selector).val()` — Get/set input/output values
- `$(selector).is(':checked')` — Check checkbox state
- `Object.entries()` iteration (native, not jQuery)

**Failure mode**: If jQuery fails to load, `$` is undefined and `obfuscateText()` throws `ReferenceError`.

### Bootstrap

**Expected**: CSS classes applied to DOM elements

**Used classes**:
- `navbar`, `navbar-expand-lg`, `bg-secondary`, `text-uppercase`, `fixed-top`
- `navbar-brand`, `js-scroll-trigger`
- `page-section`, `divider-custom`, `container`, `row`, `col-lg-*`, `ml-auto`, `mr-auto`
- `form-control`, `form-check`, `form-switch`, `form-check-input`, `form-check-label`
- `btn`, `btn-lg`, `btn-outline-dark`
- `fab`, `fa-fw`, `fa-github`, `fa-indent`, `fa-outdent`, `fa-cogs`, `fa-copy`

**Failure mode**: If Bootstrap CSS fails, layout breaks but JavaScript functions. If Bootstrap JS fails, interactive components (dropdowns, modals) don't work — not used in this application.

### Font Awesome

**Expected**: Icon font loaded, `fa-*` classes render icons

**Used icons**:
- `fa-github` (navigation)
- `fa-indent` (input label)
- `fa-outdent` (output label)
- `fa-cogs` (obfuscate button)
- `fa-copy` (copy button)

**Failure mode**: Icons render as empty space or fallback glyph. No functional impact.

### Google Fonts

**Expected**: Montserrat and Lato font families available

**Failure mode**: Browser falls back to system fonts. No functional impact.

### Start Bootstrap Freelancer template

**Expected**: Additional styling and scripts

**Used**: `styles.css` for component styling, `scripts.js` for template behaviours (smooth scroll, etc.)

**Failure mode**: Minor styling differences. `scripts.js` provides smooth scroll for `js-scroll-trigger` links.

## Network behaviour

- All CDN requests are made during page load (blocking for CSS, async for JS with `crossorigin="anonymous"` on Font Awesome)
- No runtime network requests after page load
- No API calls, no analytics, no telemetry
- No CORS issues expected (all CDNs serve with appropriate headers)

## Offline behaviour

After initial load with cached assets:
- Application functions fully offline
- All logic is local
- Clipboard API works offline
- Styling may degrade if CDN assets not cached

## Security considerations

- No Subresource Integrity (SRI) hashes on CDN links
- CDN providers can serve modified assets
- Font Awesome uses `crossorigin="anonymous"`
- Google Fonts and other CDNs load over HTTPS
- No Content Security Policy (CSP) header (static GitHub Pages)

## Version management

- jQuery, jQuery Easing, Bootstrap, Font Awesome: exact versions pinned
- Start Bootstrap template, Google Fonts, Favicon: unpinned (latest)
- Updates require manual HTML editing and testing

## References

- [Architecture](./architecture.md)
- [Host and composition](./host-and-composition.md)
- [Dependencies](../dependencies.md)
- [Security](../security.md)