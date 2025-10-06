import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChirurgieCardioVasculaire() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE CARDIO VASCULAIRE EN TUNISIE AVEC Elite Care Travel
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le <strong>voyage médical</strong> à l'étranger, votre agence de tourisme médical, Elite Care Travel,
            vous confie aux soins des <strong>meilleurs chirurgiens</strong> tunisiens selon l'<strong>état du patient</strong>.
            Nos <strong>chirurgiens cardio-vasculaires</strong> sont spécialisés dans la <strong>chirurgie des valves musculaires</strong>,
            la <strong>chirurgie minimale invasive</strong>, la <strong>chirurgie de l'aorte</strong> et la <strong>chirurgie coronaire</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En effet, nos <strong>chirurgiens généraux</strong> vous font bénéficier de leur expertise et de leur parfaite connaissance
            dans le milieu de la chirurgie cardio-vasculaire. Nous vous proposons des <strong>soins médicaux</strong> de qualité
            dans les meilleures cliniques tunisiennes tout en vous permettant d'<strong>économiser vos dépenses</strong> de santé.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute éventuelle prise de rendez-vous ou demande d'information complémentaire, contactez-nous directement par téléphone
            ou via le <strong>formulaire en ligne</strong>. Nous sommes à votre entière disposition pour répondre à toutes vos questions
            concernant les <strong>différentes techniques</strong> de chirurgie cardio-vasculaire selon des critères bien spécifiques.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Elite Care Travel vous garantit une <strong>prise en charge complète</strong> de votre séjour médical en Tunisie.
          </p>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LES DIFFÉRENTES INTERVENTIONS EN CHIRURGIE CARDIO VASCULAIRE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">CHIRURGIE DES VALVES CARDIAQUES</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Cardio Vasculaire/Chirurgie-des-valves-cardiaques-1.png" 
                alt="Chirurgie des valves cardiaques" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Elite Care Travel accompagne les patients souffrant de <strong>valvulopathie</strong> (insuffisance aortique,
                sténose aortique, sténose mitrale). Nous proposons un <strong>séjour médical complet</strong> pour la chirurgie
                des valves cardiaques en Tunisie.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">CHIRURGIE MINIMALE INVASIVE</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Cardio Vasculaire/Chirurgie-minimale-invasive-1.png" 
                alt="Chirurgie minimale invasive" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Nos partenaires, <strong>chirurgiens cardio-vasculaires thoraciques</strong>, traitent les patients atteints
                de <strong>communication interauriculaire</strong> et de <strong>myxome cardiaque</strong> en utilisant des
                techniques de <strong>chirurgie minimale invasive</strong>.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">CHIRURGIE DE L'AORTE</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Cardio Vasculaire/Chirurgie-de-l’aorte-1.png" 
                alt="Chirurgie de l'aorte" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Notre équipe médicale est spécialisée dans la <strong>chirurgie de l'aorte</strong>, incluant le traitement
                de l'<strong>anévrisme de l'aorte thoracique</strong>, la <strong>dissection aortique</strong> et les interventions
                sur l'<strong>arche aortique</strong>, couvrant l'aorte thoracique et abdominale.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">CHIRURGIE CORONAIRE</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Cardio Vasculaire/Chirurgie-coronaire-1.png" 
                alt="Chirurgie coronaire" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Elite Care Travel accompagne les patients souffrant de <strong>coronopathie</strong> et propose deux types
                d'interventions : le traitement de l'<strong>athérosclérose</strong> et les <strong>pontages coronariens</strong>
                qui peuvent être doubles, triples, quadruples ou quintuples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 leading-relaxed mb-8">
            Pour toute éventuelle prise de rendez-vous ou demande d'information complémentaire, contactez-nous directement par téléphone
            ou via le <strong>formulaire en ligne</strong>. Nous sommes à votre entière disposition pour répondre à toutes vos questions
            concernant les <strong>différentes techniques</strong> de chirurgie cardio-vasculaire.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
