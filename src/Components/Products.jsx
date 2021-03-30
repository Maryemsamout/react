import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
    return (
        <div id ='products'>
            <h1>CHOOSE &ENJOY</h1>
            <div className='a-container'>
                 <Productbox image ={pimage1} title="small burger"/>
                 <Productbox image ={pimage2} title="bigger burger"/>
                 <Productbox image ={pimage1} title="small burger"/>

            </div>
            
        </div>
    )
}

export default Products;
