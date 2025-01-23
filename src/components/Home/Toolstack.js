import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
} from "react-icons/si";
import {
  DiGithubAlt,
  DiWindows
} from "react-icons/di";
import { 
  BiLogoMicrosoftTeams 
} from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoMicrosoftTeams />  
      </Col>
    </Row>
  );
}

export default Toolstack;
