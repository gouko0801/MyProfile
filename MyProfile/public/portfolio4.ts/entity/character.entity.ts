export class Character {
  constructor(public name: string, public maxHp: number, public atc: number, public def: number) {
    this.hp = this.maxHp;
  }

  hp: number;

  // クリティカル時,防御時は代入するときに補正値を入れる
  dmgSet = (atc: number, def: number): number => {
    return ( (atc + Math.floor(Math.random() * 6)) - (def + Math.floor(Math.random() * 5) )  )
  };

  critical = (): boolean => {
    return !!(Math.floor(Math.random() * 32) > 29);
  };
}
