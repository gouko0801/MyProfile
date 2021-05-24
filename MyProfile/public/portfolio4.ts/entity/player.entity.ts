import { Character } from './character.entity';

export class Player extends Character {
  constructor(name: string, maxHp: number, atc: number, def: number) {
    super(name, maxHp, atc, def);
  }

  isSpecial = (): boolean => {
    return !!(Math.random() > 0.7);
  }

  cure = (): number => {
    return 15 + Math.floor(Math.random() * 6);
  }

  isZeroHp = (currentHp: number): number => {
    const hp = currentHp < 0 ? 0 : currentHp;
    return hp;
  }
}