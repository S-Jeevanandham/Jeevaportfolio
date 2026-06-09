import React from "react";

const Backend = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
               <div className="skills__group">
                 <div className="skills__data">
                    <i className="bx bxl-java skills__icon"></i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                 <div className="skills__data">
                    <i className="bx bxl-spring-boot skills__icon"></i>

                    <div>
                        <h3 className="skills__name">SpringBoot</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                 <div className="skills__data">
                    <i className="bx bxs-data skills__icon"></i>

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-mongodb skills__icon"></i>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-git skills__icon"></i>

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-github skills__icon"></i>

                    <div>
                        <h3 className="skills__name">Github</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>



               </div>
               

               </div>
            
        </div>
    )
}

export default Backend;