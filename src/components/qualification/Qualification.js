import React, { useState } from "react";
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>
            
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{""} Education
                    </div>

                    {/* <div className={
                        toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        
                    } onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{""} Experience
                    </div> */}
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            

                            
                            <div>
                                <h3 className="qualification__title">M.Sc., Computer Science</h3>
                                <span className="qualification__subtitle">Brathidasan University - Tiruchirappalli - 620 024.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2025 - Present

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full statck Java Developer </h3>
                                <span className="qualification__subtitle">CSC Computer Science College, kumbakonam  - 612 602.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2024 - 2025

                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            

                            
                            <div>
                                <h3 className="qualification__title">B.Sc., Computer Science - <br/> CGPA 7.9</h3>
                                <span className="qualification__subtitle">Brathidasan University - Tiruchirappalli - 620 024.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2022 -2025

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HSC - 59%</h3>
                                <span className="qualification__subtitle">Govt Boys Higher Secondary School, Nachiyarkoil - 612 602</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - 2022

                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            

                            
                            <div>
                                <h3 className="qualification__title">SSLC - 68.2%</h3>
                                <span className="qualification__subtitle">Govt Boys Higher Secondary School, Nachiyarkoil - 612 602</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2019 - 2020

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>

                            
                        </div>
                    </div>

                    {/* <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web </h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2025 - present

                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Art</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2025 - present

                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Developer</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2025 - present

                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                
                            </div>
                        </div>

                        
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Qualification;