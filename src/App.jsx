import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Video from "./pages/Video";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import Artikel from "./pages/Artikel";
import Webinar from "./pages/Webinar";
import Kursus from "./pages/Kursus";
import DetailArtikel from "./pages/DetailArtikel";
import PembayaranSukses from "./pages/PembayaranSukses";
import PembayaranGagal from "./pages/PembayaranGagal";
import Pembayaran from "./pages/Pembayaran";
import Profil from "./pages/profil";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Helmet>
          <title>Nusa Tech.</title>
        </Helmet>

        <NavbarComponent />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/daftar" Component={Daftar} />
          <Route path="/video" Component={Video} />
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/webinar" Component={Webinar} />
          <Route path="/artikel" Component={Artikel} />
          <Route path="/kursus" Component={Kursus} />
          <Route path="/detail/:id" Component={DetailArtikel} />
          <Route path="/sukses" Component={PembayaranSukses} />
          <Route path="/gagal" Component={PembayaranGagal} />
          <Route path="/bayar" Component={Pembayaran} />
          <Route path="/profil" Component={Profil}/>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
