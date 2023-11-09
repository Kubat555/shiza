import React from 'react';

function PatientCard({img, name, description, treatmentStatus }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <image href={img}></image>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><strong>Состояние лечения:</strong> {treatmentStatus}</p>
            </div>
        </div>
    );
}

export default PatientCard;
