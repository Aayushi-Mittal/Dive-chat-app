import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FOF from "./pages/FOF";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route element={<FOF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
