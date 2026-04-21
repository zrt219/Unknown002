# ZRT UNKNOWN02 Release Notes

## Release Summary

ZRT UNKNOWN02 Technical Viewer is now prepared as a NASA-style, internal-review quality aerospace concept presentation. The final release pass packages the viewer as a serious engineering-review ready artifact: four scene modes, three scene environments, presentation and capture modes, grouped camera presets, case-study still targets, mode-aware overlays, and documentation that explains both how to run the project and why the spacecraft is shaped this way.

This is a browser-based concept visualization, not an official NASA/DOE/JPL product and not a certified spacecraft design.

## PR Title

`[codex] Prepare UNKNOWN02 for final QA release`

## PR Description

### What changed

- Added final release documentation for the UNKNOWN02 technical viewer.
- Tightened the capture workflow with an in-view capture checklist.
- Preserved the centralized scene-mode, environment-mode, and presentation-mode architecture.
- Confirmed the public docs describe the viewer as NASA-style and engineering-review ready without implying agency endorsement.

### What improved

- The README now works as a GitHub and Vercel landing document.
- The capture plan and release notes give future maintainers a repeatable review/case-study workflow.
- The viewer UI now exposes a clearer final-still checklist directly in Capture Studio.
- Release language is more professional and explicit about realism boundaries.

### What remains

- The project remains a visual technical concept, not a validated engineering model.
- Browser visual QA should be repeated after every major layout, lighting, or overlay change.
- Local verification may be blocked on machines where Vite/esbuild cannot spawn from PowerShell due to OS permissions.

## Vercel Deployment Note

Use the standard Vite settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Recommended deployment flow:

1. Run `npm test`.
2. Run `npm run build`.
3. Deploy a Vercel preview for project `unknown02`.
4. Smoke-test scene modes, environment modes, camera presets, Capture Studio, and HUD restore.
5. Promote only after visual review confirms the release framing.

## Release QA Checklist

- Scene modes switch without losing the active camera unexpectedly.
- Environment mode can auto-follow scene mode or remain manually overridden.
- Camera presets frame overview, close-up, story, and presentation shots.
- Fit-to-selection targets the selected subsystem's preferred preset.
- Engineering labels are readable without overwhelming the model.
- Energy overlays distinguish Brayton working fluid, electric power, heat rejection, and plume output.
- Thermal View emphasizes reactor source, shielded zone, radiator dominance, and protected bus side.
- Capture Mode can hide the HUD and restore it safely.
- Reduced-motion preference freezes active animation.
- README and case study explain that the project is a concept viewer, not a certified design.
