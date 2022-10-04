import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import RadioButtonList from "../components/RadioButtonList";

type transKeyType = "csv" | "tsv" | "ssv";
type transMapType = {
  [key in transKeyType]: string;
};

const isTransKey = (str: any): str is transKeyType => {
  return str === "csv" || str === "tsv" || str === "ssv";
}

const HeadFootPage = () => {
  const [text, setText] = useState("");
  const [radioInput, setRadioInput] = useState<transKeyType>("csv");
  const [radioOutput, setRadioOutput] = useState<transKeyType>("tsv");
  const transKey: transKeyType[] = ["csv", "tsv", "ssv"];
  const transMap: transMapType = {
    "csv": ",",
    "tsv": "\t",
    "ssv": " ",
  };

  const trans = (str: string) => {
    const reg = new RegExp(transMap[radioInput], 'g');
    return str.replace(reg, (s) => {
      return transMap[radioOutput];
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="grow container mx-auto my-5 p-5">

        <div className="font-bold text-2xl mb-5">{radioInput}を{radioOutput}に変換</div>

        <div className="flex my-5">
          <RadioButtonList name="radio-input" value={transKey} onChange={(e)=>{isTransKey(e.target.value) ? setRadioInput(e.target.value) : {}}} state={radioInput} />
          <div className="my-auto mx-12">
            <AiFillCaretRight size={24} />
          </div>
          <RadioButtonList name="radio-output" value={transKey} onChange={(e)=>{isTransKey(e.target.value) ? setRadioOutput(e.target.value) : {}}} state={radioOutput} />
        </div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Input Text ({radioInput}) </span>
          </label> 
          <textarea value={text} onChange={(e)=>{setText(e.target.value)}} className="textarea textarea-bordered h-36" placeholder="ここに入力してください" spellCheck={false}></textarea>
        </div>

        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Output Text ({radioOutput}) </span>
          </label> 
          <textarea value={trans(text)} onChange={()=>{}} className="textarea textarea-bordered h-36" placeholder="ここに変換結果が表示されます" spellCheck={false}></textarea>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default HeadFootPage;