import React, { useEffect } from 'react';
import i1 from '../img/IMG_4809.JPG';
import i2 from '../img/DSC_0548.JPG';
import i3 from '../img/IMG_4841.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    })

    return (
        <div id="about" className="section-about" data-aos="fade-down">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary white letter-spacing">About Us</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph">
                        <b>Nexus Event: </b>
                        Welcome to a fusion of technology and beats, where we craft
                        unforgettable experiences that inspire and empower. With our
                        dedicated team, we curate diverse gatherings that celebrate innovation
                        and the power of connection. At Nexus Event, inclusivity, innovation, and 
                        quality drive everything we do. Whether you're a seasoned techie or a curious newcomer, 
                        there's something for everyone to explore and enjoy. Join us in shaping the future of 
                        Nexus Event—attend, volunteer, or partner with us—and let's create moments that inspire and unite. 
                        Connect with us on social media for updates and announcements.
                    </p>

                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img
                            srcSet={`${i1} 300w, ${i1} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Pic1"
                            className="composition__photo composition__photo--p1"
                            src={i1}
                        />

                        <img
                            srcSet={`${i2} 300w, ${i2} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo2"
                            className="composition__photo composition__photo--p2"
                            src={i2}
                        />

                        <img
                            srcSet={`${i3} 300w, ${i3} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Pic33"
                            className="composition__photo composition__photo--p3"
                            src={i3}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About