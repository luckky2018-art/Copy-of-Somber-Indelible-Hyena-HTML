import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiMinus } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona o agendamento de uma sessão de suporte?",
      answer: "É muito simples! Você pode agendar sua sessão avulsa ou ativar seu plano mensal diretamente pelo nosso site ou ligando para nossa central de atendimento. Escolha o melhor horário para você e nós entraremos em contato via videochamada no dia e hora agendados."
    },
    {
      question: "Meus pais ou avós não são \"bons com tecnologia\". Os especialistas terão paciência?",
      answer: "Absolutamente! Nossos especialistas são selecionados e treinados especificamente para lidar com idosos. Eles falam de forma clara, usam analogias simples e têm uma paciência ilimitada, garantindo que o idoso se sinta confortável e compreendido, sem jargões técnicos."
    },
    {
      question: "Que tipo de problemas tecnológicos o Silver Tech Concierge pode resolver?",
      answer: "Nós cobrimos uma vasta gama de problemas! Desde configurações de WiFi, uso de aplicativos de videochamada (WhatsApp, Zoom), organização de fotos, problemas com impressora, configuração de smart TVs, até orientações de segurança online e como reconhecer golpes. Se tem tecnologia envolvida, podemos ajudar!"
    },
    {
      question: "O suporte é apenas para um aparelho ou para vários dispositivos?",
      answer: "No plano mensal, o suporte é ilimitado para todos os dispositivos dos idosos da sua família! Para sessões avulsas, focamos na resolução de um problema específico em um único dispositivo por sessão."
    },
    {
      question: "Como sei que as informações e dados dos meus pais estarão seguros?",
      answer: "A segurança e a privacidade são nossas maiores prioridades. Nossos especialistas seguem protocolos rigorosos de confidencialidade e não solicitam senhas bancárias ou informações sensíveis. Utilizamos plataformas de comunicação seguras para as videochamadas e sempre orientamos sobre as melhores práticas de segurança digital."
    },
    {
      question: "Existe alguma garantia de satisfação?",
      answer: "Sim! Oferecemos uma Garantia de Satisfação 100%. Se você não estiver completamente satisfeito com a sua primeira sessão avulsa ou com o primeiro mês do plano mensal, nós devolveremos seu dinheiro. Queremos sua total tranquilidade."
    },
    {
      question: "Posso experimentar o serviço antes de me comprometer com um plano?",
      answer: "Sim, você pode começar com uma Sessão Única por R$49 para testar nosso serviço e ver a qualidade do nosso atendimento. Temos certeza que você e sua família vão adorar a facilidade e o profissionalismo."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Suas Dúvidas Respondidas
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que Você Precisa Saber
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon 
                  icon={openIndex === index ? FiMinus : FiPlus} 
                  className="w-6 h-6 text-primary-600 flex-shrink-0" 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Nossa equipe está aqui para ajudar!
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;