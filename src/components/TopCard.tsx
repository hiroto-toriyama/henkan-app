import { Link } from "react-router-dom";

type TopCardPropsType = {
  title: string;
  text: string;
  linkTo: string;
  color?: string;
}

const TopCard = ({title, text, linkTo, color="accent"}: TopCardPropsType) => {
  return (
    <div className={`flex-auto card w-96 bg-${color} text-${color}-content m-5`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link to={linkTo} className="btn">USE THIS</Link>
        </div>
      </div>
    </div>
  );
};

export default TopCard;