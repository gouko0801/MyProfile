import { Monster } from './entity/monster.entity';
import { Player } from './entity/player.entity';

const monsters: Monster[] = [
  new Monster('かげ', 70, 25, 3, 'img/kage.png'),
  new Monster('ブルースドライバー', 100, 20, 8, 'img/bd2.jpeg'),
];
const player: Player = new Player('おれ', 50, 20, 12);

// クリア時
const gameClear = () => {
  document.querySelector('h1').textContent = 'ゲームクリア！';
  document.getElementById('monster').classList.add('hidden2');
  document.getElementById('retry').classList.remove('hidden');
}
  
// ゲームオーバー時
const gameOver = () => {
  document.querySelector('h1').textContent = 'ゲームオーバー';
  document.getElementById('retry').classList.remove('hidden');
};

// ひっさつが使えるか
const isSpecial = (player: Player) => {
  if(player.isSpecial){
    document.getElementById('specialCount').textContent = 'ひっさつOK!';
    document.getElementById('special').classList.add('red');
    document.getElementById('special').classList.remove('gray');
  }
}

const main = (monster: Monster, player: Player) => {

  while(true) {

  }
}

main(monsters[Math.floor(Math.random() * monsters.length)], player);
