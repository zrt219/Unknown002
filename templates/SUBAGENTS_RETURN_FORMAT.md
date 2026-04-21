# Subagent Return Format

Each subagent should report in this format:

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

## Example

```text
Subagent: Thermal Systems Agent
Role: Validate radiator realism and heat-flow visual model.
Inputs reviewed: current scene, spacecraft config, README section on thermal management.
Key findings: Radiators are too small relative to power unit; heat arrows lack directionality.
Recommended implementation: enlarge panels, add segmentation, add waste-heat arrows from power unit to radiator manifolds.
Risks and unknowns: actual radiator sizing is conceptual; avoid claiming numerical validation.
Files likely affected: Radiators.jsx, EnergyFlowOverlay.jsx, spacecraftConfig.js, README.md.
README updates: update Heat Rejection Radiators section.
CASE_STUDY updates: update Why Radiators Dominate section.
Acceptance criteria: radiators visually dominate; heat arrows are toggleable; no solar-panel labeling.
```
