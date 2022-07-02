import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { mobile, tablet, largeTablet } from "../../util/responsive";

const Background = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  padding: 1rem 0;
  ${tablet({ padding: "0rem" })}
`;

//Logo
const NavTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LogoBackgroud = styled.div``;
const NavLogo = styled.span`
  font-family: "Ma Shan Zheng", cursive;
  font-size: 5rem;
  color: white;
  background-color: #d34;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-left: 10rem;
  ${largeTablet({ marginLeft: "5rem" })}
`;

const NavLogoText = styled.span`
  font-family: "Splash", cursive;
  font-size: 4rem;
  color: white;
  ${tablet({ fontSize: "3rem" })}
`;

//Nav-Text
const NavBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-right: 10rem;
  ${largeTablet({ marginRight: "5rem", gap: "2rem" })}
`;

const NavText = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  ${largeTablet({ fontSize: "1.5rem" })}
  ${tablet({ display: "none" })}
`;

const NavMenu = styled.span`
  color: white;
  font-size: 4rem;
  display: none;
  ${tablet({ display: "block" })}
`;

//Nav-Hidden
const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: ${(props) => props.height};
  transition: all 0.5s;
  overflow: hidden;
`;

const HiddenText = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  border-top: 1px solid white;
  width: 100%;
  padding: 1rem 1rem;
  &:last-child {
    border-bottom: 1px solid white;
  }
`;

const NavbarAlt = () => {
  const [menuOpen, setMenuOpen] = useState("0");

  function handleOpenMenu() {
    if (menuOpen === "0") setMenuOpen("100");
    if (menuOpen === "100") setMenuOpen("0");
    console.log(menuOpen);
  }
  return (
    <Background>
      <Container>
        <NavTop>
          <LogoBackgroud>
            <NavLogo>魂</NavLogo>
          </LogoBackgroud>
          <NavLogoText>Hon</NavLogoText>
        </NavTop>
        <NavBottom>
          <NavText>Home</NavText>
          <NavText>Menu</NavText>
          <NavText>Order Online</NavText>
          <NavText>Gallery</NavText>
          <NavText>Store Info</NavText>
          <NavText>Contacts</NavText>
          <NavMenu>
            <AiOutlineMenu onClick={handleOpenMenu} />
          </NavMenu>
        </NavBottom>
      </Container>
      <HiddenContainer height={menuOpen}>
        <HiddenText>Home</HiddenText>
        <HiddenText>Menu</HiddenText>
        <HiddenText>Order Online</HiddenText>
        <HiddenText>Gallery</HiddenText>
        <HiddenText>Store Info</HiddenText>
        <HiddenText>Contacts</HiddenText>
      </HiddenContainer>
    </Background>
  );
};

export default NavbarAlt;
