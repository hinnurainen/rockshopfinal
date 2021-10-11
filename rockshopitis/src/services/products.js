import axios from 'axios';

const baseUrl = "http://localhost:3001";

export const getProducts = async () => {
    const response = await axios.get(baseUrl + "/products");
    return response.data;
};

export const getSingleProduct = async (id) => {
    const response = await axios.get(baseUrl + "/products/" + id);
    return response.data;
}

export const getShop = async () => {
    const response = await axios.get(baseUrl + "/shop");
    return response.data;
};