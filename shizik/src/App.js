import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PatientsPage from './pages/PatientsPage';
import DoctorPage from './pages/DoctorPage';
import MedicinePage from './pages/MedicinePage';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white animate__animated animate__bounce">Пациенты</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctor" className="nav-link text-white animate__animated animate__shakeX">Доктор</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/medicine" className="nav-link text-white animate__animated animate__heartBeat">Лекарства</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<PatientsPage />} />
                    <Route path="/doctor" element={<DoctorPage />} />
                    <Route path="/medicine" element={<MedicinePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
