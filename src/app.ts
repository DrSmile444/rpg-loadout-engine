import { characters } from './domain/characters.js';
import { items } from './domain/items.js';
import { spells } from './domain/spells.js';

interface LoadoutRequest {
  characterId: string;
  weaponId: string;
  spellIds: string[];
}

function mustFind<T>(value: T | undefined, message: string): T {
  if (!value) {
    throw new Error(message);
  }

  return value;
}

function buildLoadout(input: LoadoutRequest) {
  const character = mustFind(
    characters.find((character) => character.id === input.characterId),
    'Character not found',
  );

  const weapon = mustFind(
    items.find((index) => index.id === input.weaponId),
    'Weapon not found',
  );

  const selectedSpells = input.spellIds.map((id) =>
    mustFind(
      spells.find((spell) => spell.id === id),
      `Spell not found: ${id}`,
    ),
  );

  return { character, weapon, selectedSpells };
}

console.info(
  buildLoadout({
    characterId: 'c1',
    weaponId: 'oak_staff',
    spellIds: ['fireball'],
  }),
);
