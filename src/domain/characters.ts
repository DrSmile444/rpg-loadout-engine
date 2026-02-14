export interface Character {
  id: string;
  class: string; // currently wide: any string can sneak in
  level: number;
  knownSpells: string[];
  inventory: string[];
}

export const characters: Character[] = [
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
];
