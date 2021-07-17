import axios from 'axios';

// localhost port will be my api port
const baseUrl = "http://localhost:60671/api/"

export default {

    dFlat(url = baseUrl + 'Flats/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}