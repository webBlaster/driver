import Home from "./pages/Home";
import OrderInformation from "./pages/Info";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";

function App() {
  const [validIp, setValidIp] = useState(false);
  useEffect(() => {
    //check if ip address is valid
    (async () => {
      const response = await fetch(`${API_URL}/validate-ip`).catch((error) =>
        alert(error)
      );

      if (response.status === 200) {
        setValidIp(true);
      }
    })();
  });
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
