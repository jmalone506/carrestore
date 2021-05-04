import React, { Component } from "react";
import { Element } from "react-scroll";
import { Marginer } from "../../components/Styled/Marginer";
import styled from "styled-components";
import "./style.css"
import carvana from "../../images/carvana.png";
import tred from "../../images/tred.png";
import offerup from "../../images/offerup.png"
import selling from "../../images/landing1.gif"


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
                <SectionTitle>Want To Sell Your Car?</SectionTitle>
                <AboutContainer>
                    <AboutText>
                        {<br />}
                        {<br />} <b>Below are some key things to remember when selling your car:</b>
                        {<br />}
                        {<br />} <ol>
                            <li>Fix mechanical issues, and keep it clean. </li>
                            <li>Ensure your title, registration, and any other documents are up to date.</li>
                            <li>Sell in a market fit for your vehicle.</li>
                            <li>Matching tires in good condition.</li>
                            <li>Negotiate and finalize sale.</li>
                            <li>Consider donating junk for a tax write off.</li>
                        </ol>
                        {<br />}
                        {<br />}
                        {<br />} Selling a car depends on the current market value. It could be rough, but stay patient the right buyer will come along. We’ve shared some of the best sites to sell your vehicle.
        </AboutText>
                    <AboutImg src={selling} />
                </AboutContainer>

                <ServicesContainer name="servicesSection">
                    <SectionTitle>Favorite Car Selling Websites</SectionTitle>
                    <Marginer direction="vertical" margin="3em" />
                    <center>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={tred} alt="TRED buying car" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Tred</h3>
                                        <p className="card-text text-secondary">

                                            Sell your car from your couch on Tred! Tred offers higher payout than other companies.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.tred.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={offerup} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Offer Up</h3>
                                        <p className="card-text text-secondary">

                                            You can post your car to sell on Offer Up and not deal with any middle man!
                                        </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://offerup.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={carvana} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Carvana</h3>
                                        <p className="card-text text-secondary">

                                            Carvana makes it car selling process simple. They accept car under 6 years old.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.carvana.com/" className="btn btn-danger">Visit</a>
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
