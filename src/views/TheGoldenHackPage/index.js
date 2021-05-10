import React, { Component } from "react";
import ReactGA from "react-ga";
import { Row, Col, Container, Image } from "react-bootstrap";

import styles from "./styles.module.css";
import tgh from "../../images/tgh-1.png";
import BackButton from "../../components/BackButton";

export default class TheGoldenHackPage extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className={styles.mainDiv}>
        <BackButton />
        <Container>
          <Row>
            <Col md>
              <Image src={tgh} className={styles.width100}></Image>
            </Col>

            <Col md className={styles.col}>
              <Row>
                <p className={styles.p36}>The GoldenHack</p>
                <p>
                  I am the Vice President of Technology for{" "}
                  <a
                    href="//thegoldenhack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The GoldenHack
                  </a>
                  , a business hackathon based out of Wilfrid Laurier University
                  in Waterloo, ON.
                </p>
                <p>
                  The hackathon had its inaugural event in October 2019 and it
                  was a huge success. We had over 150 participants who all gave
                  overwhelmingly positive feedback of the event.
                </p>
                <p>
                  This year, I'm leading an interdisciplinary team of 9 in
                  building a new version of the website for the event and an
                  application dashboard. The whole team is incredibly talented,
                  and I can't wait to see what we accomplish this year.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
