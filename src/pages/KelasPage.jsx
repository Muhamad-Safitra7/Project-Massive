import { Link } from "react-router-dom";
import KelasData from "../data/kelasData.json";

const KelasPage = () => {
  return (
    <main id="kelas">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pt-5 pb-5">
        <div className="container text-center " >
          <br />
          <br />
          <h1>Pilihan Kelas</h1>
          <p>
            Kelas komunikasi yang membantu anda untuk menjadi pribadi yang bukan
            hanya mahir dalam public speaking,
            <br /> namun juga memiliki value sebagai pembicara yang bertanggung
            jawab dan membawa
            <br /> dampak positif dengan kurikulum implementatif dan metode
            experential learning.
          </p>
          <br />
          <br />
        </div>
        <div className="row">
          {KelasData.map((kelas) => (
            <div
              className="col-lg-4 col-m-3 text-center"
              key={kelas.id}
              style={{ margin: "20px auto" }}
            >
              <h5>{kelas.judul}</h5>
              <div
                className="card text-center"
                style={{ borderRadius: "none" }}
              >
                <div
                  className="card-body text-center "
                  style={{ backgroundColor: "#000000" }}
                >
                  <p className="card-text" style={{ color: "#f8f2f2" }}>
                    <br />
                    {kelas.deskripsi}
                  </p>
                </div>
                <div className="card-footer">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h6 style={{marginRight: "3px" }}>Durasi : {kelas.durasi} menit</h6>
                    <h6>Rp. {kelas.harga}</h6>
                  </div>
                  <h6>Lokasi : {kelas.Lokasi}</h6>
                  <Link
                    to={`/detail/${kelas.id}`}
                    className="btn btn-primary w-70"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
};

export default KelasPage;
