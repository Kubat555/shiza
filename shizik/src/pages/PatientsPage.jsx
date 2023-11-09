import React from 'react';
import PatientCard from '../components/PatientCard';
import "../App.css"

const patientsData = [
    {
        img: "",
        name: 'Руслан Рахматов',
        description: 'Опасный шизик. Находится в лечении у доктора Кубата около года. Его состояние значительно улучшилось после применения Адамбол Форте, но в сейчас степень чуствительности лекартсва значительно понизилось. Рекомендуется увеличить дозу на две капсулы в день.',
        treatmentStatus: 'Стабильное'
    },
    {
        img: "",
        name: 'Ома Айтикеев',
        description: 'Стал шизиком недавно. Заразился от Руслана. Его состояние ухудшается с каждым днем, ибо он не принимает стабильно Адамбол Форте.',
        treatmentStatus: 'Ухудшается'
    },
    {
        img: "",
        name: 'Кайрат Абдыкадыров',
        description: ' Особо опасный шизик. Его лечением занимались около 2 лет. Сначала состояние пациента улучшилось, но пациент отказался принимать лекарства и впал бешенство. Нынешнее состояние не позволяет вылечить пациента, ибо мозг отрофировался.',
        treatmentStatus: 'Неизлечим'
    },
    {
        img: "",
        name: 'Беккумар Курманбеков',
        description: ' Особо опасный шизик. Один из первых пациентов, со сложным ослажнением недостатка нейронов в мозге. Лечение пациента длится по сей день и является нестабильным',
        treatmentStatus: 'Нестабилен'
    },
    // Добавьте данные о других пациентах
];

function PatientsPage() {
    return (
        <div>
            <h1 className="mt-4 mb-4 animate__animated animate__fadeIn">Пациенты</h1>
            <div className="row">
                {patientsData.map((patient, index) => (
                    <div className="col-md-4" key={index}>
                        <PatientCard {...patient} className="animate__animated animate__fadeIn animate__delay-1s" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PatientsPage;
