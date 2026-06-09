import React from "react";

const Frontend = () => {
    return(
        <div className="skills__content ">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
               <div className="skills__group">
                 <div className="skills__data">
                    <i className="bx bxl-html5 skills__icon"></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                 <div className="skills__data">
                    <i className="bx bxl-css3 skills__icon"></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                 <div className="skills__data">
                    <i className="bx bxl-javascript skills__icon"></i>

                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-react skills__icon"></i>

                    <div>
                        <h3 className="skills__name">React.js</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-bootstrap skills__icon"></i>

                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bxl-tailwind-css skills__icon"></i>

                    <div>
                        <h3 className="skills__name">Tailwind Css</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

               </div>
            </div>
        </div>
    )
}

export default Frontend;