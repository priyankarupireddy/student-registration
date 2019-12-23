import React,{Component} from 'react'

class Dashboard extends Component{
    constructor(){
    super()

    this.state={
        students:[],
        studentName:'',
        studentId:'',
        email:"",
        class:"",
        year:"",
        city:""

    }
}
onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
        
       
    })
}

addStudent=()=>{
 this.setState({
     students:[
         ...this.state.students,{studentName:this.state.studentId,studentId:this.state.studentName,email:this.state.email,class:this.state.class,year:this.state.year,city:this.state.city}
     ]
 })
}
removeStudent=(student)=>{
    this.setState({
        students:this.state.students.filter((currentStudent)=>{
            return currentStudent!=student
        })
    })
}
clearStudent=()=>{
    this.setState({
        studentName:'',
        studentId:'',
        email:"",
        class:"",
        year:"",
        city:""
    })
}

render(){
return(
    <div className="row">
        <div className="coumn">
    studentname:<input type="text"  onChange={this.onChange} name="studentName"/><br/>
    studentid:<input type="text" onChange={this.onChange} name="studentId"/><br/>
    email:<input type="text" onChange={this.onChange} name="email"/><br/>
    class:<input type="text" onChange={this.onChange} name="class"/><br/>
    year:<input type="text" onChange={this.onChange} name="year"/><br/>
    city:<input type="text" onChange={this.onChange} name="city"/><br/>
    <button onClick={this.addStudent}>save</button><button onClick={this.clearStudent}>clear</button></div>
    <div className="column">
    <table align="center"><tbody>
        
            <tr><td>id</td><td>sname</td><td>email</td><td>class</td><td>year</td><td>city</td></tr>
        {
            this.state.students.map((student,index)=>{
                return <tr><td>{student.studentName}</td><td>{student.studentId}</td>
                <td>{student.email}</td>
                <td>{student.class}</td>
                <td>{student.year}</td>
                <td>{student.city}</td>
                <td>  <button onClick={()=>{
                                this.removeStudent(student);
                            }}>Remove</button></td>
                </tr>
            })
        }
        
        </tbody>
    </table></div>
    </div>
)
}
}
export default Dashboard;