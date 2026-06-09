import React, { useState } from "react";
import './services.css';

const Service = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className="services section" id="service">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>
                <div className="services__container container grid">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Product <br />
                            Designer</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(1)}>view more
                            <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Product Designer</h3>
                                <p className="services__modal-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, minima.</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">web page developer</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">UI/Ux <br /> Designer</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(2)}>view more
                            <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">UI/Ux  Designer</h3>
                                <p className="services__modal-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, minima.</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">user interface.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">web developer</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Product <br />
                            Designer</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(3)}>view more
                            <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Product Designer</h3>
                                <p className="services__modal-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, minima.</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">web page developer</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Service;