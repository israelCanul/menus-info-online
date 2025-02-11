import { useState, createContext } from "react";
const MyContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [admin, setAdmin] = useState();
  return (
    <MyContext.Provider value={{ data, setData, admin, setAdmin }}>
      {children}
    </MyContext.Provider>
  );
};

export { DataProvider, MyContext };
