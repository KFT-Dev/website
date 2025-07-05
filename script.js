window.addEventListener("load", () => {
  setTimeout(() => {
    // ロゴを非表示
    document.getElementById("loader").style.display = "none";

    // メイン表示
    const main = document.getElementById("main");
    main.style.opacity = 1;

    // スクロール復活（任意）
    document.body.style.overflow = "auto";
  }, 3000); // アニメーション4秒後
});
