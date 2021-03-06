import React from "react";
import styled from "styled-components";
import SimpleMap from "./map.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { mobile, tablet, largeTablet } from "../../util/responsive";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eae4de;
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
  font-size: 5rem;
  font-weight: bold;
  padding: 5rem 0;
  ${largeTablet({
    padding: "2rem 0",
    fontSize: "3.5rem",
  })}
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  ${largeTablet({
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
  })}
`;
const Map = styled.div`
  width: 500px;
  height: 500px;
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
  ${tablet({ fontSize: "2rem" })}
  ${mobile({
    fontSize: "1.5rem",
  })}
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  padding: 5rem 0 3rem;
  max-width: 80%;
  margin: 0 auto;
  gap: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const FooterText = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Location = () => {
  return (
    <Background id="location">
      <Container>
        <Title>Location</Title>
        <Info>
          <Map>
            <SimpleMap />
          </Map>
          <InfoTextContainer>
            <InfoText style={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Address
            </InfoText>
            <InfoText>6940 Beach Blvd.</InfoText>
            <InfoText>Buena Park, CA 90621</InfoText>
            <a href="https://www.google.com/maps/dir//The+Source+OC,+6940+Beach+Blvd,+Buena+Park,+CA+90621/@33.8596169,-117.9977509,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x80dd2b93365c7d65:0x434ac94650445f0b!3e0">
              <InfoText>Get Direction</InfoText>
            </a>
            <InfoText>(714)-123-1234</InfoText>
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
        <IconContainer>
          <FacebookIcon style={{ fontSize: "4rem", color: "3B5999" }} />
          <TwitterIcon style={{ fontSize: "4rem", color: "55ACEE" }} />
          <InstagramIcon style={{ fontSize: "4rem", color: "E4405F" }} />
        </IconContainer>
        <FooterText>Follow Us!</FooterText>
      </FooterContainer>
    </Background>
  );
};

export default Location;
