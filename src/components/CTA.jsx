import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Chega de Frustrações com a Tecnologia
        </h2>
        <h3 className="text-2xl md:text-3xl mb-8 text-primary-100">
          Conecte-se Agora!
        </h3>
        
        <p className="text-xl mb-8 text-primary-50 leading-relaxed">
          Transforme a dor de cabeça tecnológica em conexão e alegria para seus entes queridos. 
          Agende o suporte que você e sua família merecem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-10 py-5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Quero Acabar com a Frustração Agora!
          </button>
          <button className="px-10 py-5 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-all duration-200 font-bold text-xl shadow-xl">
            Saiba Mais Sobre Nossos Planos
          </button>
        </div>

        {/* Guarantee Badge */}
        <div className="bg-white/20 rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <h4 className="text-xl font-bold mb-3">🛡️ Garantia de Satisfação 100%</h4>
          <p className="text-primary-100">
            Experimente sem riscos. Se não ficar satisfeito, devolvemos seu dinheiro. 
            Sua tranquilidade é nossa prioridade.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-500">
          <p className="text-primary-100 mb-4">
            Prefere falar por telefone? Ligue agora mesmo:
          </p>
          <div className="text-2xl font-bold">
            📞 (11) 9999-9999
          </div>
          <p className="text-sm text-primary-200 mt-2">
            Atendimento de Segunda a Sábado, das 8h às 20h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;