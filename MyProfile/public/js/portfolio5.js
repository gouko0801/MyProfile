'use strict'
{
const images = ['img/kage.png', 'img/ba-ru.png', 'img/maou.png', 'img/dokuro.png'];
let select;
const p = document.getElementById('section').querySelectorAll('p');

p.forEach(pee => {
  const img = pee.querySelectorAll('img');
  let select;
  img.forEach(image => {
    select = Math.floor(Math.random() * 4);
    image.setAttribute('src', images[select]);
  });
});
let puzzle = ['']
for(let i = 0; i < p.length; i++){
  const piece = p[i].querySelectorAll('img');
  piece.forEach(pi => {
    puzzle[puzzle.length] = pi;
  });
}
console.log(puzzle);

// for(let i = 1; i < puzzle.length; i++){
//   puzzle[i].addEventListener('drop' e => {
//     if(e !== puzzle[i-1] || e !== puzzle[i-1] || e !== puzzle[i+7] || e !== puzzle[i-7]){
//       return;
//     }
//
//   });
// }

}
