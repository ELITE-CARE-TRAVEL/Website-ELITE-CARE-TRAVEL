import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Prices from "./pages/Prices";
import NotreDemarche from "./pages/NotreDemarche";
import NosServices from "./pages/NosServices";
import NosPartenaires from "./pages/NosPartenaires";
import ChirurgieEsthetique from "./pages/ChirurgieEsthetique";
import ChirurgieObesite from "./pages/ChirurgieObesite";
import ChirurgieOrthopedique from "./pages/ChirurgieOrthopedique";
import PiedDiabetique from "./pages/PiedDiabetique";
import Ophthalmologie from "./pages/Ophthalmologie";
import Gynecologie from "./pages/Gynecologie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/pricing" element={<Prices />} />
      <Route path="/interventions/chirurgie-esthetique" element={<ChirurgieEsthetique />} />
      <Route path="/interventions/chirurgie-obesite" element={<ChirurgieObesite />} />
      <Route path="/interventions/chirurgie-orthopedique" element={<ChirurgieOrthopedique />} />
      <Route path="/interventions/pied-diabetique" element={<PiedDiabetique />} />
      <Route path="/interventions/ophthalmologie" element={<Ophthalmologie />} />
      <Route path="/interventions/gynecologie" element={<Gynecologie />} />
      <Route path="/guide/notre-demarche" element={<NotreDemarche />} />
      <Route path="/guide/nos-services" element={<NosServices />} />
      <Route path="/guide/nos-partenaires" element={<NosPartenaires />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
