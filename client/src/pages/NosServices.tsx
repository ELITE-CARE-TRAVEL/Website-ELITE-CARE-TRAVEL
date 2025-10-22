import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NosServices() {
  const services = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      emoji: "🩺",
      title: "Consultation Initiale",
      description: "Évaluation complète de vos besoins médicaux et planification personnalisée de votre séjour."
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      emoji: "📅",
      title: "Organisation du Séjour",
      description: "Prise en charge complète de votre hébergement, transport et planning médical en Tunisie."
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      emoji: "🧑‍⚕️",
      title: "Suivi Médical",
      description: "Accompagnement par des professionnels de santé tout au long de votre parcours de soins."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      emoji: "💶",
      title: "Transparence Tarifaire",
      description: "Devis détaillé et transparent sans frais cachés pour tous nos services."
    },
    {
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      emoji: "☎️",
      title: "Support 24/7",
      description: "Assistance disponible 24h/24 et 7j/7 pendant tout votre séjour médical."
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      emoji: "❤️‍🩹",
      title: "Suivi Post-Opératoire",
      description: "Accompagnement continu après votre intervention pour une récupération optimale."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-[#cfb654] max-w-3xl mx-auto leading-relaxed">
            De votre première consultation jusqu'à votre retour, Elite Care Travel s'assure que votre parcours médical en Tunisie se déroule dans un climat de confiance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Un Accompagnement Complet
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Grâce à des experts médicaux, un suivi personnalisé et une tranquillité garantie, nous vous offrons une expérience médicale d'exception.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#cfb654] to-[#b8a047] rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.emoji ? (
                    <span className="text-3xl" aria-hidden="true">{service.emoji}</span>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#05125d] mb-4 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Pourquoi Choisir Elite Care Travel ?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expertise Médicale</h3>
              <p className="text-lg">Chirurgiens tunisiens de renommée internationale</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tarifs Compétitifs</h3>
              <p className="text-lg">Qualité européenne à des prix accessibles</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Accompagnement Personnalisé</h3>
              <p className="text-lg">Suivi attentif et humain à chaque étape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Découvrez Nos Services
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour une consultation personnalisée et découvrez comment nous pouvons vous accompagner.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
          >
            Demandez votre devis gratuit
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
