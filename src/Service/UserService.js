import axios from 'axios';

const baseURL = 'http://localhost:8075';

class UserService {

   
    getAlluser(){
        return axios.get(baseURL+'/all');
    }
    saveuser(user){
        // return axios.post(baseURL,+'insert' );
        console.log("HIIIII");
        return axios.post(baseURL + '/insert', user);
    }
    loginUser(user){
        // return axios.post(baseURL,+'insert' );
        console.log("logging");
        return axios.post(baseURL + '/login', user);
    }

    // getbyuserId(userId){
    //     return axios.get(baseURL + '/users/{userId}');
    // }

    //  getbyuserId(user){
    //     console.log("..view");
    //     return axios.get(`${baseURL}/users/${user.userId}`);
    //  }

    // UpdatebyId(user){
    //     console.log("dsfdg")
    //     return axios.put(baseURL + '/update',user);

    // }

    
    deleteBook(userId){
        // return axios.delete(baseURL +'delete' +'/' + userId);
        return axios.delete(`${baseURL}/delete/${userId}`);
    }
}
/* // eslint-disable-next-line */
export default new UserService();

