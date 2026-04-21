# Prompt 11 — Presentation Modes, Case-Study Capture, and Review Assets

Continue the ZRT UNKNOWN02 Technical Viewer.

The model and viewer are now becoming credible.
The next step is to make the project easier to present in a serious design review, portfolio case study, or NASA-style concept presentation.

This prompt is not about inventing new architecture.
It is about presentation discipline:
- view presets that actually frame the subject well
- screenshot / capture quality
- clearer comparison modes
- case-study asset generation
- internal review style presentation states

## First instruction: spawn subagents before coding

Spawn these subagents first:

1. Camera and Framing Agent
   - Audit current camera presets for usefulness and composition.
   - Recommend better angles, distances, FOVs, and target offsets.
   - Define presets that are excellent for both inspection and screenshots.

2. Presentation Design Agent
   - Recommend a clean set of presentation modes that feel like aerospace design-review graphics.
   - Reduce scene noise when generating images.

3. Case Study Agent
   - Identify which views and captures would be most valuable in a case-study README, portfolio page, or Substack-style technical article.
   - Recommend exact image list and captions.

4. Annotation Strategy Agent
   - Review how annotations should differ between:
     - live viewer usage
     - screenshot mode
     - case-study diagrams
   - Recommend a reduced label set for polished captures.

5. QA Capture Agent
   - Recommend a repeatable export capture checklist so images are consistent.

The main agent must synthesize the subagent findings and implement presentation tooling.

## Main task

Turn the viewer into a tool that can generate presentation-quality review assets.

## Required features

### A. Refined camera presets
Rebuild camera presets so they are both useful and visually strong.

Required preset categories:

System-level
- Overview Side
- Overview 3/4
- Overview Top / Plan
- Energy Flow Overview

Subsystem close-ups
- Reactor Close
- Shield Close
- Brayton Unit Close
- Radiator Root Close
- Radiator Overview
- Boom Structure Close
- Bus Systems Close
- Tanks and PMAD Close
- Thruster Cluster Close
- Payload Close

Presentation presets
- Hero Technical View
- Clean Side Presentation
- Thermal Story View
- Propulsion Story View

Each preset should define:
- camera position
- target
- FOV / zoom
- whether pan is locked
- whether grid is on
- which labels or overlays are active by default

### B. Presentation modes
Add scene states optimized for capturing polished images.

Suggested modes:
- Review Mode
- Capture Mode
- Diagram Mode
- Beauty Technical Mode

### C. Screenshot helper system
Implement a capture workflow.

Possible features:
- Hide UI for Capture
- Minimal Labels
- Reset to Capture Defaults
- Copy current camera state
- Show capture-safe background
- Fit selected subsystem for capture

### D. Case-study asset checklist
Create a data structure or config file describing the required case-study captures.

At minimum include:
1. full overview side
2. full overview 3/4
3. reactor + shield close-up
4. Brayton power unit close-up
5. radiator thermal view
6. boom structural detail
7. bus + PMAD + tanks view
8. electric propulsion close-up
9. energy flow composite view
10. clean beauty technical view

Each entry should include:
- title
- recommended mode
- recommended camera preset
- which overlays are on
- short caption

### E. Review-friendly label sets
Add label profiles:
- Full Engineering Labels
- Reduced Review Labels
- Capture Labels
- No Labels

### F. Consistency polish
Make sure:
- naming is consistent throughout the project
- if the project is ZRT UNKNOWN02, that name is used consistently
- if name should be configurable, implement a central config
- no drift between UI, metadata, README text, and capture assets

## Documentation output required
Generate or update a file such as:
- docs/capture-plan.md
or
- src/data/capturePresets.ts

with a clear list of required screenshots and their purpose.

## Deliverables
Return:
1. subagent findings
2. final camera preset list
3. final presentation mode list
4. capture workflow summary
5. generated case-study asset list
6. note on any naming cleanup performed

## Quality bar
After this pass, the viewer should be able to produce polished images suitable for a serious case study or concept review deck.
