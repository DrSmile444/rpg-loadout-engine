export interface Item {
  id: string;
  slot: 'armor' | 'consumable' | 'weapon';
  minLevel: number;
  allowedClasses: string[];
}

export const items: Item[] = [
  { id: 'oak_staff', slot: 'weapon', minLevel: 1, allowedClasses: ['mage', 'cleric'] },
  { id: 'iron_sword', slot: 'weapon', minLevel: 1, allowedClasses: ['warrior'] },
  { id: 'health_potion', slot: 'consumable', minLevel: 1, allowedClasses: ['mage', 'cleric', 'warrior'] },
];
