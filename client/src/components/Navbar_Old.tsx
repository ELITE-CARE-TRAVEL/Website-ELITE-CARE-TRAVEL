import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/xx.png";
import LanguageSwitcher from './LanguageSwitcher';
import AutoTranslate from './AutoTranslate';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isInterventionsOpen, setIsInterventionsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <nav className="border-gray-200 shadow-lg relative z-50" style={{ backgroundColor: '#05125d' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <img src={logo} className="h-16 w-auto transition-transform duration-200 group-hover:scale-105" alt="Logo" style={{ backgroundColor: 'transparent' }} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-200 group-hover:text-yellow-300" style={{ fontFamily: "'Cinzel Decorative', serif", color: '#cfb654' }}>Elite Care Travel</span>
        </a>
        <div className="flex items-center md:order-2 space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Prendre un rendez-vous Button -> WhatsApp (Desktop) */}
          <a
            href="https://wa.me/21624591519?text=I%20want%20more%20details"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir WhatsApp pour prendre un rendez-vous"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-6 py-3 rounded-full font-semibold text-sm hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <AutoTranslate>Prendre un rendez-vous</AutoTranslate>
          </a>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition"
            aria-label="Ouvrir le menu"
            aria-controls="navbar-menu"
            aria-expanded={isMobileOpen}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Backdrop */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Menu container: slide-in panel on mobile, inline on desktop */}
        <div
          className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-gradient-to-b from-[#05125d] to-[#0a1f7a] md:bg-transparent border-l border-white/10 md:border-0 shadow-2xl md:shadow-none transform transition-transform duration-300 md:transform-none md:static md:w-auto md:order-1 z-50 md:z-auto ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
          id="navbar-menu"
        >
          {/* Mobile panel header */}
          <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img src={logo} className="h-8 w-auto" alt="Logo" />
              <span className="text-white font-semibold">Elite Care Travel</span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Fermer le menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 md:mt-0 border-t md:border-0 border-white/10 md:border-none bg-transparent md:bg-transparent md:space-x-2 rtl:space-x-reverse md:flex-row">
            <li>
              <Link to="/" className="block py-3 px-4 text-white bg-gradient-to-r from-[#cfb654] to-[#b8a047] rounded-lg md:bg-gradient-to-r md:from-[#cfb654]/20 md:to-[#b8a047]/20 md:text-white md:p-3 hover:text-[#cfb654] hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-lg" aria-current="page">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <AutoTranslate>Accueil</AutoTranslate>
                </span>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => isDesktop && setIsGuideOpen(true)}
              onMouseLeave={() => isDesktop && setIsGuideOpen(false)}
            >
              <button
                onClick={() => setIsGuideOpen(!isGuideOpen)}
                className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md w-full text-left"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <AutoTranslate>Guide</AutoTranslate>
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isGuideOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {/* Hover bridge to prevent gap between trigger and dropdown (desktop only) */}
              {isDesktop && (
                <div
                  className="hidden md:block absolute left-0 right-0 top-full h-4"
                  onMouseEnter={() => setIsGuideOpen(true)}
                />
              )}
              
              {/* Guide Dropdown */}
              {isGuideOpen && (
                <div
                  className="md:absolute md:left-0 md:top-full md:mt-0 md:pt-2 w-full md:w-80 bg-white rounded-lg shadow-2xl border border-[#cfb654] z-[9999]"
                  onMouseEnter={() => isDesktop && setIsGuideOpen(true)}
                  onMouseLeave={() => isDesktop && setIsGuideOpen(false)}
                >
                  <div className="p-4 space-y-1">
                    <Link 
                      to="/guide/notre-demarche" 
                      className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                      onClick={() => setIsGuideOpen(false)}
                    >
                      <div>
                        <AutoTranslate as="div" className="font-semibold">Notre Démarche</AutoTranslate>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/guide/nos-services" 
                      className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                      onClick={() => setIsGuideOpen(false)}
                    >
                      <div>
                        <AutoTranslate as="div" className="font-semibold">Nos Services</AutoTranslate>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/guide/nos-partenaires" 
                      className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200"
                      onClick={() => setIsGuideOpen(false)}
                    >
                      <div>
                        <AutoTranslate as="div" className="font-semibold">Nos Partenaires</AutoTranslate>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setIsInterventionsOpen(v => !v)}
                className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md w-full text-left"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <AutoTranslate>Interventions</AutoTranslate>
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isInterventionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {/* Hover bridge to prevent gap between trigger and dropdown (desktop only) */}
              {isDesktop && (
                <div
                  className="hidden md:block absolute left-0 right-0 top-full h-4"
                  onMouseEnter={() => setIsInterventionsOpen(true)}
                />
              )}
              
              {/* Simple Dropdown with 6 Categories */}
              {isInterventionsOpen && (
                <div 
                  className="md:absolute md:left-0 md:top-full md:mt-0 md:pt-2 w-full md:w-80 bg-white rounded-lg shadow-2xl border border-[#cfb654] z-[9999] md:ml-[-1px]"
                  onMouseEnter={() => isDesktop && setIsInterventionsOpen(true)}
                  onMouseLeave={() => isDesktop && setIsInterventionsOpen(false)}
                >
                <div className="p-4 space-y-2">
                  <Link to="/interventions/chirurgie-esthetique" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">Chirurgie Esthétique</AutoTranslate>
                    </div>
                  </Link>
                  
                  <Link to="/interventions/chirurgie-obesite" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">Chirurgie de l'obésité</AutoTranslate>
                      </div>
                  </Link>
                  
                  <Link to="/interventions/chirurgie-orthopedique" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">Chirurgie Orthopédique</AutoTranslate>
                      </div>
                  </Link>
                  
                  <Link to="/interventions/pied-diabetique" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">PEC diabète et Pied diabétique</AutoTranslate>
                      </div>
                  </Link>

                  <Link to="/interventions/ophthalmologie" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">Ophthalmologie</AutoTranslate>
                      </div>
                    </Link>

                  <Link to="/interventions/gynecologie" onClick={() => setIsInterventionsOpen(false)} className="flex items-center gap-3 p-3 text-[#05125d] font-semibold hover:bg-[#cfb654]/10 rounded-lg transition-colors duration-200">
                    <div>
                      <AutoTranslate as="div" className="font-semibold">Gynécologie</AutoTranslate>
                      </div>
                  </Link>
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
                  <AutoTranslate>Tarifs</AutoTranslate>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-3 px-4 md:p-3 text-white rounded-lg bg-gradient-to-r from-[#05125d]/10 to-[#0a1f7a]/10 hover:bg-gradient-to-r hover:from-[#cfb654] hover:to-[#b8a047] hover:text-white md:bg-gradient-to-r md:from-[#05125d]/5 md:to-[#0a1f7a]/5 md:text-white md:hover:bg-gradient-to-r md:hover:from-[#cfb654] md:hover:to-[#b8a047] transition-all duration-300 font-semibold shadow-sm hover:shadow-md">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <AutoTranslate>Contact</AutoTranslate>
                </span>
              </Link>
            </li>
          </ul>
          {/* Mobile Prendre un rendez-vous Button */}
          <div className="md:hidden mt-4 w-full">
            <a
              href="https://wa.me/21624591519?text=Bonjour%20Elite%20Care%20Travel%2C%20je%20souhaite%20prendre%20un%20rendez-vous."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-6 py-3 rounded-lg font-semibold text-sm hover:from-[#b8a047] hover:to-[#a68f3f] hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Ouvrir WhatsApp pour prendre un rendez-vous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <AutoTranslate>Prendre un rendez-vous</AutoTranslate>
            </a>
          </div>
          </div>
      </div>
    </nav>
  );
}
