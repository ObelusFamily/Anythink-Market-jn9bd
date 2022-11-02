import React, { useRef } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const searchInputRef = useRef();

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        {/* <img src={logo} alt="banner" /> */}
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          <form className="form-inline p-2">
            <div className="input-group">
              <input
                id="search-box"
                className="form-control"
                ref={searchInputRef}
                type="text"
                placeholder="What is it that you truly desire"
                onChange={() =>
                  props.onItemSearch(searchInputRef.current.value)
                }
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="bi bi-search" />
                </span>
              </div>
            </div>
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
