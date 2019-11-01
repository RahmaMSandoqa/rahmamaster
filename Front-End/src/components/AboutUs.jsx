import React from "react";
import "./StyleAbout.css";
import Yaser from "./photo/yaser.jpg";
import Rahma from "./photo/rahma.jpg";
import Yasmin from "./photo/yasmin.jpg";
import Amal from "./photo/amal.jpg";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className="team-section">
      <h1>Tourism</h1>
      <span className="border"></span>
      <div className="quotes">
        <p>
          There's something for everyone in Jordan...you just have to know where
          to look.
          <img
            width="50px"
            height="50px"
            src={require("../assets/spider.svg")}
          />
        </p>
      </div>

      <div className="ps">
        <a href="#p1">
          <img src={Yaser} alt="yaser" />
        </a>
        <a href="#p2">
          <img src={Rahma} alt="rahma" />
        </a>
        <a href="#p3">
          <img src={Yasmin} alt="yasmin" />
        </a>
        <a href="#p4">
          <img src={Amal} alt="amal" />
        </a>
      </div>
      <div className="section" id="p1">
        <span className="name">Yaser Saleh</span>
        <span className="border"></span>
        <p>
          An ambitious Software Engineer specialized in web development. A
          dreamer 💭 , a regular IT events participant 💻 and a casual volunteer
        </p>
      </div>
      <div className="section" id="p2">
        <span className="name">Rahmah Sandoqa</span>
        <span className="border"></span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div className="section" id="p3">
        <span className="name">Yasmin Al-Harasis</span>
        <span className="border"></span>
        <p>
          Computer Engineer 💻Learning how to be specialized in web development.
        </p>
      </div>
      <div className="section" id="p4">
        <span className="name">Amal Al-Dajah</span>
        <span className="border"></span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
    </div>
  );
}
export default About;
