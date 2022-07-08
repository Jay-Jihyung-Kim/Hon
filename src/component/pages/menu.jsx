import React from "react";
import styled from "styled-components";
import NavbarAlt from "../home/navbarAlt";
import Banner from "../menu/banner";
import Items from "../menu/items";
import Location from "../home/location";

const Background = styled.div``;
const Container = styled.div``;

const Menu = () => {
  return (
    <Background>
      <Container>
        <NavbarAlt />
        <Banner />
        <Items />
        <Location />
      </Container>
    </Background>
  );
};

export default Menu;
