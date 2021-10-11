import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from '../containers/ProductCard';
import SingleProduct from '../containers/SingleProduct';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const listedProducts = products.map((product) => {
        return (
            <div key={product.id}>
                <ProductCard
                    id={product.id}
                    title={product.title}
                    mimage={product.mimage}
                    price={product.price}
                    description={product.description}
                />
            </div>
        );
    });

    return (
        <div>
            <Switch>
                <Route path="/products/:id">
                    <SingleProduct />
                </Route>
                <Route path="/products" exact>
                    <div className="listedproducts">{listedProducts}</div>
                </Route>
            </Switch>
        </div>
    );
};

export default Products;