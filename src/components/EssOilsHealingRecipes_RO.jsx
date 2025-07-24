import React, { useState, useContext, createContext, useEffect } from 'react';
import { useCountry } from '../contexts/CountryContext';

// Creează un context pentru unitățile de măsură
const MeasurementContext = createContext();

// Funcție utilitară pentru rotunjirea la cel mai apropiat număr divizibil cu 5
const roundToNearestFive = (num) => {
  return Math.round(num / 5) * 5;
};

// Utilități pentru conversie
const convertVolume = (amount, fromUnit, toUnit) => {
  // Convertește totul în ml mai întâi, apoi în unitatea țintă
  let mlAmount;
  
  if (fromUnit === 'oz') {
    mlAmount = roundToNearestFive(amount * 29.5735); // 1 fl oz = 29.5735 ml 
  } else if (fromUnit === 'tbsp') {
    mlAmount = roundToNearestFive(amount * 14.7868); // 1 lgă = 14.7868 ml
  } else if (fromUnit === 'tsp') {
    mlAmount = roundToNearestFive(amount * 4.92892); // 1 lgţ = 4.92892 ml
  } else {
    mlAmount = amount; // deja în ml
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
  // Convertește totul în grame mai întâi, apoi în unitatea țintă
  let gramAmount;
  
  if (fromUnit === 'oz') {
    gramAmount = roundToNearestFive(amount * 28.3495); // 1 oz = 28.3495 g
  } else {
    gramAmount = amount; // deja în grame
  }
  
  if (toUnit === 'oz') {
    return Math.round((gramAmount / 28.3495) * 100) / 100;
  } else {
    return roundToNearestFive(gramAmount); // grame
  }
};

// Componenta Rețetă Pliabilă
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
          {isExpanded ? '🔼 Ascunde Detaliile Rețetei' : '🔽 Arată Detaliile Rețetei'}
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

const EssOilRecipe_Burn_RO = ({ onAddToCart }) => {
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
      name: 'Ceară de albine (răzuită sau tocată)',
      amount: 0.5,
      unit: 'oz',
      type: 'weight',
      shopItem: {
        name: 'Ceară de Albine Organică',
        price: 12.99,
        category: 'ingrediente-baza'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Ulei purtător sau amestec',
      amount: 6,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Amestec Uleiuri Purtătoare',
        price: 18.50,
        category: 'uleiuri-purtatoare'
      }
    },
    {
      id: 'lavender-oil',
      name: 'Ulei esențial de lavandă',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Ulei Esențial de Lavandă (10ml)',
        price: 24.99,
        category: 'uleiuri-esentiale'
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
    return ingredient.unit === 'oz' ? 'oz' : ingredient.unit === 'tbsp' ? 'lgă' : ingredient.unit === 'tsp' ? 'lgţ' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Unguentului cu Lavandă pentru Arsuri'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Unguent cu Lavandă pentru Arsuri"
      icon="🔥"
      difficulty="Ușor"
      time="15 minute"
      yield="Face ~55g"
      description="Un unguent calmant și vindecător perfect pentru tratarea arsurilor, tăieturilor și iritațiilor pielii. Această rețetă combină proprietățile regenerative ale lavandei cu beneficiile protectoare ale cerii de albine. Unguentul poate fi folosit și pentru tăieturi și pentru a calma inflamația afecțiunilor pielii precum psoriazisul, eczema și dermatita. Este eficient și pentru vindecarea abceselor și vânătăilor."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (oz, lgă, lgţ)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (g, ml)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ol className="instructions-list">
          <li>Pune ceara de albine și uleiul purtător într-un borcan și așază borcanul într-o tigaie cu apă.</li>
          <li>Încălzește amestecul la foc mic, amestecând ușor până când ceara de albine se topește complet.</li>
          <li>Scoate borcanul de pe foc și lasă amestecul să se răcească la temperatura camerei.</li>
          <li>După răcire, adaugă uleiul esențial de lavandă și amestecă bine pentru a combina.</li>
          <li>Ajustează consistența dacă este necesar adăugând mai mult ulei purtător (pentru textură mai moale) sau ceară de albine (pentru textură mai fermă).</li>
          <li>Lasă amestecul să se răcească complet înainte de a-l transfera în recipiente de depozitare.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Aplică o cantitate mică direct pe arsuri, tăieturi sau piele iritată după necesitate.
          </div>
          <div className="usage-item">
            <strong>Depozitare:</strong> Păstrează într-un loc răcoros și uscat. Se va păstra până la 12 luni.
          </div>
          <div className="usage-item">
            <strong>Test de Compatibilitate:</strong> Testează întotdeauna pe o suprafață mică mai întâi, în special dacă ai pielea sensibilă.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Promovează vindecarea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Reduce durerea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <span>Previne cicatrizarea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Ingrediente naturale</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Sursă</h4>
        <p className="reference-text">
          Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_BeeStings_RO = ({ onAddToCart }) => {
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
      name: 'Ulei esențial de lavandă',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Lavandă (10ml)',
        price: 24.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Ulei esențial de eucalipt (albastru)',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Eucalipt Albastru (10ml)',
        price: 22.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Ulei purtător',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Amestec Uleiuri Purtătoare',
        price: 18.50,
        category: 'uleiuri-purtatoare'
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
      return 'picături';
    }
    
    if (measurementSystem === 'metric') {
      return 'ml';
    }
    return ingredient.unit === 'tsp' ? 'lgţ' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Amestecului pentru Înțepăturile de Albină'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Amestec pentru Înțepăturile de Albină"
      icon="🐝"
      difficulty="Ușor"
      time="2 minute"
      yield="Aplicare unică"
      description="Un amestec cu acțiune rapidă conceput pentru a oferi alinare imediată de la înțepăturile de albină. Această combinație de uleiuri esențiale de lavandă și eucalipt (albastru) ajută la reducerea durerii, umflăturii și inflamației, în timp ce promovează vindecarea."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (lgţ, picături)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, picături)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ol className="instructions-list">
          <li>Toarnă uleiul purtător într-un bol mic sau în palma mâinii curate.</li>
          <li>Adaugă picăturile de ulei esențial de lavandă în uleiul purtător.</li>
          <li>Adaugă picăturile de ulei esențial de eucalipt (albastru) în amestec.</li>
          <li>Amestecă ușor cu degetul sau o lingurită mică pentru a combina toate ingredientele.</li>
          <li>Aplică imediat pe zona înțepăturii de albină folosind un bețișor de vată sau un deget curat.</li>
          <li>Reaплицуј la fiecare 15-20 de minute după necesitate pentru alinarea durerii și umflăturii.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Aplică direct pe înțepătura de albină imediat după curățarea zonei. Îndepărtează acul mai întâi dacă este vizibil.
          </div>
          <div className="usage-item">
            <strong>Notă de Urgență:</strong> Caută asistență medicală imediată dacă experimentezi reacții alergice precum dificultăți în respirație sau umflătură răspândită.
          </div>
          <div className="usage-item">
            <strong>Depozitare:</strong> Amestecă proaspăt pentru fiecare aplicare. Nu depozita pre-amestecat pentru această rețetă.
          </div>
          <div className="usage-item">
            <strong>Frecvența:</strong> Aplică la fiecare 15-20 de minute în prima oră, apoi după necesitate.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Reduce durerea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">❄️</span>
            <span>Efect de răcire</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Anti-inflamator</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Alinare cu acțiune rapidă</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Sursă</h4>
        <p className="reference-text">
          Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_MusclePain_RO = ({ onAddToCart }) => {
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
      name: 'Ulei esențial de lavandă',
      amount: 10,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Lavandă (10ml)',
        price: 24.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'chamomile-oil',
      name: 'Ulei esențial de mușețel (german)',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Mușețel German (5ml)',
        price: 32.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'coriander-oil',
      name: 'Ulei esențial de coriandru',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Coriandru (10ml)',
        price: 19.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Ulei purtător',
      amount: 4,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Amestec Uleiuri Purtătoare',
        price: 18.50,
        category: 'uleiuri-purtatoare'
      }
    },
    {
      id: 'epsom-salt',
      name: 'Sare Epsom',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Sare Epsom Pură (1 kg)',
        price: 8.99,
        category: 'ingrediente-baza'
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
      return 'picături';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'cups' ? 'cești' : ingredient.unit === 'tbsp' ? 'lgă' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Sărurilor de Baie pentru Durerile Musculare'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Săruri de Baie pentru Durerile Musculare și Articulațiile Rigide"
      icon="💪"
      difficulty="Ușor"
      time="5 minute"
      yield="2-3 băi"
      description="Săruri de baie vindecătoare care combină proprietățile analgezice ale lavandei cu mușețelul și coliandrul pentru a ameliora eficient durerile musculare și articulațiile rigide. Perfecte pentru recuperarea post-antrenament sau pentru alinarea durerii cronice prin băi terapeutice relaxante."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (cești, lgă, picături)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, picături)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ul className="instructions-list">
          <li>Într-un bol mic, combină uleiurile esențiale de lavandă, mușețel german și coriandru.</li>
          <li>Adaugă uleiul purtător la amestecul de uleiuri esențiale și amestecă bine pentru a combina.</li>
          <li>Într-un bol mai mare, toarnă sarea Epsom.</li>
          <li>Adaugă amestecul de ulei esențial și ulei purtător la sarea Epsom.</li>
          <li>Amestecă temeinic cu o lingură până când uleiurile sunt distribuite uniform în toată sarea.</li>
          <li>Păstrează într-un recipient etanș până când ești gata să o folosești.</li>
          <li>Pentru utilizare: Adaugă 1/2 până la 2/3 cană din amestecul de sare de baie într-o baie caldă și înmoaie timp de 15-20 de minute.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Adaugă 1/2 până la 2/3 cană într-o baie caldă. Înmoaie timp de 15-20 de minute pentru beneficiu maxim.
          </div>
          <div className="usage-item">
            <strong>Depozitare:</strong> Păstrează într-un recipient etanș într-un loc răcoros și uscat. Se va păstra până la 6 luni.
          </div>
          <div className="usage-item">
            <strong>Frecvența:</strong> Folosește de 2-3 ori pe săptămână sau după necesitate pentru alinarea durerilor musculare.
          </div>
          <div className="usage-item">
            <strong>Precauție:</strong> Testează temperatura apei înainte de intrare. Nu folosi pe piele crăpată sau grav iritată.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Alină durerile musculare</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🦴</span>
            <span>Ameliorează rigiditatea articulațiilor</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Promovează relaxarea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Anti-inflamator</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Sursă</h4>
        <p className="reference-text">
          Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Sprains_RO = ({ onAddToCart }) => {
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
      name: 'Ulei esențial de lavandă',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Lavandă (10ml)',
        price: 24.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'rosemary-oil',
      name: 'Ulei esențial de rozmarin',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Rozmarin (10ml)',
        price: 18.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Ulei purtător',
      amount: 1,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Amestec Uleiuri Purtătoare',
        price: 18.50,
        category: 'uleiuri-purtatoare'
      }
    },
    {
      id: 'water',
      name: 'Apă caldă',
      amount: 1,
      unit: 'quart',
      type: 'volume',
      shopItem: {
        name: 'Apă Distilată (4 litri)',
        price: 2.99,
        category: 'ingrediente-baza'
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
      return 'picături';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'quart') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'quart' ? 'litru' : ingredient.unit === 'tbsp' ? 'lgă' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Compreselor pentru Entorse și Întinderi'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Comprese pentru Entorse și Întinderi"
      icon="🤕"
      difficulty="Ușor"
      time="3 minute"
      yield="Tratament unic"
      description="O compresă terapeutică folosind uleiuri esențiale de lavandă și rozmarin pentru tratarea entorselor și întinderilor. Această combinație ajută la reducerea inflamației, promovează vindecarea și oferă alinare analgezică pentru mușchii și ligamentele rănite."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (litru, lgă, picături)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, picături)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ul className="instructions-list">
          <li>Într-un bol mic, combină uleiurile esențiale de lavandă și rozmarin.</li>
          <li>Adaugă uleiul purtător la uleiurile esențiale și amestecă bine.</li>
          <li>Toarnă apa caldă într-un bol mai mare sau o bazină.</li>
          <li>Adaugă amestecul de uleiuri esențiale la apa caldă și amestecă ușor.</li>
          <li>Înmoaie o cârpă curată sau o compresă în soluție.</li>
          <li>Stoarce excesul de apă și aplică compressa pe zona afectată.</li>
          <li>Lasă timp de 10-15 minute. Reaплицуй după necesitate, până la 3 ori pe zi.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Aplică compressa pe entorse și întinderi timp de 10-15 minute de fiecare dată.
          </div>
          <div className="usage-item">
            <strong>Temperatură:</strong> Folosește apă caldă (nu fierbinte) pentru a evita deteriorarea suplimentară a țesuturilor.
          </div>
          <div className="usage-item">
            <strong>Frecvența:</strong> Aplică până la 3 ori pe zi până când vindecarea se îmbunătățește.
          </div>
          <div className="usage-item">
            <strong>Când să cauți ajutor:</strong> Dacă durerea severă persistă sau se înrăutățește, consultă un profesionist medical.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Promovează vindecarea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Reduce inflamația</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Alinarea durerii</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Recuperarea musculară</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Sursă</h4>
        <p className="reference-text">
          Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Nausea_RO = ({ onAddToCart }) => {
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
      name: 'Ulei esențial de lavandă',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Lavandă (10ml)',
        price: 24.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'peppermint-oil',
      name: 'Ulei esențial de mentă',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Mentă (10ml)',
        price: 16.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'inhaler-blank',
      name: 'Tub inhalator gol',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Tuburi Inhalatoare Goale (set de 5)',
        price: 12.99,
        category: 'recipiente'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    if (ingredient.type === 'drops') {
      return 'picături';
    }
    return ingredient.unit === 'piece' ? 'bucată' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Inhalatorului pentru Greață'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Inhalator pentru Alinarea Greții"
      icon="🤢"
      difficulty="Ușor"
      time="2 minute"
      yield="Inhalator portabil"
      description="Un inhalator convenabil și portabil folosind uleiuri esențiale de lavandă și mentă pentru a ameliora rapid greața. Perfect pentru rău de mișcare, greața matinală sau tulburările generale de stomac."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (picături)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (picături)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ul className="instructions-list">
          <li>Scoate fitilul de bumbac din tubul inhalator gol.</li>
          <li>Adaugă 5 picături de ulei esențial de lavandă direct pe fitilul de bumbac.</li>
          <li>Adaugă 5 picături de ulei esențial de mentă pe același fitil de bumbac.</li>
          <li>Introdu fitilul de bumbac saturat înapoi în tubul inhalator.</li>
          <li>Fixează capacul ferm pe inhalator.</li>
          <li>Etichetează inhalatorul cu conținutul și data.</li>
          <li>Pentru utilizare: Scoate capacul și inhalează adânc prin nări după necesitate.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Inhalează adânc prin nări când apare greața. Poate fi folosit la câteva minute după necesitate.
          </div>
          <div className="usage-item">
            <strong>Depozitare:</strong> Păstrează într-un loc răcoros și uscat. Va rămâne eficient timp de 6-8 luni.
          </div>
          <div className="usage-item">
            <strong>Portabilitate:</strong> Perfect pentru călătorii, sarcină sau oriunde este nevoie de alinare rapidă a greții.
          </div>
          <div className="usage-item">
            <strong>Siguranță:</strong> Evită contactul direct cu pielea. Ține departe de ochi și mucoase.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🤢</span>
            <span>Alină greața</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Acțiune rapidă</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎒</span>
            <span>Alinare portabilă</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Remediu natural</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Sursă</h4>
        <p className="reference-text">
          Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_ChestCongestion_RO = ({ onAddToCart }) => {
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
      name: 'Ulei esențial de lămâie',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Lămâie (10ml)',
        price: 18.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Ulei esențial de eucalipt (albastru)',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Eucalipt Albastru (10ml)',
        price: 22.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'cypress-oil',
      name: 'Ulei esențial de chiparos',
      amount: 1,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ulei Esențial de Chiparos (10ml)',
        price: 26.99,
        category: 'uleiuri-esentiale'
      }
    },
    {
      id: 'hot-water',
      name: 'Apă fierbinte',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Apă Distilată (4 litri)',
        price: 2.99,
        category: 'ingrediente-baza'
      }
    },
    {
      id: 'large-bowl',
      name: 'Bol mare rezistent la căldură',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Bol de Sticlă pentru Amestecare (Mare)',
        price: 15.99,
        category: 'echipament'
      }
    },
    {
      id: 'towel',
      name: 'Prosop mare',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Prosop de Baie (Bumbac)',
        price: 12.99,
        category: 'echipament'
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
      return 'picături';
    }
    if (ingredient.type === 'item') {
      return ingredient.unit === 'piece' ? 'bucată' : ingredient.unit;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit === 'cups' ? 'cești' : ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Rețeta Inhalației cu Aburi pentru Congestia Toracică'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adăugare în coș:', cartItems);
      alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Inhalație cu Aburi pentru Congestia Toracică"
      icon="🫁"
      difficulty="Ușor"
      time="5 minute"
      yield="Tratament unic"
      description="Un amestec puternic de inhalație cu aburi pentru a ameliora congestia toracică de la răceli și tuse. Această combinație de uleiuri esențiale de lămâie, eucalipt (albastru) și chiparos ajută la deschiderea căilor respiratorii și facilitatea respirației în mod natural."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Sistem de Măsură:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (cești, picături)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, picături)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingrediente și Echipament</h4>
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
        <h4>📋 Instrucțiuni</h4>
        <ul className="instructions-list">
          <li>Umple un bol mare rezistent la căldură cu 2 cești de apă foarte fierbinte (nu clocotitoare).</li>
          <li>Adaugă 4 picături de ulei esențial de lămâie în apa fierbinte.</li>
          <li>Adaugă 2 picături de ulei esențial de eucalipt (albastru) în apă.</li>
          <li>Adaugă 1 picătură de ulei esențial de chiparos pentru a completa amestecul.</li>
          <li>Amestecă apa ușor pentru a dispersa uleiurile.</li>
          <li>Poziționează fața la aproximativ 20-25 cm deasupra bolului.</li>
          <li>Aruncă un prosop mare peste cap și bol pentru a crea un cort.</li>
          <li>Închide ochii și respiră adânc prin nas și gură timp de 5-10 minute.</li>
          <li>Fă pauze dacă vaporii devin prea intensi.</li>
          <li>Repetă de 2-3 ori pe zi după necesitate pentru alinarea congestiei.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Utilizare și Depozitare</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Aplicare:</strong> Folosește de 2-3 ori pe zi în perioadele de congestie toracică.
          </div>
          <div className="usage-item">
            <strong>Siguranță:</strong> Ține ochii închiși în timpul inhalației. Apa trebuie să fie fierbinte, dar nu clocotitoare pentru a evita arsurile.
          </div>
          <div className="usage-item">
            <strong>Durată:</strong> Inhalează timp de 5-10 minute pe sesiune, făcând pauze după necesitate.
          </div>
          <div className="usage-item">
            <strong>Distanță:</strong> Ține fața la 20-25 cm de suprafața apei pentru a evita iritațiile.
          </div>
          <div className="usage-item">
            <strong>Când să eviți:</strong> Nu folosi dacă ai astm sau sensibilități respiratorii fără a consulta un furnizor de sănătate.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Beneficii</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🫁</span>
            <span>Curăță congestia toracică</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💨</span>
            <span>Facilitează respirația</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🦠</span>
            <span>Proprietăți antimicrobiene</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Decongestiv natural</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
        </button>
        <div className="total-cost">
          <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      const EssOilRecipe_Headache_RO = ({ onAddToCart }) => {
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
            name: 'Ulei esențial de lămâie',
            amount: 6,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Lămâie (10ml)',
              price: 18.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'lavender-oil',
            name: 'Ulei esențial de lavandă',
            amount: 6,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Lavandă (10ml)',
              price: 24.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'peppermint-oil',
            name: 'Ulei esențial de mentă',
            amount: 3,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Mentă (10ml)',
              price: 16.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'diffuser',
            name: 'Difuzor de uleiuri esențiale',
            amount: 1,
            unit: 'piece',
            type: 'item',
            shopItem: {
              name: 'Difuzor Ultrasonic de Uleiuri Esențiale',
              price: 45.99,
              category: 'echipament'
            }
          }
        ];
      
        const getDisplayAmount = (ingredient) => {
          return ingredient.amount;
        };
      
        const getDisplayUnit = (ingredient) => {
          if (ingredient.type === 'drops') {
            return 'picături';
          }
          return ingredient.unit === 'piece' ? 'bucată' : ingredient.unit;
        };
      
        const handleAddAllToCart = () => {
          const cartItems = ingredients.map(ingredient => ({
            id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
            name: ingredient.shopItem.name,
            price: ingredient.shopItem.price,
            quantity: 1,
            category: ingredient.shopItem.category,
            addedFrom: 'Rețeta Amestecului Difuzor pentru Dureri de Cap'
          }));
          
          if (onAddToCart) {
            onAddToCart(cartItems);
          } else {
            console.log('Adăugare în coș:', cartItems);
            alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
          }
        };
      
        return (
          <CollapsibleRecipe
            title="Amestec Difuzor pentru Alinarea Durerilor de Cap"
            icon="🤕"
            difficulty="Ușor"
            time="2 minute"
            yield="Aromă cameră"
            description="Un amestec calmant pentru difuzor care combină proprietățile analgezice ale lavandei cu efectele revigorante ale lămâiei și menței pentru a ameliora în mod natural durerile de cap tensionale și migrena ușoară."
          >
            <div className="measurement-toggle">
              <label className="toggle-label">Sistem de Măsură:</label>
              <div className="toggle-buttons">
                <button 
                  className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('imperial')}
                >
                  Imperial (picături)
                </button>
                <button 
                  className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('metric')}
                >
                  Metric (picături)
                </button>
              </div>
            </div>
            <br/>
            <div className="recipe-ingredients">
              <h4>🧪 Ingrediente și Echipament</h4>
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
              <h4>📋 Instrucțiuni</h4>
              <ul className="instructions-list">
                <li>Umple rezervorul difuzorului cu apă conform instrucțiunilor producătorului.</li>
                <li>Adaugă 6 picături de ulei esențial de lămâie în apă.</li>
                <li>Adaugă 6 picături de ulei esențial de lavandă în amestec.</li>
                <li>Adaugă 3 picături de ulei esențial de mentă pentru a completa amestecul.</li>
                <li>Pornește difuzorul și permite amestecului să se răspândească în cameră.</li>
                <li>Difuzează timp de 30-60 de minute sau până când durerea de cap se ameliorează.</li>
                <li>Repetă după necesitate, dar nu mai mult de 3 ori pe zi.</li>
              </ul>
            </div>
            <br/>
            <div className="recipe-usage">
              <h4>💡 Utilizare și Depozitare</h4>
              <div className="usage-info">
                <div className="usage-item">
                  <strong>Timp de difuzare:</strong> Difuzează timp de 30-60 de minute pentru beneficiu optim.
                </div>
                <div className="usage-item">
                  <strong>Frecvența:</strong> Folosește până la 3 ori pe zi când experimentezi dureri de cap.
                </div>
                <div className="usage-item">
                  <strong>Atmosfera:</strong> Cel mai eficient într-o cameră mică până medie cu ferestre închise.
                </div>
                <div className="usage-item">
                  <strong>Siguranță:</strong> Nu folosi în preajma copiilor mici sau animalelor de companie fără supraveghere.
                </div>
              </div>
            </div>
            <br/>
            <div className="recipe-benefits">
              <h4>🌟 Beneficii</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">🧠</span>
                  <span>Alină durerile de cap</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">😌</span>
                  <span>Reduce tensiunea</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🌿</span>
                  <span>Aromă relaxantă</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Efect revigorant</span>
                </div>
              </div>
            </div>
      
            <div className="recipe-actions">
              <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
              </button>
              <div className="total-cost">
                <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
              </div>
            </div>
      
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      const EssOilRecipe_JetLagHangover_RO = ({ onAddToCart }) => {
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
            name: 'Ulei esențial de lămâie',
            amount: 4,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Lămâie (10ml)',
              price: 18.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'ginger-oil',
            name: 'Ulei esențial de ghimbir',
            amount: 2,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Ghimbir (10ml)',
              price: 28.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'carrier-oil',
            name: 'Ulei purtător',
            amount: 1,
            unit: 'tbsp',
            type: 'volume',
            shopItem: {
              name: 'Amestec Uleiuri Purtătoare',
              price: 18.50,
              category: 'uleiuri-purtatoare'
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
            return 'picături';
          }
          
          if (measurementSystem === 'metric') {
            return 'ml';
          }
          return ingredient.unit === 'tbsp' ? 'lgă' : ingredient.unit;
        };
      
        const handleAddAllToCart = () => {
          const cartItems = ingredients.map(ingredient => ({
            id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
            name: ingredient.shopItem.name,
            price: ingredient.shopItem.price,
            quantity: 1,
            category: ingredient.shopItem.category,
            addedFrom: 'Rețeta Amestecului pentru Jetlag și Mahmureală'
          }));
          
          if (onAddToCart) {
            onAddToCart(cartItems);
          } else {
            console.log('Adăugare în coș:', cartItems);
            alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
          }
        };
      
        return (
          <CollapsibleRecipe
            title="Amestec pentru Alinarea Jetlag-ului și Mahmureala"
            icon="✈️"
            difficulty="Ușor"
            time="3 minute"
            yield="Tratament unic"
            description="Un amestec energizant care combină proprietățile revigorante ale lămâiei cu efectele digestive ale ghimbirului pentru a combate oboseala de la jetlag și simptomele de mahmureală. Perfect pentru călători și recuperarea după petreceri."
          >
            <div className="measurement-toggle">
              <label className="toggle-label">Sistem de Măsură:</label>
              <div className="toggle-buttons">
                <button 
                  className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('imperial')}
                >
                  Imperial (lgă, picături)
                </button>
                <button 
                  className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('metric')}
                >
                  Metric (ml, picături)
                </button>
              </div>
            </div>
            <br/>
            <div className="recipe-ingredients">
              <h4>🧪 Ingrediente</h4>
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
              <h4>📋 Instrucțiuni</h4>
              <ul className="instructions-list">
                <li>Într-un bol mic, combină uleiul esențial de lămâie și uleiul esențial de ghimbir.</li>
                <li>Adaugă uleiul purtător la amestecul de uleiuri esențiale.</li>
                <li>Amestecă bine toate ingredientele cu o lingurită mică.</li>
                <li>Pentru masaj: Aplică amestecul pe punctele de puls (încheieturi, gât, tâmple) și masează ușor.</li>
                <li>Pentru inhalare: Pune câteva picături pe un șervețel și inhalează adânc.</li>
                <li>Pentru baie: Adaugă întregul amestec într-o baie caldă și înmoaie timp de 15-20 de minute.</li>
                <li>Repetă după necesitate pentru energizare și recuperare.</li>
              </ul>
            </div>
            <br/>
            <div className="recipe-usage">
              <h4>💡 Utilizare și Depozitare</h4>
              <div className="usage-info">
                <div className="usage-item">
                  <strong>Pentru jetlag:</strong> Folosește dimineața pentru a ajuta la resetarea ceasului biologic intern.
                </div>
                <div className="usage-item">
                  <strong>Pentru mahmureală:</strong> Aplică pe punctele de puls și inhalează pentru alinarea greții și durerilor de cap.
                </div>
                <div className="usage-item">
                  <strong>Depozitare:</strong> Amestecă proaspăt pentru fiecare utilizare pentru eficiență maximă.
                </div>
                <div className="usage-item">
                  <strong>Hidratare:</strong> Bea multă apă în combinație cu această terapie cu uleiuri esențiale.
                </div>
              </div>
            </div>
            <br/>
            <div className="recipe-benefits">
              <h4>🌟 Beneficii</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Mărește energia</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🤢</span>
                  <span>Reduce greața</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🧠</span>
                  <span>Îmbunătățește claritatea mentală</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🔄</span>
                  <span>Ajută la recuperare</span>
                </div>
              </div>
            </div>
      
            <div className="recipe-actions">
              <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
              </button>
              <div className="total-cost">
                <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
              </div>
            </div>
      
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      const EssOilRecipe_ColdFluInhaler_RO = ({ onAddToCart }) => {
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
            name: 'Ulei esențial de pin',
            amount: 4,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Pin (10ml)',
              price: 21.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'eucalyptus-oil',
            name: 'Ulei esențial de eucalipt',
            amount: 3,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Eucalipt (10ml)',
              price: 19.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'bay-laurel-oil',
            name: 'Ulei esențial de dafin',
            amount: 3,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Dafin (5ml)',
              price: 34.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'inhaler-blank',
            name: 'Tub inhalator gol',
            amount: 1,
            unit: 'piece',
            type: 'item',
            shopItem: {
              name: 'Tuburi Inhalatoare Goale (set de 5)',
              price: 12.99,
              category: 'recipiente'
            }
          }
        ];
      
        const getDisplayAmount = (ingredient) => {
          return ingredient.amount;
        };
      
        const getDisplayUnit = (ingredient) => {
          if (ingredient.type === 'drops') {
            return 'picături';
          }
          return ingredient.unit === 'piece' ? 'bucată' : ingredient.unit;
        };
      
        const handleAddAllToCart = () => {
          const cartItems = ingredients.map(ingredient => ({
            id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
            name: ingredient.shopItem.name,
            price: ingredient.shopItem.price,
            quantity: 1,
            category: ingredient.shopItem.category,
            addedFrom: 'Rețeta Inhalatorului cu Pin pentru Răceală și Gripă'
          }));
          
          if (onAddToCart) {
            onAddToCart(cartItems);
          } else {
            console.log('Adăugare în coș:', cartItems);
            alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
          }
        };
      
        return (
          <CollapsibleRecipe
            title="Inhalator cu Pin pentru Răceală și Gripă"
            icon="🌲"
            difficulty="Ușor"
            time="3 minute"
            yield="Inhalator portabil"
            description="Un inhalator antiseptic puternic folosind uleiuri esențiale de pin, eucalipt și dafin pentru alinarea sinusurilor în sezonul de răceală și gripă. Această combinație oferă proprietăți antibacteriene și antivirale naturale pentru a ajuta la curățarea congestiei respiratorii."
          >
            <div className="measurement-toggle">
              <label className="toggle-label">Sistem de Măsură:</label>
              <div className="toggle-buttons">
                <button 
                  className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('imperial')}
                >
                  Imperial (picături)
                </button>
                <button 
                  className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('metric')}
                >
                  Metric (picături)
                </button>
              </div>
            </div>
            <br/>
            <div className="recipe-ingredients">
              <h4>🧪 Ingrediente</h4>
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
              <h4>📋 Instrucțiuni</h4>
              <ul className="instructions-list">
                <li>Scoate fitilul de bumbac din tubul inhalator gol.</li>
                <li>Adaugă 4 picături de ulei esențial de pin pe fitilul de bumbac.</li>
                <li>Adaugă 3 picături de ulei esențial de eucalipt pe același fitil.</li>
                <li>Adaugă 3 picături de ulei esențial de dafin pentru a completa amestecul.</li>
                <li>Introdu fitilul de bumbac saturat înapoi în tubul inhalator.</li>
                <li>Fixează capacul ferm pe inhalator.</li>
                <li>Etichetează cu conținutul și data pentru referință viitoare.</li>
                <li>Pentru utilizare: Scoate capacul și inhalează adânc prin nări la fiecare 1-2 ore după necesitate.</li>
              </ul>
            </div>
            <br/>
            <div className="recipe-usage">
              <h4>💡 Utilizare și Depozitare</h4>
              <div className="usage-info">
                <div className="usage-item">
                  <strong>Aplicare:</strong> Inhalează la fiecare 1-2 ore în timpul bolii pentru alinarea optimă a sinusurilor.
                </div>
                <div className="usage-item">
                  <strong>Depozitare:</strong> Păstrează într-un loc răcoros și uscat. Va rămâne eficient timp de 6-8 luni.
                </div>
                <div className="usage-item">
                  <strong>Sezon:</strong> Cel mai util în timpul sezonului de răceală și gripă (toamna și iarna).
                </div>
                <div className="usage-item">
                  <strong>Portabilitate:</strong> Perfect pentru utilizare la muncă, în călătorii sau oriunde ai nevoie de alinarea congestiei.
                </div>
              </div>
            </div>
            <br/>
            <div className="recipe-benefits">
              <h4>🌟 Beneficii</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">🦠</span>
                  <span>Proprietăți antiseptice</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🫁</span>
                  <span>Curăță sinusurile</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>Susține imunitatea</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💨</span>
                  <span>Îmbunătățește respirația</span>
                </div>
              </div>
            </div>
      
            <div className="recipe-actions">
              <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
              </button>
              <div className="total-cost">
                <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
              </div>
            </div>
      
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      const EssOilRecipe_ColdSores_RO = ({ onAddToCart }) => {
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
            name: 'Ulei esențial de lămâie',
            amount: 2,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Lămâie (10ml)',
              price: 18.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'manuka-oil',
            name: 'Ulei esențial de manuka',
            amount: 1,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Manuka (5ml)',
              price: 42.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'carrier-oil',
            name: 'Ulei purtător',
            amount: 1,
            unit: 'tsp',
            type: 'volume',
            shopItem: {
              name: 'Amestec Uleiuri Purtătoare',
              price: 18.50,
              category: 'uleiuri-purtatoare'
            }
          },
          {
            id: 'cotton-swabs',
            name: 'Bețișoare de vată',
            amount: 5,
            unit: 'pieces',
            type: 'item',
            shopItem: {
              name: 'Bețișoare de Vată Sterile (pachet de 100)',
              price: 4.99,
              category: 'echipament'
            }
          }
        ];
      
        const getDisplayAmount = (ingredient) => {
          if (ingredient.type === 'drops' || ingredient.type === 'item') {
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
            return 'picături';
          }
          if (ingredient.type === 'item') {
            return ingredient.unit === 'pieces' ? 'bucăți' : 'bucată';
          }
          
          if (measurementSystem === 'metric') {
            return 'ml';
          }
          return ingredient.unit === 'tsp' ? 'lgţ' : ingredient.unit;
        };
      
        const handleAddAllToCart = () => {
          const cartItems = ingredients.map(ingredient => ({
            id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
            name: ingredient.shopItem.name,
            price: ingredient.shopItem.price,
            quantity: 1,
            category: ingredient.shopItem.category,
            addedFrom: 'Rețeta Amestecului pentru Afete'
          }));
          
          if (onAddToCart) {
            onAddToCart(cartItems);
          } else {
            console.log('Adăugare în coș:', cartItems);
            alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
          }
        };
      
        return (
          <CollapsibleRecipe
            title="Amestec pentru Alinarea Afetelor"
            icon="💋"
            difficulty="Ușor"
            time="2 minute"
            yield="Tratament unic"
            description="Un amestec antiviral țintit folosind uleiuri esențiale de lămâie și manuka pentru a trata afetele. Această combinație puternică oferă proprietăți antivirale și antibacteriene pentru a accelera vindecarea și a reduce disconfortul cauzat de afete."
          >
            <div className="measurement-toggle">
              <label className="toggle-label">Sistem de Măsură:</label>
              <div className="toggle-buttons">
                <button 
                  className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('imperial')}
                >
                  Imperial (lgţ, picături)
                </button>
                <button 
                  className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('metric')}
                >
                  Metric (ml, picături)
                </button>
              </div>
            </div>
            <br/>
            <div className="recipe-ingredients">
              <h4>🧪 Ingrediente și Echipament</h4>
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
              <h4>📋 Instrucțiuni</h4>
              <ul className="instructions-list">
                <li>Într-un bol mic, toarnă uleiul purtător.</li>
                <li>Adaugă 2 picături de ulei esențial de lămâie în uleiul purtător.</li>
                <li>Adaugă 1 picătură de ulei esențial de manuka în amestec.</li>
                <li>Amestecă ușor cu un bețișor de vată curat pentru a combina uleiurile.</li>
                <li>Folosind un bețișor de vată proaspăt, aplică o cantitate mică de amestec direct pe afetă.</li>
                <li>Aplică ușor, evitând să freci sau să iritezi zona.</li>
                <li>Repetă aplicarea la fiecare 2-3 ore pe măsură ce este necesar.</li>
                <li>Folosește un bețișor de vată proaspăt pentru fiecare aplicare pentru a preveni contaminarea.</li>
              </ul>
            </div>
            <br/>
            <div className="recipe-usage">
              <h4>💡 Utilizare și Depozitare</h4>
              <div className="usage-info">
                <div className="usage-item">
                  <strong>Aplicare:</strong> Aplică direct pe afetă la fiecare 2-3 ore pentru vindecarea optimă.
                </div>
                <div className="usage-item">
                  <strong>Igienă:</strong> Folosește întotdeauna un bețișor de vată proaspăt pentru a preveni răspândirea infecției.
                </div>
                <div className="usage-item">
                  <strong>Moment optim:</strong> Aplică la primele semne de afetă pentru rezultate cele mai eficiente.
                </div>
                <div className="usage-item">
                  <strong>Depozitare:</strong> Amestecă proaspăt pentru fiecare aplicare. Nu păstra pre-amestecat.
                </div>
              </div>
            </div>
            <br/>
            <div className="recipe-benefits">
              <h4>🌟 Beneficii</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">🦠</span>
                  <span>Proprietăți antivirale</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Accelerează vindecarea</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">😌</span>
                  <span>Reduce disconfortul</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>Previne infecțiile secundare</span>
                </div>
              </div>
            </div>
      
            <div className="recipe-actions">
              <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
              </button>
              <div className="total-cost">
                <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
              </div>
            </div>
      
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      // Componenta principală care exportă toate rețetele
      const EssentialOilHealingRecipes_RO = ({ onAddToCart }) => {
        return (
          <div className="essential-oil-recipes-container">
            <div className="recipes-header">
              <h2>🌿 Rețete de Vindecare cu Uleiuri Esențiale</h2>
              <p className="recipes-intro">
                Descoperă puterea vindecătoare a uleiurilor esențiale cu aceste rețete naturale și eficiente.
                Fiecare rețetă a fost selectată cu grijă pentru proprietățile sale terapeutice și ușurința de preparare.
              </p>
            </div>
            
            <div className="recipes-grid">
              <EssOilRecipe_Burn_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_BeeStings_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_MusclePain_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_Sprains_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_Nausea_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_ChestCongestion_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_Headaches_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_JetLagHangover_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_ColdFluInhaler_RO onAddToCart={onAddToCart} />
              <EssOilRecipe_ColdSores_RO onAddToCart={onAddToCart} />
            </div>
            
            <div className="recipes-footer">
              <div className="safety-notice">
                <h3>⚠️ Precauții Importante</h3>
                <ul>
                  <li>Testează întotdeauna uleiurile esențiale pe o suprafață mică de piele înainte de utilizare.</li>
                  <li>Nu aplica uleiurile esențiale direct pe piele fără diluare cu un ulei purtător.</li>
                  <li>Consultă un profesionist medical înainte de a folosi uleiurile esențiale dacă ești gravidă, alăptezi sau ai probleme de sănătate.</li>
                  <li>Ține toate uleiurile esențiale departe de copii și animale de companie.</li>
                  <li>În cazul reacțiilor adverse, încetează imediat utilizarea și consultă un medic.</li>
                </ul>
              </div>
              
              <div className="disclaimer">
                <p>
                  <strong>Notă:</strong> Aceste rețete sunt doar în scop informativ și nu înlocuiesc sfaturile medicale profesionale. 
                  Consultă întotdeauna un furnizor de servicii medicale pentru probleme grave de sănătate.
                </p>
              </div>
            </div>
          </div>
        );
      };

      const EssOilRecipe_PineColdFlu_RO = ({ onAddToCart }) => {
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
            name: 'Ulei esențial de pin',
            amount: 4,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Pin (10ml)',
              price: 21.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'eucalyptus-oil',
            name: 'Ulei esențial de eucalipt',
            amount: 3,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Eucalipt (10ml)',
              price: 19.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'bay-laurel-oil',
            name: 'Ulei esențial de dafin',
            amount: 3,
            unit: 'drops',
            type: 'drops',
            shopItem: {
              name: 'Ulei Esențial de Dafin (5ml)',
              price: 34.99,
              category: 'uleiuri-esentiale'
            }
          },
          {
            id: 'inhaler-blank',
            name: 'Tub inhalator gol',
            amount: 1,
            unit: 'piece',
            type: 'item',
            shopItem: {
              name: 'Tuburi Inhalatoare Goale (set de 5)',
              price: 12.99,
              category: 'recipiente'
            }
          }
        ];
      
        const getDisplayAmount = (ingredient) => {
          return ingredient.amount;
        };
      
        const getDisplayUnit = (ingredient) => {
          if (ingredient.type === 'drops') {
            return 'picături';
          }
          return ingredient.unit === 'piece' ? 'bucată' : ingredient.unit;
        };
      
        const handleAddAllToCart = () => {
          const cartItems = ingredients.map(ingredient => ({
            id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
            name: ingredient.shopItem.name,
            price: ingredient.shopItem.price,
            quantity: 1,
            category: ingredient.shopItem.category,
            addedFrom: 'Rețeta Inhalatorului cu Pin pentru Răceală și Gripă'
          }));
          
          if (onAddToCart) {
            onAddToCart(cartItems);
          } else {
            console.log('Adăugare în coș:', cartItems);
            alert('Articolele ar fi adăugate în coș: ' + cartItems.map(item => item.name).join(', '));
          }
        };
      
        return (
          <CollapsibleRecipe
            title="Inhalator cu Pin pentru Alinarea Răcelii și Gripei"
            icon="🌲"
            difficulty="Ușor"
            time="3 minute"
            yield="Inhalator portabil"
            description="Un inhalator antiseptic puternic care folosește uleiuri esențiale de pin, eucalipt și dafin pentru alinarea eficientă a sinusurilor în sezonul de răceală și gripă. Această combinație oferă proprietăți antibacteriene și antivirale naturale pentru a ajuta la curățarea congestiei respiratorii și la susținerea sistemului imunitar."
          >
            <div className="measurement-toggle">
              <label className="toggle-label">Sistem de Măsură:</label>
              <div className="toggle-buttons">
                <button 
                  className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('imperial')}
                >
                  Imperial (picături)
                </button>
                <button 
                  className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
                  onClick={() => setMeasurementSystem('metric')}
                >
                  Metric (picături)
                </button>
              </div>
            </div>
            <br/>
            <div className="recipe-ingredients">
              <h4>🧪 Ingrediente</h4>
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
              <h4>📋 Instrucțiuni</h4>
              <ul className="instructions-list">
                <li>Scoate cu grijă fitilul de bumbac din tubul inhalator gol.</li>
                <li>Adaugă 4 picături de ulei esențial de pin direct pe fitilul de bumbac.</li>
                <li>Adaugă 3 picături de ulei esențial de eucalipt pe același fitil de bumbac.</li>
                <li>Adaugă 3 picături de ulei esențial de dafin pentru a completa amestecul antiseptic.</li>
                <li>Introdu fitilul de bumbac saturat înapoi în tubul inhalator, asigurându-te că se potrivește corespunzător.</li>
                <li>Fixează capacul ferm pe inhalator pentru a preveni evaporarea uleiurilor.</li>
                <li>Etichetează inhalatorul cu conținutul și data preparării pentru referință viitoare.</li>
                <li>Pentru utilizare: Scoate capacul și inhalează adânc și lent prin nări la fiecare 1-2 ore după necesitate.</li>
                <li>Respiră în mod conștient și controlat pentru a maximiza beneficiile terapeutice.</li>
              </ul>
            </div>
            <br/>
            <div className="recipe-usage">
              <h4>💡 Utilizare și Depozitare</h4>
              <div className="usage-info">
                <div className="usage-item">
                  <strong>Aplicare optimă:</strong> Inhalează adânc la fiecare 1-2 ore în timpul bolii pentru alinarea maximă a sinusurilor și congestiei.
                </div>
                <div className="usage-item">
                  <strong>Depozitare:</strong> Păstrează într-un loc răcoros și uscat, departe de lumina directă. Va rămâne eficient timp de 6-8 luni.
                </div>
                <div className="usage-item">
                  <strong>Sezon de utilizare:</strong> Cel mai benefic în timpul sezonului de răceală și gripă (toamna și iarna) pentru prevenție și tratament.
                </div>
                <div className="usage-item">
                  <strong>Portabilitate:</strong> Ideal pentru utilizare la birou, în școală, în călătorii sau oriunde ai nevoie de alinarea rapidă a congestiei.
                </div>
                <div className="usage-item">
                  <strong>Prevensie:</strong> Poate fi folosit proactiv în spații aglomerate pentru a susține sistemul imunitar.
                </div>
              </div>
            </div>
            <br/>
            <div className="recipe-benefits">
              <h4>🌟 Beneficii</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">🦠</span>
                  <span>Puternice proprietăți antiseptice</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🫁</span>
                  <span>Curăță și deschide sinusurile</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>Susține și întărește imunitatea</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💨</span>
                  <span>Îmbunătățește respirația liberă</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🌲</span>
                  <span>Efect răcoritor și revigorant</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Acțiune rapidă și eficientă</span>
                </div>
              </div>
            </div>
      
            <div className="recipe-actions">
              <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
                🛒 Adaugă Toate Ingredientele în Coșul de Cumpărături
              </button>
              <div className="total-cost">
                <span>Cost Total: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
              </div>
            </div>
      
            <div className="recipe-scientific-note">
              <h4>🔬 Notă Științifică</h4>
              <p className="scientific-text">
                <strong>Pinul</strong> conține compuși monoterpenici cu proprietăți expectorante și antibacteriene. 
                <strong>Eucaliptul</strong> este bogat în eucaliptol (cineol), cunoscut pentru efectele sale decongestive și antimicrobiene. 
                <strong>Dafinul</strong> oferă compuși antivirali și anti-inflamatori care susțin vindecarea respiratorie naturală.
              </p>
            </div>
      
            <div className="recipe-reference">
              <h4>📚 Sursă</h4>
              <p className="reference-text">
                Rețetă adaptată din: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
              </p>
            </div>
          </CollapsibleRecipe>
        );
      };
      
      // Update the exports section:
      export default EssentialOilHealingRecipes_RO;
      export {
        EssOilRecipe_Burn_RO,
        EssOilRecipe_BeeStings_RO,
        EssOilRecipe_MusclePain_RO,
        EssOilRecipe_Sprains_RO,
        EssOilRecipe_Nausea_RO,
        EssOilRecipe_ChestCongestion_RO,
        EssOilRecipe_Headache_RO,
        EssOilRecipe_JetLagHangover_RO,
        EssOilRecipe_ColdFluInhaler_RO,
        EssOilRecipe_PineColdFlu_RO,
        EssOilRecipe_ColdSores_RO,
        CollapsibleRecipe,
        MeasurementContext,
        convertVolume,
        convertWeight,
        roundToNearestFive
      };
      
      