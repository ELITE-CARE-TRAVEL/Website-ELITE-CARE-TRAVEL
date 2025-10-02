import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NosPartenaires() {
  const partenaires = [
    {
      name: "Clinique Internationale de Tunis",
      specialty: "Chirurgie Esthétique & Générale",
      location: "Tunis, Tunisie",
      description: "Établissement de référence avec les dernières technologies médicales",
      image: "https://plus.unsplash.com/premium_photo-1661440014677-40c571298653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8"
    },
    {
      name: "Centre Médical Carthage",
      specialty: "Chirurgie Cardio-Vasculaire",
      location: "Carthage, Tunisie",
      description: "Spécialisé dans les interventions cardiaques de pointe",
      image: "https://plus.unsplash.com/premium_photo-1673958771843-12c73b278bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    },
    {
      name: "Institut de Chirurgie Orthopédique",
      specialty: "Chirurgie Orthopédique",
      location: "Sfax, Tunisie",
      description: "Expert en prothèses et chirurgie articulaire",
      image: "https://plus.unsplash.com/premium_photo-1731410157812-f3a6a559e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFuJTIwaW4lMjB3aGVlbGNoYWlyJTIwd2l0aCUyMG51cnNlfGVufDB8fDB8fHww"
    },
    {
      name: "Centre de Fertilité Méditerranée",
      specialty: "Traitement de l'Infertilité",
      location: "Monastir, Tunisie",
      description: "Techniques avancées de procréation médicalement assistée",
      image: "https://plus.unsplash.com/premium_photo-1661672651821-08846578b756?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
    }
  ];

  const avantages = [
    "Équipements à la pointe de la technologie",
    "Chirurgiens de renommée internationale",
    "Standards de qualité européens",
    "Hébergement 5 étoiles inclus",
    "Suivi médical personnalisé",
    "Tarifs compétitifs et transparents"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Nos Partenaires
          </h1>
          <p className="text-xl md:text-2xl text-[#cfb654] max-w-3xl mx-auto leading-relaxed">
            Cliniques partenaires de prestige en Tunisie
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Excellence Médicale Garantie
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Elite Care Travel collabore avec les cliniques privées les plus réputées de Tunis, offrant sécurité, confort et excellence des soins. Nos établissements partenaires accueillent les meilleurs chirurgiens tunisiens, spécialistes en chirurgie esthétique et générale, pour un parcours médical haut de gamme.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#05125d] mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Nos Établissements Partenaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={partenaire.image} 
                    alt={partenaire.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05125d]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{partenaire.name}</h3>
                    <p className="text-[#cfb654] font-semibold">{partenaire.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-[#cfb654] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 font-medium">{partenaire.location}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{partenaire.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Pourquoi Nos Partenaires ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nos cliniques partenaires sont sélectionnées selon des critères stricts de qualité, sécurité et excellence médicale. Chaque établissement dispose d'équipements modernes et d'équipes médicales de haut niveau.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#cfb654] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww" 
                alt="Chirurgiens tunisiens" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05125d]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Standards de Qualité
            </h2>
            <p className="text-xl text-[#cfb654] max-w-3xl mx-auto">
              Tous nos partenaires respectent les normes internationales de qualité et de sécurité
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Certifications Internationales</h3>
              <p className="text-lg">Toutes nos cliniques sont certifiées selon les standards internationaux</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technologies de Pointe</h3>
              <p className="text-lg">Équipements médicaux les plus récents et performants</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Chirurgiens Experts</h3>
              <p className="text-lg">Médecins spécialisés avec une expérience internationale reconnue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Découvrez Nos Partenaires
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour en savoir plus sur nos établissements partenaires et planifier votre séjour médical.
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
