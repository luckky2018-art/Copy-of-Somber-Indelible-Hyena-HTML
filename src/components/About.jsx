import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiShield } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: "Comunicação Clara e Paciente",
      description: "Explicamos cada passo sem jargões, usando analogias do dia a dia."
    },
    {
      icon: FiUsers,
      title: "Empatia Genuína",
      description: "Compreendemos as dificuldades e construímos a confiança, celebrando cada pequena conquista."
    },
    {
      icon: FiShield,
      title: "Foco na Independência",
      description: "Nosso objetivo é capacitar idosos a usar a tecnologia com confiança e autonomia."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Missão: Conectando Gerações com{' '}
            <span className="text-primary-600">Tecnologia e Paciência</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              No Silver Tech Concierge, nascemos da experiência e da empatia. Sabemos que a tecnologia 
              pode ser uma bênção para a conexão familiar e a independência dos idosos, mas também 
              entendemos as frustrações que ela pode gerar para eles e para seus cuidadores.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong className="text-primary-600">Nossa paixão é simplificar o mundo digital para quem mais precisa.</strong> 
              {' '}Criamos um serviço de suporte técnico sob demanda que vai além da simples solução de problemas.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={value.icon} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&w=600"
              alt="Equipe Silver Tech Concierge"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-primary-600/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Acreditamos que ninguém deve ficar para trás no mundo digital. O Silver Tech Concierge 
            é a ponte para que seus entes queridos aproveitem todos os benefícios da tecnologia, 
            mantendo-se conectados, informados e seguros. Venha fazer parte da nossa família e 
            transforme a relação com a tecnologia em algo{' '}
            <span className="text-primary-600 font-semibold">positivo e libertador</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;