import React from "react";
import LoginReducer from "../../components/Login/LoginReducer";
import "./styles.scss";
import imageHome from "../../assets/images/Standing.png";

export default function LoginPage() {
  return (
    <>
      <div className="homeContainer">
        <LoginReducer />
      </div>
      <div className="imageContainer">
        <img className="img-home" src={imageHome} alt="ilustración home" />
      </div>
    </>
  );
}
