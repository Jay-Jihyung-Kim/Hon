import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import sushi from "../../image/sushi.jpg";
import sake from "../../image/sake.jpg";
import ichiban from "../../image/ichiban.jpg";
import { mobile } from "../../util/responsive";

const GridContainer = styled.div``;

const Container = styled.div`
  display: flex;
  max-width: 2000px;
  max-height: 800px;
  margin: 0 auto;
  background-color: #f7faf0;
  ${mobile({ height: "200px" })}
`;

const Img = styled.img`
  object-fit: cover;
`;

const CarouselSlide = () => {
  return (
    <GridContainer>
      <Carousel>
        <Carousel.Item pause="hover" interval={3000}>
          <Container>
            <Img className="d-block w-100" src={sushi} alt="Sushi" />
          </Container>
        </Carousel.Item>
        <Carousel.Item pause="hover" interval={3000}>
          <Container>
            <Img className="d-block w-100" src={sake} alt="Sake bottles" />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Img className="d-block w-100" src={ichiban} alt="Ichiban" />
          </Container>
        </Carousel.Item>
      </Carousel>
    </GridContainer>
  );
};

export default CarouselSlide;
