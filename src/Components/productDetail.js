import React from 'react';
import '../css/productDetail.scss';
import { CiCalendar } from "react-icons/ci";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiVineLeaf } from "react-icons/gi";
import { PiBeerBottle } from "react-icons/pi";
import { LiaWineBottleSolid } from "react-icons/lia";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LuClipboardType } from "react-icons/lu";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";

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
          <img src={product.imgUrl} alt='productImage' className='product-image' />
        </div>
        {/*  <p>{product.description}</p> */}
        <div className="wine-content-detail">
          <p><b>Lista Ingredienti: </b></p>
          <table>
            <tr>
              <td>Uva:</td>
              <td><b>{product.energia}</b></td>
            </tr>
            <tr>
              <td>Regolatori dell'acidità:</td>
              <td><b>{product.acidità}</b></td>
            </tr>
            <tr>
              <td>Conservante:</td>
              <td><b>{product.conservante}</b></td>
            </tr>
            <tr>
              <td>Solfiti:</td>
              <td><b>{product.solfiti}</b></td>
            </tr>
            <tr>
              <td>Imbottigliamento:</td>
              <td><b>{product.imbottigliamento}</b></td>
            </tr>
          </table>
          <br></br>
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
              <td><b>{product.acidi_saturi}</b></td>
            </tr>
            <tr>
              <td>Carboidrati:</td>
              <td><b>{product.carboidrati}</b></td>
            </tr>
            <tr>
              <td>di cui Zuccheri:</td>
              <td><b>{product.zuccheri}</b></td>
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

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
