import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle2,
  MousePointerClick,
  Search,
  Bot,
  GraduationCap
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
      window.location.href = 'https://buy.stripe.com/eVa28R2QXfxhggwaEE';
    }
  };

  const modules = [
    {
      title: "Google Ads Avançado",
      hours: 15,
      topics: ["Performance Max", "Search Ads 360", "Display & Video 360"]
    },
    {
      title: "Meta Ads Masterclass",
      hours: 15,
      topics: ["Campanhas Avançadas", "Pixel Avançado", "Automações"]
    },
    {
      title: "Automação & Ferramentas",
      hours: 10,
      topics: ["Zapier", "Make", "Integrações Avançadas"]
    },
    {
      title: "Análise Competitiva",
      hours: 10,
      topics: ["SEMrush", "Ahrefs", "SpyFu"]
    },
    {
      title: "Tecnologias Avançadas",
      hours: 10,
      topics: ["Dolphin", "AdsPower", "Proxy Setup"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-100">
      {/* Navigation */}
      <nav className="bg-[#0D1117] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Target className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl">AdsLab</span>
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-transparent to-[#0D1117] z-1"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Target className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Domine o Tráfego Pago Avançado
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Torne-se um especialista em Google Ads e Meta Ads com as técnicas mais avançadas do mercado
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>60 horas de conteúdo</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-blue-500" />
              <span>Certificado Incluso</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Suporte Exclusivo</span>
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

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MousePointerClick className="w-8 h-8 text-blue-500" />,
              title: "Resultados Comprovados",
              description: "Aprenda com cases reais e estratégias testadas",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            },
            {
              icon: <Bot className="w-8 h-8 text-blue-500" />,
              title: "Automação Avançada",
              description: "Domine Zapier e Make para escalar suas campanhas",
              image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
            },
            {
              icon: <Search className="w-8 h-8 text-blue-500" />,
              title: "Análise Competitiva",
              description: "Use as melhores ferramentas do mercado",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
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

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Conteúdo Programático
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-[#1C2128] rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" />
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
            Pronto para Dominar o Tráfego Pago?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Não perca mais tempo e dinheiro com tentativa e erro. Aprenda com quem já está no mercado e domina as técnicas mais avançadas.
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