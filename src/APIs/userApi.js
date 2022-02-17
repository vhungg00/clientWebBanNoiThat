import axiosClient from './axiosClient'

const UserAPI = {

    getAllData: () => {
        const url = '/users'
        return axiosClient.get(url)
    },

    getDetailData: (id) => {
        const url = `/users/${id}`
        return axiosClient.get(url)
    },

    postSignUp: (query) => {
        const url = `/auth/register/${query}`
        return axiosClient.post(url)
    }

}

export default UserAPI