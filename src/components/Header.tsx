import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">henkan-app</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/full-half">全角/半角</Link></li>
          <li><Link to="/csv-tsv">csv/tsv</Link></li>
          <li><Link to="/head-foot">先頭/末尾</Link></li>
          <li tabIndex={0}>
            <a>
              Parent
              <AiOutlineDown />
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;