import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TraitementInfertilite() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            TRAITEMENT DE L'INFERTILITÉ AVEC Elite Care Travel EN TUNISIE
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elite Care Travel est une enseigne spécialisée dans le <strong>tourisme médical en Tunisie</strong> pour la chirurgie esthétique, générale et le traitement de l'infertilité.
            Nous accompagnons les couples qui ont des <strong>difficultés à avoir des enfants</strong> et leurs proposons des <strong>séjours médicaux</strong> pour chirurgies qui traitent de l'infertilité en Tunisie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous collaborons avec des <strong>équipes médicales et logistiques</strong> qui mettent tout en œuvre pour vous assurer des <strong>services</strong> à la hauteur de vos attentes : vol, rendez-vous avec le médecin, hôtel, tourisme...
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De l'<strong>insémination artificielle</strong> à la <strong>biopsie artificielle</strong> en passant par la <strong>fécondation in vitro</strong>, les chirurgiens tunisiens avec lesquels nous collaborons sont en mesure de vous conseiller quant à la solution qui répond le mieux à vos critères et de vous proposer des <strong>solutions pour le traitement de l'infertilité</strong> afin de maximiser les <strong>chances de fécondation</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vous avez des questions concernant nos services en matière de chirurgie de l'infertilité en Tunisie ? Vous souhaitez prendre rendez-vous et parler à l'un de nos spécialistes ? N'hésitez pas à contacter notre <strong>agence de tourisme médical en Tunisie</strong> Elite Care Travel pour toute demande d'information personnalisée.
          </p>
        </div>
      </section>

      {/* Treatment Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insémination Artificielle */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                INSÉMINATION ARTIFICIELLE
              </h2>
              <img 
                src="/src/assets/Interventions/Traitement de l'infertilité/insémination-artificielle-300x215.png" 
                alt="Insémination Artificielle" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Insémination artificielle ou insémination intra-utérine est une intervention chirurgicale qui augmente les chances des couples pour avoir des enfants en traitant les difficultés de conception : <strong>faible concentration de spermatozoïdes</strong>, <strong>faible volume de sperme</strong>, <strong>baisse de la mobilité des spermatozoïdes</strong>...
              </p>
              <a href="#" className="text-[#cfb654] hover:underline font-semibold">En Savoir +</a>
            </div>

            {/* Fécondation In Vitro */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                FÉCONDATION IN VITRO
              </h2>
              <img 
                src="/src/assets/Interventions/Traitement de l'infertilité/fécondation-in-vitro-300x222.png" 
                alt="Fécondation In Vitro" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                La <strong>FIV Fécondation In Vitro</strong> est une technique de chirurgie générale qui, lorsque les ovules et les ovocytes ne peuvent pas se rencontrer, assure leur rencontre, en dehors de l'organisme. Il faut cependant noter que lors de l'intervention, il est préférable d'obtenir <strong>plusieurs ovocytes</strong> pour augmenter les chances de fécondation.
              </p>
              <a href="#" className="text-[#cfb654] hover:underline font-semibold">En savoir +</a>
            </div>

            {/* Biopsie Testiculaire */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                BIOPSIE TESTICULAIRE
              </h2>
              <img 
                src="/src/assets/Interventions/Traitement de l'infertilité/biopsie.png" 
                alt="Biopsie Testiculaire" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Lorsque l'homme présente une <strong>absence de spermatozoïdes dans l'éjaculât</strong>, la biopsie testiculaire est une solution chirurgicale qui consiste à effectuer un <strong>prélèvement chirurgical de spermatozoïdes</strong> pour effectuer une fécondation in vitro FIV. Le chirurgien intervient pour obtenir du <strong>tissu testiculaire avec des spermatozoïdes</strong>.
              </p>
              <a href="#" className="text-[#cfb654] hover:underline font-semibold">En savoir +</a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info / Call to Action */}
      <section className="py-8 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#05125d] text-white py-3 px-8 rounded-lg hover:bg-[#0a1f7a] transition-colors duration-300 font-semibold shadow-md"
            >
              Devis gratuit
            </a>
            <a 
              href="/pricing" 
              className="bg-[#cfb654] text-[#05125d] py-3 px-8 rounded-lg hover:bg-[#b8a047] transition-colors duration-300 font-semibold shadow-md"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
