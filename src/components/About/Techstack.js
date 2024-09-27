import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiJira,
  DiReact,
  DiScrum,
  DiGit,
  DiJava,
  DiTrello,
} from "react-icons/di";
import {
  SiMicrosoftexcel,
  SiPython,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <p>Scrum</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira/>
        <p>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />  
        <p>Trello</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <p>Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p>Python</p>
      </Col>
    </Row>
  );
}

export default Techstack;
