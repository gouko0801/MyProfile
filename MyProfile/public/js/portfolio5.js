'use strict'
{
  // パズルとして使用する画像の取得
  const images = ['../img/kage.png', '../img/ba-ru.png', '../img/maou.png', '../img/dokuro.png'];
  // パズルのフィールドとして使用するp要素の取得
  const fields = document.getElementById('section').querySelectorAll('p');
  // 選択しているパズル
  let selectedPuzzle = null;
  // 選択したパズルのインデックス
  let selectedIndex = null;
  let selectedX = null;
  let selectedY = null;
  let secondSelectedIndex = null;

  // フィールドにパズルを配置する
  const puzzleSet = () => {
    fields.forEach(field => {
      const imgfields = field.querySelectorAll('img');
      imgfields.forEach((imgfield, i) => {
        const select = Math.floor(Math.random() * 4);
        imgfield.setAttribute('src', images[select]);
      });
    });
  }

  // パズル入れ替え後消えるパズルを調べてインデックスを返す
  const lostPazzleSearch = (puzzles, selectedX, selectedY) => {
    const lostIndex = [];
    const yoko = !(selectedIndex - 1 === secondSelectedIndex || selectedIndex + 1 === secondSelectedIndex);
    
  }

  puzzleSet(null);
  // 配置したパズルを2次元配列に格納する
  let puzzles = [];
  for (let x = 0; x < fields.length; x++) {
    puzzles[x] = new Array(7).fill(0);
    const imageFields = fields[x].querySelectorAll('img');
    for (let y = 0; y < imageFields.length; y++) {
      puzzles[x][y] = imageFields[y];
    }
  }

  // パズルを選択して入れ替えて消す処理
  puzzles.forEach((puzzleColumn, x) => {
    puzzleColumn.forEach((puzzle, y) => {
      puzzle.addEventListener('click', () => {
        console.log(puzzle.classList.contains('select'));
        // 1つ目のパズルが選択されているか
        if (!selectedX && !selectedY) {
          puzzle.classList.add('select');
          // selectedPuzzle = puzzle;
          selectedX = x;
          selectedY = y;
        } else {
          // パズルが選択されている状態で選択されたパズルの縦横に面していない場合はリターンする
          if(puzzle.classList.contains('select') && (selectedPuzzle !== puzzles[x + 1][y] && selectedPuzzle !== puzzles[x - 1][y] && selectedPuzzle !== puzzles[x][y + 1] && selectedPuzzle !== puzzles[x][y - 1])) {
            console.log('return')
            return;
          }
          // 選択しているパズルをクリックした場合選択状態を解除する
          if (puzzle === selectedPuzzle) {
            puzzle.classList.remove('select');
            return;
          }
          const secondSelectPuzzle = puzzle.currentSrc;
          puzzle.setAttribute('src', selectedPuzzle.currentSrc);
          selectedPuzzle.classList.remove('select');
          selectedPuzzle.setAttribute('src', secondSelectPuzzle);
          const lostIndex = lostPazzleSearch(puzzles, x, y);
        }
      });
    });
  });


}
