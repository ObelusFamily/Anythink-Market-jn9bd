import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          <div>
            <input
              id="search-box"
              placeholder="What is it that you truly desire"
              onChange={props.onItemSearch}
            />
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
