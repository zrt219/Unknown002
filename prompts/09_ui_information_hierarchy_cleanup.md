# Prompt 09 — UI, Information Hierarchy, and Overlay Cleanup

Continue the ZRT UNKNOWN02 Technical Viewer.

The spacecraft architecture is now established.
The next task is to make the viewer feel review-ready, not overloaded.

Right now the viewer has a lot of valuable information, but too much of it competes at once:
- floating labels
- Brayton overlay
- shield cone
- energy lines
- radiators
- legend
- side panel
- subsystem selection
- grid / axes
- annotations in the 3D scene

This prompt is about information hierarchy.
The objective is to keep the engineering content while making the visual experience calmer, more legible, and more intentional.

## First instruction: spawn subagents before coding

Spawn these subagents immediately:

1. UX Information Architecture Agent
   - Audit the current control hierarchy in the left panel.
   - Recommend how to group controls, reduce cognitive overload, and improve scan order.
   - Identify which controls should be promoted, collapsed, grouped, or hidden unless relevant.

2. Technical Visualization Agent
   - Review all in-scene overlays and labels.
   - Identify which ones should live:
     - in the 3D scene,
     - in a 2D HUD inset,
     - in the side panel,
     - or only on subsystem selection.
   - Recommend a cleaner information layering model.

3. Readability and Typography Agent
   - Audit text size, card density, spacing, and label legibility.
   - Recommend improvements for screenshots, desktop viewing, and high-DPI monitors.
   - Ensure the panel feels premium and intentional.

4. Mode Design Agent
   - Review the existing inspection modes.
   - Propose a clearer separation between:
     - Clean View
     - Engineering View
     - Energy Flow View
     - Thermal View
     - Presentation View
   - Recommend what each mode should reveal or suppress.

5. Accessibility and Reduced-Motion Agent
   - Review panel usability, keyboard navigation, contrast, and animation handling.
   - Recommend refinements that improve comfort without degrading technical richness.

The main agent must summarize the subagent findings and implement a coherent hierarchy update.

## Main task

Redesign the viewer’s information hierarchy so it feels like a polished aerospace review tool.

## Required changes

### A. Create cleaner inspection modes
Rework the mode system so each mode has a clear purpose and visual contract.

Suggested modes:

1. Clean View
- spacecraft only
- minimal labels
- no dense engineering overlays
- optional subtle subsystem tags only on hover or selection
- suitable for screenshots and framing

2. Engineering View
- balanced subsystem labels
- selection outlines
- structure and placement context
- limited technical notes
- enough annotation to teach architecture without flooding the scene

3. Energy Flow View
- Brayton overlay
- power flow lines
- heat rejection arrows
- working-fluid animation
- selected energy labels only
- no unnecessary structural label spam

4. Thermal View
- radiator emphasis
- heat rejection routing
- shielded / reactor-facing geometry context
- optional shielded volume visualization
- reduced bus clutter

5. Presentation View
- the most screenshot-friendly mode
- clean composition
- limited label set
- no grid by default
- balanced contrast

Implement a mode system that actually changes scene content, not just a highlighted button.

### B. Reduce in-scene clutter
The current floating labels are valuable but too numerous when all are on.

Implement rules such as:
- unselected labels collapse to shorter titles
- distant labels fade or simplify
- overlapping labels auto-offset or hide
- only the selected subsystem shows full descriptive text
- leader lines stay subtle
- grouped subsystem labels can share a cluster strategy

### C. Move the main Brayton explanation to a cleaner place
The current in-world Brayton loop is useful, but it competes with the vehicle.

Create a dual-layer solution:
- keep a small in-world anchor near the power unit
- move the detailed Brayton schematic to an optional 2D HUD inset or floating engineering card
- let the user pin / unpin the schematic
- allow it only in Engineering View or Energy Flow View

The schematic should include:
- compressor
- heat addition
- turbine
- generator / alternator
- heat rejection
- working-fluid color states
- simplified flow arrows

### D. Improve panel structure
Refactor the left panel for better scan order.

Suggested section order:
1. Title / concept intro
2. Mode selection
3. Camera presets
4. Viewer layers
5. Animation controls
6. Subsystem directory
7. Selected subsystem card
8. Visual legend
9. Inspection status
10. Accessibility / review notes
11. footer / authorship

Use clear spacing and card grouping so the panel feels less like a long list and more like a structured instrument panel.

### E. Improve typography and component polish
Refine:
- section spacing
- button consistency
- card padding
- heading hierarchy
- line length
- label contrast
- microcopy clarity

The tone should feel like high-end technical software, not a game menu.

### F. Smarter visibility logic
Implement intelligent visibility rules, for example:
- if in Clean View, automatically reduce labels and overlays
- if a subsystem is selected, surface the most relevant overlays for that subsystem
- if Energy Flow View is active, favor Brayton / power / heat content over structural directory emphasis
- if reduced motion is enabled, freeze particle animation and plume motion gracefully

### G. Better selection behavior
When a subsystem is selected:
- emphasize that subsystem visually
- simplify unrelated labels
- scroll or focus the selected subsystem card smoothly
- optionally expose a show-only-related-systems toggle

## Technical requirements
- preserve existing functionality unless a better replacement is implemented
- do not break keyboard navigation
- keep the UI responsive
- no console errors
- no layout overflow bugs
- work well on wide desktop and narrow laptop widths

## Deliverables
Return:
1. Subagent summaries
2. Final mode definitions
3. Panel structure changes
4. Overlay / label strategy changes
5. Note on accessibility improvements
6. List of any new components or hooks created

## Quality bar
After this pass, the viewer should feel less crowded, more authoritative, and easier to present in screenshots or reviews.
