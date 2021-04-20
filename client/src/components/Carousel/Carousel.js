import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div class="carousel row align-items-center">
                <div class="carouselContainer col-lg-10 col-md-10 col-sm-10">
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="100">
                                <img src="./stylesheets/Car3.png" class="d-block w-100" alt="First">
            </div>
                                <div class="carousel-item" data-interval="2000">
                                    <img src="./stylesheets/Car2.jpg" class="d-block w-100" alt="Second">
            </div>
                                    <div class="carousel-item" data-interval="2000">
                                        <img src="./stylesheets/Car4.png" class="d-block w-100" alt="Second">
            </div>
                                        <div class="carousel-item" data-interval="2000">
                                            <img src="./stylesheets/Car6.png" class="d-block w-100" alt="Second">
            </div>
                                            <div class="carousel-item" data-interval="2000">
                                                <img src="./stylesheets/Car1.jpg" class="d-block w-100" alt="Second">
            </div>
                                                <div class="carousel-item">
                                                    <img src="./stylesheets/Car5.png" class="d-block w-100" alt="Third">
            </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
        </div>
    )
}

export default Carousel
