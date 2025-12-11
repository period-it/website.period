import { Package, Target, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Solution() {
  const { language } = useLanguage();
  const t = translations[language].solution;

  const icons = [Package, Target, Truck];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative">
                <div className="bg-period-coral/5 p-8 rounded-2xl h-full hover:bg-period-coral/10 transition-colors border-2 border-period-coral/20">
                  <div className="flex items-center justify-center w-16 h-16 bg-period-coral text-white rounded-full text-2xl font-bold mb-6">
                    {index + 1}
                  </div>
                  <Icon className="text-period-coral mb-4" size={36} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-period-coral">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
