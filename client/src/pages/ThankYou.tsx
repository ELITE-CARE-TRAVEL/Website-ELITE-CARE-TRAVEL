import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AutoTranslate from '../components/AutoTranslate';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Success Message Section */}
      <section className="flex items-center justify-center min-h-[80vh] px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Success Icon */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg 
                className="w-20 h-20 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Text */}
          <div className="space-y-6 mb-10">
            <AutoTranslate 
              as="h1" 
              className="text-5xl md:text-6xl font-bold text-[#05125d] mb-6" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Message Envoyé avec Succès!
            </AutoTranslate>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <AutoTranslate 
                as="p" 
                className="text-xl text-gray-700 leading-relaxed"
              >
                Merci de nous avoir contactés. Votre message a été envoyé avec succès.
              </AutoTranslate>
              <AutoTranslate 
                as="p" 
                className="text-xl text-gray-700 leading-relaxed"
              >
                Notre équipe vous répondra dans les plus brefs délais.
              </AutoTranslate>
              <AutoTranslate 
                as="p" 
                className="text-lg text-[#cfb654] font-semibold mt-6"
              >
                Elite Care Travel - Votre partenaire en tourisme médical
              </AutoTranslate>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] font-extrabold py-4 px-10 rounded-xl text-xl transition duration-200 transform hover:scale-105 shadow-xl hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white"
          >
            <AutoTranslate as="span">
              Retour à l'Accueil
            </AutoTranslate>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
