import { Heart, Users, Shield, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const icons = [Heart, Users, Shield, Leaf];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-period-burgundy mb-8 text-center">{t.valuesTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border-2 border-period-coral/20 hover:border-period-coral transition-colors">
                  <Icon className="text-period-coral mb-4" size={40} />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-period-burgundy/5 p-12 rounded-3xl border-2 border-period-burgundy/10">
          <h3 className="text-3xl font-bold text-period-burgundy mb-8">{t.foundersTitle}</h3>
          <div className="space-y-8">
            {t.founders.map((founder, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
