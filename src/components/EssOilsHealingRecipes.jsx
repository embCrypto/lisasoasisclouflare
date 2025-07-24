import React, { useState, useContext, createContext, useEffect } from 'react';
import { useCountry } from '../contexts/CountryContext';

// Create a context for measurement units
const MeasurementContext = createContext();

// Utility function to round to nearest number divisible by 5
const roundToNearestFive = (num) => {
  return Math.round(num / 5) * 5;
};

// Conversion utilities
const convertVolume = (amount, fromUnit, toUnit) => {
  // Convert everything to ml first, then to target unit
  let mlAmount;
  
  if (fromUnit === 'oz') {
    mlAmount = roundToNearestFive(amount * 29.5735); // 1 fl oz = 29.5735 ml 
  } else if (fromUnit === 'tbsp') {
    mlAmount = roundToNearestFive(amount * 14.7868); // 1 tbsp = 14.7868 ml
  } else if (fromUnit === 'tsp') {
    mlAmount = roundToNearestFive(amount * 4.92892); // 1 tsp = 4.92892 ml
  } else {
    mlAmount = amount; // already in ml
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
  // Convert everything to grams first, then to target unit
  let gramAmount;
  
  if (fromUnit === 'oz') {
    gramAmount = roundToNearestFive(amount * 28.3495); // 1 oz = 28.3495 g
  } else {
    gramAmount = amount; // already in grams
  }
  
  if (toUnit === 'oz') {
    return Math.round((gramAmount / 28.3495) * 100) / 100;
  } else {
    return roundToNearestFive(gramAmount); // grams
  }
};

// Collapsible Recipe Component
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
          {isExpanded ? '🔼 Hide Recipe Details' : '🔽 Show Recipe Details'}
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

const EssOilRecipe_Burn_EN = ({ onAddToCart }) => {
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
      name: 'Beeswax (grated or shaved)',
      amount: 0.5,
      unit: 'oz',
      type: 'weight',
      shopItem: {
        name: 'Organic Beeswax',
        price: 12.99,
        category: 'base-ingredients'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Carrier oil or blend',
      amount: 6,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Carrier Oil Blend',
        price: 18.50,
        category: 'carrier-oils'
      }
    },
    {
      id: 'lavender-oil',
      name: 'Lavender essential oil',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
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
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Lavender Burn Ointment Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Lavender Burn Ointment"
      icon="🔥"
      difficulty="Easy"
      time="15 minutes"
      yield="Makes ~2 oz"
      description="A soothing, healing ointment perfect for treating burns, cuts, and skin irritations. This recipe combines the regenerative properties of lavender with the protective benefits of beeswax. The salve can also be used for cuts and to soothe the inflammation of skin disorders such as psoriasis, eczema, and dermatitis. It is also effective for healing boils and bruises."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (oz, tbsp, tsp)
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
        <h4>🧪 Ingredients</h4>
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
        <h4>📋 Instructions</h4>
        <ol className="instructions-list">
          <li>Place the beeswax and carrier oil in a jar and set the jar in a saucepan of water.</li>
          <li>Warm the mixture over low heat, stirring gently until the beeswax completely melts.</li>
          <li>Remove the jar from heat and allow the mixture to cool to room temperature.</li>
          <li>Once cooled, add the lavender essential oil and stir well to combine.</li>
          <li>Adjust the consistency if necessary by adding more carrier oil (for softer texture) or beeswax (for firmer texture).</li>
          <li>Let the mixture cool completely before transferring to storage containers.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Apply a small amount directly to burns, cuts, or irritated skin as needed.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Store in a cool, dry place. Will keep for up to 12 months.
          </div>
          <div className="usage-item">
            <strong>Patch Test:</strong> Always test on a small area first, especially if you have sensitive skin.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Promotes healing</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Reduces pain</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <span>Prevents scarring</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natural ingredients</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_BeeStings_EN = ({ onAddToCart }) => {
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
      name: 'Lavender essential oil',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Eucalyptus (blue) essential oil',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Eucalyptus Blue Essential Oil (10ml)',
        price: 22.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Carrier oil',
      amount: 1,
      unit: 'tsp',
      type: 'volume',
      shopItem: {
        name: 'Carrier Oil Blend',
        price: 18.50,
        category: 'carrier-oils'
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
      return 'drops';
    }
    
    if (measurementSystem === 'metric') {
      return 'ml';
    }
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Bee Sting Relief Blend Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Bee Sting Relief Blend"
      icon="🐝"
      difficulty="Easy"
      time="2 minutes"
      yield="Single application"
      description="A fast-acting blend designed to provide immediate relief from bee stings. This combination of lavender and eucalyptus (blue) essential oils helps reduce pain, swelling, and inflammation while promoting healing."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (tsp, drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients</h4>
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
        <h4>📋 Instructions</h4>
        <ol className="instructions-list">
          <li>Pour the carrier oil into a small bowl or the palm of your clean hand.</li>
          <li>Add the lavender essential oil drops to the carrier oil.</li>
          <li>Add the eucalyptus (blue) essential oil drops to the mixture.</li>
          <li>Mix gently with your finger or a small spoon to combine all ingredients.</li>
          <li>Apply immediately to the bee sting area using a cotton swab or clean finger.</li>
          <li>Reapply every 15-20 minutes as needed for pain and swelling relief.</li>
        </ol>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Apply directly to bee sting immediately after cleaning the area. Remove stinger first if visible.
          </div>
          <div className="usage-item">
            <strong>Emergency Note:</strong> Seek immediate medical attention if experiencing allergic reactions like difficulty breathing or widespread swelling.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Mix fresh for each application. Do not store pre-mixed for this recipe.
          </div>
          <div className="usage-item">
            <strong>Frequency:</strong> Apply every 15-20 minutes for the first hour, then as needed.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Reduces pain</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">❄️</span>
            <span>Cooling effect</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Anti-inflammatory</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Fast-acting relief</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_MusclePain_EN = ({ onAddToCart }) => {
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
      name: 'Lavender essential oil',
      amount: 10,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'chamomile-oil',
      name: 'Chamomile (German) essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'German Chamomile Essential Oil (5ml)',
        price: 32.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'coriander-oil',
      name: 'Coriander essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Coriander Essential Oil (10ml)',
        price: 19.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Carrier oil',
      amount: 4,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Carrier Oil Blend',
        price: 18.50,
        category: 'carrier-oils'
      }
    },
    {
      id: 'epsom-salt',
      name: 'Epsom salt',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Pure Epsom Salt (2 lbs)',
        price: 8.99,
        category: 'base-ingredients'
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
      return 'drops';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Muscle Pain Bath Salts Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Muscle Pain & Stiff Joints Bath Salts"
      icon="💪"
      difficulty="Easy"
      time="5 minutes"
      yield="2-3 baths"
      description="Healing bath salts that combine lavender's analgesic properties with chamomile and coriander to effectively relieve muscle pain and stiff joints. Perfect for post-workout recovery or chronic pain relief through relaxing therapeutic baths."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (cups, tbsp, drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>In a small bowl, combine the lavender, German chamomile, and coriander essential oils.</li>
          <li>Add the carrier oil to the essential oil mixture and stir well to combine.</li>
          <li>In a larger bowl, pour the Epsom salt.</li>
          <li>Add the essential oil and carrier oil mixture to the Epsom salt.</li>
          <li>Mix thoroughly with a spoon until the oils are evenly distributed throughout the salt.</li>
          <li>Store in an airtight container until ready to use.</li>
          <li>To use: Add 1/2 to 2/3 cup of the bath salt mixture to a warm bath and soak for 15-20 minutes.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Add 1/2 to 2/3 cup to a warm bath. Soak for 15-20 minutes for maximum benefit.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Store in an airtight container in a cool, dry place. Will keep for up to 6 months.
          </div>
          <div className="usage-item">
            <strong>Frequency:</strong> Use 2-3 times per week or as needed for muscle pain relief.
          </div>
          <div className="usage-item">
            <strong>Caution:</strong> Test water temperature before entering. Do not use on broken or severely irritated skin.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Relieves muscle pain</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🦴</span>
            <span>Eases joint stiffness</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Promotes relaxation</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Anti-inflammatory</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Sprains_EN = ({ onAddToCart }) => {
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
      name: 'Lavender essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'rosemary-oil',
      name: 'Rosemary essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Rosemary Essential Oil (10ml)',
        price: 18.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Carrier oil',
      amount: 1,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Carrier Oil Blend',
        price: 18.50,
        category: 'carrier-oils'
      }
    },
    {
      id: 'water',
      name: 'Warm water',
      amount: 1,
      unit: 'quart',
      type: 'volume',
      shopItem: {
        name: 'Distilled Water (1 gallon)',
        price: 2.99,
        category: 'base-ingredients'
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
      return 'drops';
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'quart') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Sprains & Strains Compress Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Sprains & Strains Compress"
      icon="🤕"
      difficulty="Easy"
      time="3 minutes"
      yield="Single treatment"
      description="A therapeutic compress using lavender and rosemary essential oils to treat sprains and strains. This combination helps reduce inflammation, promotes healing, and provides analgesic relief for injured muscles and ligaments."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (quart, tbsp, drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>In a small bowl, combine the lavender and rosemary essential oils.</li>
          <li>Add the carrier oil to the essential oils and mix well.</li>
          <li>Pour the warm water into a larger bowl or basin.</li>
          <li>Add the essential oil mixture to the warm water and stir gently.</li>
          <li>Soak a clean cloth or compress pad in the solution.</li>
          <li>Wring out excess water and apply the compress to the affected area.</li>
          <li>Leave on for 10-15 minutes. Reapply as needed, up to 3 times daily.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Apply compress to sprains and strains for 10-15 minutes at a time.
          </div>
          <div className="usage-item">
            <strong>Temperature:</strong> Use warm (not hot) water to avoid further tissue damage.
          </div>
          <div className="usage-item">
            <strong>Frequency:</strong> Apply up to 3 times daily until healing improves.
          </div>
          <div className="usage-item">
            <strong>When to seek help:</strong> If severe pain persists or worsens, consult a healthcare professional.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Promotes healing</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <span>Reduces inflammation</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Pain relief</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <span>Muscle recovery</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Nausea_EN = ({ onAddToCart }) => {
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
      name: 'Lavender essential oil',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'peppermint-oil',
      name: 'Peppermint essential oil',
      amount: 5,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Peppermint Essential Oil (10ml)',
        price: 16.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'inhaler-blank',
      name: 'Blank inhaler tube',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Blank Inhaler Tubes (5-pack)',
        price: 12.99,
        category: 'containers'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Nausea Relief Inhaler Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Nausea Relief Inhaler"
      icon="🤢"
      difficulty="Easy"
      time="2 minutes"
      yield="Portable inhaler"
      description="A convenient, portable inhaler using lavender and peppermint essential oils to quickly relieve nausea. Perfect for motion sickness, morning sickness, or general stomach upset."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Remove the cotton wick from the blank inhaler tube.</li>
          <li>Add 5 drops of lavender essential oil directly to the cotton wick.</li>
          <li>Add 5 drops of peppermint essential oil to the same cotton wick.</li>
          <li>Insert the saturated cotton wick back into the inhaler tube.</li>
          <li>Secure the cap tightly on the inhaler.</li>
          <li>Label the inhaler with the contents and date.</li>
          <li>To use: Remove cap and inhale deeply through nostrils as needed.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Inhale deeply through nostrils when nausea occurs. Can be used every few minutes as needed.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Store in a cool, dry place. Will remain effective for 6-8 months.
          </div>
          <div className="usage-item">
            <strong>Portability:</strong> Perfect for travel, pregnancy, or anywhere quick nausea relief is needed.
          </div>
          <div className="usage-item">
            <strong>Safety:</strong> Avoid direct contact with skin. Keep away from eyes and mucous membranes.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🤢</span>
            <span>Relieves nausea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Fast-acting</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎒</span>
            <span>Portable relief</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natural remedy</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_ChestCongestion_EN = ({ onAddToCart }) => {
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
      name: 'Lemon essential oil',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lemon Essential Oil (10ml)',
        price: 18.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Eucalyptus (blue) essential oil',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Eucalyptus Blue Essential Oil (10ml)',
        price: 22.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'cypress-oil',
      name: 'Cypress essential oil',
      amount: 1,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Cypress Essential Oil (10ml)',
        price: 26.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'hot-water',
      name: 'Hot water',
      amount: 2,
      unit: 'cups',
      type: 'volume',
      shopItem: {
        name: 'Distilled Water (1 gallon)',
        price: 2.99,
        category: 'base-ingredients'
      }
    },
    {
      id: 'large-bowl',
      name: 'Large heat-safe bowl',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Glass Mixing Bowl (Large)',
        price: 15.99,
        category: 'equipment'
      }
    },
    {
      id: 'towel',
      name: 'Large towel',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Bath Towel (Cotton)',
        price: 12.99,
        category: 'equipment'
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
      return 'drops';
    }
    if (ingredient.type === 'item') {
      return ingredient.unit;
    }
    
    if (measurementSystem === 'metric') {
      if (ingredient.unit === 'cups') {
        return 'ml';
      }
      return 'ml';
    }
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Chest Congestion Steam Inhalation Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Chest Congestion Steam Inhalation"
      icon="🫁"
      difficulty="Easy"
      time="5 minutes"
      yield="Single treatment"
      description="A powerful steam inhalation blend to relieve chest congestion from colds and coughs. This combination of lemon, eucalyptus (blue), and cypress essential oils helps clear respiratory passages and ease breathing naturally."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (cups, drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients & Equipment</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Fill a large heat-safe bowl with 2 cups of very hot (not boiling) water.</li>
          <li>Add 4 drops of lemon essential oil to the hot water.</li>
          <li>Add 2 drops of eucalyptus (blue) essential oil to the water.</li>
          <li>Add 1 drop of cypress essential oil to complete the blend.</li>
          <li>Stir the water gently to disperse the oils.</li>
          <li>Position your face about 8-10 inches above the bowl.</li>
          <li>Drape a large towel over your head and the bowl to create a tent.</li>
          <li>Close your eyes and breathe deeply through your nose and mouth for 5-10 minutes.</li>
          <li>Take breaks if the steam becomes too intense.</li>
          <li>Repeat 2-3 times daily as needed for congestion relief.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Use 2-3 times daily during periods of chest congestion.
          </div>
          <div className="usage-item">
            <strong>Safety:</strong> Keep eyes closed during inhalation. Water should be hot but not boiling to avoid burns.
          </div>
          <div className="usage-item">
            <strong>Duration:</strong> Inhale for 5-10 minutes per session, taking breaks as needed.
          </div>
          <div className="usage-item">
            <strong>Distance:</strong> Keep face 8-10 inches away from water surface to prevent irritation.
          </div>
          <div className="usage-item">
            <strong>When to avoid:</strong> Do not use if you have asthma or respiratory sensitivities without consulting a healthcare provider.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🫁</span>
            <span>Clears chest congestion</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💨</span>
            <span>Eases breathing</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🦠</span>
            <span>Antimicrobial properties</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natural decongestant</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_ColdSores_EN = ({ onAddToCart }) => {
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
      name: 'Lemon essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lemon Essential Oil (10ml)',
        price: 18.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'manuka-oil',
      name: 'Manuka essential oil',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Manuka Essential Oil (5ml)',
        price: 45.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'carrier-oil',
      name: 'Carrier oil',
      amount: 1,
      unit: 'tbsp',
      type: 'volume',
      shopItem: {
        name: 'Carrier Oil Blend',
        price: 18.50,
        category: 'carrier-oils'
      }
    },
    {
      id: 'cotton-swabs',
      name: 'Cotton swabs or cotton pads',
      amount: 1,
      unit: 'pack',
      type: 'item',
      shopItem: {
        name: 'Cotton Swabs (100-pack)',
        price: 6.99,
        category: 'equipment'
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
    if (ingredient.type === 'drops' || ingredient.type === 'item') {
      return ingredient.unit;
    }
    
    if (measurementSystem === 'metric') {
      return 'ml';
    }
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Cold Sores Relief Blend Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Cold Sores Relief Blend"
      icon="🦠"
      difficulty="Easy"
      time="2 minutes"
      yield="Single application"
      description="A potent antiviral blend specifically formulated to ease cold sores. The combination of lemon and manuka essential oils provides powerful antimicrobial properties while promoting healing and reducing discomfort."
    >
      <div className="measurement-toggle">
        <label className="toggle-label">Measurement System:</label>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('imperial')}
          >
            Imperial (tbsp, drops)
          </button>
          <button 
            className={`toggle-btn ${measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => setMeasurementSystem('metric')}
          >
            Metric (ml, drops)
          </button>
        </div>
      </div>
      <br/>
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients & Equipment</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Pour 1 tablespoon of carrier oil into a small, clean bowl or dish.</li>
          <li>Add 3 drops of lemon essential oil to the carrier oil.</li>
          <li>Add 2 drops of manuka essential oil to the mixture.</li>
          <li>Stir gently with a clean cotton swab to combine all ingredients.</li>
          <li>Using a fresh cotton swab, dab a small amount of the blend directly onto the cold sore.</li>
          <li>Apply gently without rubbing, allowing the oils to absorb naturally.</li>
          <li>Dispose of the cotton swab after each use to prevent contamination.</li>
          <li>Reapply 2-3 times daily until the cold sore heals.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Apply directly to cold sore using a fresh cotton swab 2-3 times daily.
          </div>
          <div className="usage-item">
            <strong>Timing:</strong> Best results when applied at first sign of tingling or outbreak.
          </div>
          <div className="usage-item">
            <strong>Hygiene:</strong> Always use a fresh cotton swab for each application to prevent spreading the virus.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Mix fresh for each use. Do not store pre-mixed blend to maintain potency.
          </div>
          <div className="usage-item">
            <strong>Patch Test:</strong> Test on a small area of skin first, especially if you have sensitive skin.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🦠</span>
            <span>Antiviral properties</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🩹</span>
            <span>Promotes healing</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Reduces discomfort</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Fast-acting relief</span>
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
        <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Important Safety Notes</h4>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
          <li>Cold sores are highly contagious. Avoid touching the area and wash hands thoroughly after application.</li>
          <li>Do not share towels, utensils, or personal items while experiencing an outbreak.</li>
          <li>If cold sores persist, worsen, or occur frequently, consult a healthcare professional.</li>
          <li>Manuka oil is potent - never use undiluted on skin.</li>
          <li>Avoid contact with eyes and mucous membranes.</li>
        </ul>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_Headache_EN = ({ onAddToCart }) => {
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
      name: 'Lemon essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lemon Essential Oil (10ml)',
        price: 18.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'lavender-oil',
      name: 'Lavender essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lavender Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'peppermint-oil',
      name: 'Peppermint essential oil',
      amount: 3,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Peppermint Essential Oil (10ml)',
        price: 16.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'diffuser',
      name: 'Essential oil diffuser',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Ultrasonic Essential Oil Diffuser',
        price: 39.99,
        category: 'equipment'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Headache Relief Diffuser Blend Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Headache Relief Diffuser Blend"
      icon="🤕"
      difficulty="Easy"
      time="2 minutes"
      yield="Room diffusion"
      description="A balanced diffuser blend using equal amounts of lemon, lavender, and peppermint essential oils to naturally relieve headaches. This trio provides mental clarity, relaxation, and cooling relief for tension headaches and stress-related pain."
    >
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients & Equipment</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Fill your diffuser with water according to manufacturer's instructions.</li>
          <li>Add 3 drops of lemon essential oil to the water.</li>
          <li>Add 3 drops of lavender essential oil to the water.</li>
          <li>Add 3 drops of peppermint essential oil to complete the blend.</li>
          <li>Turn on your diffuser and let it run for 15-30 minutes.</li>
          <li>Sit or lie down in a comfortable position while breathing the aromatherapy blend.</li>
          <li>Repeat as needed for headache relief.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🧠</span>
            <span>Mental clarity</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😌</span>
            <span>Tension relief</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">❄️</span>
            <span>Cooling effect</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌿</span>
            <span>Natural relief</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_JetLagHangover_EN = ({ onAddToCart }) => {
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
      name: 'Lemon essential oil',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Lemon Essential Oil (10ml)',
        price: 18.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'ginger-oil',
      name: 'Ginger essential oil',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Ginger Essential Oil (10ml)',
        price: 24.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'diffuser',
      name: 'Essential oil diffuser',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Ultrasonic Essential Oil Diffuser',
        price: 39.99,
        category: 'equipment'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Jet Lag & Hangover Relief Blend Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Jet Lag & Hangover Relief Blend"
      icon="✈️"
      difficulty="Easy"
      time="2 minutes"
      yield="Room diffusion"
      description="An energizing diffuser blend using equal amounts of lemon and ginger essential oils to alleviate jet lag and hangover symptoms. This combination helps restore mental clarity, reduce nausea, and boost energy levels naturally."
    >
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients & Equipment</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Fill your diffuser with water according to manufacturer's instructions.</li>
          <li>Add 4 drops of lemon essential oil to the water.</li>
          <li>Add 4 drops of ginger essential oil to the water.</li>
          <li>Turn on your diffuser and let it run for 30-60 minutes.</li>
          <li>Relax in the room while breathing the energizing aromatherapy blend.</li>
          <li>For jet lag: Use in the morning to help reset circadian rhythms.</li>
          <li>For hangover: Use throughout the day as needed for symptom relief.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Jet Lag:</strong> Use in the morning upon waking to help reset your internal clock and boost alertness.
          </div>
          <div className="usage-item">
            <strong>Hangover:</strong> Use throughout the day to combat nausea, fatigue, and mental fog.
          </div>
          <div className="usage-item">
            <strong>Duration:</strong> Run diffuser for 30-60 minutes per session. Repeat every 2-3 hours as needed.
          </div>
          <div className="usage-item">
            <strong>Hydration:</strong> Remember to drink plenty of water alongside aromatherapy for best results.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Boosts energy</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🧠</span>
            <span>Mental clarity</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🤢</span>
            <span>Reduces nausea</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌅</span>
            <span>Circadian support</span>
          </div>
        </div>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

const EssOilRecipe_PineColdFlu_EN = ({ onAddToCart }) => {
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
      name: 'Pine essential oil',
      amount: 6,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Pine Essential Oil (10ml)',
        price: 22.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'eucalyptus-oil',
      name: 'Eucalyptus (blue) essential oil',
      amount: 4,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Eucalyptus Blue Essential Oil (10ml)',
        price: 22.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'bay-laurel-oil',
      name: 'Bay Laurel essential oil',
      amount: 2,
      unit: 'drops',
      type: 'drops',
      shopItem: {
        name: 'Bay Laurel Essential Oil (5ml)',
        price: 28.99,
        category: 'essential-oils'
      }
    },
    {
      id: 'inhaler-blank',
      name: 'Blank inhaler tube',
      amount: 1,
      unit: 'piece',
      type: 'item',
      shopItem: {
        name: 'Blank Inhaler Tubes (5-pack)',
        price: 12.99,
        category: 'containers'
      }
    }
  ];

  const getDisplayAmount = (ingredient) => {
    return ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    return ingredient.unit;
  };

  const handleAddAllToCart = () => {
    const cartItems = ingredients.map(ingredient => ({
      id: ingredient.shopItem.name.toLowerCase().replace(/\s+/g, '-'),
      name: ingredient.shopItem.name,
      price: ingredient.shopItem.price,
      quantity: 1,
      category: ingredient.shopItem.category,
      addedFrom: 'Pine Cold & Flu Relief Inhaler Recipe'
    }));
    
    if (onAddToCart) {
      onAddToCart(cartItems);
    } else {
      console.log('Adding to cart:', cartItems);
      alert('Items would be added to cart: ' + cartItems.map(item => item.name).join(', '));
    }
  };

  return (
    <CollapsibleRecipe
      title="Pine Cold & Flu Relief Inhaler"
      icon="🌲"
      difficulty="Easy"
      time="3 minutes"
      yield="Portable inhaler"
      description="A powerful antiseptic and antibacterial inhaler blend perfect for cold and flu season. This combination of pine, eucalyptus (blue), and bay laurel provides portable relief to clear sinuses and support respiratory health on the go."
    >
      <div className="recipe-ingredients">
        <h4>🧪 Ingredients & Equipment</h4>
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
        <h4>📋 Instructions</h4>
        <ul className="instructions-list">
          <li>Remove the cotton wick from the blank inhaler tube.</li>
          <li>Add 6 drops of pine essential oil directly to the cotton wick.</li>
          <li>Add 4 drops of eucalyptus (blue) essential oil to the same cotton wick.</li>
          <li>Add 2 drops of bay laurel essential oil to complete the blend.</li>
          <li>Insert the saturated cotton wick back into the inhaler tube.</li>
          <li>Secure the cap tightly on the inhaler.</li>
          <li>Label the inhaler with contents and date.</li>
          <li>To use: Remove cap and inhale deeply through nostrils to clear sinuses.</li>
        </ul>
      </div>
      <br/>
      <div className="recipe-usage">
        <h4>💡 Usage & Storage</h4>
        <div className="usage-info">
          <div className="usage-item">
            <strong>Application:</strong> Inhale deeply through nostrils when experiencing sinus congestion or cold symptoms.
          </div>
          <div className="usage-item">
            <strong>Frequency:</strong> Use every 2-3 hours during cold and flu season or as needed for congestion relief.
          </div>
          <div className="usage-item">
            <strong>Storage:</strong> Store in a cool, dry place. Will remain effective for 6-8 months.
          </div>
          <div className="usage-item">
            <strong>Portability:</strong> Perfect for travel, work, or anywhere you need quick sinus relief.
          </div>
          <div className="usage-item">
            <strong>Safety:</strong> Avoid direct contact with skin. Keep away from eyes and mucous membranes.
          </div>
        </div>
      </div>
      <br/>
      <div className="recipe-benefits">
        <h4>🌟 Benefits</h4>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🦠</span>
            <span>Antiseptic properties</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🫁</span>
            <span>Clears sinuses</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <span>Immune support</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎒</span>
            <span>Portable relief</span>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'rgba(34, 139, 34, 0.1)', 
        padding: '15px', 
        borderRadius: '10px', 
        border: '1px solid rgba(34, 139, 34, 0.3)',
        marginBottom: '20px'
      }}>
        <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>🌲 Additional Pine Remedies</h4>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
          <li><strong>Chest Rub:</strong> Combine pine with eucalyptus in carrier oil for congestion relief</li>
          <li><strong>Expectorant Steam:</strong> Use equal amounts of pine and lemon in steam inhalation</li>
          <li><strong>Laryngitis Relief:</strong> Steam inhalation with pine and bergamot or frankincense</li>
        </ul>
      </div>

      <div className="recipe-actions">
        <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
          🛒 Add All Ingredients to Shopping Cart
        </button>
        <div className="total-cost">
          <span>Total Cost: ${ingredients.reduce((sum, ing) => sum + ing.shopItem.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <div className="recipe-reference">
        <h4>📚 Source</h4>
        <p className="reference-text">
          Recipe adapted from: Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
        </p>
      </div>
    </CollapsibleRecipe>
  );
};

// Update the exports to include the new Pine recipe
export { 
  EssOilRecipe_Burn_EN, 
  EssOilRecipe_BeeStings_EN, 
  EssOilRecipe_MusclePain_EN, 
  EssOilRecipe_Sprains_EN, 
  EssOilRecipe_Nausea_EN, 
  EssOilRecipe_ChestCongestion_EN, 
  EssOilRecipe_ColdSores_EN, 
  EssOilRecipe_Headache_EN, 
  EssOilRecipe_JetLagHangover_EN,
  EssOilRecipe_PineColdFlu_EN
};