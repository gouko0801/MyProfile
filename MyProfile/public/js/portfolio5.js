'use strict'
{
  // パズルとして使用する画像の取得
  const images = ['../img/kage.png', '../img/ba-ru.png', '../img/maou.png', '../img/dokuro.png'];
  // パズルのフィールドとして使用するp要素の取得
  const fields = document.getElementById('section').querySelectorAll('p');
  // パズルを選択している状態
  let isSelect = false;
  // 選択しているパズル
  let selectPuzzle = null;
  // 選択しているパズルのインデックス
  let selectIndex = null;

  // フィールドにパズルを配置する
  const puzzleSet = () => {
    fields.forEach(field => {
      const imgfields = field.querySelectorAll('img');
      console.log(imgfields);
      imgfields.forEach((imgfield, i) => {
        const select = Math.floor(Math.random() * 4);
        imgfield.setAttribute('src', images[select]);
      });
    });
  }

  puzzleSet(null);

  // 配置したパズルを配列に格納する
  let puzzles = [];
  for(let i = 0; i < fields.length; i++){
    const piece = fields[i].querySelectorAll('img');
    piece.forEach(pi => {
      puzzles[puzzles.length] = pi;
    });
  }
  console.log(puzzles);

  puzzles.forEach((puzzle, i) => {
    puzzle.addEventListener('click', () => {
      // パズルが選択されている状態で選択されたパズルの縦横に面していない場合はリターンする
      if(isSelect && (puzzle === selectPuzzle || puzzle === puzzles[i + 1] || puzzle === puzzles[i - 1] || puzzle === puzzles[i + 7] || puzzle === puzzles[i - 7])) {
        console.log('縦横リターン')
        return;
      }
      if (isSelect) {
        isSelect = false;
        // 選択しているパズルをクリックした場合選択状態を解除する
        if (puzzle === selectPuzzle) {
          puzzle.classList.remove('select');
          return;
        }
        const secondSelectPuzzle = puzzle.currentSrc;
        puzzle.setAttribute('src', selectPuzzle.currentSrc);
        selectPuzzle.classList.remove('select');
        console.log(secondSelectPuzzle);
        selectPuzzle.setAttribute('src', secondSelectPuzzle);
      } else {
        console.log(puzzle.currentSrc);
        puzzle.classList.add('select');
        selectPuzzle = puzzle;
        selectIndex = i;
        isSelect = true;
      }
    });
  });
}
