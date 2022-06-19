
import axios from 'axios';
const URL = "http://localhost:8060";
class Abonner {

    connexion (Abonner) {
        return axios.post(`${URL}/add_abonner/`, Abonner);
    }

    update_Abonner (Abonner, email) {
        return axios.put(`${URL}/update_abonner/${email}`, Abonner);
    }

    abonneer_exist (email) {
        return axios.get(`${URL}/abonner_exist/${email}`);
    }

} export default new Abonner();