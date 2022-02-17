import { ActionTypes } from "../constans/ActionTypes";
const initialState = {
    products: [],
    isSideBarOpen: false,
}
export const ProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const sideBar = (state = initialState, { type }) => {
    switch (type) {
        case ActionTypes.OPEN_SIDE_BAR: {
            return {
                ...state, isSideBarOpen: true
            }
        }
        case ActionTypes.CLOSE_SIDE_BAR: {
            return {
                ...state, isSideBarOpen: false
            }
        }
        default:
            return state
    }
}
