import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { CameraFeed } from "../components/camera-feed.jsx";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import "./styles.css";

// Upload to local seaweedFS instance
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  // Connect to a seaweedfs instance
};

function Appx() {
  return (
    <div className="App">
      <h1>Feel free to comtact</h1>
      <p>Capture image from USB webcamera and upload to form</p>
      <CameraFeed sendFile={uploadImage} />
    </div>
  );
}

export default Appx;
