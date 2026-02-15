import { type CharacterId, CHARACTERS } from './domain/characters.js';
import { type ItemId, ITEMS } from './domain/items.js';
import type { SpellId } from './domain/spells.js';
import { SPELLS } from './domain/spells.js';

interface LoadoutRequest {
  characterId: CharacterId;
  weaponId: ItemId;
  spellIds: readonly SpellId[];
}

function mustFind<T>(value: T | undefined, message: string): T {
  if (!value) {
    throw new Error(message);
  }

  return value;
}

function buildLoadout(input: LoadoutRequest) {
  const character = mustFind(
    CHARACTERS.find((findCharacter) => findCharacter.id === input.characterId),
    'Character not found',
  );

  const weapon = mustFind(
    ITEMS.find((findItem) => findItem.id === input.weaponId),
    'Weapon not found',
  );

  const selectedSpells = input.spellIds
    .map((id) =>
      mustFind(
        SPELLS.find((findSpell) => findSpell.id === id),
        `Spell not found: ${id}`,
      ),
    )
    .map((spell) => ({ ...spell, cooldownMs: 0 }));

  selectedSpells[0].cooldownMs = 0;

  return { character, weapon, selectedSpells };
}

console.info(
  buildLoadout({
    characterId: 'c1',
    weaponId: 'oak_staff',
    spellIds: ['heal'],
  }),
);
