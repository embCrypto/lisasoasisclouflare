import React, { useState } from 'react';

export const NatRemRecipe_Cold_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Zink-Lutschtabletten (10mg)', price: 12.99, category: 'Nahrungsergänzung' },
        { name: 'Vitamin C (1000mg Tabletten)', price: 15.49, category: 'Nahrungsergänzung' },
        { name: 'Getrockneter Thymian', price: 4.99, category: 'Kräuter' },
        { name: 'Getrocknete Lindenblüten', price: 8.99, category: 'Kräuter' },
        { name: 'Getrocknete Holunderblüten', price: 7.99, category: 'Kräuter' },
        { name: 'Propolis Tinktur', price: 18.99, category: 'Naturheilkunde' },
        { name: 'Rotlichtlampe', price: 89.99, category: 'Gerät' },
        { name: 'Badethermometer', price: 12.99, category: 'Gerät' }
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
                    🤧 Erkältung & Infekt-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Bewährte natürliche Methoden zur Bekämpfung von Erkältungen und Stärkung der Immunität bei ersten Anzeichen einer Infektion
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Ansteigendes Bad
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Bei ersten Infektzeichen:</strong> Baden Sie bei 37°C (98,6°F) und fügen Sie allmählich heißes Wasser hinzu, bis Sie 39°C (102°F) erreichen. Diese Temperatur nicht überschreiten.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Alternative:</strong> Fußbad mit derselben Temperatursteigerung, falls kein Vollbad möglich ist.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Nach dem Bad:</strong> Warm einpacken und sofort ins Bett. Ruhe oder Schlaf sind für beste Ergebnisse unverzichtbar.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Hochdosis Zink & Vitamin C
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anfangsdosis:</strong> 50-75mg Zink + 1000mg Vitamin C am Abend
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Nachbehandlung:</strong> 10mg Zink-Lutschtabletten, 6x täglich für mehrere Tage
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Der lokale Schleimhautkontakt durch Lutschtabletten ist vorteilhaft. Zink kann laut Cochrane-Reviews die Erkältungsdauer verkürzen.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Thymian & Myrthe Bad
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Sanftere Alternative zum ansteigenden Bad. Sicher für Kinder und Schwangere. Getrockneten Thymian und Myrthe zum warmen Badewasser geben.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍵 Heilkräutertee
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rezept:</strong> Gleiche Teile Linden- und Holunderblütentee, mit Thymian bei Husten
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Warm trinken und danach sofort ins Bett gehen.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍲 Omas Hühnersuppe
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Auch "jüdisches Penicillin" genannt - wissenschaftlich erwiesenermaßen köstlich, beruhigend und heilend bei Erkältungssymptomen.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Propolis-Behandlung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Ausgezeichnet bei Mund-, Hals- und Bronchialinfektionen. Starke lokale antivirale Wirkung, besonders effektiv bei Lippenherpes. So wirksam wie Melissenöl.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Rotlichttherapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    <strong>Absolutes Lieblings-Heilmittel!</strong> Rotlicht überall dort anwenden, wo es gebraucht wird: Nasennebenhöhlen, Brust, Rücken oder Ohr. Fördert die Heilung und reduziert Entzündungen.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei ansteigenden Bädern 39°C (102°F) nicht überschreiten</li>
                    <li>Hochdosis Zink sollte nur vorübergehend eingenommen werden - bei längerer Anwendung Arzt konsultieren</li>
                    <li>Schwangere sollten vor hochdosierten Nahrungsergänzungsmitteln den Arzt konsultieren</li>
                    <li>Kinder benötigen angepasste Dosierungen - Kinderarzt konsultieren</li>
                    <li>Bei Verschlechterung oder länger als 7 Tage anhaltenden Symptomen ärztliche Hilfe aufsuchen</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Sniffles_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Meersalz (unraffiniert)', price: 6.99, category: 'Naturheilkunde' },
        { name: 'Angelikasalbe (Ingeborg Stadelmann)', price: 24.99, category: 'Naturheilkunde' },
        { name: 'Geschroteter Leinsamen', price: 8.99, category: 'Naturheilkunde' },
        { name: 'Rotlichtlampe', price: 89.99, category: 'Gerät' },
        { name: 'Nasendusche', price: 15.99, category: 'Gerät' },
        { name: 'Große Schüssel (für Dampf)', price: 12.99, category: 'Gerät' },
        { name: 'Baumwollhandtücher (2er Pack)', price: 19.99, category: 'Gerät' }
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
                    🤧 Schnupfen & Nasennebenhöhlen-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Befreiung der Nase und Beruhigung entzündeter Nasennebenhöhlen
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💨 Klassisches Dampfbad
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Vorbereitung:</strong> Große Schüssel mit kochendem Wasser (oder heißem Kräutertee) füllen. 2-3 Esslöffel Salz hinzufügen.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Über die Schüssel beugen, Handtuch über Kopf und Schüssel legen für ein Dampfzelt. 5-10 Minuten tief einatmen.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Nach der Behandlung:</strong> Mütze aufsetzen oder Kopf in Handtuch-Turban wickeln und sofort ins Bett.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Wichtig:</strong> Vorsicht mit heißem Dampf, um Verbrennungen zu vermeiden. Augen während der Behandlung geschlossen halten.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Angelikasalbe Anwendung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Angelikasalbe (Ingeborg Stadelmann) direkt auf die Nasenlöcher und unter die Nase auftragen.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Diese spezielle Salbe hilft beim Öffnen der Nasenwege und beruhigt gereizte Schleimhäute.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Rotlicht-Nasennebenhöhlen-Therapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>
                                    Rotlicht direkt auf die Nasennebenhöhlenbereiche (Stirn, Wangen, Nasenrücken) für 10-15 Minuten anwenden. 
                                    Dies hilft, Entzündungen zu reduzieren und Nasennebenhöhlenschmerzen natürlich zu lindern.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Warme Leinsamen-Gesichtsmaske
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> Aus geschrotetem Leinsamen durch allmähliche Zugabe von warmem Wasser eine streichfähige Paste herstellen.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Wie eine Gesichtsmaske auf schmerzende Nasennebenhöhlenbereiche (Stirn, Wangen, um die Nase) auftragen.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Die warme, feuchte Wärme bietet sehr angenehme Linderung und hilft, Entzündungen zu reduzieren.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚿 Regelmäßige Nasenspülung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Bei allen Nasenproblemen:</strong> Häufige Infekte, Nasennebenhöhlenentzündung, allergische Schwellungen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Methode:</strong> Nasendusche mit lauwarmem Salzwasser (1/4 TL Salz pro Tasse Wasser). 
                                    Jedes Nasenloch sanft spülen, Wasser durch das andere Nasenloch ausfließen lassen.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Vorteile:</strong> Befeuchtet Schleimhäute, entfernt zähen Schleim, Pollen und Stadtstaub, 
                                    hilft den Flimmerhärchen bei der natürlichen Reinigungsfunktion.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei Dampfbehandlungen vorsichtig sein, um Verbrennungen zu vermeiden - Temperatur vorher testen</li>
                    <li>Nur steriles oder destilliertes Wasser für Nasenspülungen verwenden</li>
                    <li>Nasendusche nach jedem Gebrauch gründlich reinigen</li>
                    <li>Bei anhaltenden oder sich verschlechternden Symptomen nach 7 Tagen Arzt aufsuchen</li>
                    <li>Behandlung bei unerwünschten Reaktionen sofort beenden</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_SoreThroat_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Salbei-Lutschtabletten (natürlich)', price: 8.99, category: 'Naturheilkunde' },
        { name: 'Manuka-Honig Lutschtabletten', price: 16.99, category: 'Naturheilkunde' },
        { name: 'Propolis-Lutschtabletten', price: 12.99, category: 'Naturheilkunde' },
        { name: 'Meersalz (unraffiniert)', price: 6.99, category: 'Naturheilkunde' },
        { name: 'Frischer Quark/Topfen', price: 4.99, category: 'Naturheilkunde' },
        { name: 'Apis Belladonna Globuli (Wala)', price: 24.99, category: 'Homöopathie' },
        { name: 'Baumwolltuch (für Umschläge)', price: 9.99, category: 'Gerät' },
        { name: 'Messbecher (250ml)', price: 7.99, category: 'Gerät' }
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
                    🤒 Halsschmerzen-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Beruhigung gereizter Halsschleimhaut und Entzündungslinderung mit sanften, wirksamen Behandlungen
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🍯 Heilende Lutschtabletten zur Speichelanregung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Warum Lutschen hilft:</strong> Lutschen regt die Speichelproduktion an, was genau das ist, was gereizte Schleimhäute zur Heilung brauchen.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Beste Optionen:</strong> Salbei-Lutschtabletten, Manuka-Honig-Lutschtabletten oder Propolis-Lutschtabletten - alle sind mild und beruhigend.
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Anwendung:</strong> Lutschtabletten tagsüber nach Bedarf langsam im Mund zergehen lassen.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Natürliche Heilung:</strong> Diese Lutschtabletten bieten sanfte, kontinuierliche Linderung und unterstützen den natürlichen Heilungsprozess des Körpers.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Salzwasser-Gurgeln
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rezept:</strong> 1 Teelöffel Salz in 250ml (1 Tasse) warmes Wasser einrühren
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Methode:</strong> 30 Sekunden gurgeln, dann ausspucken. 3-4 Mal pro Anwendung wiederholen.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    3-4 Mal täglich anwenden. Das Salzwasser hilft, Schwellungen zu reduzieren und Infektionen natürlich auszuleiten.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧀 Quark-Umschläge (Sehr empfehlenswert!)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Warum sie wirken:</strong> Quark-Umschläge sind sehr angenehm und ziehen buchstäblich alle Entzündung aus dem Gewebe heraus.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> Zimmerwarmen Quark auf ein Baumwolltuch streichen, etwa 1cm dick.
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Die Quark-Seite an den Hals legen, mit einem anderen Tuch fixieren.
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    20-30 Minuten oder bis der Quark sich warm anfühlt anlassen. Wirklich einen Versuch wert - bemerkenswert wirksam!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Schwere Mandelentzündung-Behandlung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Bei schweren Fällen mit Fieber:</strong> Apis Belladonna Globuli velati (Wala)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 5 Kügelchen mehrmals täglich im Mund zergehen lassen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Dieses homöopathische Mittel zielt speziell auf schwere Halsentzündungen und Fieber bei Mandelentzündung ab.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 99, 71, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 99, 71, 0.3)', marginTop: '10px' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8B0000' }}>
                                    <strong>Wichtig:</strong> Bei schwerer Mandelentzündung mit hohem Fieber umgehend einen Arzt aufsuchen, da möglicherweise eine Antibiotikabehandlung notwendig ist.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei hohem Fieber, Schluckbeschwerden oder Atemproblemen sofort ärztliche Hilfe aufsuchen</li>
                    <li>Nur lebensmitteltaugliches Salz zum Gurgeln verwenden</li>
                    <li>Quark-Umschläge mit frischen Anwendungen ersetzen - nicht wiederverwenden</li>
                    <li>Bei länger als 5 Tage anhaltenden Symptomen Arzt konsultieren</li>
                    <li>Bei schwerer Mandelentzündung ist eine professionelle medizinische Bewertung unerlässlich</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Constipation_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Getrocknete Pflaumen (ungeschwefelt)', price: 9.99, category: 'Naturheilkunde' },
        { name: 'Leinsamen (geschrotet)', price: 8.99, category: 'Naturheilkunde' },
        { name: 'Flohsamenschalen', price: 12.99, category: 'Naturheilkunde' },
        { name: 'Probiotika (hochdosiert)', price: 24.99, category: 'Nahrungsergänzung' },
        { name: 'Magnesium (400mg Kapseln)', price: 16.99, category: 'Nahrungsergänzung' },
        { name: 'Rizinusöl (kaltgepresst)', price: 14.99, category: 'Naturheilkunde' },
        { name: 'Große Glasflasche (1L)', price: 8.99, category: 'Gerät' },
        { name: 'Messbecher (500ml)', price: 9.99, category: 'Gerät' }
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
                    🚽 Verstopfung-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur sanften Wiederherstellung der Darmgesundheit und Förderung regelmäßiger Verdauung
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥤 Pflaumen-Einweich-Wasser
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> 8-10 getrocknete Pflaumen über Nacht in einem Glas Wasser einweichen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Morgens auf nüchternen Magen das Einweichwasser trinken und die aufgeweichten Pflaumen essen
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Wirkung:</strong> Die natürlichen Ballaststoffe und Sorbitol regen die Darmbewegung sanft an
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Tipp:</strong> Diese Methode ist besonders sanft und eignet sich für regelmäßige Anwendung.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌾 Leinsamen-Gel-Drink
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> 1 EL geschrotete Leinsamen in 250ml Wasser einrühren, 10 Minuten quellen lassen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Morgens und abends trinken, danach viel Wasser trinken
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Die Schleimstoffe machen den Stuhl weicher und erleichtern die Passage
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌱 Flohsamenschalen-Therapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 1 TL Flohsamenschalen in 250ml Wasser einrühren, sofort trinken
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Wichtig:</strong> Innerhalb von 1-2 Minuten trinken, danach 1-2 weitere Gläser Wasser
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Beginnen Sie mit einer kleinen Menge und steigern Sie langsam
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 Probiotika zur Darmgesundheit
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Hochwertiges Probiotikum täglich gemäß Herstellerangaben
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Stellt die natürliche Darmflora wieder her und unterstützt regelmäßige Verdauung
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ⚡ Magnesium-Supplementierung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 200-400mg Magnesium täglich, vorzugsweise abends
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Magnesium entspannt die Darmmuskulatur und zieht Wasser in den Darm
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛠️ Rizinusöl-Kur (Bei starker Verstopfung)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 1-2 EL Rizinusöl auf nüchternen Magen, nicht regelmäßig anwenden
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Wirkt meist innerhalb von 2-6 Stunden. Nur für gelegentliche Anwendung geeignet
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 99, 71, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 99, 71, 0.3)', marginTop: '10px' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8B0000' }}>
                                    <strong>Vorsicht:</strong> Rizinusöl nicht während Schwangerschaft verwenden. Bei chronischer Verstopfung Arzt konsultieren.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei Flohsamenschalen immer ausreichend Wasser trinken, um Darmverschluss zu vermeiden</li>
                    <li>Beginnen Sie mit kleinen Mengen und steigern Sie langsam</li>
                    <li>Rizinusöl nicht während Schwangerschaft oder bei entzündlichen Darmerkrankungen verwenden</li>
                    <li>Bei chronischer Verstopfung ärztliche Abklärung erforderlich</li>
                    <li>Bei starken Bauchschmerzen oder Blut im Stuhl sofort Arzt aufsuchen</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_Insomnia_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Baldrian Tinktur (hochdosiert)', price: 18.99, category: 'Naturheilkunde' },
        { name: 'Passionsblume Kapseln', price: 14.99, category: 'Naturheilkunde' },
        { name: 'Lavendel ätherisches Öl', price: 22.99, category: 'Aromatherapie' },
        { name: 'Melisse Tee (getrocknet)', price: 9.99, category: 'Kräuter' },
        { name: 'Kamille Tee (getrocknet)', price: 7.99, category: 'Kräuter' },
        { name: 'Magnesium (400mg Kapseln)', price: 16.99, category: 'Nahrungsergänzung' },
        { name: 'Aromadiffuser', price: 39.99, category: 'Gerät' },
        { name: 'Schlafmaske (Seide)', price: 19.99, category: 'Gerät' }
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
                    😴 Schlaflosigkeit-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Förderung erholsamen Schlafs und Beruhigung des Nervensystems für bessere Schlafqualität
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Baldrian-Tinktur (Sehr effektiv)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 20-30 Tropfen Baldrian-Tinktur 30-60 Minuten vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> In einem kleinen Glas Wasser verdünnt einnehmen
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Wirkung:</strong> Beruhigt das Nervensystem und fördert natürlichen Schlaf ohne Abhängigkeit
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Hinweis:</strong> Baldrian kann bei manchen Menschen anfangs aktivierend wirken - testen Sie die Wirkung erst am Wochenende.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌸 Passionsblume-Entspannung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 1-2 Kapseln Passionsblume 1-2 Stunden vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Besonders wirksam bei Einschlafproblemen durch Grübeln oder Angstzustände
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🫖 Beruhigender Abendtee
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Rezept:</strong> Gleiche Teile Melisse und Kamille, 1-2 TL pro Tasse
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> 10 Minuten ziehen lassen, warm trinken 1 Stunde vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Das warme Ritual und die beruhigenden Kräuter bereiten Körper und Geist auf den Schlaf vor
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌸 Lavendel-Aromatherapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> 3-5 Tropfen Lavendelöl im Aromadiffuser 30 Minuten vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Alternative:</strong> 1-2 Tropfen auf das Kopfkissen (nicht direkt auf die Haut)
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Der Lavendelduft wirkt wissenschaftlich nachweisbar beruhigend und schlaffördernd
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ⚡ Magnesium für Muskelentspannung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 200-400mg Magnesium 1-2 Stunden vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Entspannt die Muskeln und das Nervensystem, kann besonders bei Unruhe und Verspannungen helfen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌙 Optimale Schlafumgebung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dunkelheit:</strong> Schlafmaske oder verdunkelnde Vorhänge für komplette Dunkelheit
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Temperatur:</strong> Kühl (16-19°C), gut gelüftet
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Routine:</strong> Feste Zeiten einhalten und entspannende Aktivitäten vor dem Schlafengehen
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Baldrian kann bei manchen Menschen paradoxe (aktivierende) Wirkung haben</li>
                    <li>Nicht mit Alkohol oder anderen Beruhigungsmitteln kombinieren</li>
                    <li>Ätherische Öle nicht direkt auf die Haut auftragen</li>
                    <li>Bei chronischen Schlafproblemen ärztliche Abklärung erforderlich</li>
                    <li>In der Schwangerschaft vorherige Rücksprache mit Arzt oder Hebamme</li>
                </ul>
            </div>

            <div style={{ 
                marginTop: '30px', 
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '10px',
                borderTop: '3px solid #8fbc8f'
            }}>
                <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>Sicherheitshinweise & Quellenangabe</h4>
                <p style={{ 
                    color: '#4a6741', 
                    fontSize: '14px', 
                    margin: '0 0 15px 0',
                    lineHeight: '1.6'
                }}>
                    <strong>Wichtig:</strong> Natürliche Heilmittel können stark wirksam sein und Wechselwirkungen mit Medikamenten haben. 
                    Konsultieren Sie immer einen Arzt oder qualifizierten Heilpraktiker, besonders bei bestehenden Gesundheitsproblemen 
                    oder der Einnahme von Medikamenten. Diese Informationen dienen der Aufklärung und ersetzen keine medizinische Diagnose oder Behandlung.
                </p>
                
                <div style={{
                    background: 'rgba(143, 188, 143, 0.1)',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid rgba(143, 188, 143, 0.3)',
                    marginTop: '15px'
                }}>
                    <h5 style={{ color: '#2d5016', marginBottom: '8px', fontSize: '14px' }}>📚 Inspiriert von traditionellem Heilwissen</h5>
                    <p style={{ 
                        color: '#4a6741', 
                        fontSize: '13px', 
                        margin: '0',
                        lineHeight: '1.5',
                        fontStyle: 'italic'
                    }}>
                        Viele dieser natürlichen Heilmittel basieren auf traditionellem Wissen aus:<br/>
                        <strong>"Hebammenwissen für Mama & Baby - Naturheilkunde und ganzheitliche Begleitung"</strong><br/>
                        von Kareen Dannhauer, erschienen im Kösel Verlag.<br/>
                        <em>Ein umfassendes Werk über natürliche Heilung und ganzheitliche Betreuung aus der Hebammen-Praxis.</em>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const NatRemRecipe_Depression_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Johanniskraut Kapseln (900mg)', price: 19.99, category: 'Naturheilkunde' },
        { name: 'Omega-3 Kapseln (hochdosiert)', price: 24.99, category: 'Nahrungsergänzung' },
        { name: 'Vitamin D3 + K2 (4000 IE)', price: 16.99, category: 'Nahrungsergänzung' },
        { name: 'B-Komplex (hochdosiert)', price: 22.99, category: 'Nahrungsergänzung' },
        { name: 'Safran Extrakt Kapseln', price: 39.99, category: 'Naturheilkunde' },
        { name: 'Rosenwurz (Rhodiola) Extrakt', price: 29.99, category: 'Naturheilkunde' },
        { name: 'Tageslichtlampe (10.000 Lux)', price: 89.99, category: 'Gerät' },
        { name: 'Aromadiffuser', price: 39.99, category: 'Gerät' }
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
                    🌅 Depressive Verstimmungen - Natürliche Unterstützung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Stimmungsaufhellung und Unterstützung des emotionalen Gleichgewichts - als Ergänzung zur professionellen Behandlung
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <div style={{ background: 'rgba(255, 99, 71, 0.1)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255, 99, 71, 0.3)', marginBottom: '25px' }}>
                            <h4 style={{ color: '#8B0000', marginBottom: '10px', fontSize: '16px' }}>⚠️ Wichtiger Hinweis</h4>
                            <p style={{ margin: '0', fontSize: '14px', color: '#8B0000', lineHeight: '1.6' }}>
                                <strong>Depressionen sind ernste Erkrankungen, die professionelle Behandlung erfordern.</strong> Die folgenden natürlichen Ansätze sind als 
                                unterstützende Maßnahmen gedacht und ersetzen NIEMALS eine ärztliche oder psychotherapeutische Behandlung. Bei Suizidgedanken oder schweren 
                                depressiven Episoden sofort professionelle Hilfe suchen!
                            </p>
                        </div>

                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Natürliche Unterstützung:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Johanniskraut (Hypericum)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 300mg Johanniskraut-Extrakt 3x täglich (insgesamt 900mg)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Wirkung:</strong> Wissenschaftlich nachgewiesene stimmungsaufhellende Wirkung bei leichten bis mittelschweren Depressionen
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Wichtig:</strong> Wirkung tritt erst nach 2-4 Wochen regelmäßiger Einnahme ein
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Achtung:</strong> Johanniskraut kann viele Medikamente beeinflussen (Pille, Blutverdünner, etc.). Unbedingt Arzt konsultieren!
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🐟 Omega-3 Fettsäuren
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 1-2g EPA/DHA täglich (hochwertige Omega-3 Kapseln)
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Studien zeigen positive Wirkung auf Stimmung und Gehirnfunktion. Besonders EPA ist wichtig für die Stimmungsregulation
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ☀️ Vitamin D3 Supplementierung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 2000-4000 IE Vitamin D3 täglich (mit K2 für bessere Aufnahme)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Grund:</strong> Vitamin D-Mangel ist bei Depressionen sehr häufig
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Lassen Sie Ihren Vitamin D-Spiegel messen - Zielwert sollte 40-60 ng/ml sein
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💊 B-Vitamin-Komplex
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Hochdosierter B-Komplex täglich gemäß Herstellerangaben
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    B-Vitamine sind essentiell für Neurotransmitter-Produktion und Nervenfunktion
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌸 Safran-Extrakt
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 30mg Safran-Extrakt täglich
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Studien zeigen vergleichbare Wirkung zu manchen Antidepressiva bei leichten Depressionen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Rosenwurz (Rhodiola)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 300-400mg Rosenwurz-Extrakt morgens auf nüchternen Magen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Adaptogen, das bei Stress, Müdigkeit und depressiven Verstimmungen helfen kann
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                💡 Lichttherapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Täglich 30 Minuten vor einer 10.000 Lux Tageslichtlampe, am besten morgens
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Besonders effektiv:</strong> Bei saisonaler Depression (Winterdepression)
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Regelt den Biorhythmus und steigert die Serotonin-Produktion
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Wichtige Sicherheitshinweise</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li><strong>Bei Suizidgedanken oder schweren Depressionen SOFORT professionelle Hilfe suchen!</strong></li>
                    <li>Johanniskraut kann zahlreiche Medikamente beeinflussen - immer Arzt konsultieren</li>
                    <li>Diese natürlichen Mittel ersetzen KEINE professionelle Therapie</li>
                    <li>Änderungen erst nach Rücksprache mit behandelndem Arzt vornehmen</li>
                    <li>Bei Verschlechterung der Symptome sofortige ärztliche Hilfe</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CalfCramps_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Magnesium Kapseln (400mg)', price: 16.99, category: 'Nahrungsergänzung' },
        { name: 'Kalium Tabletten (99mg)', price: 12.99, category: 'Nahrungsergänzung' },
        { name: 'Tonic Water (Chinin)', price: 4.99, category: 'Naturheilkunde' },
        { name: 'Arnika Salbe', price: 14.99, category: 'Naturheilkunde' },
        { name: 'Pfefferminzöl (ätherisch)', price: 18.99, category: 'Aromatherapie' },
        { name: 'Wärmflasche', price: 12.99, category: 'Gerät' },
        { name: 'Massageball', price: 9.99, category: 'Gerät' },
        { name: 'Bittersalz (Epsom Salz)', price: 8.99, category: 'Naturheilkunde' }
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
                    🦵 Wadenkrämpfe-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Vorbeugung und Behandlung schmerzhafter Muskelkrämpfe in den Waden
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungs- & Vorbeugungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ⚡ Magnesium-Supplementierung (Vorbeugung)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 300-400mg Magnesium täglich, vorzugsweise abends vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Wirkung:</strong> Entspannt die Muskeln und beugt nächtlichen Wadenkrämpfen vor
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Tipp:</strong> Magnesium-Citrat oder -Glycinat haben bessere Bioverfügbarkeit
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Regelmäßigkeit:</strong> Die vorbeugende Wirkung tritt erst nach einigen Wochen regelmäßiger Einnahme ein.
                                </p>
                            </div>
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🥤 Chinin-Tonic Wasser
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> 200-250ml Tonic Water abends trinken (enthält natürliches Chinin)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Wirkung:</strong> Chinin kann bei manchen Menschen Muskelkrämpfe reduzieren
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Traditionelles Hausmittel, besonders bei nächtlichen Wadenkrämpfen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧂 Kalium-Ergänzung
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 99mg Kalium-Tabletten gemäß Herstellerangaben
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Kaliummangel kann zu Muskelkrämpfen beitragen. Auch kaliumreiche Lebensmittel (Bananen, Aprikosen) vermehrt essen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🛁 Warmes Bittersalz-Bad
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Zubereitung:</strong> 2-4 EL Bittersalz (Epsom Salz) in warmes Badewasser geben
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> 15-20 Minuten baden, besonders nach Sport oder bei wiederkehrenden Krämpfen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Magnesium wird über die Haut aufgenommen und entspannt die Muskeln direkt
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Arnika-Salbe Massage
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Arnika-Salbe sanft in die Wade einmassieren, besonders vor dem Schlafengehen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Arnika wirkt entzündungshemmend und durchblutungsfördernd
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                ❄️ Akutbehandlung während eines Krampfs
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>1. Schritt:</strong> Wade sanft dehnen - Zehen zu sich ziehen und Bein strecken
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>2. Schritt:</strong> Mit Massageball oder Händen sanft massieren
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>3. Schritt:</strong> Wärmflasche oder warmes Tuch auflegen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Nach dem Krampf: 1-2 Tropfen Pfefferminzöl mit Trägeröl verdünnt einmassieren
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🏃 Vorbeugende Maßnahmen
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Hydratation:</strong> Ausreichend Wasser trinken (2-3 Liter täglich)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dehnung:</strong> Regelmäßige Wadendehnungen, besonders vor dem Sport
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Aufwärmen:</strong> Vor sportlichen Aktivitäten immer aufwärmen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    <strong>Elektrolyte:</strong> Bei starkem Schwitzen Elektrolyte durch Getränke oder Nahrung ersetzen
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei häufigen oder sehr schmerzhaften Krämpfen ärztliche Abklärung erforderlich</li>
                    <li>Hohe Magnesiumdosen können Durchfall verursachen - Dosis anpassen</li>
                    <li>Pfefferminzöl immer verdünnt anwenden, nie pur auf die Haut</li>
                    <li>Chinin kann bei manchen Menschen Nebenwirkungen haben</li>
                    <li>Bei Krämpfen in anderen Körperregionen oder begleitenden Symptomen Arzt aufsuchen</li>
                </ul>
            </div>
        </div>
    );
};

export const NatRemRecipe_CirculatoryProblems_DE = ({ onAddToCart }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const ingredients = [
        { name: 'Ginkgo Kapseln (120mg)', price: 19.99, category: 'Naturheilkunde' },
        { name: 'Rosskastanien Extrakt', price: 16.99, category: 'Naturheilkunde' },
        { name: 'Omega-3 Kapseln (hochdosiert)', price: 24.99, category: 'Nahrungsergänzung' },
        { name: 'Knoblauch Kapseln (geruchlos)', price: 12.99, category: 'Naturheilkunde' },
        { name: 'Cayenne Pfeffer Kapseln', price: 14.99, category: 'Naturheilkunde' },
        { name: 'Kompressionsstrümpfe', price: 29.99, category: 'Gerät' },
        { name: 'Massagebürste (trocken)', price: 15.99, category: 'Gerät' },
        { name: 'Wechseldusch-Duschkopf', price: 35.99, category: 'Gerät' }
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
                    🫀 Durchblutungsstörungen-Behandlung
                </h2>
                <p style={{ color: '#4a6741', fontSize: '16px', fontStyle: 'italic' }}>
                    Natürliche Methoden zur Förderung der Durchblutung und Stärkung des Herz-Kreislauf-Systems
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
                        📋 Anleitung
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
                        🛒 Einkaufsliste
                    </button>
                </div>

                {showInstructions && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Behandlungsprotokoll:</h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌿 Ginkgo biloba Extrakt
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 120mg Ginkgo-Extrakt täglich (standardisiert auf 24% Flavonglykoside)
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Wirkung:</strong> Verbessert Mikrozirkulation und Durchblutung, besonders im Gehirn und in den Extremitäten
                                </p>
                                <p style={{ margin: '0', lineHeight: '1.6', color: '#4a6741' }}>
                                    <strong>Wichtig:</strong> Wirkung tritt erst nach 6-8 Wochen regelmäßiger Einnahme ein
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                <p style={{ margin: '0', fontSize: '14px', color: '#8a6914' }}>
                                    <strong>Vorsicht:</strong> Ginkgo kann blutverdünnend wirken - bei Einnahme von Gerinnungshemmern Arzt konsultieren.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌰 Rosskastanien-Extrakt (bei Venenproblemen)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 300mg Rosskastanien-Extrakt 2x täglich
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendungsgebiet:</strong> Besonders effektiv bei Krampfadern, schweren Beinen und Venenschwäche
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Stärkt die Venenwände und reduziert Schwellungen in den Beinen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧄 Knoblauch für Gefäßgesundheit
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 600-900mg Knoblauch-Extrakt täglich oder 2-3 frische Zehen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Unterstützt Herzgesundheit, kann Blutdruck und Cholesterin positiv beeinflussen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🌶️ Cayenne Pfeffer (Wärmetherapie)
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Dosierung:</strong> 1-2 Kapseln Cayenne Pfeffer täglich zu den Mahlzeiten
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Regt die Durchblutung an und wärmt von innen - besonders hilfreich bei kalten Händen und Füßen
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🚿 Kneipp'sche Wechselduschen
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Methode:</strong> Warm duschen, dann 30 Sekunden kalt, wieder warm, erneut kalt - 3x wiederholen
                                </p>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Besonders:</strong> Beine und Arme abwechselnd warm-kalt behandeln
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Trainiert die Gefäße und verbessert die Durchblutungsregulation
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧽 Trockenbürsten-Massage
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Technik:</strong> Täglich morgens mit trockener Massagebürste von den Füßen herzwärts massieren
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Regt Lymphfluss und Durchblutung an, strafft die Haut
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: '#4a6741', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧦 Kompressionstherapie
                            </h4>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                                <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
                                    <strong>Anwendung:</strong> Kompressionsstrümpfe bei langem Stehen oder Sitzen tragen
                                </p>
                                <p style={{ margin: '0', fontSize: '14px', color: '#4a6741', fontStyle: 'italic' }}>
                                    Unterstützt den venösen Rückfluss und reduziert Beinbeschwerden
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {showIngredients && (
                    <div style={{ background: 'rgba(143, 188, 143, 0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2d5016', marginBottom: '20px' }}>Einkaufsliste & Zutaten:</h3>
                        
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
                                        € --
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
                                🛒 Artikel sind derzeit nicht in unserem Shop verfügbar
                            </button>
                            <p style={{ margin: '10px 0 0 0', color: '#4a6741', fontSize: '14px' }}>
                                - Nutzen Sie gerne die Einkaufsliste für andere Geschäfte!
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
                <h4 style={{ color: '#8a6914', marginBottom: '10px', fontSize: '16px' }}>⚠️ Sicherheit & Vorsichtsmaßnahmen</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#8a6914', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Bei schweren Durchblutungsstörungen immer ärztliche Diagnose und Behandlung erforderlich</li>
                    <li>Ginkgo und Knoblauch können blutverdünnend wirken - bei Medikamenteneinnahme Arzt konsultieren</li>
                    <li>Wechselduschen bei Herzproblemen vorher mit Arzt besprechen</li>
                    <li>Bei plötzlichen, starken Schmerzen oder Verfärbungen sofort Notarzt rufen</li>
                    <li>Kompressionsstrümpfe nur nach fachlicher Beratung verwenden</li>
                </ul>
            </div>
        </div>
    );
};

    