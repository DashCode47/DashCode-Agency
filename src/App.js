import Intro from "./Components/Screens/Intro/Intro";
import Home from "./Components/Screens/Home";
import { Routes, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
