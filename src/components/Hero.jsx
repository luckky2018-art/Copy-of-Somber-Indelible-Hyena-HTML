import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tech Sem Complicações para{' '}
            <span className="text-primary-600">Idosos</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">
              Paz de Espírito para a Família
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            O Silver Tech Concierge oferece suporte técnico amigável e personalizado, 
            ajudando idosos a se conectarem e aproveitarem a tecnologia sem estresse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Resolva Seu Problema Agora
            </button>
            <button className="px-8 py-4 text-primary-600 border-2 border-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold text-lg">
              Como Funciona
            </button>
          </div>

          <div className="bg-white/80 rounded-lg p-4 inline-block">
            <p className="text-primary-600 font-semibold">
              🎉 Junte-se a +15.000 famílias que já confiam no Silver Tech Concierge!
            </p>
          </div>
        </div>

        {/* Video/Image */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&w=600"
              alt="Idoso usando tablet com suporte técnico"
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Vídeo curto mostrando um idoso interagindo facilmente com um tablet
              </p>
              <div className="bg-primary-600 text-white px-4 py-2 rounded-full inline-block">
                ▶ Assista em 60 segundos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;