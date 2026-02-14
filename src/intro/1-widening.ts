/* eslint-disable @typescript-eslint/no-unused-vars */
/* -------------------------------------------------------
   1) The sneaky gotcha: “widening” (specific -> general)
-------------------------------------------------------- */

const games = [
  { id: 'elden-ring', title: 'Elden Ring' },
  { id: 'hades', title: 'Hades' },
];

type GameId1 = (typeof games)[number]['id']; // ✅ string (not the two literal IDs)

function openGamePage1(id: GameId1) {
  console.info('Opening game page for:', id);
}

openGamePage1('elden-ring'); // ✅ ok
openGamePage1('totally-not-a-real-game'); // ✅ also ok (this is the problem)
