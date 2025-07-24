import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';

function HomeCleaning() {
    const { t } = useLanguage();
    
    return (
        <div className="guideline-container">
            <h2>{t('homeCleaning.title')}</h2>
            <p className="intro-text">{t('homeCleaning.introText')}</p>
            
            <div className="wellness-journey">
                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('homeCleaning.section1.number')}</span>
                        <h3>{t('homeCleaning.section1.title')}</h3>
                        <p className="step-subtitle">{t('homeCleaning.section1.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('homeCleaning.section1.description')}</p>
                        
                        <h4>{t('homeCleaning.section1.benefitsTitle')}</h4>
                        <ul className="action-list">
                            <li><strong>{t('homeCleaning.section1.benefit1')}</strong></li>
                            <li><strong>{t('homeCleaning.section1.benefit2')}</strong></li>
                            <li><strong>{t('homeCleaning.section1.benefit3')}</strong></li>
                            <li><strong>{t('homeCleaning.section1.benefit4')}</strong></li>
                            <li><strong>{t('homeCleaning.section1.benefit5')}</strong></li>
                            <li><strong>{t('homeCleaning.section1.benefit6')}</strong></li>
                        </ul>
                        
                        <div className="step-link">
                            <p>{t('homeCleaning.section1.linkText')} <Link to="/profile-of-essential-oils" className="guideline-link">{t('homeCleaning.section1.linkName')}</Link> {t('homeCleaning.section1.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>{t('common.whyMatters')}</strong> {t('homeCleaning.section1.whyMatters')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('homeCleaning.section2.number')}</span>
                        <h3>{t('homeCleaning.section2.title')}</h3>
                        <p className="step-subtitle">{t('homeCleaning.section2.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('homeCleaning.section2.description')}</p>
                        
                        <h4>{t('homeCleaning.section2.ingredientsTitle')}</h4>
                        <ul className="action-list">
                            <li><strong>{t('homeCleaning.section2.ingredient1')}</strong></li>
                            <li><strong>{t('homeCleaning.section2.ingredient2')}</strong></li>
                            <li><strong>{t('homeCleaning.section2.ingredient3')}</strong></li>
                            <li><strong>{t('homeCleaning.section2.ingredient4')}</strong></li>
                            <li><strong>{t('homeCleaning.section2.ingredient5')}</strong></li>
                            <li><strong>{t('homeCleaning.section2.ingredient6')}</strong></li>
                        </ul>
                        
                        <h4>{t('homeCleaning.section2.toolsTitle')}</h4>
                        <ul className="action-list">
                            <li>{t('homeCleaning.section2.tool1')}</li>
                            <li>{t('homeCleaning.section2.tool2')}</li>
                            <li>{t('homeCleaning.section2.tool3')}</li>
                            <li>{t('homeCleaning.section2.tool4')}</li>
                        </ul>
                        
                        <div className="why-matters">
                            <strong>Safety tip:</strong> {t('homeCleaning.section2.safetyTip')}
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('homeCleaning.section3.number')}</span>
                        <h3>{t('homeCleaning.section3.title')}</h3>
                        <p className="step-subtitle">{t('homeCleaning.section3.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('homeCleaning.section3.description')}</p>
                        
                        <div className="recipe-section">
                            <h5>{t('homeCleaning.section3.recipe1.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section3.recipe1.ingredient1')}</li>
                                <li>{t('homeCleaning.section3.recipe1.ingredient2')}</li>
                                <li>{t('homeCleaning.section3.recipe1.ingredient3')}</li>
                                <li>{t('homeCleaning.section3.recipe1.ingredient4')}</li>
                                <li>{t('homeCleaning.section3.recipe1.ingredient5')}</li>
                                <li>{t('homeCleaning.section3.recipe1.instruction')}</li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('homeCleaning.section3.recipe2.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section3.recipe2.ingredient1')}</li>
                                <li>{t('homeCleaning.section3.recipe2.ingredient2')}</li>
                                <li>{t('homeCleaning.section3.recipe2.ingredient3')}</li>
                                <li>{t('homeCleaning.section3.recipe2.ingredient4')}</li>
                                <li>{t('homeCleaning.section3.recipe2.instruction')}</li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('homeCleaning.section3.recipe3.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section3.recipe3.ingredient1')}</li>
                                <li>{t('homeCleaning.section3.recipe3.ingredient2')}</li>
                                <li>{t('homeCleaning.section3.recipe3.ingredient3')}</li>
                                <li>{t('homeCleaning.section3.recipe3.instruction')}</li>
                            </ul>
                        </div>
                        
                        <div className="recipe-section">
                            <h5>{t('homeCleaning.section3.recipe4.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section3.recipe4.ingredient1')}</li>
                                <li>{t('homeCleaning.section3.recipe4.ingredient2')}</li>
                                <li>{t('homeCleaning.section3.recipe4.ingredient3')}</li>
                                <li>{t('homeCleaning.section3.recipe4.ingredient4')}</li>
                                <li>{t('homeCleaning.section3.recipe4.instruction')}</li>
                            </ul>
                        </div>
                        
                        <div className="step-link">
                            <p>{t('homeCleaning.section3.linkText')} <Link to="/do-it-yourself" className="guideline-link">{t('homeCleaning.section3.linkName')}</Link> {t('homeCleaning.section3.linkEnd')}</p>
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('homeCleaning.section4.number')}</span>
                        <h3>{t('homeCleaning.section4.title')}</h3>
                        <p className="step-subtitle">{t('homeCleaning.section4.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('homeCleaning.section4.description')}</p>
                        
                        <div className="room-section">
                            <h5>{t('homeCleaning.section4.bedroom.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section4.bedroom.task1')}</li>
                                <li>{t('homeCleaning.section4.bedroom.task2')}</li>
                                <li>{t('homeCleaning.section4.bedroom.task3')}</li>
                                <li>{t('homeCleaning.section4.bedroom.task4')}</li>
                                <li><strong>{t('homeCleaning.section4.bedroom.special')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('homeCleaning.section4.kitchen.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section4.kitchen.task1')}</li>
                                <li>{t('homeCleaning.section4.kitchen.task2')}</li>
                                <li>{t('homeCleaning.section4.kitchen.task3')}</li>
                                <li>{t('homeCleaning.section4.kitchen.task4')}</li>
                                <li><strong>{t('homeCleaning.section4.kitchen.special')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('homeCleaning.section4.bathroom.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section4.bathroom.task1')}</li>
                                <li>{t('homeCleaning.section4.bathroom.task2')}</li>
                                <li>{t('homeCleaning.section4.bathroom.task3')}</li>
                                <li>{t('homeCleaning.section4.bathroom.task4')}</li>
                                <li><strong>{t('homeCleaning.section4.bathroom.special')}</strong></li>
                            </ul>
                        </div>
                        
                        <div className="room-section">
                            <h5>{t('homeCleaning.section4.livingAreas.title')}</h5>
                            <ul className="action-list">
                                <li>{t('homeCleaning.section4.livingAreas.task1')}</li>
                                <li>{t('homeCleaning.section4.livingAreas.task2')}</li>
                                <li>{t('homeCleaning.section4.livingAreas.task3')}</li>
                                <li>{t('homeCleaning.section4.livingAreas.task4')}</li>
                                <li><strong>{t('homeCleaning.section4.livingAreas.special')}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="step-card">
                    <div className="step-header">
                        <span className="step-number">{t('homeCleaning.section5.number')}</span>
                        <h3>{t('homeCleaning.section5.title')}</h3>
                        <p className="step-subtitle">{t('homeCleaning.section5.subtitle')}</p>
                    </div>
                    <div className="step-content">
                        <p className="step-description">{t('homeCleaning.section5.description')}</p>
                        
                        <h4>{t('homeCleaning.section5.practicesTitle')}</h4>
                        <ul className="action-list">
                            <li>{t('homeCleaning.section5.practice1')}</li>
                            <li>{t('homeCleaning.section5.practice2')}</li>
                            <li>{t('homeCleaning.section5.practice3')}</li>
                            <li>{t('homeCleaning.section5.practice4')}</li>
                            <li>{t('homeCleaning.section5.practice5')}</li>
                            <li>{t('homeCleaning.section5.practice6')}</li>
                        </ul>
                        
                        <h4>{t('homeCleaning.section5.energyTitle')}</h4>
                        <ul className="action-list">
                            <li>{t('homeCleaning.section5.energy1')}</li>
                            <li>{t('homeCleaning.section5.energy2')}</li>
                            <li>{t('homeCleaning.section5.energy3')}</li>
                            <li>{t('homeCleaning.section5.energy4')}</li>
                            <li>{t('homeCleaning.section5.energy5')}</li>
                        </ul>
                        
                        <div className="step-link">
                            <p>{t('homeCleaning.section5.linkText')} <Link to="/aromatic-feng-shui" className="guideline-link">{t('homeCleaning.section5.linkName1')}</Link> {t('homeCleaning.section5.linkMiddle')} <Link to="/profile-of-essential-oils" className="guideline-link">{t('homeCleaning.section5.linkName2')}</Link> {t('homeCleaning.section5.linkEnd')}</p>
                        </div>
                        
                        <div className="why-matters">
                            <strong>Mindful tip:</strong> {t('homeCleaning.section5.mindfulTip')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="inspiration-quote">
                <blockquote>
                    <p><strong>"{t('homeCleaning.quote')}"</strong></p>
                    <cite>{t('homeCleaning.quoteAuthor')}</cite>
                </blockquote>
            </div>

            <div className="closing-message">
                <h3>{t('homeCleaning.closing.title')}</h3>
                <p>{t('homeCleaning.closing.description')}</p>
                <p className="encouragement">{t('homeCleaning.closing.encouragement')}</p>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default HomeCleaning;
