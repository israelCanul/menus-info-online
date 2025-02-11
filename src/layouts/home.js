import { useLocation } from "react-router-dom";
import { getObjFromUrl, getUrlPath, overrideConfig } from "../helpers";
import Header from "./header";
import SkeletonLayout from "./layoutNotFound";
import ContainerOptions from "./container";
import ImageContainer from "../components/ImageContainer";

const Home = ({ data, header }) => {
  // const [localHeader, setLocalHeader] = useState(header);

  let urls = getUrlPath();
  urls.pop();
  const datos = getObjFromUrl(data);
  let location = useLocation();
  let localHeader = header;

  // console.log(data);
  // console.log(datos);


  if (datos) {
    let configHeader = datos.Config;
    localHeader = overrideConfig(header, configHeader);
  }

  if (!datos) {
    return <SkeletonLayout />;
  }
  if (datos.img) {
    return <ImageContainer img={datos.img} name={localHeader.Name} />;
  }
  return (
    <>
      <Header config={localHeader} />
      {datos.Options && datos.Options.length > 0 ? (
        <ContainerOptions
          fReference={datos?.Config?.ref}
          options={datos.Options}
          Description={datos.Description || null}
          DescriptionEs={datos.DescriptionEs || null}
          Icon={localHeader.Icon || null}
          config={localHeader}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Home;
