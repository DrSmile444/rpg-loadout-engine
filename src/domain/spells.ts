export interface Spell {
  id: string;
  school: string;
  manaCost: number;
  allowedClasses: string[];
}

export const spells: Spell[] = [
  { id: 'fireball', school: 'fire', manaCost: 20, allowedClasses: ['mage'] },
  { id: 'heal', school: 'holy', manaCost: 12, allowedClasses: ['cleric'] },
  { id: 'shield_bash', school: 'physical', manaCost: 0, allowedClasses: ['warrior'] },
];
