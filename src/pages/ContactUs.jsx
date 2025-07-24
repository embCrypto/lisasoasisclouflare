import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';

function ContactUs() {
    const { t } = useLanguage();
    
    return (
        <div className="page-container">
            <div className="step-card" style={{ padding: '30px' }}>
                <h1 style={{ marginBottom: '20px' }}>{t('contactUs.title')}</h1>
                <p style={{ marginBottom: '30px', fontSize: '18px' }}>{t('contactUs.subtitle')}</p>
                
                <div className="step-card" style={{ marginTop: '25px', padding: '25px' }}>
                    <h3 style={{ marginBottom: '15px' }}>{t('contactUs.email.title')}</h3>
                    <p style={{ marginBottom: '15px' }}>
                        <a href="mailto:elena.cryptobartl@gmail.com" 
                           style={{ color: '#2d5016', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
                            {t('contactUs.email.address')}
                        </a>
                    </p>
                    <p style={{ paddingTop: '10px' }}>{t('contactUs.email.description')}</p>
                </div>

                <div className="step-card" style={{ marginTop: '30px', padding: '25px' }}>
                    <h3 style={{ marginBottom: '15px' }}>{t('contactUs.instagram.title')}</h3>
                    <p style={{ marginBottom: '15px' }}>
                        <a href="https://instagram.com/Instagram" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style={{ color: '#2d5016', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
                            {t('contactUs.instagram.handle')}
                        </a>
                    </p>
                    <p style={{ paddingTop: '10px' }}>{t('contactUs.instagram.description')}</p>
                </div>

                <div className="step-card" style={{ marginTop: '30px', padding: '25px' }}>
                    <h3 style={{ marginBottom: '15px' }}>{t('contactUs.topics.title')}</h3>
                    <ul style={{ textAlign: 'left', margin: '15px 0', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item1')}</li>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item2')}</li>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item3')}</li>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item4')}</li>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item5')}</li>
                        <li style={{ marginBottom: '8px' }}>{t('contactUs.topics.item6')}</li>
                    </ul>
                </div>

                <div className="step-card" style={{ marginTop: '30px', padding: '25px' }}>
                    <h3 style={{ marginBottom: '15px' }}>{t('contactUs.responseTime.title')}</h3>
                    <p style={{ marginBottom: '15px' }}>{t('contactUs.responseTime.description')}</p>
                    <p style={{ paddingTop: '10px' }}><strong>{t('contactUs.responseTime.closing')}</strong></p>
                </div>
                <br/>
            </div>
            <ScrollToTop />
        </div>
    );
}

export default ContactUs;