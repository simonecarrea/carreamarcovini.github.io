import React from 'react';
import '../css/contactPage.scss';
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import GoogleMapComponent from '../Components/googleMap';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-info">
                <div className="contact-section">
                    <h2><FiMapPin /> Dove Siamo</h2>
                    <p>Via Cadimassa, 25, 15060, Parodi Ligure (Frazione Cadimassa), AL</p>
                    {/* <GoogleMapComponent /> */}
                </div>
                
                <div className="contact-section">
                    <h2><FiPhone /> Contatti</h2>
                    <p>Telefono: +39 338 7286477</p>
                    <p>Email: carreamarcovini@live.com</p>
                </div>

                <div className="contact-section">
                    <h2><FiClock /> Orari di Apertura</h2>
                    <p>Lunedì - Sabato: 09.00 - 12.00, 14.30 - 18.00</p>
                    <p>Domenica: Chiuso</p>
                </div>

                <div className="contact-section">
                    <h2>Chi Siamo</h2>
                    <p>
                        La Cantina Marco Carrea nasce con l'obiettivo di offrire una selezione di vini locali di altissima qualità, 
                        frutto della passione per la viticoltura e del rispetto per il territorio. 
                        Con un’attenzione particolare alla tradizione e all’innovazione, 
                        siamo impegnati a creare vini che raccontino la storia e i sapori delle nostre terre.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
