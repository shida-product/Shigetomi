import React from 'react';
import { Home } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  formUrl: string;
  hlParam: string;
  flag: string;
}

export function LanguageSelectorPattern3() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-stone-100 to-amber-50 relative overflow-hidden">
      {/* Lattice Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h2v2H0V0zm0 78h2v2H0v-2zm78 0h2v2h-2v-2zm0-78h2v2h-2V0zM0 39h2v2H0v-2zm78 0h2v2h-2v-2zM39 0h2v2h-2V0zm0 78h2v2h-2v-2z'/%3E%3Cpath d='M12 12h56v56H12V12zm2 2v52h52V14H14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Bamboo-like vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-stone-300/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-stone-300/30 to-transparent"></div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-800"></div>
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <div className="w-32 h-px bg-red-800"></div>
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-800"></div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-lg mb-8 border-2 border-red-800/20">
              <Home className="w-10 h-10 text-red-800" />
            </div>
            
            <h1 className="text-gray-900 mb-6 tracking-wide">
              言語を選択してください
            </h1>
            <p className="text-gray-600 mb-2">
              Please select your preferred language
            </p>
            <p className="text-gray-500">
              请选择您的语言 / Seleccione su idioma / 언어를 선택하세요
            </p>
          </div>

          {/* Language Grid with Japanese Paper Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="group relative bg-white hover:bg-stone-50 rounded-none border-2 border-stone-300 hover:border-red-800 p-8 transition-all duration-300 shadow-md hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-800"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-800"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-800"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-800"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-amber-50 rounded-full flex items-center justify-center border-2 border-red-800/20 group-hover:border-red-800/50 transition-colors">
                      <span>{language.flag}</span>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-900 mb-1">
                        {language.nativeName}
                      </div>
                      <div className="text-gray-500">
                        {language.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-red-800 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer Message */}
          <div className="bg-white border-2 border-stone-300 p-8 text-center shadow-md">
            <div className="max-w-2xl mx-auto">
              <div className="inline-block w-12 h-px bg-red-800 mb-4"></div>
              <p className="text-gray-800 mb-3">
                日本家屋での滞在をお楽しみください
              </p>
              <p className="text-gray-600 mb-3">
                Please enjoy your stay at our traditional Japanese house
              </p>
              <p className="text-gray-500">
                请享受您在传统日式住宅的住宿
              </p>
              <div className="inline-block w-12 h-px bg-red-800 mt-4"></div>
            </div>
          </div>

          {/* Bottom Decorative Line */}
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-800"></div>
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <div className="w-32 h-px bg-red-800"></div>
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-800"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
