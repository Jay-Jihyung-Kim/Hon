import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../home/carousel.jsx";
import NavbarAlt from "../home/navbarAlt.jsx";
import Description from "../home/description.jsx";
import Location from "../home/location";
import Video from "../home/video.jsx";
import Loading from "../loading/loading.jsx";

const Container = styled.div``;

const Home = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 4000);
  }, []);

  return (
    <React.Fragment>
      {load === false ? (
        <Container>
          <NavbarAlt />
          <Video />
          <Description />
          <Carousel />
          <Location />
        </Container>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Home;
