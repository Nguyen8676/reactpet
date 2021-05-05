import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class DetailsEployeeComponent  extends Component {
    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:'',
        };
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLasttNameHandler=this.changeLasttNameHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.cancel=this.cancel.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeesById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({
                firstName:employee.description,
                // lastName:employee.lastName,
                // emailId:employee.emailId,
            });
        });
    }

    updateEmployee=(e) =>{
        e.preventDefault();
        let employee={firstName:this.state.firstName};
        console.log(JSON.stringify(employee));

        EmployeeService.updateEmployees(this.state.id,employee).then(res=>{
            this.props.history.push('/');
        });
      
     }

    changeFirstNameHandler=(event) =>{
        this.setState({firstName:event.target.value});
    }

    changeLasttNameHandler=(event) =>{
       // this.setState({lastName:event.target.value});
    }

    changeemailIdHandler=(event) =>{
       // this.setState({emailId:event.target.value});
    }
    cancel=(e)=>{
       // this.props.history.push('/');
    }


    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        
                        <h3 className="text-center">Update</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input  name="firstName" className="form-control" 
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler.bind(this)}>
                                    </input>
                                </div>
                                {/* <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLasttNameHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Email Id:</label>
                                    <input placeholder="Email" name="emailId" className="form-control" 
                                    value={this.state.emailId} onChange={this.changeemailIdHandler.bind(this)}>
                                    </input>
                                </div> */}

                                <button className="btn btn-success" onClick={this.updateEmployee}>update</button>
                                <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10%"}}>Cancel</button>
                            </form>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DetailsEployeeComponent;