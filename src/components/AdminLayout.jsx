import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
      <Footer />
    </>
  );
};

export default AdminLayout;
