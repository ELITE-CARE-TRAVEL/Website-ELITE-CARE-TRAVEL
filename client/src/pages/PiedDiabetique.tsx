import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PiedDiabetique() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            PEC DIABÈTE ET PIED DIABÉTIQUE EN TUNISIE AVEC Elite Care Travel
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spécialisée dans le <strong>voyage médical</strong> à l'étranger, votre agence de tourisme médical, Elite Care Travel,
            vous confie aux soins des <strong>meilleurs spécialistes</strong> tunisiens en <strong>prise en charge du diabète</strong> et
            du <strong>pied diabétique</strong>. Nos équipes médicales sont spécialisées dans la <strong>prévention</strong>, le 
            <strong> traitement</strong> et la <strong>chirurgie du pied diabétique</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En effet, nos <strong>chirurgiens spécialisés</strong> vous font bénéficier de leur expertise et de leur parfaite connaissance
            dans le domaine de la <strong>prise en charge diabétique</strong>. Nous vous proposons des <strong>soins médicaux</strong> de qualité
            dans les meilleures cliniques tunisiennes tout en vous permettant d'<strong>économiser vos dépenses</strong> de santé.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le <strong>pied diabétique</strong> est une complication grave du diabète nécessitant une <strong>prise en charge multidisciplinaire</strong>.
            Nos équipes médicales assurent le <strong>diagnostic précoce</strong>, le <strong>traitement médical</strong> et la 
            <strong> chirurgie reconstructrice</strong> si nécessaire pour préserver la fonction du pied et éviter l'amputation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Elite Care Travel vous garantit une <strong>prise en charge complète</strong> de votre séjour médical en Tunisie avec un 
            <strong> suivi personnalisé</strong> avant, pendant et après votre intervention.
          </p>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            PRISE EN CHARGE COMPLÈTE DU DIABÈTE ET DU PIED DIABÉTIQUE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">DIAGNOSTIC ET PRÉVENTION</h3>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60" 
                alt="Diagnostic et prévention du pied diabétique" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Elite Care Travel propose un <strong>bilan complet</strong> avec évaluation vasculaire, neurologique et dermatologique.
                Dépistage précoce des <strong>neuropathies diabétiques</strong> et de l'<strong>artériopathie</strong> pour prévenir
                les complications du pied diabétique.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">TRAITEMENT DES PLAIES</h3>
              <img 
                src="https://media.istockphoto.com/id/1372714754/photo/doctor-hand-touches-and-examines-wound-on-leg.jpg?s=612x612&w=0&k=20&c=KJ5aibJbeykg5_5U3rBuqHLgUpTp69tLTUozOWn-qh8=" 
                alt="Traitement des plaies diabétiques" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Prise en charge spécialisée des <strong>ulcères diabétiques</strong> avec protocoles de <strong>cicatrisation avancée</strong>,
                débridement chirurgical et <strong>thérapies par pression négative</strong> pour accélérer la guérison des plaies chroniques.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">CHIRURGIE RECONSTRUCTRICE</h3>
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=60" 
                alt="Chirurgie reconstructrice du pied" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Nos chirurgiens spécialisés pratiquent la <strong>chirurgie de sauvetage du pied</strong>, les <strong>ostéotomies</strong>,
                la <strong>correction des déformations</strong> et les <strong>lambeaux de couverture</strong> pour préserver au maximum
                la fonction du membre.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">SUIVI POST-OPÉRATOIRE</h3>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=60" 
                alt="Suivi post-opératoire pied diabétique" 
                className="mx-auto w-48 h-36 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm">
                Elite Care Travel assure un <strong>suivi médical rigoureux</strong> avec éducation thérapeutique, adaptation du 
                <strong> traitement antidiabétique</strong>, prescription de <strong>chaussures orthopédiques</strong> et prévention
                des récidives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 leading-relaxed mb-8">
            Pour toute éventuelle prise de rendez-vous ou demande d'information complémentaire, contactez-nous directement par téléphone
            ou via le <strong>formulaire en ligne</strong>. Nous sommes à votre entière disposition pour répondre à toutes vos questions
            concernant la <strong>prise en charge du diabète</strong> et du <strong>pied diabétique</strong> en Tunisie.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
