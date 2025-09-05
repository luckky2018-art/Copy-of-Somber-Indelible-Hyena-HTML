import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin } = FiIcons;

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      description: 'Send us an email and we\'ll get back to you within 24 hours.',
      contact: 'hello@company.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      description: 'Call us during business hours for immediate assistance.',
      contact: '+1 (555) 123-4567'
    },
    {
      icon: FiMapPin,
      title: 'Office',
      description: 'Visit our headquarters for in-person consultations.',
      contact: '123 Business Ave, Suite 100, City, State 12345'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Contact our team and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <SafeIcon 
                  icon={item.icon} 
                  className="w-8 h-8 text-primary-600" 
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <p className="text-primary-600 font-semibold">
                {item.contact}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;