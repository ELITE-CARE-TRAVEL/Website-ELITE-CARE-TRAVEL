import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChirurgieOrthopedique() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05125d] text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CHIRURGIE ORTHOPÉDIQUE EN TUNISIE
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vous avez besoin d'une <strong>chirurgie du genou</strong>, d'une <strong>prothèse de hanche</strong> ou vous souffrez
            d'une <strong>hernie discale</strong> et vous recherchez une intervention rapide et qualifiée ?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous vous recommandons le <strong>tourisme médical</strong> pour la chirurgie orthopédique en Tunisie avec
            <strong> Elite Care Travel</strong>. Forte de son expérience et de ses partenariats, notre agence prend en charge
            la gestion complète de votre <strong>séjour médical</strong> pour la chirurgie orthopédique et traumatologique.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En effet, nos <strong>chirurgiens orthopédiques tunisiens</strong> présentent un excellent taux de réussite
            et traitent tous types de chirurgie orthopédique : <strong>Prothèse genou</strong>, <strong>Prothèse hanche</strong>,
            <strong> Hallux Valgus</strong>, <strong>Canal Carpien</strong> et <strong>hernie discale</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour toute éventuelle prise de rendez-vous ou demande d'information complémentaire concernant nos services et tarifs,
            contactez-nous directement par téléphone ou via le <strong>formulaire en ligne</strong>.
          </p>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prothèse Genou */}
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">PROTHÈSE GENOU</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Sans-titre-2-1.png" 
                alt="Prothèse genou" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm mb-2">
                Il s'agit d'une intervention chirurgicale qui <strong>restaure la mobilité articulaire</strong> et qui assure
                la reprise des activités physiques dans les meilleures conditions.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                La <strong>prothèse du genou</strong> est généralement pratiquée en traitement à l'arthrose dont les causes
                sont diverses et variées.
              </p>
            </div>

            {/* Prothèse Hanche */}
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">PROTHÈSE HANCHE</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Prothèse-hanche-1.png" 
                alt="Prothèse hanche" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm mb-2">
                Proposée aux personnes qui souffrent d'<strong>arthrose</strong> ou de <strong>polyarthrite rhumatoïde</strong>,
                la prothèse de la hanche peut également être mise en place suite à une <strong>nécrose de la tête fémorale</strong>
                ou à une <strong>fracture du col du fémur</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Il s'agit d'une opération chirurgicale qui se pratique lorsque les <strong>douleurs deviennent insoutenables</strong>.
              </p>
            </div>

            {/* Hallux Valgus */}
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">HALLUX VALGUS</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/download.jpeg" 
                alt="Hallux Valgus" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm mb-2">
                Également appelé <strong>oignon</strong>, l'hallux valgus est la <strong>déviation anormale du gros orteil</strong>
                vers le second et qui entraîne une déformation de l'avant-pied.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Ce qui correspond à une <strong>saillie osseuse</strong> qui se voit être aggravée par la marche. L'hallux valgus
                corrige la <strong>déviation du gros orteil vers l'extérieur</strong>.
              </p>
            </div>

            {/* Hernie Discale */}
            <div className="text-center">
              <h3 className="mb-4 tracking-wide text-gray-700 font-semibold">HERNIE DISCALE</h3>
              <img 
                src="/src/assets/Interventions/Chirurgie Orthopédique/Syndrome-du-canal-carpien-1.png" 
                alt="Hernie discale" 
                className="mx-auto w-64 h-48 object-cover rounded mb-4" 
              />
              <p className="text-gray-700 leading-relaxed text-sm mb-2">
                Une <strong>hernie discale</strong> apparaît souvent au <strong>bas niveau du dos</strong> et constitue
                une cause fréquente de <strong>douleurs dorsales</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Après vérification de la <strong>libération de la racine nerveuse</strong>, l'opération consiste à retirer
                la <strong>hernie discale</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syndrome du Canal Carpien */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#05125d] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                SYNDROME DU CANAL CARPIEN
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le syndrome du canal carpien débute par des <strong>fourmillements dans la main</strong>, puis évolue vers
                la <strong>paralysie</strong> et s'aggrave avec l'âge.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il s'agit d'une <strong>compression du nerf médian</strong> qui passe dans le canal carpien, en association
                avec les <strong>tendons fléchisseurs des doigts</strong>.
              </p>
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
