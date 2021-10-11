import { getProducts, getShop } from "../../services/products";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_SHOP = "INIT_SHOP"
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const initializeState = () => {
    return async (dispatch) => {
        const products = await getProducts();
        dispatch({
            type: INIT_PRODUCTS,
            payload: products,
        });
    };
};

export const initializeShop = () => {
    return async (dispatch) => {
        const shop = await getShop();
        dispatch({
            type: INIT_SHOP,
            data: shop,
        });
    };
};

export const addToBasket = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_BASKET,
            payload: product,
        });
    };
};

export const removeFromBasket = (productId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_BASKET,
            payload: productId,
        });
    };
};