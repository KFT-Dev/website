const lang = new URLSearchParams(window.location.search).get("lang") || "ja";

    fetch(`..//lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("title").textContent = data.title;
        document.getElementById("description").textContent = data.description;
        document.title = data.title; // titleタグも変更
      })
      .catch(err => {
        console.error("翻訳ファイルの読み込みに失敗しました", err);
      });