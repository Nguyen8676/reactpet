import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:9090/api/products";
const EMPLOYEE_API_CREATE_URL="http://localhost:9090/api/createproducts";
const EMPLOYEE_API_UPDATE_URL="http://localhost:9090/api/updateproduct";
const EMPLOYEE_API_GETBYID_URL="http://localhost:9090/api/getproduct";
const EMPLOYEE_API_DELETEBYID_URL="http://localhost:9090/api/deleteproduct";

class EmployeeService{
  async  getEmployees(productid){
        return await axios.get(EMPLOYEE_API_BASE_URL );
    }

  async  createEmployees(petid,supplierid,categoryid,employee){
        return await axios.post(EMPLOYEE_API_CREATE_URL+'/'+petid+'/'+supplierid+'/'+categoryid,employee);
    }
    async  updateEmployees(id,petid,supplierid,categoryid,product){
        //return await axios.put(EMPLOYEE_API_UPDATE_URL+`/${id}`+petid+'/'+supplierid+'/'+categoryid,product);
    }
    async  getEmployeesById(id){
       return await axios.get(EMPLOYEE_API_GETBYID_URL +'/'+ id);
    }
    // deleteEmployeesById(id,petid,supplierid,categoryid){
    //     return axios.delete(EMPLOYEE_API_DELETEBYID_URL +'/'+ id +'/'+ petid +'/'+ supplierid +'/'+ categoryid);
    // }
    async deleteEmployeesById(id){
        return await axios.delete(EMPLOYEE_API_DELETEBYID_URL +'/'+ id );
    }
}
export default new EmployeeService()