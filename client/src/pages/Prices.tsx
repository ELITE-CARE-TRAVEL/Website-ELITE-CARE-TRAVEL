import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Prices() {
  const faceSurgery = [
    { name: "Lifting cervico-facial", price: "3200€" },
    { name: "Lifting frontal", price: "2350€" },
    { name: "Lifting malaire", price: "2350€" },
    { name: "Lifting complet du visage", price: "3250€" },
    { name: "Rhinoplastie Simple", price: "2250€" },
    { name: "Rhinoplastie et septoplastie", price: "2600€" },
    { name: "Rhinoplastie ethnique", price: "2600€" },
    { name: "Rhinoplastie Ultrasonique", price: "3350€" },
    { name: "Rhinoplastie ultrasonique ethnique", price: "4150€" },
    { name: "Chirurgie 2 paupières", price: "1700€" },
    { name: "Chirurgie des 4 paupières", price: "1900€" },
    { name: "Chirurgie des lèvres (liplift)", price: "2900€" }
  ];

  const breastSurgery = [
    { name: "Augmentation mammaire prothèses rondes", price: "2650€" },
    { name: "Augmentation mammaire prothèses anatomiques", price: "2850€" },
    { name: "Lifting des seins", price: "2350€" },
    { name: "Réduction mammaire", price: "2350€" },
    { name: "Lipofilling des seins", price: "3200€" },
    { name: "Gynécomastie", price: "2350€" },
    { name: "Implant pectoraux", price: "3200€" }
  ];

  const bodySurgery = [
    { name: "Lipo Vaser", price: "3550€" },
    { name: "Abdominoplastie", price: "2350€" },
    { name: "Abdominal etching", price: "4000€" },
    { name: "Abdominoplastie circulaire", price: "3200€" },
    { name: "Augmentation des fesses par prothèse", price: "3200€" },
    { name: "BBL (lipo + injection graisse)", price: "3200€" },
    { name: "Lifting des bras", price: "1950€" },
    { name: "Lifting des fesses", price: "2250€" },
    { name: "Lifting des cuisses", price: "2050€" },
    { name: "Lifting du dos", price: "2050€" }
  ];

  const liposuction = [
    { name: "Lipo 1 zone", price: "1900€" },
    { name: "Lipo du cou", price: "2050€" },
    { name: "Lipo menton", price: "2050€" },
    { name: "Lipo ventre", price: "2150€" },
    { name: "Lipo 360", price: "2550€" },
    { name: "Lipo complète plusieurs zones", price: "2300€" },
    { name: "Lipo vaser", price: "3550€" },
    { name: "Lipo full HD 5D", price: "3900€" },
    { name: "Lipo J Plasma", price: "3550€" }
  ];

  const combinedSurgery = [
    { name: "Lifting complet du visage + chirurgie 2 paupières", price: "3750€" },
    { name: "Lifting complet du visage + chirurgie 4 paupières", price: "3850€" },
    { name: "Lifting des seins + pose de prothèses rondes", price: "3300€" },
    { name: "Réduction mammaire + lifting pour remonter les seins", price: "3200€" },
    { name: "Abdominoplastie + liposuccion du ventre", price: "3100€" },
    { name: "Abdominoplastie + traitement du diastasis + liposuccion complète", price: "3600€" },
    { name: "Abdominoplastie + liposuccion complète", price: "3200€" },
    { name: "Liposuccion complète + lipofilling seins ou fesses", price: "3200€" },
    { name: "Liposuccion 360 + abdominoplastie", price: "3550€" }
  ];

  const menSurgery = [
    { name: "Ovale visage", price: "2850€" },
    { name: "Rides du front par lifting", price: "2350€" },
    { name: "Lifting complet visage", price: "3350€" },
    { name: "Rhinoplastie", price: "2250€" },
    { name: "Chirurgie nez avec redressement cloison nasale", price: "2600€" },
    { name: "Rhinoplastie nez ethniques", price: "2600€" },
    { name: "Chirurgie paupières, blépharoplastie", price: "1700€" },
    { name: "Gynécomastie", price: "2250€" },
    { name: "Pénoplastie", price: "Selon indications" },
    { name: "Greffe de cheveux ou de barbe", price: "En fonction du nombre de greffons" },
    { name: "Liposuccion ventre et poignées d'amour", price: "2150€" },
    { name: "Liposuccion plus de 3 zones", price: "2300€" },
    { name: "Liposuccion vaser", price: "2900€" },
    { name: "Abdominal etching", price: "4000€" },
    { name: "Abdominoplastie + liposuccion du ventre", price: "3100€" }
  ];

  const PricingSection = ({ title, procedures, icon }: { title: string; procedures: Array<{name: string; price: string}>; icon: string }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#cfb654] to-[#b8a047] rounded-full flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#05125d]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
          {title}
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {procedures.map((procedure, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-[#cfb654]/10 transition-colors duration-200">
            <span className="text-gray-700 font-medium flex-1">{procedure.name}</span>
            <span className="text-[#cfb654] font-bold text-lg ml-4">{procedure.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Tarifs
          </h1>
          <p className="text-xl md:text-2xl text-[#cfb654] max-w-4xl mx-auto leading-relaxed">
            Chirurgie esthétique : Prix transparents incluant l'opération et l'hébergement
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
              Chirurgie Esthétique
            </h2>
            <div className="bg-gradient-to-r from-[#cfb654]/10 to-[#b8a047]/10 p-8 rounded-lg border-l-4 border-[#cfb654]">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Chez Elite Care Travel, les prix affichés pour nos interventions de chirurgie esthétique incluent à la fois l'opération et l'hébergement. Ils sont fournis à titre indicatif et peuvent varier selon vos besoins spécifiques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pour un devis précis et sur-mesure, contactez notre équipe dès aujourd'hui et préparez votre séjour esthétique en Tunisie en toute sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingSection 
            title="Chirurgie du Visage" 
            procedures={faceSurgery}
            icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />

          <PricingSection 
            title="Chirurgie Esthétique des Seins" 
            procedures={breastSurgery}
            icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />

          <PricingSection 
            title="Chirurgie Esthétique Corps et Silhouette" 
            procedures={bodySurgery}
            icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />

          <PricingSection 
            title="Liposuccion" 
            procedures={liposuction}
            icon="M13 10V3L4 14h7v7l9-11h-7z"
          />

          <PricingSection 
            title="Interventions Esthétiques Combinées" 
            procedures={combinedSurgery}
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />

          <PricingSection 
            title="Tarifs Opérations Hommes" 
            procedures={menSurgery}
            icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Comment Demander Votre Devis ?
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Maintenant que vous connaissez nos tarifs, vous pouvez facilement demander votre devis personnalisé pour votre chirurgie esthétique.
            </p>
            <p className="text-lg leading-relaxed">
              Ce devis détaillé vous permettra de connaître l'intégralité des frais de l'intervention et d'obtenir une confirmation écrite que tout est inclus dans le prix affiché, pour une transparence et une sérénité totales.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
          >
            Demandez votre devis gratuit
          </a>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#cfb654]/10 to-[#b8a047]/10 rounded-lg">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#05125d] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Prix Inclus
              </h3>
              <p className="text-gray-700">Opération + Hébergement inclus dans tous nos tarifs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#cfb654]/10 to-[#b8a047]/10 rounded-lg">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#05125d] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Devis Personnalisé
              </h3>
              <p className="text-gray-700">Tarifs indicatifs - Devis précis selon vos besoins</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#cfb654]/10 to-[#b8a047]/10 rounded-lg">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#05125d] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Transparence Totale
              </h3>
              <p className="text-gray-700">Confirmation écrite de tous les frais inclus</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
