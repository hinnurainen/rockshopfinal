import * as actionTypes from "../actions/actions";

const shopReducer = (state = [], action) => {
    let updatedShop;
    let updatedItemIndex;
    switch (action.type) {
        case actionTypes.INIT_SHOP:
            return action.data;
        case actionTypes.ADD_TO_BASKET:
            updatedShop =
                [...state];
            updatedItemIndex = updatedShop.findIndex((product) => product.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedShop.push({
                    ...action.payload, quantity: 1,
                });
            } else {
                const updatedItem = {
                    ...updatedShop[updatedItemIndex],
                };
                updatedItem.quantity++;
                updatedShop[updatedItemIndex] = updatedItem;
            }
            return updatedShop;
        case actionTypes.REMOVE_FROM_BASKET:
            updatedShop = [...state];
            updatedItemIndex = updatedShop.findIndex((product) => product.id === action.payload);
            const updatedItem = {
                ...updatedShop[updatedItemIndex],
            };
            updatedItem.quantity--;
            if (updatedItem.quantity <= 0) {
                updatedShop.splice(updatedItemIndex, 1);
            } else {
                updatedShop[updatedItemIndex] = updatedItem;
            }
            return updatedShop;
        default:
            return state;
    }
};

export default shopReducer;