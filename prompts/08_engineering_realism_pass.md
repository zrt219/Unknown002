# Prompt 08 — Engineering Realism Pass

You are continuing the ZRT UNKNOWN02 Technical Viewer.
The current viewer already works and already communicates the high-level architecture well:
compact reactor → radiation shield → Brayton power unit → radiators → long separation boom → bus / tanks / payload → electric thrusters.

Your job now is to perform a serious engineering realism pass.
The goal is not to make the viewer flashier.
The goal is to make the vehicle feel more like a plausible aerospace system built from mounts, interfaces, manifolds, structure, and constrained geometry.

## First instruction: spawn subagents before coding

Spawn these subagents immediately and have each one return a concise written review before implementation starts:

1. Space Systems Architecture Agent
   - Review the full vehicle layout for plausibility.
   - Identify which subsystem transitions still feel too abstract or toy-like.
   - Flag any geometry that reads more like generic sci-fi than real hardware packaging.

2. Structures and Interfaces Agent
   - Audit all major mechanical interfaces:
     - reactor-to-shield
     - shield-to-power-conversion
     - power-conversion-to-radiator roots
     - power-section-to-boom
     - boom-to-bus
     - bus-to-tank supports
     - tank-to-thruster support structure
   - Recommend how to add believable brackets, flanges, ribs, attachment rings, hardpoints, and struts.

3. Thermal Systems Agent
   - Review radiator placement, root connections, and heat-rejection logic.
   - Recommend geometry changes that make thermal routing more believable.
   - Make sure radiator structure reads as heat-rejection hardware, not decorative fins or solar wings.

4. Power and Propulsion Agent
   - Review the forward bus / tank / thruster region.
   - Identify where propellant feed logic, PMAD routing, and electric-thruster support geometry can be made clearer.
   - Ensure thrusters read as electric propulsion, not chemical engines.

5. Industrial Design Restraint Agent
   - Remove any styling that is too sleek, too game-like, or too cinematic.
   - Preserve clarity while increasing realism.
   - Enforce the rule: functional geometry beats decorative geometry.

The main agent must read the subagent findings, summarize them, then implement the changes.

## Main task

Upgrade the spacecraft from a clean concept blockout into a more mechanically credible technical assembly.

## What must improve

### A. Mechanical interface realism
Every subsystem transition should look intentionally connected.

Improve:
- reactor mount geometry
- shield support attachment
- Brayton unit mounting frame
- radiator root hinges / radiator manifold interface
- boom root collar / adapter structure
- bus mounting frame
- tank brackets or saddles
- thruster support truss / frame

Avoid smooth magical transitions.
Show how one subsystem is physically attached to the next.

### B. Structural density
The spacecraft currently reads correctly at the architecture level, but some areas still look sparse.

Add controlled detail density:
- braces
- adapter rings
- conduit routing
- panel seams
- avionics boxes
- equipment shelves
- harness runs
- line-of-sight structural members
- radiator deploy hardware
- protective covers
- pipe / manifold bundles where appropriate

Do not clutter every area equally.
Place more density where real systems concentrate:
- subsystem interfaces
- root joints
- bus service region
- propulsion feed and support region
- power conversion mounts

### C. Reactor-side realism
The reactor side is already visually strong, but it should be more convincing.

Refine:
- compact fission reactor housing
- protective outer casing
- restrained emissive treatment
- shield geometry that feels like dedicated mass, not a decorative cone
- Brayton unit as a believable machinery package rather than generic boxes
- short thermal link / exchanger path between reactor-facing side and power conversion package

### D. Radiator realism
Radiators should remain visually important and feel more thermally justified.

Improve:
- radiator root attach points
- segmentation
- backing truss / support rib logic
- deployment hinge cues
- geometry showing that the radiator panels are mission-critical hardware

Make the radiator system feel like a thermal-management solution, not a visual flourish.

### E. Forward-section realism
The bus / tanks / thrusters side needs more specificity.

Improve:
- spacecraft bus asymmetry
- avionics and PMAD boxes
- support rails
- tank mounts
- propellant routing cues
- thruster mounting logic
- instrument or payload differentiation

The forward half should stop feeling generic and start feeling purpose-built.

## Geometry rules
Do not redesign the overall architecture.
Preserve the current high-level layout.

Do:
- keep the long axis
- keep the long boom
- keep the shield between reactor and bus
- keep radiators near the power section
- keep thrusters small
- keep the spacecraft visually thermodynamics-driven

Do not:
- add wings
- add a cockpit
- add windows
- add smooth movie-style body shells
- add large chemical nozzles
- add decorative fins
- add arbitrary greebles that do not explain anything

## Materials and visual treatment
Use restrained materials only.

Suggested material philosophy:
- structure: dark gray / graphite / muted metallic
- shield: amber-gold / protected mass indication
- reactor casing: dark, dense, robust
- Brayton machinery: muted green-gray / industrial
- radiators: cool blue-violet with light segmentation
- bus / tanks: matte gray / off-white / restrained metallic
- thrusters: dark metallic with subtle electric plume

Avoid glossy toy materials.

## Inspection and selection integration
Keep all existing interaction working.
Any new detail must still cooperate with:
- subsystem selection
- focus camera
- label anchors
- inspection notes
- toggles

If needed:
- add invisible anchor nodes for labels
- add better bounding volumes for fit-to-selection
- separate decorative detail meshes from selection root groups

## Camera-readability requirement
After the realism pass, the spacecraft must read clearly in:
- full side overview
- reactor close-up
- Brayton unit close-up
- radiator close-up
- boom close-up
- bus / propulsion close-up

## Deliverables
Implement the realism pass and provide:

1. A summary of findings from each subagent.
2. A list of changed components / files.
3. A short before-vs-after explanation for:
   - reactor side
   - radiator roots
   - boom interface
   - bus / tank / thruster side
4. A note on what still remains for future polish.

## Quality bar
This pass should make the viewer feel less like a prototype demo and more like a plausible spacecraft technical model under active design review.
