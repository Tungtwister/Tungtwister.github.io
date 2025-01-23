import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/BanffAustin.jpg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Projects from "../Projects/Projects";
import Timeline from "./Timeline";
import Education from "../Education/Education";

import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m [Your Name], a passionate [your field/expertise] with a focus on [your specialty or unique value]. With experience in [specific areas or skills], I thrive on solving complex challenges and creating impactful solutions.
              <br />
              <br />
              Here, you’ll find my portfolio, insights, and projects that showcase my work in [your field, e.g., data science, machine learning, etc.]. Whether you’re here to collaborate, learn more about my journey, or explore my services, I’m excited to share my world with you.
              <br />
              <br />
              Feel free to connect, explore, and reach out—I’d love to hear from you!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} alt="avatar" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Experience</h1>
          </Col>
          <Timeline />
        </Row>
      </Container>
      <Container>
        <Education />
      </Container>
      <Container fluid className="about-section">
        <h1 className="project-heading">
          Professional <strong className="green">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
      {/* Projects Section */}
      <Projects />
      <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Reach Out to me!</h1>
              <p>
                Feel free to <span className="green">connect </span>with me
              </p>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tungtwister"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:austin.tung56@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atung1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/austintungg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
