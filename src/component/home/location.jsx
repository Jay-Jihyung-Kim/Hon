import React from "react";
import styled from "styled-components";
import { mobile, largeTablet } from "../../util/responsive";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  ${mobile({
    margin: "0 5rem",
  })}
`;
const Title = styled.span`
  font-size: 7rem;
  color: white;
  padding: 5rem 0;
  ${mobile({
    padding: "2rem 0",
  })}
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  ${largeTablet({
    flexDirection: "column",
    alignItems: "center",
    gap: "5rem",
  })}
`;
const Map = styled.div`
  width: 500px;
  height: 500px;
  background-color: pink;
  ${mobile({
    width: "340px",
    height: "340px",
  })}
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoText = styled.span`
  font-size: 2.5rem;
  color: white;
  ${mobile({
    fontSize: "2rem",
  })}
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid white;
  padding-top: 5rem;
  max-width: 80%;
  margin: 0 auto;
`;
const FooterText = styled.span`
  font-size: 2.5rem;
  color: white;
`;

const Location = () => {
  return (
    <Background>
      <Container>
        <Title>Location</Title>
        <Info>
          <Map></Map>
          <InfoTextContainer>
            <InfoText style={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Address
            </InfoText>
            <InfoText>5450 Beach Blvd. Buena Park, CA 90621</InfoText>
            <InfoText>714-123-1234</InfoText>
            <InfoText style={{ fontWeight: "bold", margin: "3rem 0 1rem" }}>
              Hours
            </InfoText>
            <InfoText>Monday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Tuesday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Wednesday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Thursday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Friday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Saturday: 11:00AM - 11:00PM</InfoText>
            <InfoText>Sunday: 11:00AM - 11:00PM</InfoText>
          </InfoTextContainer>
        </Info>
      </Container>
      <FooterContainer>
        <FooterText>Follow Us!</FooterText>
      </FooterContainer>
    </Background>
  );
};

export default Location;
