import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default class BackButton extends Component {
  render() {
    return (
      <Link to="/">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          className={styles.backButton}
        />
      </Link>
    );
  }
}
