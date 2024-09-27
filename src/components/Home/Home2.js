import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Pooja.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            With a BE in <b className="purple">Computer Science </b>and an MS in <b className="purple">Engineering Management</b>,
            I bring a unique blend of technical expertise and <b className="purple">management skills</b> to drive project success.
            My passion for managing technical projects, coupled with my diverse background, allows me to make impactful contributions and deliver results efficiently.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JIRA, Scrum methodology,Python, C Programming, ReactJS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">Helping teams work on projects in an inclusive and collaborative environment </b> and
                build projects that align well with the {" "}
                <b className="purple">
                  Organization.
                </b>
              </i>
              <br />
              <br />
              Driven by a passion for <b className="purple">continuous improvement</b> , I actively engage in developing 
              <b className="purple">strategic plans</b>  and meticulously <b className="purple">breaking down budgets</b>. 
              I leverage every opportunity to enhance my knowledge and apply it to <b className="purple">optimize</b> project outcomes.
              &nbsp; 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Pooja" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/poojan2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pooja-niranjan14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
