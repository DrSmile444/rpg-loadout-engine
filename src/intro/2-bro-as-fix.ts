/* -------------------------------------------------------
   2) The “trust me bro” fix: `as SomeType`
-------------------------------------------------------- */

type GameId2 = 'elden-ring' | 'hades';

function openGamePage2(id: GameId2) {
  console.info('Opening game page for:', id);
}

openGamePage2('hades'); // ✅ ok
// openGamePage2("totally-not-a-real-game"); // ❌ error (good!)

// But you can still silence TS and ship a bug:
openGamePage2('totally-not-a-real-game' as GameId2); // 😬 compiles, but you just lied
