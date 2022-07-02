import React from "react";
import styled from "styled-components";
import { mobile, tablet, largeTablet } from "../../util/responsive";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
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
  color: black;
  background-color: #d34;
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  ${mobile({
    fontSize: "13rem",
    width: "13rem",
    height: "13rem",
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
  ${mobile({
    fontSize: "2.5rem",
  })}
`;
const Text = styled.span`
  font-size: 2.5rem;
  ${mobile({
    fontSize: "1.5rem",
  })}
`;

const Description = () => {
  return (
    <Background>
      <Container>
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
