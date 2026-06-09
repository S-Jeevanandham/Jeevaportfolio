import React from "react";
import './certificate.css';

const CertificateItems = ({item}) => {
    return(
        <div className="Certificate__card" key={item.id}>
            <img src={item.image} alt="" className="Certificate__img" />
            <h3 className="Certificate__tile">{item.title}</h3>
            <a href={item.link} className="Certificate__button">
                View All certificates <i className="bx bx-right-arrow-alt Certificate__button-icon"></i>
            </a>
        </div>
    )
}

export default CertificateItems;