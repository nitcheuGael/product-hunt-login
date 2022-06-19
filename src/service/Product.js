import axios from 'axios';
const URL = "http://localhost:8060";

class Product {

    add_product (Post) {
        return axios.post(`${URL}/add_product/`, Post);
    }

    update_product (product, id) {
        return axios.put(`${URL}/update_product/${id}`, product);
    }

    list_Product (lienProduct, email) {
        return axios.get(`${URL}/list_Product/${lienProduct} /${email}`);
    }

    list_product_by_email (email) {
        return axios.get(`${URL}/list_product_by_email/${email}`);
    }

    list_Product_all () {
        return axios.get(`${URL}/list_Product_all`);
    }

    lien_exist (lienProduct, email) {
        return axios.get(`${URL}/lien_exist/${lienProduct}/${email}`);
    }
    delete (id) {
        return axios.delete(`${URL}/delete/${id}`);
    }

}
export default new Product();