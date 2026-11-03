# Build and deployment

## Build pipeline

**None**. The project has no build step, no bundler, no transpiler, no minifier, no package manager, and no build scripts.

## Source to deployment

```
Source files (index.html, css/custom.css, js/text-obfuscator.js)
    │
    ▼
Git push to master branch
    │
    ▼
GitHub Pages builds and deploys automatically
    │
    ▼
Live at https://hmlendea.github.io/text-obfuscator/
```

## Deployment environments

| Environment | URL | Trigger |
|-------------|-----|---------|
| Production | https://hmlendea.github.io/text-obfuscator/ | Push to `master` |
| Local development | `file:///path/index.html` or `http://localhost:8000` | Manual |

## Deployment process

1. Make changes to source files
2. Test locally by opening `index.html` in browser
3. Commit changes: `git add . && git commit -m "description"`
4. Push to master: `git push origin master`
5. GitHub Pages automatically deploys (typically < 1 minute)

## Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin master

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin master
```

## GitHub Pages configuration

- Source: `master` branch, `/` (root) folder
- Custom domain: None (uses `hmlendea.github.io/text-obfuscator`)
- HTTPS: Enforced by GitHub Pages
- Build: None (static files served directly)

## Asset optimisation

No optimisation performed:
- No minification of CSS/JS
- No image optimisation (no images)
- No compression beyond GitHub Pages gzip
- No cache headers beyond GitHub Pages defaults

## Environment variables

None. No environment-specific configuration.

## Secrets management

None. No secrets, API keys, or tokens in the repository.

## Monitoring

None. No uptime monitoring, error tracking, or analytics.

## References

- [Architecture](../architecture.md)
- [Repository overview](../repository-overview.md)
- [Dependencies](../dependencies.md)
- [Host and composition](../components/host-and-composition.md)