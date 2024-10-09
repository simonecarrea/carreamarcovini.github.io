import React from 'react';
import '../css/productList.scss';
import borraccia from '../assets/loghi/borraccia.webp';
import barbera from '../assets/loghi/VITIDAUTUNNO-PIEMONTE-BARBERA.jpg';
import listaVini from '../mock/listaVini.js';
import Slider from 'react-slick';

const products = [
  { id: 1, 
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
  { id: 2, 
    name: 'Product 2', 
    description: 'Description for Product 2' 
  },
  { id: 3, 
    name: 'Product 3', 
    description: 'Description for Product 3' 
  },
];

const ProductList = ({ onProductSelect }) => {
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

  return (
    <div className="product-list">
      {/* Verifica la larghezza della finestra per decidere come rendere i prodotti */}
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

export default ProductList;