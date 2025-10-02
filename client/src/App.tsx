import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import NotreDemarche from "./pages/NotreDemarche";
import NosServices from "./pages/NosServices";
import NosPartenaires from "./pages/NosPartenaires";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Prices />} />
      <Route path="/guide/notre-demarche" element={<NotreDemarche />} />
      <Route path="/guide/nos-services" element={<NosServices />} />
      <Route path="/guide/nos-partenaires" element={<NosPartenaires />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
