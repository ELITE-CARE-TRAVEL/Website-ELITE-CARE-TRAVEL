import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white relative">
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Excellence in Medical Tourism in Tunisia
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Safe, comfortable, and personalized medical journeys.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Personalized Assistance</h3>
            <p>Guidance from first contact to full recovery.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">5-Star Recovery</h3>
            <p>Stay in a luxury hotel with daily nurse visits.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Safe Return</h3>
            <p>We ensure your trip home is smooth and stress-free.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
