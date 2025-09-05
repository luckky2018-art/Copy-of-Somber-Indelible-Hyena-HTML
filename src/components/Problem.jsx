import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAlertCircle, FiPhone, FiShield, FiHelpCircle } = FiIcons;

const Problem = () => {
  const problems = [
    {
      icon: FiPhone,
      text: "Seus pais ou avós lutam com configurações básicas, WiFi ou aplicativos, e você passa horas tentando ajudar por telefone? 📱"
    },
    {
      icon: FiAlertCircle,
      text: "A complexidade dos aparelhos modernos gera resistência à tecnologia, privando seus entes queridos de se conectarem com o mundo?"
    },
    {
      icon: FiHelpCircle,
      text: "Manuais confusos e suporte técnico genérico não resolvem, deixando você e o idoso frustrados e sem solução?"
    },
    {
      icon: FiShield,
      text: "Preocupações com golpes online e a segurança digital tiram o sono de quem se importa com o bem-estar dos idosos?"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Tecnologia Não Deveria Ser uma Fonte de{' '}
            <span className="text-red-600">Frustração</span>, 
            <br />Mas de <span className="text-primary-600">Conexão</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&w=600"
              alt="Pessoa idosa confusa com tecnologia"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-red-100 p-4 rounded-full">
              <SafeIcon icon={FiAlertCircle} className="w-8 h-8 text-red-600" />
            </div>
          </div>

          {/* Problems List */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={problem.icon} className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;