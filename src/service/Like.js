import axios from 'axios';
const URL = "http://localhost:8060";
class Like {

    add_like (Like) {
        return axios.post(`${URL}/add_like`, Like);
    }

    delete_like (email) {
        return axios.delete(`${URL}/delete_like`, email);
    }

    list_commentaire (mailCommenteuer, dateHeurComment) {
        return axios.get(`${URL}/list_commentaire`, mailCommenteuer, dateHeurComment);
    }

}

export default new Like();