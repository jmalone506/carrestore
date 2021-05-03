import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const ServiceImg = styled.img`
  width: 22em;
  height: 17em;

  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: #ee2228;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

const Details = styled.p`
  color: #ffffff;
  font-size: 21px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: black;
  align-content: center;
  

}
`
export function OurSerivce(props) {
  const { imgUrl, title, description, isReversed, href } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
        <Button className="btn btn-large"href={href} target="_blank">LINK TO GITHUB</Button>
      </DescriptionContainer>
      
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
}
