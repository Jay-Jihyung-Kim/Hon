import React from "react";
import styled from "styled-components";
import NavbarAlt from "../home/navbarAlt";
import Banner from "../gallery/banner";
import Items from "../gallery/items";

const Background = styled.div``;
const Container = styled.div``;

const Gallery = () => {
  return (
    <Background>
      <Container>
        <NavbarAlt />
        <Banner />
        <Items />
      </Container>
    </Background>
  );
};

export default Gallery;
