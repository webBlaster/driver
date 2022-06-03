import Home from "./pages/Home";
import OrderInformation from "./pages/Info";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import { emitLocation, getUserLocation } from "./services/geolocate";

function App() {
  const [validIp, setValidIp] = useState(false);
  let [geocode, setGeocode] = useState({ lat: undefined, long: undefined });

  const validateIp = async () => {
    const response = await fetch(`${API_URL}/validate-ip`).catch((error) =>
      alert(error)
    );

    if (response.status === 200) {
      setValidIp(true);
    }
  };
  useEffect(
    () => {
      //check if ip address is valid
      validateIp();
      setInterval(() => {
        let coordinates = getUserLocation();
        setGeocode(coordinates);
        //emit geocode
        emitLocation(geocode);
      }, 20000);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Grommet plain>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              validIp ? (
                <Home />
              ) : (
                <p>you are not allowed to view this website</p>
              )
            }
          />
          <Route
            path="/order.info/:id"
            element={
              validIp ? (
                <OrderInformation />
              ) : (
                <p>you are not allowed to view this website</p>
              )
            }
          />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
