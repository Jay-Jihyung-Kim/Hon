import React from "react";
import styled from "styled-components";
import sushi_combo from "../../image/sushi_combo.jpg";
import rolls from "../../image/rolls.jpg";
import { mobile, tablet, largeTablet } from "../../util/responsive";
import {
  sushiCombo,
  sushiLeft,
  sushiRight,
  rollsRight,
  rollsLeft,
} from "../../util/sushi_list";

const Background = styled.div`
  background-color: #eae4de;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding-top: 5rem;
  ${tablet({ width: "85%", paddingTop: "2.5rem" })}
`;
const Category = styled.span`
  font-size: 5rem;
  font-weight: bold;
  ${tablet({ fontSize: "3rem" })}
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  ${tablet({ flexDirection: "column", gap: "0" })}
  &:last-child {
    padding-bottom: 5rem;
    ${tablet({ paddingBottom: "2rem" })}
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  gap: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  border-top: 1px solid #333;
  &:last-child {
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
    ${mobile({ borderBottom: "none" })}
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: center;
`;
const ItemName = styled.span`
  font-size: 2rem;
  font-weight: bold;
  ${mobile({ fontSize: "1.5rem" })}
`;
const ItemText = styled.span`
  font-size: 1.5rem;
  ${mobile({ fontSize: "1rem" })}
`;
const ItemPrice = styled.span`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 1rem;
  ${mobile({ fontSize: "1.5rem" })}
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  ${mobile({ paddingTop: "1rem" })}
`;
console.log({ sushiLeft });
const Items = () => {
  return (
    <Background>
      <Container>
        <Category>Sushi Combo</Category>
        <FlexContainer>
          <Item>
            {sushiCombo.map((item) => {
              return (
                <ItemContainer>
                  <TextContainer>
                    <ItemName>{item.name}</ItemName>
                    <ItemText>{item.description}</ItemText>
                  </TextContainer>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </Item>
          <Item>
            <Img src={sushi_combo} />
          </Item>
        </FlexContainer>
      </Container>
      <Container>
        <Category>Sushi</Category>
        <FlexContainer>
          <Item>
            {sushiLeft.map((item) => {
              return (
                <ItemContainer>
                  <TextContainer>
                    <ItemName>{item.name}</ItemName>
                    <ItemText>{item.description}</ItemText>
                  </TextContainer>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </Item>
          <Item>
            {sushiRight.map((item) => {
              return (
                <ItemContainer>
                  <TextContainer>
                    <ItemName>{item.name}</ItemName>
                    <ItemText>{item.description}</ItemText>
                  </TextContainer>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </Item>
        </FlexContainer>
      </Container>
      <Container>
        <Category>Special Rolls</Category>
        <FlexContainer>
          <Item>
            {rollsLeft.map((item) => {
              return (
                <ItemContainer>
                  <TextContainer>
                    <ItemName>{item.name}</ItemName>
                    <ItemText>In: {item.in}</ItemText>
                    <ItemText>Out: {item.out}</ItemText>
                  </TextContainer>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </Item>
          <Item>
            <Img src={rolls} />
            {rollsRight.map((item) => {
              return (
                <ItemContainer>
                  <TextContainer>
                    <ItemName>{item.name}</ItemName>
                    <ItemText>In: {item.in}</ItemText>
                    <ItemText>Out: {item.out}</ItemText>
                  </TextContainer>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </Item>
        </FlexContainer>
      </Container>
    </Background>
  );
};

export default Items;
