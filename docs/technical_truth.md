# UNKNOWN02 Technical Truth

## Purpose

This document defines the physical and architectural truth package that all later UNKNOWN02 prompts must obey. It is the repo-local authority for what the viewer is allowed to communicate.

## Concept Boundary

UNKNOWN02 is a browser-based technical concept viewer for a realistic nuclear-electric propulsion spacecraft. It is not a flight-qualified spacecraft design, reactor safety analysis, launch approval package, agency-endorsed system, crewed capsule, atmospheric vehicle, spaceplane, or chemical rocket.

References and source notes in `sources/SOURCES.md` guide visual and architectural plausibility. They do not validate reactor safety, radiator sizing, Brayton efficiency, fuel availability, nuclear launch approval, mission performance, or certification.

## Locked System Chain

The spacecraft must preserve this physical chain:

`compact fission reactor -> directional radiation shield -> closed Brayton power conversion -> radiator roots / waste-heat manifolds -> long separation boom -> protected spacecraft bus -> PMAD / avionics -> propellant storage and optional payload support -> small electric thruster cluster`

The energy story is:

`reactor heat -> Brayton conversion -> generator electrical output -> PMAD conditioning and distribution -> bus loads and electric thrusters`

The thermal story is:

`reactor heat -> Brayton hot side -> unconverted waste heat -> radiator manifolds -> radiator panels -> space`

## Fixed Subsystems

| Subsystem | Locked role | Fixed placement logic |
| --- | --- | --- |
| Compact Fission Reactor | Localized thermal source. | Reactor end of the vehicle, isolated from bus/payload systems. |
| Radiation Shield | Directional protective mass. | Between reactor and downstream bus/payload line of sight. |
| Closed Brayton Power Unit | Compressor, heat exchanger, turbine, alternator/generator, and loop machinery. | Near reactor heat input and radiator heat rejection interfaces. |
| Heat Rejection Radiators | Primary waste-heat rejection hardware. | Dominant surfaces tied to the power-conversion hot/cold-side path. |
| Separation Boom | Radiation and thermal standoff structure. | Long truss between reactor/power head and protected bus side. |
| Spacecraft Bus | Avionics, communications, control, and service hardware. | Protected side of the boom, away from reactor-facing exposure. |
| PMAD | Power management and distribution. | Integrated with bus electronics and routed to loads/thrusters. |
| Propellant Storage | Reaction-mass storage for electric propulsion. | Near propulsion section with explicit saddles, manifolds, and feed lines. |
| Payload / Comm / Support Hardware | Optional mission hardware. | Attached to bus-side structure only when mechanically justified. |
| Electric Thrusters | Low-thrust, high-efficiency propulsion. | Compact cluster on a structural propulsion frame with subtle plume cues. |

## Fixed vs Flexible

Fixed:
- subsystem order and protected-side logic
- compact reactor
- shield between reactor and bus/payload side
- closed Brayton conversion role
- large radiator dominance
- long separation boom
- visible PMAD/electrical distribution role
- compact propellant storage for electric thrusters
- restrained electric thruster plume
- one permanent orbital world interpreted by modes

Flexible:
- exact procedural geometry
- detail density and component count
- label wording if the engineering meaning is preserved
- camera framing details
- non-critical support boxes, brackets, sensors, and harnesses
- environment exposure and material emphasis by mode

## Technical Rationale

1. Relative subsystem order matters because nuclear-electric propulsion is a chain of heat production, conversion, power conditioning, thermal rejection, and low-thrust electric propulsion.
2. The shield sits between the reactor and bus-side systems because radiation protection is directional; it is not decorative mass.
3. The boom length matters because distance reduces radiation and thermal load on sensitive equipment.
4. Radiator placement and scale matter because unused reactor heat must be rejected to space by radiation.
5. PMAD and bus hardware represent power conditioning, avionics, communications, and service electronics, not a crew cabin or control room.
6. Propellant storage should communicate compact reaction-mass storage with feed routing, not large chemical stages.
7. Electric thrusters should look like small grid/annular electric propulsion devices with faint blue-violet output, not bell nozzles with flames.
8. Scientific plausibility is communicated by compact reactor hardware, directional shielding, visible heat rejection, exposed structure, functional routing, modest thrusters, and honest limitation language.

## Energy and Thermal Truth

The reactor supplies heat. The Brayton unit converts part of that heat into shaft/electrical power. PMAD conditions that electrical output for bus loads and electric propulsion. The system does not turn all thermal energy into useful electricity; waste heat must be continuously routed to radiators and rejected to space.

Energy View should teach conversion and distribution. Thermal View should teach rejected heat, radiator dominance, shielded-zone meaning, and why the vehicle shape is thermally constrained.

## Prohibited Misreadings

UNKNOWN02 must not read as:
- a launch rocket
- a chemical propulsion stage
- a crew capsule
- a spaceplane
- an atmospheric aircraft
- a sleek fantasy warship
- a random truss sculpture
- a glowing reactor-drive engine
- a cockpit/window/fuselage vehicle
- a certified or agency-approved nuclear spacecraft design

## Reviewer Rebuttal Checklist

If someone says "this is not accurate," UNKNOWN02 should be able to answer with these grounded reasons:

1. The vehicle follows a clear nuclear-electric chain from reactor heat to Brayton conversion to PMAD to electric propulsion.
2. The reactor is compact and separated from sensitive systems.
3. The shield is directional and placed between the reactor and protected bus side.
4. The long boom creates radiation and thermal standoff.
5. Radiators dominate because unconverted reactor heat must be rejected to space.
6. Brayton hardware is treated as conversion machinery, not a decorative engine nozzle.
7. PMAD is visible as power-conditioning infrastructure.
8. Propellant storage and feed paths support electric propulsion without implying chemical launch propulsion.
9. Thruster plume cues are faint, blue-violet, and non-flame-like.
10. The viewer explicitly states that it is a concept visualization, not flight certification or safety validation.

## Prompt Preservation Rule

Later prompts may improve geometry, materials, UI, camera, documentation, and capture systems. They must not break the locked system chain, shrink the thermal story, move sensitive systems to the reactor side of the shield, make thrusters chemical, or replace the permanent orbital world per mode.
