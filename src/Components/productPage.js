import React, { useState } from 'react';
import ProductList from './productList';
import ProductDetail from './productDetail';
import '../css/productPage.scss';
import logoVini from '../assets/loghi/logoVini.png';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className='headerVini'>
        <img className='headerViniImg' src={logoVini}></img>
      </div>
      <div className="product-page">
        <ProductList onProductSelect={handleProductSelect} />
        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
