import React, { useState } from "react";
import './header.css';

const Header = () => {
    // change background header
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80 ) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    // Toggle menu
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav]= useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo" >Portfolio</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list girt">
                        <li className="nav__item"  onClick={() =>
                        showMenu(!Toggle)
                    }>
                            <a href="#home " onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon" ></i>  Home
                            </a>
                        </li>

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                             <a href="#about " onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon" ></i> About
                            </a>
                        </li>

                        

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                            <a href="#skills " onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon" ></i> Skills
                            </a>
                        </li>

                        {/* <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                            <a href="#service " onClick={()=> setActiveNav('#service')} className={activeNav === "#service" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase nav__icon" ></i> Services
                            </a>
                        </li> */}

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                            <a href="#qualification" onClick={()=> setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-graduation-cap  nav__icon" ></i> Qualification
                            </a>
                        </li>

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                             <a href="#project " onClick={()=> setActiveNav('#project')} className={activeNav === "#project" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-award nav__icon" ></i> projects
                            </a>
                        </li>

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                             <a href="#certification " onClick={()=> setActiveNav('#certification')} className={activeNav === "#certification" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-award-alt nav__icon" ></i> Certifications
                            </a>
                        </li>

                        

                        <li className="nav__item" onClick={() =>
                        showMenu(!Toggle)
                    }>
                            <a href="#contect " onClick={()=> setActiveNav('#contect')} className={activeNav === "#contect" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon" ></i> Contact
                            </a>
                        </li>
                        
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() =>
                        showMenu(!Toggle)
                    }></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu
                    (!Toggle)
                }>
                    <i className="uil uil-"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;