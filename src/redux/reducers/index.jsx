import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { FillterReducer } from "./FillterReducer";
import { ProductsReducer, selectedProductsReducer, sideBar } from "./ProductsReducer";
const reducers = combineReducers({
    allProducts: ProductsReducer,
    product: selectedProductsReducer,
    carts: CartReducer,
    sideBars: sideBar,
    fillter: FillterReducer
});
export default reducers;