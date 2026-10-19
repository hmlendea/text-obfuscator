[![Donate](https://img.shields.io/badge/-%E2%99%A5%20Donate-%23ff69b4)](https://hmlendea.go.ro/funding)
[![Latest GitHub release](https://img.shields.io/github/v/release/hmlendea/text-obfuscator)](https://github.com/hmlendea/text-obfuscator/releases/latest)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://hmlendea.github.io/text-obfuscator)
[![License](https://img.shields.io/github/license/hmlendea/text-obfuscator)](https://github.com/hmlendea/text-obfuscator/blob/master/LICENSE)

# Text Obfuscator

Tool to replace characters in a given text with random equivalents that are visually identical.

Use it here: https://hmlendea.github.io/text-obfuscator

## 📑 Table of Contents

- [Capabilities](#capabilities)
- [Use Cases](#use-cases)
- [Usage](#usage)
- [System Requirements](#system-requirements)
- [Privacy and Data](#privacy-and-data)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Security](#security)
- [Project Engagement](#project-engagement)
- [License](#license)

## ✨ Capabilities

- Replace characters in text with visually identical Unicode equivalents.
- Optionally approximate characters for additional obfuscation.
- Copy the obfuscated result to the clipboard with a single click.

## 🎯 Use Cases

- **Privacy:** Obfuscate sensitive text before sharing it in places where it might be read by others.
- **Testing:** Generate visually similar text for UI layout tests or placeholder content.
- **Obfuscation:** Make text harder to read or interpret while preserving its general appearance.

## 🚀 Usage

Open the application at https://hmlendea.github.io/text-obfuscator.

1. Type text into the input field.
2. Optionally enable the "Approximate characters" checkbox for additional replacements.
3. Click **Obfuscate** to generate the obfuscated output.
4. Click **Copy** to copy the result to the clipboard.

## 🖥️ System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Web browser | Any modern web browser | Latest version of your preferred browser |
| Internet access | Not required after page load | N/A |

## 🛡️ Privacy and Data

The Text Obfuscator is a client-side tool that processes text entirely in the user's browser. No personal data is collected, stored, or transmitted by the application.

For the detailed description of how the application handles privacy and personal data, see [PRIVACY.md](./PRIVACY.md).

| Data | Purpose | Storage | Retention | Optional |
|------|---------|---------|-----------|----------|
| None | None | None | N/A | N/A |

## 🗂️ Project Structure

The repository contains a single-page static web application.

| Directory | Purpose |
|-----------|---------|
| `css/` | Custom CSS styling for the obfuscator interface |
| `js/` | Obfuscation logic and character replacement maps |

## 🏗️ Architecture

The Text Obfuscator is a client-side static web application that runs in the browser to replace characters in text with random Unicode equivalents.

See the [architecture documentation](./ARCHITECTURE.md) for the system context, principal components, runtime flows, ownership boundaries, dependencies, constraints, and extension points.

## 🚢 Deployment

The application is deployed as a static website on GitHub Pages. Updates are deployed by pushing changes to the `master` branch.

## 📚 Documentation

| Resource | Description |
|----------|-------------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System design, components, and implementation approach |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Guidelines for reporting issues, suggesting enhancements, and submitting changes |
| [PRIVACY.md](./PRIVACY.md) | Data handling and privacy practices |
| [SECURITY.md](./SECURITY.md) | Security vulnerability reporting policy |
| [Live application](https://hmlendea.github.io/text-obfuscator) | Interactive obfuscation tool |

## 🤝 Contributing

You are welcome to submit any suggestion, feedback, or modification to this project.

When doing so, please:
- Maintain cross-platform compatibility
- Preserve the existing public contract unless a breaking change is intentional
- Submit focused pull requests that conform to the existing code style
- Maintain your branch synchronised with `master`
- Revise the documentation when functionality changes
- Raise a new [issue](https://github.com/hmlendea/text-obfuscator/issues) for problems or suggestions

See the [contributing guidelines](./CONTRIBUTING.md) for details on how to report issues, suggest enhancements, and submit changes.

## 📜 Code of Conduct

See the [Code of Conduct](./CODE_OF_CONDUCT.md) for the standards of conduct expected in all project spaces.

## 🔒 Security

The Text Obfuscator is a client-side tool that processes text entirely within the user's browser. No data is transmitted to external servers, which minimises the attack surface.

For information on reporting security vulnerabilities, see [SECURITY.md](./SECURITY.md).

## 💝 Project Engagement

Discovered a problem or have a suggestion? [Open an issue](https://github.com/hmlendea/text-obfuscator/issues)!

If you find this project useful, consider [funding it](https://hmlendea.go.ro/funding) or starring ⭐️ it on GitHub!

## 📄 License

This project is being distributed under the `GNU General Public License v3`.
See [LICENSE](./LICENSE) for additional information.
