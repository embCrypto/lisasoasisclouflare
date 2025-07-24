import React, { useState, useEffect } from 'react';
import './CookieConsent.css';
import { useLanguage } from './LanguageContext'; // Adjust path if needed

const COOKIE_EXPIRATION_DAYS = 7;

const translations = {
  en: {
    message: (
      <>
        We use cookies to personalize content and analyze our traffic. By clicking "Accept", you consent to our use of cookies. For more information, please see our{' '}
        <a href="/legals" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </>
    ),
    accept: "Accept"
  },
  de: {
    message: (
      <>
        Wir verwenden Cookies, um Inhalte zu personalisieren und unseren Datenverkehr zu analysieren. Mit Klick auf „Akzeptieren“ stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer{' '}
        <a href="/legals" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung
        </a>.
      </>
    ),
    accept: "Akzeptieren"
  },
  ro: {
    message: (
      <>
        Folosim cookie-uri pentru a personaliza conținutul și a analiza traficul. Făcând clic pe „Accept”, sunteți de acord cu utilizarea cookie-urilor. Pentru mai multe informații, consultați{' '}
        <a href="/legals" target="_blank" rel="noopener noreferrer">
          Politica de Confidențialitate
        </a>.
      </>
    ),
    accept: "Accept"
  }
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Check if the user has already accepted cookies and if the consent is still valid
    const consent = localStorage.getItem('cookieConsent');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');

    if (!consent || isConsentExpired(consentTimestamp)) {
      setIsVisible(true);
    }
  }, []);

  const isConsentExpired = (timestamp) => {
    if (!timestamp) return true; // If no timestamp, consider it expired
    const expirationDate = new Date(parseInt(timestamp, 10));
    expirationDate.setDate(expirationDate.getDate() + COOKIE_EXPIRATION_DAYS);
    return new Date() > expirationDate;
  };

  const handleAccept = () => {
    const timestamp = Date.now(); // Current timestamp
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookieConsentTimestamp', timestamp.toString());
    setIsVisible(false);
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    isVisible && (
      <div className="cookie-consent">
        <p>{t.message}</p>
        <button onClick={handleAccept}>{t.accept}</button>
      </div>
    )
  );
};

export default CookieConsent;