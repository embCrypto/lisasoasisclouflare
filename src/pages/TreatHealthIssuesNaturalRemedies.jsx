import React, { useState, useRef, useEffect, useContext } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../contexts/LanguageContext';

// Import English recipe components
import { 
    NatRemRecipe_Cold_EN,
    NatRemRecipe_Sniffles_EN,
    NatRemRecipe_SoreThroat_EN,
    NatRemRecipe_Constipation_EN,
    NatRemRecipe_Insomnia_EN,
    NatRemRecipe_Depression_EN,
    NatRemRecipe_CalfCramps_EN,
    NatRemRecipe_CirculatoryProblems_EN
} from '../components/NatRemHealingRecipes';

// Import German recipe components
import { 
    NatRemRecipe_Cold_DE,
    NatRemRecipe_Sniffles_DE,
    NatRemRecipe_SoreThroat_DE,
    NatRemRecipe_Constipation_DE,
    NatRemRecipe_Insomnia_DE,
    NatRemRecipe_Depression_DE,
    NatRemRecipe_CalfCramps_DE,
    NatRemRecipe_CirculatoryProblems_DE
} from '../components/NatRemHealingRecipes_DE';

// Import Romanian recipe components
import { 
    NatRemRecipe_Cold_RO,
    NatRemRecipe_Sniffles_RO,
    NatRemRecipe_SoreThroat_RO,
    NatRemRecipe_Constipation_RO,
    NatRemRecipe_Insomnia_RO,
    NatRemRecipe_Depression_RO,
    NatRemRecipe_CalfCramps_RO,
    NatRemRecipe_CirculatoryProblems_RO
} from '../components/NatRemHealingRecipes_RO';

function TreatHealthIssuesNaturalRemedies() {
    const { language, currentLanguage } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    
    // Recipe refs for scrolling
    const coldRecipeRef = useRef(null);
    const snifflesRecipeRef = useRef(null);
    const soreThroatRecipeRef = useRef(null);
    const constipationRecipeRef = useRef(null);
    const insomniaRecipeRef = useRef(null);
    const depressionRecipeRef = useRef(null);
    const calfCrampsRecipeRef = useRef(null);
    const circulatoryRecipeRef = useRef(null);
    
    // Get recipe data based on language
    const getRecipeData = () => {
        const baseRecipes = [
            {
                id: 'cold',
                ref: coldRecipeRef,
                keywords: ['cold', 'fever', 'infection', 'immune', 'zinc', 'vitamin c', 'bath', 'tea', 'propolis', 'chicken soup', 'cough', 'flu', 'rising bath']
            },
            {
                id: 'sniffles',
                ref: snifflesRecipeRef,
                keywords: ['sniffles', 'runny nose', 'congestion', 'nasal', 'steam', 'inhalation', 'saline', 'blocked nose', 'mucus', 'sinus', 'eucalyptus']
            },
            {
                id: 'sore-throat',
                ref: soreThroatRecipeRef,
                keywords: ['sore throat', 'throat pain', 'gargle', 'honey', 'lemon', 'salt water', 'inflammation', 'swallowing', 'throat soother', 'propolis']
            },
            {
                id: 'constipation',
                ref: constipationRecipeRef,
                keywords: ['constipation', 'bowel movement', 'fiber', 'laxative', 'digestive', 'prunes', 'magnesium', 'psyllium', 'flaxseed', 'regularity']
            },
            {
                id: 'insomnia',
                ref: insomniaRecipeRef,
                keywords: ['insomnia', 'sleep', 'bedtime', 'melatonin', 'chamomile', 'valerian', 'magnesium', 'sleep hygiene', 'restless', 'tired', 'fatigue', 'lavender']
            },
            {
                id: 'depression',
                ref: depressionRecipeRef,
                keywords: ['depression', 'mood', 'sadness', 'st johns wort', 'omega 3', 'serotonin', 'emotional support', 'anxiety', 'low mood', 'vitamin d', 'exercise']
            },
            {
                id: 'calf-cramps',
                ref: calfCrampsRecipeRef,
                keywords: ['calf cramps', 'muscle cramps', 'leg cramps', 'magnesium', 'potassium', 'electrolytes', 'stretching', 'muscle pain', 'charlie horse', 'spasms']
            },
            {
                id: 'circulatory',
                ref: circulatoryRecipeRef,
                keywords: ['circulation', 'blood flow', 'compression stockings', 'kneipp', 'cold bath', 'venous', 'hydration', 'coffee', 'walking', 'exercise', 'varicose veins', 'legs']
            }
        ];

        // Add language-specific content
        const languageContent = {
            en: {
                recipes: baseRecipes.map(recipe => ({
                    ...recipe,
                    title: getEnglishTitle(recipe.id),
                    description: getEnglishDescription(recipe.id),
                    icon: getRecipeIcon(recipe.id)
                }))
            },
            de: {
                recipes: baseRecipes.map(recipe => ({
                    ...recipe,
                    title: getGermanTitle(recipe.id),
                    description: getGermanDescription(recipe.id),
                    icon: getRecipeIcon(recipe.id),
                    keywords: [...recipe.keywords, ...getGermanKeywords(recipe.id)]
                }))
            },
            ro: {
                recipes: baseRecipes.map(recipe => ({
                    ...recipe,
                    title: getRomanianTitle(recipe.id),
                    description: getRomanianDescription(recipe.id),
                    icon: getRecipeIcon(recipe.id),
                    keywords: [...recipe.keywords, ...getRomanianKeywords(recipe.id)]
                }))
            }
        };
        console.log('Language Content:', languageContent);
        console.log('Current Language:', currentLanguage);
        return languageContent[currentLanguage].recipes;
    };

    // Helper functions for titles, descriptions, and keywords
    const getEnglishTitle = (id) => {
        const titles = {
            'cold': 'Cold & Fever Relief',
            'sniffles': 'Sniffles & Runny Nose Relief',
            'sore-throat': 'Sore Throat Relief',
            'constipation': 'Constipation Relief',
            'insomnia': 'Insomnia & Sleep Relief',
            'depression': 'Depression & Mood Support',
            'calf-cramps': 'Calf Cramps & Muscle Relief',
            'circulatory': 'Circulatory Problems Relief'
        };
        return titles[id];
    };

    const getGermanTitle = (id) => {
        const titles = {
            'cold': 'Erkältung & Fieber Linderung',
            'sniffles': 'Schnupfen & Laufende Nase Linderung',
            'sore-throat': 'Halsschmerzen Linderung',
            'constipation': 'Verstopfung Linderung',
            'insomnia': 'Schlaflosigkeit & Schlaf Hilfe',
            'depression': 'Depression & Stimmungsunterstützung',
            'calf-cramps': 'Wadenkrämpfe & Muskel Linderung',
            'circulatory': 'Durchblutungsprobleme Linderung'
        };
        return titles[id];
    };

    const getRomanianTitle = (id) => {
        const titles = {
            'cold': 'Răceală & Febră - Remedii',
            'sniffles': 'Guturai & Nas Care Curge - Remedii',
            'sore-throat': 'Durerea de Gât - Remedii',
            'constipation': 'Constipație - Remedii',
            'insomnia': 'Insomnie & Somn - Ajutor',
            'depression': 'Depresie & Susținerea Dispoziției',
            'calf-cramps': 'Crampe Gambă & Mușchi - Remedii',
            'circulatory': 'Probleme Circulatorii - Remedii'
        };
        return titles[id];
    };

    const getEnglishDescription = (id) => {
        const descriptions = {
            'cold': 'Rising bath, zinc/vitamin C, herbal teas, and natural immune boosters',
            'sniffles': 'Nasal remedies, steam inhalation, saline solutions, and congestion relief',
            'sore-throat': 'Gargling solutions, throat soothers, honey remedies, and anti-inflammatory treatments',
            'constipation': 'Fiber supplements, natural laxatives, digestive aids, and bowel movement support',
            'insomnia': 'Natural sleep aids, bedtime routines, calming herbs, and sleep hygiene practices',
            'depression': 'Natural mood enhancers, herbal remedies, lifestyle changes, and emotional support',
            'calf-cramps': 'Muscle relaxants, electrolyte balance, stretching techniques, and cramp prevention',
            'circulatory': 'Compression stockings, cold arm baths, hydration, and circulation support'
        };
        return descriptions[id];
    };

    const getGermanDescription = (id) => {
        const descriptions = {
            'cold': 'Ansteigende Bäder, Zink/Vitamin C, Kräutertees und natürliche Immunstärker',
            'sniffles': 'Nasenheilmittel, Dampfinhalation, Kochsalzlösungen und Entstauung',
            'sore-throat': 'Gurgellösungen, Halsberuhiger, Honigheilmittel und entzündungshemmende Behandlungen',
            'constipation': 'Ballaststoffergänzungen, natürliche Abführmittel, Verdauungshilfen und Stuhlgangunterstützung',
            'insomnia': 'Natürliche Schlafhilfen, Abendroutinen, beruhigende Kräuter und Schlafhygienepraktiken',
            'depression': 'Natürliche Stimmungsaufheller, Kräuterheilmittel, Lebensstiländerungen und emotionale Unterstützung',
            'calf-cramps': 'Muskelrelaxantien, Elektrolytbalance, Dehntechniken und Krampfvorbeugung',
            'circulatory': 'Kompressionsstrümpfe, kalte Armbäder, Hydratation und Kreislaufunterstützung'
        };
        return descriptions[id];
    };

    const getRomanianDescription = (id) => {
        const descriptions = {
            'cold': 'Băi crescătoare, zinc/vitamina C, ceaiuri din plante și stimulente naturale ale imunității',
            'sniffles': 'Remedii nazale, inhalații cu vapori, soluții saline și ameliorarea congestiei',
            'sore-throat': 'Soluții de gargară, calmante pentru gât, remedii cu miere și tratamente antiinflamatoare',
            'constipation': 'Suplimente de fibre, laxative naturale, ajutoare digestive și susținerea tranzitului intestinal',
            'insomnia': 'Ajutoare naturale pentru somn, rutine de culcare, plante calmante și practici de igienă a somnului',
            'depression': 'Stimulatori naturali ai dispoziției, remedii din plante, schimbări de stil de viață și sprijin emoțional',
            'calf-cramps': 'Relaxanți musculari, echilibrul electroliților, tehnici de întindere și prevenirea crampelor',
            'circulatory': 'Ciorapi de compresie, băi reci pentru brațe, hidratare și sprijinul circulației'
        };
        return descriptions[id];
    };

    const getRecipeIcon = (id) => {
        const icons = {
            'cold': '🤧',
            'sniffles': '🤧',
            'sore-throat': '🗣️',
            'constipation': '🚽',
            'insomnia': '😴',
            'depression': '😢',
            'calf-cramps': '🦵',
            'circulatory': '💓'
        };
        return icons[id];
    };

    const getGermanKeywords = (id) => {
        const germanKeywords = {
            'cold': ['erkältung', 'fieber', 'infektion', 'immunsystem', 'zink', 'vitamin c', 'bad', 'tee', 'propolis', 'hühnersuppe', 'husten', 'grippe'],
            'sniffles': ['schnupfen', 'laufende nase', 'verstopfung', 'nasal', 'dampf', 'inhalation', 'kochsalz', 'verstopfte nase', 'schleim', 'nebenhöhlen'],
            'sore-throat': ['halsschmerzen', 'halsweh', 'gurgeln', 'honig', 'zitrone', 'salzwasser', 'entzündung', 'schlucken', 'halsberuhiger'],
            'constipation': ['verstopfung', 'stuhlgang', 'ballaststoffe', 'abführmittel', 'verdauung', 'pflaumen', 'magnesium', 'flohsamen', 'leinsamen'],
            'insomnia': ['schlaflosigkeit', 'schlaf', 'bettzeit', 'melatonin', 'kamille', 'baldrian', 'magnesium', 'schlafhygiene', 'unruhig', 'müde', 'lavendel'],
            'depression': ['depression', 'stimmung', 'traurigkeit', 'johanniskraut', 'omega 3', 'serotonin', 'emotionale unterstützung', 'angst', 'schlechte laune', 'vitamin d'],
            'calf-cramps': ['wadenkrämpfe', 'muskelkrämpfe', 'beinkrämpfe', 'magnesium', 'kalium', 'elektrolyte', 'dehnen', 'muskelschmerzen', 'krämpfe'],
            'circulatory': ['durchblutung', 'blutfluss', 'kompressionsstrümpfe', 'kneipp', 'kaltes bad', 'venös', 'hydratation', 'kaffee', 'gehen', 'krampfadern', 'beine']
        };
        return germanKeywords[id] || [];
    };

    const getRomanianKeywords = (id) => {
        const romanianKeywords = {
            'cold': ['răceală', 'febră', 'infecție', 'imunitate', 'zinc', 'vitamina c', 'baie', 'ceai', 'propolis', 'supă de pui', 'tuse', 'gripă'],
            'sniffles': ['guturai', 'nas care curge', 'congestie', 'nazal', 'vapori', 'inhalație', 'salin', 'nas înfundat', 'mucus', 'sinusuri'],
            'sore-throat': ['durerea de gât', 'gât dureros', 'gargară', 'miere', 'lămâie', 'apă sărată', 'inflamație', 'înghițire', 'calmant pentru gât'],
            'constipation': ['constipație', 'scaun', 'fibre', 'laxativ', 'digestie', 'prune', 'magneziu', 'psyllium', 'semințe de in', 'regularitate'],
            'insomnia': ['insomnie', 'somn', 'culcare', 'melatonină', 'mușețel', 'valeriană', 'magneziu', 'igiena somnului', 'neliniște', 'oboseală', 'lavandă'],
            'depression': ['depresie', 'dispoziție', 'tristețe', 'sunătoare', 'omega 3', 'serotonină', 'sprijin emoțional', 'anxietate', 'dispoziție proastă', 'vitamina d'],
            'calf-cramps': ['crampe gambă', 'crampe musculare', 'crampe picioare', 'magneziu', 'potasiu', 'electroliți', 'întindere', 'dureri musculare', 'spasme'],
            'circulatory': ['circulație', 'flux sanguin', 'ciorapi compresie', 'kneipp', 'baie rece', 'venos', 'hidratare', 'cafea', 'mersul', 'vene varicoase', 'picioare']
        };
        return romanianKeywords[id] || [];
    };

    const recipes = getRecipeData();

    // Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Scroll to specific recipe
    const scrollToRecipe = (recipeRef) => {
        if (recipeRef.current) {
            recipeRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    // Handler for adding items to shopping cart
    const handleAddToCart = (cartItems) => {
        console.log('Adding items to cart:', cartItems);
        
        const itemNames = cartItems.map(item => `${item.name} ($${item.price})`).join('\n');
        const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        
        const alertMessage = currentLanguage === 'de' 
            ? `Artikel zum Warenkorb hinzugefügt:\n\n${itemNames}\n\nGesamtsumme: $${totalCost}\n\nHinweis: Dies ist eine Demo. In einer echten Implementierung würden diese zu Ihrem Warenkorb hinzugefügt.`
            : currentLanguage === 'ro'
            ? `Articole adăugate în coș:\n\n${itemNames}\n\nTotal: $${totalCost}\n\nNotă: Aceasta este o demonstrație. În implementarea reală, acestea ar fi adăugate la sistemul tău de coș de cumpărături.`
            : `Items added to cart:\n\n${itemNames}\n\nTotal: $${totalCost}\n\nNote: This is a demo. In a real implementation, these would be added to your shopping cart system.`;
        
        alert(alertMessage);
    };

    // Get recipe components based on language
    const getRecipeComponents = () => {
        switch (currentLanguage) {
            case 'de':
                return {
                    Cold: NatRemRecipe_Cold_DE,
                    Sniffles: NatRemRecipe_Sniffles_DE,
                    SoreThroat: NatRemRecipe_SoreThroat_DE,
                    Constipation: NatRemRecipe_Constipation_DE,
                    Insomnia: NatRemRecipe_Insomnia_DE,
                    Depression: NatRemRecipe_Depression_DE,
                    CalfCramps: NatRemRecipe_CalfCramps_DE,
                    CirculatoryProblems: NatRemRecipe_CirculatoryProblems_DE
                };
            case 'ro':
                return {
                    Cold: NatRemRecipe_Cold_RO,
                    Sniffles: NatRemRecipe_Sniffles_RO,
                    SoreThroat: NatRemRecipe_SoreThroat_RO,
                    Constipation: NatRemRecipe_Constipation_RO,
                    Insomnia: NatRemRecipe_Insomnia_RO,
                    Depression: NatRemRecipe_Depression_RO,
                    CalfCramps: NatRemRecipe_CalfCramps_RO,
                    CirculatoryProblems: NatRemRecipe_CirculatoryProblems_RO
                };
            default:
                return {
                    Cold: NatRemRecipe_Cold_EN,
                    Sniffles: NatRemRecipe_Sniffles_EN,
                    SoreThroat: NatRemRecipe_SoreThroat_EN,
                    Constipation: NatRemRecipe_Constipation_EN,
                    Insomnia: NatRemRecipe_Insomnia_EN,
                    Depression: NatRemRecipe_Depression_EN,
                    CalfCramps: NatRemRecipe_CalfCramps_EN,
                    CirculatoryProblems: NatRemRecipe_CirculatoryProblems_EN
                };
        }
    };

    const RecipeComponents = getRecipeComponents();

    // Get translated text
    const getText = () => {
        switch (currentLanguage) {
            case 'de':
                return {
                    title: 'Natürliche Heilmittel',
                    subtitle: 'Entdecken Sie bewährte natürliche Heilmittel für häufige Gesundheitsprobleme mit Kräutern, Nahrungsergänzungsmitteln und traditionellen Heilmethoden. Jedes Rezept enthält detaillierte Anweisungen, Zutatenlisten und wissenschaftliche Grundlagen, wo verfügbar.',
                    searchTitle: '🔍 Finden Sie Ihr natürliches Heilmittel',
                    searchPlaceholder: 'Suchen Sie Heilmittel nach Zustand, Zutat oder Schlüsselwort...',
                    quickJump: 'Schnell zum Heilmittel springen:',
                    noResults: 'Keine Heilmittel gefunden, die "{searchTerm}" entsprechen. Versuchen Sie nach Zuständen wie "erkältung", "schnupfen", "halsschmerzen", "verstopfung", "schlaflosigkeit", "depression", "krämpfe" oder "durchblutung" zu suchen.',
                    collectionTitle: '🌿 Vollständige Sammlung natürlicher Heilmittel!',
                    collectionSubtitle: 'Zugriff auf unsere vollständige Sammlung von 8 umfassenden natürlichen Heilmitteln für die häufigsten Gesundheitszustände. Jedes Heilmittel enthält detaillierte Anweisungen, Zutatenlisten, wissenschaftliche Grundlagen und Sicherheitsrichtlinien.',
                    fullCollection: 'Vollständige Heilmittelsammlung:',
                    features: 'Heilmittel-Eigenschaften:',
                    featureNatural: '🌿 Natürliche Zutaten',
                    featureBacked: '📚 Wissenschaftlich Fundiert',
                    featureShopping: '🛒 Einkaufslisten',
                    featureSafety: '⚕️ Sicherheitsrichtlinien',
                    featureTargeted: '🎯 Zielgerichtete Lösungen',
                    featureSearchable: '🔍 Durchsuchbare Datenbank',
                    safetyTitle: 'Sicherheitshinweis & Attribution',
                    safetyText: 'Natürliche Heilmittel können kraftvoll sein und mit Medikamenten interagieren oder Kontraindikationen haben. Konsultieren Sie immer einen Arzt, bevor Sie eine neue Behandlung beginnen, besonders wenn Sie zugrunde liegende Gesundheitszustände haben oder Medikamente einnehmen. Diese Heilmittel dienen nur Informationszwecken und sind nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder zu verhindern.',
                    attributionTitle: '📚 Inspiriert von traditioneller Weisheit',
                    attributionText: 'Viele dieser natürlichen Heilmittel sind inspiriert von traditionellem Heilwissen aus:\n"Hebammenwissen für Mama & Baby - Naturheilkunde und ganzheitliche Begleitung"\nvon Kareen Dannhauer, erschienen im Kösel Verlag.\nEin umfassender Leitfaden für natürliche Heilung und ganzheitliche Betreuung aus der Hebammenweisheit.'
                };
            case 'ro':
                return {
                    title: 'Remedii Naturale de Vindecare',
                    subtitle: 'Descoperă remedii naturale testate în timp pentru problemele comune de sănătate folosind plante, suplimente și metode tradiționale de vindecare. Fiecare rețetă include instrucțiuni detaliate, liste de ingrediente și fundamente științifice unde sunt disponibile.',
                    searchTitle: '🔍 Găsește-ți remediul natural',
                    searchPlaceholder: 'Caută remedii după afecțiune, ingredient sau cuvânt cheie...',
                    quickJump: 'Salt rapid la remediu:',
                    noResults: 'Nu s-au găsit remedii care să corespundă cu "{searchTerm}". Încearcă să cauți afecțiuni precum "răceală", "guturai", "durerea de gât", "constipație", "insomnie", "depresie", "crampe" sau "circulație".',
                    collectionTitle: '🌿 Colecția Completă de Remedii Naturale de Vindecare!',
                    collectionSubtitle: 'Accesează colecția noastră completă de 8 remedii naturale cuprinzătoare pentru cele mai comune afecțiuni de sănătate. Fiecare remediu include instrucțiuni detaliate, liste de ingrediente, fundamente științifice și ghiduri de siguranță.',
                    fullCollection: 'Colecția Completă de Remedii:',
                    features: 'Caracteristicile Remediilor:',
                    featureNatural: '🌿 Ingrediente Naturale',
                    featureBacked: '📚 Susținute Științific',
                    featureShopping: '🛒 Liste de Cumpărături',
                    featureSafety: '⚕️ Ghiduri de Siguranță',
                    featureTargeted: '🎯 Soluții Țintite',
                    featureSearchable: '🔍 Bază de Date Căutabilă',
                    safetyTitle: 'Notă de Siguranță & Atribuire',
                    safetyText: 'Remediile naturale pot fi puternice și pot interacționa cu medicamentele sau pot avea contraindicații. Consultă întotdeauna un profesionist în sănătate înainte de a începe orice tratament nou, mai ales dacă ai afecțiuni de sănătate de bază sau iei medicamente. Aceste remedii sunt doar în scop informativ și nu sunt destinate să diagnosticheze, să trateze, să vindece sau să prevină vreo boală.',
                    attributionTitle: '📚 Inspirat de înțelepciunea tradițională',
                    attributionText: 'Multe dintre aceste remedii naturale sunt inspirate de cunoștințele tradiționale de vindecare găsite în:\n"Hebammenwissen für Mama & Baby - Naturheilkunde und ganzheitliche Begleitung"\nde Kareen Dannhauer, publicat de Kösel.\nUn ghid cuprinzător pentru vindecarea naturală și îngrijirea holistică din înțelepciunea moașelor.'
                };
            default:
                return {
                    title: 'Natural Healing Remedies',
                    subtitle: 'Discover time-tested natural remedies for common health conditions using herbs, supplements, and traditional healing methods. Each recipe includes detailed instructions, ingredient lists, and scientific backing where available.',
                    searchTitle: '🔍 Find Your Natural Remedy',
                    searchPlaceholder: 'Search remedies by condition, ingredient, or keyword...',
                    quickJump: 'Quick Jump to Remedy:',
                    noResults: 'No remedies found matching "{searchTerm}". Try searching for conditions like "cold", "sniffles", "sore throat", "constipation", "insomnia", "depression", "cramps", or "circulation".',
                    collectionTitle: '🌿 Complete Natural Healing Remedies Collection!',
                    collectionSubtitle: 'Access our complete collection of 8 comprehensive natural remedies covering the most common health conditions. Each remedy includes detailed instructions, ingredient lists, scientific backing, and safety guidelines.',
                    fullCollection: 'Full Remedy Collection:',
                    features: 'Remedy Features:',
                    featureNatural: '🌿 Natural Ingredients',
                    featureBacked: '📚 Science-Backed',
                    featureShopping: '🛒 Shopping Lists',
                    featureSafety: '⚕️ Safety Guidelines',
                    featureTargeted: '🎯 Targeted Solutions',
                    featureSearchable: '🔍 Searchable Database',
                    safetyTitle: 'Safety Note & Attribution',
                    safetyText: 'Natural remedies can be powerful and may interact with medications or have contraindications. Always consult with a healthcare professional before starting any new treatment, especially if you have underlying health conditions or are taking medications. These remedies are for informational purposes and are not intended to diagnose, treat, cure, or prevent any disease.',
                    attributionTitle: '📚 Inspired by Traditional Wisdom',
                    attributionText: 'Many of these natural remedies are inspired by traditional healing knowledge found in:\n"Hebammenwissen für Mama & Baby - Naturheilkunde und ganzheitliche Begleitung"\nby Kareen Dannhauer, published by Kösel.\nA comprehensive guide to natural healing and holistic care from midwifery wisdom.'
                };
        }
    };

    const text = getText();

    return (
        <div className="page-container" style={{ maxWidth: '950px', margin: '0 auto' }}>
            <div className="step-card" style={{ padding: '30px' }}>
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
                    {text.title}
                </h1>
                <p style={{ marginBottom: '30px', fontSize: '18px', textAlign: 'center' }}>
                    {text.subtitle}
                </p>
                
                <div style={{ 
                    marginBottom: '40px', 
                    padding: '25px', 
                    background: 'rgba(143, 188, 143, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(143, 188, 143, 0.2)'
                }}>
                    <h3 style={{ color: '#2d5016', marginBottom: '20px', textAlign: 'center' }}>
                        {text.searchTitle}
                    </h3>
                    
                    <div style={{ marginBottom: '25px' }}>
                        <input
                            type="text"
                            placeholder={text.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 20px',
                                fontSize: '16px',
                                border: '2px solid rgba(143, 188, 143, 0.3)',
                                borderRadius: '25px',
                                outline: 'none',
                                background: 'rgba(255, 255, 255, 0.8)',
                                color: '#2d5016',
                                transition: 'border-color 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#8fbc8f'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(143, 188, 143, 0.3)'}
                        />
                    </div>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ color: '#2d5016', marginBottom: '15px', textAlign: 'center' }}>
                            {text.quickJump}
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '15px'
                        }}>
                            {filteredRecipes.map((recipe) => (
                                <div
                                    key={recipe.id}
                                    onClick={() => scrollToRecipe(recipe.ref)}
                                    style={{
                                        background: 'rgba(143, 188, 143, 0.1)',
                                        padding: '15px',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(143, 188, 143, 0.3)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(143, 188, 143, 0.2)';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(143, 188, 143, 0.1)';
                                        e.target.style.transform = 'translateY(0px)';
                                    }}
                                >
                                    <span style={{ fontSize: '24px', minWidth: '30px' }}>{recipe.icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <strong style={{ color: '#2d5016', display: 'block', marginBottom: '5px' }}>
                                            {recipe.title}
                                        </strong>
                                        <p style={{ 
                                            fontSize: '14px', 
                                            margin: '0', 
                                            color: '#4a6741',
                                            lineHeight: '1.4'
                                        }}>
                                            {recipe.description}
                                        </p>
                                    </div>
                                    <span style={{ 
                                        color: '#8fbc8f', 
                                        fontSize: '18px',
                                        opacity: 0.7
                                    }}>
                                        ↓
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        {filteredRecipes.length === 0 && searchTerm && (
                            <div style={{ 
                                textAlign: 'center', 
                                padding: '20px',
                                color: '#4a6741',
                                fontStyle: 'italic'
                            }}>
                                {text.noResults.replace('{searchTerm}', searchTerm)}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="remedies-container">
                    <div ref={coldRecipeRef}>
                        <RecipeComponents.Cold onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={snifflesRecipeRef}>
                        <RecipeComponents.Sniffles onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={soreThroatRecipeRef}>
                        <RecipeComponents.SoreThroat onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={constipationRecipeRef}>
                        <RecipeComponents.Constipation onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={insomniaRecipeRef}>
                        <RecipeComponents.Insomnia onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={depressionRecipeRef}>
                        <RecipeComponents.Depression onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={calfCrampsRecipeRef}>
                        <RecipeComponents.CalfCramps onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={circulatoryRecipeRef}>
                        <RecipeComponents.CirculatoryProblems onAddToCart={handleAddToCart} />
                    </div>
                </div>
                
                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '40px', 
                    padding: '25px',
                    background: 'rgba(143, 188, 143, 0.1)',
                    borderRadius: '15px'
                }}>
                    <h3 style={{ color: '#2d5016', marginBottom: '15px' }}>
                        {text.collectionTitle}
                    </h3>
                    <p style={{ color: '#4a6741', marginBottom: '20px' }}>
                        {text.collectionSubtitle}
                    </p>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ color: '#2d5016', marginBottom: '15px' }}>{text.fullCollection}</h4>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '15px',
                            marginTop: '15px'
                        }}>
                            {recipes.map((recipe) => (
                                <div key={recipe.id} style={{ 
                                    background: 'rgba(143, 188, 143, 0.2)', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)'
                                }}>
                                    <strong style={{ color: '#2d5016' }}>{recipe.icon} {recipe.title}</strong>
                                    <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                        {recipe.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{text.features}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureNatural}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureBacked}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureShopping}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureSafety}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureTargeted}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {text.featureSearchable}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ 
                    marginTop: '30px', 
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '10px',
                    borderTop: '3px solid #8fbc8f'
                }}>
                    <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>{text.safetyTitle}</h4>
                    <p style={{ 
                        color: '#4a6741', 
                        fontSize: '14px', 
                        margin: '0 0 15px 0',
                        lineHeight: '1.6'
                    }}>
                        <strong>
                            {currentLanguage === 'de' ? 'Wichtig:' : currentLanguage === 'ro' ? 'Important:' : 'Important:'}
                        </strong> {text.safetyText}
                    </p>
                    
                    <div style={{
                        background: 'rgba(143, 188, 143, 0.1)',
                        padding: '15px',
                        borderRadius: '8px',
                        border: '1px solid rgba(143, 188, 143, 0.3)',
                        marginTop: '15px'
                    }}>
                        <h5 style={{ color: '#2d5016', marginBottom: '8px', fontSize: '14px' }}>{text.attributionTitle}</h5>
                        <p style={{ 
                            color: '#4a6741', 
                            fontSize: '13px', 
                            margin: '0',
                            lineHeight: '1.5',
                            fontStyle: 'italic',
                            whiteSpace: 'pre-line'
                        }}>
                            {text.attributionText}
                        </p>
                    </div>
                </div>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default TreatHealthIssuesNaturalRemedies;