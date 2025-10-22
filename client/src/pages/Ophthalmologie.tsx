import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Ophthalmologie() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            SERVICE OPHTALMOLOGIE DE Elite Care Travel
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le <strong>tourisme médical</strong> en Tunisie, Elite Care Travel vous accompagne pour tous vos 
            <strong> besoins ophtalmologiques</strong>. L'<strong>ophtalmologie</strong> est la spécialité médicale qui traite
            les <strong>maladies de l'œil</strong>, les <strong>troubles de la vision</strong> et les <strong>pathologies oculaires</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nos <strong>ophtalmologues qualifiés</strong> utilisent des <strong>technologies de pointe</strong> pour diagnostiquer
            et traiter une large gamme de <strong>pathologies oculaires</strong> : <strong>cataracte</strong>, <strong>glaucome</strong>,
            <strong> rétinopathies</strong>, <strong>troubles de la réfraction</strong> et bien plus encore.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'œil est un organe complexe et précieux. Nos <strong>chirurgiens ophtalmologistes</strong> sont formés aux techniques
            les plus modernes de <strong>chirurgie oculaire</strong> incluant la <strong>chirurgie réfractive</strong>, la 
            <strong> chirurgie de la cataracte</strong>, le <strong>traitement du glaucome</strong> et les interventions sur la rétine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elite Care Travel collabore avec les <strong>meilleures cliniques ophtalmologiques</strong> de Tunisie équipées de
            <strong> lasers de dernière génération</strong> et de <strong>microscopes chirurgicaux de haute précision</strong>.
            Nous vous garantissons des soins de qualité internationale à des tarifs compétitifs.
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
                QUAND CONSULTER UN OPHTALMOLOGUE ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La consultation ophtalmologique est recommandée pour le <strong>dépistage</strong> et le traitement de nombreuses
                pathologies : <strong>baisse de l'acuité visuelle</strong>, <strong>vision floue</strong>, <strong>douleurs oculaires</strong>,
                <strong> rougeurs persistantes</strong>, <strong>mouches volantes</strong>, <strong>éblouissements</strong>,
                <strong> fatigue visuelle</strong>, <strong>larmoiements excessifs</strong>, ainsi que pour le suivi des 
                <strong> maladies chroniques</strong> comme le <strong>diabète</strong> qui peuvent affecter la vue. Un 
                <strong> bilan régulier</strong> permet de détecter précocement des pathologies graves comme le <strong>glaucome</strong>
                ou la <strong>dégénérescence maculaire</strong>.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&auto=format&fit=crop&q=60" 
                alt="Ophtalmologie - Examen des yeux" 
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
            INTERVENTIONS OPHTALMOLOGIQUES SPÉCIALISÉES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">CHIRURGIE DE LA CATARACTE</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Traitement chirurgical de l'<strong>opacification du cristallin</strong> par <strong>phacoémulsification</strong>
                avec implantation de <strong>lentilles intraoculaires</strong> pour restaurer une vision claire et nette.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">CHIRURGIE RÉFRACTIVE</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Correction des <strong>troubles de la vision</strong> (myopie, hypermétropie, astigmatisme) par <strong>laser LASIK</strong>,
                <strong> PKR</strong> ou <strong>SMILE</strong> pour une vision sans lunettes ni lentilles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">TRAITEMENT DU GLAUCOME</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Prise en charge du <strong>glaucome</strong> par <strong>trabéculectomie</strong>, <strong>sclérectomie profonde</strong>
                ou <strong>implants de drainage</strong> pour préserver le nerf optique et éviter la cécité.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">CHIRURGIE DE LA RÉTINE</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Traitement des <strong>décollements de rétine</strong>, <strong>rétinopathie diabétique</strong> et 
                <strong> dégénérescence maculaire</strong> par vitrectomie et injections intravitréennes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">CHIRURGIE DES PAUPIÈRES</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Correction de la <strong>ptôse palpébrale</strong>, traitement du <strong>chalazion</strong>, de 
                l'<strong>entropion</strong> et de l'<strong>ectropion</strong> pour améliorer fonction et esthétique.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05125d] mb-4">TRAITEMENT DU STRABISME</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Chirurgie correctrice du <strong>strabisme</strong> chez l'enfant et l'adulte pour rétablir le 
                <strong> parallélisme des yeux</strong> et améliorer la vision binoculaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CONTACTEZ-NOUS POUR VOTRE SÉJOUR OPHTALMOLOGIQUE
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Elite Care Travel vous accompagne dans votre démarche de <strong>tourisme médical</strong> pour ophtalmologie en Tunisie.
            Nos équipes médicales vous garantissent une <strong>prise en charge complète</strong> avec les meilleurs ophtalmologues tunisiens.
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
