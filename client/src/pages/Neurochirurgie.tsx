import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Neurochirurgie() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            SERVICE NEUROCHIRURGIE DE Elite Care Travel
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prenant en charge la <strong>partie cérébrale médullaire</strong> et les <strong>nerfs périphériques</strong>,
            la neurochirurgie est une <strong>intervention chirurgicale</strong> qui prend en charge toutes les <strong>anomalies</strong>,
            les <strong>maladies</strong> et les <strong>traumatismes</strong> qui touchent le <strong>système nerveux</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le <strong>neurologue</strong> évalue et traite les différentes <strong>douleurs</strong> et <strong>désordres pathologiques</strong>
            qui sont en cause de la modification de l'activité et/ou la fonction du système nerveux.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rappelons que le <strong>système nerveux</strong> englobe les différents <strong>centres nerveux</strong>, ganglions et
            <strong> nerfs</strong> qui coordonnent les fonctions vitales des fonctions physiques et intellectuels, l'appareil locomoteur,
            ainsi que le traitement des messages sensoriels.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le <strong>tourisme médical</strong> pour neurochirurgie en Tunisie, Elite Care Travel vous accompagne
            pour le <strong>traitement chirurgical</strong> de : <strong>système nerveux central</strong>, <strong>système nerveux périphérique</strong>
            et <strong>systèmes nerveux végétatifs</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour toute éventuelle prise de <strong>rendez-vous</strong> ou pour toute demande d'information personnalisée,
            merci de nous contacter directement par téléphone ou via le <strong>formulaire en ligne</strong>.
          </p>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                QUAND INTERVIENT LE NEUROCHIRURGIEN ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Intervenant dans le traitement des patients adultes et pédiatriques pour les prises des affections du
                <strong> système nerveux</strong>, le neurochirurgien procure le traitement opératoire et non opératoire pour :
                <strong> traumatismes crâniens</strong>, <strong>tumeurs de l'hypophyse</strong>, <strong>hydrocéphalie</strong>,
                <strong> hernies discales</strong>, <strong>anévrismes intracrâniens</strong>, <strong>accidents vasculaires cérébraux</strong>,
                <strong> malformation vasculaire cérébrale</strong>, <strong>hyperacousie</strong>, <strong>compression médullaire</strong>,
                <strong> hématome intracérébral</strong>, <strong>maladie de Parkinson</strong> et bien d'autres pathologies neurologiques.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/Interventions/Neurochirurgie/skull-1209733_1920-1024x678.jpg" 
                alt="Neurochirurgie - Système nerveux" 
                className="mx-auto w-full max-w-md h-80 object-cover rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Interventions */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#05125d] mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            INTERVENTIONS NEUROCHIRURGICALES SPÉCIALISÉES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">TRAUMATISMES CRÂNIENS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Prise en charge chirurgicale des <strong>lésions cérébrales traumatiques</strong> nécessitant une intervention
                d'urgence pour réduire la pression intracrânienne et préserver les fonctions neurologiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">TUMEURS DE L'HYPOPHYSE</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Chirurgie endoscopique transnasale pour l'ablation des <strong>tumeurs hypophysaires</strong> avec préservation
                des fonctions hormonales et visuelles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">ANÉVRISMES INTRACRÂNIENS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Traitement chirurgical des <strong>anévrismes cérébraux</strong> par clipping ou embolisation endovasculaire
                pour prévenir les ruptures et hémorragies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">HERNIES DISCALES</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Chirurgie mini-invasive pour le traitement des <strong>hernies discales</strong> avec décompression nerveuse
                et stabilisation rachidienne.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">MALADIE DE PARKINSON</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Stimulation cérébrale profonde (DBS) pour le traitement des <strong>symptômes moteurs</strong> de la maladie
                de Parkinson réfractaire aux médicaments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">COMPRESSION MÉDULLAIRE</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Décompression chirurgicale urgente de la <strong>moelle épinière</strong> pour préserver les fonctions
                neurologiques et éviter les paralysies définitives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CONTACTEZ-NOUS POUR VOTRE SÉJOUR NEUROCHIRURGICAL
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Elite Care Travel vous accompagne dans votre démarche de <strong>tourisme médical</strong> pour neurochirurgie en Tunisie.
            Nos équipes médicales vous garantissent une <strong>prise en charge complète</strong> avec les meilleurs neurochirurgiens tunisiens.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-3 px-8 rounded-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-lg"
            >
              Demandez votre devis gratuit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
