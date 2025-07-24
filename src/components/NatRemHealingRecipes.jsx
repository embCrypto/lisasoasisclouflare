import React, { useState } from 'react';

export const NatRemRecipe_Cold_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Zinc Lozenges (10mg)', price: 12.99, category: 'Supplements' },
        { name: 'Vitamin C (1000mg tablets)', price: 15.49, category: 'Supplements' },
        { name: 'Dried Thyme', price: 4.99, category: 'Herbs' },
        { name: 'Dried Linden Flowers', price: 8.99, category: 'Herbs' },
        { name: 'Dried Elderflower', price: 7.99, category: 'Herbs' },
        { name: 'Propolis Tincture', price: 18.99, category: 'Natural Medicine' },
        { name: 'Red Light Therapy Lamp', price: 89.99, category: 'Equipment' },
        { name: 'Bath Thermometer', price: 12.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🤧 Cold & Infection Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Time-tested natural methods to fight off colds and boost immunity at first signs of infection
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Rising Bath Treatment
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>At first signs of infection:</strong> Start with a bath at 37°C (98.6°F), then gradually add hot water until you reach 39°C (102°F). Don't exceed this temperature.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Alternative:</strong> Foot bath using the same temperature progression if full bath isn't available.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>After bath:</strong> Wrap up warmly and go straight to bed. Rest or sleep immediately for best results.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 High-Dose Zinc & Vitamin C
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Initial dose:</strong> 50-75mg zinc + 1000mg vitamin C at night
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Follow-up:</strong> 10mg zinc lozenges, 6 times daily for several days
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Local mucous membrane contact from lozenges is beneficial. Zinc can shorten cold duration according to Cochrane reviews.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Thyme & Myrtle Bath
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Gentler alternative to rising bath. Safe for children and pregnant women. Add dried thyme and myrtle to warm bath water.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍵 Healing Herbal Tea
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Recipe:</strong> Equal parts linden and elderflower tea, with thyme for coughs
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Drink warm and go to bed immediately after.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍲 Grandma's Chicken Soup
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Also called "Jewish penicillin" - scientifically proven to be delicious, soothing, and healing for cold symptoms.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Propolis Treatment
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Excellent for mouth, throat, and bronchial infections. Strong local antiviral effect, especially effective on cold sores. As effective as lemon balm essential oil.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Red Light Therapy
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    <strong>Absolute favorite remedy!</strong> Apply red light wherever needed: sinuses, chest, back, or ear. Promotes healing and reduces inflammation.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Don't exceed 39°C (102°F) for rising baths</li>
                    <li>High-dose zinc should be temporary - consult healthcare provider for extended use</li>
                    <li>Pregnant women should consult doctor before high-dose supplements</li>
                    <li>Children require adjusted dosages - consult pediatrician</li>
                    <li>If symptoms worsen or persist beyond 7 days, seek medical attention</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Sniffles_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Sea Salt (unrefined)', price: 6.99, category: 'Natural Medicine' },
        { name: 'Angelica Balm (Ingeborg Stadelmann)', price: 24.99, category: 'Natural Medicine' },
        { name: 'Crushed Flaxseed', price: 8.99, category: 'Natural Medicine' },
        { name: 'Red Light Therapy Lamp', price: 89.99, category: 'Equipment' },
        { name: 'Neti Pot (Nasal Irrigation)', price: 15.99, category: 'Equipment' },
        { name: 'Large Mixing Bowl (for steam)', price: 12.99, category: 'Equipment' },
        { name: 'Cotton Towels (2 pack)', price: 19.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🤧 Sniffles & Sinus Congestion Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natural methods to clear nasal congestion and soothe inflamed sinuses
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💨 Classic Steam Bath Treatment
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Setup:</strong> Fill a large bowl with boiling water (or hot herbal tea). Add 2-3 tablespoons of salt.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Treatment:</strong> Lean over the bowl with a towel covering your head and the bowl, creating a steam tent. Breathe deeply for 5-10 minutes.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>After treatment:</strong> Put on a hat or wrap head in a towel turban and go to bed immediately.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Important:</strong> Be careful with hot steam to avoid burns. Keep eyes closed during treatment.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Angelica Balm Application
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Application:</strong> Apply Angelica balm (Ingeborg Stadelmann) directly to nostrils and under the nose area.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    This specialized balm helps open nasal passages and provides soothing relief to irritated mucous membranes.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Red Light Sinus Therapy
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Apply red light directly to sinus areas (forehead, cheeks, bridge of nose) for 10-15 minutes. 
                                    This helps reduce inflammation and relieve sinus pain naturally.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Warm Flaxseed Face Mask
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Make a paste from crushed flaxseed by adding warm water gradually until you achieve a spreadable consistency.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Application:</strong> Apply like a face mask to painful sinus areas (forehead, cheeks, around nose).
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    The warm, moist heat provides very pleasant relief and helps reduce inflammation.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚿 Regular Nasal Irrigation
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>For all nasal problems:</strong> Frequent infections, sinusitis, allergic swelling
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Method:</strong> Use a neti pot with lukewarm salt water (1/4 tsp salt per cup of water). 
                                    Rinse each nostril gently, allowing water to flow through and out the other nostril.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Benefits:</strong> Moistens mucous membranes, removes thick mucus, pollen, and urban dirt, 
                                    helps cilia (tiny hairs) function properly for natural cleaning.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Be careful with steam treatments to avoid burns - test temperature first</li>
                    <li>Use only sterile or distilled water for nasal irrigation</li>
                    <li>Clean neti pot thoroughly after each use</li>
                    <li>If symptoms persist or worsen after 7 days, consult a healthcare provider</li>
                    <li>Stop treatment if you experience any adverse reactions</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_SoreThroat_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Sage Lozenges (natural)', price: 8.99, category: 'Natural Medicine' },
        { name: 'Manuka Honey Lozenges', price: 16.99, category: 'Natural Medicine' },
        { name: 'Propolis Lozenges', price: 12.99, category: 'Natural Medicine' },
        { name: 'Sea Salt (unrefined)', price: 6.99, category: 'Natural Medicine' },
        { name: 'Fresh Quark/Cottage Cheese', price: 4.99, category: 'Natural Medicine' },
        { name: 'Apis Belladonna Globuli (Wala)', price: 24.99, category: 'Homeopathic Medicine' },
        { name: 'Cotton Cloth (for compresses)', price: 9.99, category: 'Equipment' },
        { name: 'Measuring Cup (250ml)', price: 7.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🤒 Sore Throat Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natural methods to soothe irritated throat and reduce inflammation using gentle, effective treatments
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Healing Lozenges for Saliva Stimulation
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why sucking helps:</strong> Sucking stimulates saliva flow, which is exactly what irritated mucous membranes need for healing.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Best options:</strong> Sage lozenges, Manuka honey lozenges, or propolis lozenges - all are mild and soothing.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Usage:</strong> Allow lozenges to dissolve slowly in mouth throughout the day as needed for comfort.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Natural healing:</strong> These lozenges provide gentle, continuous relief while supporting the body's natural healing process.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Salt Water Gargle
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Recipe:</strong> Mix 1 teaspoon of salt into 250ml (1 cup) of warm water
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Method:</strong> Gargle for 30 seconds, then spit out. Repeat 3-4 times per session.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Use 3-4 times daily. The salt water helps reduce swelling and draw out infection naturally.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧀 Quark Compresses (Highly Recommended!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why they work:</strong> Quark compresses are very pleasant and literally draw out all the inflammation from the tissue.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Spread room-temperature quark (cottage cheese) on a cotton cloth, about 1cm thick.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Application:</strong> Place the quark side against the throat, wrap with another cloth to secure.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Leave on for 20-30 minutes or until quark feels warm. Really worth a try - remarkably effective!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Serious Tonsillitis Treatment
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>For severe cases with fever:</strong> Apis Belladonna Globuli velati (Wala)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosage:</strong> Dissolve 5 lozenges in the mouth several times a day
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    This homeopathic remedy specifically targets severe throat inflammation and fever associated with tonsillitis.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 99, 71, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 99, 71, 0.3)', marginTop: '10px' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8B0000' }}>
                                    <strong>Important:</strong> For severe tonsillitis with high fever, consult a healthcare provider promptly as antibiotic treatment may be necessary.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Seek immediate medical attention for high fever, difficulty swallowing, or breathing problems</li>
                    <li>Use only food-grade salt for gargling</li>
                    <li>Replace quark compresses with fresh applications - don't reuse</li>
                    <li>Consult healthcare provider if symptoms persist beyond 5 days</li>
                    <li>For severe tonsillitis, professional medical evaluation is essential</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Constipation_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Whole Wheat Flour (5lb bag)', price: 8.99, category: 'Dietary Fiber' },
        { name: 'Rye Flour (2lb bag)', price: 6.99, category: 'Dietary Fiber' },
        { name: 'Wheat Bran (organic)', price: 7.49, category: 'Dietary Fiber' },
        { name: 'Dried Prunes (1lb)', price: 9.99, category: 'Natural Remedies' },
        { name: 'Dried Apricots (1lb)', price: 12.99, category: 'Natural Remedies' },
        { name: 'Dried Dates (1lb)', price: 11.49, category: 'Natural Remedies' },
        { name: 'Dried Figs (1lb)', price: 13.99, category: 'Natural Remedies' },
        { name: 'Ground Flaxseed (organic)', price: 9.99, category: 'Natural Remedies' },
        { name: 'Psyllium Husks (powder)', price: 16.99, category: 'Natural Remedies' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🚽 Natural Constipation Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Gentle, effective methods to restore healthy bowel function using fiber-rich foods and natural remedies
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Give Your Intestines Something to Do: Increase Fiber
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why fiber works:</strong> Fiber increases volume and boosts intestinal peristalsis while supporting healthy intestinal flora.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Simple swaps:</strong> Replace white flour with whole wheat flour. Rye flour is particularly rich in fiber.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Bran boost:</strong> Add wheat bran to your muesli or yogurt for an extra fiber kick.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Essential:</strong> Drinking enough water is crucial with all fiber increases to prevent worsening constipation.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍇 Soaked Dried Fruit (Delicious Home Remedy!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Selection:</strong> Use prunes, apricots, dates, figs - whatever you enjoy most
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Chop the dried fruit and soak in water overnight
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Morning routine:</strong> Eat the soaked fruit plain or mix into yogurt/muesli
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Don't waste it:</strong> Drink the soaking water too - it's packed with beneficial compounds!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌱 Mucilage Remedies for Gentle Support
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Ground Flaxseed:</strong> Take 2-3 tablespoons daily with plenty of water
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Psyllium Husks:</strong> Start with 1 teaspoon, gradually increase up to 3 teaspoons daily
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Pro tip:</strong> You can soak these overnight too for easier digestion and better effectiveness.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ❌ Foods to Avoid or Limit
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Chocolate:</strong> Can worsen constipation due to its binding properties
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    <strong>Black Tea:</strong> The tannins can have a constipating effect - switch to herbal teas
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Check Your Iron Supplements
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Iron and constipation:</strong> Iron supplements are a common cause of constipation
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Review your iron regimen with your healthcare provider - you might not need as much supplementation anymore.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Daily Routine for Success</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Start day with soaked dried fruit and plenty of water</li>
                                <li>Add bran to breakfast cereal or yogurt</li>
                                <li>Choose whole grain options throughout the day</li>
                                <li>Take flaxseed or psyllium with adequate water</li>
                                <li>Stay well-hydrated - at least 8 glasses of water daily</li>
                                <li>Regular physical activity helps too!</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Increase fiber gradually to avoid gas and bloating</li>
                    <li>Always drink plenty of water when increasing fiber intake</li>
                    <li>Start with smaller doses of psyllium and flaxseed, then increase gradually</li>
                    <li>If constipation persists for more than a week, consult a healthcare provider</li>
                    <li>Sudden changes in bowel habits should be evaluated by a doctor</li>
                    <li>Don't stop prescribed medications without consulting your healthcare provider first</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Insomnia_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Nine Moons Tea Blend (Into Life)', price: 24.99, category: 'Herbal Tea' },
        { name: 'Lemon Balm (dried, organic)', price: 8.99, category: 'Herbal Tea' },
        { name: 'Linden Blossoms (dried, organic)', price: 12.99, category: 'Herbal Tea' },
        { name: 'Orange Blossoms (dried, organic)', price: 15.99, category: 'Herbal Tea' },
        { name: 'Rose Petals (dried, organic)', price: 13.99, category: 'Herbal Tea' },
        { name: 'St. John\'s Wort (dried, organic)', price: 11.99, category: 'Herbal Tea' },
        { name: 'Lemongrass (dried, organic)', price: 7.99, category: 'Herbal Tea' },
        { name: 'Lavender Blossoms (dried, organic)', price: 9.99, category: 'Herbal Tea' },
        { name: 'Magnesium Chloride (4kg bucket)', price: 39.99, category: 'Bath Salts' },
        { name: 'Lavender Relaxation Oil', price: 18.99, category: 'Essential Oils' },
        { name: 'Lupulus Mother Tincture (Ceres)', price: 22.99, category: 'Homeopathic Medicine' },
        { name: 'Passiflora Mother Tincture (Ceres)', price: 22.99, category: 'Homeopathic Medicine' },
        { name: 'Valeriana Mother Tincture (Ceres)', price: 22.99, category: 'Homeopathic Medicine' },
        { name: 'Raw Honey (organic)', price: 12.99, category: 'Natural Remedies' },
        { name: 'Sleep Mask (blackout)', price: 14.99, category: 'Sleep Accessories' },
        { name: 'Foot Bath Basin', price: 25.99, category: 'Equipment' },
        { name: 'Bath Thermometer', price: 12.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🌙 Natural Insomnia & Restlessness Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Comprehensive natural approach to restore healthy sleep patterns using evening rituals, herbal remedies, and relaxation techniques
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌅 Essential Evening Rituals
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>No screens before sleep:</strong> Don't watch TV until you fall asleep. Blue light from phone screens activates your brain and doesn't prepare it for good sleep.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Blue light regulation:</strong> Use device settings or apps to filter blue light in the evening hours.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Optimal sleep environment:</strong> Ensure fresh, cool air and consistent sound shielding. Room should be as dark and quiet as possible.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Sleep masks:</strong> Many women find sleep masks work particularly well for complete darkness.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Clock ban:</strong> Remove all visible clocks! Seeing it's 3:52 AM only creates stress and the feeling of being awake all night.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Magnesium Foot Bath for Deep Relaxation
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why magnesium works:</strong> Known as the "salt of inner peace," magnesium can support deep relaxation and is absorbed through the skin.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Use a good cup of magnesium chloride in warm water (at least 37°C/98.6°F).
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    This method ensures maximum magnesium absorption without the digestive side effects like diarrhea that oral supplements can cause.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍵 Nine Moons Herbal Tea Blend
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Premium blend contains:</strong> Lemon balm, linden blossoms, orange blossoms, rose petals, St. John's wort, lemongrass, lavender blossoms (all organic)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Perfect for:</strong> Everyday stress, multitude of worries, nighttime insomnia, and restless days with internal turmoil
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Pour boiling water over 2 teaspoons per cup, steep for 10 minutes
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Drink 1 cup in the evening or as needed. Orange blossoms, lemon balm, rose, and lavender bring relaxation, serenity, confidence, and nighttime peace.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥛 Grandma's Hot Milk with Honey
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Time-tested remedy:</strong> Hot milk with honey has been used for generations to promote sleep
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    The amino acid tryptophan is transported to the brain via sugar in honey, which could explain the sleep-promoting effect beyond the cozy, warm feeling in the stomach.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Lavender Relaxation Oil Treatment
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Essential lavender oil:</strong> Has a gently relaxing and loosening effect on both mind and body
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Application:</strong> Gently rub Lavender Relaxation Oil on your forearms, stomach, and feet before bedtime.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Specialized Homeopathic Tinctures (Ceres)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Lupulus (Hops) Mother Tincture:</strong> For rebalancing energies when you feel tired during the day but wide awake at night. Take 2-5 drops, 1-3 times daily.
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Passiflora (Passionflower) Mother Tincture:</strong> For inner harmony during transitional phases when new things cause restlessness. Perfect when worries and thoughts disturb sleep. Take 2-5 drops, 2-4 times daily, or 5 drops before sleep.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Valeriana (Valerian) Mother Tincture:</strong> Grounds you when lost in thought and experiencing sensory hypersensitivity.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌙 Nighttime Strategy When Sleep Won't Come
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Remove pressure:</strong> Changing sleep habits is normal and biologically sensible. Sleep primarily when you can.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>If lying awake:</strong> Read a little, write in your journal, listen to an audiobook, or in summer, sit on the balcony wrapped in a blanket with tea during the "blue hour"
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Bathroom trips:</strong> Only turn on minimal light to avoid tripping. Keep eyes mostly closed and "pretend to go back to sleep" - this signals your body to maintain sleep mode.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Avoid coffee:</strong> Combating daytime sleepiness with coffee is counterproductive - reduce coffee consumption instead.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🎵 Additional Relaxation Techniques
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Audio options:</strong> Many find relaxation music, meditation, guided trances, or relaxation techniques helpful
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Techniques to try:</strong> Autogenic training, progressive muscle relaxation
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Various CDs and download options are available - the important thing is finding a voice and music that feel right for you.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Complete Evening Routine</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>2 hours before bed: Stop screen time, dim lights</li>
                                <li>1 hour before bed: Prepare Nine Moons tea, start magnesium foot bath</li>
                                <li>30 minutes before bed: Apply lavender oil, take homeopathic tinctures</li>
                                <li>Just before bed: Hot milk with honey, put on sleep mask</li>
                                <li>In bed: Practice relaxation techniques or listen to calming audio</li>
                                <li>If awake: Stay calm, read quietly, don't check time</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Consult healthcare provider if insomnia persists for more than 2 weeks</li>
                    <li>Some herbal tinctures may interact with medications - check with your doctor</li>
                    <li>Start with lower doses of tinctures and gradually increase as needed</li>
                    <li>Pregnant or nursing women should consult healthcare provider before using herbal remedies</li>
                    <li>If sleep problems are accompanied by depression or anxiety, seek professional help</li>
                    <li>Avoid driving or operating machinery if using sleep-promoting remedies during the day</li>
                    <li>Create a consistent sleep schedule for best long-term results</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Depression_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'High-Quality Fish Oil (DHA/EPA)', price: 45.99, category: 'Omega-3 Supplements' },
        { name: 'Omega-3 Capsules (12-pack monthly supply)', price: 39.99, category: 'Omega-3 Supplements' },
        { name: 'Vitamin D3 (5000 IU)', price: 24.99, category: 'Vitamins' },
        { name: 'Iron Supplement (with Vitamin C)', price: 18.99, category: 'Minerals' },
        { name: 'Selenium Supplement (200mcg)', price: 16.99, category: 'Minerals' },
        { name: 'Iodine Drops (liquid supplement)', price: 22.99, category: 'Minerals' },
        { name: 'High-Potency Probiotics', price: 49.99, category: 'Gut Health' },
        { name: 'Sepia Homeopathic Remedy', price: 19.99, category: 'Homeopathic Medicine' },
        { name: 'Natrium Muriaticum Homeopathic', price: 19.99, category: 'Homeopathic Medicine' },
        { name: 'Ignatia Homeopathic Remedy', price: 19.99, category: 'Homeopathic Medicine' },
        { name: 'Bach Flower Rescue Remedy', price: 24.99, category: 'Bach Flower Remedies' },
        { name: 'Walnut Bach Flower', price: 16.99, category: 'Bach Flower Remedies' },
        { name: 'Mustard Bach Flower', price: 16.99, category: 'Bach Flower Remedies' },
        { name: 'Hornbeam Bach Flower', price: 16.99, category: 'Bach Flower Remedies' },
        { name: 'Olive Bach Flower', price: 16.99, category: 'Bach Flower Remedies' },
        { name: 'Bergamot-Neroli Essential Oil Blend', price: 32.99, category: 'Aromatherapy' },
        { name: '"Lift Me Up" Aroma Roller (Lemon & Rosemary)', price: 18.99, category: 'Aromatherapy' },
        { name: '"Soothing & Smoothing" Aroma Roller', price: 18.99, category: 'Aromatherapy' },
        { name: 'Citrus Body Oil Blend', price: 26.99, category: 'Aromatherapy' },
        { name: 'Essential Oil Diffuser/Fragrance Lamp', price: 45.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🌅 Natural Depression & Mood Support
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Comprehensive approach to emotional wellbeing using essential nutrients, natural remedies, and mood-lifting aromatherapy
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🐟 Omega-3 Therapeutic Dosage (Most Important!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Daily therapeutic dose:</strong> 2-3g of DHA/EPA daily for depression
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Equivalent amounts:</strong> This equals approximately 6-9g of fish oil, or 12 capsules of most commercial supplements
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Check your supplement:</strong> Individual supplement content varies greatly - always check the DHA/EPA content on your specific product
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Seafood days:</strong> On days when you eat a good portion of seafood, skip the supplement. On all other days, take the full dose.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Evidence-based:</strong> This may seem like a lot, but it's the necessary therapeutic dose that has shown positive effects in relevant depression studies.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦋 Essential Blood Work & Thyroid Function
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Thyroid testing:</strong> Have your T3, T4, and TSH levels checked if never done before or if experiencing "slow motion" symptoms
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Hypothyroidism signs:</strong> Sluggish digestion, sluggish metabolism, sluggish mood, slow thoughts, permanently cold hands/feet, slow-growing hair
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Thyroid support:</strong> For optimal thyroid function, ensure adequate iodine and selenium intake
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    The thyroid has a massive influence on your energy, vitality, and joy - don't overlook this crucial connection!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🩸 Iron, Ferritin & Vitamin D Testing
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Iron & Ferritin:</strong> Low levels make you listless, tired, and weak. Have both levels checked if not done recently.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Vitamin D crucial link:</strong> Deficiency is a significant marker in people with depression, demonstrated in many studies and reviews
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Winter depression theory:</strong> Some experts believe winter depression is essentially due to inadequate vitamin D supply in our latitudes
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Have your 25-OH vitamin D levels checked and supplement if in the deficient range.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦠 Gut-Brain Connection: Healthy Gut Flora
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Serotonin production:</strong> A large part of serotonin production takes place in the intestines
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Mental stability:</strong> Healthy gut flora is incredibly important for emotional wellbeing
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Evidence-based benefit:</strong> Taking probiotics can have positive effects on depression and anxiety disorders.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Targeted Homeopathic Remedies
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Sepia:</strong> For emotional imbalances revolving around women and motherhood topics
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Natrium Muriaticum:</strong> For emotional rigidity and deeply felt unhappiness
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Ignatia:</strong> After emotional triggers such as loss situations (death of loved one, separation) or homesickness after moving to another city
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌸 Bach Flower Remedies for Emotional Support
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Multiple flower options:</strong> Walnut, Aspen, Mustard, Hornbeam, and Olive can all be used for depressive states
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Each flower addresses different aspects of emotional imbalance - choose based on your specific symptoms and feelings.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍊 Aromatherapy: Sunshine in a Bottle - Citrus Oils
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>The citrus connection:</strong> All citrus plants grow in the sunny south and store the warming, light-bringing power of the sun in their fruits
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Each oil's unique gift:</strong> Neroli stabilizes during deep emotional distress • Bergamot has cheerful, antidepressant effects • Grapefruit brings cheerful courage • Mandarin brings childlike joy • Lemon brings fresh clarity • Sweet orange inspires confidence in new challenges
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Bergamot-Neroli blend:</strong> Perfect for your fragrance lamp to fill your space with uplifting energy
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>"Lift Me Up" roller:</strong> Lemon and rosemary blend - gently stimulating effect, roll on pulse points several times daily
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>"Soothing & Smoothing" roller:</strong> Neroli, mandarin, and cedar - more stabilizing, enveloping, and protective effect
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🆘 When to Seek Professional Help
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6', fontSize: '16px', fontWeight: '600', color: '#8B0000' }}>
                                    If no improvement is in sight after trying these natural approaches, seek professional help. Depression is a serious condition that may require medical intervention.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Complete Daily Protocol</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Morning: High-dose Omega-3 with breakfast, Vitamin D, probiotics</li>
                                <li>Midday: Apply "Lift Me Up" aroma roller to pulse points</li>
                                <li>Afternoon: Support supplements (iron, iodine, selenium as needed)</li>
                                <li>Evening: Homeopathic remedies, Bach flowers, aromatherapy diffuser</li>
                                <li>Ongoing: Regular blood work monitoring, professional support as needed</li>
                                <li>Daily: Use citrus body oils after shower for mood-lifting benefits</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Important Disclaimers</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li><strong>Seek professional help immediately</strong> if experiencing suicidal thoughts or severe depression</li>
                    <li>High-dose Omega-3 may affect blood clotting - consult doctor if on blood thinners</li>
                    <li>Always check with healthcare provider before stopping prescribed antidepressants</li>
                    <li>Blood work should be interpreted by qualified medical professionals</li>
                    <li>Natural remedies can complement but not replace professional mental health treatment</li>
                    <li>Some supplements may interact with medications - discuss with pharmacist or doctor</li>
                    <li>Depression is a serious medical condition - this protocol supports but doesn't replace medical care</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CalfCramps_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Magnesium Supplement (300mg tablets)', price: 19.99, category: 'Minerals' },
        { name: 'Magnesium Chloride (4kg bucket)', price: 39.99, category: 'Bath Salts' },
        { name: 'Calcium Supplement (600mg)', price: 16.99, category: 'Minerals' },
        { name: 'Zinc Supplement (15mg)', price: 14.99, category: 'Minerals' },
        { name: 'Vitamin D3 (5000 IU)', price: 24.99, category: 'Vitamins' },
        { name: 'Unrefined Sea Salt (2lb)', price: 8.99, category: 'Natural Medicine' },
        { name: 'Lavender Relaxation Oil', price: 18.99, category: 'Essential Oils' },
        { name: 'Pure Lavender Essential Oil', price: 22.99, category: 'Essential Oils' },
        { name: 'Foot Bath Basin (large)', price: 25.99, category: 'Equipment' },
        { name: 'Bath Thermometer', price: 12.99, category: 'Equipment' },
        { name: 'Measuring Cup (for magnesium)', price: 7.99, category: 'Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    🦵 Natural Calf Cramp Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Target the root causes of muscle cramps with essential minerals and soothing therapies for lasting relief
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Magnesium - The Key Mineral for Muscle Function
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why magnesium is crucial:</strong> Magnesium is the key mineral for physiological muscle contraction behavior and preventing cramps
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Oral supplementation:</strong> Take 300mg magnesium before bed for a few days when experiencing cramps
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Maintenance:</strong> Continue with regular magnesium supplementation to prevent future episodes
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Pro tip:</strong> Taking magnesium before bed not only helps prevent nighttime cramps but also promotes better sleep quality.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Magnesium Foot Bath for Immediate Relief
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Preparation:</strong> Add a good cup of magnesium chloride to warm water in a foot bath basin
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Temperature:</strong> Water should be at least 37°C (98.6°F) for optimal absorption
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Duration:</strong> Soak feet and calves for 15-20 minutes
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Economical option:</strong> Magnesium chloride is available inexpensively online in 4kg buckets, providing excellent value for regular use.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Essential Daily Salt Supplementation
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Daily requirement:</strong> Supplement your daily salt intake with at least 1 teaspoon per day
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Quality matters:</strong> Use unrefined sea salt for optimal mineral content
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Note:</strong> More detailed information about salt requirements can be found in specialized sections on preeclampsia and salt balance.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦴 Supporting Nutrients for Muscle Health
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Calcium:</strong> Essential for proper muscle contraction and relaxation cycles
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Zinc:</strong> Important cofactor in muscle metabolism and repair processes
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Vitamin D:</strong> Crucial for calcium absorption and overall muscle function - deficiency can contribute to muscle cramps and weakness
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Lavender Oil Massage Therapy
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Muscle relaxation:</strong> Lavender oil naturally relaxes foot and calf muscles
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Application technique:</strong> Gentle massage with lavender relaxation oil, focusing on cramped areas
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Timing:</strong> Apply before bed for prevention, or during cramps for immediate relief
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    The combination of gentle massage and lavender's natural muscle-relaxing properties provides both immediate comfort and long-term benefits.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🏃‍♀️ Additional Prevention Strategies
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Hydration:</strong> Ensure adequate water intake throughout the day
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Gentle stretching:</strong> Regular calf stretches before bed and upon waking
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Heat therapy:</strong> Warm compress or heating pad on affected muscles can provide additional relief
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Complete Anti-Cramp Protocol</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Evening: 300mg magnesium supplement, lavender oil massage</li>
                                <li>Before bed: Magnesium foot bath (15-20 minutes at 37°C+)</li>
                                <li>Daily: 1+ teaspoon unrefined salt, adequate hydration</li>
                                <li>Ongoing: Calcium, zinc, and vitamin D supplementation</li>
                                <li>Prevention: Regular gentle calf stretches, proper electrolyte balance</li>
                                <li>During cramps: Immediate lavender massage, gentle stretching</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Start with lower magnesium doses if you experience digestive upset</li>
                    <li>Consult healthcare provider if cramps persist despite treatment</li>
                    <li>Monitor salt intake if you have high blood pressure or heart conditions</li>
                    <li>Test foot bath temperature to avoid burns</li>
                    <li>If cramps are frequent or severe, rule out underlying medical conditions</li>
                    <li>Some medications can deplete magnesium - discuss with your doctor</li>
                    <li>Pregnant women should consult healthcare provider before supplement changes</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CirculatoryProblems_EN = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Compression Stockings (graduated 15-20 mmHg)', price: 29.99, category: 'Medical Support' },
        { name: 'Compression Stockings (graduated 20-30 mmHg)', price: 39.99, category: 'Medical Support' },
        { name: 'High-Quality Coffee (organic)', price: 16.99, category: 'Natural Stimulants' },
        { name: 'Large Basin/Sink Insert (for arm baths)', price: 24.99, category: 'Equipment' },
        { name: 'Water Thermometer', price: 12.99, category: 'Equipment' },
        { name: 'Electrolyte Powder (natural)', price: 22.99, category: 'Hydration Support' },
        { name: 'Large Water Bottle (32oz with measurements)', price: 18.99, category: 'Hydration Support' },
        { name: 'Ginkgo Biloba Supplement', price: 24.99, category: 'Circulation Support' },
        { name: 'Horse Chestnut Extract', price: 19.99, category: 'Circulation Support' },
        { name: 'Vitamin E Supplement (circulation)', price: 16.99, category: 'Circulation Support' },
        { name: 'Timer/Stopwatch (for treatments)', price: 9.99, category: 'Equipment' },
        { name: 'Comfortable Walking Shoes', price: 79.99, category: 'Exercise Equipment' }
    ];

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(ingredients);
        }
    };

    return (
        <div style={{ 
            marginBottom: '40px', 
            padding: '30px', 
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(143, 188, 143, 0.2)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h2 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '28px' }}>
                    💓 Natural Circulatory Problems Relief
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Improve blood circulation and support your venous system using natural methods, hydration, and gentle stimulation
                </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => {setShowInstructions(true); setShowIngredients(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showInstructions ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showInstructions ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        📋 Instructions
                    </button>
                    <button
                        onClick={() => {setShowIngredients(true); setShowInstructions(false);}}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: showIngredients ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                            color: showIngredients ? 'white' : '#4a6741',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        🛒 Shopping List
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Treatment Protocol:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💧 Essential Hydration for Blood Volume
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Why hydration matters:</strong> Drinking plenty of fluids is important so your blood can circulate well and maintains its volume
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Daily goal:</strong> Aim for at least 8-10 glasses of water throughout the day
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Quality matters:</strong> Use filtered water and consider adding natural electrolytes for better absorption
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Pro tip:</strong> Start your day with a large glass of water to kickstart circulation and rehydrate after the night's fast.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧦 Compression Stockings for Venous Support
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>How they work:</strong> Compression stockings prevent blood from pooling in the lower half of the body and then missing blood at the top of the brain
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Surprising benefit:</strong> Many women feel somehow fitter with stockings. They also support the venous system effectively
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Compression levels:</strong> Start with 15-20 mmHg for mild issues, 20-30 mmHg for more significant circulation problems
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>When to wear:</strong> Put on first thing in the morning before getting out of bed, wear throughout the day for maximum benefit
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ☕ Strategic Morning Coffee for Circulation
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>The circulation connection:</strong> A cup of coffee in the morning is allowed and sometimes provides the necessary kickstart for your circulatory system
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Timing matters:</strong> Drink your coffee early in the morning to maximize circulation benefits without affecting sleep
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Quality choice:</strong> Choose organic coffee and avoid excessive amounts - one cup provides the beneficial stimulation you need
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥶 Cold Arm Baths - The Kneipp "Cup of Coffee"
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>The technique:</strong> Fill the sink well with cool, not ice-cold, water and soak your arms in it for half a minute
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Water temperature:</strong> Cool but comfortable - around 60-65°F (15-18°C) is ideal
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Frequency:</strong> You can repeat this a few times throughout the morning for continued circulation benefits
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Why it works:</strong> The cold water stimulates blood flow and provides an invigorating effect similar to caffeine - hence the "Kneipp cup of coffee" name
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚶‍♀️ Fresh Air Exercise for Circulation Boost
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Morning routine:</strong> Take a short, brisk walk around the block in the morning and let the freshness of the day wash over you
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Duration:</strong> Even 10-15 minutes of brisk walking can significantly improve circulation
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Benefits:</strong> Fresh air combined with movement provides oxygen to your blood and stimulates overall circulation
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Year-round practice:</strong> Make this a daily habit regardless of weather - dress appropriately and enjoy the invigorating effects
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Natural Circulation Support Supplements
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Ginkgo Biloba:</strong> Traditional herb known to support peripheral circulation and blood flow to extremities
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Horse Chestnut Extract:</strong> Specifically beneficial for venous circulation and reducing leg heaviness
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Vitamin E:</strong> Supports healthy blood vessel function and overall cardiovascular health
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💪 Additional Circulation Boosters
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Leg elevation:</strong> Elevate legs above heart level for 15-20 minutes daily
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Avoid prolonged sitting:</strong> Take movement breaks every hour if you have a desk job
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Temperature contrast:</strong> Alternate between warm and cool water during showers to stimulate circulation
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Complete Daily Circulation Protocol</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Upon waking: Put on compression stockings before getting up</li>
                                <li>Morning: Large glass of water, strategic cup of coffee</li>
                                <li>Early morning: Cold arm baths (Kneipp method) - repeat 2-3 times</li>
                                <li>Morning routine: 10-15 minute brisk walk in fresh air</li>
                                <li>Throughout day: Regular hydration, movement breaks every hour</li>
                                <li>Evening: Leg elevation for 15-20 minutes before bed</li>
                                <li>Daily: Circulation support supplements as recommended</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Shopping List & Ingredients:</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} style={{ 
                                    background: 'white', 
                                    padding: '15px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(143, 188, 143, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <strong style={{ color: '#2d5016', display: 'block' }}>{ingredient.name}</strong>
                                        <span style={{ color: '#4a6741', fontSize: '14px' }}>{ingredient.category}</span>
                                    </div>
                                    <span style={{ color: '#8fbc8f', fontWeight: 'bold', fontSize: '16px' }}>
                                        $ --
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: '#8fbc8f',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#7aa67a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#8fbc8f'}
                            >
                                🛒 Items are currently not included in our shop. 
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                            -   Feel free to use the shopping list for other shops!                            
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ 
                marginTop: '20px', 
                padding: '15px',
                background: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Safety & Precautions</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Consult healthcare provider before using compression stockings if you have diabetes or peripheral artery disease</li>
                    <li>Start with gentle cold water temperatures and gradually decrease as tolerance builds</li>
                    <li>Monitor blood pressure if you have cardiovascular conditions</li>
                    <li>Stop exercise immediately if you experience chest pain, dizziness, or unusual shortness of breath</li>
                    <li>Compression stockings should be properly fitted - consider professional sizing</li>
                    <li>Some circulation supplements may interact with blood-thinning medications</li>
                    <li>Seek medical attention for sudden changes in circulation, numbness, or severe leg pain</li>
                </ul>
            </div>
        </div>
    );
};