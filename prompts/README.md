# ZRT UNKNOWN02 — NASA-Style Polish Prompt Pack (Prompts 8–12)

This pack contains the next five Codex prompts for polishing the current browser-based
3D technical viewer into a more rigorous, review-friendly, engineering presentation.

These prompts are written for a project that already has:
- a working React / Vite / React Three Fiber viewer
- inspection modes
- subsystem selection
- camera presets
- Brayton overlay / energy flow overlays
- a left-side technical UI
- procedural spacecraft geometry representing:
  reactor → shield → Brayton unit → radiators → boom → bus/tanks → thrusters

## Goal
Move from "credible prototype viewer" to NASA-style internal review quality:
- stronger subsystem realism
- better visual hierarchy
- less clutter
- more believable interfaces and detail density
- cleaner camera and presentation states
- screenshot and case-study readiness
- final QA / release packaging

## Sequence
1. Prompt 08 — Engineering realism pass
2. Prompt 09 — UI, information hierarchy, and overlay cleanup
3. Prompt 10 — Spacecraft detail density, interfaces, and forward-section realism
4. Prompt 11 — Presentation modes, case-study capture, and review assets
5. Prompt 12 — Final NASA-style QA, audit, and release preparation

## Important framing
Use "NASA-style", "engineering-review ready", or "internal-review quality".
Do not claim NASA endorsement, partnership, or official affiliation.

## Required Codex behavior
Every prompt explicitly instructs Codex to:
- spawn subagents first
- have the main agent coordinate implementation
- return subagent findings before major code changes
- preserve buildability throughout
