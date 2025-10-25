import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";

export default function NotreDemarche() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AutoTranslate as="h1" className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Notre Démarche
          </AutoTranslate>
          <AutoTranslate as="p" className="text-xl md:text-2xl text-[#cfb654] max-w-3xl mx-auto leading-relaxed">
            Elite Care Travel, Votre allié santé et bien-être en toute confiance
          </AutoTranslate>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#cfb654]/10 to-[#b8a047]/10 p-6 rounded-lg border-l-4 border-[#cfb654]">
                  <AutoTranslate as="h2" className="text-2xl font-bold text-[#05125d] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Notre Approche
                  </AutoTranslate>
                  <AutoTranslate as="p" className="text-lg text-gray-700 leading-relaxed">
                    Notre approche est de vous accompagner du début à la fin en mettant à votre disposition tous nos services médicaux avec un seul objectif : votre bien-être dans les meilleures conditions de sécurité et de confort.
                  </AutoTranslate>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <AutoTranslate as="h2" className="text-2xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Nos Valeurs Fondamentales
                  </AutoTranslate>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#cfb654] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <AutoTranslate as="h3" className="text-lg font-semibold text-[#05125d] mb-2">Transparence et efficacité médicale</AutoTranslate>
                        <AutoTranslate as="p" className="text-gray-700">Nous vous informons clairement sur chaque étape de votre parcours médical.</AutoTranslate>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#cfb654] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <AutoTranslate as="h3" className="text-lg font-semibold text-[#05125d] mb-2">Professionnalisme à chaque instant</AutoTranslate>
                        <AutoTranslate as="p" className="text-gray-700">Accueil, préopératoire, per-opératoire, post-opératoire immédiat et à distance.</AutoTranslate>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#cfb654] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <AutoTranslate as="h3" className="text-lg font-semibold text-[#05125d] mb-2">Accompagnement personnalisé, humain et sécurisant</AutoTranslate>
                        <AutoTranslate as="p" className="text-gray-700">Un suivi personnalisé adapté à vos besoins spécifiques.</AutoTranslate>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white p-8 rounded-lg">
                  <AutoTranslate as="h2" className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Notre Engagement
                  </AutoTranslate>
                  <AutoTranslate as="p" className="text-lg leading-relaxed">
                    Parce que vous méritez l'excellence et le luxe, Elite Care Travel s'engage à vous offrir un niveau de service impeccable et un suivi attentif, le tout à des tarifs clairs et compétitifs.
                  </AutoTranslate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AutoTranslate as="h2" className="text-3xl font-bold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Prêt à commencer votre parcours médical ?
          </AutoTranslate>
          <AutoTranslate as="p" className="text-lg text-gray-700 mb-8">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit.
          </AutoTranslate>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-bold py-4 px-8 rounded-lg text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition duration-200 transform hover:scale-105 shadow-xl"
          >
            <AutoTranslate>Demandez votre devis gratuit</AutoTranslate>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
