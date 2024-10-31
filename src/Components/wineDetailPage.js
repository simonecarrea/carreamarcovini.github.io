// src/components/WineDetailPage.js

import React, { useState } from 'react';
import '../css/wineDetailPage.scss';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/courseList.scss';
import { CiCalendar } from "react-icons/ci";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiVineLeaf } from "react-icons/gi";
import { PiBeerBottle } from "react-icons/pi";
import { LiaWineBottleSolid } from "react-icons/lia";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LuClipboardType } from "react-icons/lu";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";



const WineDetailPage = () => {

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
	};
	const location = useLocation();
	const vino = location.state ? location.state.vino : null;
	console.log("vino", vino);
	const [isClicked, setIsClicked] = useState(false);

	const handleImageClick = () => {
	  setIsClicked(!isClicked); // Inverte lo stato del clic
	};

	if (!vino) {
		return <div>Corso non trovato.</div>;
	}

	return (
		<>
			<div className="wine-detail">
				<div className="wine-card">
					<img src={vino.immagineVino?.fields.file.url} alt="Immagine del corso" className={`immagineDettaglio ${isClicked ? 'ingrandita' : ''}`} onClick={handleImageClick}/>
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
		</>
	);
};

export default WineDetailPage;