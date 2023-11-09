import React from 'react';

function MedicineCard({ name, description }) {
    return (
        <div className="card mb-3">
            <img src={require('../img/adambol.jpg')} className="card-img-top" alt="..."/>
            <div className="card-body">

                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default MedicineCard;
