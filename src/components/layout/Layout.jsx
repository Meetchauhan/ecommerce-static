import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="">
      {pathname !== "/login" && (
        <header>
          <Navbar />
        </header>
      )}
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
