import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";
import esthetiqueImg from "../assets/Home/CHIRURGIE ESTHÉTIQUE.jpeg";
import obesiteImg from "../assets/Home/CHIRURGIE DE L'OBÉSITÉ.png";
import cardioImg from "../assets/Home/CHIRURGIE CARDIO VASCULAIRE.jpeg";
import orthoImg from "../assets/Home/CHIRURGIE ORTHOPÉDIQUE.jpeg";
import neuroImg from "../assets/Home/NEUROCHIRURGIE.jpeg";
import infertImg from "../assets/Home/TRAITEMENT DE L'INFERTILITÉ.jpeg";

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
                    <AutoTranslate 
                      as="h2" 
                      className="text-3xl md:text-5xl font-bold mb-6 text-white" 
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                    >
                      {slide.title}
                    </AutoTranslate>
                    <AutoTranslate 
                      as="p" 
                      className="text-xl md:text-2xl text-[#cfb654] max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                      {slide.description}
                    </AutoTranslate>
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

      {/* Qui sommes-nous Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <AutoTranslate 
              as="h2" 
              className="text-4xl md:text-5xl font-bold text-[#05125d] mb-4" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Qui sommes-nous ?
            </AutoTranslate>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cfb654] to-[#b8a047] mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-6">
              Bienvenue chez Elite Care Travel, votre partenaire de confiance en tourisme médical en Tunisie. Nous mettons à votre service l'excellence de la médecine tunisienne alliée à un accompagnement VIP pour faire de votre séjour santé une expérience sereine, sûre et réussie.
            </AutoTranslate>

            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-6">
              Experts en chirurgie esthétique, obésité, orthopédie, pied diabétique, ophtalmologie et gynécologie, nous collaborons avec des médecins de haut niveau. D’autres spécialités sont également disponibles selon vos besoins.
            </AutoTranslate>

            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-6">
              Notre équipe prend en charge chaque patient de A à Z : accueil à l'aéroport, transfert, hospitalisation, hébergement, suivi post-opératoire et accompagnement personnalisé à chaque étape. Votre santé et votre bien-être sont notre priorité absolue.
            </AutoTranslate>
          </div>
          {/* Closing Statement */}
          <div className="text-center mt-12">
            <AutoTranslate as="p" className="text-2xl md:text-3xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Chez Elite Care Travel, votre santé mérite l'excellence.
            </AutoTranslate>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
            >
              <AutoTranslate>Demandez votre devis gratuit</AutoTranslate>
            </Link>
          </div>
        </div>
      </section>

      {/* Interventions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AutoTranslate as="h2" className="text-3xl md:text-4xl font-bold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              NOS INTERVENTIONS
            </AutoTranslate>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link to="/interventions/chirurgie-esthetique" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={esthetiqueImg} alt="Chirurgie Esthétique" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">CHIRURGIE ESTHÉTIQUE</AutoTranslate>
              </Link>
              <Link to="/interventions/chirurgie-obesite" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={obesiteImg} alt="Chirurgie de l'obésité" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">CHIRURGIE DE L'OBÉSITÉ</AutoTranslate>
              </Link>
              <Link to="/interventions/chirurgie-orthopedique" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={cardioImg} alt="Chirurgie Orthopédique" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">CHIRURGIE ORTHOPÉDIQUE</AutoTranslate>
              </Link>
              <Link to="/interventions/pied-diabetique" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={orthoImg} alt="PEC diabète et Pied diabétique" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">PEC DIABÈTE ET PIED DIABÉTIQUE</AutoTranslate>
              </Link>
              <Link to="/interventions/ophthalmologie" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={neuroImg} alt="Ophthalmologie" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">OPHTHALMOLOGIE</AutoTranslate>
              </Link>
              <Link to="/interventions/gynecologie" className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <img src={infertImg} alt="Gynécologie" className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105" />
                <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d] text-center leading-tight">GYNÉCOLOGIE</AutoTranslate>
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Elite Care Travel Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AutoTranslate as="h2" className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Elite Care Travel: UN ACCOMPAGNEMENT MÉDICAL PERSONNALISÉ
          </AutoTranslate>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d]">DEVIS GRATUIT ET PERSONNALISÉ</AutoTranslate>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d]">PROCÉDURE SIMPLE DU SÉJOUR MÉDICAL EN TUNISIE</AutoTranslate>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d]">MEILLEURS CHIRURGIENS TUNISIENS</AutoTranslate>
            </div>
            <div className="bg-gradient-to-br from-[#cfb654] to-[#b8a047] p-6 rounded-lg text-center">
              <AutoTranslate as="h3" className="text-sm font-semibold text-[#05125d]">MEILLEURS TARIFS AVEC Elite Care Travel</AutoTranslate>
            </div>
          </div>
        </div>
      </section>

      {/* Tunisia Destination Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AutoTranslate as="h2" className="text-3xl md:text-4xl font-bold text-[#05125d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LA TUNISIE: LA MEILLEURE DESTINATION POUR VOTRE SÉJOUR MÉDICAL
          </AutoTranslate>
          <div className="max-w-4xl mx-auto">
            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-6">
              De renommée internationale, les <strong>chirurgiens esthétiques et généraux tunisiens</strong> disposent de l'expertise et du savoir-faire requis pour le succès des interventions. Ils sont également connus pour leur hospitalité et accueil. Vous aurez droit à toute l'attention dont vous aurez besoin.
            </AutoTranslate>
            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-6">
              De plus, les <strong>cliniques en Tunisie</strong> disposent d'équipements à la pointe de la technologie, qui répondent à tous les critères d'exigences que les cliniques européennes. Dès votre sortie de la clinique, vous serez logé dans un <strong>hôtel 5 étoiles</strong> où vous serez accompagné par un infirmier, mandaté par nos soins, qui sera à votre écoute tout au long de votre convalescence.
            </AutoTranslate>
            <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed mb-8">
              Pour tout complément d'information ou demande personnalisée, <strong>contactez-nous</strong> ou demandez un <strong>Devis Gratuit</strong>.
            </AutoTranslate>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
            >
              <AutoTranslate>Demandez votre devis gratuit</AutoTranslate>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
