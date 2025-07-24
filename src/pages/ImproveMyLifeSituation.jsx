import { useLanguage } from '../contexts/LanguageContext';

function ImproveMyLifeSituation() {
    const { currentLanguage } = useLanguage();

    // Translations for all displayed text
    const translations = {
        en: {
            title: "Improve My Life Situation",
            desc: "Holistic approaches to enhancing your overall life quality and personal development.",
            comingSoon: "🚧 Coming soon 🚧",
            inspired: "This page will be inspired by the writings of Florence Scovel Shinn."
        },
        de: {
            title: "Verbessere meine Lebenssituation",
            desc: "Ganzheitliche Ansätze zur Verbesserung deiner Lebensqualität und persönlichen Entwicklung.",
            comingSoon: "🚧 Demnächst verfügbar 🚧",
            inspired: "Diese Seite wird inspiriert von den Schriften von Florence Scovel Shinn."
        },
        ro: {
            title: "Îmbunătățește-ți Situația de Viață",
            desc: "Abordări holistice pentru a-ți îmbunătăți calitatea vieții și dezvoltarea personală.",
            comingSoon: "🚧 În curând 🚧",
            inspired: "Această pagină va fi inspirată de scrierile lui Florence Scovel Shinn."
        }
    };

    const t = translations[currentLanguage] || translations.en;

    return (
        <>
            <h2>{t.title}</h2>
            <p>{t.desc}</p>
            
            <div
                style={{
                    background: '#fffbe6',
                    border: '2px solid #ffe066',
                    borderRadius: '12px',
                    padding: '40px 0',
                    margin: '40px 0',
                    textAlign: 'center',
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    color: '#b8860b',
                    letterSpacing: '2px',
                    boxShadow: '0 4px 16px rgba(255, 215, 0, 0.10)'
                }}
            >
                {t.comingSoon}
                <div
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        color: '#a88b2a',
                        marginTop: '18px',
                        letterSpacing: 'normal'
                    }}
                >
                    <em>{t.inspired}</em>
                </div>
            </div>
        </>
    );
}

export default ImproveMyLifeSituation;
