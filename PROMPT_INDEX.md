# Prompt Index and README Placement Plan

This file maps each prompt to a build stage, branch, deliverables, and README destination.

| # | Prompt file | Branch | Main deliverable | README destination |
|---|---|---|---|---|
| 01 | `prompts/01_repo_bootstrap_architecture.md` | `feature/01-viewer-architecture` | React/Vite/R3F skeleton | Overview, Tech Stack, Repo Structure |
| 02 | `prompts/02_realistic_spacecraft_geometry.md` | `feature/02-spacecraft-geometry` | Realistic procedural spacecraft | Spacecraft Layout, Realism Checklist |
| 03 | `prompts/03_brayton_cycle_energy_overlay.md` | `feature/03-brayton-energy-flow` | Brayton loop and energy animation | Closed Brayton Cycle, Color Legend |
| 04 | `prompts/04_inspection_modes_engineering_ui.md` | `feature/04-inspection-ui` | Camera views, labels, inspection UI | Interactive Viewer Guide, Subsystem Notes |
| 05 | `prompts/05_github_vercel_qa_release_prep.md` | `feature/05-release-qa-vercel` | Build/deploy/QA readiness | Deployment, GitHub Workflow, QA Checklist |
| 06 | `prompts/06_visual_polish_realism_pass.md` | `feature/06-visual-realism-polish` | Visual and performance polish | Visual Polish, Performance, Accessibility |
| 07 | `prompts/07_case_study_readme_public_release.md` | `feature/07-case-study-public-release` | Long README and case study | Case Study, Public Narrative, Future Work |

## Main rule

Every prompt must instruct Codex:

```text
Spawn the listed subagents first. Do not modify files until the main agent has collected and summarized subagent findings.
```

## Subagent return format

Each subagent should return:

```text
Subagent name:
Scope:
Findings:
Risks:
Recommended implementation:
Acceptance criteria:
README / case study updates:
```

## Final public package

By the final prompt, the repo should contain:

```text
README.md
CASE_STUDY.md
AGENTS.md
package.json
vite.config.*
src/
public/
docs/
```

The README should be written for visitors. The case study should be written for readers who care about the engineering concept.
