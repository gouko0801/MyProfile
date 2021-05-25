`use strict`
{
  let bd = '';
  let ch = '';
  let dr = '';
  let clean = 'clean';

  let audio = new Audio(`../sound/${clean}${bd}${ch}${dr}.mp3`);

  const audioReset = () => {
    audio.pause();
    audio.currentTime = 0;
  }

  const audioPlay = () => {
    audioReset()
    audio.src = `../sound/${clean}${bd}${ch}${dr}.mp3`;
    audio.play();
  }

  const effectorBtnChange = (btn) => {
    const changedBtn = btn === 'ONにする'
    ? 'OFFにする'
    : 'ONにする'
    return changedBtn;
  } 

  const play = document.getElementById('start');
  play.addEventListener('click', () => {
    if(play.textContent === '演奏開始') {
      audio.play();
      play.textContent = '演奏中止';
    } else {
      audioReset();
      play.textContent = '演奏開始';
    }
  });

  const cleanCheck = () => {
    if (bd === '' && ch === '' && dr === '') {
      return 'clean';
    }
    return '';
  }

  const bd2 = document.getElementById('bd2');
  bd2.addEventListener('click', () => {
    play.textContent = '演奏中止';
    bd2.textContent = effectorBtnChange(bd2.textContent);
    bd = bd2.textContent === 'ONにする'
    ? '' : 'bd';
    clean = cleanCheck();
    audioPlay();
  });

  const ch1 = document.getElementById('ch1');
  ch1.addEventListener('click', () => {
    play.textContent = '演奏中止';
    ch1.textContent = effectorBtnChange(ch1.textContent);
    ch = ch1.textContent === 'ONにする'
    ? '' : 'ch';
    clean = cleanCheck();
    audioPlay();
  });

  const ddb = document.getElementById('ddb');
  ddb.addEventListener('click', () => {
    play.textContent = '演奏中止';
    ddb.textContent = effectorBtnChange(ddb.textContent);
    dr = ddb.textContent === 'ONにする'
    ? '' : 'dr';
    clean = cleanCheck();
    audioPlay();
  });

  document.getElementById('reset').addEventListener('click', () => {
    if(bd === '' && ch === '' && dr === '') {
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
    audioPlay();
  });

  audio.addEventListener('ended', () => {
    play.textContent = '演奏開始';
  });
}
