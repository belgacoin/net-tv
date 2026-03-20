import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center gap-4">
          <a
            href={`/${locale}/compare`}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href={`/${locale}/hardware`}
            className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </main>
  );
}
