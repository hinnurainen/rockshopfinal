import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Shop from '../Pages/Shop';

const Main = () => {
    const shop = useSelector((state) => state.shop);
    let count = 0;

    shop.map((item) => {
        count += item.quantity;
        return count;
    });

    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/shop">Basket ({count})</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/products' component={Products}></Route>
                <Route path='/shop' component={Shop}></Route>
            </Switch>
        </Router>
    );
};

export default Main;