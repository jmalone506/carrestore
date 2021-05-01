import React, { Component } from 'react'
import buyCard from "./saveCard"
import "./style.css"

class Cards extends Component {
    render() {
        return (

            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    < buyCard />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    < buyCard />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    < buyCard />
                </div>


            </div>


        )
    }
}

export default Cards
