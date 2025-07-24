import React, { useState, useContext, createContext, useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../contexts/LanguageContext';
import { useCountry } from '../contexts/CountryContext';

function TreatHealthIssuesEssentialOils() {
    const { currentLanguage } = useLanguage();
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
    
    // ...existing refs...

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
                // ...German translations...
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
                // ...Romanian translations...
            }
        }
    };

    const t = translations[currentLanguage] || translations['en'];

    // ...rest of existing code...

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
                
                {/* ...rest of existing JSX... */}
            </div>
            
            <ScrollToTop />
        </div>
    );
}

export default TreatHealthIssuesEssentialOils;
// Kontext für Maßeinheiten erstellen
const MeasurementContext = createContext();

// Hilfsfunktion zum Runden auf die nächste durch 5 teilbare Zahl
const roundToNearestFive = (num) => {
  return Math.round(num / 5) * 5;
};

// Umrechnungsdienstprogramme
const convertVolume = (amount, fromUnit, toUnit) => {
  // Alles zuerst in ml umrechnen, dann in Zieleinheit
  let mlAmount;
  
  if (fromUnit === 'oz') {
    mlAmount = roundToNearestFive(amount * 29.5735); // 1 fl oz = 29.5735 ml 
  } else if (fromUnit === 'tbsp') {
    mlAmount = roundToNearestFive(amount * 14.7868); // 1 EL = 14.7868 ml
  } else if (fromUnit === 'tsp') {
    mlAmount = roundToNearestFive(amount * 4.92892); // 1 TL = 4.92892 ml
  } else {
    mlAmount = amount; // bereits in ml
  }
  
  if (toUnit === 'oz') {
    return Math.round((mlAmount / 29.5735) * 100) / 100;
  } else if (toUnit === 'tbsp') {
    return Math.round((mlAmount / 14.7868) * 100) / 100;
  } else if (toUnit === 'tsp') {
    return Math.round((mlAmount / 4.92892) * 100) / 100;
  } else {
    return roundToNearestFive(mlAmount); // ml
  }
};

const convertWeight = (amount, fromUnit, toUnit) => {
  // Alles zuerst in Gramm umrechnen, dann in Zieleinheit
  let gramAmount;
  
  if (fromUnit === 'oz') {
    gramAmount = roundToNearestFive(amount * 28.3495); // 1 oz = 28.3495 g
  } else {
    gramAmount = amount; // bereits in Gramm
  }
  
  if (toUnit === 'oz') {
    return Math.round((gramAmount / 28.3495) * 100) / 100;
  } else {
    return roundToNearestFive(gramAmount); // Gramm
  }
};

// Ausklappbares Rezept-Komponente
const CollapsibleRecipe = ({ 
  title, 
  icon, 
  difficulty, 
  time, 
  yield: recipeYield, 
  description, 
  children 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="essential-oil-recipe-card">
      <div className="recipe-header">
        <h3 className="recipe-title">{icon} {title}</h3>
        <div className="recipe-meta">
          <span className="recipe-difficulty">{difficulty}</span>
          <span className="recipe-time">⏱️ {time}</span>
          <span className="recipe-yield">🫙 {recipeYield}</span>
        </div>
      </div>

      <div className="recipe-description">
        <p>{description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'linear-gradient(135deg, #8fbc8f, #90EE90)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            marginTop: '15px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(143, 188, 143, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(143, 188, 143, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 8px rgba(143, 188, 143, 0.3)';
          }}
        >
          {isExpanded ? '🔼 Rezept-Details ausblenden' : '🔽 Rezept-Details anzeigen'}
        </button>
      </div>

      {isExpanded && (
        <div style={{ marginTop: '20px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const EssOilRecipe_Burn_DE = ({ onAddToCart }) => {
  const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);
    

  const ingredients = [
    {
      id: 'beeswax',
      name: 'Bienenwachs (gerieben oder gehobelt)',
      amount: 0.5,
      unit: 'oz',
      type: 'weight',
      shopItem: {
        name: 'Bio-Bienenwachs',
        price: 12.99,
        category: 'basis-zutaten'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Trägeröl oder Mischung',
      amount: 6,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Trägeröl-Mischung',
        price: 18.50,
        category: 'tragerole'
      }
    },
    {
      id: 'lavender-oil',
      name: 'Lavendel ätherisches Öl',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Lavendel Ätherisches Öl (10ml)',
        price: 24.99,
        category: 'atherische-ole'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    if (measurementSystem === 'metric') {
      if (ingredient.type === 'weight') {
        return convertWeight(ingredient.amount, ingredient.unit, 'g');
      } else {
        return convertVolume(ingredient.amount, ingredient.unit, 'ml');
      }
    }
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (measurementSystem === 'metric') {
      return ingredient.type === 'weight' ? 'g' : 'ml';
    }
    return ingredient.unit === 'oz' ? 'oz' : ingredient.unit === 'tbsp' ? 'EL' : ingredient.unit === 'tsp' ? 'TL' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Lavendel Brandwunden-Salbe Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Lavendel Brandwunden-Salbe"
      icon="🔥"
      difficulty="Einfach"
      time="15 Minuten"
      yield="Ergibt ~55g"
      description="Eine beruhigende, heilende Salbe perfekt zur Behandlung von Verbrennungen, Schnitten und Hautirritationen. Dieses Rezept kombiniert die regenerativen Eigenschaften von Lavendel mit den schützenden Vorteilen von Bienenwachs. Die Salbe kann auch für Schnitte verwendet werden und lindert Entzündungen von Hautkrankheiten wie Psoriasis, Ekzemen und Dermatitis. Sie ist auch wirksam bei der Heilung von Furunkeln und Blutergüssen."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (oz, EL, TL)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (g, ml)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ol className="instructions-list">
          <li>Das Bienenwachs und Trägeröl in ein Glas geben und das Glas in einen Topf mit Wasser stellen.</li>
          <li>Die Mischung bei schwacher Hitze erwärmen und sanft rühren, bis das Bienenwachs vollständig geschmolzen ist.</li>
          <li>Das Glas vom Herd nehmen und die Mischung auf Raumtemperatur abkühlen lassen.</li>
          <li>Nach dem Abkühlen das Lavendel ätherische Öl hinzufügen und gut umrühren.</li>
          <li>Die Konsistenz bei Bedarf anpassen, indem Sie mehr Trägeröl (für weichere Textur) oder Bienenwachs (für festere Textur) hinzufügen.</li>
          <li>Die Mischung vollständig abkühlen lassen, bevor Sie sie in Aufbewahrungsbehälter umfüllen.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> Eine kleine Menge direkt auf Verbrennungen, Schnitte oder gereizte Haut nach Bedarf auftragen.
          </div>
          <div className="usage-item">
            <strong>Lagerung:</strong> An einem kühlen, trockenen Ort aufbewahren. Hält bis zu 12 Monate.
          </div>
          <div className="usage-item">
            <strong>Verträglichkeitstest:</strong> Immer zuerst an einer kleinen Hautstelle testen, besonders bei empfindlicher Haut.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Fördert Heilung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Lindert Schmerzen</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <span>Verhindert Narbenbildung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natürliche Inhaltsstoffe</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Alle Zutaten in den Warenkorb legen
        </button>
        <div className="total-cost">
          <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Quelle</h4>
        <p className="reference-text">
          Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_BeeStings_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);  
  const ingredients = [
    {
      id: 'lavender-oil',
      name: 'Lavendel ätherisches Öl',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavendel Ätherisches Öl (10ml)',
        price: 24.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Eukalyptus (blau) ätherisches Öl',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Eukalyptus Blau Ätherisches Öl (10ml)',
        price: 22.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Trägeröl',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Trägeröl-Mischung',
        price: 18.50,
        category: 'tragerole'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    if (ingredient.type === 'drops') {
      return ingredient.amount;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.type === 'volume') {
        return convertVolume(ingredient.amount, ingredient.unit, 'ml');
      }
    }
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'Tropfen';
    }
    
    if (measurementSystem === 'metric') {
      return 'ml';
    }
    return ingredient.unit === 'tsp' ? 'TL' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Bienenstich-Linderung Mischung Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Bienenstich-Linderung Mischung"
      icon="🐝"
      difficulty="Einfach"
      time="2 Minuten"
      yield="Einzelanwendung"
      description="Eine schnell wirkende Mischung zur sofortigen Linderung von Bienenstichen. Diese Kombination aus Lavendel und Eukalyptus (blau) ätherischen Ölen hilft, Schmerzen, Schwellungen und Entzündungen zu reduzieren und fördert die Heilung."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (TL, Tropfen)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (ml, Tropfen)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ol className="instructions-list">
          <li>Das Trägeröl in eine kleine Schüssel oder in die saubere Handfläche gießen.</li>
          <li>Die Lavendel ätherischen Öl-Tropfen zum Trägeröl hinzufügen.</li>
          <li>Die Eukalyptus (blau) ätherischen Öl-Tropfen zur Mischung hinzufügen.</li>
          <li>Sanft mit dem Finger oder einem kleinen Löffel vermischen, um alle Zutaten zu verbinden.</li>
          <li>Sofort auf die Bienenstich-Stelle mit einem Wattestäbchen oder sauberen Finger auftragen.</li>
          <li>Alle 15-20 Minuten nach Bedarf zur Schmerz- und Schwellungslinderung erneut auftragen.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> Direkt auf den Bienenstich auftragen, nachdem die Stelle gereinigt wurde. Stachel zuerst entfernen, falls sichtbar.
          </div>
          <div className="usage-item">
            <strong>Notfallhinweis:</strong> Bei allergischen Reaktionen wie Atembeschwerden oder weit verbreiteten Schwellungen sofort ärztliche Hilfe suchen.
          </div>
          <div className="usage-item">
            <strong>Lagerung:</strong> Für jede Anwendung frisch mischen. Vorgefertigte Mischung nicht für dieses Rezept lagern.
          </div>
          <div className="usage-item">
            <strong>Häufigkeit:</strong> In der ersten Stunde alle 15-20 Minuten auftragen, dann nach Bedarf.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Reduziert Schmerzen</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">❄️</span>
            <span>Kühlende Wirkung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Entzündungshemmend</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Schnell wirkende Linderung</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Alle Zutaten in den Warenkorb legen
        </button>
        <div className="total-cost">
          <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Quelle</h4>
        <p className="reference-text">
          Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_MusclePain_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);  
  const ingredients = [
    {
      id: 'lavender-oil',
      name: 'Lavendel ätherisches Öl',
      amount: 10,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavendel Ätherisches Öl (10ml)',
        price: 24.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'chamomile-oil',
      name: 'Kamille (Deutsch) ätherisches Öl',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Deutsche Kamille Ätherisches Öl (5ml)',
        price: 32.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'coriander-oil',
      name: 'Koriander ätherisches Öl',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Koriander Ätherisches Öl (10ml)',
        price: 19.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Trägeröl',
      amount: 4,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Trägeröl-Mischung',
        price: 18.50,
        category: 'tragerole'
      }
    },
    {
      id: 'epsom-salt',
      name: 'Epsom-Salz',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Reines Epsom-Salz (1 kg)',
        price: 8.99,
        category: 'basis-zutaten'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    if (ingredient.type === 'drops') {
      return ingredient.amount;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.type === 'volume') {
        if (ingredient.unit === 'cups') {
          return Math.round(ingredient.amount * 236.588);
        }
        return convertVolume(ingredient.amount, ingredient.unit, 'ml');
      }
    }
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'Tropfen';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'cups' ? 'Tassen' : ingredient.unit === 'tbsp' ? 'EL' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Muskelschmerzen Badesalz Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Muskelschmerzen & Steife Gelenke Badesalz"
      icon="💪"
      difficulty="Einfach"
      time="5 Minuten"
      yield="2-3 Bäder"
      description="Heilendes Badesalz, das Lavendels schmerzlindernde Eigenschaften mit Kamille und Koriander kombiniert, um Muskelschmerzen und steife Gelenke effektiv zu lindern. Perfekt für die Erholung nach dem Training oder chronische Schmerzlinderung durch entspannende therapeutische Bäder."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (Tassen, EL, Tropfen)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (ml, Tropfen)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ul className="instructions-list">
          <li>In einer kleinen Schüssel die ätherischen Öle von Lavendel, deutscher Kamille und Koriander mischen.</li>
          <li>Das Trägeröl zur ätherischen Ölmischung hinzufügen und gut vermischen.</li>
          <li>In einer größeren Schüssel das Epsom-Salz einfüllen.</li>
          <li>Die ätherische Öl- und Trägeröl-Mischung zum Epsom-Salz hinzufügen.</li>
          <li>Gründlich mit einem Löffel vermischen, bis die Öle gleichmäßig im Salz verteilt sind.</li>
          <li>In einem luftdichten Behälter bis zur Verwendung aufbewahren.</li>
          <li>Anwendung: 1/2 bis 2/3 Tasse der Badesalz-Mischung zu einem warmen Bad hinzufügen und 15-20 Minuten einweichen.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> 1/2 bis 2/3 Tasse zu einem warmen Bad hinzufügen. 15-20 Minuten einweichen für maximalen Nutzen.
          </div>
          <div className="usage-item">
            <strong>Lagerung:</strong> In einem luftdichten Behälter an einem kühlen, trockenen Ort aufbewahren. Hält bis zu 6 Monate.
          </div>
          <div className="usage-item">
            <strong>Häufigkeit:</strong> 2-3 Mal pro Woche oder nach Bedarf zur Muskelschmerzlinderung verwenden.
          </div>
          <div className="usage-item">
            <strong>Vorsicht:</strong> Wassertemperatur vor dem Einsteigen testen. Nicht auf gebrochener oder stark gereizter Haut anwenden.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Lindert Muskelschmerzen</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🦴</span>
            <span>Lockert steife Gelenke</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Fördert Entspannung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Entzündungshemmend</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Alle Zutaten in den Warenkorb legen
        </button>
        <div className="total-cost">
          <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Quelle</h4>
        <p className="reference-text">
          Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Sprains_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);  
  const ingredients = [
    {
      id: 'lavender-oil',
      name: 'Lavendel ätherisches Öl',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavendel Ätherisches Öl (10ml)',
        price: 24.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'rosemary-oil',
      name: 'Rosmarin ätherisches Öl',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Rosmarin Ätherisches Öl (10ml)',
        price: 18.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Trägeröl',
      amount: 1,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Trägeröl-Mischung',
        price: 18.50,
        category: 'tragerole'
      }
    },
    {
      id: 'water',
      name: 'Warmes Wasser',
      amount: 1,
      unit: 'quart',
      type: 'volume',
      shopItem: {
        name: 'Destilliertes Wasser (4 Liter)',
        price: 2.99,
        category: 'basis-zutaten'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    if (ingredient.type === 'drops') {
      return ingredient.amount;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.type === 'volume') {
        if (ingredient.unit === 'quart') {
          return Math.round(ingredient.amount * 946.353);
        }
        return convertVolume(ingredient.amount, ingredient.unit, 'ml');
      }
    }
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'Tropfen';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'quart') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'quart' ? 'Liter' : ingredient.unit === 'tbsp' ? 'EL' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Verstauchungen & Zerrungen Kompresse Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Verstauchungen & Zerrungen Kompresse"
      icon="🤕"
      difficulty="Einfach"
      time="3 Minuten"
      yield="Einzelbehandlung"
      description="Eine therapeutische Kompresse mit Lavendel und Rosmarin ätherischen Ölen zur Behandlung von Verstauchungen und Zerrungen. Diese Kombination hilft, Entzündungen zu reduzieren, fördert die Heilung und bietet schmerzlindernde Wirkung für verletzte Muskeln und Bänder."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (Liter, EL, Tropfen)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (ml, Tropfen)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ul className="instructions-list">
          <li>In einer kleinen Schüssel die ätherischen Öle von Lavendel und Rosmarin mischen.</li>
          <li>Das Trägeröl zu den ätherischen Ölen hinzufügen und gut vermischen.</li>
          <li>Das warme Wasser in eine größere Schüssel oder ein Becken gießen.</li>
          <li>Die ätherische Ölmischung zum warmen Wasser hinzufügen und sanft umrühren.</li>
          <li>Ein sauberes Tuch oder Kompressenpad in der Lösung einweichen.</li>
          <li>Überschüssiges Wasser auswringen und die Kompresse auf die betroffene Stelle auflegen.</li>
          <li>10-15 Minuten einwirken lassen. Nach Bedarf wiederholen, bis zu 3-mal täglich.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> Kompresse bei Verstauchungen und Zerrungen jeweils 10-15 Minuten auflegen.
          </div>
          <div className="usage-item">
            <strong>Temperatur:</strong> Warmes (nicht heißes) Wasser verwenden, um weitere Gewebeschäden zu vermeiden.
          </div>
          <div className="usage-item">
            <strong>Häufigkeit:</strong> Bis zu 3-mal täglich anwenden, bis sich die Heilung verbessert.
          </div>
          <div className="usage-item">
            <strong>Wann Hilfe suchen:</strong> Bei anhaltenden oder sich verschlimmernden starken Schmerzen einen Arzt konsultieren.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Fördert Heilung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Reduziert Entzündungen</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Schmerzlinderung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Muskelerholung</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Alle Zutaten in den Warenkorb legen
        </button>
        <div className="total-cost">
          <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Quelle</h4>
        <p className="reference-text">
          Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Nausea_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);  
  const ingredients = [
    {
      id: 'lavender-oil',
      name: 'Lavendel ätherisches Öl',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavendel Ätherisches Öl (10ml)',
        price: 24.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'peppermint-oil',
      name: 'Pfefferminz ätherisches Öl',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Pfefferminz Ätherisches Öl (10ml)',
        price: 16.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'inhaler-blank',
      name: 'Leerer Inhalator-Röhrchen',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Leere Inhalator-Röhrchen (5er-Pack)',
        price: 12.99,
        category: 'behälter'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'Tropfen';
    }
    return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Übelkeit-Linderung Inhalator Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Übelkeit-Linderung Inhalator"
      icon="🤢"
      difficulty="Einfach"
      time="2 Minuten"
      yield="Tragbarer Inhalator"
      description="Ein praktischer, tragbarer Inhalator mit Lavendel und Pfefferminz ätherischen Ölen zur schnellen Linderung von Übelkeit. Perfekt für Reisekrankheit, Morgenmüdigkeit oder allgemeine Magenverstimmung."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (Tropfen)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (Tropfen)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ul className="instructions-list">
          <li>Den Wattedocht aus dem leeren Inhalator-Röhrchen entfernen.</li>
          <li>5 Tropfen Lavendel ätherisches Öl direkt auf den Wattedocht geben.</li>
          <li>5 Tropfen Pfefferminz ätherisches Öl auf denselben Wattedocht geben.</li>
          <li>Den gesättigten Wattedocht wieder in das Inhalator-Röhrchen einsetzen.</li>
          <li>Die Kappe fest auf den Inhalator setzen.</li>
          <li>Den Inhalator mit Inhalt und Datum beschriften.</li>
          <li>Anwendung: Kappe entfernen und tief durch die Nasenlöcher einatmen, nach Bedarf.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> Bei auftretender Übelkeit tief durch die Nasenlöcher einatmen. Kann alle paar Minuten nach Bedarf verwendet werden.
          </div>
          <div className="usage-item">
            <strong>Lagerung:</strong> An einem kühlen, trockenen Ort aufbewahren. Bleibt 6-8 Monate wirksam.
          </div>
          <div className="usage-item">
            <strong>Portabilität:</strong> Perfekt für Reisen, Schwangerschaft oder überall dort, wo schnelle Übelkeitslinderung benötigt wird.
          </div>
          <div className="usage-item">
            <strong>Sicherheit:</strong> Direkten Hautkontakt vermeiden. Von Augen und Schleimhäuten fernhalten.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🤢</span>
            <span>Lindert Übelkeit</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Schnell wirkend</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎒</span>
            <span>Tragbare Linderung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natürliches Heilmittel</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Alle Zutaten in den Warenkorb legen
        </button>
        <div className="total-cost">
          <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Quelle</h4>
        <p className="reference-text">
          Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_ChestCongestion_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);  
  const ingredients = [
    {
      id: 'lemon-oil',
      name: 'Zitronen ätherisches Öl',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Zitronen Ätherisches Öl (10ml)',
        price: 18.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Eukalyptus (blau) ätherisches Öl',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Eukalyptus Blau Ätherisches Öl (10ml)',
        price: 22.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'cypress-oil',
      name: 'Zypresse ätherisches Öl',
      amount: 1,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Zypresse Ätherisches Öl (10ml)',
        price: 26.99,
        category: 'atherische-ole'
      }
    },
    {
      id: 'hot-water',
      name: 'Heißes Wasser',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Destilliertes Wasser (4 Liter)',
        price: 2.99,
        category: 'basis-zutaten'
      }
    },
    {
      id: 'large-bowl',
      name: 'Große hitzebeständige Schüssel',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Glas-Rührschüssel (Groß)',
        price: 15.99,
        category: 'ausstattung'
      }
    },
    {
      id: 'towel',
      name: 'Großes Handtuch',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Badetuch (Baumwolle)',
        price: 12.99,
        category: 'ausstattung'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    if (ingredient.type === 'drops' || ingredient.type === 'item') {
      return ingredient.amount;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.type === 'volume') {
        if (ingredient.unit === 'cups') {
          return roundToNearestFive(ingredient.amount * 236.588);
        }
        return convertVolume(ingredient.amount, ingredient.unit, 'ml');
      }
    }
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'Tropfen';
    }
    if (ingredient.type === 'item') {
      return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'cups' ? 'Tassen' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Brustbeklemmung Dampfinhalation Rezept'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('In den Warenkorb legen:', cartItems);
      alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Brustbeklemmung Dampfinhalation"
      icon="🫁"
      difficulty="Einfach"
      time="5 Minuten"
      yield="Einzelbehandlung"
      description="Eine kraftvolle Dampfinhalations-Mischung zur Linderung von Brustbeklemmung bei Erkältungen und Husten. Diese Kombination aus Zitronen-, Eukalyptus (blau) und Zypresse ätherischen Ölen hilft, die Atemwege zu befreien und das Atmen auf natürliche Weise zu erleichtern."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Maßsystem:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (Tassen, Tropfen)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metrisch (ml, Tropfen)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Zutaten & Ausstattung</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-amount">
                {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
              </span>
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-price">${ingredient.shopItem.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="recipe-instructions">
        <h4>📋 Anweisungen</h4>
        <ul className="instructions-list">
          <li>Eine große hitzebeständige Schüssel mit 2 Tassen sehr heißem (nicht kochendem) Wasser füllen.</li>
          <li>4 Tropfen Zitronen ätherisches Öl zum heißen Wasser hinzufügen.</li>
          <li>2 Tropfen Eukalyptus (blau) ätherisches Öl zum Wasser hinzufügen.</li>
          <li>1 Tropfen Zypresse ätherisches Öl hinzufügen, um die Mischung zu vervollständigen.</li>
          <li>Das Wasser sanft umrühren, um die Öle zu verteilen.</li>
          <li>Das Gesicht etwa 20-25 cm über die Schüssel positionieren.</li>
          <li>Ein großes Handtuch über den Kopf und die Schüssel legen, um ein Zelt zu bilden.</li>
          <li>Die Augen schließen und 5-10 Minuten lang tief durch Nase und Mund atmen.</li>
          <li>Pausen machen, wenn der Dampf zu intensiv wird.</li>
          <li>2-3 Mal täglich nach Bedarf zur Stauungslinderung wiederholen.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Anwendung & Lagerung</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Anwendung:</strong> 2-3 Mal täglich während Zeiten von Brustbeklemmung verwenden.
          </div>
          <div className="usage-item">
            <strong>Sicherheit:</strong> Augen während der Inhalation geschlossen halten. Wasser sollte heiß, aber nicht kochend sein, um Verbrennungen zu vermeiden.
          </div>
          <div className="usage-item">
            <strong>Dauer:</strong> 5-10 Minuten pro Sitzung einatmen, bei Bedarf Pausen einlegen.
          </div>
          <div className="usage-item">
            <strong>Abstand:</strong> Gesicht 20-25 cm von der Wasseroberfläche entfernt halten, um Reizungen zu vermeiden.
          </div>
          <div className="usage-item">
            <strong>Wann vermeiden:</strong> Nicht verwenden, wenn Sie Asthma oder Atemwegsüberempfindlichkeiten haben, ohne einen Arzt zu konsultieren.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Vorteile</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🫁</span>
            <span>Befreit Brustbeklemmung</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💨</span>
            <span>Erleichtert das Atmen</span>
          </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🦠</span>
                      <span>Antimikrobielle Eigenschaften</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🌿</span>
                      <span>Natürliche Linderung</span>
                    </div>
                  </div>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          const EssOilRecipe_Headache_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);            
            const ingredients = [
              {
                id: 'lemon-oil',
                name: 'Zitronen ätherisches Öl',
                amount: 5,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Zitronen Ätherisches Öl (10ml)',
                  price: 18.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'lavender-oil',
                name: 'Lavendel ätherisches Öl',
                amount: 5,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Lavendel Ätherisches Öl (10ml)',
                  price: 24.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'peppermint-oil',
                name: 'Pfefferminz ätherisches Öl',
                amount: 5,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Pfefferminz Ätherisches Öl (10ml)',
                  price: 16.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'inhaler-blank',
                name: 'Leerer Inhalator-Röhrchen',
                amount: 1,
                unit: 'piece',
                type: 'item',
                shopItem: {
                  name: 'Leere Inhalator-Röhrchen (5er-Pack)',
                  price: 12.99,
                  category: 'behälter'
                }
              }
            ];
          
            const getDisplayAmount = (ingredient) => {
              return ingredient.amount;
            };
          
            const getDisplayUnit = (ingredient) => {
              if (ingredient.type === 'drops') {
                return 'Tropfen';
              }
              return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
            };
          
            const handleAddAllToCart = () => {
              const cartItems = ingredients.map(ingredient => ({
                id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
                name: ingredient.shopItem.name,
                price: ingredient.shopItem.price,
                quantity: 1,
                category: ingredient.shopItem.category,
                addedFrom: 'Kopfschmerz-Linderung Inhalator Rezept'
              }));
              
              if (onAddToCart) {
                onAddToCart(cartItems);
              } else {
                console.log('In den Warenkorb legen:', cartItems);
                alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
              }
            };
          
            return (
              <CollapsibleRecipe
                title="Kopfschmerz-Linderung Inhalator"
                icon="🤕"
                difficulty="Einfach"
                time="2 Minuten"
                yield="Tragbarer Inhalator"
                description="Ein kraftvoller, tragbarer Inhalator mit einer Dreifach-Mischung aus Zitronen-, Lavendel- und Pfefferminz ätherischen Ölen zur natürlichen Kopfschmerzlinderung. Diese ausgewogene Kombination lindert Spannungskopfschmerzen und bietet erfrischende, beruhigende Eigenschaften."
              >
                <div className="measurement-toggle">
                  <label className="toggle-label">Maßsystem:</label>
                  <div className="toggle-buttons">
                    <button 
                      className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('imperial')}
                    >
                      Imperial (Tropfen)
                    </button>
                    <button 
                      className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('metric')}
                    >
                      Metrisch (Tropfen)
                    </button>
                  </div>
                </div>
                <br/>
                <div className="recipe-ingredients">
                  <h4>🧪 Zutaten</h4>
                  <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                      <li key={ingredient.id} className="ingredient-item">
                        <span className="ingredient-amount">
                          {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                        <span className="ingredient-price">${ingredient.shopItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br/>
                <div className="recipe-instructions">
                  <h4>📋 Anweisungen</h4>
                  <ul className="instructions-list">
                    <li>Den Wattedocht aus dem leeren Inhalator-Röhrchen entfernen.</li>
                    <li>5 Tropfen Zitronen ätherisches Öl auf den Wattedocht geben.</li>
                    <li>5 Tropfen Lavendel ätherisches Öl hinzufügen.</li>
                    <li>5 Tropfen Pfefferminz ätherisches Öl hinzufügen.</li>
                    <li>Den gesättigten Wattedocht wieder in das Inhalator-Röhrchen einsetzen.</li>
                    <li>Die Kappe fest auf den Inhalator setzen.</li>
                    <li>Den Inhalator mit Inhalt und Datum beschriften.</li>
                    <li>Anwendung: Kappe entfernen und bei ersten Kopfschmerzanzeichen tief einatmen.</li>
                  </ul>
                </div>
                <br/>
                <div className="recipe-usage">
                  <h4>💡 Anwendung & Lagerung</h4>
                  <div className="usage-info">
                    <div className="usage-item">
                      <strong>Anwendung:</strong> Bei ersten Kopfschmerzanzeichen 3-5 tiefe Atemzüge durch jedes Nasenloch nehmen.
                    </div>
                    <div className="usage-item">
                      <strong>Lagerung:</strong> An einem kühlen, trockenen Ort aufbewahren. Bleibt 6-8 Monate wirksam.
                    </div>
                    <div className="usage-item">
                      <strong>Häufigkeit:</strong> Nach Bedarf verwenden. Kann alle 30 Minuten wiederholt werden.
                    </div>
                    <div className="usage-item">
                      <strong>Portabilität:</strong> Perfekt für unterwegs, im Büro oder überall dort, wo schnelle Kopfschmerzlinderung benötigt wird.
                    </div>
                  </div>
                </div>
                <br/>
                <div className="recipe-benefits">
                  <h4>🌟 Vorteile</h4>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">🤕</span>
                      <span>Lindert Kopfschmerzen</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">😌</span>
                      <span>Beruhigende Wirkung</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">❄️</span>
                      <span>Kühlende Linderung</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🎒</span>
                      <span>Tragbare Lösung</span>
                    </div>
                  </div>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          const EssOilRecipe_JetLagHangover_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);            
            const ingredients = [
              {
                id: 'lemon-oil',
                name: 'Zitronen ätherisches Öl',
                amount: 7,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Zitronen Ätherisches Öl (10ml)',
                  price: 18.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'ginger-oil',
                name: 'Ingwer ätherisches Öl',
                amount: 7,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Ingwer Ätherisches Öl (10ml)',
                  price: 22.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'inhaler-blank',
                name: 'Leerer Inhalator-Röhrchen',
                amount: 1,
                unit: 'piece',
                type: 'item',
                shopItem: {
                  name: 'Leere Inhalator-Röhrchen (5er-Pack)',
                  price: 12.99,
                  category: 'behälter'
                }
              }
            ];
          
            const getDisplayAmount = (ingredient) => {
              return ingredient.amount;
            };
          
            const getDisplayUnit = (ingredient) => {
              if (ingredient.type === 'drops') {
                return 'Tropfen';
              }
              return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
            };
          
            const handleAddAllToCart = () => {
              const cartItems = ingredients.map(ingredient => ({
                id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
                name: ingredient.shopItem.name,
                price: ingredient.shopItem.price,
                quantity: 1,
                category: ingredient.shopItem.category,
                addedFrom: 'Jetlag & Kater Inhalator Rezept'
              }));
              
              if (onAddToCart) {
                onAddToCart(cartItems);
              } else {
                console.log('In den Warenkorb legen:', cartItems);
                alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
              }
            };
          
            return (
              <CollapsibleRecipe
                title="Jetlag & Kater Erholungs-Inhalator"
                icon="✈️"
                difficulty="Einfach"
                time="2 Minuten"
                yield="Tragbarer Inhalator"
                description="Ein belebender, tragbarer Inhalator mit gleichen Teilen Zitronen- und Ingwer ätherischen Ölen, der dabei hilft, sich von Jetlag und Kater zu erholen. Diese energiespendende Kombination bekämpft Müdigkeit, lindert Übelkeit und hilft, geistige Klarheit und Energie wiederherzustellen."
              >
                <div className="measurement-toggle">
                  <label className="toggle-label">Maßsystem:</label>
                  <div className="toggle-buttons">
                    <button 
                      className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('imperial')}
                    >
                      Imperial (Tropfen)
                    </button>
                    <button 
                      className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('metric')}
                    >
                      Metrisch (Tropfen)
                    </button>
                  </div>
                </div>
                <br/>
                <div className="recipe-ingredients">
                  <h4>🧪 Zutaten</h4>
                  <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                      <li key={ingredient.id} className="ingredient-item">
                        <span className="ingredient-amount">
                          {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                        <span className="ingredient-price">${ingredient.shopItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br/>
                <div className="recipe-instructions">
                  <h4>📋 Anweisungen</h4>
                  <ul className="instructions-list">
                    <li>Den Wattedocht aus dem leeren Inhalator-Röhrchen entfernen.</li>
                    <li>7 Tropfen Zitronen ätherisches Öl auf den Wattedocht geben.</li>
                    <li>7 Tropfen Ingwer ätherisches Öl auf denselben Wattedocht geben.</li>
                    <li>Den gesättigten Wattedocht wieder in das Inhalator-Röhrchen einsetzen.</li>
                    <li>Die Kappe fest auf den Inhalator setzen.</li>
                    <li>Den Inhalator mit Inhalt und Datum beschriften.</li>
                    <li>Anwendung: Kappe entfernen und bei Müdigkeit oder Unwohlsein tief einatmen.</li>
                  </ul>
                </div>
                <br/>
                <div className="recipe-usage">
                  <h4>💡 Anwendung & Lagerung</h4>
                  <div className="usage-info">
                    <div className="usage-item">
                      <strong>Anwendung:</strong> 3-5 tiefe Atemzüge durch jedes Nasenloch bei ersten Anzeichen von Müdigkeit oder Unwohlsein.
                    </div>
                    <div className="usage-item">
                      <strong>Lagerung:</strong> An einem kühlen, trockenen Ort aufbewahren. Bleibt 6-8 Monate wirksam.
                    </div>
                    <div className="usage-item">
                      <strong>Reise-Tipp:</strong> Ideal für Langstreckenflüge, Zeitzonenwechsel oder beim Aufwachen mit Kater.
                    </div>
                    <div className="usage-item">
                      <strong>Häufigkeit:</strong> Alle 2-3 Stunden nach Bedarf oder bei auftretenden Symptomen verwenden.
                    </div>
                  </div>
                </div>
                <br/>
                <div className="recipe-benefits">
                  <h4>🌟 Vorteile</h4>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">⚡</span>
                      <span>Steigert Energie</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🤢</span>
                      <span>Lindert Übelkeit</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🧠</span>
                      <span>Verbessert geistige Klarheit</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✈️</span>
                      <span>Perfekt zum Reisen</span>
                    </div>
                  </div>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          const EssOilRecipe_ColdFluInhaler_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);            
            const ingredients = [
              {
                id: 'pine-oil',
                name: 'Kiefer ätherisches Öl',
                amount: 12,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Kiefer Ätherisches Öl (10ml)',
                  price: 19.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'inhaler-blank',
                name: 'Leerer Inhalator-Röhrchen',
                amount: 1,
                unit: 'piece',
                type: 'item',
                shopItem: {
                  name: 'Leere Inhalator-Röhrchen (5er-Pack)',
                  price: 12.99,
                  category: 'behälter'
                }
              }
            ];
          
            const getDisplayAmount = (ingredient) => {
              return ingredient.amount;
            };
          
            const getDisplayUnit = (ingredient) => {
              if (ingredient.type === 'drops') {
                return 'Tropfen';
              }
              return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
            };
          
            const handleAddAllToCart = () => {
              const cartItems = ingredients.map(ingredient => ({
                id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
                name: ingredient.shopItem.name,
                price: ingredient.shopItem.price,
                quantity: 1,
                category: ingredient.shopItem.category,
                addedFrom: 'Kiefer Erkältung & Grippe Inhalator Rezept'
              }));
              
              if (onAddToCart) {
                onAddToCart(cartItems);
              } else {
                console.log('In den Warenkorb legen:', cartItems);
                alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
              }
            };
          
            return (
              <CollapsibleRecipe
                title="Kiefer Erkältung & Grippe Inhalator"
                icon="🌲"
                difficulty="Einfach"
                time="1 Minute"
                yield="Tragbarer Inhalator"
                description="Ein kraftvoller, einfacher Inhalator nur mit Kiefer ätherischem Öl zur natürlichen Linderung von Erkältungs- und Grippesymptomen. Kiefernöl wirkt als natürliches Expektorans und Antiseptikum und hilft dabei, die Atemwege zu befreien und das Immunsystem zu stärken."
              >
                <div className="measurement-toggle">
                  <label className="toggle-label">Maßsystem:</label>
                  <div className="toggle-buttons">
                    <button 
                      className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('imperial')}
                    >
                      Imperial (Tropfen)
                    </button>
                    <button 
                      className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('metric')}
                    >
                      Metrisch (Tropfen)
                    </button>
                  </div>
                </div>
                <br/>
                <div className="recipe-ingredients">
                  <h4>🧪 Zutaten</h4>
                  <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                      <li key={ingredient.id} className="ingredient-item">
                        <span className="ingredient-amount">
                          {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                        <span className="ingredient-price">${ingredient.shopItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br/>
                <div className="recipe-instructions">
                  <h4>📋 Anweisungen</h4>
                  <ul className="instructions-list">
                    <li>Den Wattedocht aus dem leeren Inhalator-Röhrchen entfernen.</li>
                    <li>Alle 12 Tropfen Kiefer ätherisches Öl gleichmäßig auf den Wattedocht träufeln.</li>
                    <li>Den gesättigten Wattedocht wieder in das Inhalator-Röhrchen einsetzen.</li>
                    <li>Die Kappe fest auf den Inhalator setzen.</li>
                    <li>Den Inhalator mit "Kiefer Erkältung & Grippe" und Datum beschriften.</li>
                    <li>Anwendung: Kappe entfernen und bei Erkältungs- oder Grippesymptomen tief einatmen.</li>
                  </ul>
                </div>
                <br/>
                <div className="recipe-usage">
                  <h4>💡 Anwendung & Lagerung</h4>
                  <div className="usage-info">
                    <div className="usage-item">
                      <strong>Anwendung:</strong> 3-5 tiefe Atemzüge durch jedes Nasenloch bei verstopfter Nase oder Brustbeklemmung.
                    </div>
                    <div className="usage-item">
                      <strong>Lagerung:</strong> An einem kühlen, trockenen Ort aufbewahren. Bleibt 8-10 Monate wirksam.
                    </div>
                    <div className="usage-item">
                      <strong>Häufigkeit:</strong> Alle 2-3 Stunden während der Krankheit verwenden oder nach Bedarf.
                    </div>
                    <div className="usage-item">
                      <strong>Vorbeugung:</strong> Kann auch vorbeugend während der Erkältungs- und Grippesaison verwendet werden.
                    </div>
                  </div>
                </div>
                <br/>
                <div className="recipe-benefits">
                  <h4>🌟 Vorteile</h4>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">🫁</span>
                      <span>Befreit Atemwege</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🦠</span>
                      <span>Antiseptische Eigenschaften</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">💪</span>
                      <span>Stärkt das Immunsystem</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🌲</span>
                      <span>Erfrischender Waldduft</span>
                    </div>
                  </div>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          const EssOilRecipe_ColdSores_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);            
            const ingredients = [
              {
                id: 'carrier-oil',
                name: 'Trägeröl',
                amount: 1,
                unit: 'tbsp',
                type: 'volume',
                shopItem: {
                  name: 'Trägeröl-Mischung',
                  price: 18.50,
                  category: 'tragerole'
                }
              },
              {
                id: 'lemon-oil',
                name: 'Zitronen ätherisches Öl',
                amount: 3,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Zitronen Ätherisches Öl (10ml)',
                  price: 18.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'manuka-oil',
                name: 'Manuka ätherisches Öl',
                amount: 2,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Manuka Ätherisches Öl (5ml)',
                  price: 89.99,
                  category: 'atherische-ole'
                }
              }
            ];
          
            const getDisplayAmount = (ingredient) => {
              if (ingredient.type === 'drops') {
                return ingredient.amount;
              }
              
              if (measurementSystem === 'metric') {
                if (ingredient.type === 'volume') {
                  return convertVolume(ingredient.amount, ingredient.unit, 'ml');
                }
              }
              return ingredient.amount;
            };
          
            const getDisplayUnit = (ingredient) => {
              if (ingredient.type === 'drops') {
                return 'Tropfen';
              }
              
              if (measurementSystem === 'metric') {
                return 'ml';
              }
              return ingredient.unit === 'tbsp' ? 'EL' : ingredient.unit;
            };
          
            const handleAddAllToCart = () => {
              const cartItems = ingredients.map(ingredient => ({
                id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
                name: ingredient.shopItem.name,
                price: ingredient.shopItem.price,
                quantity: 1,
                category: ingredient.shopItem.category,
                addedFrom: 'Herpesbläschen Linderungs-Mischung Rezept'
              }));
              
              if (onAddToCart) {
                onAddToCart(cartItems);
              } else {
                console.log('In den Warenkorb legen:', cartItems);
                alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
              }
            };
          
            return (
              <CollapsibleRecipe
                title="Herpesbläschen Linderungs-Mischung"
                icon="🦠"
                difficulty="Einfach"
                time="2 Minuten"
                yield="Einzelanwendung"
                description="Eine potente antivirale Mischung speziell zur Linderung von Herpesbläschen entwickelt. Die Kombination aus Zitronen- und Manuka ätherischen Ölen bietet kraftvolle antimikrobielle Eigenschaften und fördert die Heilung bei gleichzeitiger Reduzierung von Beschwerden."
              >
                <div className="measurement-toggle">
                  <label className="toggle-label">Maßsystem:</label>
                  <div className="toggle-buttons">
                    <button 
                      className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('imperial')}
                    >
                      Imperial (EL, Tropfen)
                    </button>
                    <button 
                      className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('metric')}
                    >
                      Metrisch (ml, Tropfen)
                    </button>
                  </div>
                </div>
                <br/>
                <div className="recipe-ingredients">
                  <h4>🧪 Zutaten & Ausstattung</h4>
                  <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                      <li key={ingredient.id} className="ingredient-item">
                        <span className="ingredient-amount">
                          {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                        <span className="ingredient-price">${ingredient.shopItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br/>
                <div className="recipe-instructions">
                  <h4>📋 Anweisungen</h4>
                  <ul className="instructions-list">
                    <li>1 Esslöffel Trägeröl in eine kleine, saubere Schüssel oder einen Teller gießen.</li>
                    <li>3 Tropfen Zitronen ätherisches Öl zum Trägeröl hinzufügen.</li>
                    <li>2 Tropfen Manuka ätherisches Öl zur Mischung hinzufügen.</li>
                    <li>Sanft mit einem sauberen Wattestäbchen umrühren, um alle Zutaten zu verbinden.</li>
                    <li>Mit einem frischen Wattestäbchen eine kleine Menge der Mischung direkt auf das Herpesbläschen tupfen.</li>
                    <li>Vorsichtig auftragen, ohne zu reiben, damit die Öle natürlich einziehen.</li>
                    <li>Das Wattestäbchen nach jeder Anwendung entsorgen, um Kontamination zu vermeiden.</li>
                    <li>2-3 Mal täglich erneut auftragen, bis das Herpesbläschen heilt.</li>
                  </ul>
                </div>
                <br/>
                <div className="recipe-usage">
                  <h4>💡 Anwendung & Lagerung</h4>
                  <div className="usage-info">
                    <div className="usage-item">
                      <strong>Anwendung:</strong> Direkt auf das Herpesbläschen mit einem frischen Wattestäbchen 2-3 Mal täglich auftragen.
                    </div>
                    <div className="usage-item">
                      <strong>Zeitpunkt:</strong> Beste Ergebnisse bei Anwendung bei ersten Anzeichen von Kribbeln oder Ausbruch.
                    </div>
                    <div className="usage-item">
                      <strong>Hygiene:</strong> Immer ein frisches Wattestäbchen für jede Anwendung verwenden, um die Ausbreitung des Virus zu verhindern.
                    </div>
                    <div className="usage-item">
                      <strong>Lagerung:</strong> Für jede Anwendung frisch mischen. Vorgefertigte Mischung nicht lagern, um Wirksamkeit zu erhalten.
                    </div>
                    <div className="usage-item">
                      <strong>Verträglichkeitstest:</strong> Zuerst an einer kleinen Hautstelle testen, besonders bei empfindlicher Haut.
                    </div>
                  </div>
                </div>
                <br/>
                <div className="recipe-benefits">
                  <h4>🌟 Vorteile</h4>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">🦠</span>
                      <span>Antivirale Eigenschaften</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🩹</span>
                      <span>Fördert Heilung</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">😌</span>
                      <span>Reduziert Beschwerden</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">⚡</span>
                      <span>Schnell wirkende Linderung</span>
                    </div>
                  </div>
                </div>
          
                <div style={{ 
                  background: 'rgba(255, 193, 7, 0.1)', 
                  padding: '15px', 
                  borderRadius: '10px', 
                  border: '1px solid rgba(255, 193, 7, 0.3)',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Wichtige Sicherheitshinweise</h4>
                  <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Herpesbläschen sind hochansteckend. Vermeiden Sie es, die Stelle zu berühren und waschen Sie sich nach der Anwendung gründlich die Hände.</li>
                    <li>Teilen Sie keine Handtücher, Utensilien oder persönlichen Gegenstände während eines Ausbruchs.</li>
                    <li>Wenn Herpesbläschen anhalten, sich verschlimmern oder häufig auftreten, konsultieren Sie einen Arzt.</li>
                    <li>Manuka-Öl ist potent - niemals unverdünnt auf die Haut auftragen.</li>
                    <li>Kontakt mit Augen und Schleimhäuten vermeiden.</li>
                  </ul>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          const EssOilRecipe_PineColdFlu_DE = ({ onAddToCart }) => {
const { userLocation } = useCountry();
  
  const getInitialMeasurementSystem = () => {
    if (!userLocation) return 'metric';
    return userLocation.measurementSystem;
  };
  
  const [measurementSystem, setMeasurementSystem] = useState(getInitialMeasurementSystem());
  
  useEffect(() => {
    if (userLocation) {
      setMeasurementSystem(userLocation.measurementSystem);
    }
  }, [userLocation]);            
            const ingredients = [
              {
                id: 'pine-oil',
                name: 'Kiefer ätherisches Öl',
                amount: 4,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Kiefer Ätherisches Öl (10ml)',
                  price: 21.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'eucalyptus-oil',
                name: 'Eukalyptus ätherisches Öl',
                amount: 3,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Eukalyptus Ätherisches Öl (10ml)',
                  price: 19.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'bay-laurel-oil',
                name: 'Lorbeer ätherisches Öl',
                amount: 3,
                unit: 'drops',
                type: 'drops',
                shopItem: {
                  name: 'Lorbeer Ätherisches Öl (5ml)',
                  price: 34.99,
                  category: 'atherische-ole'
                }
              },
              {
                id: 'inhaler-blank',
                name: 'Leerer Inhalator-Röhrchen',
                amount: 1,
                unit: 'piece',
                type: 'item',
                shopItem: {
                  name: 'Leere Inhalator-Röhrchen (5er-Pack)',
                  price: 12.99,
                  category: 'behälter'
                }
              }
            ];
          
            const getDisplayAmount = (ingredient) => {
              return ingredient.amount;
            };
          
            const getDisplayUnit = (ingredient) => {
              if (ingredient.type === 'drops') {
                return 'Tropfen';
              }
              return ingredient.unit === 'piece' ? 'Stück' : ingredient.unit;
            };
          
            const handleAddAllToCart = () => {
              const cartItems = ingredients.map(ingredient => ({
                id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
                name: ingredient.shopItem.name,
                price: ingredient.shopItem.price,
                quantity: 1,
                category: ingredient.shopItem.category,
                addedFrom: 'Kiefer Erkältung & Grippe Linderungs-Inhalator Rezept'
              }));
              
              if (onAddToCart) {
                onAddToCart(cartItems);
              } else {
                console.log('In den Warenkorb legen:', cartItems);
                alert('Artikel würden in den Warenkorb gelegt: ' + cartItems.map(item => item.name).join(', '));
              }
            };
          
            return (
              <CollapsibleRecipe
                title="Kiefer Erkältung & Grippe Linderungs-Inhalator"
                icon="🌲"
                difficulty="Einfach"
                time="3 Minuten"
                yield="Tragbarer Inhalator"
                description="Ein kraftvoller antiseptischer Inhalator mit Kiefer-, Eukalyptus- und Lorbeer ätherischen Ölen zur effektiven Linderung der Nebenhöhlen während der Erkältungs- und Grippesaison. Diese potente Kombination bietet natürliche antibakterielle und antivirale Eigenschaften zur Unterstützung der Atemwegsgesundheit und Stärkung des Immunsystems."
              >
                <div className="measurement-toggle">
                  <label className="toggle-label">Maßsystem:</label>
                  <div className="toggle-buttons">
                    <button 
                      className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('imperial')}
                    >
                      Imperial (Tropfen)
                    </button>
                    <button 
                      className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                      onClick={() => setMeasurementSystem('metric')}
                    >
                      Metrisch (Tropfen)
                    </button>
                  </div>
                </div>
                <br/>
                <div className="recipe-ingredients">
                  <h4>🧪 Zutaten</h4>
                  <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                      <li key={ingredient.id} className="ingredient-item">
                        <span className="ingredient-amount">
                          {getDisplayAmount(ingredient)} {getDisplayUnit(ingredient)}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                        <span className="ingredient-price">${ingredient.shopItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br/>
                <div className="recipe-instructions">
                  <h4>📋 Anweisungen</h4>
                  <ul className="instructions-list">
                    <li>Den Wattedocht vorsichtig aus dem leeren Inhalator-Röhrchen entfernen.</li>
                    <li>4 Tropfen Kiefer ätherisches Öl direkt auf den Wattedocht geben.</li>
                    <li>3 Tropfen Eukalyptus ätherisches Öl auf denselben Wattedocht hinzufügen.</li>
                    <li>3 Tropfen Lorbeer ätherisches Öl hinzufügen, um die antiseptische Mischung zu vervollständigen.</li>
                    <li>Den gesättigten Wattedocht vorsichtig wieder in das Inhalator-Röhrchen einsetzen und sicherstellen, dass er richtig sitzt.</li>
                    <li>Die Kappe fest auf den Inhalator setzen, um die Verdunstung der Öle zu verhindern.</li>
                    <li>Den Inhalator mit Inhalt und Herstellungsdatum für zukünftige Referenz beschriften.</li>
                    <li>Anwendung: Kappe entfernen und alle 1-2 Stunden nach Bedarf tief und langsam durch die Nasenlöcher einatmen.</li>
                    <li>Bewusst und kontrolliert atmen, um die therapeutischen Vorteile zu maximieren.</li>
                  </ul>
                </div>
                <br/>
                <div className="recipe-usage">
                  <h4>💡 Anwendung & Lagerung</h4>
                  <div className="usage-info">
                    <div className="usage-item">
                      <strong>Optimale Anwendung:</strong> Alle 1-2 Stunden während der Krankheit tief einatmen für maximale Nebenhöhlen- und Stauungslinderung.
                    </div>
                    <div className="usage-item">
                      <strong>Lagerung:</strong> An einem kühlen, trockenen Ort fernab von direktem Sonnenlicht aufbewahren. Bleibt 6-8 Monate wirksam.
                    </div>
                    <div className="usage-item">
                      <strong>Saison der Anwendung:</strong> Am vorteilhaftesten während der Erkältungs- und Grippesaison (Herbst und Winter) zur Vorbeugung und Behandlung.
                    </div>
                    <div className="usage-item">
                      <strong>Tragbarkeit:</strong> Ideal für die Verwendung im Büro, in der Schule, auf Reisen oder überall dort, wo Sie schnelle Stauungslinderung benötigen.
                    </div>
                    <div className="usage-item">
                      <strong>Vorbeugung:</strong> Kann proaktiv in überfüllten Räumen verwendet werden, um das Immunsystem zu unterstützen.
                    </div>
                  </div>
                </div>
                <br/>
                <div className="recipe-benefits">
                  <h4>🌟 Vorteile</h4>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">🦠</span>
                      <span>Starke antiseptische Eigenschaften</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🫁</span>
                      <span>Befreit und öffnet Nebenhöhlen</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🛡️</span>
                      <span>Unterstützt und stärkt Immunität</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">💨</span>
                      <span>Verbessert freies Atmen</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🌲</span>
                      <span>Kühlende und belebende Wirkung</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">⚡</span>
                      <span>Schnelle und effektive Wirkung</span>
                    </div>
                  </div>
                </div>
          
                <div className="recipe-actions">
                  <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                    🛒 Alle Zutaten in den Warenkorb legen
                  </button>
                  <div className="total-cost">
                    <span>Gesamtkosten: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
                  </div>
                </div>
          
                <div className="recipe-scientific-note">
                  <h4>🔬 Wissenschaftliche Notiz</h4>
                  <p className="scientific-text">
                    <strong>Kiefer</strong> enthält Monoterpene mit expektorierenden und antibakteriellen Eigenschaften. 
                    <strong>Eukalyptus</strong> ist reich an Eucalyptol (Cineol), bekannt für seine abschwellenden und antimikrobiellen Wirkungen. 
                    <strong>Lorbeer</strong> bietet antivirale und entzündungshemmende Verbindungen, die die natürliche Atemwegsheilung unterstützen.
                  </p>
                </div>
          
                <div className="recipe-reference">
                  <h4>📚 Quelle</h4>
                  <p className="reference-text">
                    Rezept adaptiert von: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                  </p>
                </div>
              </CollapsibleRecipe>
            );
          };
          
          
          // Update the exports section:
          export {
            EssOilRecipe_Burn_DE,
            EssOilRecipe_BeeStings_DE,
            EssOilRecipe_MusclePain_DE,
            EssOilRecipe_Sprains_DE,
            EssOilRecipe_Nausea_DE,
            EssOilRecipe_ChestCongestion_DE,
            EssOilRecipe_Headache_DE,
            EssOilRecipe_JetLagHangover_DE,
            EssOilRecipe_ColdFluInhaler_DE,
            EssOilRecipe_PineColdFlu_DE,
            EssOilRecipe_ColdSores_DE,
            CollapsibleRecipe,
            MeasurementContext,
            convertVolume,
            convertWeight,
            roundToNearestFive
          };
          