import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class BackButton extends Component {
  render() {
    return (
      <Link to="/">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          style={{
            position: "absolute",
            top: 5,
            left: 5,
            zIndex: 2,
            height: "5%",
          }}
        />
      </Link>
    );
  }
}
