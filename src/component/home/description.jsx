import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile, tablet, largeTablet } from "../../util/responsive";
import AOS from "aos";
import "aos/dist/aos.css";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  padding: 25rem;
  ${largeTablet({ padding: "15rem" })}
  ${tablet({
    padding: "3rem",
  })}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 15rem;
  align-items: center;
  ${largeTablet({
    flexDirection: "column",
    alignItems: "center",
    gap: "5rem",
  })}
  ${tablet({
    gap: "0rem",
    paddingBottom: "6rem",
  })}
`;
const Left = styled.div``;
const Logo = styled.span`
  font-family: "Ma Shan Zheng", cursive;
  font-size: 17rem;
  color: white;
  background-color: #d34;
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  ${mobile({
    fontSize: "8rem",
    width: "8rem",
    height: "8rem",
  })}
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  gap: 1rem;
`;
const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  ${mobile({
    fontSize: "2.5rem",
  })}
`;
const Text = styled.span`
  font-size: 2.5rem;
  color: white;
  ${mobile({
    fontSize: "1.5rem",
  })}
`;

const Description = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Background>
      <Container data-aos="fade-right">
        <Left>
          <Logo>魂</Logo>
        </Left>
        <Right>
          <Title>What does Hon mean?</Title>
          <Text>
            "Hon" means soul and here in this restaurant, our goal is not to
            just satisfy your appetite, but help you find comfort in your soul.
          </Text>
          <Text>
            We take pride in our food. Come and enjoy our finest Sushi, and
            accompany them with our beer and sake! Still hungry? Try our
            yakitori, perfectly grilled with our finest ingredients.
          </Text>
        </Right>
      </Container>
    </Background>
  );
};

export default Description;
