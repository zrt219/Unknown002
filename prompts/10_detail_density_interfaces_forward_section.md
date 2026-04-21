# Prompt 10 — Spacecraft Detail Density, Interfaces, and Forward-Section Realism

Continue the ZRT UNKNOWN02 Technical Viewer.

This prompt focuses on the areas that usually separate a good concept model from a convincing system model:
- interface design
- subsystem transitions
- support hardware
- line routing
- bus / tank / thruster specificity
- selective, non-random detail density

The viewer already has a strong architecture.
Now make the vehicle feel like a spacecraft assembled by engineers instead of a diagram extruded into 3D.

## First instruction: spawn subagents before coding

Spawn these subagents:

1. Mechanical Packaging Agent
   - Audit packaging of the bus, tanks, propulsion supports, and boom interfaces.
   - Recommend where volume, brackets, access boxes, and support structures should be refined.

2. Propulsion Integration Agent
   - Review thruster count, mounting, spacing, and routing logic.
   - Recommend how to make the electric propulsion cluster look more believable and less generic.

3. PMAD and Avionics Agent
   - Audit how power management and distribution is visually communicated.
   - Recommend visible PMAD boxes, cable / conduit paths, and relationships to bus and thrusters.

4. Payload and Mission Utility Agent
   - Review the science payload region.
   - Recommend how to differentiate payload from bus and propulsion hardware without turning it into decorative clutter.

5. Detail Discipline Agent
   - Enforce detail density only where it supports realism.
   - Prevent random greeble spam.
   - Make sure every added form suggests purpose.

The main agent must use the subagent results to drive a focused forward-section refinement pass.

## Main task

Improve the spacecraft’s mid-to-forward section so it feels like a coherent mission system:
- boom connection
- bus structure
- tanks
- PMAD
- payload
- propulsion support
- thruster cluster

## Required improvements

### A. Boom-to-bus transition
Improve:
- root collar or attachment frame
- bus-side interface bracketry
- transition structure between truss boom and main bus body
- any visible cable, conduit, or support lines that plausibly bridge this interface

### B. Bus realism
The bus should not be a plain box.
It should feel like a service module.

Add / refine:
- modular equipment boxes
- external racks
- panel breaks
- mounting plates
- antenna / comm elements only if restrained and useful
- asymmetry that suggests real packaging choices
- visible relationship between bus and PMAD

### C. Tank realism
Improve:
- tank saddles / supports
- connection logic to the bus
- propellant line routing toward propulsion hardware
- balance between cylindrical and spherical elements if appropriate
- structural link between tanks and thruster mounting region

### D. PMAD visibility
Represent:
- a PMAD module or grouped boxes
- harness or conduit routes toward:
  - spacecraft bus loads
  - payload
  - electric thrusters
- clearer distinction between thermal, electrical, and propellant pathways

### E. Payload differentiation
The science payload should feel distinct from the bus and thrusters.

Possible cues:
- payload boomlet
- instrument head
- sensor package
- dish or telescope-like form if plausible
- dedicated mounting position
- modest line or bracket distinction

The payload should feel intentionally placed away from the hottest / most reactor-facing region.

### F. Electric thruster realism
Improve:
- thruster shape and proportion
- mounting frame
- cluster alignment
- relation to feed / power routing
- plume subtlety
- nozzle / grid appearance

Avoid large rocket-bell visuals.
The plume should stay restrained and consistent with electric propulsion.

### G. Selective detail pass around interfaces
Target detail where realism benefits the most:
- boom root
- radiator root
- PMAD area
- tank supports
- thruster support frame
- bus-to-payload attachments

## Label and selection compatibility
All refined geometry must still support:
- subsystem selection
- label anchors
- fit-to-selection cameras
- performance targets
- clean presentation mode

If necessary:
- reorganize group structure
- add invisible selection roots
- separate selectable subsystems from high-detail child meshes

## Performance constraint
Do not brute-force realism with excessive mesh counts.
Prefer:
- reusable parametric parts
- repeated support members
- simplified repeated hardware clusters
- moderate segmentation
- instancing when sensible

## Deliverables
Provide:
1. Subagent summaries
2. A forward-section realism summary
3. A list of new structural / PMAD / propulsion elements added
4. A short note describing why each added detail improves realism
5. Remaining weak spots, if any

## Quality bar
After this pass, the forward half of the vehicle should feel as convincing as the reactor and radiator side.
