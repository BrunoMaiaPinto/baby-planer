import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";
import Alimentacao from "./pages/Alimentacao.jsx";
import ConsultasMedicas from "./pages/ConsultasMedicas.jsx";
import ListaCompras from "./pages/ListaCompras.jsx";
import Medicacao from "./pages/Medicacao.jsx";
import Contactos from "./pages/Contactos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/consultasmedicas" element={<ConsultasMedicas />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/listadecompras" element={<ListaCompras />} />
          <Route path="/medicacao" element={<Medicacao />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
