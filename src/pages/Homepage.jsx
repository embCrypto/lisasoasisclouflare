import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import CookieConsent from '../contexts/CookieConsent'; // Import the CookieConsent component
import { 
    ALL_AFFIRMATIONS_EN, 
    ALL_AFFIRMATIONS_DE, 
    ALL_AFFIRMATIONS_RO 
} from '../components/Affirmations';

function Homepage() {
    const { t, currentLanguage } = useLanguage();
    const [currentAffirmation, setCurrentAffirmation] = useState('');

    // Get affirmations array based on current language
    const getAffirmationsForLanguage = () => {
        switch (currentLanguage) {
            case 'de':
                return ALL_AFFIRMATIONS_DE;
            case 'ro':
                return ALL_AFFIRMATIONS_RO;
            default:
                return ALL_AFFIRMATIONS_EN;
        }
    };

    // Get a random affirmation
    const getRandomAffirmation = () => {
        const affirmations = getAffirmationsForLanguage();
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    };

    // Get daily affirmation (same affirmation for the whole day)
    const getDailyAffirmation = () => {
        if (!currentAffirmation) {
            const today = new Date().toDateString();
            const savedAffirmation = localStorage.getItem(`dailyAffirmation_${today}_${currentLanguage}`);
            
            if (savedAffirmation) {
                return savedAffirmation;
            } else {
                const newAffirmation = getRandomAffirmation();
                localStorage.setItem(`dailyAffirmation_${today}_${currentLanguage}`, newAffirmation);
                return newAffirmation;
            }
        }
        return currentAffirmation;
    };

    // Get a new random affirmation
    const getNewAffirmation = () => {
        const newAffirmation = getRandomAffirmation();
        setCurrentAffirmation(newAffirmation);
    };

    // Update affirmation when language changes
    useEffect(() => {
        if (currentLanguage) {
            const today = new Date().toDateString();
            const savedAffirmation = localStorage.getItem(`dailyAffirmation_${today}_${currentLanguage}`);
            
            if (savedAffirmation) {
                setCurrentAffirmation(savedAffirmation);
            } else {
                const newAffirmation = getRandomAffirmation();
                localStorage.setItem(`dailyAffirmation_${today}_${currentLanguage}`, newAffirmation);
                setCurrentAffirmation(newAffirmation);
            }
        }
    }, [currentLanguage]);

    return (
        <>
            <CookieConsent /> {/* Add the CookieConsent component here */}
            <br />
            <div className="hero-section">
                <h1>{t('homepage.title')}</h1>
                <p className="hero-subtitle">{t('homepage.subtitle')}</p>
                <p>{t('homepage.description')}</p>
            </div>
            <br />
            <div className="features-grid">
                <Link to="/profile-of-essential-oils" className="feature-card">
                    <h3>{t('homepage.essentialOilsFeature')}</h3>
                    <p>{t('homepage.essentialOilsDesc')}</p>
                </Link>

                <Link to="/treat-health-issues-natural-remedies" className="feature-card">
                    <h3>{t('homepage.naturalRemedies')}</h3>
                    <p>{t('homepage.naturalRemediesDesc')}</p>
                </Link>
                
                <Link to="/do-it-yourself" className="feature-card">
                    <h3>{t('homepage.diyFeature')}</h3>
                    <p>{t('homepage.diyDesc')}</p>
                </Link>
                
                <Link to="/improve-my-life-situation" className="feature-card">
                    <h3>{t('homepage.meditationFeature')}</h3>
                    <p>{t('homepage.meditationDesc')}</p>
                </Link>
            </div>
            
            <br />
            
            <Link to="/shop" className="feature-card shop-card">
                <h3>🛍️ Visit Our Shop</h3>
                <p>Discover carefully selected natural products, essential oils, and wellness items to support your healing journey.</p>
            </Link>
            <br />
            <br />

            <div className="affirmation-of-the-day">
                <h3>{t('homepage.affirmationOfTheDay')}</h3>
                <div className="affirmation-content">
                    <p className="daily-affirmation" style={{fontStyle: 'italic'}}>"{currentAffirmation}"</p>
                    <p className="affirmation-citation">— by Florence Scovel Shinn</p>
                    <button className="new-affirmation-btn" onClick={() => setCurrentAffirmation(getRandomAffirmation())}>
                        {t('homepage.newAffirmation')}
                    </button>
                </div>
            </div>

            <br />
            
            <div className="getting-started">
                <h3>{t('homepage.gettingStarted')}</h3>
                <p>{t('homepage.gettingStartedDesc')}</p>
                <p>
                    {t('homepage.startByVisiting')} <Link to="/guideline-to-feel-better" className="guideline-link">{t('homepage.guideline')}</Link>.
                </p>
            </div>

            <br />
            
            <div className="support-section">
                <h3>{t('homepage.supportUs')}</h3>
                <p>{t('homepage.supportUsDesc')}</p>
                <a 
                    href="https://www.paypal.com/donate" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="donate-btn"
                >
                    💝 {t('homepage.donatePaypal')}
                </a>
            </div>
            
            <ScrollToTop />
        </>
    );
}

export default Homepage;