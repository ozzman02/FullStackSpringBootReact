import axios from "axios";
import { BASE_API_URL } from "../commons/constants";
import { authorizationHeader } from "./base-service";

const PURCHASE_API_URL = `${BASE_API_URL}/api/purchase`;

class PurchaseService {
    
    savePurchase(purchase) {
        return axios.post(PURCHASE_API_URL, purchase, { headers: authorizationHeader() });
    };
    
    getAllPurchaseItems() {
        return axios.get(PURCHASE_API_URL, { headers: authorizationHeader() });
    };
}

const purchaseService = new PurchaseService();

export default purchaseService;