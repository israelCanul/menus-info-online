import { useContext } from "react";
import { Link } from "react-router-dom";
import { makeUrlToSection } from "../helpers";
import { MyContext } from "../provider/DataProvider"
import Admin from "../components/admin/admin";
import { useState } from "react";
import EditImg from "../imgs/edit-3-svgrepo-com.svg"

const Container = ({ options, fReference, config, ...props }) => {
  const userContext = useContext(MyContext);
  const [openAdmin, setOpenAdmin] = useState(false);

  const items = options
    .sort((a, b) => a.Order - b.Order)
    .map((item, index) => {
      let link = (
        <li key={index} className="lista-option">
          {item.action ? (
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              href={`${item.action}`}
            >
              {item.Config.Name}
            </a>
          ) : (
            <Link className="link" to={makeUrlToSection(item.Url)}>
              {item.Config.Name}
            </Link>
          )}
        </li>
      );

      return link;
    });
  return (
    <div className="container">
      <div className="imageContainer">
        {props.Icon && <img src={props.Icon} alt="Menus" />}
        {props.Description && <h3>{props.Description}</h3>}
        {props.DescriptionEs && <h4>{props.DescriptionEs}</h4>}
      </div>

      <div className="listContainer">

        {
          userContext.admin?.admin ?
            <div className="actionsAdmin">
              <a onClick={e => setOpenAdmin(true)} href="#">Edit <img width={25} src={EditImg} alt="Edit Icon" /></a>
            </div> : ""
        }
        {
          userContext.admin?.admin && openAdmin ? <>

            <Admin callback={setOpenAdmin} referencia={fReference} />
          </> : ""
        }
        {
          config?.more ? <div className="moreSection" style={{ maxWidth: "600px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: config?.more }}></div> : ""
        }

        <ul className="lista clearfix">{items}</ul>
      </div>
    </div>
  );
};
export default Container;
