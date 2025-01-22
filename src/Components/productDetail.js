import React from 'react';
import '../css/productDetail.scss';


const ProductDetail = ({ product }) => {
  console.log("dettaglio prodotto", product);
  if (!product) {
    return <div className="product-detail">Seleziona un prodotto per visualizzarne i dettagli.</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <div className='product-container'>
        <div className="wine-card-detail">
          <img src={product.immagineVino.fields.file.url} alt='productImage' className='product-image' />
        </div>
        {/*  <p>{product.description}</p> */}
        <div className="wine-content-detail">
          <p><b>Formato Bottiglia: </b></p>
          <table>
            <tr>
              <td><b>{product.formatoBottiglie}</b></td>
            </tr>
          </table>
          <p><b>Lista Ingredienti: </b></p>
          <table>
            <tr>
              <td><b>Uva</b></td>
            </tr>
            <tr>
              <td><b>{product.conservante}</b></td>
            </tr>
            <tr>
              <td><b>{product.solfiti}</b></td>
            </tr>
            <tr>
              <td><b>{product.solfiti2}</b></td>
            </tr>
          </table>
          <p><b>Dichiarazione Nutrizionale</b></p>
          <p><b>Valori medi per 100ml</b></p>
          <table>
            <tr>
              <td>Energia:</td>
              <td><b>{product.energia}</b></td>
            </tr>
            <tr>
              <td>Grassi:</td>
              <td><b>{product.grassi}</b></td>
            </tr>
            <tr>
              <td>di cui Acidi e Saturi:</td>
              <td><b>{product.diCuiAcidiESaturi}</b></td>
            </tr>
            <tr>
              <td>Carboidrati:</td>
              <td><b>{product.carboidrati}</b></td>
            </tr>
            <tr>
              <td>di cui Zuccheri:</td>
              <td><b>{product.diCuiZuccheri}</b></td>
            </tr>
            <tr>
              <td>Proteine:</td>
              <td><b>{product.proteine}</b></td>
            </tr>
            <tr>
              <td>Sale:</td>
              <td><b>{product.sale}</b></td>
            </tr>
          </table>
          <p><b>Etichettatura Ambientale</b></p>
          <table>
            <tr>
              <td>Bottiglia:</td>
              <td><b>{product.bottiglia}</b></td>
            </tr>
            <tr>
              <td>Tappo:</td>
              <td><b>{product.tappo}</b></td>
            </tr>
            <tr>
              <td>Capsula:</td>
              <td><b>{product.capsula}</b></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
