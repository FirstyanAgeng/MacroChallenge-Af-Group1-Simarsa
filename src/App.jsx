import { Routes, Route } from "react-router-dom";
import HubungiKami from "./pages/HubungiKami";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import DaftarDokter from "./pages/JadwalDokter";
import Pendaftaran from "./pages/Pendaftaran";
import AdminHome from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import DataDokter from "./pages/admin/DataDokter";

import {
  HOME,
  ABOUT,
  DAFTAR,
  DOKTER,
  LAYANAN,
  HUBUNGI,
  ADMIN_DASHBOARD,
  LOGIN,
  DATA_DOKTER
} from "./router";

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Beranda />} />
        <Route path={ABOUT} element={<TentangKami />} />
        <Route path={LAYANAN} element={<Layanan />} />
        <Route path={DOKTER} element={<DaftarDokter />} />
        <Route path={DAFTAR} element={<Pendaftaran />} />
        <Route path={HUBUNGI} element={<HubungiKami />} />
        <Route path={ADMIN_DASHBOARD} element={<AdminHome />} />
        <Route path={LOGIN} element={<Login/>}/>
        <Route path={DATA_DOKTER} element={<DataDokter/>}/>
      </Routes>
    </>
  );
}

export default App;
