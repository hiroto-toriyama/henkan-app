import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from 'react';

const FullHalfPage = () => {
  const [text, setText] = useState("");
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };
  const full2half = (str: string) => {
    type kanaType = {
      [key in string]?: string;
    };
    const kanaMap: kanaType = {
      "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
      "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
      "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
      "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
      "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
      "ヴ": "ｳﾞ", "ヷ": "ﾜﾞ", "ヺ": "ｦﾞ",
      "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
      "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
      "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
      "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
      "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
      "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
      "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
      "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
      "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
      "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
      "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
      "ッ": "ｯ", "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
      "。": "｡", "、": "､", "ー": "ｰ", "「": "｢", "」": "｣", "・": "･",
      '”': '"', "’": "'", "‘": "`", "＄": "$"
    };
    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str.replace(/[Ａ-Ｚａ-ｚ０-９ ％＆（）＝～｜－＾｛＋＊｝＜＞？＿＠；：]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    }).replace(reg, (s) => {
      return kanaMap[s] ?? s;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-5 p-5">
        <div className="font-bold text-2xl mb-5">全角を半角に変換</div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Input Text</span>
          </label> 
          <textarea value={text} onChange={onChange} className="textarea textarea-bordered h-36" placeholder="ここに入力してください" spellCheck={false}></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Output Text</span>
          </label> 
          <textarea value={full2half(text)} onChange={()=>{}} className="textarea textarea-bordered h-36" placeholder="ここに変換結果が表示されます" spellCheck={false}></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullHalfPage;