import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbarstyle.css"
function Navbar(props){
  return(
    <div className="Headerstyle">
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/About"> About </Link></li>
        <li><Link to ="/Cart"> Cart <span class="badge  badge-light">{props.cartArray.length}</span></Link></li>
        <li><Link to ="/Login">{props.isAuth ? "Logout" : "Login"}</Link></li>
      </ul>
    </div>
  )  
}

export default Navbar