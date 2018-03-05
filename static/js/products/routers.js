"use strict";

import React from 'react';
import {Route} from 'react-router-dom'
import ProductListContainer from './components/products';


class ProductRouter extends React.Component{
  render() {
    return (
      <Route path='/' component={ProductListContainer}/>
    );
  }
}

export {ProductRouter};
