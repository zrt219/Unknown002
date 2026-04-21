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


# Prompt 06 — Visual Polish, Realism Pass, Performance, and Screenshot Quality

## Mission

Give the ZRT UNKNOWN02 viewer a serious final visual polish pass while preserving realism. This prompt should make the viewer feel intentional, inspectable, and screenshot-worthy.

Do not add fantasy styling. The polish should make the design more technically credible, not more cinematic.

## Required subagents

Spawn these subagents before coding:

1. **Visual Fidelity Agent**
   - Review lighting, materials, geometry proportions, color balance, and depth.
   - Recommend improvements that make the viewer look more professional without sci-fi exaggeration.

2. **Engineering Detail Agent**
   - Add plausible small details: cable trays, hinges, manifolds, equipment boxes, struts, truss joints, PMAD boxes, radiator segmentation, feed lines.
   - Keep details lightweight and procedural.

3. **Thermal Realism Agent**
   - Review radiator size, placement, heat arrows, and Brayton/radiator relationship.
   - Make sure radiators still dominate and are not confused with solar arrays.

4. **Readability Agent**
   - Improve labels, leader lines, contrast, UI spacing, and camera framing.
   - Ensure the viewer is readable for Substack screenshots.

5. **Performance Agent**
   - Review frame-rate risks.
   - Optimize repeated geometry and animation loops.
   - Avoid needless high-poly objects.

6. **Accessibility Agent**
   - Add or improve reduced-motion option.
   - Improve contrast, keyboard/tab behavior, and responsive UI.
   - Ensure controls are understandable.

7. **Documentation Agent**
   - Update README and CASE_STUDY with visual polish, accessibility, performance, and screenshot guide.

## Main implementation task

Polish the existing viewer.

## Visual material improvements

Improve materials:

- reactor: dark metal with restrained emissive core
- shield: layered amber/gold/gray, matte or slightly metallic
- Brayton unit: green/gray industrial machinery
- radiators: dark blue/purple matte panels with subtle segmentation
- boom: gray metallic truss
- bus: neutral gray with equipment panels
- tanks: satin gray or white
- thrusters: dark metal rings with blue/purple transparent plume

Do not make everything glossy. Use restrained material roughness.

## Geometry detail improvements

Add lightweight procedural details:

### Reactor area

- mounting ring
- sensor rods
- small control boxes
- cable connectors

### Shield

- layered disks
- rim bolts or ring segments
- directional cone-of-protection overlay

### Brayton power unit

- compressor/turbine housings
- alternator cylinder
- heat exchanger block
- shaft line
- pipe loops
- small equipment boxes

### Radiators

- panel segments
- root hinge
- heat pipe/manifold bars
- support struts
- radiator surface normal indicators if useful

### Boom

- repeated truss segments
- cross-bracing
- node joints
- cable tray

### Bus

- PMAD box
- avionics panels
- antenna booms
- instrument mounts

### Propulsion

- thruster grids
- feed lines
- tanks with brackets
- subtle plume refinement

## Composition and camera polish

Improve camera presets for screenshot-worthy framing.

Add optional screenshot guide to README:

- overview shot
- Brayton close-up
- radiator heat rejection view
- reactor/shield view
- energy-flow view

If useful, add a UI button or mode that hides panels/labels for clean screenshots.

## UI polish

Improve:

- panel spacing
- typography
- button states
- toggle clarity
- selected subsystem highlight
- legend readability
- collapsible sections
- mobile behavior

Avoid huge UI that hides the scene.

## Animation polish

Refine:

- particle speed range
- particle spacing
- plume pulse
- reactor glow pulse
- electric flow pulses
- heat arrow pulses

Keep all animations pauseable.

Add reduced-motion option:

- disables pulses or sets them to static
- keeps essential information visible

## Performance improvements

Look for:

- too many unique geometries
- unnecessary state updates per frame
- recreated arrays in render loops
- excessive HTML labels
- high particle count
- material duplication
- large shadows or postprocessing that hurt performance

Use memoization or instancing where appropriate.

## README updates required

Update README sections:

- Visual Polish Notes
- Performance Notes
- Accessibility
- Screenshot Guide
- Realism Review
- Final Viewer Controls

## CASE_STUDY updates required

Update CASE_STUDY.md:

- Visual Design Language
- Realism vs Readability
- Performance Tradeoffs
- Accessibility Considerations
- Screenshot/Publishing Workflow

## Acceptance criteria

Verify:

- build passes
- viewer looks more professional
- no fantasy features added
- radiators remain dominant
- labels are more readable
- screenshot composition is improved
- reduced-motion exists or is documented
- performance is not worse
- mobile UI is usable
- README and CASE_STUDY updated

## Final response format from Codex

Report:

```text
Subagent summary:
Visual polish changes:
Realism corrections:
Performance improvements:
Accessibility improvements:
Files changed:
Commands run:
Build result:
README updates:
CASE_STUDY updates:
Suggested screenshots:
Known limitations:
Next prompt to run:
```
