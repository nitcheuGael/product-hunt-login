import axios from 'axios';
const URL = "http://localhost:8060";
class Abonnement {

    add_Abonner (Abonnement) {
        return axios.post(`${URL}/add_Abonner`, Abonnement);
    }

    desabonner (emailFollower) {
        return axios.put(`${URL}/update_abonner`, emailFollower);
    }

    liste_abonner (emailFollo) {
        return axios.get(`${URL}/liste_abonner`, emailFollo);
    }

} export default new Abonnement();