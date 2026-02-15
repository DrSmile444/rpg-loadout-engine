import type { CharacterClass } from './characters';

export interface SpellSeed {
  id: string;
  school: 'fire' | 'holy' | 'physical';
  manaCost: number;
  allowedClasses: readonly CharacterClass[];
}

export const SPELLS = [
  { id: 'fireball', school: 'fire', manaCost: 20, allowedClasses: ['mage'] },
  { id: 'heal', school: 'holy', manaCost: 12, allowedClasses: ['mage'] },
  { id: 'shield_bash', school: 'physical', manaCost: 0, allowedClasses: ['warrior'] },
  { id: 'pyro_tornado', school: 'physical', manaCost: 0, allowedClasses: ['warrior'] },
] as const satisfies readonly SpellSeed[];

export type SpellId = (typeof SPELLS)[number]['id'];

export const spellById = Object.fromEntries(SPELLS.map((spell) => [spell.id, spell])) as Record<SpellId, (typeof SPELLS)[number]>;
