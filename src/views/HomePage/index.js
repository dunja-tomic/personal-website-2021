import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

import styles from "./styles.module.css";
import about from "../../images/about.png";
import contact from "../../images/contact.png";
import funstuff from "../../images/funstuff.png";
import jobs from "../../images/jobs.png";
import tgh from "../../images/tgh.png";
import resume from "../../assets/S21Resume.pdf";

export default class HomePage extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div className={styles.mainDiv}>
        <Container className={styles.marginAuto}>
          <Row noGutters={true} className={styles.imagesRow}>
            <Col md className={styles.marginAuto}>
              <Row noGutters={true} className={styles.marginLeft30}>
                <p className={styles.titleFont}>Dunja</p>
              </Row>
              <Row noGutters={true} className={styles.marginLeft30}>
                <p className={styles.titleFont}>Tomic</p>
              </Row>
              <Row noGutters={true} className={styles.marginLeft30}>
                <p>
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>{" "}
                  |{" "}
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
                  </a>
                </p>
              </Row>
            </Col>

            <Col md>
              <Link to="/about">
                <Image src={about} className={styles.image} />
              </Link>
            </Col>

            <Col md>
              <Link to="/jobs">
                <Image src={jobs} className={styles.image} />
              </Link>
            </Col>
          </Row>
          <Row noGutters={true} className={styles.imagesRow}>
            <Col md>
              <Link to="/the-goldenhack">
                <Image src={tgh} className={styles.image} />
              </Link>
            </Col>
            <Col md>
              <Link to="/fun-stuff">
                <Image src={funstuff} className={styles.image} />
              </Link>
            </Col>
            <Col md>
              <Link to="/contact">
                <Image src={contact} className={styles.image} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
