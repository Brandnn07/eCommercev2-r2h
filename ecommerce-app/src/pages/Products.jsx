import React, { useState, useEffect }  from "react";
import Axios from 'axios';


export default function Products() {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPride] = useState('');
    const [productDescription, setProductDescription] = useState('');


    return(
        <div>Products page!</div>
    )
}