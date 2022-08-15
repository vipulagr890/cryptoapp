import "./App.css";
import Navbar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Exchanges from "./Exchanges";
import About from "./About";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <hr/> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Exchanges" element={<Exchanges />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
