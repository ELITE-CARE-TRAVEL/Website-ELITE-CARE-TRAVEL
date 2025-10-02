import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInterventionsOpen, setIsInterventionsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  return (
<nav className="border-gray-200 shadow-lg relative z-50" style={{ backgroundColor: '#05125d' }}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
      <img src="./src/assets/xx.png" className="h-16 w-auto transition-transform duration-200 group-hover:scale-105" alt="Logo" style={{ backgroundColor: 'transparent' }} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-200 group-hover:text-yellow-300" style={{ fontFamily: "'Cinzel Decorative', serif", color: '#cfb654' }}>Elite Care Travel</span>
  </a>
  <div className="flex items-center md:order-2 space-x-4">
      {/* Prendre un rendez-vous Button */}
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-6 py-3 rounded-full font-semibold text-sm hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Prendre un rendez-vous
      </Link>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#0a1f7a] focus:outline-none focus:ring-2 focus:ring-[#cfb654] transition-colors duration-200"
        aria-controls="navbar-menu"
        aria-expanded={isMobileOpen}
        onClick={() => setIsMobileOpen((v) => !v)}
      >
        <span className="sr-only">Ouvrir le menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
  </div>
  <div className={`${isMobileOpen ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-menu">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#cfb654] rounded-lg bg-gradient-to-r from-[#05125d]/95 to-[#0a1f7a]/95 backdrop-blur-sm md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent shadow-lg md:shadow-none">
      <li>
        <Link to="/" className="block py-3 px-4 text-white bg-gradient-to-r from-[#cfb654] to-[#b8a047] rounded-lg md:bg-gradient-to-r md:from-[#cfb654]/20 md:to-[#b8a047]/20 md:text-white md:p-3 hover:text-[#cfb654] hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-lg" aria-current="page">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Accueil
          </span>
        </Link>
      </li>
      <li className="relative">
        <button
          onClick={() => setIsGuideOpen(!isGuideOpen)}
          className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md w-full text-left"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Guide
            </span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${isGuideOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {/* Guide Dropdown */}
        {isGuideOpen && (
          <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-[#cfb654] z-[9999] md:left-0">
            <div className="p-4 space-y-1">
              <Link 
                to="/guide/notre-demarche" 
                className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsGuideOpen(false)}
              >
                <svg className="w-5 h-5 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold">Notre Démarche</div>
                  <div className="text-sm text-gray-600">Notre approche et nos valeurs</div>
                </div>
              </Link>
              
              <Link 
                to="/guide/nos-services" 
                className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsGuideOpen(false)}
              >
                <svg className="w-5 h-5 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <div className="font-semibold">Nos Services</div>
                  <div className="text-sm text-gray-600">Accompagnement complet</div>
                </div>
              </Link>
              
              <Link 
                to="/guide/nos-partenaires" 
                className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsGuideOpen(false)}
              >
                <svg className="w-5 h-5 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <div className="font-semibold">Nos Partenaires</div>
                  <div className="text-sm text-gray-600">Cliniques de prestige</div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </li>
      <li className="relative">
        <button
          onClick={() => setIsInterventionsOpen(!isInterventionsOpen)}
          className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md w-full text-left"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Interventions
            </span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${isInterventionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {/* Multi-level Dropdown */}
        {isInterventionsOpen && (
          <div className="absolute left-0 top-full mt-2 w-96 bg-white rounded-lg shadow-2xl border border-[#cfb654] z-[9999] md:left-0">

            <div className="p-4 space-y-1">
              {/* Chirurgie Esthétique */}
              <div className="group">
                <button
                  onClick={() => toggleCategory('esthetique')}
                  className="flex items-center justify-between w-full p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Chirurgie Esthétique
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategories['esthetique'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {expandedCategories['esthetique'] && (
                  <div className="ml-4 space-y-1 mt-2">
                    {/* Chirurgie Visage */}
                    <button
                      onClick={() => toggleCategory('visage')}
                      className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded cursor-pointer"
                    >
                      <span>Chirurgie Visage</span>
                      <svg className={`w-3 h-3 transition-transform duration-200 ${expandedCategories['visage'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {expandedCategories['visage'] && (
                      <div className="ml-4 space-y-1">
                        <Link to="/interventions/lifting-cervico-facial" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Lifting cervico facial</Link>
                        <Link to="/interventions/rhinoplastie" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Rhinoplastie</Link>
                        <Link to="/interventions/blepharoplastie" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Blépharoplastie</Link>
                      </div>
                    )}
                    
                    {/* Chirurgie Seins */}
                    <button
                      onClick={() => toggleCategory('seins')}
                      className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded cursor-pointer"
                    >
                      <span>Chirurgie Seins</span>
                      <svg className={`w-3 h-3 transition-transform duration-200 ${expandedCategories['seins'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {expandedCategories['seins'] && (
                      <div className="ml-4 space-y-1">
                        <Link to="/interventions/augmentation-mammaire" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">L'augmentation mammaire</Link>
                        <Link to="/interventions/lifting-seins" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Lifting des seins</Link>
                        <Link to="/interventions/reduction-mammaire" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Réduction mammaire</Link>
                      </div>
                    )}
                    
                    {/* Chirurgie Silhouette */}
                    <button
                      onClick={() => toggleCategory('silhouette')}
                      className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded cursor-pointer"
                    >
                      <span>Chirurgie Silhouette</span>
                      <svg className={`w-3 h-3 transition-transform duration-200 ${expandedCategories['silhouette'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {expandedCategories['silhouette'] && (
                      <div className="ml-4 space-y-1">
                        <Link to="/interventions/abdominoplastie" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Abdominoplastie</Link>
                        <Link to="/interventions/augmentation-fesses" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Augmentation des fesses</Link>
                        <Link to="/interventions/liposuccion" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Liposuccion</Link>
                        <Link to="/interventions/lifting-cuisses" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Lifting des cuisses</Link>
                        <Link to="/interventions/gynecomastie" className="block p-2 text-xs text-gray-600 hover:bg-[#cfb654]/10 rounded">Gynécomastie</Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Chirurgie de l'obésité */}
              <button
                onClick={() => toggleCategory('obesite')}
                className="flex items-center justify-between w-full p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Chirurgie de l'obésité
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategories['obesite'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedCategories['obesite'] && (
                <div className="ml-4 space-y-1">
                  <Link to="/interventions/anneau-gastrique" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Anneau Gastrique</Link>
                  <Link to="/interventions/sleeve" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Sleeve</Link>
                  <Link to="/interventions/bypass" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Bypass</Link>
                </div>
              )}

              {/* Chirurgie Cardio Vasculaire */}
              <button
                onClick={() => toggleCategory('cardio')}
                className="flex items-center justify-between w-full p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Chirurgie Cardio Vasculaire
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategories['cardio'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedCategories['cardio'] && (
                <div className="ml-4 space-y-1">
                  <Link to="/interventions/valves-cardiaques" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Chirurgie des Valves Cardiaques</Link>
                  <Link to="/interventions/minimale-invasive" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Chirurgie Minimale Invasive</Link>
                  <Link to="/interventions/chirurgie-aorte" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Chirurgie de l'aorte</Link>
                  <Link to="/interventions/chirurgie-coronaire" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Chirurgie Coronaire</Link>
                </div>
              )}

              {/* Chirurgie Orthopédique */}
              <button
                onClick={() => toggleCategory('orthopedique')}
                className="flex items-center justify-between w-full p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Chirurgie Orthopédique
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategories['orthopedique'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedCategories['orthopedique'] && (
                <div className="ml-4 space-y-1">
                  <Link to="/interventions/prothese-genou" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Prothèse Genou</Link>
                  <Link to="/interventions/prothese-hanche" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Prothèse Hanche</Link>
                  <Link to="/interventions/hallux-valgus" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Hallux Valgus</Link>
                  <Link to="/interventions/canal-carpien" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Syndrome du Canal Carpien</Link>
                  <Link to="/interventions/hernie-discale" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Hernie Discale</Link>
                </div>
              )}

              {/* Neurochirurgie */}
              <Link to="/interventions/neurochirurgie" className="flex items-center gap-2 p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg">
                <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Neurochirurgie
              </Link>

              {/* Traitement de l'infertilité */}
              <button
                onClick={() => toggleCategory('infertilite')}
                className="flex items-center justify-between w-full p-2 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#cfb654]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Traitement de l'infertilité
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategories['infertilite'] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedCategories['infertilite'] && (
                <div className="ml-4 space-y-1">
                  <Link to="/interventions/insemination-artificielle" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Insémination Artificielle</Link>
                  <Link to="/interventions/fiv" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Fécondation In Vitro</Link>
                  <Link to="/interventions/biopsie-testiculaire" className="block p-2 text-sm text-gray-700 hover:bg-[#cfb654]/10 rounded">Biopsie Testiculaire</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </li>
      <li>
        <Link to="/pricing" className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Tarifs
          </span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </span>
        </Link>
      </li>
    </ul>
    
    {/* Mobile Prendre un rendez-vous Button */}
    <div className="md:hidden mt-4 w-full">
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-6 py-3 rounded-lg font-semibold text-sm hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition-all duration-300 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Prendre un rendez-vous
      </Link>
    </div>
  </div>
  </div>
</nav>
  );
}
