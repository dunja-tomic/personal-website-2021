import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import styles from "./styles.module.css";

import funstuff from "../../images/funstuff-1.png";
import BackButton from "../../components/BackButton";

export default class FunStuffPage extends Component {
  render() {
    return (
      <div className={styles.mainDiv}>
        <BackButton />
        <Container>
          <Row>
            <Col md>
              <Image src={funstuff} className={styles.width100}></Image>
            </Col>

            <Col md className={styles.col}>
              <div>
                <Row>
                  <p className={styles.p48}>Fun Stuff</p>
                </Row>

                <Row>
                  <p>
                    I love to travel! Here are a couple snaps of my most recent
                    (pre-COVID) family trip to Hawaii.
                  </p>
                  <p>
                    I also love podcasts so much I decided to join one. Listen
                    to me speak about nerdy space stuff on episodes{" "}
                    <a
                      href="//thestarspot.ca/2019/11/10/discovering-ancient-oasis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      173
                    </a>
                    ,{" "}
                    <a
                      href="//thestarspot.ca/2019/11/24/fuzzy-dark-matter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      174
                    </a>
                    , and{" "}
                    <a
                      href="//thestarspot.ca/2019/12/22/the-truth-is-out-there-at-the-university-of-manitoba/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      175
                    </a>{" "}
                    of The Star Spot.
                  </p>
                  <p>
                    At the moment,{" "}
                    <a
                      href="//angeladuckworth.com/grit-book/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      this
                    </a>{" "}
                    is my favourite book,{" "}
                    <a
                      href="//www.vox.com/2015/7/1/8876073/back-to-the-future-anniversary-30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      this
                    </a>{" "}
                    is my favourite movie, and{" "}
                    <a
                      href="//youtu.be/QKzobTCIRDw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      this
                    </a>{" "}
                    is my favourite Tiny Desk Concert.
                  </p>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
