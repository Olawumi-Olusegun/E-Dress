import axios from 'axios'

const baseURL = 'https://fakestoreapiserver.reactbd.com'

export const productData = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/products`)
        return data;
    } catch (error) {
        throw new Error(error?.response?.data.message)
    }
}