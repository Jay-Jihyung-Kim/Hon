import React, { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";
import { tablet, largeTablet } from "../../util/responsive";

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
`;

const NavbarAlt = () => {
  const [menuOpen, setMenuOpen] = useState("0");

  function handleOpenMenu() {
    if (menuOpen === "0") setMenuOpen("100");
    if (menuOpen === "100") setMenuOpen("0");
  }
  function toTop() {
    window.scrollTo(0, 0);
    setMenuOpen("0");
  }
  return (
    <Background id="home">
      <Container>
        <NavTop>
          <LogoBackgroud>
            <NavLogo>魂</NavLogo>
          </LogoBackgroud>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none" }}
            to="/home"
          >
            <NavLogoText>Hon</NavLogoText>
          </HashLink>
        </NavTop>
        <NavBottom>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none" }}
            to="/home"
          >
            <NavText>Home</NavText>
          </HashLink>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none" }}
            to="/menu"
          >
            <NavText>Menu</NavText>
          </HashLink>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none" }}
            to="/gallery"
          >
            <NavText>Gallery</NavText>
          </HashLink>
          <NavText>Order Online</NavText>
          <HashLink to="/home/#location" style={{ textDecoration: "none" }}>
            <NavText>Store Info</NavText>
          </HashLink>
          <NavMenu>
            <AiOutlineMenu onClick={handleOpenMenu} />
          </NavMenu>
        </NavBottom>
      </Container>
      <HiddenContainer height={menuOpen}>
        <HiddenText>
          <HashLink
            onClick={toTop}
            to="/home"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            Home
          </HashLink>
        </HiddenText>
        <HiddenText>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
            to="/menu"
          >
            Menu
          </HashLink>
        </HiddenText>
        <HiddenText>
          <HashLink
            onClick={toTop}
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
            to="/gallery"
          >
            Gallery
          </HashLink>
        </HiddenText>
        <HiddenText>Order Online</HiddenText>
        <HiddenText>
          <HashLink
            to="/home/#location"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            Store Info
          </HashLink>
        </HiddenText>
      </HiddenContainer>
    </Background>
  );
};

export default NavbarAlt;
