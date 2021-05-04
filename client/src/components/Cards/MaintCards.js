import React, { Component } from "react";
import { Element } from "react-scroll";
import { Marginer } from "../../components/Styled/Marginer";
import styled from "styled-components";
import "./style.css";
import autozone from "../../images/autozone.jpg";
import pepboys from "../../images/pepboys.jpg";
import maps from "../../images/maps.png";

import van from "../../images/landing4.gif"

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
  color: #ee2228;

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
                <SectionTitle>Maintaining Your Ride</SectionTitle>
                <AboutContainer>
                    <AboutText>
                        Maintaining your whip could be daunting but no one likes being stranded on the road. {<br />}
                        {<br />} <b>Keep your car in top shape by following these tips:</b>
                        {<br />}
                        {<br />} <ol>
                            <li>Stay up to date on the routine maintenance. </li>
                            <li> Check fluid regularly.</li>
                            <li>Be aware of any vehicle recalls.</li>
                            <li>Resesarch loans and financing process.</li>
                            <li>Get Quotes from a variety of places.</li>
                            <li>Find a local mechanic.</li>
                            <li>Don’t avoid your check engine light.</li>
                        </ol>
                        {<br />}
                        {<br />}
                        {<br />} Routine maintenance plays a pivotal role in your vehicle’s health. Maintenance could save you the hassle of having to shop for a new car, being stuck on the side of the road, or outrageous auto shop fees.
        </AboutText>
                    <AboutImg src={van} />
                </AboutContainer>

                <ServicesContainer name="servicesSection">
                    <SectionTitle>Favorite Car Maintenance Websites</SectionTitle>
                    <Marginer direction="vertical" margin="3em" />
                    <center>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={autozone} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Autozone</h3>
                                        <p className="card-text text-secondary">

                                            AutoZone is around every corner and have a wide variety of resources to help maintain your car! They offer some free car support.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.autozone.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={pepboys} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Title</h3>
                                        <p className="card-text text-secondary">

                                            Pep Boys offers Tires, Auto Parts, and Auto Repair giving you the choices to choose what you want to do.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.pepboys.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={maps} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Google Maps Search</h3>
                                        <p className="card-text text-secondary">

                                            Sometimes, we can't do everything, and we need a mechanic. Google Maps makes searching for local mechanics easily.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.google.com/maps/search/find+a+mechanic/" className="btn btn-danger">Visit</a>
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
