'use strict'
{
const btn = [document.getElementById('btn1'), document.getElementById('btn2'), document.getElementById("btn3")];
const closes = [document.getElementById('close1'), document.getElementById('close2'), document.getElementById("close3")];
const guitars = [document.getElementById('guitar1'), document.getElementById('guitar2'), document.getElementById("guitar3")];
const mask = document.getElementById('mask');

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', () => {
    for(let x = 0; x < guitars.length; x++){
      guitars[x].classList.add('hidden');
    }
    guitars[i].classList.remove('hidden');
    mask.classList.remove('hidden');
  });
}

for(let i = 0; i < closes.length; i++){
  closes[i].addEventListener('click', e => {
    e.preventDefault();
    guitars[i].classList.add('hidden');
    mask.classList.add('hidden');
  });
}

mask.addEventListener('click', () => {
  for(let i =0 ; i < closes.length; i++){
    closes[i].click();
  }
});

}
