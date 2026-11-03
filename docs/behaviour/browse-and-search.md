# Browse and search

## User browsing behaviour

The application is a single-page tool with no navigation, routing, or multiple views. "Browsing" consists of:

1. **Landing** — User opens the page (GitHub Pages URL or local file)
2. **Reading** — User reads the hero section, feature list, and usage instructions
3. **Interacting** — User enters text, toggles options, clicks buttons

## Search

**No search functionality exists**. The application does not:
- Search within input text
- Search replacement maps
- Provide find/replace
- Index or query any data

## Page structure for browsing

```html
<!-- Hero section -->
<header class="masthead">...</header>

<!-- Features section -->
<section id="features">...</section>

<!-- Tool section -->
<section id="tool">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <!-- Input/output form -->
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>...</footer>
```

## Scroll behaviour

- Single page, vertical scroll only
- No anchor links or smooth scroll
- No sticky elements except Bootstrap navbar (if present)

## Responsive browsing

| Breakpoint | Behaviour |
|------------|-----------|
| `< 576px` (xs) | Stacked form elements, full-width buttons |
| `≥ 576px` (sm) | Side-by-side checkboxes |
| `≥ 768px` (md) | Centered container, max-width |
| `≥ 992px` (lg) | Larger padding, hero text scaling |
| `≥ 1200px` (xl) | Max container width |

## Accessibility browsing

- Semantic HTML5 elements (`header`, `section`, `footer`, `main` implied)
- Labelled form controls (`for`/`id` matching)
- Button elements with text content
- Colour contrast per Bootstrap defaults
- No ARIA attributes (relies on native semantics)

## References

- [Presentation components](../components/presentation.md)
- [Inspect, edit, delete](./inspect-edit-delete.md)
- [Architecture](../architecture.md)