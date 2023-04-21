import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <img src={images.logo} />
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter </h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className="app__newsletter-input">
      <input placeholder="Email Address" type="text" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
