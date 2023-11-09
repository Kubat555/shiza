import React from 'react';

function DoctorCard({ name, achievements }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{achievements}</p>
            </div>
        </div>
    );
}

export default DoctorCard;
