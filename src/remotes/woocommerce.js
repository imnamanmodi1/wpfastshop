import axios from 'axios/index';

let defaultHeaders = {
    params:{},
    withCredentials: true,
    auth: {
        username: process.env.REACT_APP_WOOCOMMERCE_API_CLIENT,
        password: process.env.REACT_APP_WOOCOMMERCE_API_SECRET
    }
};

const getCategories = () => {
    defaultHeaders.params = {
        per_page: process.env.REACT_APP_WOOCOMMERCE_CATEGORIES_PER_PAGE
    };
    return axios.get(`${process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT}/wp-json/wc/v3/products/categories`, defaultHeaders);
}