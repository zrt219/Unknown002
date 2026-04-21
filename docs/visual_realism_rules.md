# UNKNOWN02 Visual Realism Rules

## Purpose

This document prevents later UNKNOWN02 prompts from drifting into sci-fi, game, or generic Three.js styling. It defines the visual rules that preserve a serious NASA/DOE/JPL-style technical concept viewer.

## Visual North Star

UNKNOWN02 should feel like an internal mission-engineering inspection product: restrained, premium, readable, physically motivated, and honest about being conceptual. It should never feel like a spaceship game, cyberpunk dashboard, launch rocket render, or neon VFX demo.

## Absolute Prohibitions

Do not add:
- cockpit, windows, crew cabin, or bridge
- wings, fins, aircraft tails, spaceplane cues
- weapons or combat styling
- giant engine bells or chemical nozzle clusters
- orange flames, smoke, shock diamonds, or rocket exhaust
- giant glowing reactor-drive cones
- fantasy hull plating that hides the sparse spacecraft structure
- decorative greeble spam with no functional interface meaning
- mode-specific world swaps that move Earth, sun, or spacecraft staging
- claims of flight qualification, safety certification, or agency approval

## Required Realism Signals

The model should always preserve:
- compact reactor
- directional shield
- closed Brayton conversion machinery
- large, dominant radiators
- long truss/separation boom
- visible PMAD/electronics infrastructure
- connected structural backbone
- modest propellant tanks with feed logic
- small electric thrusters
- subtle blue-violet electric plume only when enabled
- readable labels that explain engineering logic

## Proportional Rules

- Radiators should dominate the silhouette because heat rejection dominates the architecture.
- Reactor should be compact relative to radiators and boom.
- Boom should create meaningful standoff between power head and bus side.
- Thrusters should be small relative to reactor/radiator hardware.
- Tanks should be modest and service-like, not chemical booster stages.
- Bus should look like service infrastructure, not a pressurized fuselage.
- Payload should be attached to the bus side and remain secondary to power/thermal architecture.

## Color and Overlay Semantics

| Meaning | Color family |
| --- | --- |
| Reactor heat / hot source | red, orange, hot amber |
| Brayton hot-side / warming flow | amber, orange |
| Cold-side / radiator rejection / cooled return | blue, cyan |
| Electric power | pale yellow, warm white |
| Electric propulsion cue | blue-violet |
| Structure | gray, graphite, muted metal |
| Shield / protected-zone meaning | amber, gold, muted ochre |

Do not make every component glow. Emphasis must be selective and semantic.

## Environment Realism Rules

There is one permanent orbital scene:
- fixed sun direction
- fixed Earth limb
- stable starfield / galaxy composition
- stable spacecraft world-space orientation
- mode changes through lighting, material emphasis, labels, overlays, and UI hierarchy

Clean View may be cinematic, Engineering View may be more readable, Energy View may dim the base spacecraft for flow clarity, and Thermal View may emphasize heat paths. None of those modes may replace the world.

## Detail Density Rules

Detail belongs at:
- mounts
- collars
- hinges
- radiator roots
- manifolds
- PMAD backplanes
- cable trays
- tank saddles and valve blocks
- thruster brackets and grids
- truss nodes

Large surfaces should stay quiet. Use small asymmetries when they read as equipment packaging. Avoid repeated decorative parts that do not explain a real interface.

## Label and UI Tone

Labels should explain:
- purpose
- placement logic
- realism note
- energy role
- thermal role
- related systems

Labels should not use marketing hype, fantasy lore, or unsupported engineering claims.

## Reality Check Template

Every prompt run should end with:

1. What improved.
2. What remains inaccurate or only conceptually represented.
3. What the next prompt should target.
4. Whether tests/build/browser/deploy checks passed.
