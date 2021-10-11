import React from 'react';

const ShoppingCard = ({ mimage, title, price, quantity, removeBtn, addBtn }) => {
    return (
        <div className="shoppingcard">
            <img src={`../assets/${mimage}`} />
            <h3>{title}</h3>
            <p>{price}€</p>
            <p>{removeBtn}</p>
            <p>{quantity}</p>
            <p>{addBtn}</p>
        </div>
    );
};

export default ShoppingCard;