import React, { Component } from "react";
import { Element } from "react-scroll";
import { Marginer } from "../../components/Styled/Marginer";
import { OurSerivce } from "../../components/Styled/Container";
import styled from "styled-components";
import robot from "../../images/landing.gif"
import rose from "../../images/rose.png";
import josh from "../../images/josh.png";
import jammie from "../../images/jammie.png";
import alicia from "../../images/alicia.png";

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
   width: 18em;
  height: 15em;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
     width: 18em;
  height: 13em;
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

        <SectionTitle>Welcome to Car Hacks</SectionTitle>
        <AboutContainer>
          <AboutText>
            Car Hacks is a MERN application created for the University of Arizona Boot Camp Course.{<br />}
            {<br />} <center><b>Our Vision</b></center>

            {<br />} We wanted our own one stop shop to ease the experience of having a car.
                        {<br />}
            {<br />}
            {<br />} Thanks for visiting!
        </AboutText>
          <AboutImg src={robot} />
        </AboutContainer>

        <ServicesContainer name="servicesSection">
          <SectionTitle>Fellow Car Hackers</SectionTitle>
          <Marginer direction="vertical" margin="3em" />
          <OurSerivce
            title="Alicia Qiu"
            description="Recently bought a Tesla and got stranded."
            href="https://github.com/aliciaqiu27"
            imgUrl={alicia}
          />
          <OurSerivce
            title="Josh Malone"
            description="Car enthusiast and recently a new car owner."
            href="https://github.com/jmalone506"
            imgUrl={josh}
            isReversed
          />
          <OurSerivce
            title="Roseanne Nguyen"
            description="Drives cars often. Appreciates basic function of a Toyota Camry."
            href="https://github.com/roseannenguyen"
            imgUrl={rose}
          />
          <OurSerivce
            title="Jammie Hardy"
            description="Car enthusiast and loves adding upgrades to her car."
            href="https://github.com/jammiehardy2"
            imgUrl={jammie}
            isReversed
          />



        </ServicesContainer>
      </MoreAboutContainer>

    )
  }
}

export default Cards
