import React from 'react';
import {Redirect} from 'react-router-dom'

class RestaurentItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
          isAuth : false,
       }
      }

    render() { 
        const {data,match,isAuth} = this.props
        if(!isAuth){
          return <Redirect to="/Login"/>
        }
        let item = data.find(ele => ele.id === Number(match.params.id))
        // console.log(this.props)
        console.log(this.state)
    
        const handleClick =(id)=>{
           console.log(id)
           this.props.addtoCart(id)
        }

        return (
            <div>
                <div>{item.menu.map(e=>
                    <div className="border" key={e.id}>
                       <div className="p-1">
                           <div>
                               <div className="d-flex flex-row">
                                   <div className="p-2">
                                        <img src={e.img} alt={e.name} height="200px" width="200px"/>
                                   </div>
                                   <div className="p-2">
                                        <p className="lead">Item : {e.name}</p>
                                        <p className="lead">Price of Item : {e.price}</p>
                                        <button onClick={()=> handleClick(e.id)} className="btn btn-lg btn-danger">Add To Cart</button>
                                   </div>
                               </div>
                           </div>  
                       </div>
                    </div>
                )}</div>
            </div>
        );
    }
}
 
export default RestaurentItem;