import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChirurgieObesite() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE DE L’OBÉSITÉ
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le <strong>tourisme médical</strong> à l’étranger, votre agence de tourisme médical, Elite Care Travel,
            prend en charge la totalité de votre <strong>séjour médical</strong> en Tunisie (vol, soins médicaux, convalescence…)
            pour les <strong>chirurgies de l’obésité</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En effet, nos <strong>équipes médicales</strong> vous confient aux soins des <strong>meilleurs chirurgiens tunisiens</strong>,
            et vous font bénéficier de leur expertise et de leur parfaite connaissance dans le milieu de la chirurgie de l’obésité :
            <strong> anneau gastrique</strong>, <strong>Sleeve Gastrectomie</strong>, <strong>Bypass gastrique</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour toute éventuelle prise de rendez-vous ou demande d’information complémentaire, contactez-nous directement par téléphone
            ou via le <strong>formulaire en ligne</strong>. Nous sommes à votre entière disposition pour répondre à toutes vos questions
            concernant les <strong>différentes techniques qui permettent de perdre du poids</strong>, selon des critères bien spécifiques.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LES INTERVENTIONS DE LA CHIRURGIE BARIATRIQUE PRATIQUÉE PAR Elite Care Travel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <h3 className="mb-2 tracking-wide text-gray-700 font-semibold">ANNEAU GASTRIQUE</h3>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/anneau-gastrique-2.jpg" alt="Anneau gastrique" className="mx-auto w-56 h-40 object-cover rounded" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                Il s’agit d’une solution efficace, de plus en plus utilisée, pour la <strong>perte de poids</strong>. La pose d’<strong>anneau
                gastrique</strong> consiste à réduire le volume de l’estomac et à <strong>ralentir le passage de la nourriture</strong>,
                sans pour autant déranger la digestion.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 tracking-wide text-gray-700 font-semibold">SLEEVE GASTRECTOMIE</h3>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/sleeve-gastrique.jpg" alt="Sleeve" className="mx-auto w-56 h-40 object-cover rounded" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                Technique de chirurgie de l’obésité, la <strong>Sleeve gastrectomie</strong> est une opération qui retire environ
                <strong> les 2/3 de l’estomac</strong>, dont les cellules qui sécrètent <strong>l’hormone stimulant l’appétit : la ghréline</strong>.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 tracking-wide text-gray-700 font-semibold">BYPASS GASTRIQUE</h3>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/bypass-gastrique.jpg" alt="Bypass gastrique" className="mx-auto w-56 h-40 object-cover rounded" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                Le <strong>bypass gastrique</strong> est une <strong>technique chirurgicale</strong> qui traite l’obésité en <strong>réduisant la taille
                de l’estomac</strong> et en <strong>modifiant le circuit digestif</strong>. Le résultat attendu est une perte de poids importante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMC */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CALCUL DE L’IMC (INDICE MASSE CORPORELLE)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            L’<strong>IMC</strong> mesure l’accès de poids et d’obésité et permet d’évaluer les <strong>risques pour la santé</strong>
            qui y sont associés. Un individu est considéré obèse lorsque la valeur de l’IMC est supérieure ou égale à 30 kg/m².
          </p>
          <img src="/src/assets/Interventions/Chirurgie de l'obésité/calcul-imc.jpg" alt="Calcul IMC"
               className="mx-auto w-full max-w-3xl h-auto rounded shadow" />
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LES TARIFS DES INTERVENTIONS DE LA CHIRURGIE DE L’OBÉSITÉ
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}


