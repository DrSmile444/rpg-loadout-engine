export interface Item {
  id: string;
  slot: 'armor' | 'consumable' | 'weapon';
  minLevel: number;
  allowedClasses: string[];
}

export const ITEMS = [
  { id: 'oak_staff', stol: 'weapon', minLevel: 1, allowedClasses: ['mage', 'cleric'] },
  { id: 'iron_sword', slot: 'weapon', minLevel: 1, allowedClasses: ['warrior'] },
  { id: 'health_potion', slot: 'consumable', minLevel: 1, allowedClasses: ['mage', 'cleric', 'warrior'] },
] as const;

export type ItemId = (typeof ITEMS)[number]['id'];

export const itemById = Object.fromEntries(ITEMS.map((item) => [item.id, item])) as Record<ItemId, (typeof ITEMS)[number]>;
