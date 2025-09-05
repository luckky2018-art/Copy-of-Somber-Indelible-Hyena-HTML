import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiVideo, FiCheckCircle } = FiIcons;

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: FiCalendar,
      title: "Agende o Suporte",
      description: "Escolha entre uma sessão avulsa ou assine nosso plano mensal ilimitado. Agende facilmente online ou por telefone, no horário que for melhor para você. 📅",
      detail: "Nosso sistema intuitivo permite que você ou seu familiar marque uma sessão de suporte técnico em poucos cliques."
    },
    {
      number: "2",
      icon: FiVideo,
      title: "Conecte-se com o Especialista",
      description: "Um de nossos amigáveis especialistas entrará em contato via videochamada (ou telefone, se preferir) para entender e resolver o problema. 📞",
      detail: "Nossos profissionais são treinados para explicar tudo de forma clara, paciente e usar analogias que fazem sentido para idosos."
    },
    {
      number: "3",
      icon: FiCheckCircle,
      title: "Tecnologia Sem Preocupação",
      description: "Desfrute de seus dispositivos funcionando perfeitamente! Receba dicas personalizadas e orientações para futuras dúvidas. ✨",
      detail: "Deixe a frustração de lado e aproveite a tecnologia para se conectar, aprender e se divertir com total confiança."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua Conexão Digital em Apenas{' '}
            <span className="text-primary-600">3 Passos Simples</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary-200 transform translate-x-4 z-0">
                  <div className="absolute right-0 top-0 w-3 h-3 bg-primary-600 rounded-full transform translate-x-1.5 -translate-y-1.25"></div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-primary-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <p className="text-sm text-gray-500 italic">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Comece Agora - É Simples!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;