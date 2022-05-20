import Home from "./pages/Home";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Grommet plain>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
