import React from 'react';
import MedicineCard from '../components/MedicineCard';

const medicinesData = [
    {
        name: 'Адамбол Форте',
        description: 'Адамбол Форте - инновационное лекарство, разработанное доктором Кубатом, для помощи пациентам, являющиеся шизиками. Это мощное средство, созданное с использованием передовых научных исследований и технологий, предназначено для улучшения качества жизни и уменьшения симптомов шизика.',
    },
    // Добавьте данные о других лекарствах
];

function MedicinePage() {
    return (
        <div>
            <h1 className="mt-4 mb-4">Лекарства</h1>
            <div className="row">
                {medicinesData.map((medicine, index) => (
                    <div className="col-md-4" key={index}>
                        <MedicineCard {...medicine} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedicinePage;
