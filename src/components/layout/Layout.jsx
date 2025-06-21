import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
