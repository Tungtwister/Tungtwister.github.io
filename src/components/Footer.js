import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ alignItems: "center" }}>
        <Col md={6} className="footer-copywright" style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <h3>Austin Tung · {year}</h3>
        </Col>
        <Col md={6} className="footer-body" style={{ textAlign: "right", paddingRight: "2rem" }}>
          <ul className="footer-icons" style={{ listStyle: "none", display: "inline-flex", gap: "16px", margin: 0, padding: 0 }}>
            <li>
              <a
                href="https://github.com/Tungtwister"
                style={{ color: "#a8c8a6", fontSize: "1.2rem" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/atung1/"
                style={{ color: "#a8c8a6", fontSize: "1.2rem" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:austin.tung56@gmail.com"
                style={{ color: "#a8c8a6", fontSize: "1.2rem" }}
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
