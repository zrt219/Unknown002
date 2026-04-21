# AGENTS.md — ZRT UNKNOWN02 Technical Viewer

## Project identity

This repository builds **ZRT UNKNOWN02 Technical Viewer**, a realistic browser-based 3D technical viewer for a nuclear-electric propulsion spacecraft concept.

The project should look like a NASA/DOE/JPL engineering concept viewer, not a sci-fi game.

## Core technical stack

- React
- Vite
- React Three Fiber
- Three.js
- Drei
- Optional TypeScript if already adopted
- Vercel deployment

## Non-negotiable realism rules

- Do not add cockpit, windows, wings, fins, weapons, or fantasy engine elements.
- Do not make electric thruster plumes look like chemical rocket flames.
- Keep reactor compact.
- Put shield between reactor and spacecraft bus.
- Use a long truss/separation boom.
- Make radiators large and visually dominant.
- Show energy flow honestly: reactor heat, Brayton conversion, electrical power, waste heat, electric propulsion.
- Labels should explain engineering logic, not marketing hype.

## Subagent policy

For complex tasks, spawn subagents first. Use subagents for:

- architecture review
- Three.js geometry planning
- thermal/radiator realism
- Brayton cycle visualization
- UI/UX review
- accessibility
- performance
- deployment/QA
- documentation and case study

Subagents must return findings before the main agent modifies files.

## Code style

- Keep components modular.
- Prefer procedural geometry before importing assets.
- Keep UI readable on desktop and usable on mobile.
- Avoid excessive animation or high-poly geometry.
- Keep build output Vercel-friendly.
- Remove console errors and unused imports.
- Keep documentation updated with each major change.

## Build commands

Use the commands present in `package.json`. If absent, establish:

```bash
npm install
npm run dev
npm run build
```

## Documentation rule

Every feature prompt must update README and/or CASE_STUDY when relevant.

## Safety and accuracy note

This is a visual technical concept, not an engineering certification. Do not claim the design is flight-qualified, safe to launch, or approved by any agency.
