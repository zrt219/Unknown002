# How to Use This Prompt Pack

This is meant to be used as a staged Codex workflow. Do not paste all seven prompts at once. Run them in order, review the result, then continue.

## 0. Create the repo

Create an empty GitHub repo:

```text
zrt-unknown02-technical-viewer
```

Recommended initial files:

```text
README.md
AGENTS.md
```

You can paste the contents of `codex/AGENTS.md` into the root `AGENTS.md` before starting.

## 1. Run Prompt 01

Use:

```text
prompts/01_repo_bootstrap_architecture.md
```

Goal:

- React + Vite project exists
- React Three Fiber scene renders
- Orbit controls work
- Placeholder spacecraft layout exists
- README starts forming
- Build works

Local check:

```bash
npm install
npm run dev
npm run build
```

## 2. Run Prompt 02

Use:

```text
prompts/02_realistic_spacecraft_geometry.md
```

Goal:

- Spacecraft geometry becomes realistic
- Reactor, shield, power unit, radiators, boom, bus, tanks, payload, and thrusters all exist
- Radiators dominate visually
- Reactor is compact and separated
- No sci-fi aircraft styling

## 3. Run Prompt 03

Use:

```text
prompts/03_brayton_cycle_energy_overlay.md
```

Goal:

- Brayton cycle overlay exists
- Particles flow through compressor, heat addition, turbine, heat rejection
- Heat rejection arrows go to radiators
- Electric power flows to bus and thrusters
- UI toggles control overlays and animation

## 4. Run Prompt 04

Use:

```text
prompts/04_inspection_modes_engineering_ui.md
```

Goal:

- Camera presets work
- Inspection panel works
- Labels and leader lines are readable
- Engineering notes exist for every subsystem
- Viewer becomes educational, not just decorative

## 5. Run Prompt 05

Use:

```text
prompts/05_github_vercel_qa_release_prep.md
```

Goal:

- Vercel deployment ready
- README has setup and deployment steps
- QA checklist passes
- GitHub PR notes are clean
- Build is clean

## 6. Run Prompt 06

Use:

```text
prompts/06_visual_polish_realism_pass.md
```

Goal:

- Visual fidelity improves
- Radiators, truss, cable runs, equipment panels, and materials look more credible
- Performance is optimized
- Lighting, screenshot composition, and accessibility improve
- Scene still stays realistic

## 7. Run Prompt 07

Use:

```text
prompts/07_case_study_readme_public_release.md
```

Goal:

- README becomes a public-quality technical document
- Case study becomes expansive
- Project can be published as a portfolio/research/concept page
- Final PR description and release note are generated

## How to force Codex to use subagents

Every prompt contains explicit subagent instructions. If Codex skips them, respond:

```text
You skipped the subagent step. Before changing code, spawn the listed subagents and return their findings in the required format. Then continue implementation.
```

## Recommended PR style

For each prompt:

1. Start a new branch.
2. Run the prompt.
3. Review diffs.
4. Ask Codex for build/test fixes if needed.
5. Merge after the preview works.
6. Move to the next branch.

## Vercel notes

Use a standard Vite setup:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

After Prompt 05, the README should include these steps and any repo-specific settings.

## What to attach to Codex

When using Codex with image support, attach the reference images in `reference_images/`:

- Notional spacecraft concept image
- Brayton cycle diagram
- NEP subsystem/block diagram

Tell Codex to use them as visual references only, not as exact copies.
