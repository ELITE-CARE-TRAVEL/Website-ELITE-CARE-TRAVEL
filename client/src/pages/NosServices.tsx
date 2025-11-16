import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BriefcaseIcon,
  UsersIcon,
  TruckIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type ServiceDetail = {
  intro: string;
  services: string[];
};

type Service = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  details: ServiceDetail;
};

const services: Service[] = [
  {
    name: "Prise en charge VIP et personnalisée",
    icon: BriefcaseIcon,
    description:
      "Diagnostic complet, devis estimatif et organisation sur-mesure de votre séjour médical.",
    details: {
      intro:
        "Une fois votre dossier validé par notre médecin conseil, le Dr Yasmine Gharsa, en collaboration avec nos spécialistes, vous remettra un diagnostic complet et détaillé.",
      services: [
        "Analyse complète de votre dossier médical",
        "Recommandation du type de prise en charge adapté",
        "Devis estimatif clair et transparent",
        "Organisation sur-mesure de votre séjour médical",
        "Liste des examens préopératoires indispensables avec explications détaillées",
      ],
    },
  },
  {
    name: "Accueil prestigieux dès votre arrivée",
    icon: UsersIcon,
    description:
      "Accueil personnalisé à l’aéroport et prise en charge des formalités pour une arrivée sereine.",
    details: {
      intro:
        "À l’aéroport de Tunis-Carthage, un représentant Elite Care Travel vous attendra avec une pancarte à votre nom pour un accueil entièrement personnalisé.",
      services: [
        "Accueil VIP à l’aéroport de Tunis-Carthage",
        "Assistance pour toutes les formalités aux services frontaliers",
        "Organisation d’un transfert privé en véhicule haut de gamme",
        "Accompagnement jusqu’à votre hôtel",
        "Arrivée sereine, confortable et élégante",
      ],
    },
  },
  {
    name: "Transferts privés d’exception",
    icon: TruckIcon,
    description:
      "Déplacements organisés en véhicule haut de gamme avec chauffeur privé, élégance et discrétion.",
    details: {
      intro:
        "Pour votre confort et votre tranquillité, Elite Care Travel organise l’intégralité de vos déplacements durant votre séjour médical.",
      services: [
        "Transferts privés entre l’aéroport, la clinique et l’hôtel",
        "Chauffeur privé dédié pendant vos déplacements médicaux",
        "Véhicules haut de gamme pour un confort optimal",
        "Service discret, élégant et ponctuel",
        "Organisation flexible selon votre planning médical",
      ],
    },
  },
  {
    name: "Séjour en Tunisie",
    icon: BuildingOfficeIcon,
    description:
      "Organisation complète de votre hébergement pour un séjour serein, raffiné et sécurisé.",
    details: {
      intro:
        "Notre équipe organise et supervise chaque détail de votre hébergement, pour un confort et un bien-être absolus tout au long de votre séjour.",
      services: [
        "Réservation et gestion de votre hébergement",
        "Prise en charge des formalités administratives d’arrivée et de départ",
        "Environnement raffiné, sécurisé et propice à la convalescence",
        "Accompagnement attentif pendant toute la durée de votre séjour",
        "Organisation d’un cadre de détente pour favoriser votre récupération",
      ],
    },
  },
  {
    name: "Hospitalisation",
    icon: ClipboardDocumentCheckIcon,
    description:
      "Prise en charge complète à la clinique, de l’admission au retour à l’hôtel après l’intervention.",
    details: {
      intro:
        "À la clinique, nous prenons en charge toutes les formalités d’admission pour que vous puissiez vous concentrer uniquement sur votre santé.",
      services: [
        "Gestion des formalités d’admission à la clinique",
        "Consultation préopératoire avec le chirurgien et l’anesthésiste",
        "Accompagnement tout au long du parcours hospitalier",
        "Transfert vers l’hôtel après l’intervention pour un repos optimal",
        "Coordination avec l’équipe soignante pour un suivi fluide",
      ],
    },
  },
  {
    name: "Votre suivi médical, notre priorité",
    icon: HeartIcon,
    description:
      "Accompagnement continu avant, pendant et après l’intervention pour un rétablissement en toute sérénité.",
    details: {
      intro:
        "Dès votre arrivée et tout au long de votre séjour, nous vous accompagnons à chaque étape pour garantir votre sécurité et votre confort.",
      services: [
        "Suivi avant l’intervention (consultations et préparation)",
        "Accompagnement pendant votre séjour en clinique",
        "Organisation et suivi de la convalescence",
        "Réponses à toutes vos questions avant et après votre retour",
        "Suivi à distance de l’évolution de votre rétablissement",
      ],
    },
  },
];

export default function NosServices() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-24 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[#cfb654]/20 rounded-full opacity-40 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#05125d]/10 rounded-full opacity-30 blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm md:text-base font-semibold tracking-wider mb-3 uppercase text-[#cfb654]">
              Parcours médical d’exception
            </h2>
            <h3
              className="text-4xl md:text-5xl font-bold text-[#05125d] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nos Services
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cfb654] to-[#b8a047] mx-auto mb-6" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              De votre première consultation jusqu’à votre retour, Elite Care Travel s’assure que votre
              parcours médical en Tunisie se déroule dans un climat de confiance, grâce à des experts
              médicaux, un suivi personnalisé et une tranquillité garantie.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="flex flex-col items-start h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#cfb654] to-[#b8a047] rounded-xl flex items-center justify-center mb-6 group-hover:from-[#05125d] group-hover:to-[#0a1f7a] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4
                      className="text-2xl font-bold mb-4 text-[#05125d] group-hover:text-[#cfb654] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {service.name}
                    </h4>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Suivre Plus Button */}
                    <button
                      onClick={() => setSelectedService(index)}
                      className="mt-6 text-[#cfb654] font-semibold hover:text-[#05125d] transition-colors duration-300 flex items-center gap-2 group/btn"
                    >
                      <span>Suivre plus</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Overlay */}
        {selectedService !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            {/* Blurred Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal Content */}
            <div
              className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#cfb654] to-[#b8a047] p-6 relative">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    {(() => {
                      const Icon = services[selectedService].icon;
                      return <Icon className="w-9 h-9 text-[#cfb654]" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {services[selectedService].name}
                    </h3>
                    <p className="text-[#f4e7b3] mt-1">
                      {services[selectedService].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto max-h-[calc(85vh-180px)]">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#05125d] mb-3">Détail du service</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {services[selectedService].details.intro}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#05125d] mb-4">Ce qui est inclus</h4>
                  <ul className="space-y-4">
                    {services[selectedService].details.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#fff7e0] transition-colors duration-200"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-[#cfb654] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
