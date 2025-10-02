import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* 404 Error Section */}
      <section className="flex items-center justify-center min-h-[80vh] px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Medical Illustration */}
          <div className="mb-12">
            <div className="w-96 h-96 mx-auto flex items-center justify-center">
              <img 
                src="/src/assets/doctor.png" 
                alt="Doctor with medical items" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Error Text */}
          <div className="space-y-6 mb-10">
            <h1 className="text-7xl md:text-9xl font-bold text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              404 Error
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              404 Oops! The doctor is not around.
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                We tried but we couldn't find the page you're looking for. We will do better next time.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We want to help you the best we can. You're invited to our homepage.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-200 transform hover:scale-105 shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
