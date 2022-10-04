import TopCard, { TopCardPropsType } from "./TopCard";

export type TopCardsPropsType = {
  topCardsProps: TopCardPropsType[] 
};

// bg-primary text-primary-content
// bg-secondary text-secondary-content
// bg-accent text-accent-content
// bg-neutral text-neutral-content

const TopCards = ({topCardsProps}: TopCardsPropsType) => {
  const colorList = [
    "primary",
    "secondary",
    "accent",
    "neutral"
  ];

  return (
    <div className="flex flex-wrap my-5 -m-5">
      {
        topCardsProps.map((topCardProps, index) => {
          return <TopCard title={topCardProps.title}
                          text={topCardProps.text}
                          linkTo={topCardProps.linkTo}
                          // color={colorList[Math.floor(Math.random()*colorList.length)]}
                          key={index}
                  />;
        })
      }
    </div>
  );
};

export default TopCards;