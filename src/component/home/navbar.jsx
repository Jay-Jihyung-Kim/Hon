import React from "react";
import styled from "styled-components";
import logo from "../../image/logo.jpg";

const Background = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  height: 80px;
  position: sticky;
  z-index: 999;
`;
const NavText = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;
const NavLeft = styled.div`
  display: flex;
  gap: 4rem;
`;

//Mid logo
const NavMid = styled.div``;

const LogoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLogo = styled.img`
  height: 75px;
  width: 75%;
`;
const NavRight = styled.div`
  display: flex;
  gap: 4rem;
`;

const Navbar = () => {
  return (
    <Background>
      <Container>
        <NavLeft>
          <NavText>Home</NavText>
          <NavText>Menu</NavText>
          <NavText>Order Online</NavText>
        </NavLeft>
        <NavMid>
          <NavLogo src={logo} />
        </NavMid>
        <NavRight>
          <NavText>Gallery</NavText>
          <NavText>Store Info</NavText>
          <NavText>Contacts</NavText>
        </NavRight>
      </Container>
    </Background>
  );
};

export default Navbar;
