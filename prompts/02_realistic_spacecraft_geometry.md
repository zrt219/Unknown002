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


# Prompt 02 — Realistic Spacecraft Geometry and Subsystem Layout

## Mission

Replace the Prompt 01 placeholder spacecraft with a realistic procedural geometry model of **ZRT UNKNOWN02**, a nuclear-electric propulsion spacecraft pathfinder.

The vehicle must look technically plausible. It should be visually disciplined, modular, and built around the logic of reactor heat, shielding, Brayton power conversion, radiator heat rejection, long separation distance, spacecraft bus, propellant supply, science payload, and electric propulsion.

## Required subagents

Spawn these subagents before coding:

1. **Reactor Layout Agent**
   - Plan the compact fission reactor geometry.
   - Plan the radiation shield geometry and orientation.
   - Recommend how to communicate reactor heat without making it look like a rocket engine.

2. **Thermal Systems Agent**
   - Plan radiator panel geometry.
   - Ensure the radiators visually dominate the vehicle.
   - Recommend manifolds, panel segmentation, hinges, and heat-flow attachment points.

3. **Spacecraft Structures Agent**
   - Plan long truss/separation boom geometry.
   - Plan bus, tanks, payload, feed lines, and equipment boxes.
   - Keep everything modular and mechanically plausible.

4. **Visual Realism Agent**
   - Identify anything in the current scene that looks sci-fi, aircraft-like, or misleading.
   - Recommend removals or corrections.

5. **Documentation Agent**
   - Plan README and CASE_STUDY updates for spacecraft layout and realism.

## Main implementation task

Build a detailed but still performant procedural spacecraft model.

Required left-to-right architecture:

```text
[Compact Fission Reactor]
→ [Radiation Shield]
→ [Closed Brayton Power Conversion Unit]
→ [Large Heat Rejection Radiators]
→ [Long Truss Separation Boom]
→ [Spacecraft Bus]
→ [Propellant Tanks]
→ [Science Payload]
→ [Electric Thrusters]
```

## Absolute visual rules

Do not add:

- wings
- cockpit
- aircraft nose
- windows
- weapons
- decorative fins
- giant engine bell
- chemical rocket flame
- glowing fantasy warp drive
- crew cabin styling
- sleek sci-fi hull plating that hides engineering function

Add only technical spacecraft features:

- cylinders
- tanks
- boxes
- trusses
- radiator panels
- cable trays
- feed lines
- support struts
- instrument masts
- antenna booms
- small electric thruster heads

## Reactor subsystem requirements

Create a compact reactor assembly at the rear/left side.

Geometry suggestions:

- short dark-gray cylinder
- inner restrained red/orange emissive ring or core
- small control drums or exterior rods as subtle cylinders
- mounting ring
- tiny sensor/instrument blocks
- structural struts to shield/power conversion section

Labels:

- `Compact Fission Reactor`
- optional note: `Thermal source, not a thrust engine`

Visual behavior:

- subtle glow
- no flame
- no plume
- no giant drive nozzle

## Radiation shield requirements

Create a shield between reactor and bus-facing side.

Geometry suggestions:

- truncated cone
- layered disk stack
- amber/gold/gray material
- wider side facing the spacecraft bus/payload
- optional semi-transparent cone-of-protection overlay controlled by UI

Labels:

- `Radiation Shield`
- optional note: `Protects bus and payload`

Realism rule:

The shield must be visibly between the reactor and everything sensitive.

## Closed Brayton power conversion unit geometry

This prompt is for geometry, not final animated cycle overlay. Still create the physical machinery cluster.

Include:

- compact power conversion module
- compressor housing
- turbine housing
- alternator/generator cylinder
- heat exchanger/recuperator box
- thermal pipe routes to radiator manifolds
- electric cable route toward spacecraft bus

Labels:

- `Closed Brayton Power Unit`
- `Compressor`
- `Turbine`
- `Alternator`
- `Heat Exchanger`

Keep it compact. It should not dominate compared with radiators.

## Radiator geometry requirements

Radiators must visually dominate.

Create:

- two or four large deployable radiator wings
- dark blue/purple material
- panel segmentation grid
- hinge bars or root trusses
- heat pipe/manifold bars
- structural braces
- optional alternate angle panels to create a cross or V shape, but not solar-panel styling

Labels:

- `Heat Rejection Radiators`
- optional note: `Reject unused thermal energy to space`

Critical rule:

Do not call them solar panels.

## Separation boom requirements

Create a long structural boom between power/reactor section and spacecraft bus.

Geometry suggestions:

- triangular truss or square truss
- repeated cross-bracing
- thin rods
- clear distance
- small cable run along one side

Labels:

- `Extensible Separation Boom`
- optional note: `Distance reduces radiation and thermal load`

The boom should make the vehicle feel long and sparse.

## Spacecraft bus requirements

Create a compact service bus.

Geometry suggestions:

- gray box or cylinder
- equipment panels
- avionics boxes
- PMAD block
- antenna rods
- communications dish or high-gain antenna
- small sensor booms

Labels:

- `Spacecraft Bus`
- `PMAD`
- `Avionics`
- `Communications`

## Propellant tank requirements

Add tanks near the bus and thrusters.

Geometry suggestions:

- one to four spheres or cylinders
- support brackets
- feed lines to thrusters

Labels:

- `Propellant Tanks`

## Science payload requirements

Add a small science payload forward/away from reactor.

Geometry suggestions:

- telescope cylinder
- instrument box
- dish
- camera/sensor head
- deployment mast

Labels:

- `Science Payload`

## Electric propulsion requirements

Create 2–4 small electric thrusters.

Geometry suggestions:

- small cylinders
- rings/grids
- subtle translucent blue/purple plume cones
- feed lines from tanks
- mounting bracket

Labels:

- `Electric Thrusters`
- optional note: `Low thrust, high efficiency`

Visual rule:

The plume must be small and subtle.

## Component and data design

Do not hardcode every coordinate randomly throughout components.

Use `spacecraftConfig` or similar for:

- subsystem positions
- color constants
- scale factors
- label text
- camera targets
- UI defaults

Use helper components for repeated geometry:

- `TrussSegment`
- `RadiatorPanel`
- `EquipmentBox`
- `LabelAnchor`
- `Pipe`
- `CableLine`
- `Thruster`

If helpers are created, keep them organized.

## README updates required

Update README sections:

- Spacecraft Layout
- Subsystem Visual Model
- Engineering Realism Checklist
- Visual Legend
- Reference Images
- Why the Radiators Are Large
- Why the Reactor Is Separated

## CASE_STUDY updates required

Update CASE_STUDY.md sections:

- System Architecture
- Subsystem Details
- Why the Radiators Dominate
- Why the Shield and Boom Matter
- Electric Propulsion Realism

## Acceptance criteria

The main agent must verify:

- build passes
- spacecraft looks like a technical concept demonstrator
- reactor is compact
- shield is between reactor and bus
- boom is long
- radiators are large
- thrusters are small
- no cockpit/wings/fins/weapons/flames
- all major subsystems are recognizable
- labels still work or remain toggleable
- README and CASE_STUDY updated

## Final response format from Codex

Report:

```text
Subagent summary:
Geometry changes:
Realism corrections:
Files changed:
Commands run:
Build result:
README updates:
CASE_STUDY updates:
Screenshots or view suggestions:
Known limitations:
Next prompt to run:
```
