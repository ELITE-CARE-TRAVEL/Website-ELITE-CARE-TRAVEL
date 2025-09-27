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
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "CHIRURGIE CARDIO VASCULAIRE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "CHIRURGIE ORTHOPEDIQUE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "TRAITEMENT DE L'INFERTILITE",
      description: "Elite Care Travel une agence spécialisée dans le Tourisme médical.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba0ef08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
      <section className="relative h-[70vh] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#05125d]/80 to-[#0a1f7a]/60"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition duration-200 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition duration-200 backdrop-blur-sm"
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
                index === currentSlide ? 'bg-[#cfb654]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Agence de Tourisme Médical
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8" style={{ fontFamily: "'Cinzel Decorative', serif", color: '#cfb654' }}>
            Elite Care Travel
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Votre partenaire de confiance pour le tourisme médical en Tunisie
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] transition duration-200 transform hover:scale-105 shadow-lg"
          >
            Demandez votre devis gratuit
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Notre Expertise
            </h2>
            <div className="w-24 h-1 bg-[#cfb654] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Prise en charge complète pour votre séjour de soins
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Elite Care Travel est une agence spécialisée dans le tourisme médical en Tunisie, offrant une prise en charge complète pour votre séjour de soins. Nous organisons des interventions de chirurgie esthétique (plastique, réparatrice, anti-âge, traitement de l'obésité) ainsi que des chirurgies spécialisées : cardio-vasculaire, orthopédique, neurochirurgie et traitements de l'infertilité.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous collaborons avec les meilleurs chirurgiens tunisiens, réputés pour leur expertise et leur savoir-faire, afin de garantir des soins de haute qualité dans les cliniques les plus renommées.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#05125d] to-[#0a1f7a] text-white p-6 rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-[#cfb654] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Chirurgie Esthétique</h4>
                <p className="text-sm text-gray-200">Plastique, réparatrice, anti-âge</p>
              </div>
              <div className="bg-gradient-to-br from-[#05125d] to-[#0a1f7a] text-white p-6 rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-[#cfb654] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Chirurgie Spécialisée</h4>
                <p className="text-sm text-gray-200">Cardio-vasculaire, orthopédique</p>
              </div>
              <div className="bg-gradient-to-br from-[#05125d] to-[#0a1f7a] text-white p-6 rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-[#cfb654] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Neurochirurgie</h4>
                <p className="text-sm text-gray-200">Traitements avancés</p>
              </div>
              <div className="bg-gradient-to-br from-[#05125d] to-[#0a1f7a] text-white p-6 rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-[#cfb654] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Traitement Infertilité</h4>
                <p className="text-sm text-gray-200">Solutions personnalisées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Nos Services
            </h2>
            <div className="w-24 h-1 bg-[#cfb654] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Notre objectif est de vous offrir des résultats fiables, un rajeunissement naturel et des prestations sur mesure, adaptées à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#05125d] to-[#0a1f7a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Délais Réduits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Accès rapide aux meilleurs spécialistes et cliniques sans liste d'attente interminable.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#05125d] to-[#0a1f7a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Tarifs Compétitifs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Économisez jusqu'à 70% sur vos soins médicaux par rapport aux tarifs européens.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#05125d] to-[#0a1f7a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 14.176-1.332 9-6.03 9-11.622 0-1.042.133-2.052.382-3.007z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Service Clé en Main
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe s'occupe de tout : conseils, billets, hôtel, transferts et coordination médicale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Notre Processus
            </h2>
            <div className="w-24 h-1 bg-[#cfb654] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#05125d] mb-2">Consultation</h3>
              <p className="text-gray-600">Évaluation de vos besoins médicaux</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#05125d] mb-2">Planification</h3>
              <p className="text-gray-600">Organisation complète de votre séjour</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#05125d] mb-2">Accompagnement</h3>
              <p className="text-gray-600">Suivi personnalisé pendant votre séjour</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#cfb654] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-[#05125d] mb-2">Retour</h3>
              <p className="text-gray-600">Suivi post-opératoire et retour en sécurité</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Profitez d'un accompagnement complet
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Du premier contact jusqu'à votre retour, nous vous accompagnons dans votre parcours de soins en toute sérénité.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] transition duration-200 transform hover:scale-105 shadow-lg"
          >
            Demandez votre devis gratuit dès aujourd'hui !
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
