import React from 'react';
import PatientCard from '../components/PatientCard';

const patientsData = [
    {
        img: "",
        name: 'Руслан Рахматов',
        description: 'Опасный шизик. Находится в лечении у доктора Кубата около двух лет. Его состояние значительно улучшилось после применения Адамбол Форте, но в некоторые импульсы шизика остались. Рекомендуется продолжать курс лечения.',
        treatmentStatus: 'Стабильное'
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
    {
        img: "",
        name: 'Влад Буйный',
        description: 'Уже его фамилия говорит какой он опасный шизик! Находится в лечении у доктора Кубата с 2021 года. Его состояние неизвестно, так как пациент пропал безвести. Рекомендуется увеличить дозу на две капсулы в день.',
        treatmentStatus: 'Неизвестен'
    },
    {
        img: "",
        name: 'Уткельбаев Чынгыз',
        description: 'Время от времени появляются признаки Шизика. Пациент находится в лечении у доктора Кубата. Его состояние пока стабильно, но доза Адамбол Форте не помешает)',
        treatmentStatus: 'Стабильно'
    },
    {
        img: "",
        name: 'Камбаралиев Исхак',
        description: 'Пациент средней степени шизофрении. Находится в лечении у доктора Кубата около трех лет. Его состояние ухудшается, пациент не признает свою болезнь и отказывается от лечения. Рекомендуется увеличить дозу Адамбол Форте.',
        treatmentStatus: 'Ухудшается'
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
