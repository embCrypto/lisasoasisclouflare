import { useLanguage } from '../contexts/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';

function AboutUs() {
    const { t } = useLanguage();
    
    return (
        <div className="guideline-container">
            <h2>{t('aboutUs.title')}</h2>
            <p className="intro-text">{t('aboutUs.subtitle')}</p>
            
            <div className="healing-journey">
                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">🏠</span>
                        <h3>{t('aboutUs.familyStory.title')}</h3>
                        <p className="step-subtitle">{t('aboutUs.familyStory.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aboutUs.familyStory.content1')}</p>
                        <p>{t('aboutUs.familyStory.content2')}</p>
                        <p>{t('aboutUs.familyStory.content3')}</p>
                        
                        <div className="why-matters">
                            <strong>Why this matters to us:</strong> {t('aboutUs.familyStory.whyMatters')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">🌿</span>
                        <h3>{t('aboutUs.naturePower.title')}</h3>
                        <p className="step-subtitle">{t('aboutUs.naturePower.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aboutUs.naturePower.content1')}</p>
                        <p>{t('aboutUs.naturePower.content2')}</p>
                        
                        <h4>What We've Discovered:</h4>
                        <ul className="action-list">
                            <li>{t('aboutUs.naturePower.discovery1')}</li>
                            <li>{t('aboutUs.naturePower.discovery2')}</li>
                            <li>{t('aboutUs.naturePower.discovery3')}</li>
                            <li>{t('aboutUs.naturePower.discovery4')}</li>
                            <li>{t('aboutUs.naturePower.discovery5')}</li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>Our family truth:</strong> {t('aboutUs.naturePower.familyTruth')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">🌱</span>
                        <h3>{t('aboutUs.stayingConnected.title')}</h3>
                        <p className="step-subtitle">{t('aboutUs.stayingConnected.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aboutUs.stayingConnected.content1')}</p>
                        <p>{t('aboutUs.stayingConnected.content2')}</p>
                        <p>{t('aboutUs.stayingConnected.content3')}</p>
                        
                        <h4>Why Nature Connection is Non-Negotiable:</h4>
                        <ul className="action-list">
                            <li>{t('aboutUs.stayingConnected.essential1')}</li>
                            <li>{t('aboutUs.stayingConnected.essential2')}</li>
                            <li>{t('aboutUs.stayingConnected.essential3')}</li>
                            <li>{t('aboutUs.stayingConnected.essential4')}</li>
                            <li>{t('aboutUs.stayingConnected.essential5')}</li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>Our family commitment:</strong> {t('aboutUs.stayingConnected.commitment')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">✨</span>
                        <h3>{t('aboutUs.positiveMindset.title')}</h3>
                        <p className="step-subtitle">{t('aboutUs.positiveMindset.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aboutUs.positiveMindset.content1')}</p>
                        <p>{t('aboutUs.positiveMindset.content2')}</p>
                        <p>{t('aboutUs.positiveMindset.content3')}</p>
                        
                        <h4>How We Cultivate Positivity Daily:</h4>
                        <ul className="action-list">
                            <li>{t('aboutUs.positiveMindset.practice1')}</li>
                            <li>{t('aboutUs.positiveMindset.practice2')}</li>
                            <li>{t('aboutUs.positiveMindset.practice3')}</li>
                            <li>{t('aboutUs.positiveMindset.practice4')}</li>
                            <li>{t('aboutUs.positiveMindset.practice5')}</li>
                            <li>{t('aboutUs.positiveMindset.practice6')}</li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>Our family superpower:</strong> {t('aboutUs.positiveMindset.superpower')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">💝</span>
                        <h3>{t('aboutUs.whyStarted.title')}</h3>
                        <p className="step-subtitle">{t('aboutUs.whyStarted.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aboutUs.whyStarted.content1')}</p>
                        <p>{t('aboutUs.whyStarted.content2')}</p>
                        <p>{t('aboutUs.whyStarted.content3')}</p>
                        <p>{t('aboutUs.whyStarted.content4')}</p>
                        
                        <h4>What Drives Our Mission:</h4>
                        <ul className="action-list">
                            <li>{t('aboutUs.whyStarted.mission1')}</li>
                            <li>{t('aboutUs.whyStarted.mission2')}</li>
                            <li>{t('aboutUs.whyStarted.mission3')}</li>
                            <li>{t('aboutUs.whyStarted.mission4')}</li>
                            <li>{t('aboutUs.whyStarted.mission5')}</li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>Our heartfelt intention:</strong> {t('aboutUs.whyStarted.intention')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="inspiration-quote">
                <blockquote>
                    <p><strong>"{t('aboutUs.quote.text')}"</strong></p>
                    <cite>— {t('aboutUs.quote.author')}</cite>
                </blockquote>
            </div>

            <div className="closing-message">
                <h3>{t('aboutUs.gratitude.title')}</h3>
                <p>{t('aboutUs.gratitude.content1')}</p>
                <p>{t('aboutUs.gratitude.content2')}</p>
                <p>{t('aboutUs.gratitude.content3')}</p>
                <p className="encouragement">{t('aboutUs.gratitude.content4')}</p>
                <p className="encouragement">{t('aboutUs.gratitude.content5')}</p>
                
                <p><strong>{t('aboutUs.gratitude.signature')}</strong></p>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default AboutUs;