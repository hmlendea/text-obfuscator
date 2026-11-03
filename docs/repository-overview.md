# Repository overview

## Purpose

Text Obfuscator is a client-side JavaScript tool that runs in the browser to replace characters in text with random Unicode equivalents that are visually identical or approximately similar. It is designed for developers to obfuscate text for various purposes.

## Scope

The repository contains a single-page static web application with the following responsibilities:

- Render a text input interface in the browser
- Replace characters with random Unicode equivalents
- Optionally apply approximate character replacements
- Optionally insert zero-width characters at random positions
- Copy obfuscated output to the clipboard

## Out of scope

- Server-side processing
- Data persistence or storage
- User accounts or authentication
- Network communication beyond CDN asset loading
- Text deobfuscation

## Entry points

| Entry point | Location | Description |
|-------------|----------|-------------|
| HTML page | [index.html](../index.html) | Composition root; defines DOM structure and loads all assets |
| JavaScript module | [js/text-obfuscator.js](../js/text-obfuscator.js) | Obfuscation logic, replacement maps, and clipboard functions |
| Custom CSS | [css/custom.css](../css/custom.css) | Interface styling customisations |

## Deployment

The application is deployed as a static website on GitHub Pages at https://hmlendea.github.io/text-obfuscator. Updates are deployed by pushing changes to the `master` branch.

## Actors

- **End user**: Provides input text and receives obfuscated output through the web interface.

## External systems

- **GitHub Pages**: Hosts the static web application.
- **Web browser**: Executes the JavaScript code and renders the HTML/CSS interface.
- **CDN providers**: Serve jQuery, Bootstrap, Font Awesome, Google Fonts, and the Start Bootstrap Freelancer template.

## Data stores

None. No data is persisted; all processing is transient.

## Trust boundaries

The entire application operates within a single trust boundary (the browser). No data is transmitted to external servers.

## References

- [Architecture](./architecture.md)
- [Repository structure](./repository-structure.md)
- [Quick start](./quick-start.md)