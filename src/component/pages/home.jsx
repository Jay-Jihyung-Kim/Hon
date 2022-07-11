import React from "react";
import styled from "styled-components";
import Carousel from "../home/carousel.jsx";
import NavbarAlt from "../home/navbarAlt.jsx";
import Description from "../home/description.jsx";
import Location from "../home/location";
import Video from "../home/video.jsx";

const Container = styled.div``;

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <NavbarAlt />
        <Video />
        <Description />
        <Carousel />
        <Location />
      </Container>
    </React.Fragment>
  );
};

export default Home;
