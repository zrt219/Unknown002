# UNKNOWN02 Master Directive Execution Map

## Purpose

This document translates `prompts/unknown02_final_nail_prompt_repo/00_MASTER_DIRECTIVE.md` into the working execution map for the final UNKNOWN02 build sequence. It exists so every later prompt can improve the viewer without drifting away from one coherent nuclear-electric spacecraft and one permanent orbital scene.

## Current Repo Audit

| Priority | Current evidence | Blocker files / areas | Risk | Next prompt owner |
| --- | --- | --- | --- | --- |
| 0. Model realism and architecture truth | `src/data/spacecraftConfig.js` already encodes the correct chain: reactor, shield, Brayton unit, radiators, boom, bus, PMAD, tanks, payload, thrusters. | `ReactorSubsystem.jsx`, `RadiationShield.jsx`, `BraytonPowerUnit.jsx`, `Radiators.jsx`, `SpacecraftBus.jsx`, `PropellantTanks.jsx`, `Thruster.jsx`, `IntegratedStructure.jsx` | The model can still read as a dressed-up blockout if interface detail stays generic. | Prompt 02 |
| 1. Sun | `src/environments/sunLightRig.js` fixes one warm left-side sun/key-light direction. | `SceneEnvironment.jsx`, `SceneLighting.jsx`, `EarthLimb.jsx` | Sun can still feel sprite-like if halo/limb/lighting are not tuned together. | Prompt 05 |
| 2. Background scene | `src/environments/orbitalSceneConfig.js` defines one orbital foundation. | `SceneEnvironment.jsx`, `environmentConfig.js` | The background must feel composed, not like a planet pasted behind the model. | Prompt 04 |
| 3. Accurate Earth | `src/environments/earthPresentationConfig.js` and `EarthLimb.jsx` provide Earth surface, clouds, atmosphere, and city-light cues. | `EarthLimb.jsx` | Earth is still procedural and illustrative, not geospatially accurate. | Prompt 05 |
| 4. Accurate spacecraft design | Current layout is connected and follows the right order. | Geometry subsystem files listed under Priority 0 | Technical reviewers may still question the reactor, Brayton, bus, tank, and thruster detail density. | Prompt 02 and Prompt 03 |
| 5. Beautiful camera controls | `cameraPresets`, `CameraTools`, and freer OrbitControls are implemented. | `modeCameraSystem.js`, `orbitalCameraProfiles.js`, `CameraPresets.jsx` | Camera presets can be technically useful but not yet premium/compositional enough. | Prompt 06 |
| 6. Stable single permanent scene | Modes now reinterpret one orbital world instead of swapping worlds. | `modePresentationProfiles.js`, `SceneEnvironment.jsx`, `SceneLighting.jsx` | Future mode work must not reintroduce disconnected scenes. | Prompt 07 |
| 7. Tooltips / references / external links | README/CASE_STUDY explain intent; sources exist in `sources/SOURCES.md`. | Sidebar components and docs | References are not yet surfaced as useful viewer UI. | Prompt 08 |
| 8. Sidebar clarity | Mode-aware curation exists through `AppShell.jsx` and `modePresentationProfiles.js`. | `AppShell.jsx`, `UIControls.jsx`, `SubsystemCard.jsx` | Rich sidebar can become clutter if every prompt adds controls. | Prompt 08 and Prompt 09 |

## Locked Philosophies

### Permanent Scene Philosophy

UNKNOWN02 lives in one permanent orbital world: one sun direction, one Earth limb, one starfield/galaxy composition, one spacecraft staging axis, and one baseline camera language. Scene modes may adjust exposure, environment opacity, material emphasis, labels, overlays, and sidebar hierarchy, but they must not replace the world.

### Spacecraft Realism Philosophy

The viewer must read as a heat-management and power-conversion machine. The physical chain is compact reactor -> directional shield -> closed Brayton conversion -> radiator roots/manifolds -> long separation boom -> protected bus/PMAD -> tanks/payload support -> compact electric thrusters. Geometry detail belongs at functional interfaces: mounts, collars, manifolds, saddles, harnesses, truss nodes, heat exchangers, PMAD backplanes, tank valves, and thruster roots.

### Mode Layering Philosophy

Clean View is the hero/silhouette view. Engineering View explains structure and placement. Energy View explains reactor heat to Brayton conversion to PMAD distribution to propulsion and waste heat. Thermal View explains radiator dominance, protected-zone logic, and rejected heat. These are layers over the same spacecraft, not separate products.

### Documentation / Release Philosophy

Each prompt must leave behind durable evidence: updated docs when product truth changes, tests/build evidence when code changes, and a reality check that names what improved and what remains inaccurate. GitHub/Vercel deployment is part of the intended release loop; if auth is unavailable, the exact fallback commands and blocker must be reported.

## Prompt Run Map

| Prompt | Branch | Primary goal | Required subagents | Likely files touched | Verification | Reality-check focus |
| --- | --- | --- | --- | --- | --- | --- |
| 01 Technical Truth | `codex/final-nail-01-truth` | Lock technical truth and realism docs. | Technical Realism, Nuclear-Electric Architecture, Thermal Management, Propulsion, Documentation | `docs/technical_truth.md`, `docs/spacecraft_architecture.md`, `docs/visual_realism_rules.md` | Markdown review, `npm test`, `npm run build` | Truth package exists and later prompts have authority. |
| 02 Rebuild Spacecraft Architecture | `codex/final-nail-02-architecture` | Rebuild placeholder-feeling geometry around credible subsystem interfaces. | Spacecraft Architecture, Structural Integration, Propulsion Geometry, Thermal Layout, QA | Subsystem components, `spacecraftConfig.js`, docs | Tests, build, browser screenshots | Model reads engineered, not assembled from blocks. |
| 03 Detail Density | `codex/final-nail-03-detail-density` | Add believable small-scale detail at functional interfaces. | Architecture, Thermal, Propulsion, Performance, QA | Geometry primitives/subsystems | Tests, build, screenshots | Detail supports function, not greeble spam. |
| 04 Permanent Luxury Orbital Scene | `codex/final-nail-04-orbital-scene` | Make the single scene premium and stable. | Environment, Composition, Rendering, QA | Environment config/components, CSS/docs | Build, browser screenshots | One composed orbital world. |
| 05 Sun / Earth / Background | `codex/final-nail-05-sun-earth` | Polish sun, Earth limb, atmosphere, and background depth. | Sun/Lighting, Earth/Background, Performance, QA | `EarthLimb.jsx`, `SceneEnvironment.jsx`, `SceneLighting.jsx` | Build, browser screenshots | Sun/Earth sell orbit without overpowering craft. |
| 06 Camera / Presentation | `codex/final-nail-06-camera` | Make camera controls and presets premium. | Camera, UX, QA | Camera components/config | Tests, build, browser interaction smoke | Camera feels deliberate, not stiff. |
| 07 Mode System Over One Scene | `codex/final-nail-07-modes` | Strengthen layered mode interpretation without scene swaps. | Mode System, Rendering, UI, QA | Mode systems, overlays, CSS | Tests, build, screenshot hash checks | Modes differ clearly while world stays fixed. |
| 08 Tooltips / References / Sidebar | `codex/final-nail-08-sidebar` | Add useful reference/tooltips without clutter. | UI, Documentation, Accessibility, QA | Sidebar/card components, docs | Tests, build | Viewer explains itself like a review tool. |
| 09 Capture Studio / Labels | `codex/final-nail-09-capture` | Finish repeatable capture/label workflow. | Capture, Camera, UI, QA | Capture studio, label systems, docs | Tests, build, screenshots | README/case-study stills become repeatable. |
| 10 GitHub / Vercel Always Deploy | `codex/final-nail-10-release-loop` | Hardening deployment path and fallback notes. | Deployment, QA, Documentation | Vercel/GitHub docs/config if needed | Build, deploy preview if auth works | Release path is known and repeatable. |
| 11 Final QA / Case Study | `codex/final-nail-11-final-qa` | Final verification, docs, case study, known limitations. | QA, Documentation, Deployment | README, CASE_STUDY, release notes | Full tests/build/browser/deploy | Viewer is shippable as concept visualization. |

## Blocker File Map

- Spacecraft geometry: `src/components/scene/subsystems/ReactorSubsystem.jsx`, `RadiationShield.jsx`, `BraytonPowerUnit.jsx`, `Radiators.jsx`, `SpacecraftBus.jsx`, `PropellantTanks.jsx`, `ElectricPropulsion.jsx`, `IntegratedStructure.jsx`, `src/components/scene/primitives/Thruster.jsx`.
- Scene/environment: `src/components/scene/SceneEnvironment.jsx`, `SceneLighting.jsx`, `EarthLimb.jsx`, `src/environments/orbitalSceneConfig.js`, `sunLightRig.js`, `earthPresentationConfig.js`.
- Mode system: `src/modes/modePresentationProfiles.js`, `src/systems/modeMaterialSystem.js`, `modeAnnotationSystem.js`, `modeVisibilitySystem.js`, `modeCameraSystem.js`.
- UI/sidebar: `src/components/layout/AppShell.jsx`, `src/components/ui/UIControls.jsx`, `SubsystemCard.jsx`, `VisualLegend.jsx`, `CaptureStudio.jsx`.
- Camera/capture: `src/data/capturePlan.js`, `src/systems/orbitalCameraProfiles.js`, camera preset data in `spacecraftConfig.js`.
- Documentation/release: `README.md`, `CASE_STUDY.md`, `docs/`, `sources/SOURCES.md`, `.vercel/`.

## Subagent Operating Model

Each prompt should spawn only bounded agents that materially improve quality. Every subagent should report: scope, files inspected, findings, risks, recommended implementation, acceptance criteria, and documentation impact. The main agent remains responsible for synthesis, implementation, verification, and final reality check.

## Branch and Deploy Plan

- Preferred branch naming: `codex/final-nail-XX-topic`.
- Local checks for code prompts: `npm test`, `npm run build`, and a browser smoke check against a local static/preview server.
- Release checks: commit, push current branch, deploy Vercel preview for project `unknown02`, verify preview loads and mode switching works.
- GitHub fallback if credentials fail:
  ```powershell
  git status --short
  git add <changed files>
  git commit -m "Final nail prompt XX: <topic>"
  git push -u origin <branch>
  ```
- Vercel fallback if CLI auth or profile write fails:
  ```powershell
  npm install
  npm run build
  npx vercel deploy --prebuilt --target=preview
  ```

## Completion Gate

No prompt is complete until the report includes changed files, verification evidence, GitHub push status, Vercel preview status, known issues, and a reality check: what improved, what remains inaccurate, and what the next prompt should target.
