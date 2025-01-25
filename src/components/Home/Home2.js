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
              Hi I'm <span className="green"> Austin Tung </span>
            </h1>
            <p className="home-about-body">
              I am a Data Scientist with a passion for tackling complex challenges through innovative technology. \
              With expertise in Machine Learning, I’ve developed impactful solutions, including systems for anomaly detection and preventative maintenance in manufacturing, driving measurable results and creating value.
              <br />
              <br />
              Currently pursuing a Master’s degree in Computer Science at Georgia Tech, I am driven by a deep curiosity to learn and a commitment to excellence. 
              Whether I’m building scalable systems or mentoring engineers, I thrive in environments that encourage collaboration and innovation.
              <br />
              <br />
              In my free time, I enjoy traveling, kickboxing, playing video games, and exploring creative projects. I’m always excited to bring my skills and enthusiasm to teams that share a vision for meaningful impact.
              <br />
              <br />
              Here, you’ll find my portfolio, insights, and projects that showcase my work. Whether you’re here to collaborate or learn more about my journey, I’m excited to share my world with you.
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
      <Container className="tester">
        <Col md={12} className="home-about-social">
        <h1>Experience</h1>
        </Col>
        <Timeline />
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
      {/* <Projects /> */}
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
