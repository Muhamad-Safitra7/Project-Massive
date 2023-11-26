import React from "react";
import "./css/kelas.css";

function KelasPage() {
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
      <h1>Pilihan kelas</h1>

      <p style={{ fontSize: "14px", text: "center" }}>
        {" "}
        Kelas komunikasi yang membantu Anda untuk menjadi pribadi yang bukan
        hanya mahir dalam public speaking,
        <br /> namun juga memiliki value sebagai seorang pembicara yang
        bertanggung jawab dan membawa
        <br />
        dampak positif dengan kurikulum implementatif dan metode experential
        learning.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="text-center">  
         <h1 style={{ fontSize: "20px" }}> KELAS REGULER</h1>
        <div style={{ backgroundColor: "#000000" }}>
          <h1 style={{ fontSize: "20px" }}> KELAS REGULER</h1>
          <p style={{ fontSize: "12px", color: "#d5d5d5" }}>
            {" "}
            Kelas Reguler memiliki intensitas pertemuan beragam, <br />
            mulai dari 2 hingga 4 kali pertemuan dengan pembahasan yang lebih
            mendalam. <br />
            Metode experiential learning diaplikasikan juga di kelas ini.
          </p>
          <div
            className="ziko-1"
            style={{
              backgroundColor: "#d5d5d5",
              bottom: "-100px",
              left: "-21px",
              position: "relative",
            }}
          >
            <p style={{ fontSize: "12px" }}>Durasi : 60-90 menit</p>
            <p style={{ fontSize: "12px" }}>Lokasi : zoom meet</p>
            <p
              style={{
                fontSize: "12px",
                top: "-50px",
                left: "200px",
                position: "relative",
              }}
            >
              Rp. 150.000
            </p>
          </div>
        </div>
        </div>
        <div className="text-center">
        <h1 style={{ fontSize: "20px" }}> KELAS LEADERSHIP</h1>
        <div  style={{ backgroundColor: "#000000" }}>
          
          <p style={{ fontSize: "12px", color:'#d5d5d5'}}>
            {" "}
            Kelas Public Speaking Bahasa Asing memiliki intensitas pertemuan
            beragam, <br />
            mulai dari 2 hingga 4 kali pertemuan dengan pembahasan yang lebih
            mendalam. <br />
            Metode experiential learning diaplikasikan juga di kelas ini.
          </p>
          <div
            className="ziko-1"
            style={{
              backgroundColor: "#d5d5d5",
              bottom: "-100px",
              left: "-21px",
              position: "relative",
            }}
          >
            <p style={{ fontSize: "12px" }}>Durasi : 60-120 menit</p>
            <p style={{ fontSize: "12px" }}>Lokasi : zoom meet</p>
            <p
              style={{
                fontSize: "12px",
                top: "-50px",
                left: "200px",
                position: "relative",
              }}
            >
              Rp. 250.000
            </p>
            </div>
          </div>
        </div>
        <div className="text-center">
        <h1 style={{ fontSize: "20px", top:'px' }}>
            {" "}
            KELAS PUBLIC SPEAKING <br />
            BAHASA ASING
          </h1>
          
        <div  style={{ backgroundColor: "#000000" }}>
          
          <p style={{ fontSize: "12px", color:'#d5d5d5'}}>
            {" "}
            Kelas Public Speaking Bahasa Asing memiliki intensitas pertemuan
            beragam, <br />
            mulai dari 2 hingga 4 kali pertemuan dengan pembahasan yang lebih
            mendalam. <br />
            Metode experiential learning diaplikasikan juga di kelas ini.
          </p>
          <div
            className="ziko-1"
            style={{
              backgroundColor: "#d5d5d5",
              bottom: "-75px",
              left: "-21px",
              position: "relative",
            }}
          >
          <p style={{ fontSize: "12px" }}>Durasi : 60-90 menit</p>
          <p style={{ fontSize: "12px" }}>Lokasi : zoom meet</p>
          <p style={{
                fontSize: "12px",
                top: "-50px",
                left: "200px",
                position: "relative",
              }}>Rp. 250.000</p>
          <div className="ziko-2">
          <p style={{}}>Checkout</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KelasPage;
