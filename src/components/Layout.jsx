import NavigasiBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavigasiBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
