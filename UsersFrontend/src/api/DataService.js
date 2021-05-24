import axios from "axios";


class DataService{
    retrieveAllUsers(){
        return axios.get(`http://localhost:8888/users`)
    }

    deleteUser(id){
        return axios.delete(`http://localhost:8888/users/${id}`)
    }

    retrieveUser(id){
        return axios.get(`http://localhost:8888/users/${id}`)
    }

    updateUser(id,user){
        return axios.put(`http://localhost:8888/users/${id}`,user)
    }

    createUser(user){
        return axios.post(`http://localhost:8888/users`,user)
    }
    
}

export default new DataService();