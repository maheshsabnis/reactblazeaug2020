//

import axios from 'axios';
import { Product } from './../models/product'
export class HttpService {
    constructor() {
        this.url = ' https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    }

    getData() {
        let resp = axios.get(this.url);
        return resp;
    }

    postData(prd) {
        let resp = axios.post(this.url, prd, {
            'Content-Type': 'application/json'
        });
        return resp;
    }

    putData(prd) {
        let resp = axios.put(`${this.url}/${prd.ProductRowId}`, prd, {
            'Content-Type': 'application/json'
        });
        return resp;
    }

    deleteData(prd) {
        let resp = axios.delete(`${this.url}/${prd.ProductRowId}`);
        return resp;
    }
}