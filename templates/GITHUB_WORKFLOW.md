# GitHub Workflow Template

## Branch pattern

```text
feature/01-viewer-architecture
feature/02-spacecraft-geometry
feature/03-brayton-energy-flow
feature/04-inspection-ui
feature/05-release-qa-vercel
feature/06-visual-realism-polish
feature/07-case-study-public-release
```

## Commit style

Use concise commits:

```text
feat: bootstrap 3d viewer architecture
feat: add realistic spacecraft geometry
feat: add brayton cycle energy overlay
feat: add inspection modes and labels
chore: prepare vercel deployment
polish: improve visual realism and performance
docs: expand case study and public readme
```

## PR template

```text
## Summary

## Subagent findings

## Files changed

## How to test

## Screenshots / preview

## Realism checklist

## Deployment notes
```

## Codex review

In GitHub PR comments, request:

```text
@codex review for build errors, missing dependencies, performance regressions, documentation gaps, and violations of the ZRT UNKNOWN02 realism rules in AGENTS.md.
```
