`use strict`
{
let bd = '';
let ch = '';
let dr = '';
let clean = 'clean';

let audio = new Audio(`./sound/${clean}${bd}${ch}${dr}.mp3`);

const play = document.getElementById('start');
play.addEventListener('click', () => {
  if(play.textContent === '演奏開始'){
    audio.play();
    play.textContent = '演奏中止';
  }else{
    audio.pause()
    audio.currentTime = 0;
    play.textContent = '演奏開始';
  }
  });

const bd2 = document.getElementById('bd2');
bd2.addEventListener('click', () => {
  if(play.textContent = '演奏開始'){
    play.textContent = '演奏中止';
  }
  if(bd2.textContent === 'ONにする'){
    bd = 'bd';
    bd2.textContent = 'OFFにする';
  }else{
    bd = ''
    bd2.textContent = 'ONにする';
  }
  if(bd === '' && ch === '' && dr === ''){
  clean = 'clean'
}else{
  clean = '';
}
  audio.pause();
  audio.currentTime = 0;
  audio.src = `./sound/${clean}${bd}${ch}${dr}.mp3`;
  audio.play();
});

const ch1 = document.getElementById('ch1');
ch1.addEventListener('click', () => {
  if(play.textContent = '演奏開始'){
    play.textContent = '演奏中止';
  }
  if(ch1.textContent === 'ONにする'){
    ch = 'ch';
    ch1.textContent = 'OFFにする';
  }else{
    ch = ''
    ch1.textContent = 'ONにする';
  }
  if(bd === '' && ch === '' && dr === ''){
  clean = 'clean'
}else{
  clean = '';
}
  audio.pause();
  audio.currentTime = 0;
  audio.src = `./sound/${clean}${bd}${ch}${dr}.mp3`;
  audio.play();
});

const ddb = document.getElementById('ddb');
ddb.addEventListener('click', () => {
  if(play.textContent = '演奏開始'){
    play.textContent = '演奏中止';
  }
  if(ddb.textContent === 'ONにする'){
    dr = 'dr';
    ddb.textContent = 'OFFにする';
  }else{
    dr = ''
    ddb.textContent = 'ONにする';
  }
  if(bd === '' && ch === '' && dr === ''){
  clean = 'clean'
}else{
  clean = '';
}
  audio.pause();
  audio.currentTime = 0;
  audio.src = `./sound/${clean}${bd}${ch}${dr}.mp3`;
  audio.play();
});

document.getElementById('reset').addEventListener('click', () => {
  if(bd === '' && ch === '' && dr === ''){
    return;
  }
  bd = '';
  ch = '';
  dr = '';
  clean = 'clean';
  bd2.textContent = 'ONにする';
  ch1.textContent = 'ONにする';
  ddb.textContent = 'ONにする';
  play.textContent = '演奏中止';
  audio.pause();
  audio.currentTime = 0;
  audio.src = `./sound/${clean}${bd}${ch}${dr}.mp3`;
  audio.play();
});

audio.addEventListener('ended', () => {
  play.textContent = '演奏開始';
});


}
