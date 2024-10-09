/* import React, { useState } from 'react';
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

export default ProductPage; */


/* import React, { useState } from 'react';
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
    <div className="product-page">
      <div className='headerVini'>
        <img className='headerViniImg' src={logoVini} alt="Logo Vini" />
      </div>

      <div className="product-selection">
        <ProductList onProductSelect={handleProductSelect} />
      </div>
      <div className="product-detail-container">
        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductPage; */


import React, { useState } from 'react';
import ProductList from './productList';
import ProductDetail from './productDetail';
import '../css/productPage.scss';
import logoVini from '../assets/loghi/logoVini.png';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    console.log("Navigate product", product);
    navigate(`/prodotto/${product.name}`, { state: { product } });
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
