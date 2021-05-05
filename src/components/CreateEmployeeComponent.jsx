import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            productid:'',
            productname:'',
            price:'',
            description:'',
            createdate:'',
            quantity:'',
            status:'',
            promotion:'',
            discount:'',
            petid:5,
            supplierid:'',
            cateid:'',
        };
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLasttNameHandler=this.changeLasttNameHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.changeCreateDateHandler=this.changeCreateDateHandler.bind(this);
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
        this.changePromotionHandler=this.changePromotionHandler.bind(this);
        this.changeDiscountHandler=this.changeDiscountHandler.bind(this);
        this.changePetIdHandler=this.changePetIdHandler.bind(this);
        this.changeSuplierIdHandler=this.changeSuplierIdHandler.bind(this);
        this.changeCateIdHandler=this.changeCateIdHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
        this.cancel=this.cancel.bind(this);
        
    }
    
    saveEmployee=(e) =>{
       e.preventDefault();
       let employee={
          
            productname:this.state.productname,
            price:this.state.price,
            description:this.state.description,
            createdate:this.state.createdate,  
            quantity:this.state.quantity,
            status:this.state.status,
            promotion:this.state.promotion,
            discount:this.state.discount,
            petid:this.state.petid,
            supplierid:this.state.supplierid,
            cateid:this.state.cateid
        };
    
        EmployeeService.createEmployees(this.state.petid,this.state.supplierid,this.state.cateid,employee).then(res =>{
            this.props.history.push('/');
            console.log(this.state.petid);  
        });
        
    
     
    }

    changeFirstNameHandler=(event) =>{
        this.setState({productname:event.target.value});
    }

    changeLasttNameHandler=(event) =>{
        this.setState({price:event.target.value});
    }

    changeemailIdHandler=(event) =>{
        this.setState({description:event.target.value});
    }

    changeCreateDateHandler=(event) =>{
        this.setState({createdate:event.target.value});
    }

    changeQuantityHandler=(event) =>{
        this.setState({quantity:event.target.value});
    }

    changeStatusHandler=(event) =>{
        this.setState({status:event.target.value});
    }

    changePromotionHandler=(event) =>{
        this.setState({promotion:event.target.value});
    }

    changeDiscountHandler=(event) =>{
        this.setState({discount:event.target.value});
    }

    changePetIdHandler=(event) =>{
        this.setState({petid:event.target.value});
    }

    changeSuplierIdHandler=(event) =>{
        this.setState({supplierid:event.target.value});
    }
    changeCateIdHandler=(event) =>{
        this.setState({cateid:event.target.value});
    }

    cancel=(e)=>{
        this.props.history.push('/');
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        
                        <h3 className="text-center">Add</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>ProductName</label>
                                    <input placeholder="" name="firstName" className="form-control" 
                                    value={this.state.productname} onChange={this.changeFirstNameHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Gia</label>
                                    <input placeholder="" name="lastName" className="form-control" 
                                    value={this.state.price} onChange={this.changeLasttNameHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>mo ta</label>
                                    <input placeholder="" name="emailId" className="form-control" 
                                    value={this.state.description} onChange={this.changeemailIdHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Ngay Tao</label>
                                    <input placeholder="" name="createDate" className="form-control" 
                                    value={this.state.createdate} onChange={this.changeCreateDateHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>So luong</label>
                                    <input placeholder="" name="quantity" className="form-control" 
                                    value={this.state.quantity} onChange={this.changeQuantityHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Trang thai</label>
                                    <input placeholder="" name="status" className="form-control" 
                                    value={this.state.status} onChange={this.changeStatusHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Khuyen Mai</label>
                                    <input placeholder="" name="promotion" className="form-control" 
                                    value={this.state.promotion} onChange={this.changePromotionHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Discount</label>
                                    <input placeholder="" name="discount" className="form-control" 
                                    value={this.state.discount} onChange={this.changeDiscountHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    {/* <label>Pet</label>
                                    <input placeholder="" name="petid" className="form-control" 
                                    value={this.state.petid} onChange={this.changePetIdHandler.bind(this)}>
                                    </input> */}
                                    <select value={this.state.petid} onChange={this.changePetIdHandler.bind(this)}>
                                        <option selected value="5">Bo Sat</option>
                                        <option value="6">Bao</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Nha Cung Cap</label>
                                    <input placeholder="" name="supplierid" className="form-control" 
                                    value={this.state.supplierid} onChange={this.changeSuplierIdHandler.bind(this)}>
                                    </input>
                                </div>
                                <div >
                                    <label>Category</label>
                                    <input placeholder="" name="cateid" className="form-control" 
                                    value={this.state.cateid} onChange={this.changeCateIdHandler.bind(this)}>
                                    </input>
                                    
                                </div>

                                <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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
 
export default CreateEmployeeComponent;