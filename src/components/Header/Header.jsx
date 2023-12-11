import React from "react";
import "./Header.css";
import { Row, Col } from "react-bootstrap";
import Logo from "../../img/Logo.svg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const [showReg, setShowReg] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const handleOpenReg = () => setShowReg(true);
  const handleOpenLog = () => setShowLog(true);
  const handleClose = () => {
    setShowReg(false);
    setShowLog(false);
  };

  return (
    <div className="Header">
      <Modal
        show={showLog}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="Modals"
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showReg}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="Modals"
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Phone number" />
            <input type="password" placeholder="New password" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container container_head">
        <Row>
          <Col className="col__left">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </Col>
          <Col id="nav_col">
            
              <a href="#">Product</a>
              <a href="#">Use cases</a>
              <a href="#">Learn</a>
              <a href="#">About</a>
              <a href="#">Jobs</a>
           
          </Col>
          <Col>
            <a href="#">
              <button className="register_btn" onClick={handleOpenReg}>
                Register
              </button>
            </a>
            <a href="#">
              <button className="login_btn" onClick={handleOpenLog}>
                Login
              </button>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
