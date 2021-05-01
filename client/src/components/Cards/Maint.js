import React, { Component } from 'react'
import carguru from "../../images/carguru.jpg"
import "./style.css"

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
                                <h3 className="card-title">Title</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
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
                                <h3 className="card-title">Title</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
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
                                <h3 className="card-title">Title</h3>
                                <p className="card-text text-secondary">

                                    text
                                </p>
                                <a href="/history" className="btn btn-success">Save Website</a>
                                <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                            </div>
                        </div>
                    </div>




                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center  mb-5" >
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
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center   mb-5" >
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
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card text-center  mb-5" >
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
