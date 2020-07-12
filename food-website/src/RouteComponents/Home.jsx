import React, { Component } from 'react';
import {Link} from 'react-router-dom'
let styles={
    backgroundImage: "url('https://www.9-elephants.co.uk/wp-content/uploads/thai-food.jpg')",
    height:"400px",
    backgroundSize: "cover",
    fontFamily: 'Cinzel'
}
class Home extends Component {
    render() { 
        return ( 
            <div className="container-fluid">
                <div style={styles} className="jumbotron text-center">
                    <Link className="btn btn-light btn-lg p-5 font-weight-bold" to ="/hotel"> <span className="bg-dark"> <h2 className="bg-danger text-light p-5"> Click Here and See Restaurants </h2></span></Link>
                </div>
                <div className="mb-4">
                    <img src="https://www.madrascurrycup.com/images/grab-now/Offer-ad.jpg" alt="offer" height="250px" width="100%"/>
                </div>
                <div className="row">
                    <div className="col">
                        <div  className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://pbs.twimg.com/media/DuduHn4UYAA5T-d.jpg:large" className="d-block w-100" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://ecouponshop.com/wp-content/uploads/2019/02/box8-coupon-code-150-cashback-1-848x470.jpg" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg" className="d-block w-100" alt="hotel"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div  className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://ecouponshop.com/wp-content/uploads/2019/02/box8-coupon-code-150-cashback-1-848x470.jpg" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item ">
                                    <img src="https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://pbs.twimg.com/media/DuduHn4UYAA5T-d.jpg:large" className="d-block w-100"  alt="hotel"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div  className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://pbs.twimg.com/media/DuduHn4UYAA5T-d.jpg:large" className="d-block w-100" alt="hotel"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://ecouponshop.com/wp-content/uploads/2019/02/box8-coupon-code-150-cashback-1-848x470.jpg" className="d-block w-100" alt="hotel"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;