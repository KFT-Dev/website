window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const background = document.getElementById('background');
  const main = document.getElementById('main');

  setTimeout(() => {
    loader.style.display = 'none'; // ロゴ消す
    background.style.opacity = 1;  // 背景表示
    main.style.opacity = 1;        // コンテンツ表示
  }, 3000); // ロゴアニメに合わせて
});
