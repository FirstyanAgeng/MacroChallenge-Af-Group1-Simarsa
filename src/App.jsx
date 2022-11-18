import { Routes, Route } from "react-router-dom";
import HubungiKami from "./pages/HubungiKami";
import Navigasi from "./components/Navbar";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import DaftarDokter from "./pages/JadwalDokter";
import Pendaftaran from "./pages/Pendaftaran";
import Footer from "./components/Footer";
import { HOME, ABOUT, DAFTAR, DOKTER, LAYANAN, HUBUNGI } from "./router";

function App() {
  return (
    <>
      <Navigasi />
      <Routes>
        <Route path={HOME} element={<Beranda />} />
        <Route path={ABOUT} element={<TentangKami />} />
        <Route path={LAYANAN} element={<Layanan />} />
        <Route path={DOKTER} element={<DaftarDokter />} />
        <Route path={DAFTAR} element={<Pendaftaran />} />
        <Route path={HUBUNGI} element={<HubungiKami />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
