import "../scss/skeleton.scss";
import { getResortsInfo, getResortInfo } from "../firebase";
const LayoutLoading = () => {
  getResortsInfo();
  // getResortInfo("the-royal-islander");
  return (
    <div className="skeleton Loader">
      <div className="header"></div>
      <div className="container">
        <div className="itemNotFound">Not Found | 404</div>
      </div>
    </div>
  );
};
export default LayoutLoading;
