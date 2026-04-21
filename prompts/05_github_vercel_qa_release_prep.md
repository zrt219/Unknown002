# ZRT UNKNOWN02 Codex Prompt

Copy the entire prompt below into Codex.

Important global instruction:

You must spawn the listed subagents first. Do not modify files until the main agent has collected and summarized their findings. Each subagent must have a bounded job and return findings using this format:

```text
Subagent:
Role:
Inputs reviewed:
Key findings:
Recommended implementation:
Risks and unknowns:
Files likely affected:
README updates:
CASE_STUDY updates:
Acceptance criteria:
```

The main agent should then synthesize the subagent findings, implement the work, run checks, update documentation, and report what changed.

Project identity:

ZRT UNKNOWN02 Technical Viewer is a realistic browser-based 3D engineering viewer for a nuclear-electric propulsion spacecraft concept. It must look like a serious NASA/DOE/JPL-style technical visualization, not a sci-fi game.


# Prompt 05 — GitHub, Vercel, QA, and Release Preparation

## Mission

Prepare the project for GitHub-based development, Vercel deployment, clean PRs, and reliable public preview builds.

This prompt is less about adding new scene features and more about making the project robust, documented, buildable, deployable, and reviewable.

## Required subagents

Spawn these subagents before coding:

1. **QA Agent**
   - Run or inspect build/test commands.
   - Identify broken imports, missing dependencies, console errors, and runtime hazards.
   - Create a practical QA checklist.

2. **Deployment Agent**
   - Verify Vercel compatibility.
   - Check Vite configuration.
   - Confirm build command and output directory.
   - Identify asset path problems.

3. **GitHub Agent**
   - Prepare branch/PR workflow.
   - Suggest PR title and description.
   - Prepare GitHub review instructions for Codex.

4. **Documentation Agent**
   - Expand README setup and deployment sections.
   - Add a troubleshooting section.
   - Add exact local and Vercel commands.

5. **Performance Agent**
   - Inspect animation loops, materials, labels, and UI for wasteful behavior.
   - Recommend low-risk optimizations.

6. **Realism Review Agent**
   - Perform a final realism check before public preview.
   - Ensure no prompt drift introduced sci-fi elements.

## Main implementation task

Harden the project for public preview.

## Required checks

Run or ensure these commands work:

```bash
npm install
npm run build
```

If there is no lint script, do not invent a complex lint system unless useful. But if a lint script exists, run it.

Fix:

- missing dependencies
- broken imports
- incorrect file casing
- unused critical imports
- runtime crashes
- Vite build errors
- asset path errors
- UI state bugs
- animation leaks
- obvious console errors

## Vercel readiness

Verify or add:

- `package.json` scripts:
  - `dev`
  - `build`
  - `preview`
- Vite output is `dist`
- no server-only APIs
- static assets are in `public/` or imported correctly
- no absolute local file paths
- no dependency requiring Node-only runtime in browser

Add README Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## GitHub workflow

Add or update documentation for:

- branch sequence
- PR review process
- using Codex review
- preview deployments
- release notes

Optional files:

- `.gitignore`
- `.github/pull_request_template.md`
- `.github/workflows/README.md` if not setting up CI
- `.github/workflows/build.yml` only if simple and useful

If adding GitHub Actions, keep it minimal:

```yaml
npm install
npm run build
```

Do not overcomplicate CI.

## README expansion required

The README should now be strong enough for a public repo.

Required sections:

1. Project Overview
2. Live Demo placeholder
3. Project Thesis
4. Technical Stack
5. Local Development
6. Deployment to Vercel
7. Repository Structure
8. Viewer Controls
9. Spacecraft Layout
10. Closed Brayton Cycle
11. Energy Flow Visualization
12. Engineering Realism Checklist
13. QA Checklist
14. Troubleshooting
15. Limitations
16. Future Work
17. Credits

## CASE_STUDY expansion required

Update CASE_STUDY.md:

- build process
- deployment workflow
- validation and review
- limitations
- future work

## QA checklist

Create a checklist in README or docs:

```text
- npm run build passes
- scene loads
- orbit controls work
- camera presets work
- labels toggle
- Brayton particles toggle
- heat arrows toggle
- power flow toggle
- plume toggle
- pause animation works
- speed slider works
- selected subsystem panel works
- mobile UI usable
- Vercel preview loads
```

## Realism checklist

Ensure the README includes:

```text
- compact reactor
- shield between reactor and bus
- long separation boom
- large radiators
- closed Brayton conversion
- small electric thrusters
- no sci-fi aircraft styling
- energy flow is visible and explainable
```

## Acceptance criteria

Verify:

- build passes
- package scripts are correct
- `.gitignore` exists
- README has Vercel deployment instructions
- CASE_STUDY is updated
- GitHub PR template exists or PR notes are provided
- viewer still works
- no major realism regression
- final response includes PR title and description

## Final response format from Codex

Report:

```text
Subagent summary:
QA results:
Deployment readiness:
GitHub workflow updates:
Files changed:
Commands run:
Build result:
README updates:
CASE_STUDY updates:
PR title:
PR description:
Known limitations:
Next prompt to run:
```
