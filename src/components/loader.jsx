import React from "react";
import "../componentscss/loader.css";
import loadervid from './videos/loader.gif';

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* <video className="bg-video__content" autoPlay muted loop>
          <source src={loadervid} type="video/mp4" />
          Your browser is not supported!
        </video> */}
        <img className="bg-video__content" src={loadervid} alt="Your browser is not supported!" />
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;