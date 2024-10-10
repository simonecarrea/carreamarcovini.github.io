import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import ProductDetail from './productDetail';
import '../css/productPage.scss';
import logoVini from '../assets/loghi/logoVini.png';
import { useNavigate, useParams } from 'react-router-dom';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { name } = useParams();

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    console.log("Navigate product", product);
    navigate(`/prodotto?name=${product.nomeVino}`, { state: { product } });
  };

  return (
    <div>
      <div className='headerVini'>
        <img className='headerViniImg' src={logoVini} alt="Logo Vini" />
      </div>
      <div className="product-page">
        <ProductList onProductSelect={handleProductSelect} />
        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
