import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import NotreDemarche from "./pages/NotreDemarche";
import NosServices from "./pages/NosServices";
import NosPartenaires from "./pages/NosPartenaires";
import ChirurgieEsthetique from "./pages/ChirurgieEsthetique";
import ChirurgieObesite from "./pages/ChirurgieObesite";
import ChirurgieCardioVasculaire from "./pages/ChirurgieCardioVasculaire";
import ChirurgieOrthopedique from "./pages/ChirurgieOrthopedique";
import Neurochirurgie from "./pages/Neurochirurgie";
import TraitementInfertilite from "./pages/TraitementInfertilite";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Prices />} />
      <Route path="/interventions/chirurgie-esthetique" element={<ChirurgieEsthetique />} />
      <Route path="/interventions/chirurgie-obesite" element={<ChirurgieObesite />} />
      <Route path="/interventions/chirurgie-cardio-vasculaire" element={<ChirurgieCardioVasculaire />} />
      <Route path="/interventions/chirurgie-orthopedique" element={<ChirurgieOrthopedique />} />
      <Route path="/interventions/neurochirurgie" element={<Neurochirurgie />} />
      <Route path="/interventions/traitement-infertilite" element={<TraitementInfertilite />} />
      <Route path="/guide/notre-demarche" element={<NotreDemarche />} />
      <Route path="/guide/nos-services" element={<NosServices />} />
      <Route path="/guide/nos-partenaires" element={<NosPartenaires />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
