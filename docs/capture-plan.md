# UNKNOWN02 Capture Plan

## Purpose

This file defines the repeatable capture matrix for ZRT UNKNOWN02 so README images, case-study figures, and review-deck stills stay consistent.

## Presentation Modes

- `Review Mode`: design-review captures with curated UI density and reduced label clutter
- `Capture Mode`: export-oriented stills with paused motion and capture-safe background support
- `Diagram Mode`: flattened analytical captures for architecture, energy, and thermal explanation
- `Beauty Technical Mode`: hero framing with minimal annotation

## Label Profiles

- `Full Engineering Labels`
- `Reduced Review Labels`
- `Capture Labels`
- `No Labels`

Use `Scene-Managed Labels` only for live inspection, not for canonical exports.

## Required Capture Matrix

| Title | Filename | Scene Mode | Presentation Mode | Environment | Camera Preset | Label Profile | Overlay Intent | Purpose |
|---|---|---|---|---|---|---|---|---|
| Full Overview Side | `unknown02-overview-side.png` | Clean | Beauty Technical | Earth Orbit | Overview Side | No Labels | No overlays | Side-profile hero image for README and deck overviews |
| Full Overview 3/4 | `unknown02-overview-34.png` | Clean | Beauty Technical | Earth Orbit | Overview 3/4 | No Labels | No overlays | Main portfolio and case-study hero view |
| Reactor + Shield Close-Up | `unknown02-reactor-shield-close.png` | Engineering | Review | Deep Space | Reactor Close | Reduced Review Labels | No energy overlays | Explain compact heat source and directional shielding |
| Brayton Power Unit Close-Up | `unknown02-brayton-close.png` | Energy | Capture | Deep Space | Brayton Unit Close | Capture Labels | Brayton + heat path, particles off | Explain reactor heat to electric conversion |
| Radiator Thermal View | `unknown02-radiator-thermal.png` | Thermal | Diagram | Thermal Analysis | Thermal Story View | Capture Labels | Thermal materials + radiator emphasis | Show radiator dominance and rejected heat |
| Boom Structural Detail | `unknown02-boom-detail.png` | Engineering | Review | Deep Space | Boom Structure Close | Reduced Review Labels | No flow overlays | Show separation logic and truss structure |
| Bus + PMAD + Tanks View | `unknown02-bus-pmad-tanks.png` | Engineering | Review | Deep Space | Tanks and PMAD Close | Reduced Review Labels | No Brayton overlay | Show forward-section packaging and PMAD grouping |
| Electric Propulsion Close-Up | `unknown02-electric-propulsion-close.png` | Energy | Capture | Deep Space | Thruster Cluster Close | Capture Labels | Power flow + plume | Show restrained electric propulsion cluster |
| Energy Flow Composite View | `unknown02-energy-flow-composite.png` | Energy | Diagram | Deep Space | Energy Flow Overview | Capture Labels | Brayton + power + heat | Summarize full energy chain |
| Clean Beauty Technical View | `unknown02-clean-beauty-technical.png` | Clean | Beauty Technical | Earth Orbit | Clean Side Presentation | No Labels | No overlays | Cover slide / case-study opener |

## Capture Checklist

1. Click `Reset Mode Defaults`.
2. Click `Reset Scene Defaults`.
3. Click `Reset to Capture Defaults` if using a presentation helper.
4. Select the required scene mode and presentation mode.
5. Apply the target case-study asset preset.
6. Confirm the intended environment is active.
7. Pause motion for still exports.
8. Clear selection unless the capture is intentionally subsystem-focused.
9. Enable `Hide HUD for Capture` for scene-only exports.
10. Use `Copy Current Camera State` to record the final framing for QA notes.

## QA Rules

- Use the named camera preset instead of free-dragging for canonical exports.
- Keep Earth Orbit only for hero and beauty-technical stills unless a specific figure needs context.
- Prefer `Reduced Review Labels` or `Capture Labels` over full engineering density in exported stills.
- Keep working-fluid particles off for still captures unless the image is explicitly a motion composite.
- Do not mix thermal and electrical storytelling in the same “diagram” still unless the asset is the energy-flow composite.
