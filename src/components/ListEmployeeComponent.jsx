import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees: [],
            id:0,
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.deleteEmployeeById=this.deleteEmployeeById.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
            console.log(res);
        });
    }

    addEmployee(){
        this.props.history.push('/create-Employee');
    }

    updateEmployee(id){
        this.props.history.push(`/detail-employee/${id}`);
    }
 

    // deleteEmployeeById=(id,petid,supplierid,categoryid)=>{     
    //     EmployeeService.deleteEmployeesById(id,petid,supplierid,categoryid).then(res=>{
    //         this.setState({employees:this.state.employees.filter(employee=>employee.productid !== id)})
    //         // this.props.history.push('/');
    //     });
        
    // }
    deleteEmployeeById=(id)=>{     
        EmployeeService.deleteEmployeesById(id).then(res=>{
            this.setState({employees:this.state.employees.filter(employee=>employee.productid !== id)})
            //this.props.history.push('/');
        });
        
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Mô tả</th>
                                <th>ngày tạo</th>
                                <th>Số lượng</th>
                                <th>Trạng thái</th>
                                <th>Khuyến Mãi</th>
                                <th>Discount</th>
                                <th>Actions</th>
                            </tr>
                           
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees=>
                                    <tr key={employees.productid} >
                                        <td>{employees.productname}</td>
                                        <td>{employees.price}</td>
                                        <td>{employees.description}</td>
                                        <td>{employees.createdate}</td>
                                        <td>{employees.quantity}</td>
                                        <td>{employees.status}</td>
                                        <td>{employees.promotion}</td>
                                        <td>{employees.discount}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>this.deleteEmployeeById(employees.productid)}>Delete</button>
                                            <button style={{marginLeft:"10px"}} className="btn btn-primary" onClick={()=>this.updateEmployee(employees.productid)}>Details</button>   
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

