'use strict'
{
  const effectors = [document.getElementById('effector1'), document.getElementById('effector2'), document.getElementById('effector3'), document.getElementById('effector4')];
  const btn = document.getElementById('btn');

  const btnDisplayChange = () => {
    btn.classList.contains('hidden')
    ? btn.classList.remove('hidden')
    : btn.classList.add('hidden');
  }

  btn.addEventListener('click', e => {
    e.preventDefault();
    btnDisplayChange();
    const text = document.getElementById('text');
    text.textContent = 'エフェクター選択中...';
    effectors.forEach(effector => {
      effector.classList.add('hidden-animation');
    });

    setTimeout(function(){
      let selectIndex = Math.floor(Math.random() * 4);
      effectors[selectIndex].classList.remove('hidden-animation');
      text.textContent = '今回はこれ！';
    }, 1200);
    btnDisplayChange();
  });

  const closeBtns = document.querySelectorAll('.close');
  closeBtns.forEach((closeBtn, i) => {
    closeBtn.addEventListener('click', e => {
      e.preventDefault();
      effectors[i].classList.add('hidden-animation');
      document.getElementById('text').textContent = 'ボタンを押すと僕の持ってるエフェクターをランダムに紹介します。';
    });
  });
}
