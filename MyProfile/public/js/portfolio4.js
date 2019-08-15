'use strict'
{

//プレイヤーとモンスターの設定値
const player = {
  name: 'おれ',
  maxHp: 50,
  atc: 20,
  def: 12
};

const monsters =[
  {name: 'ブルースドライバー', maxHp: 100, atc: 20, def: 8, image: 'img/bd2.jpeg'},
  {name: 'かげ', maxHp: 70, atc: 25, def: 3, image: 'img/kage.png'}
];

//クリア時
const gameClear = () => {
  document.querySelector('h1').textContent = 'ゲームクリア！';
  document.getElementById('monster').classList.add('hidden2');
  document.getElementById('retry').classList.remove('hidden');
}

//ゲームオーバー時
const gameOver = () => {
  document.querySelector('h1').textContent = 'ゲームオーバー';
  document.getElementById('retry').classList.remove('hidden');
};



//開いたときの処理始め
const monsterSelect = Math.floor(Math.random() * 2);
const monster = monsters[monsterSelect];

let pHp = player.maxHp; //現在のHP
let mHp = monster.maxHp; //現在のモンスターのHP
let defence = 1; //防御補正値
let special = 1; //攻撃補正値
let critical; //クリティカル判定
let specialCount = Math.random(); //ひっさつ判定

if(specialCount > 0.7){
  document.getElementById('specialCount').textContent = 'ひっさつOK!';
  document.getElementById('special').classList.add('red');
  document.getElementById('special').classList.remove('gray');
}

document.querySelector('h1').textContent = `${monster.name}があらわれた！`;
document.querySelector('img').setAttribute('src', monster.image);
document.querySelector('section').addEventListener('click', () => {
const h1 = document.querySelector('h1');
if(h1.textContent === '' || h1.textContent === 'ゲームオーバー' || h1.textContent === 'ゲームクリア！'){
  return;
}
h1.textContent = '';
document.getElementById('content').classList.add('hidden');
document.getElementById('menu').classList.remove('hidden');
menuSelector();
});



//開いたときの処理終わり

//ダメージ計算の関数
const dmgSet = (atc, def) => {
  return ( (atc * special + Math.floor(Math.random() * 6)) - (def * defence + Math.floor(Math.random() * 5) )  )
};

//プレイヤーが攻撃するときのテキスト代入関数
const dmgContent = () =>{
  const p =  document.getElementById('content').querySelectorAll('p');
  critical = Math.floor(Math.random() * 32);
  if(critical > 29){
    special++;
  }
  let dmg = dmgSet(player.atc, monster.def);
  if(dmg <= 0){
    dmg = 0;
      p[1].textContent = `${monster.name}にダメージを与えられなかった`;
  }else if(critical > 29){
    p[1].textContent = 'クリティカルヒット！';
    p[2].textContent = `${monster.name}に${dmg}のダメージ！`;
  }else{
  p[1].textContent = `${monster.name}に${dmg}のダメージ！`;
}
  critical = 1;
  special = 1;
  defence = 1;
  mHp -= dmg;
  if(mHp <= 0){
    p[3].textContent = `${monster.name}をたおした！`
    setTimeout(gameClear, 1800);
    return;
  }
  setTimeout(monsterAtc, 1600);
};

//モンスターが攻撃するときの処理１
const monsterAtc =() => {
  const section = document.getElementById('section');
  let count = 0;
  const p = document.getElementById('content').querySelectorAll('p');
  p.forEach(pee => {
    pee.textContent = '';
  });
  p[0].textContent = `${monster.name}のこうげき！`
  const atcEffectAdd = () => {
    section.classList.add('m-atc');
    setTimeout(atcEffectRemove, 100);
  };
 const atcEffectRemove= () => {
   section.classList.remove('m-atc');
   count++
   if(count === 2){
     setTimeout(dmgContentMon, 200);
     return;
   }
   setTimeout(atcEffectAdd, 100);
 };
 setTimeout(atcEffectAdd, 800);
}

const dmgContentMon = () => {
  const p =  document.getElementById('content').querySelectorAll('p');
  critical = Math.floor(Math.random() * 32);
  if(critical === 31){
    special++;
  }
  let dmg = dmgSet(monster.atc, player.def);
  if(dmg <= 0){
    dmg = 0;
      p[1].textContent = `${player.name}にダメージを与えられなかった`;
  }else if (critical === 31){
    p[1].textContent = 'クリティカルヒット！';
    p[2].textContent = `${player.name}に${dmg}のダメージ！`;
  }else{
  p[1].textContent = `${player.name}に${dmg}のダメージ！`;
  }
  console.log(critical, special);
  critical = 1;
  special = 1;
  defence = 1;
  pHp -= dmg;
  if(pHp < 0){
    pHp = 0;
  }
  document.getElementById('hp').textContent = pHp;
  if(pHp === 0){
    document.getElementById('player').classList.add('gameover');
    p[3].textContent = `${player.name}はしんでしまった！`;
    setTimeout(gameOver, 2000);
    return;
  }
  setTimeout(menuOpen, 1500);
};

//コンテントからメニューへ戻るときの関数
const menuOpen = () => {
  const content = document.getElementById('content');
  content.querySelectorAll('p').forEach(pee => {
    pee.textContent = '';
  });
  specialCount = Math.random();
  if(specialCount > 0.7){
    document.getElementById('specialCount').textContent = 'ひっさつOK!';
    document.getElementById('special').classList.add('red');
    document.getElementById('special').classList.remove('gray');
  }
  content.classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  menuSelector();
};

//メニューセレクト時に矢印を出す処理
const menuSelector = () => {
document.getElementById('menu').querySelectorAll('p').forEach(li => {
  li.addEventListener('mouseover', () => {
    if(li.classList.contains('gray')){
      return;
    }
    li.querySelector('span').textContent = '→';
  });
  li.addEventListener('mouseout', () => {
    li.querySelector('span').textContent = '';
  });
});
}

//こうげき選択時の処理
document.getElementById('atc').addEventListener('click', () => {
  const mon = document.getElementById('monster');
  let count = 0;
  document.getElementById('menu').classList.add('hidden');
  const content = document.getElementById('content');
  content.classList.remove('hidden');
  const p = content.querySelectorAll('p');
  p[0].textContent = 'おれのこうげき！'
  const atcEffectAdd = () => {
    mon.classList.add('hidden2');
    setTimeout(atcEffectRemove, 100);
  };
 const atcEffectRemove= () => {
   mon.classList.remove('hidden2');
   count++
   if(count === 2){
     setTimeout(dmgContent(), 200);
     return;
   }
   setTimeout(atcEffectAdd, 100);
 };
 setTimeout(atcEffectAdd, 800);
});

//ひっさつ選択時の処理
document.getElementById('special').addEventListener('click', () => {
  if(document.getElementById('special').classList.contains('gray')){
    return;
  }
  special += 1;
  const mon = document.getElementById('monster');
  let count = 0;
  document.getElementById('menu').classList.add('hidden');
  const content = document.getElementById('content');
  content.classList.remove('hidden');
  const p = content.querySelectorAll('p');
  document.getElementById('specialCount').textContent = '';
  document.getElementById('special').classList.add('gray');
  document.getElementById('special').classList.remove('red');
  p[0].textContent = 'おれのひっさつこうげき！'
  const atcEffectAdd = () => {
    mon.classList.add('hidden2');
    setTimeout(atcEffectRemove, 100);
  };
 const atcEffectRemove= () => {
   mon.classList.remove('hidden2');
   count++
   if(count === 2){
     setTimeout(dmgContent(monster.name), 200);
     return;
   }
   setTimeout(atcEffectAdd, 100);
 };
 setTimeout(atcEffectAdd, 800);
});

//ぼうぎょ選択時の処理
document.getElementById('block').addEventListener('click', () => {
  defence = 2;
  document.getElementById('menu').classList.add('hidden');
  const content = document.getElementById('content');
  content.classList.remove('hidden');
  const p = content.querySelectorAll('p');
  p[0].textContent = `おれは${monster.name}のこうげきにみがまえた。`;
  setTimeout(monsterAtc, 1200);
});

//きずのてあて選択時の処理
document.getElementById('cure').addEventListener('click', () => {
  document.getElementById('menu').classList.add('hidden');
  const content = document.getElementById('content');
  content.classList.remove('hidden');
  const p = content.querySelectorAll('p');
  p[0].textContent = `おれはきずのてあてをした！`;
  setTimeout(cureContent, 800);
});

const cureContent = () => {
  const p = document.getElementById('content').querySelectorAll('p');
  const cureInt = 15 + Math.floor(Math.random() * 6);
  pHp += cureInt;
  if(player.maxHp < pHp){
    pHp = player.maxHp;
    p[1].textContent = 'HPがぜんかいふくした！';
  }else{
    p[1].textContent = `HPが${cureInt}かいふくした！`;
  }
  document.getElementById('hp').textContent = pHp;
  setTimeout(monsterAtc, 1600);
};

}
