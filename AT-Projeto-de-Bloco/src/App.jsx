import "./App.css";

import Header from "./components/Header/Header";
import UL from "./components/UL/UL";
import Navbar from "./components/NavBar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import GoogleMap from "./components/GoogleMap/GoogleMap";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <UL />
      <Welcome />
      
    </div>
  );
}

export default App;
