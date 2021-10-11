import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';
import shopReducer from './reducers/shopReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    products: productReducer,
    shop: shopReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;