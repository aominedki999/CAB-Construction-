import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import QuoteForm from "@/components/QuoteForm";

/**
 * Home Page - CAB Construction
 * Modern, professional design with hero section, services, portfolio and contact
 * Design Philosophy: Premium, clean, with emphasis on visual hierarchy and user engagement
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight cursor-pointer hover:text-red-500 transition-colors">
            AVEC NOUS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
              L'EXCELLENCE PREND FORME
            </span>
          </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Solutions de construction durables, sécurisées et esthétiques. Chez CAB Construction, nous transformons vos rêves architecturaux en réalité avec expertise et professionnalisme.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => window.location.hash = '#contact'} className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
                DEMANDER UN DEVIS
              </button>
              <button onClick={() => window.location.hash = '#services'} className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold text-lg cursor-pointer">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="mission" className="text-4xl font-bold text-gray-900 mb-6 cursor-pointer hover:text-red-600 transition-colors">Notre Mission</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Plus que des bâtiments, nous bâtissons la confiance
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chez CAB Construction, nous ne nous contentons pas d'ériger des structures — nous créons des espaces durables qui inspirent confiance. Notre engagement est de fournir des solutions de construction qui respectent scrupuleusement les délais, les budgets et les normes de qualité les plus rigoureuses.
              </p>

              {/* Mission Values */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Respect des Délais</h3>
                    <p className="text-gray-600">Livraison ponctuelle et respect strict des budgets convenus</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Qualité Rigoureuse</h3>
                    <p className="text-gray-600">Normes de qualité les plus élevées du secteur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Sécurité Totale</h3>
                    <p className="text-gray-600">Solutions durables, sécurisées et esthétiques</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-5xl font-bold">Nos Objectifs</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">🏗️</div>
                      <span className="font-semibold">Qualité & Durabilité</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">⚡</div>
                      <span className="font-semibold">Innovation & Efficacité</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">🛡️</div>
                      <span className="font-semibold">Sécurité & Professionnalisme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services" className="text-4xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-red-600 transition-colors" onClick={() => window.location.hash = '#services'}>Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de solutions de construction adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏠', title: 'Construction Résidentielle', desc: 'Maisons, villas, immeubles de haute qualité' },
              { icon: '🔧', title: 'Rénovation & Réhabilitation', desc: 'Modernisation complète d\'infrastructures' },
              { icon: '🌱', title: 'Éco-Construction', desc: 'Matériaux écologiques et efficacité énergétique' },
              { icon: '📋', title: 'Gestion de Projets', desc: 'Suivi complet de la conception à la livraison' }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="pourquoi" className="text-4xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-red-600 transition-colors" onClick={() => window.location.hash = '#pourquoi'}>Pourquoi Choisir CAB Construction ?</h2>
            <p className="text-xl text-gray-600">Un partenaire fiable pour transformer vos ambitions en réalités durables</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expertise Multisectorielle', desc: 'Construction, immobilier, agro-industrie et logistique' },
              { title: 'Équipe Qualifiée', desc: 'Professionnels expérimentés et certifiés' },
              { title: 'Engagement Qualité', desc: 'Normes élevées et respect des délais' },
              { title: 'Approche Personnalisée', desc: 'Solutions adaptées à vos besoins spécifiques' },
              { title: 'Sécurité Prioritaire', desc: 'Normes de sécurité strictes sur tous les chantiers' },
              { title: 'Partenaire de Confiance', desc: 'Pour projets publics et privés' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="contact" className="text-4xl font-bold mb-4 cursor-pointer hover:text-red-300 transition-colors" onClick={() => window.location.hash = '#contact'}>Contactez-Nous</h2>
            <p className="text-xl text-gray-300">Donnons vie à vos projets ensemble</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-300">+224 621 22 34 32</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">constructioncab224@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Localisation</h3>
              <p className="text-gray-300">Simbaya, Conakry, Guinée</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Demander un Devis Gratuit</h3>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">CAB Construction</h3>
              <p className="text-sm">Solutions de construction durables et de qualité</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Construction</a></li>
                <li><a href="#services" className="hover:text-white transition">Rénovation</a></li>
                <li><a href="#services" className="hover:text-white transition">Éco-Construction</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#mission" className="hover:text-white transition">À Propos</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>+224 621 22 34 32</li>
                <li>constructioncab224@gmail.com</li>
                <li>Simbaya, Conakry</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 CAB Construction. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
