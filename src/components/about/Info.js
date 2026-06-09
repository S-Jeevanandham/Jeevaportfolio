import React from "react";

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Certified</h3>
                <span className="about__subtitle">Developer</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title ">completed</h3>
                <span className="about__subtitle">10+ projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
            
        </div>
    )
}

export default Info;