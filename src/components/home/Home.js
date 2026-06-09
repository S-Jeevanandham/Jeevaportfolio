import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import "./home.css";
// import Social from "./social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";


const Home = () =>{

    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content grid">
                        <i className={theme === 'light' ? "bx bx-moon change-theme" : "bx bx-sun change-theme"} onClick={toggleTheme} ></i>
                    <div className="home__img"></div>
                    <Data/>
                </div>
                <ScrollDown/>

                
            </div>
        </section>
    )
}

export default Home;