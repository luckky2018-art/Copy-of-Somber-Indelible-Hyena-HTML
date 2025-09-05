import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiBrain, FiSmile } = FiIcons;

const Solution = () => {
  const benefits = [
    {
      icon: FiSmile,
      title: "Suporte Personalizado e Paciente",
      description: "Especialistas que falam a 'língua' dos idosos, com explicações claras e analogias simples. 😊"
    },
    {
      icon: FiUsers,
      title: "Conexão Sem Limites",
      description: "Ajuda para videochamadas com a família, uso de redes sociais e aplicativos, mantendo todos conectados. 👨‍👩‍👧‍👦"
    },
    {
      icon: FiBrain,
      title: "Independência Digital",
      description: "Ensina a usar dispositivos para entretenimento, saúde e organização, promovendo autonomia. 🧠"
    },
    {
      icon: FiHeart,
      title: "Tranquilidade para Cuidadores",
      description: "Acabe com as horas de suporte remoto estressante. Deixe a tecnologia conosco e ganhe tempo para o que importa. ❤️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apresentamos o <span className="text-primary-600">Silver Tech Concierge</span>
          </h2>
          <h3 className="text-2xl text-gray-700 mb-8">
            A Ponte para uma Vida Digital Sem Complicações
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O Silver Tech Concierge é o suporte técnico feito sob medida para idosos, 
            entregue de forma amigável e paciente, transformando a frustração digital em 
            independência e conexão. Sua família ganha tranquilidade, seus entes queridos ganham confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-primary-50 rounded-2xl hover:bg-primary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Video Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Veja Como Funciona em 60 Segundos!
          </h3>
          <p className="text-primary-100 mb-6">
            Miniatura de um vídeo mostrando a interface de uma chamada de suporte, 
            onde um especialista guia o idoso passo a passo.
          </p>
          <div className="bg-white/20 rounded-xl p-8 max-w-md mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">▶</span>
            </div>
            <p className="text-sm">Clique para ver nossa demonstração</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;