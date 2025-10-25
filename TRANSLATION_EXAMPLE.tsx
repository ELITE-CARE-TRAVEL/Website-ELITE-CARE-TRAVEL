/**
 * EXAMPLE: How to add translation to an existing page
 * 
 * This file demonstrates how to convert a regular page to support
 * automatic translation using the new multi-language system.
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";
import { useTranslate } from "../hooks/useTranslation";

// ============================================
// EXAMPLE 1: Simple Page with AutoTranslate
// ============================================
export function SimpleExample() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* All French text wrapped in AutoTranslate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <AutoTranslate as="h1" className="text-3xl font-bold text-[#05125d] text-center mb-6">
            CHIRURGIE ESTHÉTIQUE EN TUNISIE
          </AutoTranslate>
          
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            Elite Care Travel est spécialisée dans le tourisme médical en Tunisie.
            Nous vous accompagnons pour votre chirurgie esthétique.
          </AutoTranslate>
          
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed">
            Nos chirurgiens sont parmi les meilleurs de Tunisie.
          </AutoTranslate>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================
// EXAMPLE 2: Using useTranslate Hook
// ============================================
export function HookExample() {
  // Use the hook for dynamic text
  const title = useTranslate("Services de Chirurgie");
  const subtitle = useTranslate("Découvrez nos interventions");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#05125d] mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================
// EXAMPLE 3: Complex Page with Mixed Content
// ============================================
export function ComplexExample() {
  const buttonText = useTranslate("Demandez votre devis gratuit");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#05125d] to-[#0a1f7a] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AutoTranslate 
            as="h1" 
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Bienvenue chez Elite Care Travel
          </AutoTranslate>
          
          <AutoTranslate as="p" className="text-xl mb-8">
            Votre partenaire pour le tourisme médical en Tunisie
          </AutoTranslate>
          
          <button className="bg-[#cfb654] text-[#05125d] px-8 py-3 rounded-lg font-bold">
            {buttonText}
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AutoTranslate as="h2" className="text-3xl font-bold text-center mb-12 text-[#05125d]">
            NOS SERVICES
          </AutoTranslate>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AutoTranslate as="h3" className="text-xl font-semibold mb-4 text-[#05125d]">
                Chirurgie Esthétique
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700">
                Nous proposons une large gamme d'interventions de chirurgie esthétique
                réalisées par des chirurgiens qualifiés.
              </AutoTranslate>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AutoTranslate as="h3" className="text-xl font-semibold mb-4 text-[#05125d]">
                Chirurgie de l'Obésité
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700">
                Des solutions efficaces pour la perte de poids avec un suivi
                médical personnalisé.
              </AutoTranslate>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AutoTranslate as="h3" className="text-xl font-semibold mb-4 text-[#05125d]">
                Suivi Post-Opératoire
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700">
                Un accompagnement complet avant, pendant et après votre intervention
                chirurgicale.
              </AutoTranslate>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================
// EXAMPLE 4: List Items with Translation
// ============================================
export function ListExample() {
  const services = [
    "Chirurgie Esthétique",
    "Chirurgie de l'Obésité",
    "Chirurgie Orthopédique",
    "PEC Diabète et Pied Diabétique",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <AutoTranslate as="h2" className="text-3xl font-bold mb-8 text-[#05125d]">
            Nos Interventions
          </AutoTranslate>

          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-[#cfb654]">✓</span>
                <AutoTranslate className="text-lg text-gray-700">
                  {service}
                </AutoTranslate>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================
// NOTES:
// ============================================
/*
1. Keep all original text in French
2. Wrap text elements with <AutoTranslate>
3. Use useTranslate() hook for dynamic content
4. Translation happens automatically when user changes language
5. RTL is automatically applied for Arabic
6. Translations are cached for performance

BEFORE:
<h1 className="title">Mon Titre</h1>
<p>Mon texte</p>

AFTER:
<AutoTranslate as="h1" className="title">Mon Titre</AutoTranslate>
<AutoTranslate as="p">Mon texte</AutoTranslate>

OR:

const title = useTranslate("Mon Titre");
<h1 className="title">{title}</h1>
*/
