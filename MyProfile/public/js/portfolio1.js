'use strict'
{
const effectors = [document.getElementById('effector1'), document.getElementById('effector2'), document.getElementById('effector3'), document.getElementById('effector4')];

document.getElementById('btn').addEventListener('click', e => {
  e.preventDefault();
  const text = document.getElementById('text');
  text.textContent = 'エフェクター選択中...';
  effectors.forEach(effector => {
    effector.classList.add('hidden');
  });
  const effectorSelect = () => {
    let i = Math.floor(Math.random() * 4);
    effectors[i].classList.remove('hidden')
    text.textContent = '今回はこれ！'
  };

  setTimeout(effectorSelect, 1200);

});

const close = document.querySelectorAll('.close');
console.log(close);
for(let i = 0; i < close.length; i++){
  close[i].addEventListener('click', e => {
  e.preventDefault();
  effectors[i].classList.add('hidden');
  document.getElementById('text').textContent = 'ボタンを押すと僕の持ってるエフェクターをランダムに紹介します。';
});
}

}
