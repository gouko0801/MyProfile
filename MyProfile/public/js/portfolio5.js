'use strict'
{
  // パズルとして使用する画像の取得
  const images = ['../img/kage.png', '../img/ba-ru.png', '../img/maou.png', '../img/dokuro.png'];
  // パズルのフィールドとして使用するp要素の取得
  const fields = document.getElementById('section').querySelectorAll('p');
  // パズルを選択している状態
  let isFirstSelect = true;
  // 選択しているパズル
  let selectPuzzle = null;
  // 選択したパズルのインデックス
  let selectIndex = null;
  let secondIndex = null;

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

  // パズル入れ替え後消えるパズルを調べてインデックスを返す
  const lostPazzleSearch = (puzzles, selectIndex, secondIndex) => {
    const lostIndex = [];
    const yoko = !(selectIndex - 1 === secondIndex || selectIndex + 1 === secondIndex);
    
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

  // パズルを選択して入れ替えて消す処理
  puzzles.forEach((puzzle, i) => {
    puzzle.addEventListener('click', () => {
      // 最初の選択か(選択されているパズルがないか)
      if (isFirstSelect) {
        puzzle.classList.add('select');
        selectPuzzle = puzzle;
        selectIndex = i;
        isFirstSelect = false;
      } else {
        // パズルが選択されている状態で選択されたパズルの縦横に面していない場合はリターンする
        if(puzzle !== selectPuzzle && selectPuzzle !== puzzles[i + 1] && selectPuzzle !== puzzles[i - 1] && selectPuzzle !== puzzles[i + 7] && selectPuzzle !== puzzles[i - 7]) {
          return;
        }
        isFirstSelect = true;
        // 選択しているパズルをクリックした場合選択状態を解除する
        if (puzzle === selectPuzzle) {
          puzzle.classList.remove('select');
          return;
        }
        const secondSelectPuzzle = puzzle.currentSrc;
        puzzle.setAttribute('src', selectPuzzle.currentSrc);
        selectPuzzle.classList.remove('select');
        selectPuzzle.setAttribute('src', secondSelectPuzzle);
        const lostIndex = lostPazzleSearch(puzzles, selectIndex, i);
      }
    });
  });


}
