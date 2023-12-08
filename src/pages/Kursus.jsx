import { Link } from "react-router-dom";
import kursusData from "../data/kursusData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faEye, faMessage} from "@fortawesome/free-solid-svg-icons";

const Kursus = () => {
  return (
    <main id="artikel">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pb-5">
        <br />
        <br />
        <br />
        <div className="row ">
          {kursusData.map((kursus) => (
            <div className="col-lg-5 col-md-4 m-4 " key={kursus.id}>
              <div className="card" style={{ backgroundColor: "#000000" }}>
                <img
                  style={{ margin: "-1px 0px auto", width: "100%" }}
                  src={kursus.gambar}
                  className="card-img-top"
                  alt={`kursus ${kursus.id}`}
                />
                <div
                  className="col-lg-9 col-md-4 "
                  style={{ margin: "20px auto" }}
                >
                  <h6 style={{ color: "#f8f2f2" }}>{kursus.judul}</h6>
                  <p className="card-text " style={{ color: "#f8f2f2" }}>
                    {kursus.tanggal}
                  </p>
                  <div
                    className="container footer-content"
                    style={{ height: "40px", margin:"auto 180px"}}
                  >
                    <div className="col-lg-2">
                      <div className="d-flex flex-row gap-2">
                        <Link
                          to={"#"}
                          style={{ fontSize: "20px", color: "#f8f2f2" }}
                        >
                          <div className="d-flex flex-row gap-2">
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        <p>45</p>
                        </div>
                        </Link>
                        <Link
                          to={"#"}
                          style={{ fontSize: "20px", color: "#f8f2f2" }}
                        >
                          <div className="d-flex flex-row gap-2">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        <p>40</p>
                        </div>
                        </Link>
                        <Link
                          to={"#"}
                          style={{ fontSize: "20px", color: "#f8f2f2" }}
                        >
                          <div className="d-flex flex-row gap-2">
                            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                        <p>2</p>
                        </div>
                        </Link>
                        
                       
                      </div>
                    </div>
                  </div>
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

export default Kursus;
