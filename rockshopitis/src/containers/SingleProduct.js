import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/products';
import { addToBasket } from '../store/actions/actions';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSingleProduct(id);
            setProduct(data);
        };
        fetchData();
    }, [id]);


    return (
        <Card key={product.id} style={{ width: '32rem' }} className="singlepagecard">
            <Card.Img variant="top" src={`../assets/${product.mimage}`} alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <p className="singletext">{product.description}</p>
                    <p className="price">{product.price}€</p>
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToBasket(product))}>Add to basket</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleProduct;