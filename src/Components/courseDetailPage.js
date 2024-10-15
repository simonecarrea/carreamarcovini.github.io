// src/components/CourseDetailPage.js

import React, { useState } from 'react';
import '../css/courseDetailPage.scss';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/courseList.scss';
import CourseItem from '../Components/courseItem';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";
import listaVini from '../mock/listaVini';
import { CiCalendar } from "react-icons/ci";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiVineLeaf } from "react-icons/gi";
import { PiBeerBottle } from "react-icons/pi";
import { LiaWineBottleSolid } from "react-icons/lia";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LuClipboardType } from "react-icons/lu";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";



const CourseDetailPage = () => {

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
	};
	const location = useLocation();
	const course = null;
	const vino = location.state ? location.state.vino : null;
	console.log("vino", vino);
	const navigate = useNavigate();
	const [selectedWine, setSelectedWine] = useState(null);
	const [selectedWineList, setSelectedWineList] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [feedback, setFeedback] = useState('');

	
	const handleCourseListClick = (vino) => {
		setSelectedWineList(vino);
		const category = vino[0].tipologia;
		navigate(`/catalog/${tipologia}`, { state: { selectedWineList:  listaVini} });
		console.log('Corso selezionato:', selectedWineList, listaVini);
	};

	const handleCourseClick = (vino) => {
		// Qui puoi fare qualsiasi azione con i dati del corso
		// Ad esempio, puoi navigare alla pagina di dettaglio del corso
		setSelectedWine(course);
		console.log('Corso selezionato:', course);
	};

	const handleVideoEnded = () => {
		// Funzione da eseguire quando il video viene messo in pausa
		console.log('Il video è stato messo in pausa.');
		setIsModalOpen(true); // Mostra la modale
	};

	const closeModal = () => {
		setIsModalOpen(false); // Chiudi la modale
	};

	const handleFeedbackChange = (event) => {
		setFeedback(event.target.value);
	};

	const submitFeedback = () => {
		console.log('Feedback inviato:', feedback);
		// Aggiungi qui la logica per inviare il feedback (ad es. a un server)
		setIsModalOpen(false); // Chiudi la modale dopo l'invio del feedback
	};

	if (!vino) {
		return <div>Corso non trovato.</div>;
	}

	return (
		<>
			<div className="wine-detail">
				<div className="wine-card">
					<img src={vino.immagineVino?.fields.file.url} alt="Immagine del corso" className='immagineDettaglio'/>
				</div>
				<div className="wine-content">
					<h2>{vino.nomeVino}</h2>
					<span className='campoDescrizione'><CiCalendar className='iconaCampoDescrizione'/> <p>Annata: <b>{vino.annata}</b></p></span>
					<span className='campoDescrizione'><HiOutlineIdentification className='iconaCampoDescrizione'/> <p>Denominazione: <b>{vino.denominazione}</b></p></span>
					<span className='campoDescrizione'><GiVineLeaf className='iconaCampoDescrizione'/> <p>Vitigno: <b>{vino.vitigno}</b></p></span>
					<span className='campoDescrizione'><LiaWineBottleSolid className='iconaCampoDescrizione'/> <p>Formato: <b>{vino.formato}</b></p></span>
					<span className='campoDescrizione'><PiBeerBottle className='iconaCampoDescrizione'/> <p>Alcol: <b>{vino.alcol}</b></p></span>
					<span className='campoDescrizione'><IoCalendarOutline className='iconaCampoDescrizione'/> <p>Consumo ideale: <b>{vino.consumo}</b></p></span>
					<span className='campoDescrizione'><LiaTemperatureHighSolid className='iconaCampoDescrizione'/> <p>Temperatura di servizio: <b>{vino.temperaturaDiServizio}</b></p></span>
					<span className='campoDescrizione'><LuClipboardType className='iconaCampoDescrizione'/> <p>Tipologia: <b>{vino.tipologia}</b></p></span>
					<span className='campoDescrizione'><HiOutlinePuzzlePiece className='iconaCampoDescrizione'/> <p>Abbinamenti: <b>{vino.abbinamenti}</b></p></span>
				</div>
			</div>
			{/* <div className='recommended'>
				<div className="netflix-carousel-container">
					<div className='category-title'>
						<p>Potrebbero interessarti anche </p>
						<FiArrowRightCircle className='icon-arrow' onClick={() => handleCourseListClick(courses2)} />
					</div>
					<Slider {...settings}>
						{courses2.map(course => (
							<div key={course.id}>
								<CourseItem key={course.id} course={course} onCourseClick={handleCourseClick} />
							</div>
						))}
					</Slider>
				</div>
			</div> */}

			{/* Modale di feedback */}
			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={closeModal}>&times;</span>
						<h3>Fornisci il tuo feedback</h3>
						<textarea
							rows="4"
							cols="50"
							value={feedback}
							onChange={handleFeedbackChange}
							placeholder="Inserisci il tuo feedback..."
						></textarea>
						<button onClick={submitFeedback}>Invia Feedback</button>
					</div>
				</div>
			)}
		</>
	);
};

export default CourseDetailPage;
