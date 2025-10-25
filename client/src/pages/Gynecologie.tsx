import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";

export default function Gynecologie() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <AutoTranslate as="h1" className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            GYNÉCOLOGIE AVEC Elite Care Travel EN TUNISIE
          </AutoTranslate>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elite Care Travel est une enseigne spécialisée dans le <strong>tourisme médical en Tunisie</strong> pour la gynécologie,
            la chirurgie esthétique et générale. Nous accompagnons les femmes dans toutes les étapes de leur vie avec une 
            <strong> prise en charge complète</strong> et <strong>personnalisée</strong> incluant l'<strong>interruption volontaire de grossesse (IVG)</strong>,
            le <strong>traitement de l'infertilité</strong> et l'<strong>esthétique gynécologique</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous collaborons avec des <strong>équipes médicales et logistiques</strong> de premier plan qui mettent tout en œuvre
            pour vous assurer des <strong>services de qualité</strong> à la hauteur de vos attentes : vol, rendez-vous avec le médecin,
            hébergement confortable, suivi post-opératoire et accompagnement personnalisé.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De l'<strong>interruption volontaire de grossesse</strong> effectuée dans le respect et la confidentialité, au 
            <strong> traitement de l'infertilité</strong> (insémination artificielle, FIV, biopsie testiculaire), en passant par
            l'<strong>esthétique gynécologique</strong> (nymphoplastie, vaginoplastie, rajeunissement vaginal), nos gynécologues
            et chirurgiens tunisiens sont en mesure de vous conseiller et de vous proposer des <strong>solutions adaptées</strong>
            à vos besoins spécifiques.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vous avez des questions concernant nos services en matière de gynécologie en Tunisie ? Vous souhaitez prendre rendez-vous
            et parler à l'un de nos spécialistes ? N'hésitez pas à contacter notre <strong>agence de tourisme médical en Tunisie</strong>
            Elite Care Travel pour toute demande d'information personnalisée et confidentielle.
          </p>
        </div>
      </section>

      {/* Treatment Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IVG */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <AutoTranslate as="h2" className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                INTERRUPTION VOLONTAIRE DE GROSSESSE (IVG)
              </AutoTranslate>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=60" 
                alt="Interruption volontaire de grossesse" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Elite Care Travel accompagne les femmes dans leur choix d'<strong>interruption volontaire de grossesse</strong> dans
                un cadre médical sécurisé et confidentiel. Nous proposons l'<strong>IVG médicamenteuse</strong> et l'<strong>IVG chirurgicale</strong>
                selon le terme de la grossesse, avec un <strong>suivi médical complet</strong> et un accompagnement psychologique si nécessaire.
              </p>
              <a href="#" className="text-[#cfb654] hover:underline font-semibold">En Savoir +</a>
            </div>

            {/* Traitement de l'infertilité */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <AutoTranslate as="h2" className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                TRAITEMENT DE L'INFERTILITÉ
              </AutoTranslate>
              <img 
                src="/src/assets/Interventions/Traitement de l'infertilité/insémination-artificielle-300x215.png" 
                alt="Traitement de l'infertilité" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Nous accompagnons les couples souffrant d'<strong>infertilité</strong> avec une gamme complète de solutions :
                <strong> insémination artificielle</strong>, <strong>fécondation in vitro (FIV)</strong>, <strong>ICSI</strong>,
                <strong> biopsie testiculaire</strong>, traitement des <strong>troubles de l'ovulation</strong> et de
                l'<strong>endométriose</strong>. Nos spécialistes maximisent vos <strong>chances de conception</strong> avec les techniques
                les plus avancées.
              </p>
              <a href="#" className="text-[#cfb654] hover:underline font-semibold">En savoir +</a>
            </div>

            {/* Esthétique gynécologique */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <AutoTranslate as="h2" className="text-xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                ESTHÉTIQUE GYNÉCOLOGIQUE
              </AutoTranslate>
              <img 
                src="https://media.istockphoto.com/id/2177969417/fr/photo/apr%C3%A8s-avoir-termin%C3%A9-lexamen-gyn%C3%A9cologique-le-m%C3%A9decin-et-la-patiente-conversent.jpg?s=612x612&w=0&k=20&c=KCX21Z9ESpRf_VVmgIb9EBXxTAwtL8ksSuXkRGgSEnI=" 
                alt="Esthétique gynécologique" 
                className="mx-auto w-full h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Elite Care Travel propose des interventions d'<strong>esthétique gynécologique</strong> pour améliorer le confort
                et la confiance des femmes : <strong>nymphoplastie</strong> (réduction des petites lèvres), <strong>vaginoplastie</strong>
                (resserrement vaginal), <strong>rajeunissement vaginal au laser</strong>, reconstruction de l'<strong>hymen</strong>
                et traitement du <strong>relâchement vaginal</strong> post-accouchement. Interventions discrètes avec résultats naturels.
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
              <AutoTranslate>Devis gratuit</AutoTranslate>
            </a>
            <a 
              href="/pricing" 
              className="bg-[#cfb654] text-[#05125d] py-3 px-8 rounded-lg hover:bg-[#b8a047] transition-colors duration-300 font-semibold shadow-md"
            >
              <AutoTranslate>Voir les tarifs</AutoTranslate>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
