import React from "react";
import "./styles.scss";
import imageHome from "../../assets/images/Standing.png";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <h1>Welcome</h1>
      </div>
      <div className="imageContainer">
        <img className="img-home" src={imageHome} alt="ilustración home" />
      </div>
    </>
  );
}
