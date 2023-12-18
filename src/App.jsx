import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headliner from "./Component/Headliner";

import Intro from "./Component/Intro";
import LawForm from "./Component/LawForm";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#c6dae5" }}>
      <Headliner />
      <Intro />
      <LawForm />
      <Footer />
    </div>
  );
}

export default App;
