import axiosClient from "./axiosClient";

const ProductApi = {
    getProduct: () => {
        const url = '/product'
        return axiosClient.get(url)
    },
    getProductById : (param) => {
        const url = `/product/${param}`
        return axiosClient.get(url)
    }
}
export default ProductApi