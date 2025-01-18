import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Main from "../components/Main";
import citlogo from "../img/NEW LOGO CIT.png";
import zorphixfinal from "../img/Zorphix final without name.png";
import zorphixlanding from "../img/zorphix-landing-logo.png";
import { motion, useScroll } from "framer-motion";
import Loader from "../components/Loader/Loader";
import bgvideo from "../video/zorphixbgnew.mp4";
import Counter from "../components/counter";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const initialScrollProgress = 0;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const checkboxRef = useRef(null);

  const toggleCheckbox = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
    // navigate('/login');
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };  
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log(userData,"user");
  const fullName = userData ? userData.fullName : "";

  return isLoading ? (
    <Loader />
  ) : (
    <div id="home" className="home">
      <div id="blur">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            ref={checkboxRef}
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background"> &nbsp; </div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#" className="navigation__link one">
                    {" "}
                    Home{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#about" className="navigation__link two">
                    {" "}
                    About{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#events" className="navigation__link three">
                    {" "}
                    Events{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#team" className="navigation__link four">
                    {" "}
                    Team{" "}
                  </a>
                </div>
              </li>
              {fullName != "" ? (
                <li className="navigation__item">
                  <div className="navigation__link">
                    <a
                      href=""
                      onClick={() => {
                        logout();
                      }}
                      className="navigation__link four"
                    >
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                <li className="navigation__item">
                  <div className="navigation__link">
                    <a
                      href=""
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="navigation__link four"
                    >
                      Login
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div id="video-container">
          <div id="video-overlay"></div>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgvideo} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        </div>

        <div className="header" id="header">
          <div className="header__logo-box">
            <img className="citlogo" src={citlogo} alt="clg-logo" />
          </div>

          <div className="header__text-box">
            <div className="logos">
              <img
                className="heading-primary--sub zor"
                src={zorphixfinal}
                alt="new-logo"
              />
              <img
                className="heading-primary--main zorphix"
                src={zorphixlanding}
                alt="zorphix-logo"
              />
            </div>
            <Counter />
            {/* <h1 className="heading-primary--sub date">September 20th 2023</h1>

            <a href="https://drive.google.com/file/d/1dMm0oCW53daJt7EmHRQF6yqpZOane29A/view?usp=sharing" className="btn btn--white btn--animated bold" target="_blank">
              CIT Bus Routes ↗
            </a> */}
          </div>
        </div>

        <Main />
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

export default Home;