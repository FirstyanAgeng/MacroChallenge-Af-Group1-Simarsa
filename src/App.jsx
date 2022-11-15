import { Routes, Route } from "react-router-dom";

import Navigasi from "./components/Navbar";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Fasilitas from "./pages/Fasilitas";
import DaftarDokter from "./pages/JadwalDokter";
import Pendaftaran from "./pages/Pendaftaran";
import { HOME, ABOUT, DAFTAR, DOKTER, FASILITAS } from "./router";

function App() {
  return (
    <>
      <Navigasi />
      <Routes>
        <Route path={HOME} element={<Beranda />} />
        <Route path={ABOUT} element={<TentangKami />} />
        <Route path={FASILITAS} element={<Fasilitas />} />
        <Route path={DOKTER} element={<DaftarDokter />} />
        <Route path={DAFTAR} element={<Pendaftaran />} />
      </Routes>
    </>
  );
}

export default App;
