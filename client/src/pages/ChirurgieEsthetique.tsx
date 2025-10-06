import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChirurgieEsthetique() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE ESTHÉTIQUE EN TUNISIE AVEC Elite Care Travel : VISAGE, SEINS ET SILHOUETTE
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Découvrez ci-dessous les différentes <strong>chirurgies esthétiques</strong> prises en charge par votre
            agence de tourisme médical en Tunisie pour <strong>chirurgies plastiques et réparatrices</strong> : Elite Care Travel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Merci de nous contacter directement par téléphone ou via le <strong>formulaire en ligne</strong> pour toute
            demande de complément d’information.
          </p>
        </div>
      </section>

      {/* Visage */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE ESTHÉTIQUE DU VISAGE
          </h2>

          {/* Lifting Visage */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/lifting-visage-1.jpg"
              alt="Lifting visage"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">LIFTING VISAGE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Technique de rajeunissement du visage, le <strong>lifting du visage</strong> permet de corriger le
              relâchement de la peau et des muscles du visage et du cou.
            </p>
          </div>

          {/* Blépharoplastie */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/blépharoplastie.jpg"
              alt="Blépharoplastie"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">BLÉPHAROPLASTIE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Traitant les 2 paupières inférieures ou supérieures, la <strong>blépharoplastie</strong> supprime les
              excès cutanés et musculaires ainsi que les <strong>masses graisseuses</strong> des paupières.
            </p>
          </div>

          {/* Rhinoplastie */}
          <div className="mb-6 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/rhinoplastie-1.jpg"
              alt="Rhinoplastie"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">RHINOPLASTIE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              La <strong>rhinoplastie</strong> est une intervention esthétique pratiquée en ayant pour but de modifier la
              <strong> morphologie du nez</strong> et de mettre fin aux difficultés respiratoires liées à certaines anomalies.
            </p>
          </div>
        </div>
      </section>

      {/* Seins */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE ESTHÉTIQUE DES SEINS
          </h2>

          {/* Augmentation mammaire */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/augmentation-mammaire.jpg"
              alt="Augmentation mammaire"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">AUGMENTATION MAMMAIRE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              L’<strong>augmentation mammaire</strong> est l’intervention de chirurgie esthétique ou réparatrice visant
              l’augmentation du volume des seins.
            </p>
          </div>

          {/* Lifting mammaire */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/lifting-mammaire.jpg"
              alt="Lifting mammaire"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">LIFTING MAMMAIRE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Le <strong>lifting mammaire</strong> est l’intervention visant à corriger l’affaissement de la poitrine et
              la distension de la peau qui l’enveloppe.
            </p>
          </div>

          {/* Réduction mammaire */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/reduction-mammaire-1.jpg"
              alt="Réduction mammaire"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">RÉDUCTION MAMMAIRE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              La <strong>réduction des seins</strong> est l’intervention visant à corriger l’<strong>hypertrophie
              mammaire</strong> afin d’obtenir un volume harmonieux et confortable.
            </p>
          </div>

          {/* Gynécomastie */}
          <div className="mb-6 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/gynécomastie.jpg"
              alt="Gynécomastie"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">GYNÉCOMASTIE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              L’opération <strong>gynécoplastie</strong> chez l’homme est une technique chirurgicale esthétique visant la
              réduction de la glande mammaire.
            </p>
          </div>
        </div>
      </section>

      {/* Silhouette */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#05125d] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE ESTHÉTIQUE DE LA SILHOUETTE
          </h2>

          {/* Liposuccion */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/liposuccion-1.jpg"
              alt="Liposuccion"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">LIPOSUCCION</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              La <strong>liposuccion</strong> consiste à supprimer les surcharges graisseuses localisées grâce à
              l’aspiration, pour redessiner harmonieusement la silhouette.
            </p>
          </div>

          {/* Abdominoplastie */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/abdominoplastie-2.jpg"
              alt="Abdominoplastie"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">ABDOMINOPLASTIE</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Intervention réparatrice du ventre visant à traiter la surcharge graisseuse, le relâchement cutané et à
              raffermir la paroi musculaire.
            </p>
          </div>

          {/* Augmentation des fesses */}
          <div className="mb-12 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/augmentation-des-fesses.jpg"
              alt="Augmentation des fesses"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">AUGMENTATION DES FESSES</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Réalisée par implants fessiers ou lipofilling, elle augmente le volume et améliore la forme des fesses.
            </p>
          </div>

          {/* Lifting des cuisses/bras */}
          <div className="mb-6 text-center">
            <img
              src="/src/assets/Interventions/Chirurgie Esthétique/lifting-des-cuisses.jpg"
              alt="Lifting des cuisses et des bras"
              className="mx-auto w-72 h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg tracking-wide text-gray-700 font-semibold">LIFTING DES CUISSES/BRAS</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Comme son nom l’indique, le <strong>lifting des bras et des cuisses</strong> supprime le relâchement de la
              peau et améliore le galbe des membres.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


