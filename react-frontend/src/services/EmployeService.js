import axios from 'axios';

const EMPLOYE_API_BASE_URL = "http://localhost:8080/api/v1/employes";

class EmployeService {

    getEmployes(){
        return axios.get(EMPLOYE_API_BASE_URL);
    }

    createEmploye(employe){
        return axios.post(EMPLOYE_API_BASE_URL, employe);
    }

    getEmployeById(employeId){
        return axios.get(EMPLOYE_API_BASE_URL + '/' + employeId);
    }

    updateEmploye(employe, employeId){
        return axios.put(EMPLOYE_API_BASE_URL + '/' + employeId, employe);
    }

    deleteEmploye(employeId){
        return axios.delete(EMPLOYE_API_BASE_URL + '/' + employeId);
    }
}

export default new EmployeService()