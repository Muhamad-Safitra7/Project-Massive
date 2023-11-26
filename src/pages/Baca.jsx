const Baca = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#c3e6cb",
      }}
    >
      <div>
        <h1 style={{ fontSize: "20px", bottom: "-20px", position: "relative" }}>
          {" "}
          Seni Menguasai Berbicara di Depan Umum <br />
          Membangun Koneksi yang Berdampak{" "}
        </h1>
        <div
          className="ziko-1"
          style={{
            backgroundColor: "black",
            bottom: "-50px",
            left: "21px",
            height: "467px",
            width: "529px",
            position: "relative",
          }}
        >
          <div className="box-container">
            <div className="box">
              <img
                src="/assets/halaman artikel/1.png"
                alt="gambar 1"
                style={{ height: "259px", width: "461px", bottom: "50" }}
              />
              <p style={{ color: "#d5d5d5" }}>
                Berbicara di depan umum merupakan <br />
                salah satu keterampilan paling <br /> berpengaruh dan
                memberdayakan... Selengkapnya
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{ position: "relative", fontSize: "20px", bottom: "-100px" }}
          >
            {" "}
            Pentingnya Keterampilan Berbicara Di Depan Umum{" "}
          </h1>

          <div
            className="ziko-1"
            style={{
              backgroundColor: "black",
              bottom: "-100px",
              left: "21px",
              height: "467px",
              width: "529px",
              position: "relative",
            }}
          >
            <div className="box">
              <img
                src="/assets/halaman artikel/2.png"
                alt="gambar 2"
                style={{
                  height: "259px",
                  width: "461px",
                  bottom: "-30px",
                  position: "relative",
                }}
              />
              <p style={{ position: "relative", color: "#d5d5d5", bottom: '-50px' }}>
                Kenapa harus menguasai berbicara di depan umum? <br />
                Selengkapnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baca;
