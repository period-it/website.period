import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function SignUp() {
  const { language } = useLanguage();
  const t = translations[language].signUp;

  return (
    <section id="signup" className="py-24 bg-gradient-to-br from-period-coral/10 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.formTitle}</h3>
            <p className="text-gray-600 mb-6">
              {t.formDescription}
            </p>

            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfZ8luV6mVQY5D2E4iZHLZe4bkWM7wAipnB4lnlGaSSEpevOQ/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Sign Up Form"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
              >
                Loading…
              </iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-start space-x-3">
              <Shield className="text-period-coral flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t.privacyTitle}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {t.privacyDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
