import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => (
    <div>
        <h2>{console.log(props)}</h2>
        <Link to="/">back to catalog</Link>
        <h2>it is the product of id {props.match.params.id}</h2>
    </div>
);

export default Product;