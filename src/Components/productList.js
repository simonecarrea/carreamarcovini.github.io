/* import React, { useState, useEffect } from 'react';
import '../css/productList.scss';
import borraccia from '../assets/loghi/borraccia.webp';
import barbera from '../assets/loghi/VITIDAUTUNNO-PIEMONTE-BARBERA.jpg';
import listaVini from '../mock/listaVini.js';
import Slider from 'react-slick';
import { useNavigate, useParams , useLocation} from 'react-router-dom';
import { retrieveWineListCarreaMarco } from '../services/wineService'; // Assicurati di avere questo import

const products = [

  {
    id: 1,
    name: 'Moscato',
    acidità: 'Contiene E296 e/o E330 e/o E334',
    conservante: 'Contiene E242',
    imbottigliamento: 'Imbottigliato in atmosfera protettiva',
    solfiti: 'contiene SOLFITI(E220)',
    energia: '300kJ/72 kcal',
    grassi: '0 g',
    acidi_saturi: '0 g',
    carboidrati: '10 g',
    zuccheri: '10 g',
    proteine: '0 g',
    sale: '0,01 g',
    imgUrl: barbera
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3'
  },
];

const ProductList = ({ onProductSelect }) => {

  const navigate = useNavigate();
  const { name } = useParams();
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const idVino = queryParams.get('name'); // Ottieni il query param idVino
  let wineList = [];
  // Impostazioni per il carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra un prodotto alla volta
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Per schermi più piccoli
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  useEffect(() => {
    console.log("PARAM", idVino);
    const product = products.find((p) => p.name === idVino);
    if (product) {
      onProductSelect(product);
    }
  }, [name]);

  useEffect(() => {
    // Richiama retrieveWineListCarreaMarco e stampa i risultati
    const fetchWines = async () => {
      wineList = await retrieveWineListCarreaMarco();
      console.log('Wine List:', wineList); // Visualizza i dati nel console log
    };

    fetchWines();
  }, []);

  return (
    <div className="product-list">
      {window.innerWidth < 768 ? (
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <button
                className="product-button"
                onClick={() => onProductSelect(product)}
              >
                <span>{product.name}</span>
              </button>
            </div>
          ))}
        </Slider>
      ) : (
        // Visualizza i prodotti in una lista per schermi più grandi
        <ul className="desktop-product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <button
                className="product-button"
                onClick={() => onProductSelect(product)}
              >
                <span>{product.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList; */


import React, { useState, useEffect } from 'react';
import '../css/productList.scss';
import Slider from 'react-slick';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { retrieveWineListCarreaMarco } from '../services/wineService'; // Assicurati di avere questo import

const ProductList = ({ onProductSelect }) => {
  const navigate = useNavigate();
  const { name } = useParams();
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const idVino = queryParams.get('name'); // Ottieni il query param idVino
  const [wineList, setWineList] = useState([]); // Stato per la lista dei vini

  // Impostazioni per il carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra un prodotto alla volta
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Per schermi più piccoli
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  useEffect(() => {
    console.log("PARAM", idVino);
    const product = wineList.find((p) => p.nomeVino === idVino);
    if (product) {
      onProductSelect(product);
    }
  }, [idVino, wineList]); // Aggiungi wineList come dipendenza

  useEffect(() => {
    // Richiama retrieveWineListCarreaMarco e imposta i risultati nello stato
    const fetchWines = async () => {
      try {
        const wines = await retrieveWineListCarreaMarco();
        setWineList(wines); // Imposta la lista dei vini nello stato
        console.log('Wine List:', wines); // Visualizza i dati nel console log
      } catch (error) {
        console.error('Errore nel recupero dei vini:', error);
      }
    };

    fetchWines();
  }, []);

  return (
    <div className="product-list">
      {window.innerWidth < 768 ? (
        <Slider {...settings}>
          {wineList.map((product) => (
            <div key={product.id} className="product-item">
              <button
                className="product-button"
                onClick={() => onProductSelect(product)}
              >
                <span>{product.nomeVino}</span>
              </button>
            </div>
          ))}
        </Slider>
      ) : (
        <ul className="desktop-product-list">
          {wineList.map((product) => (
            <li key={product.id} className="product-item">
              <button
                className="product-button"
                onClick={() => onProductSelect(product)}
              >
                <span>{product.nomeVino}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
