import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      role: "Cuidadora Familiar",
      location: "São Paulo/SP",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150",
      text: "Antes do Silver Tech Concierge, as videochamadas com minha mãe eram uma luta. Ela se frustrava com o tablet e eu não conseguia ajudar à distância. Agora, com o suporte deles, minha mãe está fazendo chamadas de vídeo com toda a família e até usa o app do banco! É uma paz de espírito enorme saber que ela tem ajuda profissional e paciente."
    },
    {
      name: "Carlos Eduardo",
      role: "Filho e Cliente",
      location: "Rio de Janeiro/RJ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150",
      text: "Meu pai sempre foi cético com tecnologia, mas queria ver as fotos dos netos. Eu estava exausto de ser o 'suporte técnico' da família. O Silver Tech Concierge foi um divisor de águas! Eles ensinaram meu pai a usar o álbum digital e, o melhor de tudo, com uma paciência que eu não tinha mais. Recomendo a todos os filhos e netos que querem aliviar essa carga!"
    },
    {
      name: "Dona Maria",
      role: "Cliente Independente",
      location: "Curitiba/PR",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=150",
      text: "Eu sempre tive medo de mexer em coisas novas no meu computador, especialmente depois de umas notícias sobre golpes. Com o Silver Tech Concierge, perdi o medo! Eles me ensinaram a usar o WhatsApp para falar com minhas amigas e me ajudaram a organizar minhas fotos. São muito atenciosos e não me fazem sentir burra por não saber. Sinto que tenho um amigo sempre que preciso de ajuda!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Famílias Felizes. Idosos Conectados.
          </h2>
          <p className="text-xl text-gray-600">
            Confira o que Nossos Clientes Dizem!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">10 horas/mês</h3>
              <p className="text-gray-600">Economizadas em suporte técnico por família</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">15.000+</h3>
              <p className="text-gray-600">Famílias atendidas com sucesso</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">98%</h3>
              <p className="text-gray-600">Taxa de satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;