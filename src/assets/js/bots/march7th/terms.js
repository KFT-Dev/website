// クエリ取得（例: ?lang=en）
const lang = new URLSearchParams(window.location.search).get("lang") || "jp";

// JSONデータ（実際は別ファイルからfetchしてもOK）
const translations = {
  "terms": {
    "jp": {
      "title": "ビルドカード利用規約",
      "line_one": "第1条 利用規約への同意",
      "desc_one": "・この利用規約は、KFTが開発・公開しているBOT（以下「BOT」と言います）における利用条件等を定めるものです。\n・BOTを利用した時点で、ビルドカード利用規約に同意したものとみなされます。",
      "line_two": "第2条 サービスの提供",
      "desc_two": "・本サービスは、KFTが管理しているDiscord サーバー（以下「提供サーバー」と言います）で提供しているサービスとなります。\n・本サービスは基本無料で利用することができます。\n・本サービスは、あらかじめ通知することなく、いつでもサービスの変更、提供を中止することができるものとします。",
      "line_thr": "第3条 料金及び費用",
      "desc_thr": "・本サービスは、原則として、本サービスを無料で利用できるものとします。ただし、本サービスを向上する機能の一部は有料とし、有料サービスを提供しています。\n・本サービスの利用にあたり発生する通信等は、利用者が負担するものとします。\n・本サービスの有料サービスの価格を変更する場合があります。価格の変更について承諾しない場合、本サービスの一部が利用できなくなる場合があります。",
      "line_fou": "第4条 ユーザー情報の取り扱い",
      "desc_fou": "・本サービスは、Application Programming Interface（以下「API」と言います）を利用しているため、APIサービス提供元に、ユーザー情報が送信されます。",
      "line_fiv": "第5条 禁止事項",
      "desc_fiv": "・サービスの利用者は、本サービスの利用にあたり、以下に該当する行為を禁止いたします。\n・提供サーバーのサーバールール 又は ビルドカード利用規約に違反する行為。\n・本サービスの著作権または知的財産権を侵害する行為。\n・本サービスを不正な方法・不正な目的で利用する行為。\n・本サービスを破壊する行為。\n・本サービスのビルドカードに記載されているサービス元・サーバーURL等を改変する行為。 \n・第三者への過度な暴力的な表現・性的表現(下ネタ全般)・批判発言等の嫌悪感を与える表現や内容を含むコンテンツを投稿する行為。\n・本サービスを通じた、本サービス以外のサイト・リンク・サービスを記載する行為、誘導する行為。\n・その他不適切と判断した行為。",
      "line_six": "第6条 サービスの停止",
      "desc_six": "・第5条に違反した場合、本サービスの利用の制限 又は 利用の停止をします。\n・第5条に違反していない場合でも、利用の制限 又は 利用の停止が行われる場合があります。\n・利用停止されたユーザーは、KFT 又は 提供サーバーで異議申し立てを行うことができます。\n・提供サーバーの利用が停止されたユーザーは、異議申し立てを行えません。",
      "line_sev": "第7条 利用規約の変更 及び 本サービスの提供の停止",
      "desc_sev": "・本サービスの提供の一時停止　又はサービス終了で、利用者に発生した、いかなる不利益や損害について、一切の責任を負いません。\n・利用規約 及び 本サービスの変更は、予告なくされる場合があります。\n・利用規約の変更 又は サービスの変更に、利用者が同意しない場合、本サービスの利用を停止します。",
      "line_eig": "第8条 その他",
      "desc_eig": "・利用者への通知は、提供サーバーで行われます。\n・当サーバー 及び BOTのソースコードを無断で複製する行為は、決して許されません。"
    },
    "en": {
      "title": "Build Card Terms of Service",
      "line_one": "Article 1: Agreement to Terms",
      "desc_one": "・These terms of service define the conditions for using the BOT developed and published by KFT (hereinafter referred to as \"BOT\").\n・By using the BOT, you are deemed to have agreed to these Build Card Terms of Service.",
      "line_two": "Article 2: Provision of Service",
      "desc_two": "・This service is provided through the Discord server managed by KFT (hereinafter referred to as the \"Designated Server\").\n・The service is basically available free of charge.\n・The content or availability of this service may be changed or terminated at any time without prior notice.",
      "line_thr": "Article 3: Fees and Costs",
      "desc_thr": "・In principle, this service is available for free. However, some features that enhance the service may be paid, and premium services are offered.\n・Any communication or related costs arising from the use of this service shall be borne by the user.\n・Prices for premium services may be changed. If you do not agree with the price changes, certain parts of the service may become unavailable.",
      "line_fou": "Article 4: Handling of User Information",
      "desc_fou": "・As this service uses an Application Programming Interface (hereinafter referred to as \"API\"), user information will be sent to the API provider.",
      "line_fiv": "Article 5: Prohibited Activities",
      "desc_fiv": "・Users of this service are prohibited from engaging in the following activities:\n・Violations of the rules of the designated server or these Build Card Terms of Service.\n・Infringement of copyrights or intellectual property rights related to this service.\n・Use of this service for unauthorized methods or purposes.\n・Destruction or interference with the service.\n・Altering service origins, server URLs, etc., as listed on the Build Card.\n・Posting excessively violent, sexually explicit (including dirty jokes), or offensive content that may cause discomfort to others.\n・Posting or promoting sites, links, or services unrelated to this service through the platform.\n・Any other actions deemed inappropriate.",
      "line_six": "Article 6: Suspension of Service",
      "desc_six": "・If Article 5 is violated, restrictions or suspension of service use may be enforced.\n・Even if Article 5 is not violated, restrictions or suspension may still be applied.\n・Users who have been suspended may file an appeal with KFT or via the designated server.\n・Users banned from the designated server cannot file appeals.",
      "line_sev": "Article 7: Changes to Terms and Suspension of Service",
      "desc_sev": "・We bear no responsibility for any disadvantage or damage incurred by the user due to temporary suspension or termination of the service.\n・Changes to the Terms or the service itself may be made without prior notice.\n・If the user does not agree to the changes, their access to the service will be discontinued.",
      "line_eig": "Article 8: Other",
      "desc_eig": "・Notifications to users will be made through the designated server.\n・Unauthorized reproduction of this server or the BOT's source code is strictly prohibited."
    }
  }
};

// DOMに挿入
const content = translations.terms[lang];

// title変更
document.getElementById("terms-title").textContent = content.title;
document.title = content.title;

// 記事本文の挿入
[
  "line_one", "desc_one",
  "line_two", "desc_two",
  "line_thr", "desc_thr",
  "line_fou", "desc_fou",
  "line_fiv", "desc_fiv",
  "line_six", "desc_six",
  "line_sev", "desc_sev",
  "line_eig", "desc_eig"
].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.innerText = content[id];
});
