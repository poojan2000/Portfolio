import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pooja Niranjan </span>
            from <span className="purple">Arlington, Texas.</span>
            <br />
            I am currently employed as a Technical Project Manager at CREDWISE.
            <br />
            I have graduated with my MS in Engineering/ Industrial Management and I hold a BE degree in Computer Science.
            <br />
            <br />
            Apart from managing projects, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li> 
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to deliver projects that make a difference to the society!"{" "}
          </p>
          <footer className="blockquote-footer">Pooja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
