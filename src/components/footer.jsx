import React from 'react'
// import fulllogo from '../img/footer.png';
import instalogo from './imgs/insta footer.png';
import gmaillogo from './imgs/gmail.png';

const Footer = () => {
    return (
        <div id="footer" className="footer">
            {/* <div className="footer__logo-box">
                <picture className="footer__logo">
                    <img alt="Full logo" src={fulllogo}/>
                </picture>
            </div> */}
            <div className="row">
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                    Experience the nexus of technology at Nexus Event. Join us and be
                    part of something extraordinary.
                    </p>
                </div>

                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <div className="f">
                            <h3>CONNECT WITH US</h3>
                            <div className="f_inner">
                            <a
                                href="https://www.instagram.com/nexus/"
                                target="_blank"
                                rel='noreferrer'
                            >
                                <img className="footer__img" src={instalogo} alt=""
                                /></a>
                            <a
                                href="mailto:nexus@gmail.com"
                                target="_blank"
                                rel='noreferrer'
                            >
                                <img className="footer__img" src={gmaillogo} alt=""
                                /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <span className="copyright">©NEXUS EVENT All rights reserved</span>
            </div>
            <div className='text-center'>
                <span>Visitors:</span>
                <a className='count' href="#footer">
                <img src="https://hitwebcounter.com/counter/counter.php?page=9020036&style=0024&nbdigits=4&type=ip&initCount=0" title="Counter Widget" alt="visitor-counter"   border="0" /></a>   
                </div>
        </div>
    )
}

export default Footer