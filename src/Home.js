import React,{Component} from 'react'
import {Redirect} from 'react-router-dom';
import Register from './Register'
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            emailerror:"",
            passworderror:"",
            loggedIn:"",
            register:""
        }
    }
    onEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    onPwd=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    validate=()=>{
      let  emailerror=""
      let passworderror=""
      if (!this.state.password)
      passworderror="password required"

      if (!this.state.email)
       emailerror="email required"
    
       if (emailerror || passworderror) {
        this.setState({ emailerror, passworderror });
        return false;
      }
  
      return true;
    };
    login=(e)=>{
        e.preventDefault();
        const isValid=this.validate()
    }
    onRegister=()=>{
        
        this.setState({
            register:true
        })
        
    }
    login = () => {
        if ((this.state.email == "user@gmail.com") && (this.state.password == "123456")) {
            this.setState({
                loggedIn: true
            })
            

            console.log("loggedin true")
        }
        else{
            alert("invalid Login Details")
        }
    }


    render(){
        if (this.state.loggedIn == true) {
            return (
                <Redirect to="/Dashboard"></Redirect>
            )
        }
        if (this.state.register==true){
            return(
                <Redirect to="/Register"></Redirect>
            )
        }
        return(
            <div >
           <lable>email</lable> <input type="text"  onChange={this.onEmail} name="mailid"/><br/>
           <div>{this.state.emailerror}</div>
               <lable>password</lable> <input type="password" onChange={this.onPwd} name="pwd"/><br/>
        
               <div>{this.state.passworderror}</div>
                   <button onClick={this.login}>Login</button>
                   <button onClick={this.onRegister}>register</button>
                   
           </div>
        )
    }
}
export default Home