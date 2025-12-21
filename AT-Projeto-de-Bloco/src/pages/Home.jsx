import "../App.css";

import Welcome from "../components/Welcome/Welcome";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import ServicosMain from "../components/Servicos/ServicosMain";
import About from "../components/About/About";
import UL from "../components/UL/UL";

function Home() {
  return (
    <div className="container">
      <UL />
      <Welcome />
      <GoogleMap />
      <ServicosMain />
      <About />
    </div>
  );
}

export default Home;
