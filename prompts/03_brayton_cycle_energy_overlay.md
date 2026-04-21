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


# Prompt 03 — Closed Brayton Cycle Animation and Energy-Flow Overlay

## Mission

Add the core educational layer: the closed Brayton cycle animation and the full energy-flow overlay. The viewer should now teach how reactor heat becomes electric power, how electricity goes to the spacecraft bus and thrusters, and how waste heat is rejected by the large radiators.

This prompt should make the spacecraft more than a model. It becomes a thermodynamic viewer.

## Required subagents

Spawn these subagents before coding:

1. **Brayton Cycle Agent**
   - Design the simplified closed Brayton cycle overlay.
   - Confirm labels for compressor, heat addition, turbine, generator, and heat rejection.
   - Recommend color transitions for working fluid state.

2. **Animation Agent**
   - Plan particle motion around the Brayton loop.
   - Plan electric power line animation.
   - Plan heat rejection arrow animation.
   - Plan reactor glow and thruster plume pulsing.

3. **Engineering Annotation Agent**
   - Write short accurate annotations.
   - Keep language simple and technical.
   - Avoid overclaiming.

4. **UX Agent**
   - Decide how toggles and speed slider should control animations.
   - Keep UI readable.

5. **Performance Agent**
   - Make sure animation loops are efficient.
   - Avoid unnecessary re-renders.
   - Recommend instancing or lightweight particles if useful.

6. **Documentation Agent**
   - Plan README and CASE_STUDY updates for Brayton cycle and energy visualization.

## Main implementation task

Add a technical overlay near the power conversion unit that visualizes the closed Brayton cycle.

It should include:

```text
Compressor → Heat Source / Heat Exchanger → Turbine → Heat Sink / Radiator Return → Compressor
```

Also include:

```text
Turbine shaft → Alternator / Generator → Electric output → PMAD → Bus + Thrusters
```

And:

```text
Waste heat → radiator manifolds → radiator panels → space
```

## Brayton overlay requirements

Create a simplified rectangular or looped overlay near the physical Brayton power unit.

Required components and labels:

- `Compressor: P↑ T↑`
- `Qin at high pressure`
- `Turbine: P↓ T↓`
- `Alternator / Generator`
- `Electric Output`
- `Qout to Radiators`
- dashed shaft line between compressor, turbine, and alternator

The overlay can be rendered as 3D tubes/lines, billboard labels, or a hybrid of 3D objects and HTML labels.

## Particle animation requirements

Add working-fluid particles moving clockwise through the Brayton loop.

Particle color/state mapping:

- blue = cold / low temperature
- orange = compressed or warm
- red = hot after heat addition
- orange = after turbine expansion
- blue = after heat rejection

Motion order:

```text
compressor
→ heat addition / reactor heat exchanger
→ turbine
→ heat rejection
→ compressor
```

The particles should look like an engineering flow visualization, not magic sparks.

## Reactor heat input visualization

Add heat input from reactor to Brayton heat exchanger.

Visual style:

- red/orange arrow or line
- restrained pulse
- label: `Reactor heat input`
- toggle controlled by heat/Brayton UI

Do not show reactor thrust.

## Electric power flow visualization

Add animated electrical flow from generator/alternator to PMAD and then to bus and thrusters.

Visual style:

- thin white/yellow line
- small moving pulses
- label: `Electric power to PMAD`
- branch to bus
- branch to electric thrusters

UI toggle:

- `Electric Power Flow`

## Heat rejection visualization

Add arrows from Brayton/power conversion unit to radiator manifolds and outward from radiator panels.

Visual style:

- blue/purple heat arrows
- subtle pulsing
- label: `Waste heat to radiators`
- do not make arrows too thick or cartoonish

UI toggle:

- `Heat Rejection Arrows`

## Thruster plume animation

Improve plume animation:

- subtle blue/purple transparency
- slow pulse
- no flame
- optional particle drift if lightweight
- toggle controlled by `Thruster Plume`

## Reactor glow animation

Add subtle reactor glow:

- low-frequency pulse
- restrained intensity
- never looks like an explosion
- pauseable

## UI requirements

Wire the existing UI controls:

- Labels on/off
- Brayton overlay on/off
- Working-fluid particles on/off
- Heat rejection arrows on/off
- Electric power flow on/off
- Radiation shield cone on/off
- Thruster plume on/off
- Pause animation
- Particle speed slider

The speed slider should affect Brayton particles and possibly electric/heat flow pulses.

## Data/model requirements

Create or update configuration objects for:

- energy colors
- animation speeds
- label strings
- route points for Brayton loop
- route points for power flow
- route points for heat rejection
- subsystem IDs

Avoid scattering route coordinates randomly.

## README updates required

Update README sections:

- Closed Brayton Cycle
- Energy Flow Visualization
- Animation Controls
- Thermodynamic Color Legend
- Viewer Controls
- Why Waste Heat Matters

Add a simple diagram:

```text
reactor heat → Brayton loop → generator → PMAD → thrusters/bus
                         ↘ waste heat → radiators
```

## CASE_STUDY updates required

Update CASE_STUDY.md sections:

- Energy Flow
- Closed Brayton Cycle Model
- Why the Radiators Dominate
- Viewer Experience
- Tradeoffs

## Acceptance criteria

Verify:

- build passes
- particles move clockwise
- color states change by loop segment
- heat input line exists
- electric power line exists
- heat rejection arrows exist
- toggles work
- pause works
- speed slider works
- plume remains subtle
- reactor glow remains restrained
- README and CASE_STUDY updated
- no console errors

## Final response format from Codex

Report:

```text
Subagent summary:
Energy-flow features added:
Animation details:
UI controls wired:
Files changed:
Commands run:
Build result:
README updates:
CASE_STUDY updates:
Performance notes:
Known limitations:
Next prompt to run:
```
