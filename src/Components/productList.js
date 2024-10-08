import React from 'react';
import '../css/productList.scss';
import borraccia from '../assets/loghi/borraccia.webp';
import barbera from '../assets/loghi/VITIDAUTUNNO-PIEMONTE-BARBERA.jpg';
import listaVini from '../mock/listaVini.js';

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
  console.log('LISTA VINI',listaVini);
  return (
    <div className="product-list">
      <ul>
        {products.map((product) => (
          <button onClick={() => onProductSelect(product)}>{product.name}</button>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
