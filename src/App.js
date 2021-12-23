import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import FOF from "./pages/FOF";
import { auth } from './config/firebase-config.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Dashboard" element={user ? <Dashboard /> : <Home/>} />
          <Route element={<FOF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
