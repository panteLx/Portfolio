import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABER <span className="purple">WER BIN ICH </span> EIGENTLICH ?
            </h1>
            <p className="home-about-body">
              Mein Name steht doch bereits weiter oben... Warum fragst du dich
              dann noch wer ich bin?
              <br />
              <br />
              Auf jeden Fall liebe ich{" "}
              <i>
                <b className="purple"> Katzen</b>
              </i>
              . Die sind einfach toll! 🐱
              <br />
              <br />
              <i>
                <b className="purple">Smart-Home</b>
              </i>{" "}
              und alles was mit{" "}
              <i>
                <b className="purple">Backend Development</b>
              </i>{" "}
              zutun hat, macht mir auch ziemlich Spaß.
              <br />
              <br />
              Zumindest wenn alles funktioniert & ich nicht im dunklen Zu Hause
              stehe...
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SCHREIB MIR DOCH 🐱</h1>
            <p>
              Gern per <span className="purple">Brieftaube</span> oder Mail an{" "}
              <a href="mailto:hi@sebastianstahl.net" style={{ color: "white" }}>
                hi@sebastianstahl.net
              </a>{" "}
              - Ich antworte auch, versprochen!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pantelx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sebastian_1811"
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
