import { Link } from "react-router-dom";
import { getLastUlrPath, makeUrlToSection } from "../helpers";

const Header = ({ config }) => {
  const urlPath = getLastUlrPath();

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${config.Background})` }}
    >
      <div className="logo">
        {urlPath ? (
          <div className="nav">
            <Link to={urlPath}>
              <span className="material-icons">keyboard_arrow_left</span>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="img">
          <a href="https://www.royalresorts.com/">
            <img src={config.Logo} alt="Logo Royal Resorts" />
          </a>
        </div>
      </div>
      <div className="title">
        <h4 style={{ textTransform: "uppercase" }}>{config.Name}</h4>
        <h2>{config.Title}</h2>
        <h5 style={{ fontStyle: "italic" }}>{config.subTitle}</h5>
      </div>

      <div className="search"></div>
    </div>
  );
};

export default Header;
