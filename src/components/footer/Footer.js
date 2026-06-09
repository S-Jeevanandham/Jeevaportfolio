import React from "react";
import './footer.css';

const Footer = () => {
    const year = new Date ().getFullYear();
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">JEEVANANDHAM</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contect" className="footer__link">contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/share/1BbyB55HbS/" className="footer__social-link"  target="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mr_s.jeeva_official?igsh=Y2o0b3gxa3QwMHU2" target="https://instagram.com/" className="footer__social-link" >
                            <i className="bx bxl-instagram"></i>
                        </a>
            <a href="https://wa.me/7868097478" className="footer__social-link"  >
            <i className='bx bxl-whatsapp' ></i>
            </a>
                </div>

                <span className="footer__copy">&#169; {year} JEEVANANDHAM | All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer;