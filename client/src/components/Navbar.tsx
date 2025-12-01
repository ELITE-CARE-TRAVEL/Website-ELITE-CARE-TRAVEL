import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/xx.png";
import LanguageSwitcher from './LanguageSwitcher';
import AutoTranslate from './AutoTranslate';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isInterventionsOpen, setIsInterventionsOpen] = useState(false);
  const [isTarifsOpen, setIsTarifsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#05125d]/95 backdrop-blur-lg shadow-2xl' : 'bg-gradient-to-r from-[#05125d] via-[#06146a] to-[#05125d] shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#cfb654] rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={logo} 
                  className="h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110" 
                  alt="Elite Care Travel" 
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-bold text-[#cfb654] group-hover:text-[#d4c164] transition-colors" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  Elite Care Travel
                </span>
              </div>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <a
                href= "/contact" 
                className="flex items-center gap-2 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-[#cfb654]/50 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <AutoTranslate>Rendez-vous</AutoTranslate>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-[#cfb654]/10 hover:bg-[#cfb654]/20 text-[#cfb654] transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block border-t border-[#cfb654]/10">
            <div className="flex items-center justify-center space-x-1 py-3">
              <Link to="/" className="px-4 py-2 text-sm font-semibold text-white hover:text-[#cfb654] hover:bg-white/5 rounded-lg transition-all">
                <AutoTranslate>Accueil</AutoTranslate>
              </Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsGuideOpen(true)}
                onMouseLeave={() => setIsGuideOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-semibold text-white hover:text-[#cfb654] hover:bg-white/5 rounded-lg transition-all flex items-center gap-1">
                  <AutoTranslate>Guide</AutoTranslate>
                  <svg className={`w-4 h-4 transition-transform ${isGuideOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Hover bridge to prevent gap */}
                {isGuideOpen && (
                  <div className="absolute left-0 right-0 top-full h-2" />
                )}
                {isGuideOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                    <Link to="/guide/notre-demarche" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsGuideOpen(false)}>
                      <AutoTranslate>Notre Démarche</AutoTranslate>
                    </Link>
                    <Link to="/guide/nos-services" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsGuideOpen(false)}>
                      <AutoTranslate>Nos Services</AutoTranslate>
                    </Link>
                    <Link to="/guide/nos-partenaires" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsGuideOpen(false)}>
                      <AutoTranslate>Nos Partenaires</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setIsInterventionsOpen(true)}
                onMouseLeave={() => setIsInterventionsOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-semibold text-white hover:text-[#cfb654] hover:bg-white/5 rounded-lg transition-all flex items-center gap-1">
                  <AutoTranslate>Interventions</AutoTranslate>
                  <svg className={`w-4 h-4 transition-transform ${isInterventionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Hover bridge to prevent gap */}
                {isInterventionsOpen && (
                  <div className="absolute left-0 right-0 top-full h-2" />
                )}
                {isInterventionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 max-h-96 overflow-y-auto">
                    <Link to="/interventions/chirurgie-esthetique" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>Chirurgie Esthétique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/chirurgie-obesite" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>Chirurgie de l'obésité</AutoTranslate>
                    </Link>
                    <Link to="/interventions/chirurgie-orthopedique" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>Chirurgie Orthopédique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/pied-diabetique" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>PEC diabète et Pied diabétique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/ophthalmologie" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>Ophthalmologie</AutoTranslate>
                    </Link>
                    <Link to="/interventions/gynecologie" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsInterventionsOpen(false)}>
                      <AutoTranslate>Gynécologie</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setIsTarifsOpen(true)}
                onMouseLeave={() => setIsTarifsOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-semibold text-white hover:text-[#cfb654] hover:bg-white/5 rounded-lg transition-all flex items-center gap-1">
                  <AutoTranslate>Tarifs</AutoTranslate>
                  <svg className={`w-4 h-4 transition-transform ${isTarifsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isTarifsOpen && (
                  <div className="absolute left-0 right-0 top-full h-2" />
                )}
                {isTarifsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 max-h-96 overflow-y-auto">
                    <Link to="/pricing#chirurgie-visage" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Chirurgie du Visage</AutoTranslate>
                    </Link>
                    <Link to="/pricing#chirurgie-seins" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Chirurgie Esthétique des Seins</AutoTranslate>
                    </Link>
                    <Link to="/pricing#corps-silhouette" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Corps et Silhouette</AutoTranslate>
                    </Link>
                    <Link to="/pricing#liposuccion" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Liposuccion</AutoTranslate>
                    </Link>
                    <Link to="/pricing#interventions-combinees" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Interventions Combinées</AutoTranslate>
                    </Link>
                    <Link to="/pricing#tarifs-hommes" className="block px-4 py-2.5 text-sm text-[#05125d] hover:bg-[#cfb654]/10 font-medium" onClick={() => setIsTarifsOpen(false)}>
                      <AutoTranslate>Tarifs Hommes</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="px-4 py-2 text-sm font-semibold text-white hover:text-[#cfb654] hover:bg-white/5 rounded-lg transition-all">
                <AutoTranslate>Contact</AutoTranslate>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-32"></div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-gradient-to-b from-[#05125d] to-[#0a1f7a] z-50 shadow-2xl overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#cfb654]/20">
              <div className="flex items-center gap-2">
                <img src={logo} className="h-10 w-auto" alt="Logo" />
                <span className="text-[#cfb654] font-bold">Elite Care Travel</span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="p-4 border-b border-[#cfb654]/10">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-white bg-[#cfb654]/20 rounded-lg font-semibold hover:bg-[#cfb654]/30 transition"
              >
                <AutoTranslate>Accueil</AutoTranslate>
              </Link>

              <div>
                <button
                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white rounded-lg font-semibold hover:bg-white/5 transition"
                >
                  <AutoTranslate>Guide</AutoTranslate>
                  <svg className={`w-5 h-5 transition-transform ${isGuideOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isGuideOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link to="/guide/notre-demarche" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Notre Démarche</AutoTranslate>
                    </Link>
                    <Link to="/guide/nos-services" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Nos Services</AutoTranslate>
                    </Link>
                    <Link to="/guide/nos-partenaires" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Nos Partenaires</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsInterventionsOpen(!isInterventionsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white rounded-lg font-semibold hover:bg-white/5 transition"
                >
                  <AutoTranslate>Interventions</AutoTranslate>
                  <svg className={`w-5 h-5 transition-transform ${isInterventionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isInterventionsOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link to="/interventions/chirurgie-esthetique" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Chirurgie Esthétique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/chirurgie-obesite" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Chirurgie de l'obésité</AutoTranslate>
                    </Link>
                    <Link to="/interventions/chirurgie-orthopedique" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Chirurgie Orthopédique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/pied-diabetique" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>PEC diabète et Pied diabétique</AutoTranslate>
                    </Link>
                    <Link to="/interventions/ophthalmologie" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Ophthalmologie</AutoTranslate>
                    </Link>
                    <Link to="/interventions/gynecologie" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Gynécologie</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsTarifsOpen(!isTarifsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white rounded-lg font-semibold hover:bg-white/5 transition"
                >
                  <AutoTranslate>Tarifs</AutoTranslate>
                  <svg className={`w-5 h-5 transition-transform ${isTarifsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isTarifsOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link to="/pricing#chirurgie-visage" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Chirurgie du Visage</AutoTranslate>
                    </Link>
                    <Link to="/pricing#chirurgie-seins" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Chirurgie Esthétique des Seins</AutoTranslate>
                    </Link>
                    <Link to="/pricing#corps-silhouette" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Corps et Silhouette</AutoTranslate>
                    </Link>
                    <Link to="/pricing#liposuccion" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Liposuccion</AutoTranslate>
                    </Link>
                    <Link to="/pricing#interventions-combinees" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Interventions Combinées</AutoTranslate>
                    </Link>
                    <Link to="/pricing#tarifs-hommes" onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-sm text-[#cfb654] hover:bg-white/5 rounded">
                      <AutoTranslate>Tarifs Hommes</AutoTranslate>
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-white rounded-lg font-semibold hover:bg-white/5 transition"
              >
                <AutoTranslate>Contact</AutoTranslate>
              </Link>

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/21624591519?text=I%20want%20more%20details"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-[#cfb654] to-[#b8a047] text-[#05125d] px-6 py-3 rounded-full font-bold shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <AutoTranslate>Prendre Rendez-vous</AutoTranslate>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
