import { ActionTypes } from "../constans/ActionTypes"

export const loadProduct = (products) => {
    return {
        type: ActionTypes.LOAD_PRODUCTS,
        payload: products
    }
}