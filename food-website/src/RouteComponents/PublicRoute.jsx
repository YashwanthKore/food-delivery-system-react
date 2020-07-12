 import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Login from './Login';
import AllRestaurents from './AllRestaurents'
import RestaurentItem from './RestaurentItem'
import{HashRouter,Route,Switch} from 'react-router-dom'
import data from './data.json'


class PublicRoute extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isAuth : false,
      cartArray : [],
   }
  } 
  
  handleAuth =()=>{
    this.setState({
      isAuth :true
    })
  }
  handleLogout =()=>{
    this.setState({
      isAuth :false
    })
  }

 addtoCart =(item)=>{
   
  // let x = data.forEach((ele)=> ele.menu.map((element)=> element.id === item && element))
  for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].menu.length;j++){
      if(data[i].menu[j].id == item){
        var x = data[i].menu[j]
      }
    }
  }
   this.setState({
     cartArray : [...this.state.cartArray,x]
   })
  console.log(item)
 }


  render(){
    console.log(this.state.cartArray)
    const {isAuth,cartArray} = this.state
    console.log(this.state)
     return (
      <HashRouter>
        <Navbar isAuth ={isAuth} cartArray ={cartArray}/>
        <Switch>
              <Route path ="/" exact component={Home}/>
              <Route path ="/hotel" exact render = {props => <AllRestaurents data = {data} {...props} /> }/>
              <Route path ="/hotel/:id" render = {props => <RestaurentItem addtoCart={this.addtoCart} isAuth={isAuth} data = {data} {...props}  />}/>
              <Route path ="/About" component ={About}/>
              <Route path ="/Cart" render = {props => <Cart cartArray={cartArray} />}/>
              <Route path ="/Login" render = {(props)=><Login isAuth={isAuth} {...props} handleClick = {this.handleAuth}/>}/>
              <Route render={() => (<div className="d-flex justify-content-center"><img src="https://static.vecteezy.com/system/resources/previews/000/250/876/non_2x/vector-error-404-unavailable-web-page-file-not-found-concept.jpg" alt="404"/></div>)}/>
        </Switch> 
        <Footer/>
      </HashRouter> 
    )
  }
}

export default PublicRoute;