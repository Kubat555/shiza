import React from 'react';

function MedicineCard({ name, description }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default MedicineCard;
