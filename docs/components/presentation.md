# Presentation component

## Responsibility

Renders the user interface, handles user input events, and displays obfuscation results.

## Location

- `index.html` — DOM structure and asset loading
- `css/custom.css` — Custom styling
- CDN assets: Bootstrap, Font Awesome, Google Fonts, Start Bootstrap Freelancer template

## DOM structure

```html
<!-- Navigation -->
<nav id="mainNav" class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
  <a class="navbar-brand js-scroll-trigger" href="https://github.com/hmlendea/text-obfuscator">
    <i class="fab fa-fw fa-github"></i> Text Obfuscator
  </a>
</nav>

<!-- Obfuscator section -->
<section class="page-section" id="obfuscator">
  <div class="divider-custom"></div>
  <div class="container">
    <!-- Input row -->
    <div class="row">
      <div class="col-lg-3 ml-auto">
        <p><i class="fas fa-fw fa-indent"></i> Input:</p>
      </div>
      <div class="col-lg-9 mr-auto">
        <input class="form-control" id="input" type="text" placeholder="Hello world!" />
      </div>
    </div>

    <!-- Output row -->
    <div class="row">
      <div class="col-lg-3 ml-auto">
        <p><i class="fas fa-fw fa-outdent"></i> Output:</p>
      </div>
      <div class="col-lg-9 mr-auto">
        <input class="form-control" id="output" type="text" placeholder="Неllo World!" readonly />
      </div>
    </div>

    <!-- Approximate characters checkbox -->
    <div class="row">
      <div class="col-lg-3 ml-auto"></div>
      <div class="col-lg-9 mr-auto">
        <div class="form-check form-switch">
          <input class="form-check-input" id="approximateCharactersCheckbox" name="approximateCharactersCheckbox" type="checkbox" />
          <label class="form-check-label" for="approximateCharactersCheckbox">Approximate characters</label>
        </div>
      </div>
    </div>

    <!-- Zero-width spaces checkbox -->
    <div class="row">
      <div class="col-lg-3 ml-auto"></div>
      <div class="col-lg-9 mr-auto">
        <div class="form-check form-switch">
          <input class="form-check-input" id="zeroWidthSpacesCheckbox" name="zeroWidthSpacesCheckbox" type="checkbox" checked />
          <label class="form-check-label" for="zeroWidthSpacesCheckbox">Add zero-width spaces</label>
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="row text-center">
      <div class="col-lg-12 ml-auto mr-auto">
        <span id="obfuscate" class="btn btn-lg btn-outline-dark" onclick="obfuscateText()">
          <i class="fas fa-fw fa-cogs"></i> Obfuscate
        </span>
        <span id="copy" class="btn btn-lg btn-outline-dark" onclick="copyText()">
          <i class="fas fa-fw fa-copy"></i> Copy
        </span>
      </div>
    </div>
  </div>
</section>
```

## Key DOM elements

| Element ID | Type | Purpose |
|------------|------|---------|
| `input` | `<input type="text">` | User text input |
| `output` | `<input type="text" readonly>` | Obfuscated output display |
| `approximateCharactersCheckbox` | `<input type="checkbox">` | Enable approximate replacements |
| `zeroWidthSpacesCheckbox` | `<input type="checkbox" checked>` | Enable zero-width space insertion |
| `obfuscate` | `<span class="btn">` | Triggers `obfuscateText()` |
| `copy` | `<span class="btn">` | Triggers `copyText()` |

## Styling

### css/custom.css

```css
#obfuscator > div.container > div > div > p {
    font-size: x-large;
}

.icoGitHub:hover { color: #211F1F; }
```

### CDN stylesheets

- Bootstrap 5.3.0 CSS: layout, forms, buttons, utilities
- Start Bootstrap Freelancer template CSS: additional component styling
- Font Awesome 6.4.0: icons
- Google Fonts: Montserrat and Lato font families

## Event bindings

Inline `onclick` handlers in HTML:
- `obfuscate` → `obfuscateText()`
- `copy` → `copyText()`

No jQuery event delegation or dynamic binding is used.

## Dependencies

- `js/text-obfuscator.js` — Provides `obfuscateText()` and `copyText()` functions
- jQuery — Used by `obfuscateText()` for DOM value access (`$("#input").val()`, `$("#output").val()`)
- Bootstrap — Provides `form-control`, `form-switch`, `btn`, `navbar-*` classes
- Font Awesome — Provides `fa-*` icon classes

## Failure modes

- If CDN stylesheets fail to load, layout degrades but functionality remains
- If Font Awesome fails, icons display as empty space
- If Google Fonts fail, fallback fonts are used
- If `js/text-obfuscator.js` fails to load, buttons do nothing

## References

- [Architecture](./architecture.md)
- [Host and composition](./host-and-composition.md)
- [Application services](./application-services.md)
- [Flows/startup-and-rendering.md](../flows/startup-and-rendering.md)