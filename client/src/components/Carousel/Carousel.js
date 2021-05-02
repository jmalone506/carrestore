import React from 'react'
import Car1 from "../../images/Car1.png";
import Car2 from "../../images/Car2.png";
import Car3 from "../../images/Car3.png";
import "./style.css"


const Carousel = () => {
    return (
        <div id="carousel-switch" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-switch" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-switch" data-slide-to="1"></li>
                <li data-target="#carousel-switch" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    
                    <img className="img d-block w-100" src={Car1} alt="First slide" />
                    <div className="carousel-caption d-none d-md-block bg-custom mb-4">
                        <h1>Welcome To Car Hacks</h1>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img className=" img d-block w-100" src={Car2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="img d-block w-100" src={Car3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-switch" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-switch" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel
