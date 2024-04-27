import Footer from "../Footer";
import Header from "../Header";

import "./style.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />

        <div id="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
