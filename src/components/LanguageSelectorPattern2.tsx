import React from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  formUrl: string;
  hlParam: string;
  flag: string;
}

export function LanguageSelectorPattern2() {
  const languages: Language[] = [
    {
      code: 'ja',
      name: 'Japanese',
      nativeName: '日本語',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_JAPANESE_FORM_ID/viewform',
      hlParam: 'ja',
      flag: '🇯🇵'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_ENGLISH_FORM_ID/viewform',
      hlParam: 'en',
      flag: '🇬🇧'
    },
    {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_SPANISH_FORM_ID/viewform',
      hlParam: 'es',
      flag: '🇪🇸'
    },
    {
      code: 'zh-CN',
      name: 'Chinese (Simplified)',
      nativeName: '简体中文',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_CHINESE_SIMPLIFIED_FORM_ID/viewform',
      hlParam: 'zh-CN',
      flag: '🇨🇳'
    },
    {
      code: 'zh-TW',
      name: 'Chinese (Traditional)',
      nativeName: '繁體中文',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_CHINESE_TRADITIONAL_FORM_ID/viewform',
      hlParam: 'zh-TW',
      flag: '🇹🇼'
    },
    {
      code: 'ko',
      name: 'Korean',
      nativeName: '한국어',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_KOREAN_FORM_ID/viewform',
      hlParam: 'ko',
      flag: '🇰🇷'
    }
  ];

  const handleLanguageSelect = (language: Language) => {
    const urlWithLanguage = `${language.formUrl}?hl=${language.hlParam}`;
    window.location.href = urlWithLanguage;
  };

  return (
    <div className="min-h-screen bg-stone-900 relative overflow-hidden">
      {/* Washi Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-stone-900 to-red-950/30"></div>

      {/* Circular Pattern */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-600/5 to-red-800/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-red-800/5 to-amber-600/5 blur-3xl"></div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          {/* Header with Kanji */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-block relative">
                {/* Japanese Circle Symbol */}
                <svg className="w-32 h-32 mx-auto mb-6" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gradient)" strokeWidth="1" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="50" cy="50" r="15" fill="url(#gradient)" opacity="0.8" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <h1 className="text-amber-50 mb-6 tracking-widest">
              オンラインチェックイン
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <span className="text-amber-600">言語選択</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
            <p className="text-amber-100/70 max-w-2xl mx-auto">
              Select Your Language / 请选择语言 / Seleccione su idioma
            </p>
          </div>

          {/* Language List - Vertical Cards */}
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="group w-full bg-stone-800/40 backdrop-blur-md border border-amber-900/30 hover:border-amber-600/50 rounded-xl p-6 transition-all duration-500 hover:bg-stone-800/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/20"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'slideInRight 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-900/50 to-red-900/50 rounded-lg flex items-center justify-center border border-amber-800/30 group-hover:scale-110 transition-transform duration-300">
                      <span>{language.flag}</span>
                    </div>
                    <div className="text-left">
                      <div className="text-amber-50 mb-1 group-hover:text-amber-300 transition-colors">
                        {language.nativeName}
                      </div>
                      <div className="text-amber-100/50">
                        {language.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-amber-600 group-hover:text-amber-400 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      選択
                    </span>
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="inline-block bg-stone-800/30 backdrop-blur-md border border-amber-900/20 rounded-xl px-8 py-6">
              <p className="text-amber-100/80 mb-2">
                伝統的な日本家屋へようこそ
              </p>
              <p className="text-amber-100/50">
                Welcome to our traditional Japanese house
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
