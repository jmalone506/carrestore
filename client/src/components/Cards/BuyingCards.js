import React, { Component } from "react";

import "./style.css";
import carguru from "../../images/carguru.jpg";
class Cards extends Component {
    render() {
        return (
            <center>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center  mb-5" >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">Hemmings</h3>
                                <p className="card-text text-secondary">
                                    Consider you're a timeless person? Ever wanted classic car? Hemmings helps ease the process of searching and purchasing historic vehicles.
                                </p>
                                {/* <a href="/history" className="btn btn-success">Save Website</a> */}
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center  mb-5 " >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">Cars and Bids </h3>
                                <p className="card-text text-secondary">
                                    Did you know auctions still exist? There's a whole world out there of cars that you can bid to purchase!
                                </p>
                                {/* <a href="/history" className="btn btn-success">Save Website</a> */}
                                <a href="https://carsandbids.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center  mb-5 " >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">Car Guru</h3>
                                <p className="card-text text-secondary">
                            Car Guru makes the searching process either by having the landing page directly to the search engine.
                                </p>
                                {/* <a href="/history" className="btn btn-success">Save Website</a> */}
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>
                    </div>

            </center>
        )
    }
}

export default Cards
