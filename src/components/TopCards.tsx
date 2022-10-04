import TopCard, { TopCardPropsType } from "./TopCard";

export type TopCardsPropsType = {
  topCardsProps: TopCardPropsType[] 
};

const TopCards = ({topCardsProps}: TopCardsPropsType) => {
  return (
    <div className="flex flex-wrap my-5 -m-5">
      {
        topCardsProps.map((topCardProps) => {
          return <TopCard title={topCardProps.title} text={topCardProps.text} linkTo={topCardProps.linkTo} />;
        })
      }
    </div>
  );
};

export default TopCards;