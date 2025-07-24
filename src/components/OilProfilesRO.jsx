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

const EssentialOilProfile_Lavender_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lavendelImage} 
                        alt="Plantă de lavandă" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Lavandă</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC ORIGINAL:</strong> Lavandula angustifolia, syn. L. officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Lavandă comună, lavandă engleză, lavandă de grădină, lavandă adevărată
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Planta crește în mod obișnuit la o înălțime modestă de un până la trei metri și produce frunze subțiri, aromate 
                        și mici flori tubulare aranjate în spice elegante. Florile sale variază în culoare de la lila pal la violet 
                        profund și emit o aromă dulce, erbacee, care a făcut lavanda favorită în grădini, medicina pe bază de plante 
                        și parfumerie de secole.
                    </p>
                    <p>
                        Istoria lavandei este bogată și de anvergură. Utilizarea sa poate fi urmărită cu peste 2.500 de ani în urmă 
                        până la civilizațiile antice ale Egiptului, Greciei și Romei. Egiptenii au prețuit-o pentru îmbălsămarea 
                        și scopuri cosmetice, punând chiar borcanele cu unguente parfumate cu lavandă în mormintele faraoilor. În 
                        antichitatea clasică, grecii și romanii foloseau lavanda pentru parfumarea băilor, așternuturilor și caselor. 
                        Numele "lavandă" însuși derivă din latina lavare, însemnând "a spăla", o aluzie la calitățile sale de 
                        curățare și purificare.
                    </p>
                    <p>
                        În timpul Evului Mediu, lavanda a devenit un element de bază în grădinile medicinale monastice din toată Europa. 
                        Se credea că îndepărtează spiritele rele și bolile și era în mod obișnuit împrăștiată pe podele pentru a masca 
                        mirosurile neplăcute și a descuraja insectele. Până în Renaștere, lavanda s-a stabilit ferm ca plantă medicinală 
                        și ornamentală, favorită atât de nobilime cât și de oamenii obișnuiți. Regina Elisabeta I era deosebit de 
                        îndrăgostită de lavandă, pretinzând o aprovizionare proaspătă pentru masa ei în fiecare zi.
                    </p>
                    <p>
                        Săculețele cu lavandă erau folosite pentru parfumarea așternuturilor și pentru îndepărtarea molilor, puricilor 
                        și altor dăunători. Producătorul de săpun William de Yardley știa când vedea ceva bun (sau îl mirosea) și a 
                        reușit să obțină monopolul pe lavanda Angliei. Nu dorind să se despartă de această plantă de grădină îndrăgită, 
                        pelgrimii au adus-o cu ei în America de Nord.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a vârfurilor înflorite
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 2-3 ani sau ușor mai mult
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p>Nu utilizați uleiul esențial de lavandă când luați medicamente sedative.</p>
                        <p>
                            <strong>Important:</strong> Există mai multe tipuri de lavandă. Lavanda spaniolă (L. stoechas) este 
                            stimulatoare și are efectul opus lavandei engleze. Asigurați-vă că cumpărați tipul corect pentru scopuri terapeutice.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Floral erbaceu cu nuanțe lemnoase balsamice
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Dafin</span>
                            <span className="oil-tag">Piper negru</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Uleiuri citrice</span>
                            <span className="oil-tag">Chiparos</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Fructe de ienupăr</span>
                            <span className="oil-tag">Măghiran</span>
                            <span className="oil-tag">Mentă</span>
                            <span className="oil-tag">Pin</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Vetiver</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Lavanda este unul dintre cele mai versatile uleiuri esențiale, folosit pentru o gamă largă de condiții:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Anxietate</span>
                                <span className="condition-tag">Depresie</span>
                                <span className="condition-tag">Insomnie</span>
                                <span className="condition-tag">Stres</span>
                                <span className="condition-tag">Dureri de cap</span>
                                <span className="condition-tag">Migrene</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Piele și răni</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arsuri</span>
                                <span className="condition-tag">Tăieturi și zgârieturi</span>
                                <span className="condition-tag">Acnee</span>
                                <span className="condition-tag">Eczemă</span>
                                <span className="condition-tag">Psoriazis</span>
                                <span className="condition-tag">Cicatrici</span>
                                <span className="condition-tag">Arsuri solare</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Durere în gât</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular și durere</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Entorse</span>
                                <span className="condition-tag">Inflamație</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🧪 Descoperire istorică</h3>
                    <p className="historical-note">
                        Chimistul francez René-Maurice Gattefossé a redescoperit puterea vindecătoare a uleiului esențial de lavandă 
                        după ce și-a ars mâna în laborator. Ca o recunoaștere a descoperirii sale, lavanda face o alifie excelentă 
                        pentru arsuri. Lavanda este un regenerator al pielii care ameliorează durerea și vindecă fără cicatrici, 
                        făcând-o perfectă pentru tăieturi, arsuri și afecțiuni inflamatorii ale pielii.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Lemon_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lemonImage} 
                        alt="Copac de lămâie" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Lămâie</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Citrus limon syn. C. limonum
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Citron (franceză), lămâie comună
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Copacul de lămâie își urmărește originile ancestrale în India, China și Myanmar, unde civilizațiile antice 
                        îl prețuiau atât pentru atributele terapeutice cât și pentru aroma fermecătoare. Originând din regiunea 
                        Văii Indului, acest citric extraordinar a călătorit în Persia între 2500-500 î.Hr. înainte de a ajunge 
                        în final în Grecia clasică. Cultivatorii europeni medievali cultivau copacii de lămâie nu doar pentru 
                        fructele lor utile, ci și pentru farmecul lor decorativ.
                    </p>
                    <p>
                        Medicii europeni au adoptat lămâile ca tratament multiscop pentru numeroase condiții, considerând acest 
                        fruct vibrant ca remediul universal al naturii. Când călătoriile navale britanice au început să includă 
                        lămâile printre proviziile lor vitale, au transformat bunăstarea maritimă prin prevenirea cu succes a 
                        scorbutul. Acest citric modest a devenit un element esențial pentru conservarea vieții, protejând marinarii 
                        pe parcursul călătoriilor maritime periculoase.
                    </p>
                    <p>
                        Din perspectivă botanică, copacul de lămâie prezintă o înălțime modestă ajungând la aproximativ douăzeci 
                        de metri, având spini de protecție împrăștiați de-a lungul ramurilor sale. Frunzele caracteristice prezintă 
                        suprafețe superioare verde intens care contrastează frumos cu părțile inferioare mai palide. Procesul de 
                        înflorire începe cu muguri ușor parfumați roșiatici care se deschid în flori albe pure accentuate de margini 
                        roz pal, formând un spectacol captivant printre frunzajul strălucitor.
                    </p>
                    <p>
                        Din punct de vedere etimologic, urmărirea cuvântului "lămâie" dezvăluie o moștenire lingvistică fascinantă. 
                        Cuvântul francez <em>citron</em> provenea din origini latine, unde reprezenta toate speciile de citrice. 
                        Grecii clasici foloseau <em>kitrion</em>, probabil derivat din <em>kedris</em> însemnând "con de cedru", 
                        o asociație declanșată de forma caracteristică a fructelor imature, în dezvoltare.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Presarea la rece a întregului fruct
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Galben-verzui pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 9-12 luni
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Fototoxic:</strong> Acest ulei esențial poate cauza iritația pielii sau sensibilizarea și este 
                        fototoxic. Evitați expunerea la soare timp de 12-18 ore după aplicarea topică.</p>
                        <p><strong>Sensibilitate cutanată:</strong> Diluați întotdeauna corespunzător și efectuați un test de 
                        toleranță înainte de utilizare. Nu aplicați nediluat pe piele.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Proaspăt, curat, citric, strălucitor și revigorant cu note de vârf ascuțite, picante
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ghimbir</span>
                            <span className="oil-tag">Grepfrut</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Mentă</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Arbore de ceai</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Uleiul esențial de lămâie este renumit pentru proprietățile sale de curățare, purificare și energizare:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Claritate mentală</span>
                                <span className="condition-tag">Focalizare</span>
                                <span className="condition-tag">Îmbunătățirea dispoziției</span>
                                <span className="condition-tag">Dureri de cap</span>
                                <span className="condition-tag">Decalaj orar</span>
                                <span className="condition-tag">Mahmureală</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Afecțiuni cutanate</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acnee</span>
                                <span className="condition-tag">Vezicule</span>
                                <span className="condition-tag">Furuncule</span>
                                <span className="condition-tag">Herpes labial</span>
                                <span className="condition-tag">Tăieturi și zgârieturi</span>
                                <span className="condition-tag">Negi</span>
                                <span className="condition-tag">Bătături și dureri</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator și imunitar</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Gripă</span>
                                <span className="condition-tag">Febră</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulație și durere</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Gută</span>
                                <span className="condition-tag">Circulație</span>
                                <span className="condition-tag">Vene varicoase</span>
                                <span className="condition-tag">Celulită</span>
                                <span className="condition-tag">Engeluri</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🐛 Probleme externe</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Înțepături de insecte</span>
                                <span className="condition-tag">Înțepături de insecte</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>⚓ Medicina maritimă</h3>
                    <p className="historical-note">
                        Uleiul esențial de lămâie poartă o moștenire de medicină maritimă. Navele britanice transportau lămâi 
                        ca marfă standard pentru a preveni scorbutul printre marinari în timpul călătoriilor lungi. Această 
                        practică a fost atât de eficace încât marinarii britanici au devenit cunoscuți ca "limeys". Astăzi, 
                        uleiul esențial de lămâie continuă această tradiție de protecție și vindecare, oferind proprietăți 
                        puternice antioxidante și de susținere a imunității.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Aplicații moderne</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🏠 Casnic</h4>
                            <p>Dezinfectant natural, purificator de aer și agent de curățare</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Aromaterapie</h4>
                            <p>Energizant, revigorant și de îmbunătățire a concentrării</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Terapeutic</h4>
                            <p>Drenaj limfatic, detoxifiere și susținerea imunității</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Mandarin_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={mandarinImage} 
                        alt="Copac de mandarină" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Mandarină</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Citrus reticulata syn. C. nobilis
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Mandarină europeană, portocală mandarină, mandarină adevărată
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Deși acești copaci citrici au fost introduși pentru prima dată pe solul european la începutul anilor 1800, 
                        mandarinele au înflorit în cultivarea chineză de mai bine de patru milenii. Fructul și-a primit numele 
                        posibil de la funcționarii guvernamentali cunoscuți ca mandarini care purtau haine galbene, legând acest 
                        citric vibrant de moștenirea și obiceiurile chineze antice.
                    </p>
                    <p>
                        Denumirea botanică provine din termenul latin <em>reticulat</em>, însemnând "în formă de plasă", care 
                        descrie miezul alb în formă de pânză de păianjen găsit sub coajă. Acest copac spinos compact prezintă 
                        ramuri gracioase și frunziș oval lucios, formând o siluetă atractivă în livezile de citrice. Florile 
                        sale cremoase sunt intens aromatice, saturând atmosfera cu parfumul lor mieros și captivant.
                    </p>
                    <p>
                        Cuvintele mandarină și tanjerină sunt folosite frecvent sinonim deoarece fructele par practic identice 
                        observatorilor ocazionali și posedă aceeași nomenclatură științifică. Cu toate acestea, mandarina reprezintă 
                        clasificarea pentru varietățile de citrice care se decojesc fără efort. Tanjerina este considerată o 
                        subdiviziune a mandarinei sau o varietate de mandarină cu colorația portocaliu-roșiatic mai profundă.
                    </p>
                    <p>
                        De la grădinile regale chineze istorice la aplicațiile contemporane de aromaterapie, mandarina și-a 
                        păstrat poziția atât ca fruct plăcut cât și ca agent terapeutic blând. Caracterul său dulce și revigorant 
                        a făcut-o să fie deosebit de prețuită pentru aromaterapia pediatrică și îngrijirea emoțională delicată.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Presarea la rece a cojii
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Verzui-portocaliu
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 9-12 luni
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>În general sigur:</strong> Uleiul esențial de mandarină este în general considerat sigur și 
                        este unul dintre cele mai blânde uleiuri citrice disponibile.</p>
                        <p><strong>Piele sensibilă:</strong> Deși în general non-fototoxic, poate fi fototoxic pentru persoanele 
                        cu piele sensibilă. Efectuați un test de toleranță înainte de utilizare și evitați lumina solară directă 
                        după aplicare dacă aveți piele sensibilă.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Dulce, proaspăt, citric cu note de vârf blânde, revigorante și vesele
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Mușețel</span>
                            <span className="oil-tag">scorțișoară</span>
                            <span className="oil-tag">Cui</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Grepfrut</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Nucșoară</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Santal</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Uleiul esențial de mandarină este prețuit pentru proprietățile sale blânde și revigorante și este 
                        deosebit de potrivit pentru copii și persoane sensibile:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stres</span>
                                <span className="condition-tag">Insomnie</span>
                                <span className="condition-tag">Anxietate</span>
                                <span className="condition-tag">Depresie</span>
                                <span className="condition-tag">Tensiune nervoasă</span>
                                <span className="condition-tag">Agitație</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Afecțiuni cutanate</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acnee</span>
                                <span className="condition-tag">Cicatrici</span>
                                <span className="condition-tag">Vergeturi</span>
                                <span className="condition-tag">Piele grasă</span>
                                <span className="condition-tag">Tonifierea pielii</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🍽️ Suport digestiv</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Indigestie</span>
                                <span className="condition-tag">Constipație</span>
                                <span className="condition-tag">Greaţă</span>
                                <span className="condition-tag">Tulburări digestive</span>
                                <span className="condition-tag">Pierderea apetitului</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌙 Recuperare și bunăstare</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Mahmureală</span>
                                <span className="condition-tag">Oboseală</span>
                                <span className="condition-tag">Convalescență</span>
                                <span className="condition-tag">Tristețea sezonieră</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎋 Înțelepciunea chineză</h3>
                    <p className="historical-note">
                        De peste patru mii de ani, mandarina a fost prețuită în medicina și cultura chineză. Conexiunea cu 
                        funcționarii mandarini în robele lor galbene simbolizează înțelepciunea, prosperitatea și autoritatea 
                        blândă. Astăzi, uleiul esențial de mandarină continuă această tradiție de vindecare blândă, oferind 
                        confort dulce și echilibru emoțional fără intensitate copleșitoare.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Proprietăți speciale</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>👶 Prietenos cu copiii</h4>
                            <p>Unul dintre cele mai sigure uleiuri citrice pentru copii, promovând calmul și somnul liniștit</p>
                        </div>
                        <div className="use-category">
                            <h4>🤰 Sigur în sarcină</h4>
                            <p>În general considerat sigur în timpul sarcinii când este folosit corespunzător</p>
                        </div>
                        <div className="use-category">
                            <h4>😌 Terapie blândă</h4>
                            <p>Perfect pentru persoanele sensibile care găsesc alte uleiuri citrice prea stimulatoare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Pine_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={pineTreeImage} 
                        alt="Copac de pin" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Pin</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Pinus sylvestris
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Pin scoțian, pin nordic, pin roșu
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Pinul scoțian este un copac coniferă majestativ care poate atinge înălțimi impresionante de până la 
                        35 de metri, fiind caracterizat de trunchiul său drept, înalt și de coroana sa distinctă în formă 
                        de umbrelă la maturitate. Scoarța sa portocaliu-roșiatică caracteristică și acele sale verde-albăstrui 
                        împerecheate fac din acest copac o prezență inconfundabilă în peisajele nordice.
                    </p>
                    <p>
                        Istoric, pinul a fost venerat de civilizațiile nordice pentru durabilitatea și versatilitatea sa. 
                        Vikingii foloseau pinul pentru construirea navelor lor de război, în timp ce populațiile indigene 
                        din Europa de Nord îl prețuiau pentru proprietățile sale medicinale. Rășina și acele de pin erau 
                        folosite pentru tratarea afecțiunilor respiratorii și ca antiseptic natural în timpul iernilor severe.
                    </p>
                    <p>
                        În mitologia nordică, pinul era considerat un arbore sacru, simbolizând longevitatea, înțelepciunea 
                        și rezistența. Multe culturi tradiționale considerau că pinul conectează pământul cu cerul, fiind 
                        un mediator între lumea fizică și cea spirituală.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a acelor și ramurilor tinere
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben foarte pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire până la medie
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 2-3 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Iritarea pielii:</strong> Poate cauza iritarea pielii sensibile. Diluați întotdeauna 
                        înainte de aplicarea topică.</p>
                        <p><strong>Afecțiuni respiratorii severe:</strong> Consultați un medic înainte de utilizare dacă 
                        aveți astm sever sau alte afecțiuni respiratorii grave.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Proaspăt, răcoritor, de pădure, cu note lemnoase puternice și balsamice
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Chiparos</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Măghiran</span>
                            <span className="oil-tag">Mentă</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Arbore de ceai</span>
                            <span className="oil-tag">Cimbru</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Uleiul esențial de pin este renumit pentru proprietățile sale purifiatoare și de susținere respiratorie:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Sinuzită</span>
                                <span className="condition-tag">Durere în gât</span>
                                <span className="condition-tag">Congestie nazală</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular și articular</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Reumatism</span>
                                <span className="condition-tag">Rigiditate articulară</span>
                                <span className="condition-tag">Entorse</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Oboseală mentală</span>
                                <span className="condition-tag">Concentrare</span>
                                <span className="condition-tag">Epuizare nervoasă</span>
                                <span className="condition-tag">Stres</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Antiseptic și antimicrobian</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Dezinfectarea aerului</span>
                                <span className="condition-tag">Infecții respiratorii</span>
                                <span className="condition-tag">Răni minore</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🌲 Terapia pădurii</h3>
                    <p className="historical-note">
                        Uleiul esențial de pin aduce beneficiile terapeutice ale pădurii direct în casa dvs. Practica 
                        japoneză "shinrin-yoku" (băile de pădure) demonstrează că petrecerea timpului în pădurile de 
                        conifere reduce stresul, întărește imunitatea și îmbunătățește starea de bine generală. Uleiul 
                        de pin oferă o modalitate de a accesa aceste beneficii oricând.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_TeaTree_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={teaTree} 
                        alt="Arbore de ceai" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Arbore de Ceai</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Melaleuca alternifolia
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Ti-tree, melaleuca cu frunze înguste
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Arborele de ceai este o specie nativă din Australia, crescând în mod natural în zonele umede din 
                        New South Wales și Queensland de Sud-Est. Acest arbust sau copac mic poate atinge înălțimi de 
                        până la 7 metri și este caracterizat de frunzele sale liniare, înguste și de scoarța papiracee 
                        care se exfoliază în straturi subțiri.
                    </p>
                    <p>
                        Aborigenii australieni au folosit frunzele de arbore de ceai timp de mii de ani pentru proprietățile 
                        lor vindecătoare. Ei zdrobeau frunzele proaspete și le inhalau pentru a trata tusea și răcelile, 
                        sau făceau comprese pentru a trata rănile și infecțiile pielii. Numele "tea tree" a fost dat de 
                        căpitanul James Cook și echipajul său în anii 1770, când au preparat ceai din frunzele acestor 
                        arbori ca înlocuitor pentru ceaiul negru.
                    </p>
                    <p>
                        În timpul celui de-Al Doilea Război Mondial, uleiul de arbore de ceai era atât de prețuit pentru 
                        proprietățile sale antiseptice încât guvernul australian l-a inclus în kitul standard de prim-ajutor 
                        al fiecărui soldat și marinar. Astăzi, arborele de ceai este cultivat în întreaga lume pentru 
                        producția de ulei esențial.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a frunzelor și ramurilor
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 2-3 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Nu se ingerează:</strong> Uleiul de arbore de ceai poate fi toxic dacă este înghițit.</p>
                        <p><strong>Sensibilitate cutanată:</strong> Poate cauza iritații la persoanele cu piele sensibilă. 
                        Efectuați întotdeauna un test de toleranță înainte de utilizare.</p>
                        <p><strong>Oxidare:</strong> Uleiul oxidat poate crește riscul de sensibilizare. Depozitați în 
                        condiții răcoroase și întunecate.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Medicinal, puternic, curat, cu note camforice și erbacee
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Chiparos</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Măghiran</span>
                            <span className="oil-tag">Niaouli</span>
                            <span className="oil-tag">Pin</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Cimbru</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Arborele de ceai este unul dintre cele mai puternice antiseptice naturale și este folosit pentru 
                        o gamă largă de afecțiuni:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Afecțiuni cutanate</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acnee</span>
                                <span className="condition-tag">Infecții fungice</span>
                                <span className="condition-tag">Piciorul atletului</span>
                                <span className="condition-tag">Ciuperca unghiilor</span>
                                <span className="condition-tag">Eczemă</span>
                                <span className="condition-tag">Psoriazis</span>
                                <span className="condition-tag">Răni minore</span>
                                <span className="condition-tag">Tăieturi</span>
                                <span className="condition-tag">Furuncule</span>
                                <span className="condition-tag">Negi</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Gripă</span>
                                <span className="condition-tag">Sinuzită</span>
                                <span className="condition-tag">Durere în gât</span>
                                <span className="condition-tag">Tuse</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Antiseptic și antimicrobian</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Infecții bacteriene</span>
                                <span className="condition-tag">Infecții virale</span>
                                <span className="condition-tag">Infecții fungice</span>
                                <span className="condition-tag">Dezinfectarea rănilor</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦷 Igienă orală</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Gingivită</span>
                                <span className="condition-tag">Aftas</span>
                                <span className="condition-tag">Miros gură</span>
                                <span className="condition-tag">Infecții bucale</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🏥 Puterea antiseptică</h3>
                    <p className="historical-note">
                        Arborele de ceai este de aproximativ 100 de ori mai puternic decât acidul carbolic (fenolul) 
                        ca antiseptic, dar este mult mai blând pentru piele. Această combinație unică de putere și 
                        blândețe a făcut din uleiul de arbore de ceai un element de bază în medicina naturală modernă. 
                        Este unul dintre puținele uleiuri esențiale care poate fi aplicat neat (nediluat) pe piele 
                        în cantități mici pentru tratarea punctual a imperfecțiunilor.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Myrrh_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={myrrhImage} 
                        alt="Plantă de smirnă" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Smirnă</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Commiphora myrrha
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Smirnă adevărată, guggul african, bol, mohor
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Smirna provine din arbuști spinoși mici sau copaci care cresc în regiunile aride din Somalia, 
                        Etiopia, Sudan și peninsula Arabică. Aceste plante robuste pot supraviețui în condiții extreme 
                        de secetă și cresc din fisuri în stâncă sau în soluri foarte sărace. Rășina prețioasă se obține 
                        prin incizia scoarței, care permite scurgerea unui exsudat galben-portocaliu care se întărește 
                        în "lacrimi" aromate.
                    </p>
                    <p>
                        Smirna are una dintre cele mai vechi și mai venerabile istorii dintre toate substanțele aromatice. 
                        Era mai prețioasă decât aurul în civilizațiile antice și era folosită ca monedă de schimb. 
                        Egiptenii antici au folosit smirna în procesul complex de mumificare, valorificând proprietățile 
                        sale puternice de conservare și parfumul durabil.
                    </p>
                    <p>
                        În tradițiile religioase, smirna ocupă un loc sacru. În creștinism, a fost unul dintre darurile 
                        aduse de magii pruncului Isus, simbolizând mortalitatea și suferința umană. În medicina 
                        ayurvedică și în medicina tradițională chineză, smirna este prețuită pentru proprietățile sale 
                        de vindecare și purificare spirituală.
                    </p>
                    <p>
                        Comercianții antici au călătorit mii de kilometri prin deșerturi periculoase pentru a obține 
                        această rășină prețioasă, care era folosită în parfumuri, medicamente și ritualuri religioase 
                        în întreaga lume antică.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a rășinii (gomo-rășină)
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Portocaliu închis până la maro-roșiatic
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Medie până la groasă
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 4-6 ani sau mai mult
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Sarcina:</strong> Evitați în timpul sarcinii, deoarece poate stimula contracțiile uterine.</p>
                        <p><strong>Diabetul:</strong> Poate afecta nivelurile de zahăr din sânge. Consultați medicul dacă 
                        aveți diabet.</p>
                        <p><strong>În general sigur:</strong> Când este folosit corespunzător, smirna este considerată sigură 
                        pentru majoritatea adulților.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Cald, pământesc, balsamic, ușor medicinal cu note de bază bogate și lemnos-fumuroase
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Chiparos</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ghimbir</span>
                            <span className="oil-tag">Grepfrut</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Trandafir</span>
                            <span className="oil-tag">Santal</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Smirna este venerată pentru proprietățile sale puternice de vindecare și regenerare:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Vindecarea pielii</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Piele îmbătrânită</span>
                                <span className="condition-tag">Cicatrici</span>
                                <span className="condition-tag">Vergeturi</span>
                                <span className="condition-tag">Riduri</span>
                                <span className="condition-tag">Crăpături ale pielii</span>
                                <span className="condition-tag">Eczemă</span>
                                <span className="condition-tag">Dermatită</span>
                                <span className="condition-tag">Răni care se vindecă greu</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită cronică</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Congestie pulmonară</span>
                                <span className="condition-tag">Catarh</span>
                                <span className="condition-tag">Durere în gât</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦷 Sănătatea orală</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Gingivită</span>
                                <span className="condition-tag">Periodontită</span>
                                <span className="condition-tag">Aftas</span>
                                <span className="condition-tag">Infecții bucale</span>
                                <span className="condition-tag">Miros gură</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧘 Spiritual și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Meditație</span>
                                <span className="condition-tag">Liniște spirituală</span>
                                <span className="condition-tag">Doliu și pierdere</span>
                                <span className="condition-tag">Vindecare emoțională</span>
                                <span className="condition-tag">Înțelepciune interioară</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>⚱️ Darul Magilor</h3>
                    <p className="historical-note">
                        Smirna a fost unul dintre cele trei daruri sacre (alături de aur și tămâie) aduse pruncului 
                        Isus de către magii din Răsărit. În timp ce aurul simboliza bogăția regală și tămâia divinitatea, 
                        smirna reprezenta mortalitatea și puterea de vindecare. Astăzi, smirna continuă să fie prețuită 
                        pentru capacitatea sa de a vindeca nu doar trupul, ci și sufletul, oferind confort în momente 
                        de doliu și transformare spirituală.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Sandalwood_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={sandalwoodImage} 
                        alt="Copac de santal" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Santal</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Santalum album
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Santal indian, santal alb, sandalul adevărat
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Santalul este un copac semi-parazit care crește în mod natural în India de Sud, în special în 
                        statul Karnataka, precum și în părți din Australia și Pacific. Copacul poate atinge înălțimi de 
                        până la 20 de metri și are caracteristica unică de a-și obține nutrienții parțial din rădăcinile 
                        altor copaci prin conexiuni specializate numite haustorii.
                    </p>
                    <p>
                        Santalul are o istorie de peste 4.000 de ani în cultura indiană, fiind menționat în vechile texte 
                        sanscrite și considerat sacru în hinduism și budism. Pasta de santal era folosită pentru marcarea 
                        frunții în ritualurile religioase, iar lemnul aromat era ars în temple ca ofrandă divină. În 
                        medicina ayurvedică, santalul este clasificat ca având proprietăți răcoritoare și calmante.
                    </p>
                    <p>
                        Datorită supraexploatării, santalul indian adevărat (Santalum album) a devenit extrem de rar și 
                        scump, fiind protejat prin legi stricte în India. Un copac trebuie să aibă cel puțin 15-20 de ani 
                        pentru a dezvolta cantitatea optimă de ulei esențial în lemn, iar cea mai înaltă concentrație se 
                        găsește în inima copacului matur.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a lemnului de inimă
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Galben pal până la galben-auriu
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Medie
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 10+ ani (se îmbunătățește cu timpul)
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>În general foarte sigur:</strong> Santalul este considerat unul dintre cele mai sigure 
                        uleiuri esențiale, potrivit pentru toate tipurile de piele.</p>
                        <p><strong>Autenticitate:</strong> Din cauza prețului ridicat, santalul este adesea falsificat. 
                        Cumpărați doar de la furnizori de încredere care pot dovedi autenticitatea.</p>
                        <p><strong>Sustenabilitate:</strong> Alegeți santalul australian (Santalum spicatum) ca alternativă 
                        mai sustenabilă la santalul indian pe cale de dispariție.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Dulce, cald, cremos, lemn bogate cu note de bază persistente și balsamice
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Piper negru</span>
                            <span className="oil-tag">Mușețel</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Iasomie</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Smirnă</span>
                            <span className="oil-tag">Neroli</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Trandafir</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Santalul este renumit pentru efectele sale calmante și proprietățile de îngrijire a pielii:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Îngrijirea pielii</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Piele uscată</span>
                                <span className="condition-tag">Piele sensibilă</span>
                                <span className="condition-tag">Piele iritată</span>
                                <span className="condition-tag">Riduri</span>
                                <span className="condition-tag">Cicatrici</span>
                                <span className="condition-tag">Dermatită</span>
                                <span className="condition-tag">Eczemă</span>
                                <span className="condition-tag">Întărirea pielii</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Anxietate</span>
                                <span className="condition-tag">Stres</span>
                                <span className="condition-tag">Insomnie</span>
                                <span className="condition-tag">Depresie</span>
                                <span className="condition-tag">Tensiune nervoasă</span>
                                <span className="condition-tag">Agitație</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Tuse uscată</span>
                                <span className="condition-tag">Durere în gât</span>
                                <span className="condition-tag">Congestie</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧘 Spiritual și meditativ</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Meditație</span>
                                <span className="condition-tag">Concentrare spirituală</span>
                                <span className="condition-tag">Linistea minții</span>
                                <span className="condition-tag">Conexiunea divină</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🕉️ Parfumul divinității</h3>
                    <p className="historical-note">
                        În tradițiile spirituale indiene, santalul este cunoscut ca "parfumul divinității". Se crede că 
                        aroma sa deschide chakra inimii și facilitează comunicarea cu divinul. Santalul era atât de 
                        prețuit încât doar nobilimea și preoții aveau voie să-l folosească în ritualurile religioase. 
                        Astăzi, santalul continuă să fie un aliat puternic în practici de meditație și dezvoltare 
                        spirituală, ajutând la crearea unui spațiu sacru de liniște și contemplație.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Ginger_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={gingerImage} 
                        alt="Plantă de ghimbir" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Ghimbir</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Zingiber officinale
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Ghimbir comun, rădăcină de ghimbir
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Ghimbirul este o plantă tropicală perenă cu tulpini aromate subterane (rizomi) care sunt folosite 
                        atât în scopuri culinare cât și medicinale. Planta poate crește până la 1,5 metri înălțime și 
                        produce flori galbene-verzi strălucitoare aranjate în spice dense. Partea cea mai valoroasă este 
                        rizomul nodulos, îngroșat, care conține compușii activi responsabili pentru proprietățile terapeutice.
                    </p>
                    <p>
                        Originarul din Asia de Sud-Est, ghimbirul are o istorie de peste 5.000 de ani ca plantă medicinală 
                        și condiment. Antic China și India au fost primele care au recunoscut valoarea sa terapeutică, 
                        folosindu-l pentru tratarea problemelor digestive, nauzei și inflamației. Comercianții arabi au 
                        adus ghimbirul în Europa în secolul al IX-lea, unde a devenit una dintre especiile cele mai 
                        prețuite.
                    </p>
                    <p>
                        În medicina tradițională chineză, ghimbirul este considerat o plantă "încălzitoare" care stimulează 
                        circulația și echilibrează energia corpului. Medicina ayurvedică din India îl clasează ca pe o 
                        plantă universală vindecătoare, numită "vishwabhesaj", fiind folosită pentru aproape toate 
                        tipurile de disconfort digestiv.
                    </p>
                    <p>
                        Marinarii din trecut foloseau ghimbirul pentru a preveni răul de mare, o practică care continuă 
                        și astăzi. Durante secolele XVI-XVII, ghimbirul era atât de valoros încât un kilogram de ghimbir 
                        se schimba pe o oaie!
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a rizomilor proaspeți sau uscați
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Galben pal până la galben-amberĂ
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire până la medie
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 3-4 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Fototoxicitate:</strong> Poate crește sensibilitatea la soare. Evitați expunerea directă 
                        la soare după aplicarea topică.</p>
                        <p><strong>Piele sensibilă:</strong> Poate cauza iritații la persoanele cu piele foarte sensibilă. 
                        Diluați întotdeauna corespunzător.</p>
                        <p><strong>Medicație anticoagulantă:</strong> Consultați medicul dacă luați medicamente 
                        anticoagulante, deoarece ghimbirul poate intensifica efectele acestora.</p>
                        <p><strong>Sarcina:</strong> În general considerat sigur în cantități mici, dar consultați medicul.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Cald, picant, proaspăt cu note de vârf ascuțite și un corp lemon-citric
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Scorțișoară</span>
                            <span className="oil-tag">Uleiuri citrice</span>
                            <span className="oil-tag">Coriandru</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Smirnă</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Santal</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Ghimbirul este renumit în special pentru proprietățile sale digestive și anti-inflamatorii:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🍽️ Digestiv</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Greaţă</span>
                                <span className="condition-tag">Vărsături</span>
                                <span className="condition-tag">Răul de mișcare</span>
                                <span className="condition-tag">Răul de mare</span>
                                <span className="condition-tag">Indigestie</span>
                                <span className="condition-tag">Balonări</span>
                                <span className="condition-tag">Pierderea apetitului</span>
                                <span className="condition-tag">Crampe digestive</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulație și durere</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Circulație slabă</span>
                                <span className="condition-tag">Mâini și picioare reci</span>
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Reumatism</span>
                                <span className="condition-tag">Entorse</span>
                                <span className="condition-tag">Inflamație</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Gripă</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Congestie</span>
                                <span className="condition-tag">Sinuzită</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Oboseală mentală</span>
                                <span className="condition-tag">Lipsa de concentrare</span>
                                <span className="condition-tag">Confuzia</span>
                                <span className="condition-tag">Memoria slabă</span>
                                <span className="condition-tag">Epuizare nervoasă</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🚢 Remediul marinarilor</h3>
                    <p className="historical-note">
                        Ghimbirul a fost "remediul marinarilor" timp de secole, fiind singurul tratament eficace pentru 
                        răul de mare disponibil pe navele de pe mari. Chiar și astăzi, studiile moderne confirmă că 
                        ghimbirul este mai eficace decât multe medicamente moderne pentru prevenirea și tratarea greței 
                        induse de mișcare. Această plantă remarcabilă nu doar că calmează stomacul, dar stimulează și 
                        circulația, încălzește corpul și întărește digestia - calități perfecte pentru viață grea de pe mare.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Rosemary_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={rosemaryImage} 
                        alt="Plantă de rozmarin" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Rozmarin</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Rosmarinus officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Roua mării, rozmarin comun, rozmarin de grădină
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Rozmarinul este un arbust aromat, evergreen, nativ din regiunea mediteraneană. Poate crește până 
                        la 2 metri înălțime și este caracterizat de frunzele sale înguste, ca niște ace, de culoare 
                        verde închis pe partea superioară și gri-argintiu pe partea inferioară. Florile mici, de culoare 
                        albastru-purpurie, alb sau roz, îl fac nu doar util, ci și decorativ în grădini.
                    </p>
                    <p>
                        Numele "rozmarin" derivă din termenul latin "ros marinus", însemnând "roua mării", o referință 
                        la faptul că această plantă crește natural lângă coastele mediteraneene. Grecii antici credeau 
                        că rozmarinul îmbunătățește memoria și inteligența, de aceea studenții purtau coroane de rozmarin 
                        în timpul examenelor. Această credință s-a dovedit a avea o bază științifică - cercetările moderne 
                        confirmă că rozmarinul poate îmbunătăți funcțiile cognitive.
                    </p>
                    <p>
                        În Evul Mediu, rozmarinul era cunoscut ca "planta amintirii" și era folosit în ceremoniile de 
                        nuntă ca simbol al fidelității și în ritualurile funerare pentru a onora memoria celor decedați. 
                        Shakespeare a imortalizat această asociere în "Hamlet" prin personajul Ophelia: "Acesta este 
                        rozmarinul, pentru amintire."
                    </p>
                    <p>
                        Legenda spune că Virgin Maria și-a întins mantaua albastră peste un tufiș de rozmarin cu flori 
                        albe în timpul călătoriei în Egipt, iar din acel moment florile au devenit albastre. De atunci, 
                        planta este cunoscută și ca "Trandafirul Mariei".
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a frunzelor și vârfurilor înflorite
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben foarte pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 3-4 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Epilepsia:</strong> Evitați dacă aveți epilepsie, deoarece conținutul ridicat de 
                        cineol poate declanșa convulsii.</p>
                        <p><strong>Tensiunea arterială:</strong> Folosiți cu precauție dacă aveți tensiune arterială ridicată.</p>
                        <p><strong>Sarcina:</strong> Evitați în timpul sarcinii, mai ales în primul trimestru.</p>
                        <p><strong>Copii:</strong> Nu folosiți la copii sub 6 ani.</p>
                        <p><strong>Stimulant:</strong> Evitați seara, deoarece poate interfere cu somnul.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Proaspăt, erbaceu, camforic cu note de pin și un fond cald, lemn
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Busuioc</span>
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Piper negru</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Scorțișoară</span>
                            <span className="oil-tag">Uleiuri citrice</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ghimbir</span>
                            <span className="oil-tag">Grepfrut</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Măghiran</span>
                            <span className="oil-tag">Mentă</span>
                            <span className="oil-tag">Pin</span>
                            <span className="oil-tag">Cimbru</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Rozmarinul este cunoscut în special pentru capacitatea sa de a stimula mintea și circulația:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Cognitiv și mental</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Memoria slabă</span>
                                <span className="condition-tag">Concentrarea</span>
                                <span className="condition-tag">Claritatea mentală</span>
                                <span className="condition-tag">Oboseala mentală</span>
                                <span className="condition-tag">Confuzia</span>
                                <span className="condition-tag">Dureri de cap</span>
                                <span className="condition-tag">Migrene</span>
                                <span className="condition-tag">Depresie</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulație și inimă</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Circulație slabă</span>
                                <span className="condition-tag">Tensiune arterială mică</span>
                                <span className="condition-tag">Mâini și picioare reci</span>
                                <span className="condition-tag">Vene varicoase</span>
                                <span className="condition-tag">Celulită</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular și durere</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Reumatism</span>
                                <span className="condition-tag">Gută</span>
                                <span className="condition-tag">Entorse</span>
                                <span className="condition-tag">Neuralgii</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💇‍♀️ Păr și scalp</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Căderea părului</span>
                                <span className="condition-tag">Mătreața</span>
                                <span className="condition-tag">Păr gras</span>
                                <span className="condition-tag">Stimularea creșterii părului</span>
                                <span className="condition-tag">Circulația scalpului</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Sinuzită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Gripă</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎓 Planta memoriei</h3>
                    <p className="historical-note">
                        Studenții greci antici purtau coroane de rozmarin pentru a-și îmbunătăți memoria în timpul 
                        examenelor, o practică bazată pe observația că aroma rozmarinului pare să stimuleze funcțiile 
                        cognitive. Cercetările moderne confirmă această înțelepciune antică: studiile arată că compușii 
                        din rozmarinul pot îmbunătăți memoria de lucru și pot încetini degenerarea asociată cu vârsta. 
                        Astăzi, rozmarinul continuă să fie "planta memoriei", oferind suport natural pentru funcțiile 
                        cognitive și claritatea mentală.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_ClarySage_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={clarySageImage} 
                        alt="Plantă de salvie" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Salvie</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Salvia sclarea
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Salvie moscată, salvie romană, ochiul lui Hristos
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Salvia este o plantă erbacee bienală care poate atinge înălțimi de până la 1,2 metri, nativă 
                        din Europa de Sud și zona mediteraneană. Se caracterizează prin frunzele sale mari, ovale, 
                        catifelate și florile sale spectaculoase în nuanțe de albastru-purpuriu, roz sau alb, 
                        aranjate în spice înalte și impresionante.
                    </p>
                    <p>
                        Numele "sclarea" derivă din cuvântul latin "clarus", însemnând "clar", o referință la 
                        utilizarea tradițională a plantei pentru curățarea ochilor. În Evul Mediu, salviile erau 
                        cunoscute ca "ochiul lui Hristos" pentru această proprietate. Salvia moscată era considerată 
                        atât de valoroasă pentru claritatea vizuală încât era numită "oculus Christi".
                    </p>
                    <p>
                        În medicina tradițională europeană, salvia era cunoscută ca plantă "pentru femei", fiind 
                        folosită pentru reglarea ciclului menstrual și pentru ușurarea simptomelor menopauzei. 
                        Numele "salvie" însuși derivă din termenul latin "salvare", însemnând "a salva" sau "a vindeca".
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a frunzelor și vârfurilor înflorite
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben foarte pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 2-3 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Sarcina și alăptarea:</strong> Evitați în timpul sarcinii și alăptării.</p>
                        <p><strong>Hormoni:</strong> Poate influența nivelurile hormonale. Consultați medicul dacă 
                        aveți condiții hormon-sensibile.</p>
                        <p><strong>Sedare:</strong> Poate cauza somnolență. Nu conduceți sau operați mașini după utilizare.</p>
                        <p><strong>Alcool:</strong> Nu combinați cu consumul de alcool - poate intensifica efectele sedative.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Dulce, floral, erbaceu cu note de nuci și o ușoară aromă de mușcat
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Chiparos</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ghimbir</span>
                            <span className="oil-tag">Grepfrut</span>
                            <span className="oil-tag">Iasomie</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Portocală</span>
                            <span className="oil-tag">Santal</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Salvia este renumită în special pentru efectele sale echilibratoare asupra sistemului hormonal feminin:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>👩 Sănătate feminină</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Menopauza</span>
                                <span className="condition-tag">Bufeurile</span>
                                <span className="condition-tag">Ciclul menstrual neregulat</span>
                                <span className="condition-tag">Sindromul premenstrual</span>
                                <span className="condition-tag">Crampe menstruale</span>
                                <span className="condition-tag">Transpirație nocturnă</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental și emoțional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stres</span>
                                <span className="condition-tag">Anxietate</span>
                                <span className="condition-tag">Depresie</span>
                                <span className="condition-tag">Insomnie</span>
                                <span className="condition-tag">Tensiune nervoasă</span>
                                <span className="condition-tag">Paranoia</span>
                                <span className="condition-tag">Frică</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Piele și îngrijire</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Inflamația pielii</span>
                                <span className="condition-tag">Piele îmbătrânită</span>
                                <span className="condition-tag">Riduri</span>
                                <span className="condition-tag">Regenerarea celulară</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular și durere</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Crampe</span>
                                <span className="condition-tag">Tensiune</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>👁️ Ochiul lui Hristos</h3>
                    <p className="historical-note">
                        Salviei i s-a spus "ochiul lui Hristos" în Evul Mediu pentru capacitatea sa de a clarifica 
                        vederea fizică și spirituală. Femeile foloseau salvia nu doar pentru claritatea ochilor, ci și 
                        pentru claritatea minții în timpul tranzițiilor hormonale dificile. Astăzi, salvia continuă să 
                        ofere această "claritate" metaforică, ajutând femeile să navigheze prin schimbările de viață cu 
                        mai multă înțelepciune și echilibru emoțional.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_SpanishSage_RO = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={spanishSageImage} 
                        alt="Salvie spaniolă" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Salvie Spaniolă</h1>
                    <p className="botanical-name">
                        <strong>NUMELE BOTANIC:</strong> Salvia lavandulifolia
                    </p>
                    <p className="also-known-as">
                        <strong>DE ASEMENEA CUNOSCUT CA:</strong> Salvie cu frunze de lavandă, salvie îngustă
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Descrierea plantei și istoria</h3>
                    <p>
                        Salvia spaniolă este un arbust mic, compact, evergreen, nativ din Spania și sudul Franței. 
                        Spre deosebire de salvia comună sau salvia moscată, această varietate are frunze mai înguste, 
                        similar cu cele de lavandă, de unde provine și numele său botanic "lavandulifolia". Planta 
                        produce flori albastre-purpurii caracteristice și poate atinge înălțimi de până la 60 cm.
                    </p>
                    <p>
                        Această salvie a fost folosită în medicina tradițională spaniolă și din sudul Franței timp de 
                        secole. Spre deosebire de alte varietăți de salvie, salvia spaniolă conține niveluri mai mici 
                        de tujona, făcând-o mai sigură pentru uz regulat. Ea a fost prețuită pentru capacitatea sa de 
                        a îmbunătăți memoria și concentrarea fără efectele secundare puternice ale altor specii de salvie.
                    </p>
                    <p>
                        În regiunea Mediteranei, salvia spaniolă era cunoscută ca "planta înțelepciunii" și era folosită 
                        de cărturari și filosofi pentru a-și păstra mintea clară și focalizată în timpul studiilor îndelungate.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🛢️ Descrierea uleiului și precauții</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Producție:</strong> Distilarea cu abur a frunzelor și vârfurilor înflorite
                        </div>
                        <div className="property-item">
                            <strong>Culoare:</strong> Incoloră până la galben pal
                        </div>
                        <div className="property-item">
                            <strong>Vâscozitate:</strong> Subțire
                        </div>
                        <div className="property-item">
                            <strong>Durată de viață:</strong> 2-3 ani
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precauții</h4>
                        <p><strong>Sigură pentru majoritatea utilizărilor:</strong> Salvia spaniolă este considerată mai 
                        sigură decât alte specii de salvie datorită conținutului redus de tujona.</p>
                        <p><strong>Sarcina:</strong> Ca măsură de precauție, evitați în timpul sarcinii.</p>
                        <p><strong>Epilepsia:</strong> Deși conține mai puțină tujona, persoanele cu epilepsie ar trebui 
                        să o evite.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Profilul parfumului și amestecul</h3>
                    <p className="scent-description">
                        <strong>Parfum:</strong> Proaspăt, erbaceu, camforic cu note de lavandă și un fond cald, aproape picant
                    </p>
                    <div className="blending-oils">
                        <h4>Se amestecă bine cu:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Busuioc</span>
                            <span className="oil-tag">Bergamotă</span>
                            <span className="oil-tag">Lemn de cedru</span>
                            <span className="oil-tag">Eucalipt</span>
                            <span className="oil-tag">Tămâie</span>
                            <span className="oil-tag">Mușcată</span>
                            <span className="oil-tag">Ienupăr</span>
                            <span className="oil-tag">Lavandă</span>
                            <span className="oil-tag">Lămâie</span>
                            <span className="oil-tag">Măghiran</span>
                            <span className="oil-tag">Pin</span>
                            <span className="oil-tag">Rozmarin</span>
                            <span className="oil-tag">Cimbru</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Utilizări medicinale</h3>
                    <p className="medicinal-intro">
                        Salvia spaniolă este renumită în special pentru efectele sale cognitive și de îmbunătățire a memoriei:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Cognitiv și mental</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Memoria</span>
                                <span className="condition-tag">Concentrarea</span>
                                <span className="condition-tag">Claritatea mentală</span>
                                <span className="condition-tag">Oboseala mentală</span>
                                <span className="condition-tag">Confuzia</span>
                                <span className="condition-tag">Demența (susținere)</span>
                                <span className="condition-tag">Alzheimer (susținere)</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respirator</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Astm</span>
                                <span className="condition-tag">Bronșită</span>
                                <span className="condition-tag">Răceală</span>
                                <span className="condition-tag">Tuse</span>
                                <span className="condition-tag">Congestie</span>
                                <span className="condition-tag">Sinuzită</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular și circulație</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Circulație slabă</span>
                                <span className="condition-tag">Dureri musculare</span>
                                <span className="condition-tag">Artrită</span>
                                <span className="condition-tag">Reumatism</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Antiseptic</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Infecții respiratorii</span>
                                <span className="condition-tag">Răni minore</span>
                                <span className="condition-tag">Dezinfectarea aerului</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎓 Planta înțelepciunii</h3>
                    <p className="historical-note">
                        Salvia spaniolă a fost numită "planta înțelepciunii" de către cărturarii mediteraneeni care 
                        au descoperit că această varietate particulară îmbunătățește memoria și concentrarea fără 
                        efectele secundare nedorite ale altor specii de salvie. Cercetările moderne confirmă că 
                        salvia spaniolă poate îmbunătăți performanța cognitivă și poate oferi protecție împotriva 
                        declinului mental legat de vârstă, făcând-o un aliat prețios pentru sănătatea creierului 
                        pe termen lung.
                    </p>
                </div>
            </div>
        </div>
    );
};

export { 
    EssentialOilProfile_Lavender_RO, 
    EssentialOilProfile_Lemon_RO, 
    EssentialOilProfile_Mandarin_RO,
    EssentialOilProfile_Pine_RO,
    EssentialOilProfile_TeaTree_RO,
    EssentialOilProfile_Myrrh_RO,
    EssentialOilProfile_Sandalwood_RO,
    EssentialOilProfile_Ginger_RO,
    EssentialOilProfile_Rosemary_RO,
    EssentialOilProfile_ClarySage_RO,
    EssentialOilProfile_SpanishSage_RO
};