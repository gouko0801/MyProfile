'use strict'
{
  // パズルとして使用する画像の取得
  const images = ['../img/kage.png', '../img/ba-ru.png', '../img/maou.png', '../img/dokuro.png'];
  // パズルのフィールドとして使用するp要素の取得
  const fields = document.getElementById('section').querySelectorAll('p');
  // 1つ目のパズルを選択している状態か
  let isFirstSelect = false;
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

  // パズル入れ替え後消えるパズルを調べる　ちゃんと動いてない
  const lostPuzzleSearch = (puzzleType, x, y, count) => {
    if (x < 0 || x >= 7
      || y < 0 || y >= 7
      || checkedPuzzles[x][y] 
      || puzzles[x][y].currentSrc !== puzzleType
      || puzzles[x][y].classList.contains('lost')
    ) {
      console.log(count);
      return count;
    }
    count++;

    checkedPuzzles[x][y] = true;
    count = lostPuzzleSearch(puzzleType, x - 1, y, count);
    count = lostPuzzleSearch(puzzleType, x, y - 1, count);
    count = lostPuzzleSearch(puzzleType, x + 1, y, count);
    count = lostPuzzleSearch(puzzleType, x, y + 1, count);
    return count;
  }

  puzzleSet(null);
  // 配置したパズルを2次元配列に格納する
  let puzzles = [];
  let checkedPuzzles = [];
  for (let x = 0; x < fields.length; x++) {
    puzzles[x] = new Array(7).fill(0);
    checkedPuzzles[x] = new Array(7).fill(0);
    const imageFields = fields[x].querySelectorAll('img');
    for (let y = 0; y < imageFields.length; y++) {
      puzzles[x][y] = imageFields[y];
    }
  }

  const checkedPuzzlesReset = () => {
    checkedPuzzles.forEach(cP => {
      cP.forEach(p => {
        p = false;
      })
    });
  };
  checkedPuzzlesReset();

  // パズルを選択して入れ替えて消す処理
  puzzles.forEach((puzzleColumn, x) => {
    puzzleColumn.forEach((puzzle, y) => {
      puzzle.addEventListener('click', () => {
        console.log(puzzle.classList.contains('select'));
        // 1つ目のパズルが選択されているか
        if (!isFirstSelect) {
          puzzle.classList.add('select');
          selectedX = x;
          selectedY = y;
          isFirstSelect = true;
        } else {

          if (puzzle.classList.contains('select')) {
            puzzle.classList.remove('select');
            isFirstSelect = false;
            return;
          }
          // パズルが選択されている状態で選択されたパズルの縦横に面していない場合はリターンする
          // 一番上の行で移動時バグがある
          if(puzzles[selectedX][selectedY] !== puzzles[x + 1][y] && puzzles[selectedX][selectedY] !== puzzles[x - 1][y] && puzzles[selectedX][selectedY] !== puzzles[x][y + 1] && puzzles[selectedX][selectedY] !== puzzles[x][y - 1]) {
            console.log('return')
            return;
          }
          const secondSelectPuzzle = puzzle.currentSrc;
          puzzle.setAttribute('src', puzzles[selectedX][selectedY].currentSrc);
          puzzles[selectedX][selectedY].classList.remove('select');
          puzzles[selectedX][selectedY].setAttribute('src', secondSelectPuzzle);
          for (let _y = 0; _y < puzzles.length; _y++) {
            for (let _x = 0; _x < puzzles[x].length; _x++) {
              const lostPuzzleCount = lostPuzzleSearch(puzzles[_x][_y].currentSrc, _x, _y, 0);
              console.log(lostPuzzleCount);
              if (lostPuzzleCount >= 3) {
                console.log('lost');
                puzzles[_x][_y].classList.add('lost');
              }
            }
          }
          
          selectedX = null;
          selectedY = null;
          isFirstSelect = false;
          checkedPuzzlesReset();
        }
      });
    });
  });


}
