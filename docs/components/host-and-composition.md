# Host and composition

## Composition root

`index.html` is the single composition root. It loads all assets and defines the complete DOM structure. No dynamic composition or module loading occurs.

## Load order

```html
<head>
  <!-- Meta tags -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Text Obfuscator">
  <meta name="author" content="Mlendea Horațiu">
  <meta name="keywords" content="Text,Obfuscator">

  <!-- Favicon -->
  <link rel="icon" href="https://iconarchive.com/download/i106193/papirus-team/papirus-apps/preferences-desktop-user-password.ico">
  <title>Text Obfuscator</title>

  <!-- jQuery (required by text-obfuscator.js) -->
  <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.12.1/jquery.easing.min.js"></script>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Start Bootstrap Freelancer template CSS -->
  <link href="https://startbootstrap.github.io/startbootstrap-freelancer/css/styles.css" rel="stylesheet" />

  <!-- Custom CSS -->
  <link href="css/custom.css" rel="stylesheet">

  <!-- Font Awesome -->
  <script src="https://use.fontawesome.com/releases/v6.4.0/js/all.js" crossorigin="anonymous"></script>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
</head>

<body class="body">
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="https://github.com/hmlendea/text-obfuscator">
        <i class="fab fa-fw fa-github"></i>
        Text Obfuscator
      </a>
    </div>
  </nav>

  <!-- Obfuscator section -->
  <section class="page-section" id="obfuscator">
    <!-- ... DOM structure ... -->
  </section>

  <!-- Application scripts (loaded after DOM) -->
  <script src="https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js"></script>
  <script src="js/text-obfuscator.js"></script>
</body>
```

## Initialisation sequence

1. Browser parses HTML and constructs DOM
2. CSS loads and applies styles (blocking)
3. jQuery loads and executes (blocking)
4. jQuery Easing loads (blocking)
5. Bootstrap CSS loads (blocking)
6. Bootstrap JS loads and executes (blocking)
7. Start Bootstrap CSS loads (blocking)
8. Custom CSS loads (blocking)
9. Font Awesome loads and executes (blocking)
10. Google Fonts load (blocking)
11. DOMContentReady fires
12. Start Bootstrap scripts.js loads and executes
13. `js/text-obfuscator.js` loads and executes — defines global functions and replacement maps
14. Page is interactive

## Global scope pollution

`js/text-obfuscator.js` defines the following on the global scope:
- `identicalGroupReplacements` (object)
- `approximateGroupReplacements` (object)
- `identicalReplacements` (object)
- `approximateReplacements` (object)
- `obfuscateText()` (function)
- `copyText()` (function)
- `fallbackCopy()` (function)

No IIFE or module pattern is used. All symbols are globally accessible.

## Browser hosting requirements

- Modern browser with ES5+ support
- `Math.random()` availability
- `navigator.clipboard` API (optional; fallback exists)
- `document.execCommand("copy")` (legacy fallback)
- DOM Level 2+ API

## Asset integrity

No Subresource Integrity (SRI) hashes are used on CDN links. Asset integrity relies on CDN trust.

## Offline capability

After initial load, the application works offline because:
- All logic is in `js/text-obfuscator.js` (cached)
- Replacement maps are in-memory JavaScript objects
- No network requests are made during obfuscation
- Clipboard API works offline

However, CDN assets (Bootstrap, Font Awesome, Google Fonts, jQuery) must be cached for full offline styling.

## References

- [Architecture](./architecture.md)
- [Presentation](./presentation.md)
- [Application services](./application-services.md)
- [Dependencies](../dependencies.md)
- [Flows/startup-and-rendering.md](../flows/startup-and-rendering.md)