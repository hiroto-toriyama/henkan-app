import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const HeadFootPage = () => {
  const [text, setText] = useState("");
  const [headWord, setHeadWord] = useState("");
  const [footWord, setFootWord] = useState("");

  const trans = (str: string) => {
    return str.split("\n").map((line) => {
      return headWord + line + footWord;
    }).join("\n");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="grow container mx-auto my-5 p-5">

        <div className="font-bold text-2xl mb-5">先頭と末尾に追加</div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">先頭に追加する文字列</span>
          </label> 
          <input type="text" value={headWord} onChange={(e)=>{setHeadWord(e.target.value)}} className="input input-bordered" placeholder="ここに入力してください" spellCheck={false}></input>
        </div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">末尾に追加する文字列</span>
          </label> 
          <input type="text" value={footWord} onChange={(e)=>{setFootWord(e.target.value)}} className="input input-bordered" placeholder="ここに入力してください" spellCheck={false}></input>
        </div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Input Text</span>
          </label> 
          <textarea value={text} onChange={(e)=>{setText(e.target.value)}} className="textarea textarea-bordered h-36" placeholder="ここに入力してください" spellCheck={false}></textarea>
        </div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Output Text</span>
          </label> 
          <textarea value={trans(text)} onChange={()=>{}} className="textarea textarea-bordered h-36" placeholder="ここに変換結果が表示されます" spellCheck={false}></textarea>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default HeadFootPage;