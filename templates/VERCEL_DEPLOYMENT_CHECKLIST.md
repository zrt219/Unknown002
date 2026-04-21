# Vercel Deployment Checklist

## Expected framework

- Vite
- Output directory: `dist`
- Build command: `npm run build`
- Install command: `npm install`

## Pre-deploy checks

```bash
npm install
npm run build
```

## Required repo state

- `package.json` exists
- `vite.config.*` exists
- `src/` exists
- no broken imports
- no missing dependencies
- no console errors from runtime-critical code
- README has Vercel steps

## Vercel steps

1. Push the repo to GitHub.
2. Open Vercel dashboard.
3. Import the GitHub repository.
4. Choose Vite preset.
5. Confirm build command: `npm run build`.
6. Confirm output directory: `dist`.
7. Deploy.
8. Copy deployment URL into README.
9. Use preview deployments for each PR.

## Post-deploy checks

- Viewer loads
- Camera controls work
- UI does not block canvas
- labels can be toggled
- animation can be paused
- mobile layout is usable
- no obvious deployment-only asset path errors
