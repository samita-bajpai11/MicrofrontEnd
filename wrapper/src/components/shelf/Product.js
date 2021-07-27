import React from 'react';
import PropTypes from "prop-types";

import Thumb from '../Thumb';

import util from '../../util';
import products from '../../../data/products.json'


const Product = (props) => {
  const product = props.product;
  
 
 
  return (
    <div className="shelf-item">
     <Thumb
        classes="shelf-item__thumb"
        src={product.attributes.thumbnail_image_url}
        alt="Img"
      />
     <p className="shelf-item__title">{product.attributes.title}</p>
      <div className="shelf-item__price">
        <div className="val"><small>{product.variants.map(e => {e.attributes.rep_sale_price})}</small>
          
        </div>
       
      </div> 
       <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
}


// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   addProduct: PropTypes.func.isRequired,
// };

export default Product;