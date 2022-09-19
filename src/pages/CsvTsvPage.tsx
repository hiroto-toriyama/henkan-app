import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const CsvTsvPage = () => {
  const [text, setText] = useState("");
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };
  const csv2tsv = (str: string) => {
    return str;
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
          <textarea value={csv2tsv(text)} className="textarea textarea-bordered h-36" placeholder="ここに変換結果が表示されます" spellCheck={false}></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CsvTsvPage;