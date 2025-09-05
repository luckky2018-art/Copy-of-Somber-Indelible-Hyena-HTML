import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiStar } = FiIcons;

const Pricing = () => {
  const plans = [
    {
      name: "Sessão Única",
      price: "R$ 49",
      period: "/sessão",
      description: "Problemas tecnológicos pontuais e urgentes",
      features: [
        "1 sessão de suporte técnico via vídeo/telefone",
        "Resolução de um problema específico",
        "Atendimento por especialista amigável",
        "Suporte para um dispositivo por sessão"
      ],
      cta: "Agende Sua Sessão",
      popular: false
    },
    {
      name: "Plano Família Mensal",
      price: "R$ 29",
      period: "/mês",
      description: "Suporte contínuo e paz de espírito para toda a família",
      features: [
        "Suporte ilimitado para todos os dispositivos",
        "Atendimento preferencial por vídeo ou telefone",
        "Acesso a biblioteca de guias e tutoriais simplificados",
        "Suporte para múltiplos idosos da mesma família",
        "Garantia de satisfação 100%"
      ],
      cta: "Comece a Assinar Agora",
      popular: true
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escolha o Plano Perfeito para a{' '}
            <span className="text-primary-600">Tranquilidade da Sua Família</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sua Confiança é Nossa Prioridade: Experimente Sem Riscos! 🤝
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Oferecemos uma <strong>Garantia de Satisfação 100%</strong>. Se na sua primeira sessão avulsa 
              ou no primeiro mês do seu plano mensal você não estiver completamente satisfeito, 
              nós devolvemos seu dinheiro. Sem contratos, cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;