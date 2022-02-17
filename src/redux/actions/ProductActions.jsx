import { ActionTypes } from "../constans/ActionTypes"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
// side bar
export const closeSideBar = () => {
    return {
        type: ActionTypes.CLOSE_SIDE_BAR
    }
}

export const openSideBar = () => {
    return {
        type: ActionTypes.OPEN_SIDE_BAR
    }
}