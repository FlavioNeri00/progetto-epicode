import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headliner from "./Component/Headliner";

import Intro from "./Component/Intro";
import LawForm from "./Component/LawForm";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./Component/Contacts";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#c6dae5" }}>
      <BrowserRouter>
        <Headliner />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/contatti" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
