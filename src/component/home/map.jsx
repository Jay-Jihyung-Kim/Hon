import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function SimpleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCTCIOvCIhp9mdsnshqsiEAgi6aB2VU08A",
    language: "en",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  function Map() {
    return (
      <GoogleMap
        zoom={14}
        center={{ lat: 33.85980395618047, lng: -117.9977401666056 }}
        mapContainerStyle={containerStyle}
      >
        <Marker
          position={{ lat: 33.85980395618047, lng: -117.9977401666056 }}
        />
      </GoogleMap>
    );
  }
}
