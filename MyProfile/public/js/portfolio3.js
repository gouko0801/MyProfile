'use strict'
{
  const shineTransition = () => {
    const p = document.getElementById('shine').querySelectorAll('p');
    for(let x =0; x < p.length; x++){
      p[x].classList.remove('red');
      p[x].classList.remove('lime');
      p[x].classList.remove('skyblue');
      p[x].classList.remove('yellow');
      p[x].classList.remove('pink');
      p[x].classList.remove('margin-4');
      p[x].classList.remove('margin-3');
      p[x].classList.remove('margin-2');
      p[x].classList.remove('margin-1');
    }
    let i = Math.floor(Math.random() * 5);
    const selectP = p[i];
    i = Math.floor(Math.random() * 6 +1);
    let x = Math.floor(Math.random() * 5);
    if(i > 5){
      const selectP2 = p[x];
      if(x === 0){
        selectP2.classList.add('pink');
      }else if(x % 4 === 0){
        selectP2.classList.add('red');
      }else if(x % 3 === 0){
        selectP2.classList.add('lime');
      }else if(x % 2 === 0){
        selectP2.classList.add('skyblue');
      }else{
        selectP2.classList.add('yellow');
      }
      selectP.classList.add('skyblue');
    }
    if(i % 4 === 0){
      selectP.classList.add('red');
    }else if(i % 3 === 0){
      selectP.classList.add('lime');
    }else if(i % 2 === 0){
      selectP.classList.add('yellow');
    }else{
      selectP.classList.add('pink');
    }
    if(x % 5 === 0){
      selectP.classList.add('margin-4');
    }else if(i % 4 === 0){
      selectP.classList.add('margin-3');
    }else if(i % 3 === 0){
      selectP.classList.add('margin-2');
    }else if(i % 2 === 0){
      selectP.classList.add('margin-1');
    }
  setTimeout(shineTransition, 600);
}

shineTransition();


}
