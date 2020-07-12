import React from 'react'
import {Link} from 'react-router-dom'

class AllRestaurents extends React.Component{
    render(){
        const {data,match} = this.props
        return (  
            <>
                <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}} >{data.map((ele)=> 
                        <div key={ele.id} className="card p-2 m-2">
                            <img src={ele.src} class="card-img-top" alt={ele.name} height="350px"/>
                            <div className="card-body">
                                <h3 className="card-title">{ele.name}</h3>
                                <p><span className="font-weight-bold">Cuisine:</span> {ele.cuisine.map((element)=> <span className="m-1 border" key={element}>{element} </span>)}</p>
                                <div className="row">
                                    <div className="col">
                                        <p> CostForTwo : ₹{ele.costForTwo}<br/> Delivery Time : {ele.deliveryTime}mins</p>
                                    </div>
                                    <div className="col">
                                        <p> Rating : <span className="bg-success text-light p-1 text-weight-bold"> {ele.rating}</span><br/> Reviews : {ele.deliveryTime} <br/> Votes : {ele.votes}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to={`${match.url}/${ele.id}`} className="btn btn-lg btn-danger">Order Online</Link>
                                </div>
                            </div>
                        </div>
                )}</div>
                
            </>
        )
    }
}
 
export default AllRestaurents;