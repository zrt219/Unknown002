# Prompt 12 — Final NASA-Style QA, Audit, and Release Preparation

Finish the ZRT UNKNOWN02 Technical Viewer with a final, rigorous polish pass.

This is the release-preparation step.
Treat the project like it is about to be shown in a serious internal engineering review and published as a polished GitHub / Vercel portfolio artifact.

Important:
Use phrases like:
- NASA-style
- internal-review quality
- engineering-review ready
- aerospace concept presentation quality

Do not imply official NASA endorsement or affiliation.

## First instruction: spawn subagents before coding

Spawn these subagents immediately:

1. QA Agent
   - Run a build-oriented review.
   - Check for broken states, console errors, interaction regressions, and dead controls.
   - Verify the core flows: mode switching, camera presets, selection, overlays, animation toggles.

2. Performance Agent
   - Review render cost, unnecessary re-renders, expensive overlays, and animation loops.
   - Recommend optimizations that preserve quality.

3. Documentation and README Agent
   - Audit the project docs.
   - Recommend a professional README structure for GitHub and Vercel.
   - Ensure the project story, realism philosophy, features, and usage are clearly explained.

4. Engineering Integrity Agent
   - Review the final viewer for conceptual consistency:
     - reactor placement
     - shield placement
     - Brayton logic
     - radiator dominance
     - boom separation
     - bus / PMAD / tank / thruster arrangement
   - Flag anything that still weakens realism.

5. Release Review Agent
   - Review the project like an external technical reviewer.
   - Point out anything that feels unfinished, inconsistent, or confusing.

The main agent must summarize these subagent findings, then apply final fixes.

## Main task

Perform the final QA and release-prep pass.

## Required final work

### A. Functional QA
Verify and fix:
- mode switching works correctly
- camera presets land in good positions
- selection / focus behavior is stable
- fit-to-selection works
- toggle states are coherent
- overlays do not get stuck or conflict
- no panel overflow bugs
- no invisible click traps
- labels do not disappear incorrectly
- reduced-motion behavior works
- UI behaves on desktop and laptop widths

### B. Visual cleanup audit
Fix:
- inconsistent spacing
- duplicated or awkward labels
- overlapping cards
- unnecessary text repetition
- alignment issues
- panel section rhythm
- uneven button sizing
- naming inconsistencies
- unfinished placeholder text

### C. Performance cleanup
Optimize:
- overlay update loops
- particle systems
- unnecessary per-frame calculations
- label update strategy
- large repeated geometry via reuse or instancing
- memoization where useful
- expensive debug helpers off by default

### D. Documentation package
Create or refine a professional README.

Required README sections:
1. Project title
2. One-paragraph concept summary
3. Why this viewer exists
4. Spacecraft architecture overview
5. Engineering realism philosophy
6. Viewer features
7. Inspection modes
8. Camera presets
9. Overlay / energy-flow system
10. Controls
11. Tech stack
12. Local development setup
13. Build and deploy
14. Suggested case-study captures
15. Known limitations / future improvements
16. Credits / authorship

### E. Engineering realism checklist
Add a checklist in README or docs.

Required checklist items:
- compact reactor, not a fantasy engine
- shield between reactor and downstream bus
- closed Brayton power conversion represented clearly
- large heat-rejection radiators near the power unit
- long separation boom for radiation / thermal standoff
- small electric thrusters, not chemical rocket bells
- visible PMAD / system integration logic
- thermodynamics-driven geometry
- minimal sci-fi styling
- clear distinction between structure, thermal flow, electrical flow, and propulsion

### F. Release notes and PR prep
Generate:
- a concise release summary
- a GitHub-ready PR title
- a PR description with:
  - what changed
  - what was improved
  - what remains
- a short deployment note for Vercel

### G. Optional nice-to-have if straightforward
If practical without destabilizing the project:
- add an About / Method note
- add a What makes this realistic? section inside the viewer
- add a small capture checklist card
- add URL-state support for a few key modes or presets

## Required final output
Return:
1. subagent summaries
2. QA findings and fixes
3. performance findings and fixes
4. documentation files created / updated
5. final README outline
6. realism checklist
7. PR title
8. PR description
9. deployment notes
10. list of any remaining limitations

## Quality bar
The final result should feel like a polished, technically literate, review-ready engineering viewer that can live credibly on GitHub and Vercel.
