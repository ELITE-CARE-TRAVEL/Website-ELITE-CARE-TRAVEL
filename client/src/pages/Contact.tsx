import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AutoTranslate from '../components/AutoTranslate';
import { useTranslate } from '../hooks/useTranslation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  // Translation hook for dynamic text
  const nameLabel = useTranslate('Nom complet *');
  const emailLabel = useTranslate('Email *');
  const countryLabel = useTranslate('Pays *');
  const phoneLabel = useTranslate('Téléphone');
  const messageLabel = useTranslate('Message *');
  const submitBtn = useTranslate('Envoyer le Message');
  const namePlaceholder = useTranslate('Votre nom complet');
  const messagePlaceholder = useTranslate('Décrivez votre demande en détail...');
  const selectCountry = useTranslate('Sélectionnez votre pays');
  const selectCountryFirst = useTranslate("Sélectionnez d'abord un pays");
  const successMsg = useTranslate('Votre message a été envoyé avec succès!');
  const errorMsg = useTranslate("Erreur lors de l'envoi du message");

  const countries = [
    { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
    { name: 'Libya', code: '+218', flag: '🇱🇾' },
    { name: 'Algeria', code: '+213', flag: '🇩🇿' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' }
  ];

  const selectedCountry = countries.find(c => c.name === formData.country);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      console.log('Sending request to:', `${apiUrl}/api/contact`);
      
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', res.status);
      console.log('Response ok:', res.ok);
      
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error('Error response:', data);
        throw new Error(data.error || 'Une erreur est survenue');
      }
      
      const result = await res.json();
      console.log('Success response:', result);
      
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
      alert(successMsg);
    } catch (err: any) {
      console.error('Submit error:', err);
      alert(err.message || errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AutoTranslate as="h1" className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contactez Elite Care Travel
          </AutoTranslate>
          <AutoTranslate as="p" className="text-xl md:text-2xl text-[#cfb654] font-semibold">
            Votre partenaire en tourisme médical en Tunisie
          </AutoTranslate>
        </div>
      </div>
      {/* Contact Form - centered and elevated */}
      <div className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 ring-1 ring-black/5 hover:ring-[#cfb654]/20 transition-colors duration-300">
          <AutoTranslate as="h2" className="text-3xl md:text-4xl font-extrabold text-[#05125d] mb-8 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Formulaire de Contact
          </AutoTranslate>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#05125d] mb-2">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-[#cfb654] focus:border-[#cfb654] hover:border-gray-300 transition-colors duration-200 placeholder-gray-400"
                  placeholder={namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#05125d] mb-2">
                  {emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-[#cfb654] focus:border-[#cfb654] hover:border-gray-300 transition-colors duration-200 placeholder-gray-400"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-[#05125d] mb-2">
                  {countryLabel}
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-[#cfb654] focus:border-[#cfb654] hover:border-gray-300 transition-colors duration-200 font-medium"
                >
                  <option value="">{selectCountry}</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#05125d] mb-2">
                  {phoneLabel}
                </label>
                <div className="relative">
                  {selectedCountry && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                      <span className="text-lg">{selectedCountry.flag}</span>
                      <span className="text-sm font-semibold text-[#05125d]">{selectedCountry.code}</span>
                      <span className="text-gray-300">|</span>
                    </div>
                  )}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full ${selectedCountry ? 'pl-28' : 'pl-4'} pr-4 py-3.5 border border-gray-200 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-[#cfb654] focus:border-[#cfb654] hover:border-gray-300 transition-all duration-200 placeholder-gray-400`}
                    placeholder={selectedCountry ? "XX XXX XXX" : selectCountryFirst}
                    disabled={!selectedCountry}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#05125d] mb-2">
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 h-40 border border-gray-200 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-[#cfb654] focus:border-[#cfb654] hover:border-gray-300 transition-colors duration-200 resize-y placeholder-gray-400"
                placeholder={messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] py-4 px-6 rounded-xl font-extrabold text-lg hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition-transform duration-200 active:scale-95 shadow-xl ring-1 ring-[#cfb654]/20"
            >
              {submitBtn}
            </button>
          </form>
        </div>
      </div>
      <Footer />
      </div>
  );
}
