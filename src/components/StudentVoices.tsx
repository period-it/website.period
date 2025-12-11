import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function StudentVoices() {
  const { language } = useLanguage();
  const t = translations[language].studentVoices;

  return (
    <section className="py-24 bg-gradient-to-br from-period-burgundy to-period-burgundy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Quote className="text-period-coral mb-4" size={32} />
              <p className="text-lg text-white mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
              <p className="text-white/80 font-medium">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
