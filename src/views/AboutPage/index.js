import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import ReactGA from "react-ga";

import about from "../../images/about-1.png";
import BackButton from "../../components/BackButton";
import styles from "./styles.module.css";

export default class AboutPage extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className={styles.mainDiv}>
        <BackButton />
        <Container>
          <Row>
            <Col md>
              <Image src={about} className={styles.width100}></Image>
            </Col>

            <Col md className={styles.col}>
              <Row>
                <p className={styles.p48}>Hello World</p>
                <p>
                  I'm Dunja! I'm a fourth year Computer Science student at the{" "}
                  <a
                    href="//uwaterloo.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Waterloo
                  </a>{" "}
                  in Waterloo, Canada, which is also where I learned to code. It
                  was love at first for loop.
                </p>
                <p>
                  I love all things software, the outdoors, and the world of
                  1970's folk music. I also like board games, mafia movies,
                  podcasts, baking bread, smiling at strangers, and the Oxford
                  comma. I believe in taking things as they come, finding silver
                  linings, and that a big cup of tea can fix any ailment.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
