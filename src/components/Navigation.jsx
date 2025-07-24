import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navigation.css';

function Navigation() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navigation">
            <div className="nav-brand">
                <Link to="/" onClick={closeMenu}>{t('nav.brand')}</Link>
            </div>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>{t('nav.home')}</Link></li>
                <li className="dropdown">
                    <span className="dropdown-label">{t('nav.healthWellness')} ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/guideline-to-feel-better" onClick={closeMenu}>{t('nav.guidelineToFeelBetter')}</Link></li>
                        <li><Link to="/profile-of-essential-oils" onClick={closeMenu}>{t('nav.oilProfiles')}</Link></li>
                        <li><Link to="/treat-health-issues-essential-oils" onClick={closeMenu}>{t('nav.essentialOils')}</Link></li>
                        <li><Link to="/treat-health-issues-natural-remedies" onClick={closeMenu}>{t('nav.naturalRemedies')}</Link></li>
                        <li><Link to="/improve-my-life-situation" onClick={closeMenu}>{t('nav.improveLifeSituation')}</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <span className="dropdown-label">{t('nav.diyHome')} ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/do-it-yourself" onClick={closeMenu}>{t('nav.doItYourself')}</Link></li>
                        <li><Link to="/home-cleaning" onClick={closeMenu}>{t('nav.homeCleaning')}</Link></li>
                        <li><Link to="/aromatic-feng-shui" onClick={closeMenu}>{t('nav.aromaticFengShui')}</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <span className="dropdown-label">{t('nav.shop')} ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/shop" onClick={closeMenu}>{t('nav.shop')}</Link></li>
                        <li><Link to="/shopping-cart" onClick={closeMenu}>{t('nav.shoppingCart')}</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <span className="dropdown-label">{t('nav.account')} ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/my-account" onClick={closeMenu}>{t('nav.myAccount')}</Link></li>
                        <li><Link to="/settings" onClick={closeMenu}>{t('nav.settings')}</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <span className="dropdown-label">{t('nav.info')} ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/about-us" onClick={closeMenu}>{t('nav.aboutUs')}</Link></li>
                        <li><Link to="/contact-us" onClick={closeMenu}>{t('nav.contactUs')}</Link></li>
                        <li><Link to="/legals" onClick={closeMenu}>{t('nav.legal')}</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
