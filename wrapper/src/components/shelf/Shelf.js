import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Product from './Product';
import products from '../../../data/products.json'
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';


class Shelf extends Component {


	
  render() {
    const productlst = products.products;
     const p = productlst.map(product => {
     return (
     <Product
     product={product}
        />
    );
   });
  

    return (
      <React.Fragment>
       
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length}/>
           {p} 
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    )

  }
}

// Shelf.propTypes = {
//    products: PropTypes.array.isRequired,
//   addProduct: PropTypes.func.isRequired,
//   filters: PropTypes.array,
//   sort: PropTypes.string,
// }



export default Shelf;