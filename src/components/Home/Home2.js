import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myImg from "../../Assets/headshot.jpg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Projects from "../Projects/Projects";

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
              WIP
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="green"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="green">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="green">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="green">Node.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="rounded-circle" alt="avatar" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Experience</h1>
          </Col>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(26, 77, 46)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(26, 77, 46)' }}
              dateClassName="home-timeline-date-right"
              date="2011 - present"
              iconStyle={{ background: 'rgb(26, 77, 46)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Data Science Engineer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="home-timeline-date-left"
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Systems Engineer, MES
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="home-timeline-date-right"
              date="2008 - 2010"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Associate Machine Learning Developer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="home-timeline-date-left"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Associate Systems Engineer, MES
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="home-timeline-date-right"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Curriculum Developer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Remote
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="home-timeline-date-left"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Software Engineer Intern
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Riverside, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            />
          </VerticalTimeline>
        </Row>
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
