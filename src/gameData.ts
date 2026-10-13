import type { CardDef, EnemyDef } from './types';

export const CARDS: CardDef[] = [
  {
    id: 'strike',
    name: 'Strike',
    cost: 1,
    type: 'attack',
    rarity: 'common',
    description: 'Deal 6 damage.',
    damage: 6,
  },
  {
    id: 'defend',
    name: 'Defend',
    cost: 1,
    type: 'skill',
    rarity: 'common',
    description: 'Gain 5 Block.',
    block: 5,
  },
  {
    id: 'bash',
    name: 'Bash',
    cost: 2,
    type: 'attack',
    rarity: 'uncommon',
    description: 'Deal 8 damage.\nApply 2 Vulnerable.',
    damage: 8,
    vulnerable: 2,
  },
  {
    id: 'cleave',
    name: 'Cleave',
    cost: 1,
    type: 'attack',
    rarity: 'common',
    description: 'Deal 9 damage.',
    damage: 9,
  },
  {
    id: 'pommel',
    name: 'Pommel Strike',
    cost: 1,
    type: 'attack',
    rarity: 'uncommon',
    description: 'Deal 7 damage.\nDraw 1 card.',
    damage: 7,
    drawCards: 1,
  },
];

export const STARTER_DECK: string[] = [
  'strike', 'strike', 'strike', 'strike',
  'defend', 'defend', 'defend',
  'bash', 'cleave', 'pommel',
];

export const ENEMY: EnemyDef = {
  name: 'Slime',
  maxHP: 45,
  intents: [
    { type: 'attack', value: 11, label: 'Tackle' },
    { type: 'defend', value: 6, label: 'Harden' },
    { type: 'attack', value: 16, label: 'Crush' },
    { type: 'attack', value: 11, label: 'Tackle' },
    { type: 'defend', value: 6, label: 'Harden' },
  ],
};

export const PLAYER_MAX_HP = 72;
export const PLAYER_MAX_ENERGY = 3;
export const HAND_SIZE = 5;
