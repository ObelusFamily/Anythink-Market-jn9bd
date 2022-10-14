import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          {/* TODO: Create input for item search. */}
          <button onClick={() => props.onItemSearch()}>Test</button>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
