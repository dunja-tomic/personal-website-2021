import React, { Component } from "react";
import ReactGA from "react-ga";
import { Row, Col, Container, Image } from "react-bootstrap";
import {
  Timeline,
  Container as TimelineContainer,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

import styles from "./styles.module.css";

import jobs from "../../images/jobs-1.png";
import BackButton from "../../components/BackButton";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#B2AC88",
  textColor: "#262626",
};

export default class JobsPage extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div className={styles.mainDiv}>
        <BackButton />
        <Container>
          <Row>
            <Col md className={styles.col}>
              <p className={styles.p36}>Previous Internships</p>
              <Image src={jobs} className={styles.width80}></Image>
            </Col>
            <Col md>
              <Timeline theme={customTheme} dateFormat="ll">
                <TimelineContainer>
                  <YearContent startDate="2021/01" endDate="2021/04" />
                  <BodyContent>
                    <Section
                      title={
                        <a
                          href="//www.hatchcard.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Hatch
                        </a>
                      }
                    >
                      <Description
                        variant="subtitle"
                        text="Backend Engineer \ San Francisco, CA"
                      />
                      <Description text="During my time at Hatch, I helped automate a large part of the KYC & KYB process which meant we could process on a higher volume of customers. Oh, and I also realized that Kotlin is the best." />
                    </Section>
                  </BodyContent>
                </TimelineContainer>
                <TimelineContainer>
                  <YearContent startDate="2020/04" endDate="2020/08" />
                  <BodyContent>
                    <Section
                      title={
                        <a
                          href="//cash.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Square | Cash App
                        </a>
                      }
                    >
                      <Description
                        variant="subtitle"
                        text="Android Developer \ Kitchener, ON"
                      />
                      <Description text="This was my first foray into Android/mobile development, so it was a really great learning experience." />
                    </Section>
                  </BodyContent>
                </TimelineContainer>
                <TimelineContainer>
                  <YearContent startDate="2018" endDate="2019" />
                  <BodyContent>
                    <Section
                      title={
                        <a
                          href="//www.accenture.com/ca-en/services/technology/liquid-studios"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Accenture | Liquid Studio
                        </a>
                      }
                    >
                      <Description
                        variant="subtitle"
                        text="Software Engineer \ Toronto, ON"
                      />
                      <Description text="My team and I built a proof of concept for verifying the authenticity of high-value designer goods using blockchain technology." />
                    </Section>
                    <Section
                      title={
                        <a
                          href="//www.hyalto.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Hyalto
                        </a>
                      }
                    >
                      <Description
                        variant="subtitle"
                        text="Fullstack Developer \ Ottawa, ON"
                      />
                    </Section>
                    <Section
                      title={
                        <a
                          href="//www.loyalty.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LoyaltyOne | Air Miles
                        </a>
                      }
                    >
                      <Description
                        variant="subtitle"
                        text="Service Desk Representative \ Toronto, ON"
                      />
                    </Section>
                  </BodyContent>
                </TimelineContainer>
              </Timeline>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
