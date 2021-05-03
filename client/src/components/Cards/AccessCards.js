import React, { Component } from "react";
import { Element } from "react-scroll";
import { Marginer } from "../../components/Styled/Marginer";
import styled from "styled-components";
import "./style.css"

import greddy from "../../images/greddy.png";
import muscle from "../../images//muscle.png";
import sparco from "../../images/sparco.png";

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
  color: #fff;

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
                <SectionTitle>Let Me Upgrade You:</SectionTitle>
                <AboutContainer>
                    <AboutText>
                        {<br />}
                        {<br />} <b>You could be like Xzibit and "pimp" your ride: :</b>
                        {<br />}
                        {<br />} <ol>
                            <li>Tint your windows.</li>
                            <li>Add some wheels.</li>
                            <li> Add an intake.</li>
                            <li>(For truck owners ideally) let’s get lifted.</li>
                            <li>Lamborghini doors on the escalade (Is that still a thing).</li>
                            <li>Engine upgrade.</li>
                            <li>Upgrade the sound system.</li>
                            <li>Give it a wrap.</li>
                        </ol>
                        {<br />}
                        {<br />}
                        {<br />} Upgrading or accessorizing your vehicle is the fun part. Keep in mind it could be costly to your investment when posting it up for sale. So make sure this is something you want to do. We have some links for accessorizing your vehicle.
        </AboutText>
                    <AboutImg src={greddy} />
                </AboutContainer>

                <ServicesContainer name="servicesSection">
                    <SectionTitle>Favorite Car Upgrades Website</SectionTitle>
                    <Marginer direction="vertical" margin="3em" />
                    <center>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={greddy} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Title</h3>
                                        <p className="card-text text-secondary">

                                            Looking for most modern tune up for your car? Greddy a wide variety of performance parts!
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="http://www.greddy.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={muscle} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">American Muscle </h3>
                                        <p className="card-text text-secondary">

                                            American Muscle is a leading retailer of aftermarket parts, catering to Mustang owners.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.americanmuscle.com/" className="btn btn-danger">Visit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card text-center  mb-5" >
                                    <div className="overflow">
                                        <img src={sparco} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h3 className="card-title">Sparco</h3>
                                        <p className="card-text text-secondary">

                                            Sparco USA is an online retailer for action sports enthusiasts offering accessories for vehicles.
                                </p>
                                        <button type="button" disabled className="btn btn-secondary">Save Website</button>
                                        <a href="https://www.sparcousa.com/" className="btn btn-danger">Visit</a>
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
