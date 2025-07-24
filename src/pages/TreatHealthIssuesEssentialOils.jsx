import React, { useState, useRef } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../contexts/LanguageContext';
import { useCountry } from '../contexts/CountryContext';

import  { EssOilRecipe_Burn_EN,
    EssOilRecipe_BeeStings_EN, 
    EssOilRecipe_MusclePain_EN, 
    EssOilRecipe_Sprains_EN, 
    EssOilRecipe_Nausea_EN,
    EssOilRecipe_ChestCongestion_EN,
    EssOilRecipe_ColdSores_EN,
    EssOilRecipe_Headache_EN,
    EssOilRecipe_JetLagHangover_EN,
    EssOilRecipe_PineColdFlu_EN
} from '../components/EssOilsHealingRecipes';
import  { EssOilRecipe_Burn_DE,
    EssOilRecipe_BeeStings_DE, 
    EssOilRecipe_MusclePain_DE, 
    EssOilRecipe_Sprains_DE, 
    EssOilRecipe_Nausea_DE,
    EssOilRecipe_ChestCongestion_DE,
    EssOilRecipe_ColdSores_DE,
    EssOilRecipe_Headache_DE,
    EssOilRecipe_JetLagHangover_DE,
    EssOilRecipe_PineColdFlu_DE
} from '../components/EssOilsHealingRecipes_DE';
import  { EssOilRecipe_Burn_RO,
    EssOilRecipe_BeeStings_RO, 
    EssOilRecipe_MusclePain_RO, 
    EssOilRecipe_Sprains_RO, 
    EssOilRecipe_Nausea_RO,
    EssOilRecipe_ChestCongestion_RO,
    EssOilRecipe_ColdSores_RO,
    EssOilRecipe_Headache_RO,
    EssOilRecipe_JetLagHangover_RO,
    EssOilRecipe_PineColdFlu_RO
} from '../components/EssOilsHealingRecipes_RO';

function TreatHealthIssuesEssentialOils() {
    const { currentLanguage: langFromContext } = useLanguage();
    const currentLanguage = langFromContext || 'en';
    const { 
        userLocation, 
        locationLoading, 
        getLocalizedCurrency, 
        getLocationWelcomeMessage,
        convertTemperature,
        convertVolume,
        convertWeight
    } = useCountry();
    
    const [searchTerm, setSearchTerm] = useState('');
    
    // Create refs for each recipe component
    const burnRecipeRef = useRef(null);
    const beeStingRecipeRef = useRef(null);
    const musclePainRecipeRef = useRef(null);
    const sprainsRecipeRef = useRef(null);
    const nauseaRecipeRef = useRef(null);
    const chestCongestionRecipeRef = useRef(null);
    const coldSoresRecipeRef = useRef(null);
    const headacheRecipeRef = useRef(null);
    const jetLagHangoverRecipeRef = useRef(null);
    const pineColdFluRecipeRef = useRef(null);
    
    // Translation object with location welcome messages
    const translations = {
        en: {
            pageTitle: 'Essential Oil Healing Recipes',
            pageDescription: 'Discover proven recipes using essential oils to treat various health conditions naturally. Each recipe includes precise measurements, clear instructions, and shopping cart integration.',
            findRecipe: '🔍 Find Your Recipe',
            searchPlaceholder: 'Search recipes by condition, ingredient, or keyword...',
            quickJump: 'Quick Jump to Recipe:',
            noRecipesFound: 'No recipes found matching',
            searchSuggestion: 'Try searching for conditions like "pain", "nausea", or ingredients like "lavender".',
            recipesAvailable: '🌿 10 Essential Oil Healing Recipes Available!',
            recipesDescription: 'We now offer 10 comprehensive essential oil recipes for various health conditions. Each recipe includes detailed instructions, ingredient shopping lists, unit conversions, and safety guidelines.',
            currentCollection: 'Current Recipe Collection:',
            recipeFeatures: 'Recipe Features:',
            unitConversion: '📏 Unit Conversion',
            shoppingIntegration: '🛒 Shopping Integration',
            academicSources: '📚 Academic Sources',
            safetyGuidelines: '⚕️ Safety Guidelines',
            safetyNote: 'Safety Note',
            safetyText: 'Always perform a patch test before using any new essential oil blend. Consult with a healthcare professional before using essential oils for medical conditions. Essential oils are not intended to diagnose, treat, cure, or prevent any disease.',
            currency: getLocalizedCurrency(),
            cartAlert: 'Items added to cart:\n\n{items}\n\nTotal: {currency}{total}\n\nNote: This is a demo. In a real implementation, these would be added to your shopping cart system.',
            locationWelcome: {
                usa: 'Welcome! Recipes are shown in Imperial units (°F, fl oz, oz) with prices in USD.',
                europe: 'Welcome! Recipes are shown in Metric units (°C, ml, g) with prices in EUR.',
                international: 'Welcome from {country}! Recipes are shown in Metric units with international pricing.',
                unknown: 'Welcome! Default units and pricing are applied.'
            },
            recipes: {
                burn: {
                    title: 'Lavender Burn Ointment',
                    description: 'Healing salve for burns, cuts, and skin irritations',
                    shortDesc: 'Healing salve for burns & cuts'
                },
                beeStings: {
                    title: 'Bee Sting Relief Blend',
                    description: 'Fast-acting relief for bee stings and insect bites',
                    shortDesc: 'Fast-acting sting relief blend'
                },
                musclePain: {
                    title: 'Muscle Pain & Stiff Joints Bath Salts',
                    description: 'Therapeutic bath salts for muscle pain and joint stiffness',
                    shortDesc: 'Therapeutic bath salts'
                },
                sprains: {
                    title: 'Sprains & Strains Compress',
                    description: 'Healing compress for sprains, strains, and injuries',
                    shortDesc: 'Healing compress for injuries'
                },
                nausea: {
                    title: 'Nausea Relief Inhaler',
                    description: 'Portable inhaler for nausea and motion sickness',
                    shortDesc: 'Portable nausea relief'
                },
                chestCongestion: {
                    title: 'Chest Congestion Steam Inhalation',
                    description: 'Steam inhalation for chest congestion from colds and coughs',
                    shortDesc: 'Steam inhalation for colds'
                },
                coldSores: {
                    title: 'Cold Sores Relief Blend',
                    description: 'Antiviral blend to ease cold sores',
                    shortDesc: 'Antiviral healing blend'
                },
                headache: {
                    title: 'Headache Relief Diffuser Blend',
                    description: 'Diffuser blend to relieve headaches naturally',
                    shortDesc: 'Diffuser blend for pain'
                },
                jetLag: {
                    title: 'Jet Lag & Hangover Relief Blend',
                    description: 'Energizing blend to alleviate jet lag and hangover symptoms',
                    shortDesc: 'Energizing recovery blend'
                },
                pineCold: {
                    title: 'Pine Cold & Flu Relief Inhaler',
                    description: 'Antiseptic inhaler for cold and flu season sinus relief',
                    shortDesc: 'Antiseptic inhaler for flu season'
                }
            }
        },
        de: {
            pageTitle: 'Ätherische Öle Heilrezepte',
            pageDescription: 'Entdecken Sie bewährte Rezepte mit ätherischen Ölen zur natürlichen Behandlung verschiedener Gesundheitszustände. Jedes Rezept enthält präzise Mengenangaben, klare Anweisungen und Warenkorb-Integration.',
            findRecipe: '🔍 Finden Sie Ihr Rezept',
            searchPlaceholder: 'Rezepte nach Beschwerden, Zutaten oder Stichwörtern suchen...',
            quickJump: 'Schnell zum Rezept springen:',
            noRecipesFound: 'Keine Rezepte gefunden für',
            searchSuggestion: 'Versuchen Sie die Suche nach Beschwerden wie "Schmerz", "Übelkeit" oder Zutaten wie "Lavendel".',
            recipesAvailable: '🌿 10 Ätherische Öle Heilrezepte verfügbar!',
            recipesDescription: 'Wir bieten jetzt 10 umfassende Rezepte mit ätherischen Ölen für verschiedene Gesundheitszustände. Jedes Rezept enthält detaillierte Anweisungen, Zutateneinkaufslisten, Einheitenumrechnungen und Sicherheitsrichtlinien.',
            currentCollection: 'Aktuelle Rezeptsammlung:',
            recipeFeatures: 'Rezept-Funktionen:',
            unitConversion: '📏 Einheitenumrechnung',
            shoppingIntegration: '🛒 Einkaufs-Integration',
            academicSources: '📚 Wissenschaftliche Quellen',
            safetyGuidelines: '⚕️ Sicherheitsrichtlinien',
            safetyNote: 'Sicherheitshinweis',
            safetyText: 'Führen Sie immer einen Hauttest durch, bevor Sie eine neue Mischung aus ätherischen Ölen verwenden. Konsultieren Sie einen Arzt, bevor Sie ätherische Öle bei medizinischen Beschwerden verwenden. Ätherische Öle sind nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder zu verhindern.',
            currency: getLocalizedCurrency(),
            cartAlert: 'Artikel zum Warenkorb hinzugefügt:\n\n{items}\n\nGesamt: {total}{currency}\n\nHinweis: Dies ist eine Demo. In einer echten Implementierung würden diese Artikel zu Ihrem Warenkorbsystem hinzugefügt.',
            locationWelcome: {
                usa: 'Willkommen! Rezepte werden in imperialen Einheiten (°F, fl oz, oz) mit Preisen in USD angezeigt.',
                europe: 'Willkommen! Rezepte werden in metrischen Einheiten (°C, ml, g) mit Preisen in EUR angezeigt.',
                international: 'Willkommen aus {country}! Rezepte werden in metrischen Einheiten mit internationalen Preisen angezeigt.',
                unknown: 'Willkommen! Standard-Einheiten und -Preise werden angewendet.'
            },
            recipes: {
                burn: {
                    title: 'Lavendel Brandwunden-Salbe',
                    description: 'Heilsalbe für Verbrennungen, Schnitte und Hautreizungen',
                    shortDesc: 'Heilsalbe für Verbrennungen & Schnitte'
                },
                beeStings: {
                    title: 'Bienenstich-Linderung Mischung',
                    description: 'Schnell wirkende Linderung bei Bienenstichen und Insektenstichen',
                    shortDesc: 'Schnell wirkende Stich-Linderung'
                },
                musclePain: {
                    title: 'Muskelschmerzen & Steife Gelenke Badesalz',
                    description: 'Therapeutisches Badesalz für Muskelschmerzen und Gelenksteifheit',
                    shortDesc: 'Therapeutisches Badesalz'
                },
                sprains: {
                    title: 'Verstauchungen & Zerrungen Kompresse',
                    description: 'Heilkompresse für Verstauchungen, Zerrungen und Verletzungen',
                    shortDesc: 'Heilkompresse für Verletzungen'
                },
                nausea: {
                    title: 'Übelkeit-Linderung Inhalator',
                    description: 'Tragbarer Inhalator gegen Übelkeit und Reisekrankheit',
                    shortDesc: 'Tragbare Übelkeit-Linderung'
                },
                chestCongestion: {
                    title: 'Brustverengung Dampf-Inhalation',
                    description: 'Dampfinhalation bei Brustverengung durch Erkältungen und Husten',
                    shortDesc: 'Dampfinhalation bei Erkältungen'
                },
                coldSores: {
                    title: 'Fieberbläschen-Linderung Mischung',
                    description: 'Antivirale Mischung zur Linderung von Fieberbläschen',
                    shortDesc: 'Antivirale Heilmischung'
                },
                headache: {
                    title: 'Kopfschmerz-Linderung Diffuser-Mischung',
                    description: 'Diffuser-Mischung zur natürlichen Linderung von Kopfschmerzen',
                    shortDesc: 'Diffuser-Mischung gegen Schmerzen'
                },
                jetLag: {
                    title: 'Jetlag & Kater-Linderung Mischung',
                    description: 'Energiespendende Mischung zur Linderung von Jetlag und Kater-Symptomen',
                    shortDesc: 'Energiespendende Erholungsmischung'
                },
                pineCold: {
                    title: 'Kiefer Erkältung & Grippe Inhalator',
                    description: 'Antiseptischer Inhalator für Nebenhöhlen-Linderung in der Erkältungs- und Grippesaison',
                    shortDesc: 'Antiseptischer Inhalator für die Grippesaison'
                }
            }
        },
        ro: {
            pageTitle: 'Rețete de Vindecare cu Uleiuri Esențiale',
            pageDescription: 'Descoperă rețete dovedite folosind uleiuri esențiale pentru tratarea naturală a diferitelor afecțiuni de sănătate. Fiecare rețetă include măsurători precise, instrucțiuni clare și integrare cu coșul de cumpărături.',
            findRecipe: '🔍 Găsește-ți Rețeta',
            searchPlaceholder: 'Caută rețete după afecțiune, ingredient sau cuvânt cheie...',
            quickJump: 'Salt rapid la rețetă:',
            noRecipesFound: 'Nu s-au găsit rețete pentru',
            searchSuggestion: 'Încearcă să cauți afecțiuni precum "durere", "greață" sau ingrediente precum "lavandă".',
            recipesAvailable: '🌿 10 Rețete de Vindecare cu Uleiuri Esențiale disponibile!',
            recipesDescription: 'Oferim acum 10 rețete cuprinzătoare cu uleiuri esențiale pentru diverse afecțiuni de sănătate. Fiecare rețetă include instrucțiuni detaliate, liste de cumpărături pentru ingrediente, conversii de unități și îndrumări de siguranță.',
            currentCollection: 'Colecția Actuală de Rețete:',
            recipeFeatures: 'Caracteristicile Rețetelor:',
            unitConversion: '📏 Conversii de Unități',
            shoppingIntegration: '🛒 Integrare Cumpărături',
            academicSources: '📚 Surse Academice',
            safetyGuidelines: '⚕️ Îndrumări de Siguranță',
            safetyNote: 'Notă de Siguranță',
            safetyText: 'Efectuează întotdeauna un test pe o suprafață mică înainte de a folosi orice nouă combinație de uleiuri esențiale. Consultă un profesionist din domeniul sănătății înainte de a folosi uleiuri esențiale pentru afecțiuni medicale. Uleiurile esențiale nu sunt destinate să diagnosticheze, să trateze, să vindece sau să prevină vreo boală.',
            currency: getLocalizedCurrency(),
            cartAlert: 'Articole adăugate în coș:\n\n{items}\n\nTotal: {total}{currency}\n\nNotă: Aceasta este o demonstrație. Într-o implementare reală, aceste articole ar fi adăugate în sistemul dvs. de coș de cumpărături.',
            locationWelcome: {
                usa: 'Bun venit! Rețetele sunt afișate în unități imperiale (°F, fl oz, oz) cu prețuri în USD.',
                europe: 'Bun venit! Rețetele sunt afișate în unități metrice (°C, ml, g) cu prețuri în EUR.',
                international: 'Bun venit din {country}! Rețetele sunt afișate în unități metrice cu prețuri internaționale.',
                unknown: 'Bun venit! Se aplică unități și prețuri implicite.'
            },
            recipes: {
                burn: {
                    title: 'Unguent cu Lavandă pentru Arsuri',
                    description: 'Balsam vindecător pentru arsuri, tăieturi și iritații ale pielii',
                    shortDesc: 'Balsam vindecător pentru arsuri și tăieturi'
                },
                beeStings: {
                    title: 'Amestec pentru Înțepăturile de Albină',
                    description: 'Alinare cu acțiune rapidă pentru înțepăturile de albină și mușcăturile de insecte',
                    shortDesc: 'Alinare cu acțiune rapidă pentru înțepături'
                },
                musclePain: {
                    title: 'Săruri de Baie pentru Durerile Musculare și Articulațiile Rigide',
                    description: 'Săruri de baie terapeutice pentru durerile musculare și rigiditatea articulațiilor',
                    shortDesc: 'Săruri de baie terapeutice'
                },
                sprains: {
                    title: 'Comprese pentru Entorse și Întinderi',
                    description: 'Compresă vindecătoare pentru entorse, întinderi și vătămări',
                    shortDesc: 'Compresă vindecătoare pentru vătămări'
                },
                nausea: {
                    title: 'Inhalator pentru Alinarea Greții',
                    description: 'Inhalator portabil pentru greață și rău de mișcare',
                    shortDesc: 'Alinare portabilă pentru greață'
                },
                chestCongestion: {
                    title: 'Inhalație cu Aburi pentru Congestia Toracică',
                    description: 'Inhalație cu aburi pentru congestia toracică de la răceli și tuse',
                    shortDesc: 'Inhalația cu aburi pentru răceli'
                },
                coldSores: {
                    title: 'Amestec pentru Alinarea Afetelor',
                    description: 'Amestec antiviral pentru alinarea afetelor',
                    shortDesc: 'Amestec antiviral vindecător'
                },
                headache: {
                    title: 'Amestec Difuzor pentru Alinarea Durerilor de Cap',
                    description: 'Amestec pentru difuzor pentru alinarea naturală a durerilor de cap',
                    shortDesc: 'Amestec difuzor pentru durere'
                },
                jetLag: {
                    title: 'Amestec pentru Alinarea Jetlag-ului și Mahmureala',
                    description: 'Amestec energizant pentru alinarea simptomelor de jetlag și mahmureală',
                    shortDesc: 'Amestec energizant de recuperare'
                },
                pineCold: {
                    title: 'Inhalator cu Pin pentru Răceală și Gripă',
                    description: 'Inhalator antiseptic pentru alinarea sinusurilor în sezonul de răceală și gripă',
                    shortDesc: 'Inhalator antiseptic pentru sezonul gripei'
                }
            }
        }
    };

    const t = translations[currentLanguage] || translations['en'];

    // Get recipe components based on language
    const getRecipeComponents = () => {
        console.log(currentLanguage);
        switch(currentLanguage) {
            case 'de':
                return {
                    Burn: EssOilRecipe_Burn_DE,
                    BeeStings: EssOilRecipe_BeeStings_DE,
                    MusclePain: EssOilRecipe_MusclePain_DE,
                    Sprains: EssOilRecipe_Sprains_DE,
                    Nausea: EssOilRecipe_Nausea_DE,
                    ChestCongestion: EssOilRecipe_ChestCongestion_DE,
                    ColdSores: EssOilRecipe_ColdSores_DE,
                    Headache: EssOilRecipe_Headache_DE,
                    JetLagHangover: EssOilRecipe_JetLagHangover_DE,
                    PineColdFlu: EssOilRecipe_PineColdFlu_DE
                };
            case 'ro':
                return {
                    Burn: EssOilRecipe_Burn_RO,
                    BeeStings: EssOilRecipe_BeeStings_RO,
                    MusclePain: EssOilRecipe_MusclePain_RO,
                    Sprains: EssOilRecipe_Sprains_RO,
                    Nausea: EssOilRecipe_Nausea_RO,
                    ChestCongestion: EssOilRecipe_ChestCongestion_RO,
                    ColdSores: EssOilRecipe_ColdSores_RO,
                    Headache: EssOilRecipe_Headache_RO,
                    JetLagHangover: EssOilRecipe_JetLagHangover_RO,
                    PineColdFlu: EssOilRecipe_PineColdFlu_RO
                };
            case 'en':
                return {
                    Burn: EssOilRecipe_Burn_EN,
                    BeeStings: EssOilRecipe_BeeStings_EN,
                    MusclePain: EssOilRecipe_MusclePain_EN,
                    Sprains: EssOilRecipe_Sprains_EN,
                    Nausea: EssOilRecipe_Nausea_EN,
                    ChestCongestion: EssOilRecipe_ChestCongestion_EN,
                    ColdSores: EssOilRecipe_ColdSores_EN,
                    Headache: EssOilRecipe_Headache_EN,
                    JetLagHangover: EssOilRecipe_JetLagHangover_EN,
                    PineColdFlu: EssOilRecipe_PineColdFlu_EN
                };
        }
    };

    const RecipeComponents = getRecipeComponents();
    
    // Recipe data for navigation and search
    const recipes = [
        {
            id: 'burn',
            title: t.recipes.burn.title,
            icon: '🔥',
            description: t.recipes.burn.description,
            keywords: currentLanguage === 'de' ? 
                ['verbrennung', 'salbe', 'heilung', 'schnitte', 'haut', 'lavendel', 'bienenwachs'] :
                currentLanguage === 'ro' ?
                ['arsură', 'unguent', 'vindecare', 'tăieturi', 'piele', 'lavandă', 'ceară', 'balsam'] :
                ['burn', 'ointment', 'healing', 'cuts', 'skin', 'lavender', 'beeswax', 'salve'],
            ref: burnRecipeRef
        },
        {
            id: 'bee-sting',
            title: t.recipes.beeStings.title,
            icon: '🐝',
            description: t.recipes.beeStings.description,
            keywords: currentLanguage === 'de' ? 
                ['biene', 'stich', 'linderung', 'eukalyptus', 'lavendel', 'schmerz', 'schwellung'] :
                currentLanguage === 'ro' ?
                ['albină', 'înțepătură', 'alinare', 'eucalipt', 'lavandă', 'durere', 'umflătură'] :
                ['bee', 'sting', 'relief', 'eucalyptus', 'lavender', 'pain', 'swelling'],
            ref: beeStingRecipeRef
        },
        {
            id: 'muscle-pain',
            title: t.recipes.musclePain.title,
            icon: '💪',
            description: t.recipes.musclePain.description,
            keywords: currentLanguage === 'de' ? 
                ['muskel', 'schmerz', 'gelenke', 'bad', 'salz', 'kamille', 'koriander', 'epsom'] :
                currentLanguage === 'ro' ?
                ['mușchi', 'durere', 'articulații', 'baie', 'săruri', 'mușețel', 'coriandru', 'epsom'] :
                ['muscle', 'pain', 'joints', 'bath', 'salts', 'chamomile', 'coriander', 'epsom'],
            ref: musclePainRecipeRef
        },
        {
            id: 'sprains',
            title: t.recipes.sprains.title,
            icon: '🤕',
            description: t.recipes.sprains.description,
            keywords: currentLanguage === 'de' ? 
                ['verstauchung', 'zerrung', 'kompresse', 'rosmarin', 'lavendel', 'verletzung', 'entzündung'] :
                currentLanguage === 'ro' ?
                ['entorse', 'întinderi', 'compresă', 'rozmarin', 'lavandă', 'vătămare', 'inflamație'] :
                ['sprains', 'strains', 'compress', 'rosemary', 'lavender', 'injury', 'inflammation'],
            ref: sprainsRecipeRef
        },
        {
            id: 'nausea',
            title: t.recipes.nausea.title,
            icon: '🤢',
            description: t.recipes.nausea.description,
            keywords: currentLanguage === 'de' ? 
                ['übelkeit', 'inhalator', 'reise', 'krankheit', 'pfefferminze', 'lavendel', 'tragbar'] :
                currentLanguage === 'ro' ?
                ['greață', 'inhalator', 'mișcare', 'boală', 'mentă', 'lavandă', 'portabil'] :
                ['nausea', 'inhaler', 'motion', 'sickness', 'peppermint', 'lavender', 'portable'],
            ref: nauseaRecipeRef
        },
        {
            id: 'chest-congestion',
            title: t.recipes.chestCongestion.title,
            icon: '🫁',
            description: t.recipes.chestCongestion.description,
            keywords: currentLanguage === 'de' ? 
                ['brust', 'verengung', 'dampf', 'inhalation', 'zitrone', 'eukalyptus', 'zypresse', 'erkältung', 'husten'] :
                currentLanguage === 'ro' ?
                ['piept', 'congestie', 'aburi', 'inhalație', 'lămâie', 'eucalipt', 'chiparos', 'răceală', 'tuse'] :
                ['chest', 'congestion', 'steam', 'inhalation', 'lemon', 'eucalyptus', 'cypress', 'cold', 'cough'],
            ref: chestCongestionRecipeRef
        },
        {
            id: 'cold-sores',
            title: t.recipes.coldSores.title,
            icon: '💋',
            description: t.recipes.coldSores.description,
            keywords: currentLanguage === 'de' ? 
                ['fieberbläschen', 'antiviral', 'zitrone', 'manuka', 'heilung', 'lippe'] :
                currentLanguage === 'ro' ?
                ['afete', 'antiviral', 'lămâie', 'manuka', 'vindecare', 'buză'] :
                ['cold', 'sores', 'antiviral', 'lemon', 'manuka', 'healing', 'lip'],
            ref: coldSoresRecipeRef
        },
        {
            id: 'headache',
            title: t.recipes.headache.title,
            icon: '🤕',
            description: t.recipes.headache.description,
            keywords: currentLanguage === 'de' ? 
                ['kopfschmerz', 'diffuser', 'zitrone', 'lavendel', 'pfefferminze', 'spannung', 'schmerz'] :
                currentLanguage === 'ro' ?
                ['durere', 'cap', 'difuzor', 'lămâie', 'lavandă', 'mentă', 'tensiune', 'durere'] :
                ['headache', 'diffuser', 'lemon', 'lavender', 'peppermint', 'tension', 'pain'],
            ref: headacheRecipeRef
        },
        {
            id: 'jet-lag-hangover',
            title: t.recipes.jetLag.title,
            icon: '✈️',
            description: t.recipes.jetLag.description,
            keywords: currentLanguage === 'de' ? 
                ['jetlag', 'kater', 'zitrone', 'ingwer', 'energie', 'erholung', 'reise'] :
                currentLanguage === 'ro' ?
                ['jetlag', 'mahmureală', 'lămâie', 'ghimbir', 'energie', 'recuperare', 'călătorie'] :
                ['jet', 'lag', 'hangover', 'lemon', 'ginger', 'energy', 'recovery', 'travel'],
            ref: jetLagHangoverRecipeRef
        },
        {
            id: 'pine-cold-flu',
            title: t.recipes.pineCold.title,
            icon: '🌲',
            description: t.recipes.pineCold.description,
            keywords: currentLanguage === 'de' ? 
                ['kiefer', 'erkältung', 'grippe', 'inhalator', 'antiseptisch', 'eukalyptus', 'lorbeer', 'nebenhöhlen', 'verengung', 'antibakteriell'] :
                currentLanguage === 'ro' ?
                ['pin', 'răceală', 'gripă', 'inhalator', 'antiseptic', 'eucalipt', 'dafin', 'sinusuri', 'congestie', 'antibacterian'] :
                ['pine', 'cold', 'flu', 'inhaler', 'antiseptic', 'eucalyptus', 'bay laurel', 'sinus', 'congestion', 'antibacterial'],
            ref: pineColdFluRecipeRef
        }
    ];
    
    // Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    // Scroll to recipe function
    const scrollToRecipe = (recipeRef) => {
        if (recipeRef.current) {
            recipeRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    
    // Handler for adding items to shopping cart
    const handleAddToCart = (cartItems) => {
        console.log('Adding items to cart:', cartItems);
        
        const itemNames = cartItems.map(item => `${item.name} (${t.currency === ' lei' ? item.price + t.currency : t.currency + item.price})`).join('\n');
        const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        
        const alertMessage = t.cartAlert
            .replace('{items}', itemNames)
            .replace('{total}', totalCost)
            .replace('{currency}', t.currency);
        
        alert(alertMessage);
    };

    
    return (
        <div className="page-container" style={{ maxWidth: '950px', margin: '0 auto' }}>
            <div className="step-card" style={{ padding: '30px', position: 'relative' }}>
                {/* Location indicator */}
                {userLocation && !locationLoading && (
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(143, 188, 143, 0.1)',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        color: '#2d5016',
                        border: '1px solid rgba(143, 188, 143, 0.3)'
                    }}>
                        📍 {userLocation.country} ({userLocation.measurementSystem === 'imperial' ? 'Imperial' : 'Metric'})
                    </div>
                )}

                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
                    {t.pageTitle}
                </h1>
                
                {/* Location-based welcome message */}
                {!locationLoading && getLocationWelcomeMessage(t.locationWelcome) && (
                    <div style={{
                        marginBottom: '20px',
                        padding: '15px',
                        background: `rgba(143, 188, 143, 0.1)`,
                        borderRadius: '10px',
                        textAlign: 'center',
                        border: '1px solid rgba(143, 188, 143, 0.2)'
                    }}>
                        <p style={{ margin: '0', color: '#2d5016' }}>
                            {getLocationWelcomeMessage(t.locationWelcome)}
                        </p>
                    </div>
                )}

                <p style={{ marginBottom: '30px', fontSize: '18px', textAlign: 'center' }}>
                    {t.pageDescription}
                </p>
                
                {/* Search and Navigation Section */}
                <div style={{ 
                    marginBottom: '40px', 
                    padding: '25px', 
                    background: 'rgba(143, 188, 143, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(143, 188, 143, 0.2)'
                }}>
                    <h3 style={{ color: '#2d5016', marginBottom: '20px', textAlign: 'center' }}>
                        {t.findRecipe}
                    </h3>
                    
                    {/* Search Bar */}
                    <div style={{ marginBottom: '25px' }}>
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
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
                    
                    {/* Recipe Navigation Grid */}
                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ color: '#2d5016', marginBottom: '15px', textAlign: 'center' }}>
                            {t.quickJump}
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
                                        e.currentTarget.style.background = 'rgba(143, 188, 143, 0.2)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(143, 188, 143, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(143, 188, 143, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
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
                                {t.noRecipesFound} "{searchTerm}". {t.searchSuggestion}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="recipes-container">
                    <div ref={burnRecipeRef}> 
                        <RecipeComponents.Burn onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={beeStingRecipeRef}>
                        <RecipeComponents.BeeStings onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={musclePainRecipeRef}>
                        <RecipeComponents.MusclePain onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={sprainsRecipeRef}>
                        <RecipeComponents.Sprains onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={nauseaRecipeRef}>
                        <RecipeComponents.Nausea onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={chestCongestionRecipeRef}>
                        <RecipeComponents.ChestCongestion onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={coldSoresRecipeRef}>
                        <RecipeComponents.ColdSores onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={headacheRecipeRef}>
                        <RecipeComponents.Headache onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={jetLagHangoverRecipeRef}>
                        <RecipeComponents.JetLagHangover onAddToCart={handleAddToCart} />
                    </div>
                    <div ref={pineColdFluRecipeRef}>
                        <RecipeComponents.PineColdFlu onAddToCart={handleAddToCart} />
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
                        {t.recipesAvailable}
                    </h3>
                    <p style={{ color: '#4a6741', marginBottom: '20px' }}>
                        {t.recipesDescription}
                    </p>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ color: '#2d5016', marginBottom: '15px' }}>{t.currentCollection}</h4>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px',
                            marginTop: '15px'
                        }}>
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🔥 {t.recipes.burn.title.split(' ').slice(0, 2).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.burn.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🐝 {t.recipes.beeStings.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.beeStings.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>💪 {t.recipes.musclePain.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.musclePain.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🤕 {t.recipes.sprains.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.sprains.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🤢 {t.recipes.nausea.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.nausea.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🫁 {t.recipes.chestCongestion.title.split(' ').slice(0, 2).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.chestCongestion.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>💋 {t.recipes.coldSores.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.coldSores.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🤕 {t.recipes.headache.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.headache.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>✈️ {t.recipes.jetLag.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.jetLag.shortDesc}
                                </p>
                            </div>
                            
                            <div style={{ 
                                background: 'rgba(143, 188, 143, 0.2)', 
                                padding: '15px', 
                                borderRadius: '12px',
                                border: '1px solid rgba(143, 188, 143, 0.3)'
                            }}>
                                <strong style={{ color: '#2d5016' }}>🌲 {t.recipes.pineCold.title.split(' ').slice(0, 3).join(' ')}</strong>
                                <p style={{ fontSize: '14px', margin: '5px 0 0 0', color: '#4a6741' }}>
                                    {t.recipes.pineCold.shortDesc}
                                </p>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{t.recipeFeatures}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {t.unitConversion}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {t.shoppingIntegration}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {t.academicSources}
                                </span>
                                <span style={{ background: 'rgba(143, 188, 143, 0.3)', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', color: '#2d5016' }}>
                                    {t.safetyGuidelines}
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
                    <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>{t.safetyNote}</h4>
                    <p style={{ 
                        color: '#4a6741', 
                        fontSize: '14px', 
                        margin: '0',
                        lineHeight: '1.6'
                    }}>
                        <strong>Important:</strong> {t.safetyText}
                    </p>
                </div>
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default TreatHealthIssuesEssentialOils;