import React from 'react';
import DoctorCard from '../components/DoctorCard';

function DoctorPage() {
    return (
        <div>
            <h1 className="mt-4 mb-4">Доктор</h1>
            <DoctorCard
                name="Кубат Чынгызбек уулу"
                achievements="Кубат Чынгызбек уулу - доктор медицинских наук по психологии, выдающийся психиатр, специализирующийся на лечении шизиков. Он обладает обширным опытом и глубокими знаниями в области психиатрии и психотерапии. Его собственная разработка Адамбол Форте является в нынешний момент самым эффективным средством для лечения шизиков."
            />

            <div className="certificates-section">
                <h2 className="mt-4 mb-2" >Сертификаты</h2>
                <img
                    src={require("../img/myHarvardSertificate.jpg")} // Путь к вашему изображению
                    alt="Сертификаты"
                    className="img-fluid"
                />
            </div>
        </div>
    );
}

export default DoctorPage;
