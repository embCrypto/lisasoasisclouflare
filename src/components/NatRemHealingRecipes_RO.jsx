import React, { useState } from 'react';

export const NatRemRecipe_Cold_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Pastile cu Zinc (10mg)', price: 12.99, category: 'Suplimente' },
        { name: 'Vitamina C (tablete 1000mg)', price: 15.49, category: 'Suplimente' },
        { name: 'Cimbru uscat', price: 4.99, category: 'Plante medicinale' },
        { name: 'Flori de tei uscate', price: 8.99, category: 'Plante medicinale' },
        { name: 'Flori de soc uscate', price: 7.99, category: 'Plante medicinale' },
        { name: 'Tinctură de propolis', price: 18.99, category: 'Medicină naturală' },
        { name: 'Lampă cu lumină roșie terapeutică', price: 89.99, category: 'Echipament' },
        { name: 'Termometru pentru baie', price: 12.99, category: 'Echipament' }
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
                    🤧 Tratamentul Răcelii și Infecțiilor
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Metode naturale testate în timp pentru combaterea răcelii și stimularea imunității la primele semne de infecție
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Tratamentul cu baie crescătoare
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>La primele semne de infecție:</strong> Începeți cu o baie la 37°C, apoi adăugați treptat apă caldă până ajungeți la 39°C. Nu depășiți această temperatură.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Alternativa:</strong> Baie de picioare folosind aceeași progresie de temperatură dacă baia completă nu este disponibilă.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>După baie:</strong> Înfășurați-vă călduros și duceți-vă direct la pat. Odihniți-vă sau adormiți imediat pentru cele mai bune rezultate.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Doze mari de Zinc și Vitamina C
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Doza inițială:</strong> 50-75mg zinc + 1000mg vitamina C seara
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Urmărire:</strong> Pastile cu zinc 10mg, de 6 ori pe zi pentru câteva zile
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Contactul local al mucoaselor cu pastilele este benefic. Zincul poate scurta durata răcelii conform studiilor Cochrane.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Baie cu Cimbru și Mirt
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Alternativa mai blândă la baia crescătoare. Sigură pentru copii și femei însărcinate. Adăugați cimbru și mirt uscate în apa caldă de baie.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍵 Ceai vindecare din plante medicinale
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rețeta:</strong> Părți egale de ceai de tei și soc, cu cimbru pentru tuse
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Beți cald și duceți-vă la pat imediat după.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍲 Supa de pui a bunicii
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Numită și "penicilina evreiască" - dovedită științific că este delicioasă, liniștitoare și vindecătoare pentru simptomele răcelii.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Tratamentul cu propolis
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Excelent pentru infecțiile gurii, gâtului și bronhiilor. Efect antiviral local puternic, deosebit de eficient pe herpesul labial. La fel de eficient ca uleiul esențial de melisă.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Terapia cu lumină roșie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    <strong>Remediul absolut preferat!</strong> Aplicați lumina roșie oriunde este nevoie: sinusuri, piept, spate sau ureche. Promovează vindecarea și reduce inflamația.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Nu depășiți 39°C pentru băile crescătoare</li>
                    <li>Dozele mari de zinc ar trebui să fie temporare - consultați un medic pentru folosirea prelungită</li>
                    <li>Femeile însărcinate ar trebui să consulte medicul înainte de suplimente cu doze mari</li>
                    <li>Copiii necesită dozaje ajustate - consultați pediatrul</li>
                    <li>Dacă simptomele se agravează sau persistă peste 7 zile, solicitați atenție medicală</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Sniffles_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Sare de mare (nerafinată)', price: 6.99, category: 'Medicină naturală' },
        { name: 'Balsam cu angelică (Ingeborg Stadelmann)', price: 24.99, category: 'Medicină naturală' },
        { name: 'Semințe de in măcinate', price: 8.99, category: 'Medicină naturală' },
        { name: 'Lampă cu lumină roșie terapeutică', price: 89.99, category: 'Echipament' },
        { name: 'Vas pentru irigarea nazală (Neti Pot)', price: 15.99, category: 'Echipament' },
        { name: 'Bol mare de amestecare (pentru aburi)', price: 12.99, category: 'Echipament' },
        { name: 'Prosoape din bumbac (pachet de 2)', price: 19.99, category: 'Echipament' }
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
                    🤧 Tratamentul guturaiului și congestiei nazale
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Metode naturale pentru eliberarea congestiei nazale și calmarea sinusurilor inflamate
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💨 Tratamentul clasic cu aburi
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Umpleți un bol mare cu apă clocotită (sau ceai de plante cald). Adăugați 2-3 linguri de sare.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Tratamentul:</strong> Aplecați-vă deasupra bolului cu un prosop acoperind capul și bolul, creând o cort de aburi. Respirați adânc timp de 5-10 minute.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>După tratament:</strong> Puneți o șapcă sau înfășurați capul într-un turban din prosop și duceți-vă imediat la pat.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Important:</strong> Aveți grijă cu aburii fierbinți pentru a evita arsurile. Țineți ochii închiși în timpul tratamentului.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Aplicarea balsamului cu angelică
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Aplicarea:</strong> Aplicați balsamul cu angelică (Ingeborg Stadelmann) direct pe nări și sub zona nazală.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Acest balsam specializat ajută la deschiderea căilor nazale și oferă o ușurare calmantă mucoaselor iritante.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Terapia sinusurilor cu lumină roșie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Aplicați lumina roșie direct pe zonele sinusurilor (frunte, obraji, podul nasului) timp de 10-15 minute. 
                                    Aceasta ajută la reducerea inflamației și ameliorează natural durerea sinusurilor.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Masca facială caldă cu semințe de in
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Faceți o pastă din semințe de in măcinate adăugând treptat apă caldă până obțineți o consistență întindibilă.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Aplicarea:</strong> Aplicați ca o mască facială pe zonele dureroase ale sinusurilor (frunte, obraji, în jurul nasului).
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Căldura caldă și umedă oferă o ușurare foarte plăcută și ajută la reducerea inflamației.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚿 Irigarea nazală regulată
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pentru toate problemele nazale:</strong> Infecții frecvente, sinuzită, umflături alergice
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Metoda:</strong> Folosiți un vas pentru irigare nazală cu apă sărată călduță (1/4 linguriță sare per ceașcă de apă). 
                                    Clătiți fiecare nară blând, permițând apei să curgă prin și să iasă prin cealaltă nară.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Beneficii:</strong> Umectează mucoasele, îndepărtează mucusul gros, polenul și praful urban, 
                                    ajută firele ciliate să funcționeze corespunzător pentru curățarea naturală.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Aveți grijă cu tratamentele cu aburi pentru a evita arsurile - testați mai întâi temperatura</li>
                    <li>Folosiți doar apă sterilă sau distilată pentru irigarea nazală</li>
                    <li>Curățați vasul de irigare nazală temeinic după fiecare folosire</li>
                    <li>Dacă simptomele persistă sau se agravează după 7 zile, consultați un medic</li>
                    <li>Opriți tratamentul dacă experimentați reacții adverse</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_SoreThroat_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Pastile cu salvie (naturale)', price: 8.99, category: 'Medicină naturală' },
        { name: 'Pastile cu miere de Manuka', price: 16.99, category: 'Medicină naturală' },
        { name: 'Pastile cu propolis', price: 12.99, category: 'Medicină naturală' },
        { name: 'Sare de mare (nerafinată)', price: 6.99, category: 'Medicină naturală' },
        { name: 'Brânză de vaci proaspătă/Caș', price: 4.99, category: 'Medicină naturală' },
        { name: 'Globuli Apis Belladonna (Wala)', price: 24.99, category: 'Medicină homeopată' },
        { name: 'Pânză din bumbac (pentru comprese)', price: 9.99, category: 'Echipament' },
        { name: 'Pahar de măsurat (250ml)', price: 7.99, category: 'Echipament' }
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
                    🤒 Tratamentul durerilor de gât
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Metode naturale pentru calmarea gâtului iritant și reducerea inflamației folosind tratamente blânde și eficiente
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Pastile vindecătoare pentru stimularea salivei
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce ajută sugerea:</strong> Sugerea stimulează fluxul de salivă, care este exact ceea ce au nevoie mucoasele iritante pentru vindecare.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Cele mai bune opțiuni:</strong> Pastile cu salvie, pastile cu miere de Manuka sau pastile cu propolis - toate sunt blânde și calmante.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Utilizarea:</strong> Permiteți pastilelor să se dizolve lent în gură pe parcursul zilei după cum este necesar pentru confort.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Vindecare naturală:</strong> Aceste pastile oferă o ușurare blândă și continuă în timp ce sprijină procesul natural de vindecare al organismului.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Gargara cu apă sărată
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rețeta:</strong> Amestecați 1 linguriță de sare în 250ml (1 ceașcă) de apă caldă
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Metoda:</strong> Faceți gargară timp de 30 de secunde, apoi scuipați. Repetați de 3-4 ori per sesiune.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Folosiți de 3-4 ori pe zi. Apa sărată ajută la reducerea umflăturii și extragerea naturală a infecției.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧀 Comprese cu brânză de vaci (Foarte recomandate!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce funcționează:</strong> Compresele cu brânză de vaci sunt foarte plăcute și literalmente extrag toată inflamația din țesut.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Întindeți brânza de vaci la temperatura camerei pe o pânză din bumbac, grosimea de aproximativ 1cm.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Aplicarea:</strong> Puneți partea cu brânza împotriva gâtului, înfășurați cu o altă pânză pentru a fixa.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Lăsați timp de 20-30 de minute sau până când brânza se simte caldă. Merită cu adevărat încercarea - remarcabil de eficientă!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Tratamentul amigdalitei grave
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pentru cazurile grave cu febră:</strong> Apis Belladonna Globuli velati (Wala)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dozajul:</strong> Dizolvați 5 granule în gură de mai multe ori pe zi
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Acest remediu homeopat vizează în mod specific inflamația gravă a gâtului și febra asociată cu amigdalita.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 99, 71, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 99, 71, 0.3)', marginTop: '10px' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8B0000' }}>
                                    <strong>Important:</strong> Pentru amigdalita gravă cu febră mare, consultați prompt un medic deoarece tratamentul antibiotic poate fi necesar.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Solicitați imediat atenție medicală pentru febră mare, dificultăți în înghițire sau probleme de respirație</li>
                    <li>Folosiți doar sare de calitate alimentară pentru gargară</li>
                    <li>Înlocuiți compresele cu brânză de vaci cu aplicații proaspete - nu refolosiți</li>
                    <li>Consultați un medic dacă simptomele persistă peste 5 zile</li>
                    <li>Pentru amigdalita gravă, evaluarea medicală profesională este esențială</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Constipation_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Făină de grâu integral (2.5kg)', price: 18.99, category: 'Fibre dietetice' },
        { name: 'Făină de secară (1kg)', price: 14.99, category: 'Fibre dietetice' },
        { name: 'Tărâțe de grâu (bio)', price: 16.49, category: 'Fibre dietetice' },
        { name: 'Prune uscate (500g)', price: 21.99, category: 'Remedii naturale' },
        { name: 'Caise uscate (500g)', price: 28.99, category: 'Remedii naturale' },
        { name: 'Curmale uscate (500g)', price: 25.49, category: 'Remedii naturale' },
        { name: 'Smochine uscate (500g)', price: 30.99, category: 'Remedii naturale' },
        { name: 'Semințe de in măcinate (bio)', price: 21.99, category: 'Remedii naturale' },
        { name: 'Coaja de psyllium (pulbere)', price: 37.99, category: 'Remedii naturale' }
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
                    🚽 Tratamentul natural al constipației
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Metode blânde și eficiente pentru restabilirea funcției intestinale sănătoase folosind alimente bogate în fibre și remedii naturale
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Dați intestinelor ceva de lucru: Creșteți fibrele
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce funcționează fibra:</strong> Fibra mărește volumul și stimulează peristaltica intestinală sprijinind în același timp flora intestinală sănătoasă.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Schimbări simple:</strong> Înlocuiți făina albă cu făina integrală. Făina de secară este deosebit de bogată în fibre.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Plus de tărâțe:</strong> Adăugați tărâțe de grâu în muesli sau iaurt pentru o porție extra de fibre.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Esențial:</strong> Băutul suficientei cantități de apă este crucial când creșteți aportul de fibre pentru a preveni agravarea constipației.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍇 Fructe uscate înmuiate (Remediu casnic delicios!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Selecția:</strong> Folosiți prune, caise, curmale, smochine - orice vă place cel mai mult
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Tocați fructele uscate și lăsați-le să se înmoaie în apă peste noapte
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rutina de dimineață:</strong> Mâncați fructele înmuiate simple sau amestecate în iaurt/muesli
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Nu risipești nimic:</strong> Beți și apa de înmuiat - este plină de compuși benefici!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌱 Remedii cu mucilaj pentru sprijin blând
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Semințe de in măcinate:</strong> Luați 2-3 linguri zilnic cu multă apă
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Coaja de psyllium:</strong> Începeți cu 1 lingurită, crescând treptat până la 3 lingurițe zilnic
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Sfat pro:</strong> Puteți înmuia și acestea peste noapte pentru o digestie mai ușoară și o eficiență mai bună.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ❌ Alimente de evitat sau limitat
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Ciocolata:</strong> Poate agrava constipația din cauza proprietăților sale astringente
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    <strong>Ceaiul negru:</strong> Taninurile pot avea un efect constipant - treceți la ceaiuri din plante
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Verificați suplimentele de fier
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Fierul și constipația:</strong> Suplimentele de fier sunt o cauză comună a constipației
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Discutați regimul de fier cu furnizorul dumneavoastră de servicii medicale - este posibil să nu mai aveți nevoie de atâta suplimentare.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Rutina zilnică pentru succes</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Începeți ziua cu fructe uscate înmuiate și multă apă</li>
                                <li>Adăugați tărâțe la cereale sau iaurt la micul dejun</li>
                                <li>Alegeți opțiuni integrale pe parcursul zilei</li>
                                <li>Luați semințe de in sau psyllium cu apă adecvată</li>
                                <li>Rămâneți bine hidratați - cel puțin 8 pahare de apă zilnic</li>
                                <li>Activitatea fizică regulată ajută de asemenea!</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Creșteți fibra treptat pentru a evita gazele și balonarea</li>
                    <li>Beți întotdeauna multă apă când creșteți aportul de fibre</li>
                    <li>Începeți cu doze mai mici de psyllium și semințe de in, apoi creșteți treptat</li>
                    <li>Dacă constipația persistă mai mult de o săptămână, consultați un medic</li>
                    <li>Schimbările bruște în obiceiurile intestinale trebuie evaluate de un doctor</li>
                    <li>Nu opriți medicamentele prescrise fără a consulta mai întâi medicul</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Insomnia_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Amestec de ceai Nine Moons (Into Life)', price: 54.99, category: 'Ceai din plante' },
        { name: 'Melissa (uscată, bio)', price: 19.99, category: 'Ceai din plante' },
        { name: 'Flori de tei (uscate, bio)', price: 28.99, category: 'Ceai din plante' },
        { name: 'Flori de portocal (uscate, bio)', price: 35.99, category: 'Ceai din plante' },
        { name: 'Petale de trandafir (uscate, bio)', price: 30.99, category: 'Ceai din plante' },
        { name: 'Sunătoare (uscată, bio)', price: 26.99, category: 'Ceai din plante' },
        { name: 'Lemongrass (uscat, bio)', price: 17.99, category: 'Ceai din plante' },
        { name: 'Flori de lavandă (uscate, bio)', price: 21.99, category: 'Ceai din plante' },
        { name: 'Clorură de magneziu (găleată 4kg)', price: 89.99, category: 'Săruri de baie' },
        { name: 'Ulei de relaxare cu lavandă', price: 41.99, category: 'Uleiuri esențiale' },
        { name: 'Tinctură mamă Lupulus (Ceres)', price: 50.99, category: 'Medicină homeopată' },
        { name: 'Tinctură mamă Passiflora (Ceres)', price: 50.99, category: 'Medicină homeopată' },
        { name: 'Tinctură mamă Valeriana (Ceres)', price: 50.99, category: 'Medicină homeopată' },
        { name: 'Miere naturală (bio)', price: 28.99, category: 'Remedii naturale' },
        { name: 'Mască de somn (blackout)', price: 32.99, category: 'Accesorii somn' },
        { name: 'Lighean pentru baie de picioare', price: 57.99, category: 'Echipament' },
        { name: 'Termometru pentru baie', price: 28.99, category: 'Echipament' }
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
                    🌙 Tratamentul natural al insomniei și agitației
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Abordare naturală comprehensivă pentru restabilirea unor tipare sănătoase de somn folosind ritualuri de seară, remedii din plante și tehnici de relaxare
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌅 Ritualuri de seară esențiale
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Fără ecrane înainte de culcare:</strong> Nu vă uitați la televizor până adormiți. Lumina albastră de la ecranele telefoanelor activează creierul și nu îl pregătește pentru un somn bun.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Reglarea luminii albastre:</strong> Folosiți setările dispozitivului sau aplicații pentru a filtra lumina albastră în orele de seară.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Mediul optimal de somn:</strong> Asigurați aer proaspăt și rece și o protecție sonoră consistentă. Camera ar trebui să fie cât mai întunecată și liniștită posibil.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Măști de somn:</strong> Multe femei găsesc că măștile de somn funcționează deosebit de bine pentru întunericul complet.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Interdicție la ceasuri:</strong> Îndepărtați toate ceasurile vizibile! Să vedeți că este 3:52 AM creează doar stres și senzația de a fi treaz toată noaptea.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Baie de picioare cu magneziu pentru relaxare profundă
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce funcționează magneziul:</strong> Cunoscut ca "sarea păcii interioare", magneziul poate sprijini relaxarea profundă și se absoarbe prin piele.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Folosiți o ceașcă bună de clorură de magneziu în apă caldă (cel puțin 37°C).
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Această metodă asigură absorbția maximă de magneziu fără efectele secundare digestive precum diareea pe care le pot provoca suplimentele orale.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍵 Amestecul de ceai din plante Nine Moons
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Amestecul premium conține:</strong> Melissa, flori de tei, flori de portocal, petale de trandafir, sunătoare, lemongrass, flori de lavandă (toate bio)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Perfect pentru:</strong> Stresul zilnic, multitudinea de griji, insomnia de noapte și zilele agitate cu frământări interioare
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Turnați apă clocotită peste 2 lingurițe per ceașcă, lăsați să se infuzeze 10 minute
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Beți 1 ceașcă seara sau după cum este necesar. Florile de portocal, melissa, trandafirul și lavanda aduc relaxare, seninătate, încredere și pace de noapte.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥛 Laptele fierbinte cu miere al bunicii
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Remediu testat în timp:</strong> Laptele fierbinte cu miere a fost folosit de generații pentru a promova somnul
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Aminoacidul triptofan este transportat către creier prin zahărul din miere, ceea ce ar putea explica efectul promotor al somnului dincolo de senzația de confort și căldură din stomac.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Tratamentul cu ulei de relaxare cu lavandă
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Uleiul esențial de lavandă:</strong> Are un efect blând relaxant și de destindere atât asupra minții cât și asupra corpului
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Aplicarea:</strong> Frecați blând uleiul de relaxare cu lavandă pe antebrate, stomac și picioare înainte de culcare.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Tincturi homeopatice specializate (Ceres)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Tinctură mamă Lupulus (Hamei):</strong> Pentru reechilibrarea energiilor când vă simțiți obosit în timpul zilei dar complet treaz noaptea. Luați 2-5 picături, de 1-3 ori zilnic.
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Tinctură mamă Passiflora (Floarea patimilor):</strong> Pentru armonia interioară în faze de tranziție când lucrurile noi cauzează agitație. Perfectă când grijile și gândurile deranjează somnul. Luați 2-5 picături, de 2-4 ori zilnic, sau 5 picături înainte de culcare.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Tinctură mamă Valeriana:</strong> Vă întemeiază când sunteți pierduți în gânduri și experimentați hipersensibilitate senzorială.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌙 Strategia de noapte când somnul nu vine
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Îndepărtați presiunea:</strong> Schimbarea obiceiurilor de somn este normală și biologică. Dormiți în primul rând când puteți.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dacă stați treaz:</strong> Citiți puțin, scrieți în jurnal, ascultați o audiobook sau vara, stați pe balcon înfășurat într-o pătură cu ceai în timpul "orei albastre"
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Mers la toaletă:</strong> Aprindeți doar lumină minimă pentru a evita împiedicarea. Țineți ochii în mare parte închiși și "pretindeți că vă întoarceți la somn" - aceasta semnalizează corpului să mențină modul de somn.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Evitați cafeaua:</strong> Combaterea somnolentei de zi cu cafea este contraproductivă - reduceți în schimb consumul de cafea.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🎵 Tehnici suplimentare de relaxare
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Opțiuni audio:</strong> Mulți găsesc muzica de relaxare, meditația, transe-urile ghidate sau tehnicile de relaxare utile
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Tehnici de încercat:</strong> Training autogen, relaxarea progresivă a mușchilor
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Sunt disponibile diverse CD-uri și opțiuni de descărcare - important este să găsiți o voce și muzică care să vă facă să vă simțiți bine.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Rutina completă de seară</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Cu 2 ore înainte de culcare: Opriți timpurile de ecran, reduceți luminile</li>
                                <li>Cu 1 oră înainte de culcare: Pregătiți ceaiul Nine Moons, începeți baia de picioare cu magneziu</li>
                                <li>Cu 30 de minute înainte de culcare: Aplicați uleiul de lavandă, luați tincturile homeopatice</li>
                                <li>Chiar înainte de culcare: Lapte fierbinte cu miere, puneți masca de somn</li>
                                <li>În pat: Practicați tehnici de relaxare sau ascultați audio liniștitor</li>
                                <li>Dacă sunteți treaz: Rămâneți calmi, citiți liniștit, nu verificați ora</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Consultați medicul dacă insomnia persistă mai mult de 2 săptămâni</li>
                    <li>Unele tincturi din plante pot interacționa cu medicamentele - verificați cu doctorul</li>
                    <li>Începeți cu doze mai mici de tincturi și creșteți treptat după cum este necesar</li>
                    <li>Femeile însărcinate sau care alăptează ar trebui să consulte medicul înainte de a folosi remedii din plante</li>
                    <li>Dacă problemele de somn sunt însoțite de depresie sau anxietate, căutați ajutor profesional</li>
                    <li>Evitați conducerea sau operarea mașinilor dacă folosiți remedii promotoare de somn în timpul zilei</li>
                    <li>Creați un program constant de somn pentru cele mai bune rezultate pe termen lung</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Depression_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Ulei de pește de înaltă calitate (DHA/EPA)', price: 101.99, category: 'Suplimente Omega-3' },
        { name: 'Capsule Omega-3 (provizii lunare - 12 cutii)', price: 89.99, category: 'Suplimente Omega-3' },
        { name: 'Vitamina D3 (5000 UI)', price: 54.99, category: 'Vitamine' },
        { name: 'Supliment de fier (cu vitamina C)', price: 41.99, category: 'Minerale' },
        { name: 'Supliment de seleniu (200mcg)', price: 37.99, category: 'Minerale' },
        { name: 'Picături de iod (supliment lichid)', price: 50.99, category: 'Minerale' },
        { name: 'Probiotice de înaltă potență', price: 109.99, category: 'Sănătatea intestinală' },
        { name: 'Remediu homeopat Sepia', price: 43.99, category: 'Medicină homeopată' },
        { name: 'Natrium Muriaticum homeopat', price: 43.99, category: 'Medicină homeopată' },
        { name: 'Remediu homeopat Ignatia', price: 43.99, category: 'Medicină homeopată' },
        { name: 'Remediul Rescue Bach Flower', price: 54.99, category: 'Remedii Bach Flower' },
        { name: 'Walnut Bach Flower', price: 37.99, category: 'Remedii Bach Flower' },
        { name: 'Mustard Bach Flower', price: 37.99, category: 'Remedii Bach Flower' },
        { name: 'Hornbeam Bach Flower', price: 37.99, category: 'Remedii Bach Flower' },
        { name: 'Olive Bach Flower', price: 37.99, category: 'Remedii Bach Flower' },
        { name: 'Amestec de uleiuri esențiale Bergamot-Neroli', price: 72.99, category: 'Aromaterapie' },
        { name: 'Roller aromatic "Lift Me Up" (lămâie și rozmarin)', price: 41.99, category: 'Aromaterapie' },
        { name: 'Roller aromatic "Soothing & Smoothing"', price: 41.99, category: 'Aromaterapie' },
        { name: 'Amestec de ulei de corp cu citrice', price: 59.99, category: 'Aromaterapie' },
        { name: 'Difuzor de uleiuri esențiale/Lampă parfum', price: 101.99, category: 'Echipament' }
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
                    🌅 Sprijinul natural al depresiei și stării de spirit
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Abordare comprehensivă pentru bunăstarea emoțională folosind nutrienți esențiali, remedii naturale și aromaterapie pentru ridicarea dispoziției
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🐟 Dozaj terapeutic Omega-3 (Cel mai important!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Doza terapeutică zilnică:</strong> 2-3g de DHA/EPA zilnic pentru depresie
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Cantități echivalente:</strong> Aceasta echivalează cu aproximativ 6-9g de ulei de pește, sau 12 capsule din majoritatea suplimentelor comerciale
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Verificați suplimentul:</strong> Conținutul individual al suplimentului variază foarte mult - verificați întotdeauna conținutul de DHA/EPA pe produsul dumneavoastră specific
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Zilele cu fructe de mare:</strong> În zilele când mâncați o porție bună de fructe de mare, săriți suplimentul. În toate celelalte zile, luați doza completă.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Bazat pe dovezi:</strong> Acest lucru poate părea mult, dar este doza terapeutică necesară care a arătat efecte pozitive în studiile relevante despre depresie.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦋 Analize de sânge esențiale și funcția tiroidă
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Testarea tiroidei:</strong> Verificați-vă nivelurile T3, T4 și TSH dacă nu s-a făcut niciodată înainte sau dacă experimentați simptome de "mișcare lentă"
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Semnele hipotiroidismului:</strong> Digestie lentă, metabolism lent, dispoziție lentă, gânduri lente, mâini/picioare permanent reci, păr cu creștere lentă
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Sprijinul tiroidei:</strong> Pentru funcția optimă a tiroidei, asigurați un aport adecvat de iod și seleniu
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Tiroida are o influență masivă asupra energiei, vitalității și bucuriei dumneavoastră - nu neglijați această conexiune crucială!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🩸 Testarea fierului, feritinei și vitaminei D
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Fierul și feritina:</strong> Nivelurile scăzute vă fac apatic, obosit și slab. Verificați ambele niveluri dacă nu s-a făcut recent.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Legătura crucială a vitaminei D:</strong> Deficiența este un marker semnificativ la persoanele cu depresie, demonstrată în multe studii și recenzii
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Teoria depresiei de iarnă:</strong> Unii experți cred că depresia de iarnă se datorează în esență unui aport inadecvat de vitamina D în latitudinile noastre
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Verificați-vă nivelurile 25-OH vitamina D și luați supliment dacă sunteți în intervalul deficient.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦠 Conexiunea intestin-creier: Flora intestinală sănătoasă
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Producția de serotonină:</strong> O mare parte din producția de serotonină are loc în intestine
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Stabilitatea mentală:</strong> Flora intestinală sănătoasă este incredibil de importantă pentru bunăstarea emoțională
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Beneficii bazate pe dovezi:</strong> Luarea de probiotice poate avea efecte pozitive asupra depresiei și tulburărilor de anxietate.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Remedii homeopatice țintite
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Sepia:</strong> Pentru dezechilibrele emoționale ce se învârt în jurul temelor femei și maternitate
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Natrium Muriaticum:</strong> Pentru rigiditatea emoțională și nefericirea profund simțită
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Ignatia:</strong> După factori declanșatori emoționali cum ar fi situațiile de pierdere (moartea unei persoane dragi, separarea) sau dorul de casă după mutarea într-un alt oraș
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌸 Remedii Bach Flower pentru sprijin emoțional
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Opțiuni multiple de flori:</strong> Walnut, Aspen, Mustard, Hornbeam și Olive pot fi toate folosite pentru stările depresive
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Fiecare floare abordează aspecte diferite ale dezechilibrului emoțional - alegeți pe baza simptomelor și sentimentelor dumneavoastră specifice.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍊 Aromaterapie: Soarele într-o sticlă - Uleiuri de citrice
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Conexiunea cu citricele:</strong> Toate plantele citrice cresc în sudul însorit și stochează puterea încălzitoare, purtătoare de lumină a soarelui în fructele lor
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Darul unic al fiecărui ulei:</strong> Neroli stabilizează în timpul stresului emoțional profund • Bergamotul are efecte vesel antidepresive • Grapefruitului aduce curaj vesel • Mandarinul aduce bucurie copilărească • Lămâia aduce claritate proaspătă • Portocala dulce inspiră încredere în provocări noi
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Amestecul Bergamot-Neroli:</strong> Perfect pentru lampa dumneavoastră parfum pentru a umple spațiul cu energie înălțătoare de spirit
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Rollere aromate pentru uz zilnic:</strong> "Lift Me Up" cu lămâie și rozmarin pentru energie matinală, "Soothing & Smoothing" pentru consolarea de zi cu zi
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌟 Aplicarea și absorbția aromaterapiei
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Absorbția prin piele:</strong> Uleiurile esențiale sunt absorbite prin piele și ajung la sistemul circulator în 20 de minute
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Efectul asupra creierului:</strong> Prin sistemul circulator ajung la creier și pot influența direct dispoziția și starea emoțională
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Aplicați pe încheieturi, antebrate și pe piept pentru absorbție optimă și beneficii continue pe parcursul zilei.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ☀️ Strategii de stil de viață pentru ridicarea dispoziției
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Lumina solară dimineața:</strong> Ieșiți afară în primul rând dimineața pentru a regla ritmul circadian natural
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Mișcarea regulată:</strong> Chiar și o plimbare scurtă zilnică poate avea efecte antidepresive demonstrate științific
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Conexiunea socială:</strong> Menționați legăturile cu prietenii și familia - izolarea poate agrava depresia
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🎯 Când să căutați ajutor profesional
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Semne de alarmă:</strong> Gânduri de rănire a sinelui, izolare completă, incapacitatea de a funcționa zilnic
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Aceste remedii naturale sunt excelente ca sprijin, dar depresia gravă necesită îngrijire medicală profesională. Nu ezitați să cereți ajutor.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Protocolul complet de sprijin pentru dispoziție</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Zilnic: Omega-3 terapeutic 2-3g DHA/EPA, vitamina D, probiotice</li>
                                <li>După teste: Suplimente de fier, seleniu, iod după nevoie</li>
                                <li>Dimineața: Lumină solară naturală, rollere aromate "Lift Me Up"</li>
                                <li>Pe parcursul zilei: Difuzare cu amestec Bergamot-Neroli</li>
                                <li>Seara: Remedii homeopatice sau Bach Flower după simptome</li>
                                <li>Continuu: Mișcare regulată, conexiune socială, managementul stresului</li>
                                <li>Monitorizare: Urmărirea simptomelor și căutarea ajutorului profesional când este necesar</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Consultați medicul înainte de a lua doze mari de Omega-3, mai ales dacă luați anticoagulante</li>
                    <li>Testele de sânge ar trebui interpretate de un medic calificat</li>
                    <li>Unele suplimente pot interacționa cu medicamentele antidepresive - verificați cu medicul</li>
                    <li>Căutați ajutor de urgență imediat pentru gânduri suicidare sau planuri de auto-vătămare</li>
                    <li>Depresia severă necesită supraveghere medicală profesională</li>
                    <li>Nu opriți medicamentele prescrise fără a consulta medicul</li>
                    <li>Remediile naturale sunt suplimentare la, nu înlocuitoare pentru, îngrijirea medicală profesională</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CalfCramps_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Supliment de magneziu (tablete 300mg)', price: 19.99, category: 'Minerale' },
        { name: 'Clorură de magneziu (găleată 4kg)', price: 39.99, category: 'Săruri de baie' },
        { name: 'Supliment de calciu (600mg)', price: 16.99, category: 'Minerale' },
        { name: 'Supliment de zinc (15mg)', price: 14.99, category: 'Minerale' },
        { name: 'Vitamina D3 (5000 UI)', price: 24.99, category: 'Vitamine' },
        { name: 'Sare de mare nerafinată (1kg)', price: 8.99, category: 'Medicină naturală' },
        { name: 'Ulei de relaxare cu lavandă', price: 18.99, category: 'Uleiuri esențiale' },
        { name: 'Ulei esențial pur de lavandă', price: 22.99, category: 'Uleiuri esențiale' },
        { name: 'Lighean pentru baie de picioare (mare)', price: 25.99, category: 'Echipament' },
        { name: 'Termometru pentru baie', price: 12.99, category: 'Echipament' },
        { name: 'Pahar de măsurat (pentru magneziu)', price: 7.99, category: 'Echipament' }
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
                    🦵 Tratamentul natural al crampelor musculare
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Abordați cauzele profunde ale crampelor musculare cu minerale esențiale și terapii calmante pentru o ușurare durabilă
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Magneziul - Mineralul cheie pentru funcția musculară
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce este crucial magneziul:</strong> Magneziul este mineralul cheie pentru comportamentul fiziologic al contracției musculare și prevenirea crampelor
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Suplimentarea orală:</strong> Luați 300mg magneziu înainte de culcare timp de câteva zile când experimentați crampe
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Menținerea:</strong> Continuați cu suplimentarea regulată de magneziu pentru a preveni episoadele viitoare
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Sfat pro:</strong> Luarea magneziului înainte de culcare nu numai că ajută la prevenirea crampelor nocturne, dar promovează și o calitate mai bună a somnului.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Baie de picioare cu magneziu pentru ușurare imediată
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Pregătirea:</strong> Adăugați o ceașcă bună de clorură de magneziu în apă caldă într-un lighean pentru baie de picioare
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Temperatura:</strong> Apa ar trebui să fie cel puțin 37°C pentru o absorbție optimă
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Durata:</strong> Înmuiați picioarele și gambele timp de 15-20 de minute
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Opțiune economică:</strong> Clorura de magneziu este disponibilă ieftin online în găleți de 4kg, oferind o valoare excelentă pentru folosirea regulată.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Suplimentarea zilnică esențială cu sare
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Necesitatea zilnică:</strong> Suplimentați aportul zilnic de sare cu cel puțin 1 lingurită pe zi
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Calitatea contează:</strong> Folosiți sare de mare nerafinată pentru un conținut mineral optim
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Notă:</strong> Informații mai detaliate despre necesarul de sare pot fi găsite în secțiuni specializate despre preeclampsie și echilibrul salin.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🦴 Nutrienți de sprijin pentru sănătatea musculară
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Calciu:</strong> Esențial pentru ciclurile adecvate de contracție și relaxare musculară
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Zinc:</strong> Cofactor important în metabolismul și procesele de reparare musculară
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Vitamina D:</strong> Crucială pentru absorbția calciului și funcția musculară generală - deficiența poate contribui la crampe și slăbiciune musculară
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Terapia cu masaj cu ulei de lavandă
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Relaxarea musculară:</strong> Uleiul de lavandă relaxează în mod natural mușchii picioarelor și gambelor
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Tehnica de aplicare:</strong> Masaj blând cu ulei de relaxare cu lavandă, concentrându-vă pe zonele cu crampe
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Momentul:</strong> Aplicați înainte de culcare pentru prevenție, sau în timpul crampelor pentru ușurare imediată
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Combinația dintre masajul blând și proprietățile naturale de relaxare musculară ale lavandei oferă atât confort imediat, cât și beneficii pe termen lung.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🏃‍♀️ Strategii suplimentare de prevenție
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Hidratarea:</strong> Asigurați-vă un aport adecvat de apă pe parcursul zilei
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Întinderi blânde:</strong> Întinderi regulate ale gambelor înainte de culcare și la trezire
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Terapia cu căldură:</strong> Compresă caldă sau pernă încălzită pe mușchii afectați poate oferi ușurare suplimentară
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Protocolul complet anti-crampe</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>Seara: Supliment de magneziu 300mg, masaj cu ulei de lavandă</li>
                                <li>Înainte de culcare: Baie de picioare cu magneziu (15-20 minute la 37°C+)</li>
                                <li>Zilnic: 1+ lingurița sare nerafinată, hidratare adecvată</li>
                                <li>Continuu: Suplimentare cu calciu, zinc și vitamina D</li>
                                <li>Prevenție: Întinderi blânde regulate ale gambelor, echilibru adecvat al electroliților</li>
                                <li>În timpul crampelor: Masaj imediat cu lavandă, întinderi blânde</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Începeți cu doze mai mici de magneziu dacă experimentați tulburări digestive</li>
                    <li>Consultați furnizorul de servicii medicale dacă crampele persistă în ciuda tratamentului</li>
                    <li>Monitorizați aportul de sare dacă aveți tensiune arterială mare sau probleme cardiace</li>
                    <li>Testați temperatura băii de picioare pentru a evita arsurile</li>
                    <li>Dacă crampele sunt frecvente sau severe, excludeți afecțiuni medicale subiacente</li>
                    <li>Unele medicamente pot epuiza magneziul - discutați cu medicul dumneavoastră</li>
                    <li>Femeile însărcinate ar trebui să consulte furnizorul de servicii medicale înainte de schimbări în suplimente</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CirculatoryProblems_RO = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Ciorapi de compresie (gradați 15-20 mmHg)', price: 29.99, category: 'Suport medical' },
        { name: 'Ciorapi de compresie (gradați 20-30 mmHg)', price: 39.99, category: 'Suport medical' },
        { name: 'Cafea de înaltă calitate (bio)', price: 16.99, category: 'Stimulente naturale' },
        { name: 'Lighean mare/Insert pentru chiuvetă (pentru băi de brațe)', price: 24.99, category: 'Echipament' },
        { name: 'Termometru pentru apă', price: 12.99, category: 'Echipament' },
        { name: 'Pulbere de electroliți (naturală)', price: 22.99, category: 'Suport hidratare' },
        { name: 'Sticlă mare de apă (1L cu măsurători)', price: 18.99, category: 'Suport hidratare' },
        { name: 'Supliment Ginkgo Biloba', price: 24.99, category: 'Suport circulație' },
        { name: 'Extract de castane sălbatice', price: 19.99, category: 'Suport circulație' },
        { name: 'Supliment vitamina E (circulație)', price: 16.99, category: 'Suport circulație' },
        { name: 'Cronometru (pentru tratamente)', price: 9.99, category: 'Echipament' },
        { name: 'Pantofi confortabili de plimbare', price: 79.99, category: 'Echipament exerciții' }
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
                    💓 Tratamentul natural al problemelor circulatorii
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Îmbunătățiți circulația sanguină și sprijiniți sistemul venos folosind metode naturale, hidratare și stimulare blândă
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
                        📋 Instrucțiuni
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
                        🛒 Lista de cumpărături
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Protocolul de tratament:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💧 Hidratarea esențială pentru volumul sanguin
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>De ce contează hidratarea:</strong> Băutul multor fluide este important pentru ca sângele să circule bine și să-și mențină volumul
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Obiectivul zilnic:</strong> Țintește cel puțin 8-10 pahare de apă pe parcursul zilei
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Calitatea contează:</strong> Folosește apă filtrată și consideră adăugarea de electroliți naturali pentru o absorbție mai bună
                                </p>
                            </div>
                            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#2d5016' }}>
                                    <strong>Sfat pro:</strong> Începeți ziua cu un pahar mare de apă pentru a stimula circulația și a vă rehidrata după postul nocturn.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧦 Ciorapi de compresie pentru suportul venos
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Cum funcționează:</strong> Ciorapii de compresie împiedică sângele să se acumuleze în jumătatea inferioară a corpului și apoi să lipsească sângele din partea superioară a creierului
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Beneficiu surprinzător:</strong> Multe femei se simt cumva mai în formă cu ciorapii. Ei sprijină de asemenea eficient sistemul venos
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Nivelurile de compresie:</strong> Începeți cu 15-20 mmHg pentru probleme ușoare, 20-30 mmHg pentru probleme de circulație mai semnificative
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Când să-i purtați:</strong> Puneți-i primul lucru dimineața înainte de a vă ridica din pat, purtați-i pe parcursul zilei pentru beneficiu maxim
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ☕ Cafeaua strategică de dimineață pentru circulație
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Conexiunea cu circulația:</strong> O ceașcă de cafea dimineața este permisă și uneori oferă impulsul necesar pentru sistemul dvs. circulator
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Momentul contează:</strong> Beți cafeaua devreme dimineața pentru a maximiza beneficiile circulatorii fără a afecta somnul
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Alegerea calității:</strong> Alegeți cafea organică și evitați cantitățile excesive - o ceașcă oferă stimularea benefică de care aveți nevoie
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥶 Băi reci de brațe - "Ceașca de cafea" Kneipp
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Tehnica:</strong> Umpleți bine chiuveta cu apă rece, nu înghețată, și înmuiați brațele în ea timp de jumătate de minut
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Temperatura apei:</strong> Rece dar confortabilă - în jur de 15-18°C este ideal
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Frecvența:</strong> Puteți repeta acest lucru de câteva ori pe parcursul dimineții pentru beneficii continue ale circulației
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>De ce funcționează:</strong> Apa rece stimulează fluxul sanguin și oferă un efect vigorizant similar cu cafeina - de aici numele "ceașca de cafea Kneipp"
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚶‍♀️ Exerciții cu aer proaspăt pentru stimularea circulației
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rutina matinală:</strong> Faceți o plimbare scurtă și energică în jurul blocului dimineața și lăsați prospețimea zilei să vă învăluie
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Durata:</strong> Chiar și 10-15 minute de mers energic poate îmbunătăți semnificativ circulația
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Beneficii:</strong> Aerul proaspăt combinat cu mișcarea oferă oxigen sângelui și stimulează circulația generală
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Practică pe tot parcursul anului:</strong> Faceți din aceasta un obicei zilnic indiferent de vreme - îmbrăcați-vă corespunzător și bucurați-vă de efectele vigorizante
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Suplimente naturale de sprijin pentru circulație
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Ginkgo Biloba:</strong> Plantă tradițională cunoscută că sprijină circulația periferică și fluxul sangvin către extremități
                                </p>
                                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>
                                    <strong>Extract de castane sălbatice:</strong> Benefic în mod specific pentru circulația venoasă și reducerea greutății picioarelor
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Vitamina E:</strong> Sprijină funcția sănătoasă a vaselor de sânge și sănătatea cardiovasculară generală
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💪 Stimulatoare suplimentare ale circulației
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Ridicarea picioarelor:</strong> Ridicați picioarele deasupra nivelului inimii timp de 15-20 de minute zilnic
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Evitați șederea prelungită:</strong> Luați pauze de mișcare la fiecare oră dacă aveți un job la birou
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Contrastul de temperatură:</strong> Alternați între apă caldă și rece în timpul dușurilor pentru a stimula circulația
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>💡 Protocolul complet zilnic de circulație</h4>
                            <ul style={{ margin: '0', paddingLeft: '20px', color: '#2d5016', fontSize: '14px', lineHeight: '1.6' }}>
                                <li>La trezire: Puneți ciorapii de compresie înainte să vă ridicați</li>
                                <li>Dimineața: Pahar mare de apă, ceașca strategică de cafea</li>
                                <li>Dimineața devreme: Băi reci de brațe (metoda Kneipp) - repetați de 2-3 ori</li>
                                <li>Rutina matinală: Plimbare energică de 10-15 minute la aer proaspăt</li>
                                <li>Pe parcursul zilei: Hidratare regulată, pauze de mișcare la fiecare oră</li>
                                <li>Seara: Ridicarea picioarelor timp de 15-20 de minute înainte de culcare</li>
                                <li>Zilnic: Suplimente de sprijin pentru circulație după recomandări</li>
                            </ul>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Lista de cumpărături și ingrediente:</h3>
                        
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
                                        {ingredient.price} RON
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
                                🛒 Articolele nu sunt încă disponibile în magazinul nostru
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Folosiți lista de cumpărături pentru alte magazine!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Siguranță și precauții</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Consultați furnizorul de servicii medicale înainte de a folosi ciorapi de compresie dacă aveți diabet sau boală arterială periferică</li>
                    <li>Începeți cu temperaturi blânde ale apei reci și scădeți treptat pe măsură ce toleranța se construiește</li>
                    <li>Monitorizați tensiunea arterială dacă aveți afecțiuni cardiovasculare</li>
                    <li>Opriți exercițiile imediat dacă experimentați dureri în piept, amețeli sau scurtarea neobișnuită a respirației</li>
                    <li>Ciorapii de compresie ar trebui să fie măsurați corespunzător - luați în considerare măsurarea profesională</li>
                    <li>Unele suplimente pentru circulație pot interacționa cu medicamentele anticoagulante</li>
                    <li>Căutați atenție medicală pentru schimbări bruște în circulație, amorțeală sau durere severă în picioare</li>
                </ul>
            </div>
        </div>
    );
};