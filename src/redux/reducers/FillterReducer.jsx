import { ActionTypes } from "../constans/ActionTypes";

const initialState = {
    fillterProduct: [],
    gridView: true,
}

export const FillterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOAD_PRODUCTS: {
            return {
                ...state,
                fillterProduct: [...payload]
            }
        }
        case ActionTypes.SET_LISTVIEW: {
            return {
                ...state,
                gridView: false
            }
        }
        case ActionTypes.SET_GRIDVIEW: {
            return {
                ...state,
                gridView: true
            }
        }
        default:
            return state
    }
}