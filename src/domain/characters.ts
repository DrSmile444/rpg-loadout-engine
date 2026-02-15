export interface CharacterSeed {
  id: string;
  class: string; // currently wide: any string can sneak in
  level: number;
  knownSpells: string[];
  inventory: string[];
}

export const CHARACTERS = [
  {
    id: 'c1',
    class: 'mage',
    level: 12,
    knownSpells: ['fireball'],
    inventory: ['oak_staff', 'health_potion'],
  },
  {
    id: 'c2',
    class: 'warrior',
    level: 8,
    knownSpells: ['shield_bash'],
    inventory: ['iron_sword', 'health_potion'],
  },
  {
    id: 'c3',
    class: 'cleric',
    level: 10,
    knownSpells: ['heal'],
    inventory: ['oak_staff', 'health_potion'],
  },
] as const satisfies CharacterSeed[];

export type CharacterId = (typeof CHARACTERS)[number]['id'];

export type CharacterClass = (typeof CHARACTERS)[number]['class'];
