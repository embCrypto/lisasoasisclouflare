import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { languages, translations } from '../translations';
import './LanguageModal.css';

function LanguageModal() {
  const { changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const handleContinue = () => {
    changeLanguage(selectedLanguage);
  };

  // Use the selected language for modal text, fallback to English
  const currentTranslations = translations[selectedLanguage] || translations.en;

  return (
    <div className="language-modal-overlay">
      <div className="language-modal">
        <div className="language-modal-content">
          <h2>{currentTranslations.languageSelect.title}</h2>
          <p className="language-modal-subtitle">{currentTranslations.languageSelect.subtitle}</p>
          
          <div className="language-options">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`language-option ${selectedLanguage === language.code ? 'selected' : ''}`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <span className="language-flag">{language.flag}</span>
                <span className="language-name">
                  {currentTranslations.languageSelect[language.code] || language.name}
                </span>
              </button>
            ))}
          </div>
          
          <button 
            className="continue-button"
            onClick={handleContinue}
          >
            {currentTranslations.languageSelect.continue}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageModal;
