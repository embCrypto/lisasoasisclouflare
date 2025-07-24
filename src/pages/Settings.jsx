import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../translations';

function Settings() {
    const { t, currentLanguage, changeLanguage } = useLanguage();

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <>
            <h2>{t('nav.settings')}</h2>
            <p>Configure your application preferences and account settings.</p>
            
            <div>
                <h3>Language Settings</h3>
                <div style={{ marginBottom: '2rem' }}>
                    <label htmlFor="language-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Choose Language:
                    </label>
                    <select 
                        id="language-select"
                        value={currentLanguage || 'en'} 
                        onChange={handleLanguageChange}
                        style={{
                            padding: '0.75rem',
                            fontSize: '1rem',
                            borderRadius: '5px',
                            border: '2px solid #e0e0e0',
                            minWidth: '200px',
                            backgroundColor: 'white'
                        }}
                    >
                        {languages.map((language) => (
                            <option key={language.code} value={language.code}>
                                {language.flag} {language.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div>
                <h3>General Settings</h3>
                <p>Customize your experience with notifications, language, and display preferences.</p>
            </div>
        </>
    );
}

export default Settings;
