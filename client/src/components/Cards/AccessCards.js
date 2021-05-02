import React, { Component } from "react";

import "./style.css";
import carguru from "../../images/carguru.jpg";
class Cards extends Component {
    render() {
        return (
            <center>
                <div className="row">

                    <div className="card-group">
                        <div className="card text-center col-lg-8 col-md-8 col-12 mb-5" >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">To Do</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>


                        <div className="card text-center col-lg-2 col-md-2 col-12 mb-5" >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">Title</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>


                        <div className="card text-center col-lg-2 col-md-2 col-12 mb-5 " >
                            <div className="overflow">
                                <img src={carguru} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h3 className="card-title">Title</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>
                    </div>



                </div>
            </center>
        )
    }
}

export default Cards
