import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProductCard = ({ id, title, mimage }) => {
    return (
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={`../assets/${mimage}`} alt={title} />
                <Card.Link as={Link} to={`/products/${id}`}>See sheep</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;