import { Outlet} from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Home/Service/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;