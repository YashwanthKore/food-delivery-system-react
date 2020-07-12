import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleClick =()=>{
        let uname ="admin"
        let pword ="admin"
        const{username,password}=this.state
        if(uname === username && pword === password){
          this.props.handleClick()
          this.setState ({
            username :"",
            password :""
          })
        }
        else{
          alert("username and password are invalid")  
        }
    }

    render(){
        const{username,password} = this.state
        const {isAuth} = this.props

        if(isAuth){
         return <Redirect to="/hotel"/>
        }
        return(
            <div >
                <div className="container my-5 border bg-light">
                    <h1 className="text-center bg-dark text-light">Login Here :</h1>
                    <form >
                       <div>
                            <label>Username : </label>
                            <input name="username" value={username}  placeholder="Enter Username" onChange = {this.handleChange} className="form-control"></input>
                        
                            <label className="mt-2">Password : </label>
                            <input name="password" type="password"  value={password}  placeholder="Enter Password" onChange = {this.handleChange} className="form-control"></input>

                            <small>username :admin ,password :admin</small>
                       </div>
                    </form>
                    <div className="d-flex justify-content-center">
                        <button onClick ={this.handleClick} className="btn btn-primary btn-lg m-2">Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}