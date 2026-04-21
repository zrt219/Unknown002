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


# Prompt 04 — Engineering Inspection Modes, Labels, Camera Presets, and Technical UI

## Mission

Turn the project from a 3D model with overlays into a real technical inspection viewer. Users should be able to select subsystems, switch camera presets, read engineering notes, toggle visual layers, and understand the purpose and placement of every major component.

## Required subagents

Spawn these subagents before coding:

1. **Camera Agent**
   - Review current camera behavior.
   - Design smooth camera presets.
   - Recommend target positions and framing for each subsystem.

2. **Labeling Agent**
   - Improve labels, leader lines, and readability.
   - Prevent label clutter.
   - Recommend label grouping or priority rules.

3. **Inspection UI Agent**
   - Design the subsystem inspection panel.
   - Define data schema for subsystem notes.
   - Recommend click/selection behavior.

4. **Technical Writing Agent**
   - Write concise engineering notes for every subsystem.
   - Include purpose, placement rationale, realism note, and color meaning.

5. **Accessibility Agent**
   - Improve keyboard usability, contrast, semantic UI, and mobile readability.
   - Recommend reduced-motion behavior.

6. **Performance Agent**
   - Review selection, labels, and camera transitions for performance issues.

7. **Documentation Agent**
   - Plan README and CASE_STUDY updates for inspection features.

## Main implementation task

Add technical inspection features.

## Required camera preset buttons

Create camera presets:

- `Overview`
- `Reactor + Shield`
- `Brayton Power Unit`
- `Radiators`
- `Separation Boom`
- `Bus + Payload`
- `Electric Propulsion`
- `Energy Flow View`

Each preset should:

- move the camera to a useful angle
- set OrbitControls target
- not clip through geometry
- keep labels readable
- work repeatedly

Smooth transitions are preferred if not too complex.

## Subsystem selection

Users should be able to select subsystems by clicking 3D parts or using a UI list.

Subsystem IDs:

- `reactor`
- `shield`
- `braytonPowerUnit`
- `radiators`
- `separationBoom`
- `spacecraftBus`
- `pmad`
- `propellantTanks`
- `sciencePayload`
- `electricThrusters`

When selected, show:

- subsystem name
- purpose
- why it is placed there
- realism note
- visual color meaning
- related energy flow
- suggested camera button or auto-focus option

## Required subsystem copy

Use clear text similar to this:

### Compact Fission Reactor

Purpose: Provides thermal power for the spacecraft power system.

Placement rationale: Located at the reactor end of the vehicle to keep the heat source away from sensitive payload and avionics.

Realism note: The reactor is not a thrust engine. It supplies heat to the power conversion system.

### Radiation Shield

Purpose: Reduces radiation exposure toward the spacecraft bus and payload.

Placement rationale: Placed between the reactor and the spacecraft bus.

Realism note: Shield direction and placement matter more than decorative shape.

### Closed Brayton Power Unit

Purpose: Converts reactor heat into electric power using a closed working-fluid loop.

Placement rationale: Mounted near the reactor and radiator manifolds to keep heat-transfer paths short.

Realism note: The Brayton unit is a compact machinery cluster, not a giant engine.

### Heat Rejection Radiators

Purpose: Reject unused thermal energy to space.

Placement rationale: Connected to the power conversion system because waste heat must be dumped continuously.

Realism note: Radiators dominate geometry because space has no air or water for cooling.

### Separation Boom

Purpose: Creates distance between the reactor/power section and the spacecraft bus.

Placement rationale: Distance reduces radiation and thermal load.

Realism note: A sparse truss is more plausible than a solid fantasy hull.

### Spacecraft Bus

Purpose: Houses avionics, communications, power management, and mission electronics.

Placement rationale: Kept away from the reactor side and shielded by distance.

Realism note: Boxy equipment modules are realistic.

### Propellant Tanks

Purpose: Store propellant for electric thrusters.

Placement rationale: Located near bus/thruster plumbing for manageable feed paths.

Realism note: Electric propulsion still needs propellant.

### Science Payload

Purpose: Carries instruments for mission objectives.

Placement rationale: Kept away from reactor-side radiation and thermal loads.

Realism note: Payload should be small relative to bus and power system.

### Electric Thrusters

Purpose: Provide low-thrust, high-efficiency propulsion using electric power.

Placement rationale: Located at the thrust end with feed lines from propellant tanks.

Realism note: Electric thrusters have subtle plumes, not chemical flames.

## Labels and leader lines

Improve labels so that:

- labels can be toggled
- leader lines point to subsystem anchors
- labels do not cover the whole scene
- labels are readable against dark background
- labels are not enormous
- labels can be hidden for screenshots
- label colors match subsystem categories

Optional:

- add label density modes: `Minimal`, `Engineering`, `Full`

## Legend

Add a compact legend:

- red/orange = reactor thermal input
- blue = cold working fluid or radiator side
- orange = warm/compressed working fluid
- red = hot working fluid
- white/yellow = electric power
- purple/blue = electric propulsion plume
- gray = spacecraft structure
- amber/gold = radiation shield

## UI panel

Improve UI layout:

- title
- mode buttons
- layer toggles
- subsystem list
- selected subsystem card
- legend
- speed slider
- reset view button

Mobile requirements:

- UI should not cover entire screen permanently
- use collapsible panels if needed
- readable at small widths

## README updates required

Update README sections:

- Interactive Viewer Guide
- Inspection Modes
- Camera Presets
- Subsystem Explanations
- Visual Legend
- Accessibility Notes

## CASE_STUDY updates required

Update CASE_STUDY.md:

- Viewer Experience
- Subsystem Details
- Design Tradeoffs
- Accessibility and Readability

## Acceptance criteria

Verify:

- build passes
- all camera preset buttons work
- selection panel updates
- labels toggle cleanly
- leader lines point to correct areas
- legend is readable
- UI works on desktop and small screens
- no overlay makes the scene unreadable
- README and CASE_STUDY updated

## Final response format from Codex

Report:

```text
Subagent summary:
Inspection features added:
Camera presets:
Subsystem data created:
Files changed:
Commands run:
Build result:
README updates:
CASE_STUDY updates:
Accessibility notes:
Known limitations:
Next prompt to run:
```
