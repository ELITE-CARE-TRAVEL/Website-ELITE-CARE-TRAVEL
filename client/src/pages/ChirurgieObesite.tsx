import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";

export default function ChirurgieObesite() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <AutoTranslate
            as="h1"
            className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CHIRURGIE DE L'OBÉSITÉ
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le tourisme médical à l’étranger, votre agence de tourisme médical, Elite Care Travel, prend en charge la totalité de votre séjour médical en Tunisie (vol, soins médicaux, convalescence…) pour les chirurgies de l’obésité.
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            En effet, nos équipes médicales vous confient aux soins des meilleurs chirurgiens tunisiens, et vous font bénéficier de leur expertise et de leur parfaite connaissance dans le milieu de la chirurgie de l’obésité : anneau gastrique, Sleeve Gastrectomie, Bypass gastrique.
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed">
            Pour toute éventuelle prise de rendez-vous ou demande d’information complémentaire, contactez-nous directement par téléphone ou via le formulaire en ligne. Nous sommes à votre entière disposition pour répondre à toutes vos questions concernant les différentes techniques qui permettent de perdre du poids, selon des critères bien spécifiques.
          </AutoTranslate>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <AutoTranslate
            as="h2"
            className="text-xl md:text-2xl font-semibold text-center text-[#05125d] mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            LES INTERVENTIONS DE LA CHIRURGIE BARIATRIQUE PRATIQUÉE PAR Elite Care Travel
          </AutoTranslate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-2 tracking-wide text-gray-700 font-semibold">
                ANNEAU GASTRIQUE
              </AutoTranslate>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/anneau-gastrique-2.jpg" alt="Anneau gastrique" className="mx-auto w-56 h-40 object-cover rounded" />
              <AutoTranslate as="p" className="mt-3 text-gray-700 leading-relaxed">
                Il s’agit d’une solution efficace, de plus en plus utilisée, pour la perte de poids. La pose d’anneau gastrique consiste à réduire le volume de l’estomac et à ralentir le passage de la nourriture, sans pour autant déranger la digestion.
              </AutoTranslate>
            </div>
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-2 tracking-wide text-gray-700 font-semibold">
                SLEEVE GASTRECTOMIE
              </AutoTranslate>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/sleeve-gastrique.jpg" alt="Sleeve" className="mx-auto w-56 h-40 object-cover rounded" />
              <AutoTranslate as="p" className="mt-3 text-gray-700 leading-relaxed">
                Technique de chirurgie de l’obésité, la Sleeve gastrectomie est une opération qui retire environ les 2/3 de l’estomac, dont les cellules qui sécrètent l’hormone stimulant l’appétit : la ghréline.
              </AutoTranslate>
            </div>
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-2 tracking-wide text-gray-700 font-semibold">
                BYPASS GASTRIQUE
              </AutoTranslate>
              <img src="/src/assets/Interventions/Chirurgie de l'obésité/bypass-gastrique.jpg" alt="Bypass gastrique" className="mx-auto w-56 h-40 object-cover rounded" />
              <AutoTranslate as="p" className="mt-3 text-gray-700 leading-relaxed">
                Le bypass gastrique est une technique chirurgicale qui traite l’obésité en réduisant la taille de l’estomac et en modifiant le circuit digestif. Le résultat attendu est une perte de poids importante.
              </AutoTranslate>
            </div>
          </div>
        </div>
      </section>

      {/* IMC */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AutoTranslate
            as="h2"
            className="text-2xl font-semibold text-[#05125d] mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CALCUL DE L’IMC (INDICE MASSE CORPORELLE)
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-8">
            L’IMC mesure l’accès de poids et d’obésité et permet d’évaluer les risques pour la santé qui y sont associés. Un individu est considéré obèse lorsque la valeur de l’IMC est supérieure ou égale à 30 kg/m².
          </AutoTranslate>
          <img src="/src/assets/Interventions/Chirurgie de l'obésité/calcul-imc.jpg" alt="Calcul IMC"
               className="mx-auto w-full max-w-3xl h-auto rounded shadow" />
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AutoTranslate
            as="h2"
            className="text-2xl md:text-3xl font-semibold text-[#05125d] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            LES TARIFS DES INTERVENTIONS DE LA CHIRURGIE DE L’OBÉSITÉ
          </AutoTranslate>
        </div>
      </section>

      <Footer />
    </div>
  );
}


