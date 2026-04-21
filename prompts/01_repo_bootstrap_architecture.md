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


# Prompt 01 — Repository Bootstrap, Architecture, and Viewer Skeleton

## Mission

Create the initial project foundation for **ZRT UNKNOWN02 Technical Viewer**.

This is the first build stage. The goal is not to make the final spacecraft yet. The goal is to establish a clean, maintainable, Vercel-ready browser 3D viewer architecture that can survive six later expansion prompts.

## Required subagents

Spawn these subagents before coding:

1. **Architecture Agent**
   - Plan the project structure.
   - Decide component boundaries.
   - Identify where scene state, UI state, and spacecraft configuration should live.
   - Recommend JavaScript vs TypeScript. If TypeScript creates too much friction, keep JavaScript but use clear data structures.

2. **Three.js Foundation Agent**
   - Plan the React Three Fiber scene foundation.
   - Choose camera position, lighting, star background, OrbitControls, and basic geometry strategy.
   - Recommend how to keep future geometry modular.

3. **Deployment Agent**
   - Verify a Vite setup that will deploy cleanly to Vercel.
   - Specify build command, output directory, and dependencies.
   - Identify early deployment pitfalls.

4. **Documentation Agent**
   - Create the first README structure.
   - Add initial sections that later prompts will expand.
   - Add a prompt-stage roadmap to the README.

5. **Realism Guardrail Agent**
   - Define the non-negotiable realism rules.
   - Identify visual features to avoid.
   - Create a checklist that later prompts can reuse.

## Main implementation task

Create a new Vite + React project configured for a browser-based 3D viewer using React Three Fiber.

The project should be able to run locally and build without errors.

Use:

- React
- Vite
- React Three Fiber
- Three.js
- Drei
- Optional: Leva only if it does not clutter the UI
- CSS modules or plain CSS, whichever is simple and maintainable

## Required initial file structure

Create or update a structure similar to:

```text
.
├── README.md
├── CASE_STUDY.md
├── AGENTS.md
├── package.json
├── vite.config.js or vite.config.ts
├── index.html
├── public/
│   └── favicon or placeholder assets if needed
└── src/
    ├── main.jsx or main.tsx
    ├── App.jsx or App.tsx
    ├── styles/
    │   └── global.css
    ├── data/
    │   └── spacecraftConfig.js
    ├── components/
    │   ├── SceneRoot.jsx
    │   ├── Spacecraft.jsx
    │   ├── ReactorSubsystem.jsx
    │   ├── BraytonPowerUnit.jsx
    │   ├── Radiators.jsx
    │   ├── SeparationBoom.jsx
    │   ├── SpacecraftBus.jsx
    │   ├── ElectricPropulsion.jsx
    │   ├── Labels.jsx
    │   ├── UIControls.jsx
    │   └── CameraPresets.jsx
    └── utils/
        ├── constants.js
        └── geometry.js
```

If a different structure is better, explain why and keep it clean.

## Initial scene requirements

Create a full-screen technical viewer:

- dark space-like background
- subtle star field or procedural background
- orbit controls
- perspective camera
- basic lighting
- simple placeholder spacecraft axis from left to right
- labels toggle placeholder
- UI panel titled `ZRT UNKNOWN02 Technical Viewer`
- visible small label: `Designed by ZRT UNKNOWN02`
- placeholder camera preset buttons
- placeholder toggles for labels, Brayton overlay, heat arrows, power flow, plume, shield cone, grid, and pause animation

The spacecraft can be primitive in this first prompt, but it must already follow the correct order:

```text
[Reactor] → [Shield] → [Power Conversion] → [Radiators] → [Boom] → [Bus] → [Payload/Tanks] → [Electric Thrusters]
```

## Initial placeholder geometry

Use simple primitives:

- reactor: small cylinder at left
- shield: cone or disk stack after reactor
- Brayton/power unit: compact box cluster
- radiators: two large blue panels
- boom: simple line/truss placeholder
- bus: gray box or cylinder
- tanks: sphere/cylinder
- thrusters: small cylinders with faint plume placeholder

Do not overbuild this in Prompt 01. Later prompts handle detailed geometry.

## UI requirements

Create a readable overlay UI with:

- project title
- short concept sentence
- toggles:
  - Labels
  - Brayton Overlay
  - Heat Rejection Arrows
  - Electric Power Flow
  - Radiation Shield Cone
  - Thruster Plume
  - Grid / Axis Helper
  - Pause Animation
- speed slider placeholder
- camera buttons:
  - Overview
  - Reactor + Shield
  - Brayton Power Unit
  - Radiators
  - Boom
  - Bus + Payload
  - Electric Propulsion
  - Energy Flow View

For Prompt 01, the toggles can wire to simple state even if some overlays are placeholders.

## README updates required

Update README with these sections:

1. Project Overview
2. Project Thesis
3. Tech Stack
4. Local Development
5. Repository Structure
6. Seven-Prompt Build Roadmap
7. Engineering Realism Checklist
8. Deployment Placeholder
9. Credits

Do not write a tiny README. Create a strong first README that later prompts can expand.

## CASE_STUDY updates required

Create or update CASE_STUDY.md with:

- project thesis
- why a browser-based viewer
- initial spacecraft architecture
- what the seven prompts will add
- limitations

## AGENTS.md required

Create AGENTS.md with persistent repo instructions:

- realistic nuclear-electric viewer
- no sci-fi styling
- subagent-first workflow
- build command
- documentation rule
- no flight qualification claims

## Acceptance criteria

The main agent must verify:

- `npm install` works or dependency list is correct
- `npm run dev` should work
- `npm run build` passes
- the scene renders
- UI panel appears
- OrbitControls work
- no missing imports
- README exists and is useful
- CASE_STUDY exists
- AGENTS.md exists
- no fantasy spacecraft elements were added

## Final response format from Codex

At the end, report:

```text
Subagent summary:
Files created:
Files changed:
Commands run:
Build result:
README sections updated:
CASE_STUDY sections updated:
Known limitations:
Next prompt to run:
```
