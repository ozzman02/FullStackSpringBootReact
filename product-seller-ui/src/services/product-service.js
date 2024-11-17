import axios from "axios";
import { BASE_API_URL } from "../commons/constants";
import { authorizationHeader } from "./base-service";

const PRODUCT_API_URL = `${BASE_API_URL}/api/product`;

class ProductService {

    saveProduct(product) {
        return axios.post(PRODUCT_API_URL, product, { headers: authorizationHeader() });
    };

    deleteProduct(product) {
        return axios.delete(`${PRODUCT_API_URL}/${product.id}`, { headers: authorizationHeader() });
    };

    getAllProducts() {
        return axios.get(PRODUCT_API_URL);
    };
}

const productService = new ProductService();

export default productService;