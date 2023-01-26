import * as types from "./actionTypes";

export const getCartTotal = () => ({
    type: types.GET_TOTALS,
});

export const increase = (id: any) => ({
    type: types.INCREASE,
    payload: id,
});

export const decrease = (id: any) => ({
    type: types.DECREASE,
    payload: id,
});

export const remove = (id: any) => ({
    type: types.REMOVE,
    payload: id,
});

export const clearItems = () => ({
    type: types.CLEAR_ITEMS,
});

export const displayItem = (cart: any) => ({
    type: types.DISPLAY_ITEMS,
    payload: cart,
});
export const addToCart = (id: any) => ({
    type: types.ADD_TO_CART,
    payload: id,
});
