import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      title: "CHIRURGIE ESTHETIQUE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://plus.unsplash.com/premium_photo-1682096547754-b2bb5151211a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0hJUlVSR0lFJTIwRVNUSEVUSVFVRXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      title: "CHIRURGIE CARDIO VASCULAIRE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://plus.unsplash.com/premium_photo-1673958771843-12c73b278bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    },
    {
      id: 3,
      title: "CHIRURGIE ORTHOPEDIQUE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://plus.unsplash.com/premium_photo-1731410157812-f3a6a559e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFuJTIwaW4lMjB3aGVlbGNoYWlyJTIwd2l0aCUyMG51cnNlfGVufDB8fDB8fHww"
    },
    {
      id: 4,
      title: "TRAITEMENT DE L'INFERTILITE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://plus.unsplash.com/premium_photo-1661672651821-08846578b756?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Carousel Section */}
      <section className="relative h-[70vh] overflow-hidden z-10">
        <div className="relative h-full">
          {carouselData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-[#cfb654] max-w-2xl mx-auto leading-relaxed font-medium">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#cfb654]/80 hover:bg-[#cfb654] text-white p-3 rounded-full transition duration-200 backdrop-blur-sm shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#cfb654]/80 hover:bg-[#cfb654] text-white p-3 rounded-full transition duration-200 backdrop-blur-sm shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-200 ${
                index === currentSlide ? 'bg-[#cfb654]' : 'bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Medical Tourism Agency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww" 
                alt="Doctor" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-4 text-center lg:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                AGENCE DE TOURISME MÉDICAL POUR LA CHIRURGIE ESTHÉTIQUE
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#cfb654] mb-6 text-center lg:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Elite Care Travel
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Elite Care Travel est une agence spécialisée dans le tourisme médical en Tunisie, offrant une prise en charge complète pour votre séjour de soins. Nous organisons des interventions de chirurgie esthétique (plastique, réparatrice, anti-âge, traitement de l'obésité) ainsi que des chirurgies spécialisées : cardio-vasculaire, orthopédique, neurochirurgie et traitements de l'infertilité. Nous collaborons avec les meilleurs chirurgiens tunisiens, réputés pour leur expertise et leur savoir-faire, afin de garantir des soins de haute qualité dans les cliniques les plus renommées.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-3 px-6 rounded-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-lg"
                >
                  Demandez votre devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              NOS INTERVENTIONS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  CHIRURGIE ESTHÉTIQUE
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  CHIRURGIE DE L'OBÉSITÉ
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  CHIRURGIE CARDIO VASCULAIRE
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  CHIRURGIE ORTHOPÉDIQUE
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  NEUROCHIRURGIE
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#05125d] text-center leading-tight">
                  TRAITEMENT DE L'INFERTILITÉ
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNUQVklMjBvZiUyMGhvc3BpdGFsfGVufDB8fDB8fHww" 
                  alt="Séjour"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#05125d] mb-2">SÉJOUR</h3>
              <p className="text-sm text-[#cfb654] hover:text-[#b8a047] cursor-pointer transition duration-200">Voir plus</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SCVDMyU5NFRFTFN8ZW58MHx8MHx8fDA%3D" 
                  alt="Hôtels"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#05125d] mb-2">HÔTELS</h3>
              <p className="text-sm text-[#cfb654] hover:text-[#b8a047] cursor-pointer transition duration-200">Voir plus</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1711343777918-6d395c16e37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Cliniques"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#05125d] mb-2">CLINIQUES</h3>
              <p className="text-sm text-[#cfb654] hover:text-[#b8a047] cursor-pointer transition duration-200">Voir plus</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661440014677-40c571298653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#05125d] mb-2">CHIRURGIENS</h3>
              <p className="text-sm text-[#cfb654] hover:text-[#b8a047] cursor-pointer transition duration-200">Voir plus</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Elite Care Travel Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Elite Care Travel: UN ACCOMPAGNEMENT MÉDICAL PERSONNALISÉ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <h3 className="text-sm font-semibold text-[#05125d]">DEVIS GRATUIT ET PERSONNALISÉ</h3>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <h3 className="text-sm font-semibold text-[#05125d]">PROCÉDURE SIMPLE DU SÉJOUR MÉDICAL EN TUNISIE</h3>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <h3 className="text-sm font-semibold text-[#05125d]">MEILLEURS CHIRURGIENS TUNISIENS</h3>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <h3 className="text-sm font-semibold text-[#05125d]">MEILLEURS TARIFS AVEC Elite Care Travel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Tunisia Destination Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LA TUNISIE: LA MEILLEURE DESTINATION POUR VOTRE SÉJOUR MÉDICAL
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              De renommée internationale, les <strong>chirurgiens esthétiques et généraux tunisiens</strong> disposent de l'expertise et du savoir-faire requis pour le succès des interventions. Ils sont également connus pour leur hospitalité et accueil. Vous aurez droit à toute l'attention dont vous aurez besoin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              De plus, les <strong>cliniques en Tunisie</strong> disposent d'équipements à la pointe de la technologie, qui répondent à tous les critères d'exigences que les cliniques européennes. Dès votre sortie de la clinique, vous serez logé dans un <strong>hôtel 5 étoiles</strong> où vous serez accompagné par un infirmier, mandaté par nos soins, qui sera à votre écoute tout au long de votre convalescence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pour tout complément d'information ou demande personnalisée, <strong>contactez-nous</strong> ou demandez un <strong>Devis Gratuit</strong>.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
            >
              Demandez votre devis gratuit
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
