import React, { useRef, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { mobile } from "../../util/responsive";
import HanziWriter from "hanzi-writer";

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  & > svg:first-child {
    display: none;
  }
  display: none;
  @media screen and (min-width: 481px) {
    display: block;
  }
`;

const TitleMobile = styled.div`
  & > svg:first-child {
    display: none;
  }
  display: none;
  ${mobile({ display: "block" })}
`;

const Loading = () => {
  useEffect(() => {
    var writer = HanziWriter.create("tablet", "魂", {
      width: 300,
      height: 300,
      padding: 5,
      showOutline: false,
      strokeColor: "#d34",
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 100,
    });
    writer.animateCharacter();

    var writer = HanziWriter.create("mobile", "魂", {
      width: 230,
      height: 230,
      padding: 5,
      showOutline: false,
      strokeColor: "#FFF",
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 100,
    });
    writer.animateCharacter();
  }, []);

  return (
    <Background>
      <Container>
        <Title id="tablet"></Title>
        <TitleMobile id="mobile"></TitleMobile>
      </Container>
    </Background>
  );
};

export default Loading;
