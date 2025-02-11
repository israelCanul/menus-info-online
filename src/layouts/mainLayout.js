import { useState, useEffect, useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { getResortsInfo } from "../firebase";
import Home from "./home";
import "../scss/app.scss";
import LayoutLoading from "./layoutLoading";
import {  checkForUser} from "../firebase"
import { MyContext } from "../provider/DataProvider";

const Layout = ({ children }) => {
  let navigate = useNavigate();
  const context = useContext(MyContext);
  const [datos, setData] = useState();
  const [urldata, setUrlData] = useState({});
  useEffect(() => {
    getResortsInfo((data, err) => {
      if (data) {
        // console.log("si llego aqui", data);        
        setData(data);
      } else {
        setData([]);
        console.error("MainLayout", err);
      }
    });
    return () => {
      return;
    };
  }, []);

  // console.log(datos);
  

  
  useEffect(() => {
    checkForUser((user) => {
      if (user) {
        // getting permissions from BD by User
        context.setAdmin({admin: user});
      }
    });
    return () => {
      return;
    };
  }, []);
 

  return (
    <>
      {datos ? <Home data={datos} header={datos.Config} /> : <LayoutLoading />}
    </>
  );
};

export default Layout;
