import { Character } from './character.entity';

export class Monster extends Character {
  constructor(public name: string, public maxHp: number, public atc: number, public def: number, public img: string) {
    super(name, maxHp, atc, def);
  }

  critical = (): boolean => {
    return !!(Math.floor(Math.random() * 32) === 31);
  }
}
