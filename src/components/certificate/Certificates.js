import React, { useEffect, useState } from "react";
import './certificate.css';
import {projectsData } from "./Data.js";
import { ProjectsNav } from "./Data.js";
import CertificateItems from "./CertificateItems.js";



const Certificates = () => {

    const [item, setItem] = useState({name: 'all'});
    const[projects, setProjects] = useState([]);
    const[active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }

    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    };

    return(
        <div>
            <div className="Certificate__filters">
            {ProjectsNav.map((item, index) => {
                return(
                    <span onClick={(e) => {
                        handleClick(e, index);
                    }} 
                    className={`${active === index ? 'active-Certificate' : ""} Certificate__item`} 
                    key={index}>{item.name}</span>
                );
            })}
        </div>

        <div className="Certificate__container container grid"> 
            {projects.map((item) => {
                return <CertificateItems item={item} key={item.id}/>;
            })}
        </div>
        </div>
    )
}

export default Certificates;