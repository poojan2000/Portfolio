import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJira,
  DiScrum,
  DiGit,
} from "react-icons/di";
import {
  SiMicrosoftexcel,
  SiPython,
  SiMysql,
  SiAzuredevops,
  SiPowerbi,
  SiTableau,
  SiPowerautomate,
} from "react-icons/si";

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
        <SiAzuredevops />
        <p>Azure DevOps</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerautomate />
        <p>Power Automate</p>
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
        <SiPython />
        <p>Python</p>
      </Col>
    </Row>
  );
}

export default Techstack;
