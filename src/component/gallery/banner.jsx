import React from "react";
import styled from "styled-components";
import gallery_image from "../../image/gallery_image.jpg";
import { mobile, largeTablet } from "../../util/responsive";

const Background = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mobile({ top: "50%" })}
`;

const Text = styled.span`
  font-size: 10rem;
  color: white;
  font-weight: bold;
  ${largeTablet({ fontSize: "7.5rem" })}
  ${mobile({ fontSize: "5rem" })}
`;

const Banner = () => {
  return (
    <Background id="gallery">
      <Container>
        <BannerImage src={gallery_image} />
        <TextContainer>
          <Text>GALLERY</Text>
        </TextContainer>
      </Container>
    </Background>
  );
};

export default Banner;
