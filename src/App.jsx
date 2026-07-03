import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import Index from "./pages/Index.jsx";
import Alimentacao from "./pages/Alimentacao.jsx";
import ConsultasMedicas from "./pages/ConsultasMedicas.jsx";
import ListaCompras from "./pages/ListaCompras.jsx";
import Medicacao from "./pages/Medicacao.jsx";
import Contactos from "./pages/Contactos.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/consultasmedicas" element={<ConsultasMedicas />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/listadecompras" element={<ListaCompras />} />
        <Route path="/medicacao" element={<Medicacao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
