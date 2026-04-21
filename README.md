# ZRT UNKNOWN02 Technical Viewer

## Overview

ZRT UNKNOWN02 Technical Viewer is a browser-based 3D engineering viewer for a realistic nuclear-electric propulsion spacecraft concept. The repository contains both the live React/Vite application and the staged prompt pack used to build it.

The spacecraft is intentionally presented as a thermodynamic and structural chain:

- compact reactor
- directional radiation shield
- closed Brayton power conversion unit
- large heat rejection radiators
- long separation boom
- bus-side electronics and PMAD
- propellant tank rack and payload mount
- small electric thrusters on a visible propulsion frame

## Why This Viewer Exists

Most fictional nuclear spacecraft are drawn like flame-driven rockets. ZRT UNKNOWN02 takes the opposite approach. It shows the geometry, energy flow, and placement logic that make a nuclear-electric spacecraft look sparse, radiator-dominant, structurally separated, and mechanically connected.

The goal is a serious NASA-style, internal-review quality aerospace concept presentation, not a sci-fi game. The project does not imply official NASA, DOE, JPL, or agency endorsement.

## Viewer Capabilities

The current implementation provides:

- a full-screen React Three Fiber technical viewer
- config-driven procedural spacecraft geometry
- a centralized scene-mode system with separate environment selection
- Brayton, power-flow, heat-path, and thermal-emphasis overlays
- subsystem selection and mode-aware inspection cards
- camera presets for all major spacecraft regions
- mode-aware subsystem engineering notes and PMAD inspection support
- label density, leader lines, legends, and notes that change by mode
- a continuous radiator-root-to-propulsion structural backbone
- denser mechanical interfaces, mounts, manifolds, saddles, and support rails
- a refined forward section with explicit boom adapter framing, grouped PMAD hardware, tank support logic, and a four-thruster electric cluster
- presentation modes, grouped camera presets, and capture helpers for review stills
- a documented case-study capture plan for repeatable README and portfolio assets
- reset view, reset mode defaults, reset scene defaults, and reduced-motion-aware animation handling

## Interactive Viewer Guide

1. Choose a scene mode.
2. Choose a scene environment or leave `Auto-select best scene for view mode` on.
3. Use the curated controls for the current mode instead of turning on every layer at once.
4. Select a subsystem from the scene or subsystem directory when technical context is visible.
5. Use the focus button, fit-to-selection, or a camera preset to frame the subsystem.

The viewer is designed so the same system can be understood as geometry, as a thermodynamic chain, and as an inspectable engineering layout.

## Scene Modes

- `Clean View`: presentation-first hero mode with minimal labels, no legend by default, and Earth Orbit as the recommended environment
- `Engineering View`: architecture-first mode with subsystem labels, leader lines, subsystem directory, and inspection cards
- `Energy View`: functional-flow mode with Brayton overlay, working-fluid motion, electric power flow, heat rejection flow, and a Brayton inset card
- `Thermal View`: heat-first mode with thermal material emphasis, radiator emphasis, heat-path storytelling, and shielded-zone logic

These modes are curated inspection states, not separate spacecraft versions. The geometry stays mounted while lighting, environment, materials, labels, legend content, and overlay priorities change by mode.

## Scene Environments

All three environment options now inherit one persistent orbital scene bible: a fixed Earth limb, fixed warm sun direction, stable starfield structure, and stable spacecraft staging. Environment choices adjust brightness and readability; they no longer represent separate worlds.

- `Deep Space`: neutral technical treatment of the same orbital scene and the default engineering/energy environment
- `Earth Orbit`: hero-context treatment and the default clean-view environment, using the strongest Earth limb, denser star feel, visible sun source, and restrained galaxy band
- `Thermal Analysis`: near-black analytical treatment of the same orbital scene and the default thermal environment

`Auto-select best scene for view mode` keeps the recommended environment mapping in place:

- `Clean View -> Earth Orbit`
- `Engineering View -> Deep Space`
- `Energy View -> Deep Space`
- `Thermal View -> Thermal Analysis`

You can override the environment manually and preserve it until `Reset Scene Defaults` is used.

The latest orbital foundation pass locks the environment to the reference direction: Earth and sun stay anchored across modes, while mode changes only attenuate atmosphere, exposure, background brightness, and overlay contrast.

## Beautiful Sun Rig

Prompt 01 and 02 from the `zrt_unknown02_beautiful_sun_9_prompt_pack` establish a fixed sunrise light rig:

- one warm white-gold sun source on the left side of the composition
- one fixed directional key light shared by every scene mode
- restrained halo and galaxy treatment that supports the spacecraft instead of overpowering it
- stronger Clean View presentation lighting with dimmer Engineering, Energy, and Thermal adjustments for readability
- deterministic procedural Earth and galaxy textures so the environment does not feel like it shifts between reloads

## Earth Limb and Composition Lock

Prompt 03 upgrades Earth from a single backdrop sphere into a dedicated limb presentation layer:

- a deterministic day/night surface texture with a soft dawn terminator
- small warm city-light detail restricted to the darker side
- a separate transparent cloud deck above the surface
- three atmosphere shells for blue limb glow, thin white rim, and restrained outer halo
- mode-aware opacity so Energy and Thermal keep overlays readable without moving Earth

Prompt 04 locks camera discipline around the same orbital composition. Scene mode switches preserve the active camera; `Reset View`, camera presets, capture assets, and fit-to-selection are the explicit camera-moving actions. The reset presets remain one coherent shot family: `Hero Technical View`, `Overview 3/4`, `Energy Flow Overview`, and `Thermal Story View`.

## Camera Presets

- System-level:
  - `Overview Side`
  - `Overview 3/4`
  - `Overview Top / Plan`
  - `Energy Flow Overview`
- Subsystem close-ups:
  - `Reactor Close`
  - `Shield Close`
  - `Brayton Unit Close`
  - `Radiator Root Close`
  - `Radiator Overview`
  - `Boom Structure Close`
  - `Bus Systems Close`
  - `Tanks and PMAD Close`
  - `Thruster Cluster Close`
  - `Payload Close`
- Presentation:
  - `Hero Technical View`
  - `Clean Side Presentation`
  - `Thermal Story View`
  - `Propulsion Story View`

Each preset now carries framing metadata for position, target, FOV, and capture recommendations. `Reset View` is mode-aware and returns to the current scene mode’s recommended presentation framing.

## Presentation Modes

- `Review Mode`: keeps the current scene story but trims live-view noise for review graphics
- `Capture Mode`: pauses motion, favors export-safe label density, and works with the capture-safe background toggle
- `Diagram Mode`: prioritizes analytical readability for architecture, energy, and thermal graphics
- `Beauty Technical Mode`: presentation-first stills with minimal annotation

These modes sit on top of the scene modes. `sceneMode` still controls what story the viewer teaches; `presentationMode` controls what kind of asset you are producing.

## Capture Workflow

Prompt 11 adds a dedicated capture workflow in the HUD:

- label profiles:
  - `Full Engineering Labels`
  - `Reduced Review Labels`
  - `Capture Labels`
  - `No Labels`
- capture helpers:
  - `Hide HUD for Capture`
  - `Capture-Safe Background`
  - `Reset to Capture Defaults`
  - `Copy Current Camera State`
- case-study asset buttons that apply named still-capture targets

The full screenshot matrix lives in [docs/capture-plan.md](/C:/Users/Zhane/Documents/New%20project/spacecraft/docs/capture-plan.md).

## Engineering Realism Checklist

The final release pass uses this checklist to keep the viewer engineering-review ready:

- compact reactor, not a fantasy engine
- shield between reactor and downstream bus
- closed Brayton power conversion represented clearly
- large heat-rejection radiators near the power unit
- long separation boom for radiation and thermal standoff
- small electric thrusters, not chemical rocket bells
- visible PMAD and system integration logic
- thermodynamics-driven geometry
- minimal sci-fi styling
- clear distinction between structure, thermal flow, electrical flow, and propulsion

## Subsystem Explanations

Each selectable subsystem includes:

- purpose
- placement rationale
- realism note
- visual color meaning
- related energy flow
- suggested focus preset

Current subsystem coverage:

- `Compact Fission Reactor`
- `Radiation Shield`
- `Closed Brayton Power Unit`
- `Heat Rejection Radiators`
- `Separation Boom`
- `Spacecraft Bus`
- `Power Management and Distribution`
- `Propellant Tanks`
- `Science Payload`
- `Electric Thrusters`

## Energy Chain the Viewer Explains

```text
reactor heat
-> closed Brayton power conversion
-> electric power
-> PMAD and bus loads
-> electric thrusters
-> waste heat
-> heat rejection radiators
```

The current UNKNOWN02 relayout also makes that chain physically legible: radiator manifold into boom, boom into bus, bus into tank rack, and tank rack into the propulsion frame.

## Engineering Realism Pass

Prompt 08 adds a stricter engineering-assembly pass without changing the top-level architecture. The viewer now places more geometric density where real spacecraft would concentrate hardware:

- reactor casing bands, support members, and short thermal-link cues
- shield-side support structure and more mass-like layering
- Brayton machinery mounts, exchanger piping, and equipment framing
- radiator-root hinges, truss cues, and segmented panel backing logic
- bus-side service boxes, rails, and asymmetrical packaging
- tank saddles and clearer feed-routing cues
- a more explicit propulsion frame for the electric thrusters

The goal is not flash. The goal is to make the craft read more like a plausible system under design review.

## Prompt 10 Forward-Section Pass

Prompt 10 pushes realism into the places where engineering packaging matters most:

- the boom now lands into a clearer adapter frame instead of fading into the bus side
- PMAD reads as grouped bus-side infrastructure rather than a single anonymous box, with a clearer backplane and short branch terminations
- the tank rack has more obvious saddles, manifold hardware, and feed routing toward propulsion
- the payload reads more like an instrument bench than a second service module
- electric propulsion is tightened into a restrained four-thruster cluster with clearer brackets, a stronger cluster root, and interface hardware

The pass is intentionally selective. Detail density increases at interfaces, mounts, and routing nodes rather than becoming random clutter over the whole spacecraft.

## Closed Brayton Cycle

In `Energy View`, the in-world Brayton anchor stays near the power-conversion hardware while a compact 2D inset summarizes the cycle. The loop labels:

- `Compressor: P up, T up`
- `Qin at high pressure`
- `Turbine: P down, T down`
- `Alternator / Generator`
- `Electric Output`
- `Qout to Radiators`

Working-fluid particles follow the loop with a restrained cold-to-hot-to-cold color progression.

## Legend Behavior

- `Clean View`: legend hidden by default
- `Engineering View`: compact structure legend
- `Energy View`: expanded energy legend for Brayton states, power flow, and propulsion output
- `Thermal View`: thermal legend focused on hot source, conversion gradient, rejected heat, and protected zone

Color intent remains consistent:

- red/orange = reactor thermal input or hot-side thermal flow
- blue = cold working fluid, radiator side, or rejected heat return
- orange = warm or compressed working fluid
- white/yellow = electric power
- purple/blue = electric propulsion plume
- gray = spacecraft structure
- amber/gold = radiation shield or protected-zone meaning

## Why the Radiators Are Large

Radiators dominate the vehicle because this is a heat-management problem before it is a propulsion-image problem. Any heat not converted into useful electrical power still has to be rejected to space.

They are not solar panels. They are waste-heat rejection hardware.

## Why the Reactor Is Separated

The reactor is compact because it is a thermal source, not a thrust engine. The shield and boom separate that source from the bus and payload side so the vehicle reads like a plausible nuclear-electric architecture rather than a single fantasy fuselage.

## Accessibility Notes

- subsystem and mode selection use keyboard-accessible buttons
- inspection content is organized with semantic headings and description lists
- high-contrast panel styling is preserved against the dark scene background
- animations freeze automatically when the system preference requests reduced motion
- the HUD collapses into a lower-screen panel footprint on narrow layouts instead of covering the whole viewport

## Run the Viewer

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, typically `http://127.0.0.1:5173/`.

Additional checks:

```bash
npm run test
npm run build
npm run preview
```

## Deployment

Use a standard Vite deployment on Vercel:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Current live deployment:

- [unknown02.vercel.app](https://unknown02.vercel.app)

Release-prep notes, a GitHub-ready PR title, and a deployment checklist are maintained in [docs/release-notes.md](/C:/Users/Zhane/Documents/New%20project/spacecraft/docs/release-notes.md).

Final-nail technical truth docs live in [docs/technical_truth.md](/C:/Users/Zhane/Documents/New%20project/spacecraft/docs/technical_truth.md), [docs/spacecraft_architecture.md](/C:/Users/Zhane/Documents/New%20project/spacecraft/docs/spacecraft_architecture.md), and [docs/visual_realism_rules.md](/C:/Users/Zhane/Documents/New%20project/spacecraft/docs/visual_realism_rules.md). These are the source-of-truth guardrails for future spacecraft, mode, and release prompts.

## Repository Contents

Application files:

- `package.json`, `vite.config.js`, `index.html`
- `src/` for app code, scene composition, inspection UI, overlays, and tests
- `test/` for shared test setup

Prompt-pack and reference material:

- `prompts/` for staged build prompts
- `PROMPT_INDEX.md` for prompt sequencing and deliverables
- `HOW_TO_USE_PROMPTS.md` for workflow instructions
- `templates/` for reusable documentation and workflow templates
- `reference_images/` for visual references
- `sources/` for technical basis notes

## Prompt Pack Workflow

This repository still includes the staged prompt workflow used to bootstrap and extend the project. The current app corresponds to the combined outcome of:

- Prompt 01: repo bootstrap, viewer architecture, control shell
- Prompt 02: realistic procedural spacecraft geometry and subsystem layout
- Prompt 03: Brayton cycle overlay, energy-flow routes, and restrained animated particles
- Prompt 04: inspection modes, subsystem cards, legend, and technical UI
- Prompt 04.2: UNKNOWN02 rename, connected vehicle relayout, and continuity cleanup
- Prompt 08: engineering realism pass for mounts, interfaces, thermal roots, and forward-section packaging
- Prompt 10: forward-section refinement for bus packaging, PMAD visibility, tank support logic, payload differentiation, and electric-propulsion integration
- Prompt 11: presentation modes, capture helpers, grouped camera presets, and case-study asset planning
- Prompt 12: final NASA-style QA, release documentation, realism checklist, and GitHub/Vercel release preparation
- Beautiful Sun Prompt 01-02: persistent orbital environment bible and fixed-direction hero sun rig
- Beautiful Sun Prompt 03-04: premium Earth limb, atmosphere layers, and persistent composition/camera discipline
- Final Nail Prompt 02-03: spacecraft architecture rebuild and close-up realism density for reactor, shield, Brayton, radiators, boom, PMAD, tanks, and electric thrusters

## Limitations

ZRT UNKNOWN02 is a technical concept visualization. It is not:

- a certified spacecraft design
- a flight-qualified reactor architecture
- a validated thermal sizing study
- a launch approval document
- a safety certification

The prompt pack is development scaffolding, not engineering validation.

## Credits

Designed by ZRT UNKNOWN02.
