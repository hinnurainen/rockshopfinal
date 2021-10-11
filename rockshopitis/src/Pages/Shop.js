import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from '../store/actions/actions';
import ShoppingCard from '../containers/ShoppingCard';

const Shop = () => {
    const dispatch = useDispatch();
    const shop = useSelector((state) => state.shop);

    const shopItems = shop.map((product) => {
        return (
            <div key={product.id}>
                <ShoppingCard
                    title={product.title}
                    mimage={product.mimage}
                    price={product.price}
                    removeBtn={<button onClick={() => dispatch(removeFromBasket(product.id))}>-</button>}
                    quantity={product.quantity}
                    addBtn={<button onClick={() => dispatch(addToBasket(product))}>+</button>}
                />
            </div>
        );
    });

    return (
        <div>
            <h2>Look what you've found:</h2>
            <div>{shopItems}</div>
        </div>
    );
};

export default Shop;