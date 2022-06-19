import axios from 'axios';
const URL = "http://localhost:8060";
class Poste {

    add_poste (Post) {
        return axios.post(`${URL}/add_poste`, Post);
    }

    delete_poste (poste, datePost) {
        return axios.delete(`${URL}/delete_poste`, poste, datePost);
    }


    get_id_poste (poste, datePost) {
        return axios.get(`${URL}/get_id_poste`, poste, datePost);
    }

    list_post (email) {
        return axios.get(`${URL}/list_post`, email);
    }

} export default new Poste();