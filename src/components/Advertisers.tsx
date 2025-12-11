import { Target, Users, TrendingUp, Shield, BarChart, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Advertisers() {
  const { language } = useLanguage();
  const t = translations[language].advertisers;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefitIcons = [Users, Target, TrendingUp, Shield, BarChart, CheckCircle];

  return (
    <section id="advertisers" className="py-24 bg-period-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed mt-4">
            {t.description}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl mb-16 border border-white/20">
          <h3 className="text-3xl font-bold mb-8">{t.howItWorksTitle}</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            {t.howItWorksDescription}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">{t.adOptionsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.adOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-bold mb-3">{option.title}</h4>
                <p className="text-white/80 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">{t.benefitsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Icon className="text-period-coral flex-shrink-0" size={28} />
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-period-coral text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-period-coral-dark transition-all transform hover:scale-105"
          >
            {t.button}
          </button>
        </div>
      </div>
    </section>
  );
}
