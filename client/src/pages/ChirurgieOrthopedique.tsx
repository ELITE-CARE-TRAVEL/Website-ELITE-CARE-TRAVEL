import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoTranslate from "../components/AutoTranslate";

export default function ChirurgieOrthopedique() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <AutoTranslate
            as="h1"
            className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CHIRURGIE ORTHOPÉDIQUE EN TUNISIE
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            Vous avez besoin d'une chirurgie du genou, d'une prothèse de hanche ou vous souffrez d'une hernie discale et vous recherchez une intervention rapide et qualifiée ?
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            Nous vous recommandons le tourisme médical pour la chirurgie orthopédique en Tunisie avec Elite Care Travel. Forte de son expérience et de ses partenariats, notre agence prend en charge la gestion complète de votre séjour médical pour la chirurgie orthopédique et traumatologique.
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
            En effet, nos chirurgiens orthopédiques tunisiens présentent un excellent taux de réussite et traitent tous types de chirurgie orthopédique : Prothèse genou, Prothèse hanche, Hallux Valgus, Canal Carpien et hernie discale.
          </AutoTranslate>
          <AutoTranslate as="p" className="text-gray-700 leading-relaxed">
            Pour toute éventuelle prise de rendez-vous ou demande d'information complémentaire concernant nos services et tarifs, contactez-nous directement par téléphone ou via le formulaire en ligne.
          </AutoTranslate>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prothèse Genou */}
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-4 tracking-wide text-gray-700 font-semibold">
                PROTHÈSE GENOU
              </AutoTranslate>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Sans-titre-2-1.png" 
                alt="Prothèse genou" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm mb-2">
                Il s'agit d'une intervention chirurgicale qui restaure la mobilité articulaire et qui assure la reprise des activités physiques dans les meilleures conditions.
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm">
                La prothèse du genou est généralement pratiquée en traitement à l'arthrose dont les causes sont diverses et variées.
              </AutoTranslate>
            </div>

            {/* Prothèse Hanche */}
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-4 tracking-wide text-gray-700 font-semibold">
                PROTHÈSE HANCHE
              </AutoTranslate>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Prothèse-hanche-1.png" 
                alt="Prothèse hanche" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm mb-2">
                Proposée aux personnes qui souffrent d'arthrose ou de polyarthrite rhumatoïde, la prothèse de la hanche peut également être mise en place suite à une nécrose de la tête fémorale ou à une fracture du col du fémur.
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm">
                Il s'agit d'une opération chirurgicale qui se pratique lorsque les douleurs deviennent insoutenables.
              </AutoTranslate>
            </div>

            {/* Hallux Valgus */}
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-4 tracking-wide text-gray-700 font-semibold">
                HALLUX VALGUS
              </AutoTranslate>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/download.jpeg" 
                alt="Hallux Valgus" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm mb-2">
                Également appelé oignon, l'hallux valgus est la déviation anormale du gros orteil vers le second et qui entraîne une déformation de l'avant-pied.
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm">
                Ce qui correspond à une saillie osseuse qui se voit être aggravée par la marche. L'hallux valgus corrige la déviation du gros orteil vers l'extérieur.
              </AutoTranslate>
            </div>

            {/* Hernie Discale */}
            <div className="text-center">
              <AutoTranslate as="h3" className="mb-4 tracking-wide text-gray-700 font-semibold">
                HERNIE DISCALE
              </AutoTranslate>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Syndrome-du-canal-carpien-1.png" 
                alt="Hernie discale" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm mb-2">
                Une hernie discale apparaît souvent au bas niveau du dos et constitue une cause fréquente de douleurs dorsales.
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed text-sm">
                Après vérification de la libération de la racine nerveuse, l'opération consiste à retirer la hernie discale.
              </AutoTranslate>
            </div>
          </div>
        </div>
      </section>

      {/* Syndrome du Canal Carpien */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <AutoTranslate
                as="h3"
                className="text-2xl font-semibold text-[#05125d] mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SYNDROME DU CANAL CARPIEN
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed mb-4">
                Le syndrome du canal carpien débute par des fourmillements dans la main, puis évolue vers la paralysie et s'aggrave avec l'âge.
              </AutoTranslate>
              <AutoTranslate as="p" className="text-gray-700 leading-relaxed">
                Il s'agit d'une compression du nerf médian qui passe dans le canal carpien, en association avec les tendons fléchisseurs des doigts.
              </AutoTranslate>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Hernie-discale-1.png" 
                alt="Syndrome du canal carpien" 
                className="mx-auto w-80 h-60 object-cover rounded" 
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
