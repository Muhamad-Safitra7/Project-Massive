import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Video() {
  return (
    <main id="Video">
      <section style={{ backgroundColor: "#d5d5d5"}}>
        <div>
          <br />
          <br />
          <br />
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-lg-4 col-mb-3 m-3"
              style={{ position: "relative" }}
            >
              <img
                src="./public/assets/video/1.png"
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Video Thumbnail"
              />
              <div
                className="d-flex flex-row gap-2 d-flex flex-column align-items-center"
                style={{
                  position: "absolute",
                  top: "65%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Link to={"#"} style={{ fontSize: "30px", color: "#C92F2D" }}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>71.1k</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>263</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>1082</p>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-mb-3 m-3"
              style={{ position: "relative" }}
            >
              <img
                src="./public/assets/video/3.png"
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Video Thumbnail"
              />
              <div
                className="d-flex flex-row gap-2 d-flex flex-column align-items-center"
                style={{
                  position: "absolute",
                  top: "65%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Link to={"#"} style={{ fontSize: "30px", color: "#C92F2D" }}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>71.1k</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>263</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "f8f2f2" }}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>1082</p>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-mb-3 m-3"
              style={{ position: "relative" }}
            >
              <img
                src="./public/assets/video/3.png"
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Video Thumbnail"
              />
              <div
                className="d-flex flex-row gap-2 d-flex flex-column align-items-center"
                style={{
                  position: "absolute",
                  top: "65%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Link to={"#"} style={{ fontSize: "30px", color: "#C92F2D" }}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>71.1k</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>263</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>1082</p>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-mb-3 m-3"
              style={{ position: "relative" }}
            >
              <img
                src="./public/assets/video/1.png"
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Video Thumbnail"
              />
              <div
                className="d-flex flex-row gap-2 d-flex flex-column align-items-center"
                style={{
                  position: "absolute",
                  top: "65%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Link to={"#"} style={{ fontSize: "30px", color: "#C92F2D" }}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>71.1k</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>263</p>
                </Link>
                <Link to={"#"} style={{ fontSize: "30px", color: "#f8f2f2" }}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <p style={{ fontSize: "25px", marginLeft: "-10px" }}>1082</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
