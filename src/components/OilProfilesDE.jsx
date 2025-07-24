import React from 'react';
import lavendelImage from '../assets/plants/lavendel_pic.jpeg';
import lemonImage from '../assets/plants/lemonTree_pic.jpeg';
import mandarinImage from '../assets/plants/mandarinTree_pic.png';
import pineTreeImage from '../assets/plants/pineTree_pic.jpeg';
import teaTree from '../assets/plants/teaTree_pic.png';
import myrrhImage from '../assets/plants/myrrhField_pic.jpeg';
import sandalwoodImage from '../assets/plants/sandalwoodField_pic.jpeg';
import gingerImage from '../assets/plants/gingerField_pic.png';
import rosemaryImage from '../assets/plants/rosemaryField_pic.jpeg';
import clarySageImage from '../assets/plants/clarySage_pic.jpeg';
import spanishSageImage from '../assets/plants/spanishSage_pic.png';

const EssentialOilProfile_Lavender_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lavendelImage} 
                        alt="Lavendelpflanze" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Lavendel</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Lavandula angustifolia, syn. L. officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Echter Lavendel, Englischer Lavendel, Gartenlavendel, Schmalblättriger Lavendel
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Die Pflanze wächst typischerweise zu einer bescheidenen Höhe von einem bis drei Fuß und produziert 
                        schlanke, aromatische Blätter und kleine röhrenförmige Blüten, die in eleganten Ähren angeordnet sind. 
                        Ihre Blüten variieren in der Farbe von sanftem Lila bis zu tiefem Violett und verströmen einen süßen, 
                        krautigen Duft, der Lavendel seit Jahrhunderten zu einem Favoriten in Gärten, Kräutermedizin und 
                        Parfümerie gemacht hat.
                    </p>
                    <p>
                        Die Geschichte des Lavendels ist sowohl reich als auch weitreichend. Seine Verwendung lässt sich über 
                        2.500 Jahre zurückverfolgen zu den alten Zivilisationen Ägyptens, Griechenlands und Roms. Die Ägypter 
                        schätzten ihn für Einbalsamierungs- und Kosmetikzwecke und stellten sogar Töpfe mit lavendelduftenden 
                        Salben in die Gräber der Pharaonen. In der klassischen Antike verwendeten Griechen und Römer Lavendel 
                        zum Parfümieren ihrer Bäder, Bettwäsche und Häuser. Der Name „Lavendel" selbst leitet sich vom 
                        lateinischen lavare ab, was „waschen" bedeutet – eine Anspielung auf seine reinigenden und läuternden Eigenschaften.
                    </p>
                    <p>
                        Während des Mittelalters wurde Lavendel ein fester Bestandteil in klösterlichen Heilgärten in ganz Europa. 
                        Man glaubte, dass er böse Geister und Krankheiten abwehrt, und er wurde häufig auf Böden gestreut, um 
                        unangenehme Gerüche zu überdecken und Insekten abzuschrecken. Bis zur Renaissance war Lavendel fest als 
                        sowohl medizinische als auch Zierpflanze etabliert, geschätzt von Adel und einfachen Leuten gleichermaßen. 
                        Königin Elisabeth I. war besonders von Lavendel angetan und verlangte berichten zufolge täglich eine 
                        frische Versorgung für ihren Tisch.
                    </p>
                    <p>
                        Lavendelsäckchen wurden verwendet, um Bettwäsche zu parfümieren und Motten, Flöhe und andere Schädlinge 
                        abzuschrecken. Seifenhersteller William von Yardley erkannte etwas Gutes, als er es sah (oder roch) und 
                        schaffte es, ein Monopol auf Englands Lavendel zu erhalten. Da sie sich nicht von dieser geliebten 
                        Gartenpflanze trennen wollten, brachten die Pilger sie mit nach Nordamerika.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation der Blütenspitzen
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Farblos bis blassgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 2-3 Jahre oder etwas länger
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p>Verwenden Sie Lavendelöl nicht, wenn Sie Beruhigungsmedikamente einnehmen.</p>
                        <p>
                            <strong>Wichtig:</strong> Es gibt verschiedene Lavendelarten. Spanischer Lavendel (L. stoechas) ist 
                            stimulierend und hat die gegenteilige Wirkung von Englischem Lavendel. Stellen Sie sicher, dass Sie 
                            den richtigen Typ für therapeutische Zwecke kaufen.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Krautig-blumig mit balsamischen holzigen Untertönen
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Lorbeer</span>
                            <span className="oil-tag">Schwarzer Pfeffer</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Zitrusöle</span>
                            <span className="oil-tag">Zypresse</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Majoran</span>
                            <span className="oil-tag">Pfefferminze</span>
                            <span className="oil-tag">Kiefer</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Vetiver</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Lavendel ist eines der vielseitigsten ätherischen Öle, verwendet für eine Vielzahl von Beschwerden:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental und emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Angst</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Schlaflosigkeit</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Kopfschmerzen</span>
                                <span className="condition-tag">Migräne</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Haut und Wunden</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Verbrennungen</span>
                                <span className="condition-tag">Schnitte und Kratzer</span>
                                <span className="condition-tag">Akne</span>
                                <span className="condition-tag">Ekzem</span>
                                <span className="condition-tag">Schuppenflechte</span>
                                <span className="condition-tag">Narben</span>
                                <span className="condition-tag">Sonnenbrand</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Halsschmerzen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskulatur und Schmerzen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Verstauchungen</span>
                                <span className="condition-tag">Entzündungen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🧪 Historische Entdeckung</h3>
                    <p className="historical-note">
                        Der französische Chemiker René-Maurice Gattefossé entdeckte die Heilkraft des Lavendelöls neu, 
                        nachdem er sich die Hand im Labor verbrannt hatte. Als Anerkennung seiner Entdeckung ist Lavendel 
                        eine hervorragende Salbe für Verbrennungen. Lavendel ist ein Hautverjünger, der Schmerzen lindert 
                        und ohne Narbenbildung heilt, wodurch er perfekt für Schnitte, Verbrennungen und entzündliche 
                        Hauterkrankungen geeignet ist.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Lemon_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lemonImage} 
                        alt="Zitronenbaum" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Zitrone</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Citrus limon syn. C. limonum
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Citron (französisch), Gewöhnliche Zitrone
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Der Zitronenbaum verfolgt seine Ursprünge durch ganz Indien, China und Myanmar zurück, wo alte 
                        Zivilisationen ihn sowohl für therapeutische Eigenschaften als auch für sein bezauberndes Aroma 
                        schätzten. Ausgehend von der Indus-Tal-Region reiste diese außergewöhnliche Zitrusfrucht zwischen 
                        2500-500 v. Chr. nach Persien, bevor sie schließlich das klassische Griechenland erreichte. 
                        Mittelalterliche europäische Züchter bauten Zitronenbäume nicht nur wegen ihrer nützlichen Früchte 
                        an, sondern auch wegen ihres dekorativen Charmes.
                    </p>
                    <p>
                        Europäische Ärzte übernahmen Zitronen als Mehrzweckbehandlung für zahlreiche Beschwerden und 
                        betrachteten diese lebendige Frucht als universelles Heilmittel der Natur. Als britische 
                        Seereisen begannen, Zitronen zu ihren lebenswichtigen Vorräten hinzuzufügen, transformierten 
                        sie das maritime Wohlbefinden durch erfolgreiche Skorbut-Prävention. Diese bescheidene Zitrusfrucht 
                        wurde zu einem lebenserhaltenden Essential und schützte Seeleute während gefährlicher Seereisen.
                    </p>
                    <p>
                        Aus botanischer Sicht zeigt der Zitronenbaum eine bescheidene Höhe von etwa zwanzig Fuß mit 
                        schützenden Dornen, die über seine Äste verteilt sind. Die charakteristischen Blätter zeigen 
                        sattgrüne obere Oberflächen, die schön mit blasseren Unterseiten kontrastieren. Der Blütenprozess 
                        beginnt mit sanft duftenden rötlichen Knospen, die sich zu reinweißen Blüten mit zarten rosa 
                        Rändern entfalten und ein faszinierendes Spektakel zwischen dem glänzenden Laub bilden.
                    </p>
                    <p>
                        Etymologisch betrachtet enthüllt die Verfolgung des Wortes "Zitrone" ein faszinierendes sprachliches 
                        Erbe. Das französische Wort <em>citron</em> stammte aus lateinischen Ursprüngen, wo es alle Zitrusarten 
                        repräsentierte. Klassische Griechen verwendeten <em>kitrion</em>, vermutlich abgeleitet von <em>kedris</em>, 
                        was "Zedernkegel" bedeutet – eine Assoziation, die durch die charakteristische Form unreifer, sich 
                        entwickelnder Früchte ausgelöst wurde.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Kaltpressung der ganzen Frucht
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Blass grünlich-gelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 9-12 Monate
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Phototoxisch:</strong> Dieses ätherische Öl kann Hautreizungen oder Sensibilisierung 
                        verursachen und ist phototoxisch. Vermeiden Sie 12-18 Stunden nach äußerlicher Anwendung Sonneneinstrahlung.</p>
                        <p><strong>Hautempfindlichkeit:</strong> Immer ordnungsgemäß verdünnen und vor der Verwendung einen 
                        Verträglichkeitstest durchführen. Nicht unverdünnt auf die Haut auftragen.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Frisch, sauber, zitrusartig, hell und belebend mit scharfen, würzigen Kopfnoten
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Ingwer</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Pfefferminze</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Teebaum</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Zitronenöl ist bekannt für seine reinigenden, läuternden und energetisierenden Eigenschaften:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental und emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Geistige Klarheit</span>
                                <span className="condition-tag">Fokus</span>
                                <span className="condition-tag">Stimmungsverbesserung</span>
                                <span className="condition-tag">Kopfschmerzen</span>
                                <span className="condition-tag">Jetlag</span>
                                <span className="condition-tag">Kater</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Hauterkrankungen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Akne</span>
                                <span className="condition-tag">Blasen</span>
                                <span className="condition-tag">Furunkel</span>
                                <span className="condition-tag">Lippenherpes</span>
                                <span className="condition-tag">Schnitte und Kratzer</span>
                                <span className="condition-tag">Warzen</span>
                                <span className="condition-tag">Hühneraugen und Schwielen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege und Immunsystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Grippe</span>
                                <span className="condition-tag">Fieber</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Kreislauf und Schmerzen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gicht</span>
                                <span className="condition-tag">Kreislauf</span>
                                <span className="condition-tag">Krampfadern</span>
                                <span className="condition-tag">Cellulite</span>
                                <span className="condition-tag">Frostbeulen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>⚓ Maritime Medizin</h3>
                    <p className="historical-note">
                        Zitronenöl trägt ein Erbe der Seefahrtmedizin. Britische Marineschiffe führten Zitronen als 
                        Standardfracht, um Skorbut unter Seeleuten während langer Reisen zu verhindern. Diese Praxis 
                        war so effektiv, dass britische Seeleute als "Limeys" bekannt wurden. Heute setzt Zitronenöl 
                        diese Tradition des Schutzes und der Heilung fort und bietet starke antioxidative und 
                        immunstärkende Eigenschaften.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Mandarin_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={mandarinImage} 
                        alt="Mandarinenbaum" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Mandarine</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Citrus reticulata syn. C. nobilis
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Europäische Mandarine, Mandarinorange, Echte Mandarine
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Während diese Zitrusbäume erstmals in den frühen 1800er Jahren auf europäischem Boden eingeführt 
                        wurden, haben Mandarinen mehr als vier Jahrtausende in der chinesischen Kultivierung geblüht. 
                        Die Frucht erhielt möglicherweise ihren Namen von den Regierungsbeamten, die als Mandarinen 
                        bekannt waren und gelbe Gewänder trugen, wodurch diese lebendige Zitrusfrucht mit dem alten 
                        chinesischen Erbe und den Bräuchen verbunden wurde.
                    </p>
                    <p>
                        Die botanische Bezeichnung stammt aus dem lateinischen Begriff <em>retikulat</em>, was 
                        "netzartig" bedeutet und das weiße spinnenwebartige Mark unter der Schale beschreibt. Dieser 
                        kompakte dornige Baum zeigt anmutige Äste und glänzende ovale Blätter, die eine attraktive 
                        Silhouette in Zitrushainen bilden. Seine cremefarbenen Blüten sind intensiv aromatisch und 
                        sättigen die Atmosphäre mit ihrem honigartigen, faszinierenden Duft.
                    </p>
                    <p>
                        Die Wörter Mandarine und Tangerine werden häufig synonym verwendet, da die Früchte für 
                        gelegentliche Beobachter praktisch identisch erscheinen und dieselbe wissenschaftliche 
                        Nomenklatur besitzen. Dennoch repräsentiert Mandarine die Klassifikation für Zitrusarten, 
                        die sich mühelos schälen lassen. Tangerine wird als Unterabteilung der Mandarine oder als 
                        Mandarinvarietät mit tieferer rötlich-oranger Färbung betrachtet.
                    </p>
                    <p>
                        Von historischen chinesischen königlichen Gärten bis zu zeitgenössischen Aromatherapie-Anwendungen 
                        hat die Mandarine ihre Stellung sowohl als angenehme Frucht als auch als mildes therapeutisches 
                        Mittel bewahrt. Ihr süßer, erhebender Charakter hat sie besonders für die pädiatrische 
                        Aromatherapie und zarte emotionale Pflege geschätzt gemacht.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Kaltpressung der Schale
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Grünlich-orange
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 9-12 Monate
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Allgemein sicher:</strong> Mandarinenöl gilt allgemein als sicher und ist eines der 
                        sanftesten verfügbaren Zitrusöle.</p>
                        <p><strong>Empfindliche Haut:</strong> Obwohl allgemein nicht-phototoxisch, kann es bei Menschen 
                        mit empfindlicher Haut phototoxisch sein. Führen Sie einen Verträglichkeitstest durch und 
                        vermeiden Sie direkte Sonneneinstrahlung nach der Anwendung, wenn Sie empfindliche Haut haben.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Süß, frisch, zitrusartig mit sanften, erhebenden und fröhlichen Kopfnoten
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Kamille</span>
                            <span className="oil-tag">Zimt</span>
                            <span className="oil-tag">Nelke</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Muskatnuss</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Sandelholz</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Mandarinenöl wird für seine sanften, erhebenden Eigenschaften geschätzt und ist besonders 
                        für Kinder und sensible Personen geeignet:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental und emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Schlaflosigkeit</span>
                                <span className="condition-tag">Angst</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Nervöse Spannung</span>
                                <span className="condition-tag">Unruhe</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Hauterkrankungen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Akne</span>
                                <span className="condition-tag">Narben</span>
                                <span className="condition-tag">Schwangerschaftsstreifen</span>
                                <span className="condition-tag">Fettige Haut</span>
                                <span className="condition-tag">Hautstraffung</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🍽️ Verdauungsunterstützung</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Verdauungsstörungen</span>
                                <span className="condition-tag">Verstopfung</span>
                                <span className="condition-tag">Übelkeit</span>
                                <span className="condition-tag">Magenverstimmung</span>
                                <span className="condition-tag">Appetitlosigkeit</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌙 Erholung und Wohlbefinden</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Kater</span>
                                <span className="condition-tag">Müdigkeit</span>
                                <span className="condition-tag">Rekonvaleszenz</span>
                                <span className="condition-tag">Winterblues</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎋 Chinesische Weisheit</h3>
                    <p className="historical-note">
                        Seit über viertausend Jahren wird die Mandarine in der chinesischen Medizin und Kultur geschätzt. 
                        Die Verbindung zu den Mandarin-Beamten in ihren gelben Roben symbolisiert Weisheit, Wohlstand 
                        und sanfte Autorität. Heute setzt Mandarinenöl diese Tradition sanfter Heilung fort und bietet 
                        süßen Trost und emotionales Gleichgewicht ohne überwältigende Intensität.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Pine_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={pineTreeImage} 
                        alt="Kiefernbaum" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Kiefer</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Pinus sylvestris
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Waldkiefer, Kiefernnadel-Öl, Schottische Kiefer, Föhre
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Die prächtige Waldkiefer erreicht gewöhnlich Höhen von dreißig bis sechzig Fuß in kultivierten 
                        Umgebungen, kann aber in natürlicher Wildnis eine imposante Höhe von hundert Fuß erreichen. 
                        Ihre charakteristischen blaugrünen Nadeln erscheinen in paarweisen Formationen von etwa drei 
                        Zoll Länge und bilden ein erkennbares Aussehen, das diese Art in europäischen Regionen seit 
                        Generationen beliebt gemacht hat. Die gelbbraunen oder hellbraunen Zapfen, ebenfalls etwa drei 
                        Zoll messend, hängen elegant von den Ästen und vervollständigen das charakteristische Profil des Baumes.
                    </p>
                    <p>
                        Die botanische Bezeichnung <em>sylvestris</em> stammt aus dem Lateinischen und bedeutet "zu 
                        Wäldern oder Waldgebieten gehörend", was treffend die natürliche Umgebung und den wilden 
                        Charakter dieser Art beschreibt. Die in europäischen Gebieten heimische Kiefer hat nicht nur 
                        wegen ihrer imposanten Statur, sondern auch wegen ihrer außergewöhnlichen Anpassungsfähigkeit 
                        Verehrung erhalten. Verschiedene Teile des Exemplars wurden therapeutisch von historischen 
                        Heilern verwendet, die ihre starken heilenden Eigenschaften schätzten. Die Art wurde später 
                        während der Besiedlungszeiten nach Nordamerika gebracht, wo sie schnell sowohl für dekorative 
                        als auch für praktische Anwendungen geschätzt wurde.
                    </p>
                    <p>
                        Abgesehen von der Holzproduktion erzeugt die Kiefer eine bemerkenswerte Vielfalt nützlicher 
                        Materialien, einschließlich Terpentin, Teer und Pech. Aus dem natürlichen Harz des Baumes 
                        hergestellt, hat sich Kiefernkolophonium als besonders wertvoll für Geiger und andere 
                        Streichinstrument-Spieler erwiesen, um ihre Bögen zu behandeln und die notwendige Reibung 
                        für melodische Klangerzeugung zu schaffen. Diese Beziehung zwischen Kiefer und musikalischer 
                        Kunst demonstriert die kulturelle Bedeutung des Baumes in der Geschichte.
                    </p>
                    <p>
                        Traditionell wurden nach der Harzextraktion aus dem Laub die übrig gebliebenen Nadelmaterialien 
                        geschickt verarbeitet und in "Kiefernfüllung" für Matratzen und Kissen umgewandelt. Dieses 
                        Kiefernfaser-Material erfüllte doppelte Funktionen – es bot körperlichen Komfort und schreckte 
                        gleichzeitig Flöhe und Parasiten ab, was es zu einer vorteilhaften Wahl für Bettwaren in Zeiten 
                        machte, in denen organische Schädlingsbekämpfung für Wellness und Sauberkeit entscheidend war.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation von Nadeln und Zweigen
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Farblos bis blassgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Mittel mit leicht öliger Textur
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 9-12 Monate
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Wichtige Sicherheitshinweise:</strong> Waldkieferöl gilt als das sicherste Kiefernöl 
                        für therapeutische Zwecke, jedoch sollten mehrere Vorsichtsmaßnahmen beachtet werden.</p>
                        <p><strong>Vermeiden bei:</strong> Allergischen Hauterkrankungen, Schwangerschaft oder Bluthochdruck.</p>
                        <p><strong>Altersbeschränkung:</strong> Nicht bei Kindern unter sechs Jahren anwenden.</p>
                        <p><strong>Hautempfindlichkeit:</strong> Kann Hautreizungen verursachen. Immer ordnungsgemäß 
                        verdünnen und vor Gebrauch einen Verträglichkeitstest durchführen.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Frisch, klar, holzig mit sauberen Waldnoten und belebendem Kiefernnadel-Aroma
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Pfefferminze</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Fichte</span>
                            <span className="oil-tag">Teebaum</span>
                            <span className="oil-tag">Thymian</span>
                            <span className="oil-tag">Vetiver</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Kiefernöl ist bekannt für seine starken atemwegs-, kreislauf- und antimikrobiellen Eigenschaften:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🫁 Atmungssystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Grippe</span>
                                <span className="condition-tag">Kehlkopfentzündung</span>
                                <span className="condition-tag">Nasennebenhöhlenentzündung</span>
                                <span className="condition-tag">Halsschmerzen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskel- und Gelenkgesundheit</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gicht</span>
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Ischias</span>
                                <span className="condition-tag">Verstauchungen und Zerrungen</span>
                                <span className="condition-tag">Sehnenentzündung</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Haut und äußere Probleme</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Schnitte und Kratzer</span>
                                <span className="condition-tag">Kopfläuse</span>
                                <span className="condition-tag">Krätze</span>
                                <span className="condition-tag">Hautinfektionen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Kreislauf und allgemeine Gesundheit</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Kreislauf</span>
                                <span className="condition-tag">Verstopfung</span>
                                <span className="condition-tag">Kater</span>
                                <span className="condition-tag">Stress</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎼 Musikalisches Erbe</h3>
                    <p className="historical-note">
                        Die Verbindung der Kiefer zur Musik reicht tief in die Geschichte. Kiefernkolophonium, 
                        hergestellt aus dem Harz des Baumes, ist seit Jahrhunderten für Geiger und Streichmusiker 
                        essentiell, um die notwendige Reibung zu schaffen, schöne Klänge aus ihren Instrumenten zu 
                        ziehen. Dieses musikalische Erbe symbolisiert die Fähigkeit der Kiefer, Harmonie zu schaffen – 
                        nicht nur in der Musik, sondern auch in den natürlichen Heilungsprozessen des Körpers, indem 
                        sie Atmungs- und Kreislaufsysteme in besseres Gleichgewicht bringt.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_TeaTree_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={teaTree} 
                        alt="Teebaum" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Teebaum</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Melaleuca alternifolia
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Schmalblättrige Papierrinde, Teebaum
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Der Teebaum wächst bis zu zwanzig Fuß Höhe und ist eine ausdauernde immergrüne Pflanze mit 
                        charakteristischer papierartiger Rinde, schlanken nadelförmigen Blättern und Büscheln von 
                        purpurnen oder blassgelb-weißen Blüten. Ursprünglich aus New South Wales stammend, wird diese 
                        Art nun in verschiedenen australischen Regionen kultiviert und gedeiht besonders in feuchten 
                        Küstengebieten. Die charakteristischen Merkmale der Pflanze und ihre außergewöhnlichen 
                        Heileigenschaften haben sie zu einem von Australiens führenden botanischen Schätzen gemacht.
                    </p>
                    <p>
                        Abgeleitet von altgriechischer Terminologie – <em>melas</em> bedeutet "schwarz" und <em>leukos</em> 
                        bedeutet "weiß" – hebt die Gattung <em>Melaleuca</em> die auffälligen Farbkontraste hervor, 
                        die sowohl in ihrem Laub als auch in ihrer Rinde zu finden sind. Das spezifische Epitheton 
                        <em>alternifolia</em> zeigt die wechselständige Blattanordnung entlang jedes Astes an, was 
                        das erkennbare Wachstumsmuster des Baumes schafft.
                    </p>
                    <p>
                        Über unzählige Generationen hinweg nutzten Australiens Aborigine-Gemeinschaften diese 
                        außergewöhnliche Pflanze für zahlreiche medizinische Anwendungen und verstanden ihre starken 
                        therapeutischen Vorteile lange bevor westliche Forscher wissenschaftliche Erklärungen 
                        liefern konnten. Ihr angestammtes Wissen umfasste Behandlungen für Verletzungen, bakterielle 
                        Infektionen und Atemwegserkrankungen – Wissen, das über Jahrhunderte von traditionellen 
                        Medizinpraktikern übertragen wurde.
                    </p>
                    <p>
                        Diese Pflanze erhielt ihre populäre Bezeichnung, als der britische Marineoffizier und 
                        Entdecker James Cook während seiner Seeexpeditionen einheimische Australier dabei beobachtete, 
                        wie sie medizinische Aufgüsse aus ihren Blättern zubereiteten. Als stärkstes antiseptisches 
                        Mittel der Natur anerkannt, wurde Teebaum während des Zweiten Weltkriegs zur Standardausrüstung 
                        in australischen Militärmedizinvorräten. Als seine außergewöhnlichen Heilfähigkeiten bekannt 
                        wurden und sich unter internationalen Streitkräften verbreiteten, erhielt er den liebevollen 
                        Titel "Australiens wundersame Entdeckung".
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasser- oder Wasserdampfdestillation von Blättern und Zweigen
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Blassgelb-grün bis farblos
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 12-18 Monate
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Sensibilisierungsrisiko:</strong> Teebaumöl kann bei einigen Personen Sensibilisierung 
                        verursachen. Führen Sie vor der ersten Anwendung immer einen Verträglichkeitstest durch.</p>
                        <p><strong>Verdünnung empfohlen:</strong> Obwohl allgemein gut verträglich, verdünnen Sie es 
                        ordnungsgemäß für äußerliche Anwendung, besonders auf empfindlichen Bereichen.</p>
                        <p><strong>Qualität ist wichtig:</strong> Verwenden Sie nur hochwertiges, reines Teebaumöl, um 
                        mögliche Reizungen durch verfälschte Produkte zu vermeiden.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Frisch, medizinisch, kampferartig mit scharfen, sauberen antiseptischen Noten
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Pfefferminze</span>
                            <span className="oil-tag">Kiefer</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Thymian</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Zitronengras</span>
                            <span className="oil-tag">Manuka</span>
                            <span className="oil-tag">Niaouli</span>
                            <span className="oil-tag">Oregano</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Teebaum ist praktisch ein Erste-Hilfe-Kasten in einer Flasche, wirksam gegen Bakterien, 
                        Pilze und Viren und hilft dem Körper auf Infektionen zu reagieren:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Haut und Wunden</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Akne</span>
                                <span className="condition-tag">Blasen</span>
                                <span className="condition-tag">Furunkel</span>
                                <span className="condition-tag">Verbrennungen</span>
                                <span className="condition-tag">Lippenherpes</span>
                                <span className="condition-tag">Schnitte und Kratzer</span>
                                <span className="condition-tag">Entzündungen</span>
                                <span className="condition-tag">Ausschläge</span>
                                <span className="condition-tag">Warzen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Infektionen und Parasiten</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Fußpilz</span>
                                <span className="condition-tag">Windpocken</span>
                                <span className="condition-tag">Kopfläuse</span>
                                <span className="condition-tag">Leistenekzem</span>
                                <span className="condition-tag">Nagelpilz</span>
                                <span className="condition-tag">Gürtelrose</span>
                                <span className="condition-tag">Nasennebenhöhlenentzündung</span>
                                <span className="condition-tag">Scheideninfektionen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atmungssystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Grippe</span>
                                <span className="condition-tag">Keuchhusten</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🐛 Äußere Probleme</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Fieber</span>
                                <span className="condition-tag">Insektenstiche und -bisse</span>
                                <span className="condition-tag">Giftefeu</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🪖 Militärmedizinisches Erbe</h3>
                    <p className="historical-note">
                        Der Ruf des Teebaums als "Wunder aus Down Under" wurde während des Zweiten Weltkriegs 
                        erworben, als er zu einem Standardartikel in australischen Armee-Medizinkits wurde. Seine 
                        bemerkenswerte Wirksamkeit gegen Infektionen und Wunden machte ihn in der Schlachtfeldmedizin 
                        von unschätzbarem Wert, wo traditionelle Antiseptika oft nicht verfügbar waren. Dieses 
                        militärische Erbe demonstriert die außergewöhnliche Zuverlässigkeit und Stärke des Teebaums 
                        als stärkstes antiseptisches Mittel der Natur.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Myrrh_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={myrrhImage} 
                        alt="Myrrhefeld" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Myrrhe</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Commiphora myrrha syn. C. molmol
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Gewöhnliche Myrrhe, Gummimyrrhe, Hirabol-Myrrhe
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Duftende Gummiharze und Harze stellten unschätzbare Schätze in der Antike dar, und zusammen 
                        mit Weihrauch gehört Myrrhe zu den gefeiertsten und geehrtesten. Dieses bemerkenswerte Harz 
                        hat Kulturen über Jahrtausende hinweg fasziniert und sich seinen Platz in heiligen Ritualen, 
                        kaiserlichen Parfums und therapeutischen Traditionen gesichert, die sich von pharaonischem 
                        Ägypten bis zur zeitgenössischen Aromatherapie erstrecken.
                    </p>
                    <p>
                        Der Begriff "Myrrhe" stammt entweder aus dem arabischen <em>murr</em> oder hebräischen <em>mor</em>, 
                        beide bedeuten "bitter" und spielen auf ihren charakteristischen scharfen, scharfen Geschmack an, 
                        der ihre starken heilenden Eigenschaften bezeugt. Die Gattungsbezeichnung <em>Commiphora</em> 
                        übersetzt sich zu "Gummi produzierend", was treffend die außergewöhnliche Fähigkeit dieses Baumes 
                        charakterisiert, eines der wertvollsten medizinischen Harze der Natur zu produzieren.
                    </p>
                    <p>
                        Möglicherweise unter den ersten, die systematisch Myrrhe ernteten, erhoben die alten Ägypter 
                        dieses Harz zu heiliger Prominenz und verwendeten es ausgiebig für Parfümkreation, Heilkünste 
                        und zeremonielle Anwendungen. Die Pharaonen hielten es für so kostbar, dass Myrrhe unter 
                        Grabschätzen platziert wurde, um ihre fortgesetzte Verwendung im ewigen Leben zu gewährleisten. 
                        Jahrtausendelang fungierte es als Grundlage nahöstlicher Heilpraktiken, geschätzt neben anderen 
                        wertvollen Harzen als im Wesentlichen ein Allheilmittel.
                    </p>
                    <p>
                        Als sich Handelsrouten nach Osten erstreckten, fand Myrrhe ihren Weg in die fortgeschrittenen 
                        therapeutischen Traditionen Indiens und wurde bis 600 n. Chr. in die ayurvedische Heilkunde 
                        eingegliedert. Von frühen Zivilisationen bis ins Mittelalter priesen Heiler verschiedener 
                        Kulturen ihre Tugenden und erkannten Myrrhes außergewöhnliche Vielseitigkeit und Kraft bei 
                        der Behandlung zahlreicher Leiden an.
                    </p>
                    <p>
                        Heimisch im nordöstlichen Afrika und der Arabischen Halbinsel, stammt Myrrhe von einem 
                        kompakten, robusten buschigen Baum, der ideal für schwere Wüstenumgebungen geeignet ist. 
                        Seine charakteristische hellgraue Rinde und defensiven dornigen Äste verleihen ihm ein 
                        verwittertes Aussehen, während winzige dreizackige Blätter ein einzigartiges Laub schaffen. Das kostbare Harz sickert natürlich 
                        aus der Rinde, oft beschleunigt durch vorsätzliche Schnitte, und härtet zu bernsteinfarbenen 
                        oder rötlich-braunen Tränen aus, die seit der Antike von Sammlern geschätzt werden.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation des Harzes
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Blassgelb bis blassgrün
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Mittel bis dick
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> Verbessert sich mit dem Alter, praktisch unbegrenzt
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Allgemein sicher:</strong> Myrrhe gilt allgemein als sicher mit wenigen bekannten 
                        Nebenwirkungen bei ordnungsgemäßer Anwendung.</p>
                        <p><strong>Schwangerschaft:</strong> Als Vorsichtsmaßnahme während der Schwangerschaft vermeiden, 
                        da es möglicherweise uterine Kontraktionen stimulieren kann.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Warm, erdig, balsamisch-harzig mit bitteren und süßen Noten
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Benzoe</span>
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Zypresse</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Palmarosa</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Rose</span>
                            <span className="oil-tag">Sandelholz</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Myrrhe ist eines der stärksten natürlichen Antiseptika und Wundheilmittel, das seit Jahrtausenden geschätzt wird:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Haut und Wundheilung</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Rissige Haut</span>
                                <span className="condition-tag">Ekzem</span>
                                <span className="condition-tag">Gesichtsbehandlung</span>
                                <span className="condition-tag">Mature Haut</span>
                                <span className="condition-tag">Narben</span>
                                <span className="condition-tag">Langsam heilende Wunden</span>
                                <span className="condition-tag">Fußpflege</span>
                                <span className="condition-tag">Dehnungsstreifen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>👄 Mund- und Zahngesundheit</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Zahnfleischerkrankungen</span>
                                <span className="condition-tag">Mundgeschwüre</span>
                                <span className="condition-tag">Zahnschmerzen</span>
                                <span className="condition-tag">Mundgeruch</span>
                                <span className="condition-tag">Gingivitis</span>
                                <span className="condition-tag">Halsschmerzen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Brustinfektionen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🍽️ Verdauung und Immunsystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Verdauungsstörungen</span>
                                <span className="condition-tag">Durchfall</span>
                                <span className="condition-tag">Hämorrhoiden</span>
                                <span className="condition-tag">Appetitlosigkeit</span>
                                <span className="condition-tag">Immunsystem-Unterstützung</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>👑 Schatz der Pharaonen</h3>
                    <p className="historical-note">
                        Myrrhe war so wertvoll im alten Ägypten, dass sie in die Gräber der Pharaonen gelegt wurde, 
                        um ihre Verwendung im Jenseits zu gewährleisten. Diese königliche Verbindung spricht für die 
                        außergewöhnlichen heilenden Eigenschaften der Myrrhe - besonders für Hautregeneration und 
                        Wundheilung. Noch heute wird Myrrhe als eines der kostbarsten natürlichen Heilmittel für 
                        reife Haut und schwer heilende Wunden geschätzt.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Sandalwood_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={sandalwoodImage} 
                        alt="Sandelholzfeld" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Sandelholz</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Santalum album
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Indisches Sandelholz, Weißes Sandelholz, Echtes Sandelholz
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Sandelholz gehört zu den kostbarsten und spirituellsten aller ätherischen Öle, destilliert aus 
                        dem Kernholz des Sandelholzbaumes. Dieser immergrüne halbparasitäre Baum erreicht typischerweise 
                        eine Höhe von dreißig bis vierzig Fuß und ist in Indien, Indonesien und anderen Teilen Südostasiens 
                        beheimatet. Was Sandelholz besonders bemerkenswert macht, ist seine langsame Reifung - das Öl 
                        entwickelt seinen charakteristischen Duft erst nach mindestens fünfundzwanzig bis dreißig Jahren Wachstum.
                    </p>
                    <p>
                        Die Geschichte des Sandelholzes ist tief mit spirituellen Traditionen und königlicher Pracht 
                        verwoben. In Indien wird es seit über viertausend Jahren in religiösen Zeremonien, Meditation 
                        und ayurvedischer Medizin verwendet. Hindu- und buddhistische Traditionen betrachten Sandelholz 
                        als heilig, und sein Duft soll den Geist zur Meditation und spirituellen Erleuchtung erheben. 
                        Paläste und Tempel wurden aus Sandelholz gebaut, da man glaubte, dass sein Duft göttlichen Schutz bietet.
                    </p>
                    <p>
                        In der chinesischen Medizin wird Sandelholz als "tan xiang" bezeichnet und für seine kühlenden 
                        und beruhigenden Eigenschaften geschätzt. Ägyptische Pharaonen verwendeten Sandelholz für 
                        Einbalsamierung und in kosmetischen Präparaten, während griechische und römische Aristokraten 
                        es als luxuriöses Parfüm und therapeutisches Mittel schätzten.
                    </p>
                    <p>
                        Aufgrund seiner extremen Langsamkeit im Wachstum und der hohen Nachfrage ist echtes indisches 
                        Sandelholz heute extrem kostbar und streng reguliert geworden. Der Baum gilt als gefährdet, 
                        wodurch authentisches Sandelholzöl zu einem der wertvollsten ätherischen Öle der Welt wird.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation des Kernholzes
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Blassgelb bis goldgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Mittel bis dick
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> Verbessert sich mit dem Alter, praktisch unbegrenzt
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Sehr sicher:</strong> Sandelholz gilt als eines der sichersten ätherischen Öle mit 
                        praktisch keinen Nebenwirkungen oder Kontraindikationen.</p>
                        <p><strong>Qualitätsprüfung:</strong> Aufgrund des hohen Wertes und der Seltenheit achten Sie 
                        darauf, echtes indisches Sandelholz von seriösen Händlern zu kaufen, um verfälschte Produkte zu vermeiden.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Warm, holzig, süß, cremig mit einer reichen, sanften und langanhaltenden Basis
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Schwarzer Pfeffer</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Zitrusöle</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Jasmin</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Myrrhe</span>
                            <span className="oil-tag">Neroli</span>
                            <span className="oil-tag">Rose</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Sandelholz ist besonders für seine beruhigenden, hautpflegenden und spirituell erhebenden Eigenschaften bekannt:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental und spirituell</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Meditation</span>
                                <span className="condition-tag">Angst</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Schlaflosigkeit</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Nervöse Spannung</span>
                                <span className="condition-tag">Spirituelle Praxis</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Haut und Schönheit</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Trockene Haut</span>
                                <span className="condition-tag">Rissige Haut</span>
                                <span className="condition-tag">Akne</span>
                                <span className="condition-tag">Anti-Aging</span>
                                <span className="condition-tag">Narben</span>
                                <span className="condition-tag">Entzündungen</span>
                                <span className="condition-tag">Empfindliche Haut</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Halsschmerzen</span>
                                <span className="condition-tag">Brustinfektionen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💧 Urogenitalsystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Blasenentzündung</span>
                                <span className="condition-tag">Harnwegsinfektionen</span>
                                <span className="condition-tag">Nierensteine</span>
                                <span className="condition-tag">Aphrodisiakum</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🕉️ Göttliches Holz</h3>
                    <p className="historical-note">
                        In hinduistischen und buddhistische Traditionen wird Sandelholz als "göttliches Holz" verehrt, 
                        das den Geist zur Meditation und spirituellen Erleuchtung erhebt. Sein kostbarer Duft wird seit 
                        über 4.000 Jahren in Tempeln und bei religiösen Zeremonien verwendet. Diese spirituelle Verbindung 
                        macht Sandelholz nicht nur zu einem hautpflegenden Wunder, sondern auch zu einem kraftvollen 
                        Werkzeug für emotionales Gleichgewicht und inneren Frieden.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Ginger_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={gingerImage} 
                        alt="Ingwerfeld" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Ingwer</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Zingiber officinale
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Gewöhnlicher Ingwer, Jamaika-Ingwer, Garten-Ingwer
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Ingwer ist eine tropische Staude, die aus einem kriechenden unterirdischen Rhizom wächst und 
                        Höhen von drei bis vier Fuß erreichen kann. Seine charakteristischen schilfartigen Stängel 
                        tragen schmale, lanzettliche Blätter und gelegentlich auffällige gelb-grüne Blüten mit 
                        purpurnen Spitzen. Das wahre Juwel der Pflanze liegt jedoch unter der Erde - das knorrige, 
                        fleischige Rhizom, das sowohl kulinarisch als auch medizinisch seit Jahrtausenden geschätzt wird.
                    </p>
                    <p>
                        Ursprünglich aus Südostasien stammend, hat Ingwer eine bemerkenswerte Reise durch die 
                        Weltgeschichte unternommen. Chinesische Heiler verwendeten ihn bereits vor über 3.000 Jahren 
                        und betrachteten ihn als ein universelles Heilmittel für Übelkeit, Verdauungsprobleme und 
                        Erkältungen. Das Gewürz war so wertvoll, dass es entlang der antiken Seidenstraße als kostbare 
                        Handelsware transportiert wurde und schließlich die Küchen und Apothekenregale des Mittelalters erreichte.
                    </p>
                    <p>
                        In der ayurvedischen Medizin wird Ingwer als "vishwabhesaj" bezeichnet, was "universelle Medizin" 
                        bedeutet, und seine wärmenden Eigenschaften sollen das Verdauungsfeuer stärken. Arabische Händler 
                        brachten Ingwer nach Europa, wo er schnell sowohl als kulinarische Delikatesse als auch als 
                        heilendes Mittel geschätzt wurde. Heinrich VIII. soll Ingwer als Schutz gegen die Pest empfohlen haben.
                    </p>
                    <p>
                        Der botanische Name <em>Zingiber</em> stammt aus dem Sanskrit "srngaveram", was "hornförmig" 
                        bedeutet und sich auf die charakteristische Form des Rhizoms bezieht. <em>Officinale</em> 
                        weist auf seine lange medizinische Verwendung hin, da dieses Suffix traditionell Pflanzen 
                        bezeichnet, die in Apotheken ("officina") verwendet werden.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation des frischen oder getrockneten Rhizoms
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Blassgelb bis bernsteinfarben
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 12-18 Monate
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Hautempfindlichkeit:</strong> Ingweröl kann bei empfindlichen Personen 
                        Hautreizungen verursachen. Immer ordnungsgemäß verdünnen und einen Verträglichkeitstest durchführen.</p>
                        <p><strong>Phototoxizität:</strong> Obwohl allgemein nicht phototoxisch, können empfindliche 
                        Personen nach äußerlicher Anwendung Sonneneinstrahlung für 12 Stunden vermeiden.</p>
                        <p><strong>Blutverdünnung:</strong> Personen, die blutverdünnende Medikamente einnehmen, 
                        sollten vor der Verwendung einen Arzt konsultieren.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Warm, würzig, scharf und belebend mit frischen zitrusartigen Obertönen
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Zimt</span>
                            <span className="oil-tag">Zitrusöle</span>
                            <span className="oil-tag">Koriander</span>
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Sandelholz</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Ingwer ist besonders bekannt für seine verdauungsfördernden, wärmenden und übelkeitsbekämpfenden Eigenschaften:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🍽️ Verdauungssystem</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Übelkeit</span>
                                <span className="condition-tag">Reisekrankheit</span>
                                <span className="condition-tag">Morgendliche Übelkeit</span>
                                <span className="condition-tag">Verdauungsstörungen</span>
                                <span className="condition-tag">Blähungen</span>
                                <span className="condition-tag">Verstopfung</span>
                                <span className="condition-tag">Appetitlosigkeit</span>
                                <span className="condition-tag">Magenkrämpfe</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskulatur und Kreislauf</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Rheumatismus</span>
                                <span className="condition-tag">Verstauchungen</span>
                                <span className="condition-tag">Kreislauf</span>
                                <span className="condition-tag">Kalte Extremitäten</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Grippe</span>
                                <span className="condition-tag">Sinusitis</span>
                                <span className="condition-tag">Halsschmerzen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Bronchitis</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental und emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Geistige Ermüdung</span>
                                <span className="condition-tag">Konzentrationsschwäche</span>
                                <span className="condition-tag">Apathie</span>
                                <span className="condition-tag">Gedächtnisstärkung</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🌏 Universelle Medizin</h3>
                    <p className="historical-note">
                        Ingwer wird in der ayurvedischen Medizin als "Vishwabhesaj" - universelle Medizin - bezeichnet 
                        und war so wertvoll, dass er einst mit Gold aufgewogen wurde. Von chinesischen Kaisern bis zu 
                        europäischen Königen wurde Ingwer als Allheilmittel geschätzt. Heinrich VIII. empfahl ihn sogar 
                        als Schutz gegen die Pest. Heute bestätigt die moderne Wissenschaft seine außergewöhnliche 
                        Wirksamkeit gegen Übelkeit, Entzündungen und Verdauungsprobleme.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Rosemary_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={rosemaryImage} 
                        alt="Rosmarinfeld" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Rosmarin</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Rosmarinus officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Rosmarinus coronarium, Meerestau, Compass Weed
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Rosmarin ist ein mehrjähriger, immergrüner Strauch, der normalerweise eine Höhe von drei bis 
                        sechs Fuß erreicht und charakteristische nadelartige Blätter mit einer glänzend grünen Oberseite 
                        und einer weißlich-silbernen Unterseite besitzt. Seine kleinen, aber lebendigen Blüten variieren 
                        von blass bis tiefblau, manchmal rosa oder weiß, und erscheinen in dichten Büscheln entlang der 
                        Äste. Der Strauch gedeiht in mediterranen Klimazonen und füllt warme, trockene Landschaften mit 
                        seinem durchdringenden, kiefernartigen Aroma.
                    </p>
                    <p>
                        Der Name "Rosmarin" stammt aus dem Lateinischen <em>ros marinus</em>, was "Tau des Meeres" bedeutet - 
                        ein Verweis auf seine Vorliebe für Küstenregionen und das perlende Aussehen seiner Blätter am frühen Morgen. 
                        Diese Pflanze ist tief in der Geschichte und Mythologie verwurzelt, wurde von antiken Zivilisationen 
                        als Symbol für Erinnerung, Treue und Schutz verehrt. Griechische Studenten trugen Rosmarinkränze, 
                        um ihr Gedächtnis zu stärken, während römische Bräute ihn in ihre Hochzeitskränze webten als Symbol 
                        ewiger Liebe und Treue.
                    </p>
                    <p>
                        Während des Mittelalters galt Rosmarin als mächtiger Beschützer gegen böse Geister und Krankheiten. 
                        Er wurde in Häusern verbrannt, um die Luft zu reinigen, und bei wichtigen Zeremonien und religiösen 
                        Ritualen verwendet. Die berühmte "Königin von Ungarn Wasser", ein beliebtes Parfüm und medizinisches 
                        Tonikum aus dem 14. Jahrhundert, hatte Rosmarin als Hauptzutat und wurde angeblich von der Königin 
                        Elisabeth von Ungarn verwendet, um ihre Jugend und Schönheit zu bewahren.
                    </p>
                    <p>
                        In der Folklore wurde Rosmarin mit Erinnerung so stark verbunden, dass Shakespeare in Hamlet 
                        Ophelia sagen ließ: "Da ist Rosmarin, das ist für die Erinnerung." Diese Verbindung zur 
                        Gedächtnisverbesserung hat moderne wissenschaftliche Bestätigung gefunden, da Studien zeigen, 
                        dass bestimmte Verbindungen in Rosmarin tatsächlich kognitive Funktionen unterstützen können.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation der Blätter und Blütenstände
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Farblos bis blassgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 2-3 Jahre
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Wichtige Sicherheitshinweise:</strong> Rosmarinöl enthält Kampfer und sollte mit 
                        Vorsicht verwendet werden.</p>
                        <p><strong>Vermeiden bei:</strong> Schwangerschaft, Stillzeit, Epilepsie, Bluthochdruck oder 
                        anderen kardiovaskulären Erkrankungen.</p>
                        <p><strong>Altersbeschränkung:</strong> Nicht bei Kindern unter zehn Jahren anwenden.</p>
                        <p><strong>Überdosierung:</strong> Kann bei übermäßiger Anwendung toxisch werden. Immer 
                        ordnungsgemäß verdünnen und empfohlene Dosierungen einhalten.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Frisch, krautig, kampferartig mit starken, durchdringenden und stimulierenden Noten
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Basilikum</span>
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Zimt</span>
                            <span className="oil-tag">Zitrusöle</span>
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Ingwer</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Pfefferminze</span>
                            <span className="oil-tag">Kiefer</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Rosmarin ist besonders bekannt für seine gedächtnisfördernden, kreislaufanregenden und konzentrationsstärkenden Eigenschaften:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental und kognitiv</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Gedächtnisschwäche</span>
                                <span className="condition-tag">Konzentrationsschwäche</span>
                                <span className="condition-tag">Geistige Ermüdung</span>
                                <span className="condition-tag">Demenz-Unterstützung</span>
                                <span className="condition-tag">Lernschwierigkeiten</span>
                                <span className="condition-tag">Kopfschmerzen</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Kreislauf und Herz</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Niedriger Blutdruck</span>
                                <span className="condition-tag">Kreislaufschwäche</span>
                                <span className="condition-tag">Kalte Extremitäten</span>
                                <span className="condition-tag">Herzschwäche</span>
                                <span className="condition-tag">Krampfadern</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskulatur und Schmerzen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Rheuma</span>
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gicht</span>
                                <span className="condition-tag">Steifheit</span>
                                <span className="condition-tag">Neuralgien</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Sinusitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🧠 Für die Erinnerung</h3>
                    <p className="historical-note">
                        "Da ist Rosmarin, das ist für die Erinnerung" - Shakespeares berühmte Zeile spiegelt eine 
                        jahrtausendealte Tradition wider. Griechische Studenten trugen Rosmarinkränze während des Studiums, 
                        und moderne Forschung bestätigt seine gedächtnisfördernden Eigenschaften. Das berühmte "Königin 
                        von Ungarn Wasser" aus dem 14. Jahrhundert, mit Rosmarin als Hauptzutat, soll die Königin so 
                        verjüngt haben, dass sie mit 72 Jahren einen 25-jährigen Prinzen heiratete.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_ClarySage_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={clarySageImage} 
                        alt="Muskatellersalbei" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Muskatellersalbei</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Salvia sclarea
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Römischer Salbei, Augenhell, Christusauge
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Muskatellersalbei ist eine zweijährige krautige Pflanze, die Höhen von bis zu 1,2 Metern 
                        erreichen kann und im südlichen Europa und der Mittelmeerregion beheimatet ist. Sie zeichnet 
                        sich durch ihre großen, ovalen, samtigen Blätter und ihre spektakulären Blütenstände in 
                        Blau-Violett-, Rosa- oder Weißtönen aus, die in hohen, beeindruckenden Ähren angeordnet sind.
                    </p>
                    <p>
                        Der Name "sclarea" leitet sich vom lateinischen Wort "clarus" ab, was "klar" bedeutet - ein 
                        Verweis auf die traditionelle Verwendung der Pflanze zur Reinigung der Augen. Im Mittelalter 
                        waren Salbeiarten als "Christusauge" bekannt wegen dieser Eigenschaft. Muskatellersalbei galt 
                        als so wertvoll für die Sehklarheit, dass er "oculus Christi" genannt wurde.
                    </p>
                    <p>
                        In der traditionellen europäischen Medizin war Salbei als "Frauenpflanze" bekannt und wurde 
                        zur Regulierung des Menstruationszyklus und zur Linderung von Wechseljahrsbeschwerden eingesetzt. 
                        Der Name "Salbei" selbst stammt vom lateinischen "salvare", was "retten" oder "heilen" bedeutet.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation der Blätter und Blütenspitzen
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Farblos bis sehr blassgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 2-3 Jahre
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Schwangerschaft und Stillzeit:</strong> In Schwangerschaft und Stillzeit vermeiden.</p>
                        <p><strong>Hormone:</strong> Kann Hormonspiegel beeinflussen. Bei hormonsensitiven Erkrankungen 
                        Arzt konsultieren.</p>
                        <p><strong>Sedierung:</strong> Kann Schläfrigkeit verursachen. Nach Anwendung nicht fahren oder 
                        Maschinen bedienen.</p>
                        <p><strong>Alkohol:</strong> Nicht mit Alkoholkonsum kombinieren - kann sedierende Effekte verstärken.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Süß, blumig, krautig mit nussigen Noten und einem leichten Moschus-Aroma
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Zypresse</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Ingwer</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Jasmin</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Sandelholz</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Muskatellersalbei ist besonders bekannt für seine ausgleichenden Eigenschaften auf das weibliche Hormonsystem:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>👩 Frauengesundheit</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Wechseljahre</span>
                                <span className="condition-tag">Hitzewallungen</span>
                                <span className="condition-tag">Unregelmäßige Menstruation</span>
                                <span className="condition-tag">PMS</span>
                                <span className="condition-tag">Menstruationskrämpfe</span>
                                <span className="condition-tag">Nachtschweiß</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental und emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Angst</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Schlaflosigkeit</span>
                                <span className="condition-tag">Nervöse Anspannung</span>
                                <span className="condition-tag">Paranoia</span>
                                <span className="condition-tag">Angst</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Haut und Pflege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Hautentzündungen</span>
                                <span className="condition-tag">Alterung der Haut</span>
                                <span className="condition-tag">Falten</span>
                                <span className="condition-tag">Zellregeneration</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskulär und Schmerzen</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Krämpfe</span>
                                <span className="condition-tag">Verspannungen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>👁️ Christusauge</h3>
                    <p className="historical-note">
                        Muskatellersalbei wurde im Mittelalter "Christusauge" genannt wegen seiner Fähigkeit, 
                        sowohl die physische als auch die spirituelle Sehkraft zu klären. Frauen verwendeten Salbei 
                        nicht nur für die Augenklarheit, sondern auch für geistige Klarheit während schwieriger 
                        hormoneller Übergänge. Heute setzt Muskatellersalbei diese Tradition der "Klarheit" fort und 
                        hilft Frauen, Lebenswechsel mit mehr Weisheit und emotionalem Gleichgewicht zu navigieren.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_SpanishSage_DE = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={spanishSageImage} 
                        alt="Spanischer Salbei" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Spanischer Salbei</h1>
                    <p className="botanical-name">
                        <strong>BOTANISCHER NAME:</strong> Salvia lavandulifolia
                    </p>
                    <p className="also-known-as">
                        <strong>AUCH BEKANNT ALS:</strong> Lavendelblättriger Salbei, Schmalblättriger Salbei
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Pflanzenbeschreibung und Geschichte</h3>
                    <p>
                        Spanischer Salbei ist ein kleiner, kompakter, immergrüner Strauch, der in Spanien und Südfrankreich 
                        heimisch ist. Im Gegensatz zu gewöhnlichem oder Muskatellersalbei hat diese Sorte schmalere Blätter, 
                        ähnlich denen des Lavendels, woher auch ihr botanischer Name "lavandulifolia" stammt. Die Pflanze 
                        produziert charakteristische blau-violette Blüten und kann Höhen von bis zu 60 cm erreichen.
                    </p>
                    <p>
                        Dieser Salbei wurde jahrhundertelang in der traditionellen spanischen und südfranzösischen Medizin 
                        verwendet. Im Gegensatz zu anderen Salbeiarten enthält spanischer Salbei niedrigere Thujonwerte, 
                        was ihn sicherer für regelmäßigen Gebrauch macht. Er wurde für seine Fähigkeit geschätzt, 
                        Gedächtnis und Konzentration zu verbessern ohne die starken Nebenwirkungen anderer Salbeisorten.
                    </p>
                    <p>
                        In der Mittelmeerregion war spanischer Salbei als "Pflanze der Weisheit" bekannt und wurde von 
                        Gelehrten und Philosophen verwendet, um ihren Geist während langer Studienzeiten klar und fokussiert zu halten.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Ölbeschreibung und Vorsichtsmaßnahmen</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Gewinnung:</strong> Wasserdampfdestillation der Blätter und Blütenspitzen
                        </div>
                        <div className="property-item">
                            <strong>Farbe:</strong> Farblos bis blassgelb
                        </div>
                        <div className="property-item">
                            <strong>Viskosität:</strong> Dünn
                        </div>
                        <div className="property-item">
                            <strong>Haltbarkeit:</strong> 2-3 Jahre
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Vorsichtsmaßnahmen</h4>
                        <p><strong>Sicher für die meisten Anwendungen:</strong> Spanischer Salbei gilt als sicherer als 
                        andere Salbeiarten aufgrund des niedrigeren Thujongehalts.</p>
                        <p><strong>Schwangerschaft:</strong> Als Vorsichtsmaßnahme in der Schwangerschaft vermeiden.</p>
                        <p><strong>Epilepsie:</strong> Obwohl er weniger Thujon enthält, sollten Personen mit Epilepsie 
                        ihn meiden.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Duftprofil und Mischung</h3>
                    <p className="scent-description">
                        <strong>Duft:</strong> Frisch, krautig, kampferartig mit Lavendelnoten und einem warmen, fast würzigen Unterton
                    </p>
                    <div className="blending-oils">
                        <h4>Mischt sich gut mit:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Basilikum</span>
                            <span className="oil-tag">Bergamotte</span>
                            <span className="oil-tag">Zedernholz</span>
                            <span className="oil-tag">Eukalyptus</span>
                            <span className="oil-tag">Weihrauch</span>
                            <span className="oil-tag">Geranie</span>
                            <span className="oil-tag">Wacholderbeeren</span>
                            <span className="oil-tag">Lavendel</span>
                            <span className="oil-tag">Zitrone</span>
                            <span className="oil-tag">Majoran</span>
                            <span className="oil-tag">Kiefer</span>
                            <span className="oil-tag">Rosmarin</span>
                            <span className="oil-tag">Thymian</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medizinische Anwendungen</h3>
                    <p className="medicinal-intro">
                        Spanischer Salbei ist besonders bekannt für seine kognitiven und gedächtnisfördernden Eigenschaften:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Kognitiv und mental</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Gedächtnis</span>
                                <span className="condition-tag">Konzentration</span>
                                <span className="condition-tag">Geistige Klarheit</span>
                                <span className="condition-tag">Geistige Ermüdung</span>
                                <span className="condition-tag">Verwirrung</span>
                                <span className="condition-tag">Demenz (Unterstützung)</span>
                                <span className="condition-tag">Alzheimer (Unterstützung)</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Atemwege</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Erkältungen</span>
                                <span className="condition-tag">Husten</span>
                                <span className="condition-tag">Verstopfung</span>
                                <span className="condition-tag">Sinusitis</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muskulär und Kreislauf</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Schlechte Durchblutung</span>
                                <span className="condition-tag">Muskelschmerzen</span>
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Rheuma</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Antiseptisch</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Atemwegsinfektionen</span>
                                <span className="condition-tag">Kleine Wunden</span>
                                <span className="condition-tag">Luftdesinfektion</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎓 Pflanze der Weisheit</h3>
                    <p className="historical-note">
                        Spanischer Salbei wurde von mediterranen Gelehrten als "Pflanze der Weisheit" bezeichnet, die 
                        entdeckten, dass diese spezielle Sorte Gedächtnis und Konzentration verbessert ohne die 
                        unerwünschten Nebenwirkungen anderer Salbeiarten. Moderne Forschung bestätigt, dass spanischer 
                        Salbei die kognitive Leistung verbessern und Schutz vor altersbedingtem geistigen Verfall 
                        bieten kann, was ihn zu einem wertvollen Verbündeten für langfristige Gehirngesundheit macht.
                    </p>
                </div>
            </div>
        </div>
    );
};

export { 
    EssentialOilProfile_Lavender_DE, 
    EssentialOilProfile_Lemon_DE, 
    EssentialOilProfile_Mandarin_DE,
    EssentialOilProfile_Pine_DE,
    EssentialOilProfile_TeaTree_DE,
    EssentialOilProfile_Myrrh_DE,
    EssentialOilProfile_Sandalwood_DE,
    EssentialOilProfile_Ginger_DE,
    EssentialOilProfile_Rosemary_DE,
    EssentialOilProfile_ClarySage_DE,
    EssentialOilProfile_SpanishSage_DE
};