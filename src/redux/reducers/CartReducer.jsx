import { ActionTypes } from '../constans/ActionTypes';


const initialState = {
    cartItems: localStorage.getItem("cartItem") ?
        JSON.parse(localStorage.getItem("cartItem")) :
        [],
    total_amount: 0,
    shipping_fee: 534,
}

export const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART: {
            const tempItem = state.cartItems.find((item) => item.id === payload.id + payload.mainColor)
            if (tempItem) {
                const tempCart = state.cartItems.map((cartItem) => {
                    if (cartItem.id === payload.id + payload.mainColor) {
                        let newAmount = cartItem.amount + payload.amount;
                        if (newAmount > cartItem.max) {
                            newAmount = cartItem.max
                        }
                        return { ...cartItem, amount: newAmount };
                    } else {
                        return cartItem
                    }
                })
                return {
                    ...state, cartItems: tempCart
                }
            }
            else {
                const newItem = {
                    id: payload.id + payload.mainColor,
                    name: payload.product.name,
                    mainColor: payload.mainColor,
                    amount: payload.amount,
                    image: payload.product.images[0].url,
                    price: payload.product.price,
                    max: payload.product.stock,
                }
                return { ...state, cartItems: [...state.cartItems, newItem] }
            }
        }
        case ActionTypes.TOGGLE_AMOUNT: {
            const { id, value } = payload;
            const tempCart = state.cartItems.map((item) => {
                if (item.id === id) {
                    if (value === 'inc') {
                        let newAmount = item.amount + 1;
                        if (newAmount > item.max) {
                            newAmount = item.max
                        }
                        return {
                            ...item, amount: newAmount
                        }
                    }
                    if (value === 'dec') {
                        let newAmount = item.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return { ...item, amount: newAmount }
                    }
                }
                return item
            })
            return { ...state, cartItems: tempCart }
        }
        case ActionTypes.REMOVE_FROM_CART: {
            const temCart = state.cartItems.filter((item) => item.id !== payload.id)
            return {
                ...state,
                cartItems: temCart
            }
        }
        case ActionTypes.CLEAR_CARTS: {
            return { ...state, cartItems: [] }
        }
        case ActionTypes.TOTAL_MONEY: {
            const total = state.cartItems.reduce((init, prev) => {
                return init + prev.price * prev.amount
            }, 0)
            return { ...state, total_amount: total }
        }
        default:
            return state
    }



}

