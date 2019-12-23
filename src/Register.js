import React, { Component } from 'react'
import { exportDefaultSpecifier } from '@babel/types'
import {Link,Redirect} from 'react-router-dom'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            middlename: "",
            lastname: "",
            email: "",
            mobilenumber: "",
            password: "",
            confirmpassword: "",
            fnerror: "",
            lnerror: "",
            emailerror: "",
            mobilenumbererror: "",
            passworderror: "",
            confirmpwderror: "",
            submit:""

        }

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validate = () => {
        let fnerror = ""
        let lnerror = ""
        let emailerror = ""
        let passworderror = ""
        let confirmpwderror = ""
        let mobilenumbererror = ""
        if (!this.state.firstname) {
            fnerror = "firstname required"
            
            
        }
        if (!this.state.lastname) {
            lnerror = "lastname required"
            
            
        }
        if (!this.state.email) {
            emailerror = "email required"
            
            
        }
        else {
            if (!this.state.email.includes('@')) {
                emailerror = "invalid email"
               
                
            }

        }
        if (this.state.mobilenumber.length != 10) {
            mobilenumbererror = "enter 10 digits mobilenumber"
            
            
        }
        if (!this.state.password) {
            passworderror = "password required"
            
            
        }
        else {
            if (this.state.password.length<8) {
                passworderror = "enter strong password"
                
            }
        }
        
            if (this.state.confirmpassword != this.state.password) {
                confirmpwderror = "password and confirmpassword must be same"
                
            }
        
        if (fnerror || lnerror || emailerror || mobilenumbererror || passworderror || confirmpwderror) {
            this.setState({ fnerror, lnerror, emailerror, mobilenumbererror, passworderror, confirmpwderror })
            return false
        }

       else{
           this.setState({
               submit:true
           })
       }
    }



    register = (e) => {
        e.preventDefault();
        const isvalid = this.validate()
        
        

    }



    render() {
        if (this.state.submit == true) {
            return (
                <Redirect to="/"></Redirect>
            )
        }

        return (
            <div>

                Firstname:<input type="text" onChange={this.onChange} name="firstname" /><br />
                <div>{this.state.fnerror}</div>
                Middelename:<input type="text" onChange={this.onChange} name="middelename" /><br />


                Lastname:<input type="text" onChange={this.onChange} name="lastname" /><br />
                <div>{this.state.lnerror}</div>

                Email:<input type="text" onChange={this.onChange} name="email" /><br />
                <div>{this.state.emailerror}</div>
                Mobilenumber:<input type="text" onChange={this.onChange} name="mobilenumber" /><br />
                <div>{this.state.mobilenumbererror}</div>

                password:<input type="password" onChange={this.onChange} name="password" /><br />
                <div>{this.state.passworderror}</div>

                confirmpassword:<input type="password" onChange={this.onChange} name="cp" /><br />
                <div>{this.state.confirmpwderror}</div>

                <button onClick={this.register} >submit</button>

            </div>


        )
    }
}
export default Register;