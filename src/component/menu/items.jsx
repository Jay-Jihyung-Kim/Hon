import React from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import sushi_combo from "../../image/sushi_combo.jpg";
import rolls from "../../image/rolls.jpg";
import tempura from "../../image/tempura.jpg";
import { mobile, tablet, largeTablet } from "../../util/responsive";
import {
  sushiCombo,
  sushiLeft,
  sushiRight,
  rollsRight,
  rollsLeft,
  startersLeft,
  startersRight,
} from "../../util/sushi_list";

const Background = styled.div`
  background-color: #eae4de;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;
const CategoryList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 60%;
  padding-top: 5rem;
  margin: 0 auto;
  ${largeTablet({ width: "85%" })}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding-top: 5rem;
  ${largeTablet({ width: "85%", paddingTop: "2.5rem" })}
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

const TopButton = styled.button`
  font-size: 3rem;
  position: fixed;
  height: 70px;
  width: 30px;
  left: 0;
  top: 50%;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
`;

const TopText = styled.span`
  margin: 0;
  line-height: normal;
`;

const Items = () => {
  function ToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Background>
      <TopButton onClick={ToTop}>
        <TopText>T</TopText>
        <TopText>O</TopText>
        <TopText>P</TopText>
      </TopButton>
      <CategoryList>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{ fontSize: "2rem" }}
          >
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item style={{ fontSize: "2rem" }} href="#starters">
              Starters
            </Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }} href="#sushiCombo">
              Sushi Combo
            </Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }} href="#sushi">
              Sushi
            </Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }} href="#rolls">
              Special Rolls
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CategoryList>
      <Container>
        <Category id="starters">Starters</Category>
        <FlexContainer>
          <Item>
            {startersLeft.map((item) => {
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
            <Img src={tempura} />
            {startersRight.map((item) => {
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
        <Category id="sushiCombo">Sushi Combo</Category>
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
        <Category id="sushi">Sushi</Category>
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
        <Category id="rolls">Special Rolls</Category>
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
