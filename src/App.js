import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import About from "./pages/About";
import Info from "./pages/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets/:petId" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
