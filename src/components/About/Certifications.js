import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Certifications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={6} className="cert-achieve-col">
        <Card className="quote-card-view h-100">
          <Card.Body>
            <h3 className="purple">Certifications</h3>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Lean Six Sigma Green Belt (KPMG)
              </li>
              <li className="about-activity">
                <ImPointRight /> CAPM Certification (PMI)
              </li>
              <li className="about-activity">
                <ImPointRight /> Foundations of Project Management (Google)
              </li>
              <li className="about-activity">
                <ImPointRight /> Business Analysis for Project Managers & Root Cause Analysis (LinkedIn)
              </li>
              <li className="about-activity">
                <ImPointRight /> Certified Scrum Master (Scrum Alliance)
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="cert-achieve-col">
        <Card className="quote-card-view h-100">
          <Card.Body>
            <h3 className="purple">Achievements</h3>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Maverick Advantage Distinction: excellence in academics and co-curriculars (May 2024)
              </li>
              <li className="about-activity">
                <ImPointRight /> Business Marathon Runner-Up: sustainable transportation analysis (May 2022)
              </li>
              <li className="about-activity">
                <ImPointRight /> IEEE CSBC Student Coordinator: organized coding events and inter-collegiate hackathons (2020–2021)
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Certifications;
