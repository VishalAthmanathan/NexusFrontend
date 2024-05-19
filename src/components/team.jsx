import React from 'react';
import video from './videos/video.mp4'


const Team = () => {
  return (
    <div className="team section-stories" id="team">
      <div className="bg-video-2">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" style={{color:'white'}}>Our Team</h2>
      </div>
      <div className="main-section">
        <div className="box">
          <h2 className="position">Head</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Ashspidy
          </h3>
          <p>+91 9874563201</p>
        </div>
        <div className="box">
          <h2 className="position">Assistant Head</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Ash</h3>
          <p>+91 9898974543</p>
        </div>
        <div className="box">
          <h2 className="position">Helper</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Pankaj</h3>
          <p>+91 1234356579</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
