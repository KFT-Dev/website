// クエリ取得（例: ?lang=en）
const lang = new URLSearchParams(window.location.search).get("lang") || "jp";

// JSONデータ（実際は別ファイルからfetchしてもOK）
const translations = {
  policy: {
    jp: {
      title: "ビルドカード プライバシーポリシ―",
      sub: "",
      line_one: "1. 収集及び利用・処理するデータ",
      desc_one:
        "開発者は、BOTを通じてユーザーのデータ(Discord NameID, Discord UserID, その他指定したデータ)を収集することがあります。",
      line_two: "2. 収集するデータ・利用する目的",
      desc_two:
        "開発者収集・利用する目的は、以下の通りです。\n\ni.ビルドカードを円滑に作成できるよう、Discord UserIDとその他指定したデータで紐づけを行っています。\nii.悪意のある利用 / 利用規約 第5条に反していないかどうかを確認するため",
      line_thr: "3. 収集したデータの削除",
      desc_thr:
        "ユーザーは希望に応じてデータの削除を行えます。\n\ni.ユーザーは、収集されたデータの削除を希望する場合、削除を行うことができます。\nii.開発者は、データ削除を希望されなくても、データを削除することがあります。",
      line_fou: "4. お問い合わせについて",
      desc_fou:
        "開発者のデータの管理に関して何か疑問などがある場合、下記の方法で問い合わせを行えます。\n\n・Discord サーバー名:　Honkai : Star Rail 3rd and Genshin / (サポートサーバー)\n・BOT 開発者:　kft_switch",
    },
    en: {
      title: "Build Card Privacy Policy",
      sub: "",
      line_one: "1. Data Collection, Use, and Processing",
      desc_one:
        "The developer may collect user data through the BOT (such as Discord NameID, Discord UserID, and other specified data).",
      line_two: "2. Purpose of Data Collection and Use",
      desc_two:
        "The purposes for which the developer collects and uses data are as follows:\n\ni. To enable smooth creation of build cards by linking Discord UserID with other specified data.\nii. To verify whether there is any malicious use or violations of Article 5 of the Terms of Use.",
      line_thr: "3. Deletion of Collected Data",
      desc_thr:
        "Users can request deletion of their data at their discretion.\n\ni. If the user wishes to delete the collected data, the developer will comply.\nii. The developer may also delete data even without a user request.",
      line_fou: "4. Contact Information",
      desc_fou:
        "If you have any questions about how the developer manages data, you can contact us through the following methods:\n\n・Discord Server Name: Honkai : Star Rail 3rd and Genshin / (Support Server)\n・BOT Developer: kft_switch",
    },
  },
};

// DOMに挿入
const content = translations.policy[lang];

const langSwitch = document.getElementById("lang-switch");

if (lang === "en") {
  // 現在英語なら日本語リンクを表示
  langSwitch.textContent = "JP";
  langSwitch.href = "?lang=jp"; // 日本語へ切り替えリンク
} else {
  // それ以外（日本語等）なら英語リンクを表示
  langSwitch.textContent = "EN";
  langSwitch.href = "?lang=en"; // 英語へ切り替えリンク
}

// title変更
document.getElementById("policy-title").textContent = content.title;
document.title = content.title;

// 記事本文の挿入
[
  "line_one",
  "desc_one",
  "line_two",
  "desc_two",
  "line_thr",
  "desc_thr",
  "line_fou",
  "desc_fou",
].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.innerText = content[id];
});
