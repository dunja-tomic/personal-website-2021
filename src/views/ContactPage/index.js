import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import ReactGA from "react-ga";

import BackButton from "../../components/BackButton";
import styles from "./styles.module.css";
import contact from "../../images/contact-1.png";

export default class ContactPage extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className={styles.mainDiv}>
        <BackButton />
        <Container>
          <Row>
            <Col md>
              <Image src={contact} className={styles.width100}></Image>
            </Col>

            <Col md className={styles.col}>
              <div>
                <p className={styles.p48}>Contact</p>
                <p>Let's chat!</p>
                <p>
                  <a
                    href="//www.linkedin.com/in/dunja-tomic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  |{" "}
                  <a
                    href="//github.com/dunja-tomic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="//medium.com/@dunjatomic2323"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>{" "}
                  |{" "}
                  <a href="mailto: dunja.tomic@uwaterloo.ca?subject=Hello!">
                    Email
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
