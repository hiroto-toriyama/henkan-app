import Footer from "../components/Footer";
import Header from "../components/Header";
import TopCards, { TopCardsPropsType } from "../components/TopCards";

const TopPage = () => {
  const topCardsProps = [
    {
      title: "全角/半角",
      text: "全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ",
      linkTo: "/full-half"
    },
    {
      title: "csv/tsv",
      text: "カンマ区切り(csv)、タブ区切り(tsv)、スペース区切り(ssv)を相互に変換できるよ",
      linkTo: "/csv-tsv"
    },
    {
      title: "先頭/末尾",
      text: "文章各行の先頭や末尾に任意の文字列を追加できるよ",
      linkTo: "/csv-tsv"
    },
  ];

  return  (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-5">
        文字列をいろいろ変換するwebアプリだよ
        <TopCards topCardsProps={topCardsProps} />
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;