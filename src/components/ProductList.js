import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {StoreProducts} from '../data';

class ProductList extends Component {
    state={
        products: storeProducts
    }
    render() { 
        return (  
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title="produts" />
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductList;