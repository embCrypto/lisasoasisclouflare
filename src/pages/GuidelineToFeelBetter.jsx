import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';

function GuidelineToFeelBetter() {
    const { t } = useLanguage();
    
    return (
        <div className="guideline-container">
            <h2>{t('guidelineToFeelBetter.title')}</h2>
            <p className="intro-text">{t('guidelineToFeelBetter.introText')}</p>
            
            <div className="wellness-journey">
                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">1</span>
                        <h3>{t('guidelineToFeelBetter.step1.title')}</h3>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('guidelineToFeelBetter.step1.description')}</p>
                        <div className="step-link">
                            <p>{t('guidelineToFeelBetter.step1.linkText')} <Link to="/home-cleaning" className="guideline-link">{t('guidelineToFeelBetter.step1.linkName')}</Link> {t('guidelineToFeelBetter.step1.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('guidelineToFeelBetter.step1.whyMatters')}
                        </div>
                    </div>
                </div>
                <br/>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">2</span>
                        <h3>{t('guidelineToFeelBetter.step2.title')}</h3>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('guidelineToFeelBetter.step2.description')}</p>
                        <div className="step-link">
                            <p>{t('guidelineToFeelBetter.step2.linkText')} <Link to="/aromatic-feng-shui" className="guideline-link">{t('guidelineToFeelBetter.step2.linkName')}</Link> {t('guidelineToFeelBetter.step2.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('guidelineToFeelBetter.step2.whyMatters')}
                        </div>
                    </div>
                </div>
                <br/>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">3</span>
                        <h3>{t('guidelineToFeelBetter.step3.title')}</h3>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('guidelineToFeelBetter.step3.description')}</p>
                        
                        <div className="step-link">
                            <p>{t('guidelineToFeelBetter.step3.linkText')} <Link to="/treat-health-issues-essential-oils" className="guideline-link">{t('guidelineToFeelBetter.step3.linkName1')}</Link> {t('guidelineToFeelBetter.step3.linkMiddle')} <Link to="/treat-health-issues-natural-remedies" className="guideline-link">{t('guidelineToFeelBetter.step3.linkName2')}</Link> {t('guidelineToFeelBetter.step3.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('guidelineToFeelBetter.step3.whyMatters')}
                        </div>
                    </div>
                </div>
                <br/>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">4</span>
                        <h3>{t('guidelineToFeelBetter.step4.title')}</h3>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('guidelineToFeelBetter.step4.description')} <br/>{t('guidelineToFeelBetter.step4.descriptionLong')}</p>
                        
                        <div className="step-link">
                            <p>{t('guidelineToFeelBetter.step4.linkText')} <Link to="/improve-my-life-situation" className="guideline-link">{t('guidelineToFeelBetter.step4.linkName')}</Link> {t('guidelineToFeelBetter.step4.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('guidelineToFeelBetter.step4.whyMatters')}
                        </div>
                    </div>
                </div>
                <br/>

                <div className="hint-section">
                    <div className="hint-header">
                        <span className="hint-icon">💡</span>
                        <h3>{t('guidelineToFeelBetter.hint.title')}</h3>
                    </div>
                    <div className="hint-content">
                        <p>{t('guidelineToFeelBetter.hint.description')}</p>
                        <div className="step-link">
                            <p>{t('guidelineToFeelBetter.hint.linkText')} <Link to="/do-it-yourself" className="guideline-link">{t('guidelineToFeelBetter.hint.linkName')}</Link> {t('guidelineToFeelBetter.hint.linkEnd')}</p>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="inspiration-quote">
                    <blockquote>
                        <p><strong>"{t('guidelineToFeelBetter.quote')}"</strong></p>
                        <cite>{t('guidelineToFeelBetter.quoteAuthor')}</cite>
                    </blockquote>
                </div>

                <div className="closing-message">
                    <h3>{t('guidelineToFeelBetter.closing.title')}</h3>
                    <p>{t('guidelineToFeelBetter.closing.description')}</p>
                    <p className="encouragement">{t('guidelineToFeelBetter.closing.encouragement')}</p>
                </div>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default GuidelineToFeelBetter;
