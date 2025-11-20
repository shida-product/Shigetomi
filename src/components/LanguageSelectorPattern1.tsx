import React from 'react';
import { Languages } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  formUrl: string;
  hlParam: string;
  flag: string;
}

export function LanguageSelectorPattern1() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50/30 to-slate-50 relative overflow-hidden">
      {/* Traditional Japanese Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-md">
          {/* Header - Compact for Mobile */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center shadow-xl border-3 border-white">
                <Languages className="w-8 h-8 text-amber-50" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-400 rounded-full border-3 border-white"></div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-gray-900 tracking-wide">
                ようこそ
              </h1>
              <div className="w-12 h-0.5 bg-red-800 mx-auto"></div>
              <p className="text-gray-700 px-4 leading-relaxed">
                言語を選択してください
              </p>
              <p className="text-gray-500 px-4">
                Select your language
              </p>
            </div>
          </div>

          {/* Language Cards - Compact for Mobile */}
          <div className="space-y-3 mb-8">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl active:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-red-800 active:scale-[0.98] w-full"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Corner Decoration - Smaller */}
                <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
                  <div className="absolute top-1 right-1 w-8 h-8 bg-gradient-to-br from-red-800/10 to-transparent rotate-45 transform origin-top-right"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-amber-50 rounded-full flex items-center justify-center border-2 border-red-800/10 group-hover:border-red-800/30 transition-colors flex-shrink-0">
                      <span className="text-2xl">{language.flag}</span>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-900">
                        {language.nativeName}
                      </div>
                      <div className="text-gray-500">
                        {language.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="text-red-800 group-hover:translate-x-1 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer - Compact */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 border border-gray-100">
              <p className="text-gray-800 mb-2">
                📱 ご来館いただきありがとうございます
              </p>
              <div className="w-8 h-0.5 bg-red-800 mx-auto mb-2"></div>
              <p className="text-gray-600">
                Thank you for choosing our<br />traditional Japanese house
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
