import { ActionTypes } from "../constans/ActionTypes";

export const addToCart = (id, mainColor, amount, product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: { id, mainColor, amount, product }

    };
};
export const removeFormCart = (itemID) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};
export const toggleAmount = (id, value) => {
    return {
        type: ActionTypes.TOGGLE_AMOUNT,
        payload: {
            id,
            value
        },
    };
};
export const totalMoney = () => {
    return {
        type: ActionTypes.TOTAL_MONEY
    }
}
export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CARTS
    }
}
export const loadCurrentItem = (item) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: item
    };
};