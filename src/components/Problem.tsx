import { AlertCircle, DollarSign, Users, TrendingDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Problem() {
  const { language } = useLanguage();
  const t = translations[language].problem;

  const icons = [DollarSign, Users, TrendingDown, AlertCircle];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {t.items.map((text, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <Icon className="text-period-coral mb-4" size={40} />
                <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
