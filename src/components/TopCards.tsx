import TopCard from "./TopCard";

const TopCards = () => {
  const title = "全角/半角";
  const text = "全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ";
  const linkTo = "/full-half";

  return (
    <div className="flex flex-wrap my-5 -m-5">
      <TopCard title={title} text={text} linkTo={linkTo} />
      <TopCard title={title} text={text} linkTo={linkTo} />
      <TopCard title={title} text={text} linkTo={linkTo} />
    </div>
  );
};

export default TopCards;