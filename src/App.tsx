import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle2,
  Target,
  Users,
  Bot,
  GraduationCap,
  Shield,
  Gem,
  Filter,
  BarChart3,
  Lightbulb,
  Rocket,
  Zap,
  Search,
  LineChart
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';

function App() {
  const [session, setSession] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handlePurchaseClick = () => {
    if (!session) {
      setShowAuthModal(true);
    } else {
      // Handle purchase logic for logged in users
      window.location.href = 'https://lastlink.com/p/CE87DD05F/checkout-payment/';
    }
  };

  const modules = [
    {
      title: "Google Ads Premium",
      hours: 20,
      topics: ["Performance Max para Imóveis", "Local Campaigns Avançado", "Display Ads Dinâmicos"]
    },
    {
      title: "Meta Ads Elite",
      hours: 20,
      topics: ["Segmentação por Patrimônio", "Campanhas para Luxury Listings", "Remarketing VIP"]
    },
    {
      title: "Segmentação Premium",
      hours: 15,
      topics: ["Públicos de Alto Poder Aquisitivo", "Interesses Exclusivos", "Localização Estratégica"]
    },
    {
      title: "Automação & CRM",
      hours: 15,
      topics: ["Integração com CRMs Imobiliários", "Automação de Follow-up", "Lead Scoring Avançado"]
    },
    {
      title: "Análise Competitiva",
      hours: 10,
      topics: ["Benchmark de Mercado Premium", "Share of Voice", "Análise de Concorrentes"]
    },
    {
      title: "Tecnologias Exclusivas",
      hours: 10,
      topics: ["Ferramentas de Targeting", "Plataformas Premium", "Integrações Avançadas"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-100">
      {/* Navigation */}
      <nav className="bg-[#0D1117] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl">RealtyAds Elite</span>
          </div>
          <div>
            {session ? (
              <UserMenu user={session.user} onSignOut={handleSignOut} />
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-transparent to-[#0D1117] z-1"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Building2 className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Marketing Digital Premium para Imobiliárias de Alto Padrão
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Domine estratégias exclusivas de tráfego pago para alcançar o público mais seleto do mercado imobiliário
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>90 horas de conteúdo</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-blue-500" />
              <span>Certificado Premium</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Estratégias Exclusivas</span>
            </div>
          </div>
          <button 
            onClick={handlePurchaseClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Investir Agora - 12x de R$166,67
          </button>
          <p className="mt-4 text-sm text-gray-400">ou R$2.000,00 à vista</p>
        </div>
      </header>

      {/* Platform Focus Section */}
      <section className="container mx-auto px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Domine as Principais Plataformas
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1C2128] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Search className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Google Ads</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Performance Max otimizado para imóveis de luxo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Campanhas locais para bairros nobres</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Display ads dinâmicos com remarketing premium</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1C2128] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Meta Ads</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Segmentação avançada por faixa de patrimônio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Públicos personalizados de alto valor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Estratégias exclusivas de retargeting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8 text-blue-500" />,
              title: "Segmentação Ultra Premium",
              description: "Alcance compradores de alto padrão com precisão cirúrgica",
              image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
            },
            {
              icon: <Users className="w-8 h-8 text-blue-500" />,
              title: "Públicos Exclusivos",
              description: "Acesso a segmentações secretas para o mercado de luxo",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            },
            {
              icon: <Filter className="w-8 h-8 text-blue-500" />,
              title: "Estratégias Sofisticadas",
              description: "Técnicas avançadas para converter leads premium",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-[#1C2128] rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628745277895-0d4f1d92b92d?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Resultados Comprovados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1C2128] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="w-12 h-12 text-blue-500" />
                <div>
                  <h3 className="text-3xl font-bold">300%</h3>
                  <p className="text-gray-400">Aumento em Leads Premium</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1C2128] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <LineChart className="w-12 h-12 text-blue-500" />
                <div>
                  <h3 className="text-3xl font-bold">-45%</h3>
                  <p className="text-gray-400">Redução no Custo por Lead</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1C2128] rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-12 h-12 text-blue-500" />
                <div>
                  <h3 className="text-3xl font-bold">5x</h3>
                  <p className="text-gray-400">Mais Conversões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Conteúdo Programático
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-[#1C2128] rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gem className="w-6 h-6 text-blue-500" />
                {module.title}
              </h3>
              <p className="text-blue-400 mb-4">{module.hours} horas</p>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto bg-[#1C2128] rounded-2xl p-12 border border-gray-800">
          <h2 className="text-4xl font-bold text-white mb-8">
            Eleve Sua Imobiliária ao Próximo Nível
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Aprenda a atrair e converter os clientes mais exclusivos do mercado imobiliário com estratégias comprovadas de marketing digital.
          </p>
          <button 
            onClick={handlePurchaseClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Começar Agora - 12x de R$166,67
          </button>
          <p className="mt-4 text-sm text-gray-500">Garantia de 7 dias ou seu dinheiro de volta</p>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}

export default App;