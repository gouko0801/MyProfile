'use strict'
{
const guitar1 = document.getElementById('guitar1');
const guitar2 = document.getElementById('guitar2');
const guitar3 = document.getElementById('guitar3');


document.getElementById('btn1').addEventListener('click', () =>{
  guitar1.classList.remove('hidden');
  guitar2.classList.add('hidden');
  guitar3.classList.add('hidden');
});

document.getElementById('btn2').addEventListener('click', () =>{
  guitar2.classList.remove('hidden');
  guitar1.classList.add('hidden');
  guitar3.classList.add('hidden');
});

document.getElementById('btn3').addEventListener('click', () =>{
  guitar3.classList.remove('hidden');
  guitar1.classList.add('hidden');
  guitar2.classList.add('hidden');
});

document.getElementById('close1').addEventListener('click', e =>{
  e.preventDefault();
  guitar1.classList.add('hidden');
});

document.getElementById('close2').addEventListener('click', e =>{
  e.preventDefault();
  guitar2.classList.add('hidden');
});

document.getElementById('close3').addEventListener('click', e =>{
  e.preventDefault();
  guitar3.classList.add('hidden');
});


}
