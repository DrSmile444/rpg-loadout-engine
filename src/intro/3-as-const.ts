/* eslint-disable @typescript-eslint/no-unused-vars */
/* -------------------------------------------------------
   3) The clean pattern: `as const` + `satisfies`
      (data drives types)
-------------------------------------------------------- */

// Step A: the “shape” we want for a game entry
interface GameDefinition {
  id: string;
  title: string;
  platform: 'pc' | 'playstation' | 'switch' | 'xbox';
}

// Step B: write real data, keep literal IDs, but still validate the shape
const GAME_CATALOG = [
  { id: 'elden-ring', title: 'Elden Ring', platform: 'pc' },
  { id: 'hades', title: 'Hades', platform: 'switch' },

  // Live demo idea: show `satisfies` catching a bad value:
  // { id: "doom", title: "DOOM", platform: "steam" }, // ❌ "steam" not allowed
] as const satisfies readonly GameDefinition[];

// Step C: derive the ID union from the data (no manual typing!)
type GameId3 = (typeof GAME_CATALOG)[number]['id']; // ✅ "elden-ring" | "hades"

function openGamePage3(id: GameId3) {
  console.info('Opening game page for:', id);
}

openGamePage3('elden-ring'); // ✅ ok
// openGamePage3("totally-not-a-real-game"); // ❌ error (perfect)
