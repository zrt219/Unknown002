# UNKNOWN02 Spacecraft Architecture

## Purpose

This document defines the physical layout, subsystem interfaces, and architecture rules for implementing UNKNOWN02 as a credible nuclear-electric spacecraft viewer.

## Architecture Diagram

```text
[Compact Reactor]
    -> [Directional Shield Stack]
    -> [Closed Brayton Unit + Heat Exchanger]
    -> [Radiator Roots / Waste-Heat Manifolds]
    -> [Large Heat Rejection Radiators]
    -> [Long Separation Boom]
    -> [Protected Bus / PMAD / Avionics]
    -> [Propellant Tanks / Payload Support]
    -> [Electric Thruster Cluster]
```

Use the viewer's current left-to-right X-axis convention when discussing layout. Avoid overloading "aft" and "forward" unless thrust direction is explicitly defined.

## Vehicle Zones

| Zone | Role | Required visual read |
| --- | --- | --- |
| Reactor Zone | Compact thermal source. | Dense, compact machinery; not a rocket engine. |
| Shield / Protected Direction Zone | Directional radiation protection. | Mass stack between reactor and bus; optional shielded-zone cue. |
| Power Conversion Zone | Brayton compression, heat addition, turbine extraction, alternator/generator. | Named machinery cluster with heat/electric interfaces. |
| Thermal Rejection Zone | Waste-heat manifolds and radiator roots. | Pipes/manifolds visibly tied to Brayton and radiator panels. |
| Separation Structure Zone | Long radiation/thermal standoff. | Open truss, collars, end nodes, cable trays, and explicit mounts. |
| Bus and PMAD Zone | Avionics, comms, service electronics, power conditioning. | Intentional racks/backplanes/modules, not random gray boxes. |
| Propellant / Payload Zone | Reaction-mass storage and mission/support equipment. | Balanced tanks, saddles, valve blocks, payload attached to bus-side structure. |
| Electric Propulsion Zone | Low-thrust electric output. | Small thruster cluster with grids, brackets, harnesses, feed lines, faint plume. |

## Subsystem Placement Rules

| Subsystem | Upstream / downstream relationship | Required visual cues | Forbidden cues |
| --- | --- | --- | --- |
| Reactor | Upstream heat source for Brayton. | Compact body, local heat cue, service connections to shield/conversion section. | Giant engine bell, flame, launch-stage body. |
| Shield | Between reactor and protected systems. | Layered mass stack, line-of-sight direction, support braces. | Decorative cone unrelated to reactor/bus axis. |
| Brayton Unit | Receives reactor heat; sends electric power and waste heat. | Compressor/turbine/alternator/heat exchanger distinction. | Random boxes, nozzle-like engine read. |
| Radiators | Receive waste heat from Brayton. | Large panels, roots, manifolds, hinge/boom support. | Solar-array misread, tiny decorative fins. |
| Boom | Separates power head from bus. | Truss bays, collars, harnesses, end adapters. | Empty lazy span or solid fantasy fuselage. |
| Bus / PMAD | Receives conditioned power and hosts service systems. | Backplanes, equipment racks, cable exits, deliberate packaging. | Cockpit, windows, crew cabin, random cube stack. |
| Tanks | Feed electric thrusters. | Saddles, straps, caps, valve/manifold block, short feed lines. | Huge chemical tanks or crew pods. |
| Payload | Optional mission hardware. | Bus-mounted instruments, antenna/dish/boomlet if justified. | Floating decorative module. |
| Thrusters | Consume electric power and propellant. | Small annular/grid devices, brackets, neutralizer/cabling cues, subtle plume. | Chemical flames, shock diamonds, giant bells. |

## Structural Continuity Rules

- Reactor, shield, and Brayton unit should read as one protected power head.
- Radiator roots must visually originate from Brayton waste-heat interfaces.
- Radiator panels must attach through credible roots, hinges, and support structure.
- Boom must terminate into real collars/adapters at both ends.
- Bus-side structure must support PMAD, tanks, payload, and propulsion frame.
- Tanks and thrusters must share believable support/feed logic.
- Power harnesses should route from PMAD to bus/thrusters as cable trays or bundled harnesses.
- Propellant feed should route from tanks to thrusters as muted metallic pipes with valve/manifold nodes.

## Detail Density Rules

Add detail at functional interfaces:
- shield mounts
- Brayton shaft/alternator/heat-exchanger interfaces
- radiator roots and hinge lines
- boom collars and truss nodes
- PMAD backplanes and harness exits
- tank saddles, straps, caps, valve blocks
- thruster gimbal brackets, grids, neutralizer-like rods/boxes

Keep large surfaces quiet. Do not add repetitive decorative greebles just to make the model busy.

## Mode Implications

- Clean View: the silhouette should immediately read as reactor, radiators, boom, bus, tanks, and thrusters in one elegant spacecraft.
- Engineering View: structure, mounts, labels, leader lines, and subsystem placement should dominate.
- Energy View: Brayton loop, power routing, heat rejection, and subtle electric propulsion output should be legible.
- Thermal View: reactor hot source, shield/protected side, radiator dominance, and heat path should be the clearest story.

## Camera and Inspection Implications

Close-up presets must continue to frame:
- reactor and shield as one safety/thermal boundary
- Brayton unit and radiator root as conversion/rejection machinery
- radiator overview as dominant thermal architecture
- boom as structural separation
- bus/PMAD/tanks as service-side packaging
- thruster cluster as small electric propulsion, not chemical thrust

## Acceptance Checklist

The architecture pass is acceptable when a reviewer can:
- identify every major subsystem without reading source code
- understand why the shield is between reactor and bus
- understand why the boom is long
- understand why radiators dominate
- distinguish thermal flow from electrical flow
- distinguish propellant feed from power harnessing
- recognize the thrusters as electric propulsion
- see that payload/support hardware is attached, not floating
- see one continuous structural backbone
- believe the model was arranged by engineering logic rather than placeholder convenience
