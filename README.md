# Remote Battery Control Console

A browser-based cassette futurism visual toy about operating a remote heavy
turret from a physical cockpit-style firing console. The turret body is never
shown; the experience comes from the CRT tactical display, analog instruments,
precision dials, charge lever, safety bus, firing log, procedural audio, and
console recoil.

## Run

Open `index.html` in a modern desktop browser.

No build step, server, packages, images, audio files, or external libraries are
required.

Language shortcuts:

- English: `index.html?lang=en`
- Korean: `index.html?lang=ko`

The `EN` / `KO` buttons in the top status bar switch language immediately.

## Controls

- `REQUEST TARGET`: receive a new fire mission and grid coordinate.
- `BALLISTIC CALC`: compute recommended azimuth, elevation, charge, and shell mass.
- `AZIMUTH DRIVE`: adjust the azimuth dial.
- `ELEVATION JACK`: adjust the elevation dial.
- `CHARGE RAM LEVER`: set the charge level with the heavy vertical lever.
- `SHELL MASS`: select 140KG, 180KG, or 220KG.
- `STABILIZER`: engage the stabilizer.
- `SAFETY INTERLOCK`: release the safety circuit.
- `FIRE`: fire once the circuit is ready.

## Precision Input

Azimuth, elevation, and charge share the same precision control model:

- Drag left/right or up/down to adjust smoothly.
- Use the mouse wheel for stepped adjustment.
- Use `-` / `+` buttons for stepped adjustment.
- Type a number directly into the input field.
- Use `MATCH SOLUTION` to move one control to its recommended value.
- Hold `Shift` for fine adjustment.
- Hold `Ctrl` for faster adjustment.

Each control shows current value, recommended value, delta, and a tolerance lamp.
The active control glows while it is being adjusted, and invalid numeric input
is restored with a warning log.

## Audio

Audio starts after the first user interaction so the browser can resume the
Web Audio context. Use the `AUDIO` cell in the top bar to mute or adjust master
volume.

## Prototype Features

- Polished cockpit console silhouette: a thin top status strip, a wide upper
  CRT bridge, and a large lower physical control deck.
- The lower deck uses aligned hardware modules instead of a three-column web
  dashboard: environment gauges, azimuth dial, elevation dial, charge lever,
  safety bus, checklist lamps, fire button, and teletype log.
- Canvas 2D CRT tactical grid with sector grid, axes, target marker, predicted
  splash point, error circle, ballistic track, impact bloom, scanline, noise,
  and localized overlay labels.
- Centralized JavaScript i18n dictionary for English and Korean UI, status
  readouts, checklist items, canvas labels, warnings, mission messages, random
  events, and system logs.
- Procedural Web Audio feedback for clicks, toggles, dial ticks, lever scrape,
  relay chatter, machine hum, CRT noise, warning beeps, servo movement, fire
  charge-up, heavy firing shock, and radar ping.

## Files

- `index.html`: cockpit console structure and translatable UI nodes.
- `styles.css`: physical console layout, material styling, CRT effects, and animations.
- `app.js`: state model, precision controls, i18n, Canvas renderer, firing flow, random events, and audio.
- `README.md`: usage notes.
