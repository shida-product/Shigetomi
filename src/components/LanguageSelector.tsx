import React from 'react';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  formUrl: string;
  hlParam: string;
}

export function LanguageSelector() {
  const languages: Language[] = [
    {
      code: 'ja',
      name: 'Japanese',
      nativeName: '日本語',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_JAPANESE_FORM_ID/viewform',
      hlParam: 'ja'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_ENGLISH_FORM_ID/viewform',
      hlParam: 'en'
    },
    {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_SPANISH_FORM_ID/viewform',
      hlParam: 'es'
    },
    {
      code: 'zh-CN',
      name: 'Chinese (Simplified)',
      nativeName: '简体中文',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_CHINESE_SIMPLIFIED_FORM_ID/viewform',
      hlParam: 'zh-CN'
    },
    {
      code: 'zh-TW',
      name: 'Chinese (Traditional)',
      nativeName: '繁體中文',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_CHINESE_TRADITIONAL_FORM_ID/viewform',
      hlParam: 'zh-TW'
    },
    {
      code: 'ko',
      name: 'Korean',
      nativeName: '한국어',
      formUrl: 'https://docs.google.com/forms/d/e/YOUR_KOREAN_FORM_ID/viewform',
      hlParam: 'ko'
    }
  ];

  const handleLanguageSelect = (language: Language) => {
    const urlWithLanguage = `${language.formUrl}?hl=${language.hlParam}`;
    window.location.href = urlWithLanguage;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-indigo-900 mb-4">
            オンラインチェックイン / Online Check-in
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            言語を選択してください / Please select your language
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left border-2 border-transparent hover:border-indigo-500 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 uppercase tracking-wide">
                  {language.code}
                </span>
                <svg 
                  className="w-5 h-5 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-gray-900 mb-1">
                {language.nativeName}
              </div>
              <div className="text-gray-500">
                {language.name}
              </div>
            </button>
          ))}
        </div>

        {/* Footer Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-2">
              📱 <span className="text-indigo-700">QRコードからアクセスいただきありがとうございます</span>
            </p>
            <p className="text-gray-600">
              Thank you for accessing via QR code
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-500">
                ご到着前にチェックイン手続きを完了してください<br />
                Please complete check-in before your arrival
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <details className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto cursor-pointer">
            <summary className="text-indigo-700">
              ⚠️ フォームURLの設定方法 / How to configure form URLs
            </summary>
            <div className="mt-4 text-left space-y-3 text-gray-600">
              <p>
                <strong>各言語のGoogleフォームURLを設定してください：</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>各言語のGoogleフォームを作成</li>
                <li>フォームの「送信」ボタンをクリック</li>
                <li>リンクマークをクリックしてURLをコピー</li>
                <li>LanguageSelector.tsxファイル内の該当するformUrlを置き換え</li>
                <li>例: <code className="bg-gray-100 px-2 py-1 rounded text-red-600">https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform</code></li>
              </ol>
              <p className="pt-2 border-t border-gray-200 mt-4">
                <strong className="text-indigo-700">重要：</strong> URLパラメータ <code className="bg-gray-100 px-2 py-1 rounded">?hl=</code> は自動的に付加されます
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
