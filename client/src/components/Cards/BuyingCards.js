import React, { Component } from "react";
import { Element } from "react-scroll";
import { Marginer } from "../../components/Styled/Marginer";
import styled from "styled-components";
import "./style.css"
import redcar from "../../images/landing2.gif";
import carguru from "../../images/carguru.jpg";
import hemmings from "../../images/hemmings.png";
import carsandbids from "../../images/carsandbids.jpg";

const MoreAboutContainer = styled(Element)`
margin-top:50px;
min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  background-color: black;
 
`;

const AboutContainer = styled.div`
  display: flex;
  margin-top:50px;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #ffffff;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
   width: 40vw;
height: 30vh;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 40vw;
    height: 30vh;
    margin-left: 0;
  }
`;

const SectionTitle = styled.h1`
  font-size: 34px;
  margin-top:50px;
  font-color: white;
  font-weight: bold;
   color: #74ee15;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;


class Cards extends Component {
    render() {
        return (
            <MoreAboutContainer>
                <SectionTitle>Starting Your Car Buying Journey</SectionTitle>
                <AboutContainer>
                    <AboutText>
                        Whether it's your first time buying car or fifth time, the process is never easy. {<br />}
                        {<br />} <b>Here are our top tips for starting the car buying process:</b>
                        {<br />}
                        {<br />} <ol>
                            <li>Set your budget.</li>
                            <li>Research the type of car you want.</li>
                            <li>Decide: Would you buy online, at a dealership, or private party?</li>
                            <li>Resesarch loans and financing process.</li>
                            <li>Get Quotes from a variety of places.</li>
                            <li>Ask for a car report. No one want a salvage title! </li>
                            <li>Deal with the dealership or owner and settle on a price point you're content with!</li>
                        </ol>
                        {<br />}
                        {<br />}
                        {<br />} This page highlights some of the best websites for car buying. Remember to take it slow! It's a car buying process for a reason. You got this!
        </AboutText>
                    <AboutImg src={redcar} />
                </AboutContainer>

                <ServicesContainer name="servicesSection">
                    <SectionTitle>Favorite Car Buying Websites</SectionTitle>
                    <Marginer direction="vertical" margin="3em" />
                    <center>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={hemmings} alt="hemmings classic car" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Hemmings</h3>
                                        <p className="card-text text-secondary">

                                            Ever wanted a classic car? Hemmings has a huge database of classic cars for sale and up for auction.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.hemmings.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={carguru} alt="carguru" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Car Guru</h3>
                                        <p className="card-text text-secondary">

                                            Car Guru is a user-friendly car search platfom. It's simple to find the best deals in your area.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.cargurus.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={carsandbids} alt="TRED buying car" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Cars and Bids</h3>
                                        <p className="card-text text-secondary">

                                            Car and Bids is online car auctions all throughout the country. You don't even have to leave your home!
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://carsandbids.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </center>
                </ServicesContainer>
            </MoreAboutContainer>

        )
    }
}

export default Cards
