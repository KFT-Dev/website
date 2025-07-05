window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const background = document.getElementById('background');
  const main = document.getElementById('main');

  setTimeout(() => {
    loader.style.display = 'none'; // ローディングを非表示
    background.style.opacity = 1;  // 背景を表示
    main.style.opacity = 1;        // メインを表示
  }, 3000); // アニメ時間と合わせて4秒
});
