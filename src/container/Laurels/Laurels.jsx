import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ img, subtitle, title }) => (
  <div className="app__laurels_awards_card">
    <img src={img} />
    <div className="app__laurels_awards_card-content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">
        {subtitle.split("<br/>")[0]}
        <br />
        {subtitle.split("<br/>")[1]}
      </p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div id="awards" className="app__bg section__padding app__wrapper">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant laurels-text">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map(({ imgUrl, subtitle, title }) => (
            <AwardCard
              key={title}
              img={imgUrl}
              subtitle={subtitle}
              title={title}
            />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels Image" />
      </div>
    </div>
  );
};

export default Laurels;
