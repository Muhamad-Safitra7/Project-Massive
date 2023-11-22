import React, {useState, useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Daftar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showFBModal, setShowFBModal] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [showTwitterModal, setShowTwitterModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken") && Cookies.get("isLoggedIn") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: username,
        password: password,
      });

      // Set cookie
      Cookies.set("isLoggedIn", "true", { path: "/", expires: 7 });
      localStorage.setItem("userToken", response.data.token);
      setShowError(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setShowError(true);
    }
  };

  const handleFBLogin = () => {
    setShowFBModal(true);
    // Call Facebook API to login
  };

  const handleFBModalClose = () => {
    setShowFBModal(false);
  };

  const handleGoogleLogin = () => {
    setShowGoogleModal(true);
    // Call Google API to login
  };

  const handleGoogleModalClose = () => {
    setShowGoogleModal(false);
  };

  const handleTwitterLogin = () => {
    setShowTwitterModal(true);
    // Call Twitter API to login
  };

  const handleTwitterModalClose = () => {
    setShowTwitterModal(false);
  };

  return (
    <Container className="login-container" style={{width: "450px",}}>
      <h1 className="login-header text-center" >NusaTech</h1>
      <Form onSubmit={handleSubmit} className="text-center">
      <p style={{display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px"}}>Username</p>
        <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center align-items-center " >
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control-sm"
            style={{border: "1px solid black", borderRadius: "30px", height: "35px", marginBottom: "10px"}}
          />
        </Form.Group>
        <p style={{display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px"}}>Password</p>
        <Form.Group controlId="formBasicPassword" className="d-flex justify-content-center align-items-center ">
          <Form.Control
            type="password"
            placeholder="Password "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control-sm"
            style={{border: "1px solid black", borderRadius: "30px", height: "35px",marginBottom: "10px"}}
          />
        </Form.Group>
        
		<p style={{display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px"}}>Konfirmasi Password</p>
        <Form.Group controlId="formBasicPassword 1" className="d-flex justify-content-center align-items-center ">
          <Form.Control
            type="text"
            placeholder="Konfirmasi Password "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control-sm"
            style={{border: "1px solid black", borderRadius: "30px", height: "35px",marginBottom: "20px"}}
          />
        </Form.Group>

        <div  >
          <Button variant="primary" style={{width : "350px"}} >Daftar</Button>
        </div>
        
        {showError && (
          <Alert variant="danger" className="mt-3">
            Daftar failed. Please check your email and password.
          </Alert>
        )}
        
        
      </Form>

      <div className="my-3 text-center">
        <span>Or sign in with:</span>
      </div>

      <div className="d-flex justify-content-center">
        <Button  className="mr-3" style={{marginLeft: "20px",}} onClick={handleGoogleLogin}>
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        </Button>
        <Button  style={{marginLeft: "20px",}} onClick={handleFBLogin}>
          <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" />
        </Button>
        <Button className="ml-3" style={{marginLeft: "20px",}} onClick={handleTwitterLogin}>
          <FontAwesomeIcon icon={faTwitter} className="mr-2" />
        </Button>
      </div>
<Modal show={showFBModal} onHide={handleFBModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Facebook Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFBModalClose}>
            Close
          </Button>
          <Button variant="primary">Login with Facebook</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showGoogleModal} onHide={handleGoogleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Google Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleGoogleModalClose}>
            Close
          </Button>
          <Button variant="primary">Login with Google</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTwitterModal} onHide={handleTwitterModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Twitter Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTwitterModalClose}>
            Close
          </Button>
          <Button variant="primary">Login with Twitter</Button>
        </Modal.Footer>
      </Modal>

      
    </Container>
  );
};

export default Daftar;