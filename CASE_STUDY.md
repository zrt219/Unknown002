# ZRT UNKNOWN02 Case Study

## Abstract

ZRT UNKNOWN02 is a browser-based 3D technical viewer for a realistic nuclear-electric propulsion spacecraft concept. The project combines a runnable React/Vite/React Three Fiber application with a staged prompt pack that documents how the viewer is built and extended. The current state of the project now covers the first four prompts plus a continuity relayout pass: viewer foundation, realistic spacecraft geometry, Brayton and energy overlays, technical inspection UI, and a connected full-vehicle structure pass.

## 1. Repository Role

This repository serves two roles at once.

First, it is the home of the live application. The root contains the app code, build configuration, test setup, and scene components.

Second, it preserves the prompt-driven workflow used to create the viewer. The prompt pack remains as contributor scaffolding and as a documented build path for later phases.

## 2. Project Thesis

The thesis of ZRT UNKNOWN02 is simple:

> A realistic nuclear-electric spacecraft should look like a heat-management and power-conversion machine, not a cinematic rocket ship.

That thesis controls everything in the viewer:

- the reactor stays compact
- the shield is directional
- the Brayton unit is machinery, not a second engine
- the radiators dominate
- the boom creates meaningful separation
- the bus, tanks, and thrusters share visible structure
- the thrusters remain small and electrically plausible

## 3. Why a Browser-Based Technical Viewer?

A browser viewer makes the engineering story inspectable instead of static:

- users can orbit the full vehicle
- camera presets can frame specific questions
- overlays can expose hidden thermodynamic logic
- subsystem cards can explain purpose and placement
- layer toggles can move between clean geometry and dense engineering context

This medium turns a concept image into a navigable technical explanation.

## 4. Why the Continuity Pass Mattered

The first integrated build proved the subsystem order and overlays, but the vehicle still read too much like a lineup of parts. The continuity relayout corrects that by explicitly linking the radiator root to the boom, the boom to the bus, the bus to the tank rack, and the tank rack to the propulsion frame. The payload also mounts to the bus-side structure instead of floating as an independent body.

## 4.1. Why the Prompt 08 realism pass mattered

After the continuity relayout, the architecture was correct but some interfaces still felt too diagrammatic. Prompt 08 focuses on the places where real spacecraft accumulate constrained geometry: mounts, exchanger paths, radiator roots, bus-side service hardware, tank saddles, and propulsion support structure. The purpose is to make the viewer feel review-ready rather than merely readable.

## 4.2. Why the Prompt 10 forward-section pass mattered

Even after the broader realism pass, the forward half still risked reading like a simplified diagram: the boom ended too cleanly, PMAD was too visually compressed, the tanks needed clearer support logic, and the payload and thrusters needed more differentiated packaging. Prompt 10 concentrates detail at the exact interfaces where real spacecraft communicate intent: boom adapter hardware, service-module equipment clustering, tank saddles and manifolds, payload mounting, and propulsion support structure.

## 5. Prompt Path Through the Current Build

Prompt 01 establishes:

- Vite/React application setup
- core viewer shell
- camera preset structure
- base HUD and documentation

Prompt 02 establishes:

- procedural spacecraft geometry
- realistic subsystem order
- reactor/shield/boom/radiator placement logic

Prompt 03 establishes:

- closed Brayton overlay
- animated working-fluid particles
- electric power and heat rejection routes
- restrained motion language

Prompt 04 establishes:

- subsystem selection
- inspection modes
- subsystem engineering notes
- PMAD as an inspectable bus-side system
- label leader lines
- compact legend and reset controls

Prompt 04.2 establishes:

- UNKNOWN02 repo identity
- connected structural continuity
- integrated bus, tank, payload, and propulsion framing
- retuned camera and overlay alignment after the relayout

Prompt 08 establishes:

- more credible subsystem interface geometry
- higher detail density at real packaging nodes
- stronger reactor-side machinery treatment
- more thermally justified radiator roots
- a less generic bus / tank / thruster region

Prompt 09+ establishes:

- a centralized `sceneMode` and `environmentMode` system
- four differentiated viewer states: clean, engineering, energy, thermal
- mode-aware legends, labels, subsystem-card copy, and environment defaults
- a single mounted spacecraft with mode-driven lighting and material behavior

Prompt 10 establishes:

- a clearer boom-to-bus transition with adapter framing and junction hardware
- more explicit PMAD grouping, backplane logic, and harness routing in the bus region
- stronger tank saddles, feed paths, and propulsion-side support logic
- a more instrument-like payload mount with a clearer bench backbone
- a tighter four-thruster electric-propulsion cluster with a stronger cluster root

Prompt 11 establishes:

- a dedicated presentation-mode layer for review, capture, diagram, and beauty-technical stills
- a much broader camera-preset set tuned for both inspection and polished composition
- label profiles for engineering, review, capture, and hero imagery
- a capture helper workflow inside the HUD
- a formal case-study capture plan in `docs/capture-plan.md`

Prompt 12 establishes:

- a final NASA-style release-readiness pass
- a GitHub/Vercel release-note package in `docs/release-notes.md`
- an explicit engineering realism checklist for public review
- a capture checklist inside the viewer so final stills can be produced repeatably

## 6. System Architecture

The spacecraft uses a long axial layout:

```text
[Compact Fission Reactor]
-> [Radiation Shield]
-> [Closed Brayton Power Unit]
-> [Heat Rejection Radiators]
-> [Separation Boom]
-> [Spacecraft Bus]
-> [Power Management and Distribution]
-> [Propellant Tanks]
-> [Science Payload]
-> [Electric Thrusters]
```

This order is not decorative. It is the core educational structure of the model, and the current UNKNOWN02 layout now makes that chain physically continuous instead of merely implied.

## 7. Energy Flow

The viewer explains this chain:

```text
reactor thermal power
-> closed Brayton conversion
-> electrical output
-> PMAD conditioning and distribution
-> spacecraft bus and thrusters
-> remaining waste heat
-> radiators
-> space
```

Prompt 03 made that chain visible. Prompt 04 made it readable. The UNKNOWN02 relayout makes it physically believable by aligning the overlays with a connected vehicle backbone.

## 8. Viewer Experience

The viewer now works in two complementary modes at once:

- as a 3D spacecraft model
- as an engineering inspection tool

Users can:

- switch between curated scene modes
- switch or override the background environment independently
- select subsystems from the scene or directory
- read purpose, placement, realism, energy-role, or thermal-role notes depending on mode
- use a focus button or preset to frame the selected subsystem
- compare clean geometry against engineering, energy, and thermal readings

The goal is not UI spectacle. The goal is to reduce ambiguity without burying the spacecraft under interface chrome.

## 8.1. Scene Mode System

The scene refactor matters because the viewer should not feel like one scene with a pile of toggles. It now behaves like four different product states sharing one spacecraft model:

- `Clean View` teaches silhouette and presentation quality
- `Engineering View` teaches placement, structure, and subsystem relationships
- `Energy View` teaches useful heat-to-power-to-propulsion conversion
- `Thermal View` teaches radiator dominance, rejected heat, and protected-zone logic

The geometry stays mounted while the environment, lighting, material emphasis, label density, legend content, and sidebar content change around it.

## 8.2. Scene Environments

The viewer also separates environment from mode:

- `Deep Space` is the neutral technical backdrop
- `Earth Orbit` is the presentation-first context backdrop
- `Thermal Analysis` is the near-black analytical backdrop

The recommended mapping is:

- `Clean -> Earth Orbit`
- `Engineering -> Deep Space`
- `Energy -> Deep Space`
- `Thermal -> Thermal Analysis`

This separation keeps the viewer flexible without collapsing back into an uncontrolled toggle matrix.

The latest presentation pass also makes `Earth Orbit` behave more like the reference imagery instead of a placeholder context mode. The environment now carries a visible solar source, a denser layered starfield, a restrained Milky Way band, and a much larger atmospheric Earth limb so the ship reads against a composed scene instead of a sparse void.

## 9. Subsystem Details

Each major subsystem carries explicit engineering copy:

- what it does
- why it is physically located where it is
- what realism rule it reinforces
- what its color and overlays mean
- how it relates to the energy chain

This is especially important for systems that are easy to flatten into a single "bus" label. PMAD is treated as an inspectable node because it sits at the critical handoff between generated electric power and spacecraft loads.

Prompt 10 extends that idea into geometry. PMAD is now supported by grouped boxes and branch routing, the payload reads as dedicated mission hardware instead of a second box bus, and the propulsion end uses clearer support and feed cues so the energy chain also looks mechanically plausible.

## 10. Design Tradeoffs

The viewer deliberately avoids a few tempting directions:

- no giant floating modal windows
- no dense dashboard chrome over the canvas
- no theatrical fantasy hull plating
- no all-at-once label explosion
- no exaggerated cinematic thruster effects

Instead, the viewer uses compact cards, thin leader lines, exposed structure, restrained animation, and mode-aware decluttering. The tradeoff is that the interface remains quieter and more diagrammatic than a polished product dashboard, but that restraint protects the engineering tone of the piece.

The same restraint now applies to the 3D model itself. Prompt 08 and Prompt 10 add more geometry, but they try to add the right geometry rather than just more geometry.
The same principle applies to the backdrop: the scene is richer now, but the added sun, galaxy band, and Earth-limb treatment are there to support spacecraft presentation and scale reading, not to turn the viewer into concept-art spectacle.

## 11. Accessibility and Readability

Accessibility and readability are treated as core concerns rather than afterthoughts.

The implementation improves:

- keyboard access through button-based mode and subsystem controls
- semantic inspection content with headings and description lists
- contrast and readability against a dark scene
- narrow-screen usability through a reduced HUD footprint
- reduced-motion handling by freezing animation when the system preference requests it

## 12. Why the Radiators Dominate

Radiator area remains the strongest realism signal in the project.

A nuclear-electric spacecraft does not turn all reactor heat into useful electrical output. The remainder must be rejected to space. That makes radiator hardware a first-order architecture driver, which is why the viewer gives it such visual dominance.

## 13. Why the Shield and Boom Matter

The shield and boom are not stylistic accessories. Together they explain how the vehicle protects the bus and payload side from reactor-side radiation and thermal load.

Without them, the concept stops reading like a plausible nuclear-electric architecture.

## 14. Documentation Strategy

The documentation splits cleanly by audience:

- `README.md` explains how to use the viewer
- `CASE_STUDY.md` explains why the viewer is designed this way
- `docs/capture-plan.md` defines the canonical still-capture matrix and export checklist
- `docs/release-notes.md` defines the release summary, PR draft, deployment note, and final QA checklist
- prompt files preserve the staged build workflow

This keeps the public entry point focused while still retaining implementation context for future contributors.

## 15. Limitations

ZRT UNKNOWN02 is a concept viewer, not a certified spacecraft design. It does not claim:

- flight qualification
- validated reactor safety
- validated thermal sizing
- launch approval
- mission performance certification

The software is meant to explain a plausible configuration, not certify it.

## 15.1. Presentation and Review Assets

Prompt 11 matters because a credible viewer is not automatically a credible presentation tool. The new presentation layer keeps the technical scene modes intact, but adds a second axis for the kind of artifact being produced: live review, export capture, analytical diagram, or beauty-technical hero still. That keeps the code honest to the engineering story while making the project much easier to present in a portfolio, README, review deck, or long-form technical article.

The grouped camera presets and capture plan also remove a lot of ambiguity. Instead of relying on memory or manual dragging, the repo now has named, repeatable still targets for overview, reactor/shield, Brayton, radiators, boom structure, bus-side packaging, propulsion, and full energy/thermal composites.

## 15.2. Release Preparation

Prompt 12 turns the project from a working viewer into a release-prepared artifact. The README now carries the public entry-point story, the case study carries the engineering rationale, and the release notes define the PR and deployment package. The important standard is "NASA-style" as a visual and review-quality benchmark, not as an endorsement claim.

The release checklist preserves the realism constraints that made UNKNOWN02 credible: compact reactor, directional shield, closed Brayton conversion, dominant radiators, long boom, visible PMAD, small electric thrusters, and clear separation between structure, thermal flow, electrical flow, and propulsion output.

## 16. Conclusion

ZRT UNKNOWN02 becomes more convincing as it becomes more honest. Its reactor stays compact. Its shield is directional. Its radiators dominate. Its boom now lands into real mounts. Its tanks and thrusters share a visible propulsion backbone. Its PMAD is visible as infrastructure, not glossed over. The continuity pass is what turns the viewer from a subsystem lineup into a coherent vehicle, and the forward-section pass is what makes the service-module side feel comparably engineered instead of merely attached.

Prompt 09+ pushes that one step further on the product side: the viewer now reads differently depending on whether the user is reviewing the spacecraft as a hero object, an architecture diagram, an energy-conversion chain, or a thermal-management machine. That separation is what makes the interface feel deliberate instead of merely busy.
