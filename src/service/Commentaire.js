import axios from 'axios';
const URL = "http://localhost:8060";
class Commentaire {

    add_commentaire (Commentaire) {
        return axios.post(`${URL}/add_commentaire`, Commentaire);
    }

    delete_commentaire (mailCommenteuer, dateHeurComment) {
        return axios.delete(`${URL}/delete_commentaire`, mailCommenteuer, dateHeurComment);
    }

    list_commentaire (mailCommenteuer, dateHeurComment) {
        return axios.get(`${URL}/list_commentaire`, mailCommenteuer, dateHeurComment);
    }


} export default new Commentaire();