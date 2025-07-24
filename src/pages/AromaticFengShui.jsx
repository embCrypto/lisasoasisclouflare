import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';

function AromaticFengShui() {
    const { t } = useLanguage();
    
    return (
        <div className="guideline-container">
            <h2>{t('aromaticFengShui.title')}</h2>
            <p className="intro-text">{t('aromaticFengShui.introText')}</p>
            
            <div className="wellness-journey">
                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('aromaticFengShui.section1.number')}</span>
                        <h3>{t('aromaticFengShui.section1.title')}</h3>
                        <p className="step-subtitle">{t('aromaticFengShui.section1.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aromaticFengShui.section1.description')}</p>
                        
                        <h4>{t('aromaticFengShui.section1.principlesTitle')}</h4>
                        <ul className="action-list">
                            <li><strong>{t('aromaticFengShui.section1.principle1')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section1.principle2')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section1.principle3')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section1.principle4')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section1.principle5')}</strong></li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('aromaticFengShui.section1.whyMatters')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('aromaticFengShui.section2.number')}</span>
                        <h3>{t('aromaticFengShui.section2.title')}</h3>
                        <p className="step-subtitle">{t('aromaticFengShui.section2.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aromaticFengShui.section2.description')}</p>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section2.wood.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section2.wood.oils')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.wood.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.wood.bestFor')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section2.fire.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section2.fire.oils')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.fire.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.fire.bestFor')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section2.earth.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section2.earth.oils')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.earth.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.earth.bestFor')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section2.metal.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section2.metal.oils')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.metal.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.metal.bestFor')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section2.water.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section2.water.oils')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.water.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section2.water.bestFor')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="step-link">
                            <p>{t('aromaticFengShui.section2.linkText')} <Link to="/profile-of-essential-oils" className="guideline-link">{t('aromaticFengShui.section2.linkName')}</Link> {t('aromaticFengShui.section2.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('guidelineToFeelBetter.hint.title').split(':')[0]}:</strong> {t('aromaticFengShui.section2.balanceTip')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('aromaticFengShui.section3.number')}</span>
                        <h3>{t('aromaticFengShui.section3.title')}</h3>
                        <p className="step-subtitle">{t('aromaticFengShui.section3.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aromaticFengShui.section3.description')}</p>
                        
                        <div className="room-section">
                            <h5>{t('aromaticFengShui.section3.bedroom.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section3.bedroom.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.bedroom.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.bedroom.application')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.bedroom.avoid')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('aromaticFengShui.section3.kitchen.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section3.kitchen.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.kitchen.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.kitchen.application')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.kitchen.bonus')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('aromaticFengShui.section3.livingRoom.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section3.livingRoom.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.livingRoom.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.livingRoom.application')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.livingRoom.seasonal')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('aromaticFengShui.section3.homeOffice.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section3.homeOffice.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.homeOffice.purpose')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.homeOffice.application')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section3.homeOffice.timing')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="why-matters">
                            <strong>Transition tip:</strong> {t('aromaticFengShui.section3.transitionTip')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('aromaticFengShui.section4.number')}</span>
                        <h3>{t('aromaticFengShui.section4.title')}</h3>
                        <p className="step-subtitle">{t('aromaticFengShui.section4.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aromaticFengShui.section4.description')}</p>
                        
                        <h4>{t('aromaticFengShui.section4.methodsTitle')}</h4>
                        <ul className="action-list">
                            <li><strong>{t('aromaticFengShui.section4.method1')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section4.method2')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section4.method3')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section4.method4')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section4.method5')}</strong></li>
                            <li><strong>{t('aromaticFengShui.section4.method6')}</strong></li>
                        </ul>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section4.diyTitle')}</h5>
                            <ul className="action-list">
                                <li>{t('aromaticFengShui.section4.diyStep1')}</li>
                                <li>{t('aromaticFengShui.section4.diyStep2')}</li>
                                <li>{t('aromaticFengShui.section4.diyStep3')}</li>
                                <li>{t('aromaticFengShui.section4.diyStep4')}</li>
                            </ul>
                        </div>
                        
                        <div className="step-link">
                            <p>{t('aromaticFengShui.section4.linkText')} <Link to="/do-it-yourself" className="guideline-link">{t('aromaticFengShui.section4.linkName')}</Link> {t('aromaticFengShui.section4.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>Mindful practice:</strong> {t('aromaticFengShui.section4.mindfulPractice')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('aromaticFengShui.section5.number')}</span>
                        <h3>{t('aromaticFengShui.section5.title')}</h3>
                        <p className="step-subtitle">{t('aromaticFengShui.section5.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('aromaticFengShui.section5.description')}</p>
                        
                        <h4>{t('aromaticFengShui.section5.seasonalTitle')}</h4>
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section5.spring.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section5.spring.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.spring.focus')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.spring.practice')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section5.summer.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section5.summer.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.summer.focus')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.summer.practice')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section5.autumn.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section5.autumn.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.autumn.focus')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.autumn.practice')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('aromaticFengShui.section5.winter.title')}</h5>
                            <ul className="action-list">
                                <li><strong>{t('aromaticFengShui.section5.winter.scents')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.winter.focus')}</strong></li>
                                <li><strong>{t('aromaticFengShui.section5.winter.practice')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="step-link">
                            <p>{t('aromaticFengShui.section5.linkText')} <Link to="/treat-health-issues-natural-remedies" className="guideline-link">{t('aromaticFengShui.section5.linkName')}</Link> {t('aromaticFengShui.section5.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>Natural rhythm:</strong> {t('aromaticFengShui.section5.naturalRhythm')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="inspiration-quote">
                <blockquote>
                    <p><strong>"{t('aromaticFengShui.quote')}"</strong></p>
                    <cite>— {t('aromaticFengShui.quoteAuthor')}</cite>
                </blockquote>
            </div>

            <div className="closing-message">
                <h3>{t('aromaticFengShui.closing.title')}</h3>
                <p>{t('aromaticFengShui.closing.description')}</p>
                <p className="encouragement">{t('aromaticFengShui.closing.encouragement')}</p>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default AromaticFengShui;
