import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { getCurrentUrl } from "./helpers";
import Login from "./components/admin/login";

function App() {
  return (
    <div className={`App ${getCurrentUrl() === "dining" ? "dining" : ""}`}>
      {/* <MainLayout /> */}
      <Routes>
        <Route path={`/${getCurrentUrl()}/login-rr`} element={<Login />}></Route>
        <Route path="/*" element={<MainLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
