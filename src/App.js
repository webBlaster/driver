import Home from "./pages/Home";
import OrderInformation from "./pages/Info";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Grommet plain>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order.info/:id" element={<OrderInformation />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
