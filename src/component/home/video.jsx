import React from "react";
import styled from "styled-components";
import sampleVideo from "../../image/ad.mp4";

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  max-height: 100vh;
`;
const Container = styled.div`
  margin: 0 auto;
`;
const VideoPlayer = styled.video``;

const Video = () => {
  return (
    <Background>
      <Container>
        <VideoPlayer
          src={sampleVideo}
          autoPlay
          loop
          muted
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        ></VideoPlayer>
      </Container>
    </Background>
  );
};

export default Video;
