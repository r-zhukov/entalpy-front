import axios from "axios";
import { apiUrl } from "./baseUrl";


/*function getAuthHeaders() {
  return { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
}*/

export const getAllEnterprisesApi = () => axios.get(apiUrl + "/enterprise");
export const createEnterpriseApi = (body) => axios.post(apiUrl + "/enterprise", body);
export const getAllEnterpriseStatusApi = () => axios.get(apiUrl + "/enterpriseStatus");


/*export const getAllUsersApi = () => axios.get(apiUrl + "/secret/allUsers");

export const getUserByIdApi = id =>
  axios.get(apiUrl + "/secret/userById/" + id);

export const createUserApi = data =>
  axios.post(apiUrl + "/secret/signup", data);

export const loginApi = data =>
  axios.post(apiUrl + "/login", data);

export const getCurrentUserApi = () =>
  axios.get(apiUrl + "/user", { headers: getAuthHeaders() });

export const fetchPostsApi = (itemsPerPage, page) =>
    axios.get(apiUrl + `/post?itemsPerPage=${itemsPerPage}&page=${page}`);
*/
//in this place we make request to some api
//it need only for worker saga
