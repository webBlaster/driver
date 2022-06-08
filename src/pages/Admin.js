import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import styled from "styled-components";
const Container = styled.div`
  iframe {
    width: 100%;
    height: 100vh;
  }
`;

const Admin = () => {
  let [geocode, setGeocode] = useState(null);
  //let [origin, setOrigin] = useState(null);
  useEffect(() => {
    //connect to geolocation stream
    const events = new EventSource(`${API_URL}/get-current-location`);
    events.onmessage = (event) => {
      const data = event.data;
      console.log(JSON.parse(data));
      setGeocode(JSON.parse(JSON.parse(data)));
    };
  }, []);
  return (
    <>
      <Container>
        <iframe
          title="map"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDxt_0pndC4mR72g4IGedAn9uSAHiJjemI&origin=${geocode?.lat}+${geocode?.lon}&zoom=18&destination=${geocode?.lat}+${geocode?.lon}`}
        ></iframe>
      </Container>
    </>
  );
};

export default Admin;
