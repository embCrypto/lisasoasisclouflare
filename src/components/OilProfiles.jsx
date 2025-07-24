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

const EssentialOilProfile_Lavender_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lavendelImage} 
                        alt="Lavender plant" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Lavender</h1>
                    <p className="botanical-name">
                        <strong>ORIGINAL BOTANICAL NAME:</strong> Lavandula angustifolia, syn. L. officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Common lavender, English lavender, garden lavender, true lavender
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        The plant typically grows to a modest height of one to three feet and produces slender, aromatic leaves 
                        and small tubular flowers arranged in elegant spikes. Its blossoms vary in color from soft lilac to deep 
                        violet and emit a sweet, herbaceous fragrance that has made lavender a favorite in gardens, herbal medicine, 
                        and perfumery for centuries.
                    </p>
                    <p>
                        Lavender's history is both rich and far-reaching. Its use can be traced back over 2,500 years to the ancient civilizations of Egypt, Greece, and Rome. The Egyptians prized it for embalming and cosmetic purposes, even placing jars of lavender-scented unguents in the tombs of pharaohs. In classical antiquity, the Greeks and Romans used lavender to scent their baths, linens, and homes. The name "lavender" itself derives from the Latin lavare, meaning "to wash," a nod to its cleansing and purifying qualities.
                    </p>
                    <p>During the Middle Ages, lavender became a staple in monastic medicine gardens across Europe. It was believed to ward off evil spirits and disease and was commonly scattered on floors to mask unpleasant odors and deter insects. By the Renaissance, lavender was firmly established as both a medicinal and ornamental plant, favored by royalty and commoners alike. Queen Elizabeth I was particularly fond of lavender, reportedly demanding a fresh supply for her table every day.</p>
                    <p>
                        Sachets of lavender were used to scent linens and deter moths, fleas, and other pests. Soap maker William of 
                        Yardley knew a good thing when he saw it (or smelled it) and managed to get a monopoly on England's lavender. 
                        Not willing to part with this beloved garden plant, the Pilgrims brought it with them to North America.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of the flower tops
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Colorless to pale yellow
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 2-3 years or slightly longer
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p>Do not use lavender essential oil when taking sedative medications.</p>
                        <p>
                            <strong>Important:</strong> There are several types of lavender. Spanish lavender (L. stoechas) is stimulating 
                            and has the opposite effect of English lavender. Make sure to purchase the right type for therapeutic purposes.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Herbaceous floral with balsamic woody undertones
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bay Laurel</span>
                            <span className="oil-tag">Black Pepper</span>
                            <span className="oil-tag">Cedarwood</span>
                            <span className="oil-tag">Citrus oils</span>
                            <span className="oil-tag">Cypress</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Juniper Berry</span>
                            <span className="oil-tag">Marjoram</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Pine</span>
                            <span className="oil-tag">Rosemary</span>
                            <span className="oil-tag">Vetiver</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Lavender is one of the most versatile essential oils, used for a wide range of conditions:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Anxiety</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Insomnia</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Headaches</span>
                                <span className="condition-tag">Migraines</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin & Wounds</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Burns</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Eczema</span>
                                <span className="condition-tag">Psoriasis</span>
                                <span className="condition-tag">Scars</span>
                                <span className="condition-tag">Sunburn</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Sore Throat</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular & Pain</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Sprains</span>
                                <span className="condition-tag">Inflammation</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🧪 Historical Discovery</h3>
                    <p className="historical-note">
                        French chemist René-Maurice Gattefossé rediscovered the healing power of lavender essential oil after 
                        burning his hand in the laboratory. As a nod to his discovery, lavender makes an excellent salve for 
                        burns. Lavender is a skin rejuvenator that relieves pain and heals without scarring, making it perfect 
                        for cuts, burns, and inflammatory skin conditions.
                    </p>
                </div>
            </div>
        </div>
        
    );
};

const EssentialOilProfile_Lemon_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={lemonImage} 
                        alt="Lemon tree" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Lemon</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Citrus limon syn. C. limonum
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Citron (French), Common lemon
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        The lemon tree traces its ancestral origins throughout India, China, and Myanmar, where ancient civilizations 
                        valued it for both therapeutic attributes and enchanting aroma. Originating from the Indus Valley region, 
                        this extraordinary citrus journeyed to Persia between 2500-500 BCE before ultimately reaching classical Greece. 
                        Medieval European cultivators grew lemon trees not merely for their useful fruit but also for their decorative charm.
                    </p>
                    <p>
                        European physicians adopted lemons as a multi-purpose treatment for numerous conditions, considering this 
                        vibrant fruit as nature's universal remedy. When British naval voyages started including lemons among their 
                        vital supplies, they transformed maritime wellness by successfully preventing scurvy. This humble citrus 
                        became a life-preserving essential, safeguarding mariners throughout perilous sea journeys.
                    </p>
                    <p>
                        From a botanical perspective, the lemon tree exhibits a modest height reaching approximately twenty feet, 
                        featuring protective spines scattered along its limbs. The characteristic leaves showcase rich green upper 
                        surfaces that contrast beautifully with paler undersides. The blooming process starts with gently scented 
                        reddish buds that unfold into pure white flowers accented by soft pink margins, forming a captivating 
                        spectacle among the glossy foliage.
                    </p>
                    <p>
                        Etymologically, tracing the word "lemon" uncovers intriguing linguistic heritage. The French word 
                        <em>citron</em> stemmed from Latin origins, where it represented all citrus species. Classical Greeks 
                        employed <em>kitrion</em>, presumably derived from <em>kedris</em> signifying "cedar cone," an association 
                        sparked by the characteristic form of immature, developing fruits.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Cold-pressing the entire fruit
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Pale greenish-yellow
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 9-12 months
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Phototoxic:</strong> This essential oil may cause skin irritation or sensitization and is phototoxic. 
                        Avoid sun exposure for 12-18 hours after topical application.</p>
                        <p><strong>Skin Sensitivity:</strong> Always dilute properly and perform a patch test before use. 
                        Do not apply undiluted to skin.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Fresh, clean, citrusy, bright and uplifting with sharp, zesty top notes
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamot</span>
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Ginger</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Rosemary</span>
                            <span className="oil-tag">Tea Tree</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Lemon essential oil is renowned for its cleansing, purifying, and energizing properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Mental Clarity</span>
                                <span className="condition-tag">Focus</span>
                                <span className="condition-tag">Mood Enhancement</span>
                                <span className="condition-tag">Headaches</span>
                                <span className="condition-tag">Jet Lag</span>
                                <span className="condition-tag">Hangover</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin Conditions</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Blisters</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Cold Sores</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Warts</span>
                                <span className="condition-tag">Corns & Calluses</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory & Immune</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Fever</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulation & Pain</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gout</span>
                                <span className="condition-tag">Circulation</span>
                                <span className="condition-tag">Varicose Veins</span>
                                <span className="condition-tag">Cellulite</span>
                                <span className="condition-tag">Chilblains</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🐛 External Issues</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Insect Bites</span>
                                <span className="condition-tag">Insect Stings</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>⚓ Maritime Medicine</h3>
                    <p className="historical-note">
                        Lemon essential oil carries a legacy of maritime medicine. British naval ships carried lemons as 
                        standard cargo to prevent scurvy among sailors during long voyages. This practice was so effective 
                        that British sailors became known as "limeys." Today, lemon essential oil continues this tradition 
                        of protection and healing, offering powerful antioxidant and immune-supporting properties.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🏠 Household</h4>
                            <p>Natural disinfectant, air purifier, and cleaning agent</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Aromatherapy</h4>
                            <p>Energizing, uplifting, and concentration-enhancing</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Therapeutic</h4>
                            <p>Lymphatic drainage, detoxification, and immune support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Mandarin_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={mandarinImage} 
                        alt="Mandarin tree" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Mandarin</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Citrus reticulata syn. C. nobilis
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> European mandarin, mandarin orange, true mandarin
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        While these citrus trees were first introduced to European soil in the early 1800s, mandarins have flourished 
                        in Chinese cultivation for more than four millennia. The fruit potentially received its name from the government 
                        officials known as mandarins who donned yellow garments, linking this vibrant citrus to ancient Chinese heritage 
                        and customs.
                    </p>
                    <p>
                        The botanical designation stems from the Latin term <em>reticulate</em>, signifying "mesh-like," which describes 
                        the white web-like pith found beneath the rind. This compact thorny tree features graceful branches and lustrous 
                        oval foliage, forming an attractive silhouette in citrus orchards. Its creamy blossoms are intensely aromatic, 
                        saturating the atmosphere with their honeyed, captivating fragrance.
                    </p>
                    <p>
                        The words mandarin and tangerine are frequently used synonymously since the fruits appear virtually identical 
                        to casual observers, and they possess the same scientific nomenclature. Nevertheless, mandarin represents the 
                        classification for citrus varieties that peel effortlessly. Tangerine is considered a subdivision of mandarin 
                        or a mandarin variety featuring deeper reddish-orange coloring.
                    </p>
                    <p>
                        From historical Chinese royal gardens to contemporary aromatherapy applications, mandarin has preserved its 
                        standing as both a pleasurable fruit and a mild therapeutic agent. Its sugary, uplifting character has rendered 
                        it especially cherished for pediatric aromatherapy and tender emotional care.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Cold-pressing the peel
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Greenish-orange
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 9-12 months
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Generally Safe:</strong> Mandarin essential oil is generally regarded as safe and is one 
                        of the gentlest citrus oils available.</p>
                        <p><strong>Sensitive Skin:</strong> While generally non-phototoxic, it may be phototoxic for people 
                        with sensitive skin. Perform a patch test before use and avoid direct sunlight after application if 
                        you have sensitive skin.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Sweet, fresh, citrusy with gentle, uplifting and cheerful top notes
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamot</span>
                            <span className="oil-tag">Chamomile</span>
                            <span className="oil-tag">Cinnamon</span>
                            <span className="oil-tag">Clove</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Nutmeg</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Sandalwood</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Mandarin essential oil is prized for its gentle, uplifting properties and is particularly suitable for children and sensitive individuals:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Insomnia</span>
                                <span className="condition-tag">Anxiety</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Nervous Tension</span>
                                <span className="condition-tag">Restlessness</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin Conditions</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Scars</span>
                                <span className="condition-tag">Stretch Marks</span>
                                <span className="condition-tag">Oily Skin</span>
                                <span className="condition-tag">Skin Toning</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🍽️ Digestive Support</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Indigestion</span>
                                <span className="condition-tag">Constipation</span>
                                <span className="condition-tag">Nausea</span>
                                <span className="condition-tag">Digestive Upset</span>
                                <span className="condition-tag">Appetite Loss</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌙 Recovery & Wellness</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Hangover</span>
                                <span className="condition-tag">Fatigue</span>
                                <span className="condition-tag">Convalescence</span>
                                <span className="condition-tag">Seasonal Blues</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎋 Chinese Wisdom</h3>
                    <p className="historical-note">
                        For over four thousand years, mandarin has been cherished in Chinese medicine and culture. 
                        The connection to mandarin officials in their yellow robes symbolizes wisdom, prosperity, and 
                        gentle authority. Today, mandarin essential oil continues this tradition of gentle healing, 
                        offering sweet comfort and emotional balance without overwhelming intensity.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Special Properties</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>👶 Child-Friendly</h4>
                            <p>One of the safest citrus oils for children, promoting calm and peaceful sleep</p>
                        </div>
                        <div className="use-category">
                            <h4>🤰 Pregnancy Safe</h4>
                            <p>Generally considered safe during pregnancy when used appropriately</p>
                        </div>
                        <div className="use-category">
                            <h4>😌 Gentle Therapy</h4>
                            <p>Perfect for sensitive individuals who find other citrus oils too stimulating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Pine_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={pineTreeImage} 
                        alt="Pine tree" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Pine</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Pinus sylvestris
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Forest pine, pine needle oil, Scotch pine, Scots pine
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        The magnificent Scots pine commonly reaches heights of thirty to sixty feet in cultivated settings, though can 
                        achieve a towering hundred feet in natural wilderness. Its characteristic blue-green needles emerge in paired 
                        formations measuring approximately three inches in length, forming a recognizable appearance that has endeared 
                        this species throughout European regions for generations. The tan or light brown cones, similarly measuring 
                        three inches, dangle elegantly from the limbs, completing the tree's distinctive profile.
                    </p>
                    <p>
                        The botanical designation <em>sylvestris</em> originates from Latin meaning "belonging to forests or woodlands," 
                        aptly describing this species' native environment and untamed character. Indigenous to European territories, 
                        pine has earned reverence not merely for its imposing stature but equally for its exceptional adaptability. 
                        Different portions of the specimen were employed therapeutically by historical healers who appreciated its 
                        potent healing qualities. The species was subsequently brought to North American territories during settlement 
                        periods, where it rapidly gained appreciation for both decorative and utilitarian applications.
                    </p>
                    <p>
                        Apart from timber production, pine generates a remarkable variety of beneficial materials including turpentine, 
                        tar, and pitch. Created from the tree's natural resin, pine rosin has proven particularly valuable for violinists 
                        and other stringed instrument performers to treat their bows, producing the necessary friction for melodious 
                        sound creation. This relationship between pine and musical artistry demonstrates the tree's cultural importance 
                        throughout history.
                    </p>
                    <p>
                        Traditionally, following resin extraction from the foliage, the leftover needle materials were skillfully 
                        processed and converted into "pine stuffing" for filling mattresses and pillows. This pine fiber material 
                        performed dual functions—offering physical comfort while simultaneously deterring fleas and parasites, making 
                        it an advantageous selection for bedding materials during eras when organic pest management was crucial for 
                        wellness and cleanliness.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of needles and twigs
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Colorless to pale yellow
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Medium with slightly oily texture
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 9-12 months
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Important Safety Notes:</strong> Scots pine is regarded as the safest pine oil for therapeutic purposes, 
                        however several precautions should be observed.</p>
                        <p><strong>Avoid if:</strong> You have allergic skin conditions, are pregnant, or have high blood pressure.</p>
                        <p><strong>Age Restriction:</strong> Do not use on children under six years old.</p>
                        <p><strong>Skin Sensitivity:</strong> May cause skin irritation. Always dilute properly and perform a patch test before use.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Fresh, crisp, woody with clean forest notes and invigorating pine needle aroma
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Cedarwood</span>
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Juniper Berry</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Rosemary</span>
                            <span className="oil-tag">Spruce</span>
                            <span className="oil-tag">Tea Tree</span>
                            <span className="oil-tag">Thyme</span>
                            <span className="oil-tag">Vetiver</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Pine essential oil is renowned for its powerful respiratory, circulatory, and antimicrobial properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Laryngitis</span>
                                <span className="condition-tag">Sinus Infection</span>
                                <span className="condition-tag">Sore Throat</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular & Joint Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gout</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Sciatica</span>
                                <span className="condition-tag">Sprains & Strains</span>
                                <span className="condition-tag">Tendonitis</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin & External Issues</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Head Lice</span>
                                <span className="condition-tag">Scabies</span>
                                <span className="condition-tag">Skin Infections</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulation & General Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Circulation</span>
                                <span className="condition-tag">Constipation</span>
                                <span className="condition-tag">Hangover</span>
                                <span className="condition-tag">Stress</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🎼 Musical Heritage</h3>
                    <p className="historical-note">
                        Pine's connection to music runs deep through history. Pine rosin, made from the tree's resin, has been 
                        essential for violinists and string musicians for centuries, providing the friction needed to draw beautiful 
                        sounds from their instruments. This musical heritage symbolizes pine's ability to create harmony—not just 
                        in music, but in the body's natural healing processes, bringing respiratory and circulatory systems into 
                        better balance.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Uses</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🏠 Household Cleaning</h4>
                            <p>Natural disinfectant with antimicrobial properties for surface cleaning</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Aromatherapy</h4>
                            <p>Invigorating and clarifying, promotes mental clarity and reduces fatigue</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Therapeutic Massage</h4>
                            <p>Excellent for muscle and joint relief when properly diluted</p>
                        </div>
                        <div className="use-category">
                            <h4>🌨️ Winter Wellness</h4>
                            <p>Traditional remedy for cold weather ailments and seasonal respiratory issues</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_TeaTree_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={teaTree} 
                        alt="Tea tree" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Tea Tree</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Melaleuca alternifolia
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Narrow-leaved paperbark, tea tree
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        Growing up to twenty feet in height, tea tree is a perennial evergreen featuring characteristic 
                        papery bark, slender needle-shaped leaves, and clusters of purple or pale yellow-white blossoms. 
                        Originally from New South Wales, this species is now cultivated throughout various Australian 
                        regions, flourishing particularly in wet coastal areas. The plant's distinctive features and 
                        exceptional healing qualities have established it as one of Australia's premier botanical treasures.
                    </p>
                    <p>
                        Derived from ancient Greek terminology—<em>melas</em> signifying "black" and <em>leukos</em> 
                        meaning "white"—the genus <em>Melaleuca</em> highlights the striking color contrasts found in 
                        both its foliage and bark. The specific epithet <em>alternifolia</em> indicates the alternating 
                        leaf arrangement along each branch, which creates the tree's recognizable growth pattern.
                    </p>
                    <p>
                        Throughout countless generations, Australia's Aboriginal communities utilized this exceptional 
                        plant for numerous medicinal applications, understanding its potent therapeutic benefits well 
                        before Western researchers could provide scientific explanations. Their ancestral wisdom 
                        encompassed treatments for injuries, bacterial infections, and breathing disorders—knowledge 
                        transmitted through centuries of traditional medicine practitioners.
                    </p>
                    <p>
                        This plant acquired its popular designation when British naval officer and explorer James Cook 
                        witnessed indigenous Australians preparing medicinal infusions from its leaves during his 
                        maritime expeditions. Recognized as nature's most powerful antiseptic agent, tea tree became 
                        standard equipment in Australian military medical supplies throughout World War II. When its 
                        extraordinary healing capabilities became apparent and spread among international forces, it 
                        gained the affectionate title "Australia's miraculous discovery."
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam or water distillation of leaves and twigs
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Pale yellowish-green to colorless
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 12-18 months
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Sensitization Risk:</strong> Tea tree oil may cause sensitization in some individuals. 
                        Always perform a patch test before first use.</p>
                        <p><strong>Dilution Recommended:</strong> While generally well-tolerated, dilute properly for topical use, 
                        especially on sensitive areas.</p>
                        <p><strong>Quality Matters:</strong> Use only high-quality, pure tea tree oil to avoid potential 
                        irritation from adulterated products.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Fresh, medicinal, camphoraceous with sharp, clean antiseptic notes
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Pine</span>
                            <span className="oil-tag">Rosemary</span>
                            <span className="oil-tag">Thyme</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Lemongrass</span>
                            <span className="oil-tag">Manuka</span>
                            <span className="oil-tag">Niaouli</span>
                            <span className="oil-tag">Oregano</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Tea tree is practically a first aid kit in a bottle, effective against bacteria, fungi, and viruses, 
                        helping the body respond to infection:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Skin & Wounds</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Blisters</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Burns</span>
                                <span className="condition-tag">Cold Sores</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Inflammation</span>
                                <span className="condition-tag">Rashes</span>
                                <span className="condition-tag">Warts</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Infections & Parasites</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Athlete's Foot</span>
                                <span className="condition-tag">Chicken Pox</span>
                                <span className="condition-tag">Head Lice</span>
                                <span className="condition-tag">Jock Itch</span>
                                <span className="condition-tag">Nail Fungus</span>
                                <span className="condition-tag">Shingles</span>
                                <span className="condition-tag">Sinus Infection</span>
                                <span className="condition-tag">Vaginal Infection</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Whooping Cough</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🐛 External Issues</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Fever</span>
                                <span className="condition-tag">Insect Bites & Stings</span>
                                <span className="condition-tag">Poison Ivy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🪖 Military Medicine Legacy</h3>
                    <p className="historical-note">
                        Tea tree's reputation as "the wonder from down under" was earned during World War II when it became 
                        a standard item in Australian Army medical kits. Its remarkable effectiveness against infections 
                        and wounds made it invaluable in battlefield medicine, where traditional antiseptics were often 
                        unavailable. This military legacy demonstrates tea tree's exceptional reliability and potency as 
                        nature's most powerful antiseptic.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🏠 Household Cleaning</h4>
                            <p>Natural disinfectant for surfaces, mold prevention, and general sanitizing</p>
                        </div>
                        <div className="use-category">
                            <h4>💄 Personal Care</h4>
                            <p>Acne treatments, dandruff shampoos, and antimicrobial skincare formulations</p>
                        </div>
                        <div className="use-category">
                            <h4>🦶 Foot Care</h4>
                            <p>Athlete's foot treatment, nail fungus prevention, and general foot hygiene</p>
                        </div>
                        <div className="use-category">
                            <h4>🚑 First Aid</h4>
                            <p>Wound cleaning, cut disinfection, and natural antiseptic treatment</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🧬 Scientific Recognition</h3>
                    <p className="scientific-note">
                        Tea tree oil's antimicrobial properties have been extensively studied and validated by modern science. 
                        Research has confirmed its effectiveness against a broad spectrum of bacteria, fungi, and viruses, 
                        supporting the traditional uses that Aboriginal peoples have known for centuries. Its active compounds, 
                        particularly terpinen-4-ol, make it one of the most researched and clinically proven essential oils 
                        in natural medicine.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Myrrh_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={myrrhImage} 
                        alt="Myrrh field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Myrrh</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Commiphora myrrha syn. C. molmol
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Common myrrh, gum myrrh, hirabol myrrh
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    
                    <h3>Plant Description & History</h3>
                    <p>
                        Fragrant gums and resins represented invaluable treasures in antiquity, and together with frankincense, 
                        myrrh ranks among the most acclaimed and honored. This remarkable resin has fascinated cultures 
                        across millennia, securing its position in sacred rituals, imperial fragrances, and therapeutic traditions that 
                        extend from pharaonic Egypt to contemporary aromatherapy.
                    </p>
                    <p>
                        The term "myrrh" originates from either the Arabic <em>murr</em> or Hebrew <em>mor</em>, both signifying "bitter," 
                        alluding to its distinctively acrid, sharp flavor that attests to its powerful healing attributes. 
                        The genus designation <em>Commiphora</em> translates to "gum producing," aptly characterizing this exceptional tree's 
                        capacity to yield one of nature's most treasured medicinal resins.
                    </p>
                    <p>
                        Potentially among the earliest to methodically harvest myrrh, ancient Egyptians raised this resin to 
                        holy prominence, utilizing it extensively for fragrance creation, healing arts, and ceremonial applications. The pharaohs deemed 
                        it so precious that myrrh was placed among sepulchral riches, guaranteeing its ongoing employment in eternal life. 
                        For millennia, it functioned as a foundation of Near Eastern healing practices, esteemed alongside other 
                        valuable resins as essentially a panacea.
                    </p>
                    <p>
                        As commercial pathways stretched eastward, myrrh discovered its passage into the advanced therapeutic traditions of India, 
                        becoming incorporated into Ayurvedic healing by 600 CE. From early civilizations through medieval times, 
                        healers throughout different cultures extolled its virtues, acknowledging myrrh's extraordinary adaptability and strength 
                        in addressing numerous maladies.
                    </p>
                    <p>
                        Indigenous to northeast Africa and the Arabian Peninsula, myrrh originates from a compact, robust bushy tree 
                        ideally suited to severe desert environments. Its characteristic pale gray bark and defensive spiny 
                        limbs provide it with a weathered look, while tiny cream to golden blossoms offer subtle elegance. 
                        The tough oval foliage comprises three segments, forming a refined compound arrangement.
                    </p>
                    <p>
                        The wonder occurs when the light yellow resin spontaneously seeps from cracks in the trunk, where it 
                        solidifies beneath the arid sun into distinctive amber-brown teardrop formations. These fragrant "droplets" 
                        remain highly treasured for incense and fragrance production, perpetuating an ancient custom that links 
                        us to humanity's earliest therapeutic traditions.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of the resin
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Pale yellow to amber
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Medium
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 4-6 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Pregnancy Warning:</strong> Avoid using myrrh essential oil during pregnancy.</p>
                        <p><strong>Dilution Recommended:</strong> Always dilute properly for topical use and perform a patch test before first use.</p>
                        <p><strong>Quality Note:</strong> Due to myrrh's high value and ancient reputation, ensure you purchase from reputable suppliers to avoid adulterated products.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Warm, balsamic, earthy with bitter-sweet resinous notes and smoky, mystical undertones
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Sandalwood</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Rose</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Tea Tree</span>
                            <span className="oil-tag">Cypress</span>
                            <span className="oil-tag">Juniper Berry</span>
                            <span className="oil-tag">Benzoin</span>
                            <span className="oil-tag">Vetiver</span>
                            <span className="oil-tag">Cedarwood</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Myrrh has been revered as a healing powerhouse for thousands of years, offering remarkable therapeutic properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Skin & Wound Care</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Blisters</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Chapped Skin</span>
                                <span className="condition-tag">Corns & Calluses</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Eczema</span>
                                <span className="condition-tag">Rashes</span>
                                <span className="condition-tag">Stretch Marks</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🦠 Infections & Fungal Issues</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Athlete's Foot</span>
                                <span className="condition-tag">Ringworm</span>
                                <span className="condition-tag">Vaginal Infection</span>
                                <span className="condition-tag">Poison Ivy</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Laryngitis</span>
                                <span className="condition-tag">Sore Throat</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Joint & Digestive Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Hemorrhoids</span>
                                <span className="condition-tag">Indigestion</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>👑 Gift of Kings</h3>
                    <p className="historical-note">
                        Myrrh's legendary status reaches its pinnacle in the biblical account of the Magi, who presented it 
                        alongside gold and frankincense as one of three precious gifts. This sacred resin was considered 
                        so valuable in ancient times that it was literally worth its weight in gold. The Egyptians used it 
                        in mummification processes, believing it would preserve the body and spirit for eternity, while 
                        ancient physicians praised it as one of nature's most complete healing substances.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Uses</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🧘 Spiritual Practice</h4>
                            <p>Sacred incense for meditation, prayer, and spiritual ceremonies across many cultures</p>
                        </div>
                        <div className="use-category">
                            <h4>💄 Skincare</h4>
                            <p>Anti-aging formulations, wound healing, and skin rejuvenation treatments</p>
                        </div>
                        <div className="use-category">
                            <h4>🦷 Oral Care</h4>
                            <p>Traditional remedy for gum health, mouth ulcers, and oral infections</p>
                        </div>
                        <div className="use-category">
                            <h4>🎭 Perfumery</h4>
                            <p>Base note in luxury fragrances, adding depth, warmth, and mystique</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🏺 Ancient Wisdom</h3>
                    <p className="scientific-note">
                        Modern science continues to validate what ancient healers knew intuitively about myrrh's remarkable 
                        properties. Research has confirmed its powerful antimicrobial, anti-inflammatory, and wound-healing 
                        capabilities. The same compounds that made it precious to pharaohs and kings—including furanodienes 
                        and sesquiterpenes—are now understood to provide genuine therapeutic benefits, bridging ancient wisdom 
                        with contemporary aromatherapy practice.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Sandalwood_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={sandalwoodImage} 
                        alt="Sandalwood field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Sandalwood</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Santalum spicatum syn. S. cygnorum
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Australian sandalwood, Western Australian sandalwood
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        While the name sandalwood has been applied to various trees from several botanical families, 
                        trees from the Santalum genus are regarded as true sandalwood. Among these precious species, 
                        Australian sandalwood (S. spicatum) has emerged as a sustainable and remarkable alternative to 
                        its more famous Indian counterpart, which faces critical conservation challenges due to centuries 
                        of overexploitation.
                    </p>
                    <p>
                        The renowned Indian sandalwood (S. album) has been treasured for millennia, but its popularity 
                        and overuse have led to its classification as a vulnerable species by the International Union 
                        for Conservation of Nature (IUCN). This conservation crisis has brought Australian sandalwood 
                        into well-deserved prominence, as the Australian government has implemented careful regulation 
                        of harvesting practices to ensure long-term sustainability.
                    </p>
                    <p>
                        Australian sandalwood typically reaches between ten and twenty feet tall, displaying the 
                        characteristic semi-parasitic root system that defines true sandalwoods. These specialized 
                        roots attach to host plants, allowing the sandalwood to extract nutrients while contributing 
                        to the complex ecological relationships that make these trees so unique and valuable.
                    </p>
                    <p>
                        The species name <em>spicatum</em> derives from the Latin word <em>spica</em>, meaning "spike," 
                        which perfectly describes the tree's distinctive narrow, pointed leaves. This elegant foliage 
                        creates a graceful appearance that has made Australian sandalwood not only commercially valuable 
                        but also appreciated for its ornamental beauty in sustainable forestry practices.
                    </p>
                    <p>
                        During the nineteenth century, the aromatic timber of Australian sandalwood became highly prized, 
                        particularly for creating incense for the Chinese market. This historical trade relationship 
                        established Australian sandalwood's reputation for quality and fragrance, laying the foundation 
                        for its modern recognition as a premier essential oil source that balances tradition with 
                        environmental responsibility.
                    </p>
                    
                     
                    
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of roots and heartwood
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Almost clear to light brown
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Medium to thick
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 4-6 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Skin Sensitivity:</strong> This essential oil may cause skin irritation or allergic skin reaction in sensitive individuals.</p>
                        <p><strong>Patch Test:</strong> Always perform a patch test before first use and dilute appropriately for topical applications.</p>
                        <p><strong>Sustainability Note:</strong> Choose Australian sandalwood over Indian sandalwood to support sustainable harvesting practices and conservation efforts.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Rich, woody, creamy with soft, warm base notes and subtle honey-like sweetness
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamot</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Jasmine</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Myrrh</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Patchouli</span>
                            <span className="oil-tag">Rose</span>
                            <span className="oil-tag">Vetiver</span>
                            <span className="oil-tag">Ylang Ylang</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        While Australian sandalwood's chemical profile differs from its Indian counterpart, it offers valuable therapeutic properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Skin Conditions</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Rashes</span>
                                <span className="condition-tag">Dry Skin</span>
                                <span className="condition-tag">Skin Inflammation</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory Support</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Sinus Infection</span>
                                <span className="condition-tag">Respiratory Congestion</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Insomnia</span>
                                <span className="condition-tag">Anxiety</span>
                                <span className="condition-tag">Mental Fatigue</span>
                                <span className="condition-tag">Meditation Support</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌿 General Wellness</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Muscle Tension</span>
                                <span className="condition-tag">Nervous System Support</span>
                                <span className="condition-tag">Relaxation</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🌱 Sustainable Treasure</h3>
                    <p className="historical-note">
                        Australian sandalwood represents a perfect balance between ancient tradition and modern 
                        environmental responsibility. While Indian sandalwood faces extinction due to overharvesting, 
                        Australia has pioneered sustainable forestry practices that ensure this precious resource 
                        remains available for future generations. By choosing Australian sandalwood, aromatherapy 
                        practitioners support conservation efforts while enjoying the therapeutic benefits of this 
                        remarkable tree.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Uses</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🧘 Spiritual Practice</h4>
                            <p>Sacred wood for meditation, prayer, and spiritual ceremonies across many traditions</p>
                        </div>
                        <div className="use-category">
                            <h4>💄 Luxury Skincare</h4>
                            <p>Premium ingredient in anti-aging, moisturizing, and soothing skincare formulations</p>
                        </div>
                        <div className="use-category">
                            <h4>🎭 Fine Perfumery</h4>
                            <p>Prized base note in high-end fragrances, providing depth, warmth, and longevity</p>
                        </div>
                        <div className="use-category">
                            <h4>🏮 Traditional Incense</h4>
                            <p>Creating aromatic incense for temples, ceremonies, and personal spiritual practice</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🔬 Emerging Research</h3>
                    <p className="scientific-note">
                        While Australian sandalwood's therapeutic potential is still being explored through scientific 
                        research, early studies suggest it possesses many valuable properties similar to its Indian 
                        relative. Its unique chemical composition, influenced by Australia's distinct climate and soil 
                        conditions, may offer therapeutic benefits that complement traditional sandalwood uses. As 
                        research continues, Australian sandalwood is positioning itself as both a sustainable choice 
                        and a valuable therapeutic agent in modern aromatherapy.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌏 Conservation Impact</h3>
                    <div className="conservation-info">
                        <h4>🛡️ Protecting Indian Sandalwood</h4>
                        <p>
                            By choosing Australian sandalwood, consumers help reduce pressure on endangered Indian 
                            sandalwood populations, supporting global conservation efforts while enjoying similar 
                            therapeutic and aromatic benefits.
                        </p>
                        <h4>♻️ Sustainable Harvesting</h4>
                        <p>
                            Australian sandalwood operations follow strict sustainability guidelines, ensuring 
                            regeneration through replanting programs and responsible harvest cycles that maintain 
                            healthy forest ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Ginger_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={gingerImage} 
                        alt="Ginger field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Ginger</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Zingiber officinale
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Common ginger, Jamaica ginger
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        Ginger gets its name from the Sanskrit <em>singabera</em>, meaning "horn-shaped," referring 
                        to its distinctive gnarled rhizomes. These underground stems are the source of ginger's 
                        legendary medicinal and culinary power.
                    </p>
                    <p>
                        Native to southern Asia, ginger displays tall reed-like stalks with spear-shaped leaves 
                        and spikes of yellow or white flowers. However, it's the aromatic rhizome beneath the 
                        soil that has made ginger one of humanity's most treasured botanicals.
                    </p>
                    <p>
                        For millennia, ginger has been revered in China and India for both culinary and medicinal 
                        purposes. Ancient healers recognized its warming properties and used it as both a therapeutic 
                        remedy and an aphrodisiac, believing it could ignite passion and vitality.
                    </p>
                    <p>
                        The Greeks and Romans imported ginger into Europe, where it became a highly prized commodity 
                        throughout the Middle Ages. The Spanish later introduced it to the West Indies and South 
                        America, spreading cultivation across the New World.
                    </p>
                    <p>
                        European settlers in America used ginger to create "small beer"—a refreshing fermented 
                        beverage that led to today's beloved ginger beer and ginger ale, carrying forward ginger's 
                        legacy of wellness and pleasure.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of the rhizomes
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Pale yellow, amber, or greenish
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 2-3 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Skin Sensitivity:</strong> Ginger essential oil may cause skin irritation or sensitization in sensitive individuals.</p>
                        <p><strong>Slightly Phototoxic:</strong> This oil has mild phototoxic properties. Avoid direct sunlight after topical application.</p>
                        <p><strong>Dilution Recommended:</strong> Always dilute properly for topical use and perform a patch test before first application.</p>
                        <p><strong>Pregnancy Note:</strong> Use with caution during pregnancy, especially in the first trimester.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Warm, spicy, zesty with fresh, peppery top notes and sweet, woody undertones
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Black Pepper</span>
                            <span className="oil-tag">Cardamom</span>
                            <span className="oil-tag">Cinnamon</span>
                            <span className="oil-tag">Clove</span>
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Lemongrass</span>
                            <span className="oil-tag">Lime</span>
                            <span className="oil-tag">Orange</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Rosemary</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Ginger essential oil is renowned for its warming, stimulating, and digestive properties, making it invaluable for numerous health conditions:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🍽️ Digestive & Nausea Relief</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Indigestion</span>
                                <span className="condition-tag">Nausea</span>
                                <span className="condition-tag">Motion Sickness</span>
                                <span className="condition-tag">Morning Sickness</span>
                                <span className="condition-tag">Constipation</span>
                                <span className="condition-tag">Vertigo</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular & Joint Support</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Bursitis</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Sprains & Strains</span>
                                <span className="condition-tag">Joint Pain</span>
                                <span className="condition-tag">Rheumatism</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory & Immune</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Sinus Infection</span>
                                <span className="condition-tag">Sore Throat</span>
                                <span className="condition-tag">Fever</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Seasonal Affective Disorder</span>
                                <span className="condition-tag">Mental Fatigue</span>
                                <span className="condition-tag">Low Energy</span>
                                <span className="condition-tag">Lack of Focus</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌊 Circulation & Women's Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Poor Circulation</span>
                                <span className="condition-tag">Menstrual Cramps</span>
                                <span className="condition-tag">PMS</span>
                                <span className="condition-tag">Cold Hands & Feet</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌟 Recovery & Travel</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Hangover</span>
                                <span className="condition-tag">Jet Lag</span>
                                <span className="condition-tag">Travel Fatigue</span>
                                <span className="condition-tag">Appetite Loss</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🌶️ Ancient Fire</h3>
                    <p className="historical-note">
                        For over 5,000 years, ginger has been called the "universal medicine" in Ayurvedic tradition, 
                        where it's known as "vishwabhesaj." Ancient Chinese medicine classified ginger as a "superior herb," 
                        meaning it could be taken daily without side effects while providing profound healing benefits. 
                        This "horn-shaped" root was so valued that it was worth more than its weight in silver along 
                        medieval spice routes, earning it the nickname "the golden spice."
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🏥 Natural Medicine</h4>
                            <p>Anti-inflammatory, anti-nausea, and warming therapeutic applications</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Aromatherapy</h4>
                            <p>Energizing, warming, and confidence-boosting for emotional balance</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Massage Therapy</h4>
                            <p>Circulation enhancement and muscle warming in therapeutic bodywork</p>
                        </div>
                        <div className="use-category">
                            <h4>🍴 Culinary Medicine</h4>
                            <p>Digestive support and flavor enhancement in food and beverages</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🔥 Warming Properties</h3>
                    <div className="warming-info">
                        <h4>🌡️ Thermogenic Action</h4>
                        <p>
                            Ginger's natural warming properties make it exceptional for improving circulation, 
                            easing cold conditions, and providing comfort during winter months. Its thermogenic 
                            compounds naturally raise body temperature and stimulate blood flow.
                        </p>
                        <h4>⚡ Energy & Vitality</h4>
                        <p>
                            Known as a natural energizer, ginger essential oil combats fatigue, enhances stamina, 
                            and provides sustained energy without the crash associated with stimulants. It's particularly 
                            valuable for overcoming seasonal depression and low motivation.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🧬 Scientific Validation</h3>
                    <p className="scientific-note">
                        Modern research has extensively validated ginger's traditional uses, identifying compounds 
                        like gingerol and shogaol as responsible for its anti-inflammatory, anti-nausea, and 
                        thermogenic properties. Studies confirm its effectiveness for motion sickness, morning sickness, 
                        and post-operative nausea, making it one of the most scientifically-supported essential oils 
                        for digestive and circulatory health.
                    </p>
                </div>
            </div>
        </div>
    );
};

const EssentialOilProfile_Rosemary_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={rosemaryImage} 
                        alt="Rosemary field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Rosemary</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Rosmarinus officinalis
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Compass plant, elf leaf, rosmarine, sea dew
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        Indigenous to Mediterranean regions, rosemary is a resilient perennial shrub featuring characteristic light azure blossoms 
                        and sharp, linear foliage. It flourishes on seaside precipices where briny breezes and Mediterranean sunshine provide 
                        optimal conditions for this fragrant botanical gem.
                    </p>
                    <p>
                        The designation <em>Rosmarinus</em> translates to "ocean's moisture" in Latin, beautifully expressing rosemary's bond 
                        with its coastal habitat. Early plant scholars characterized it as possessing "the essence of the sea blended with pine."
                    </p>
                    <p>
                        Classical Greek and Roman civilizations employed rosemary in matrimonial ceremonies as an emblem of loyalty and during 
                        funeral rites for commemoration. Greek scholars adorned their hair with rosemary twigs while taking examinations, 
                        trusting it would boost recall and academic achievement—a custom that reflects rosemary's lasting association with 
                        cognitive sharpness.
                    </p>
                    <p>
                        Throughout the medieval era, rosemary became indispensable for combating illness. Communities consumed candied rosemary 
                        flowers to ward off contagion and distributed it across floors as a "spreading herb" to refresh dwellings and defend 
                        against pestilence. Medical facilities ignited rosemary to cleanse chambers and drive away disease-bearing insects.
                    </p>
                    
                     
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of leaves and flower tops
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Colorless to pale yellow
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thick
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 2-3 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Pregnancy:</strong> Avoid using rosemary essential oil during pregnancy.</p>
                        <p><strong>Epilepsy/Seizures:</strong> Avoid with epilepsy or other seizure disorders.</p>
                        <p><strong>High Blood Pressure:</strong> Avoid with high blood pressure conditions.</p>
                        <p><strong>Skin Sensitivity:</strong> May irritate sensitive skin. Always dilute properly and perform a patch test.</p>
                        <p><strong>Children:</strong> Do not use on children under 10 years old.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Fresh, herbaceous, camphoraceous with woody pine-like notes and invigorating oceanic undertones
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Basil</span>
                            <span className="oil-tag">Cedarwood</span>
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Grapefruit</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Peppermint</span>
                            <span className="oil-tag">Pine</span>
                            <span className="oil-tag">Tea Tree</span>
                            <span className="oil-tag">Thyme</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Rosemary essential oil is renowned for its stimulating, circulation-enhancing, and memory-boosting properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Cognitive Support</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Memory Enhancement</span>
                                <span className="condition-tag">Mental Clarity</span>
                                <span className="condition-tag">Focus & Concentration</span>
                                <span className="condition-tag">Headaches</span>
                                <span className="condition-tag">Mental Fatigue</span>
                                <span className="condition-tag">Jet Lag</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin & Hair Care</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Dermatitis</span>
                                <span className="condition-tag">Eczema</span>
                                <span className="condition-tag">Head Lice</span>
                                <span className="condition-tag">Hair Loss</span>
                                <span className="condition-tag">Dandruff</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Bronchitis</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Whooping Cough</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular & Joint Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Gout</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Sprains & Strains</span>
                                <span className="condition-tag">Tendonitis</span>
                                <span className="condition-tag">Scabies</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🩸 Circulation & Energy</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Poor Circulation</span>
                                <span className="condition-tag">Varicose Veins</span>
                                <span className="condition-tag">Fainting</span>
                                <span className="condition-tag">Low Energy</span>
                                <span className="condition-tag">Physical Exhaustion</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌿 General Wellness</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Indigestion</span>
                                <span className="condition-tag">Menstrual Cramps</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Immune Support</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>🏛️ Dew of the Sea</h3>
                    <p className="historical-note">
                        The ancient name "dew of the sea" captures rosemary's essence perfectly—a plant that thrives where 
                        land meets ocean, drawing strength from both earth and sea. For over 2,000 years, this Mediterranean 
                        treasure has been revered as the herb of remembrance and fidelity. Greek scholars wore rosemary crowns 
                        while studying, believing it would enhance their memory and mental clarity. Today, modern research 
                        validates this ancient wisdom, showing that rosemary indeed supports cognitive function and mental 
                        performance.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🧠 Cognitive Enhancement</h4>
                            <p>Memory support, mental clarity, and focus improvement for studying and work</p>
                        </div>
                        <div className="use-category">
                            <h4>💇 Hair & Scalp Care</h4>
                            <p>Hair growth stimulation, dandruff treatment, and scalp circulation enhancement</p>
                        </div>
                        <div className="use-category">
                            <h4>💪 Athletic Performance</h4>
                            <p>Pre-workout energizer, muscle warm-up, and post-exercise recovery support</p>
                        </div>
                        <div className="use-category">
                            <h4>🏠 Air Purification</h4>
                            <p>Natural antimicrobial room spray and meditation space clearing</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌿 Chemotypes & Varieties</h3>
                    <div className="chemotype-info">
                        <h4>🧬 Different Chemical Profiles</h4>
                        <p>
                            Rosemary essential oil comes in different chemotypes (chemical variations) based on growing 
                            conditions and harvesting methods. The most common are CT Cineole (best for respiratory and 
                            mental clarity), CT Camphor (stronger for muscle and circulation), and CT Verbenone (gentler, 
                            better for skincare and hormone balance).
                        </p>
                        <h4>📍 Geographic Influence</h4>
                        <p>
                            Spanish, French, and Moroccan rosemary oils each have distinct characteristics influenced by 
                            their Mediterranean terroir, with varying concentrations of active compounds that affect their 
                            therapeutic properties and aromatic profiles.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>⚡ Energizing Properties</h3>
                    <div className="energizing-info">
                        <h4>🔋 Natural Stimulant</h4>
                        <p>
                            Unlike caffeine-based stimulants, rosemary provides clean, sustained energy without jitters 
                            or crashes. It works by improving circulation and oxygenation, naturally energizing both 
                            body and mind through enhanced blood flow and cellular metabolism.
                        </p>
                        <h4>💭 Cognitive Enhancement</h4>
                        <p>
                            Studies show rosemary can improve memory performance by up to 75% and significantly enhance 
                            alertness and concentration. Its compounds, particularly 1,8-cineole, increase acetylcholine 
                            activity in the brain, supporting both short-term focus and long-term memory formation.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🧬 Scientific Research</h3>
                    <p className="scientific-note">
                        Modern research has extensively validated rosemary's traditional uses. Studies confirm its 
                        effectiveness for memory enhancement, hair growth stimulation, and circulation improvement. 
                        Key compounds like rosmarinic acid, carnosic acid, and 1,8-cineole provide powerful antioxidant, 
                        anti-inflammatory, and neuroprotective effects. Research shows rosemary essential oil can 
                        significantly improve cognitive performance, reduce mental fatigue, and support overall brain health.
                    </p>
                </div>
            </div>
        </div>
    );
};


const EssentialOilProfile_ClarySage_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={clarySageImage} 
                        alt="Clary sage field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Clary Sage</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Salvia sclarea
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Clary, clary wort, clear eye, muscatel sage, see bright
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                    <h3>Plant Description & History</h3>
                    <p>
                        Standing two to three feet tall, clary sage is a striking biennial herb with broad, textured leaves 
                        and enchanting spirals of white, lilac, or pink flowers that create an almost mystical appearance.
                    </p>
                    <p>
                        The name derives from Latin <em>clarus</em>, meaning "clear"—reflecting clary sage's celebrated 
                        historical use as an eye remedy. For centuries, it earned poetic names like "clear eye" and 
                        "see bright" for its reputation in restoring vision and eye health.
                    </p>
                    <p>
                        Beyond medicine, clary sage found creative culinary uses throughout European history. German brewers 
                        sometimes substituted it for hops in brewing, while clever winemakers discovered that adding clary 
                        sage to cheaper wines gave them a sophisticated aroma reminiscent of prized Muscat wines—earning 
                        it the nickname "muscatel sage."
                    </p>
                    <p>
                        Throughout history, clary sage has maintained its reputation as a plant of clarity and enhancement—
                        whether clearing the eyes, clarifying the mind, or elevating the senses through its complex aromatic 
                        compounds.
                    </p>
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of leaves and flower tops
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Colorless to pale yellow-green
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin to medium
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 2-3 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Pregnancy & Nursing:</strong> Avoid using clary sage essential oil during pregnancy and while nursing.</p>
                        <p><strong>Drug Interactions:</strong> Avoid when taking sedatives or barbiturates due to potential amplification of effects.</p>
                        <p><strong>Hormonal Effects:</strong> Contains natural compounds that may influence hormone levels - use with awareness.</p>
                        <p><strong>Alcohol Warning:</strong> Avoid alcohol consumption when using clary sage, as it may enhance intoxicating effects.</p>
                        <p><strong>Drowsiness:</strong> May cause drowsiness or euphoria in some individuals. Do not drive after use.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Sweet, nutty, herbaceous with musky, wine-like undertones and euphoric, intoxicating qualities
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Bergamot</span>
                            <span className="oil-tag">Cedarwood</span>
                            <span className="oil-tag">Chamomile</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Jasmine</span>
                            <span className="oil-tag">Juniper Berry</span>
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Neroli</span>
                            <span className="oil-tag">Rose</span>
                            <span className="oil-tag">Sandalwood</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Clary sage essential oil is particularly renowned for its hormone-balancing, stress-relieving, and euphoric properties:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🌸 Women's Health & Hormones</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Menstrual Cramps</span>
                                <span className="condition-tag">PMS</span>
                                <span className="condition-tag">Menopausal Discomforts</span>
                                <span className="condition-tag">Hormonal Imbalance</span>
                                <span className="condition-tag">Hot Flashes</span>
                                <span className="condition-tag">Mood Swings</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Emotional Wellness</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Anxiety</span>
                                <span className="condition-tag">Depression</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Insomnia</span>
                                <span className="condition-tag">Mental Fatigue</span>
                                <span className="condition-tag">Nervous Tension</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🔥 Skin Conditions</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Rashes</span>
                                <span className="condition-tag">Inflammation</span>
                                <span className="condition-tag">Oily Skin</span>
                                <span className="condition-tag">Mature Skin</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Laryngitis</span>
                                <span className="condition-tag">Sore Throat</span>
                                <span className="condition-tag">Whooping Cough</span>
                                <span className="condition-tag">Respiratory Congestion</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Pain & Physical Discomfort</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Headaches</span>
                                <span className="condition-tag">Migraines</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Joint Pain</span>
                                <span className="condition-tag">Tension</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>👁️ Clear Eye Wisdom</h3>
                    <p className="historical-note">
                        For centuries, clary sage was known as "clear eye" because of its remarkable ability to treat 
                        various eye ailments and restore vision clarity. Medieval herbalists would create eye washes 
                        from the mucilaginous seeds, which would swell and gently cleanse foreign particles from the 
                        eyes. This ancient reputation for bringing clarity extends beyond physical vision to mental 
                        and emotional clarity—today's aromatherapists recognize clary sage as one of the most effective 
                        oils for clearing mental fog and providing euphoric emotional relief.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🌺 Women's Wellness</h4>
                            <p>Hormone balancing, menstrual support, and menopausal comfort in natural feminine care</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Stress Relief</h4>
                            <p>Deep relaxation, anxiety reduction, and euphoric mood enhancement for emotional balance</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Therapeutic Massage</h4>
                            <p>Muscle tension relief, headache treatment, and overall relaxation in bodywork</p>
                        </div>
                        <div className="use-category">
                            <h4>🎭 Natural Perfumery</h4>
                            <p>Sophisticated base note with wine-like, musky qualities in luxury fragrances</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🍷 Euphoric Properties</h3>
                    <div className="euphoric-info">
                        <h4>🌙 Natural Euphoria</h4>
                        <p>
                            Clary sage is renowned for its ability to induce a natural state of euphoria and deep 
                            relaxation. Its unique compounds interact with the nervous system to promote feelings 
                            of well-being, making it invaluable for those dealing with stress, anxiety, or emotional 
                            turmoil. This euphoric quality also makes it excellent for creative endeavors and meditation.
                        </p>
                        <h4>⚖️ Hormone Harmony</h4>
                        <p>
                            The oil contains natural phytoestrogens that can help balance hormonal fluctuations, 
                            making it particularly valuable for women experiencing PMS, irregular cycles, or 
                            menopausal symptoms. It works gently with the body's natural rhythms to promote 
                            hormonal equilibrium and emotional stability.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌿 Muscatel Connection</h3>
                    <div className="muscatel-info">
                        <h4>🍇 Wine-Like Aroma</h4>
                        <p>
                            The nickname "muscatel sage" comes from clary sage's distinctive wine-like fragrance 
                            that resembles the aroma of Muscat grapes. This intoxicating scent made it valuable 
                            for enhancing cheaper wines, and today this same aromatic complexity makes clary sage 
                            a prized ingredient in perfumery and aromatherapy blends.
                        </p>
                        <h4>🎨 Creative Enhancement</h4>
                        <p>
                            Just as it enhanced wine, clary sage enhances creativity and artistic expression. 
                            Many artists, writers, and musicians use clary sage to break through creative blocks 
                            and access deeper levels of inspiration and imagination.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🧬 Scientific Understanding</h3>
                    <p className="scientific-note">
                        Modern research has identified sclareol as one of clary sage's key compounds, responsible 
                        for many of its therapeutic effects. Studies confirm its ability to reduce cortisol levels, 
                        balance hormones, and promote relaxation. The oil's unique chemical profile includes 
                        linalyl acetate and linalool, which contribute to its calming and euphoric properties. 
                        Research validates traditional uses, particularly for hormone-related conditions and 
                        stress management, making clary sage one of the most scientifically-supported oils 
                        for women's health and emotional wellness.
                    </p>
                </div>
            </div>
        </div>
    );
};


const EssentialOilProfile_SpanishSage_EN = () => {
    return (
        <div className="essential-oil-profile-card">
            <div className="oil-profile-header">
                <div className="oil-image-container">
                    <img 
                        src={spanishSageImage} 
                        alt="Spanish sage field" 
                        className="oil-profile-image"
                    />
                </div>
                <div className="oil-basic-info">
                    <h1 className="oil-name">Spanish Sage</h1>
                    <p className="botanical-name">
                        <strong>BOTANICAL NAME:</strong> Salvia lavandulifolia syn. S. hispanorum
                    </p>
                    <p className="also-known-as">
                        <strong>ALSO KNOWN AS:</strong> Lavender-leaved sage, lavender sage, narrow-leaved sage, Spanish lavender sage
                    </p>
                </div>
            </div>

            <div className="oil-profile-content">
                <div className="profile-section">
                                         
                    
                    <h3>Plant Description & History</h3>
                    <p>
                        The genus name for sage comes from the Latin word <em>salvare</em>, meaning "to be saved" or 
                        "to be safe"—a testament to the remarkable healing properties that have made sage species treasured 
                        throughout human history. Spanish sage stands as a distinguished member of this revered botanical 
                        family, embodying centuries of Mediterranean wisdom and traditional healing practices.
                    </p>
                    <p>
                        Like its cousin common sage, Spanish sage is an evergreen shrub that displays its own unique 
                        character through distinctive features that set it apart. The plant's grayish leaves are notably 
                        narrower than those of common sage, creating an elegant, refined appearance that reflects its 
                        mountain heritage. These slender leaves are complemented by delicate small blue-violet flowers 
                        that add touches of color to the silvery-green foliage.
                    </p>
                    <p>
                        The entire plant emanates a captivating aromatic presence, with a fragrance that bears striking 
                        similarity to spike lavender (<em>L. latifolia</em>). This scent profile is notably more 
                        camphoraceous than true lavender, creating a complex olfactory experience that bridges the 
                        herbal intensity of sage with the soothing qualities associated with lavender family plants. 
                        This unique aromatic character is reflected in its species name <em>lavandulifolia</em>, which 
                        literally means "lavender-like foliage."
                    </p>
                    <p>
                        Native to the rugged mountainous regions of Spain and southern France, Spanish sage has thrived 
                        in these challenging Mediterranean environments for millennia. The harsh mountain conditions—with 
                        their intense sun, rocky soils, and dramatic temperature variations—have forged this plant into 
                        a resilient survivor capable of producing concentrated aromatic compounds and potent therapeutic 
                        properties.
                    </p>
                    <p>
                        In Spain, this remarkable herb was elevated to legendary status, regarded as nothing short of a 
                        cure-all by generations of traditional healers and common folk alike. The Spanish people held such 
                        faith in its powers that they believed regular use of Spanish sage could contribute to longevity, 
                        making it not just a remedy for illness but a pathway to a longer, healthier life.
                    </p>
                    <p>
                        During the dark period of the Middle Ages, when plague swept across Europe claiming countless lives, 
                        Spanish sage emerged as one of the most trusted protective remedies. People used it to guard against 
                        the devastating disease, burning it in homes and carrying it as protection—a testament to the profound 
                        respect and confidence that medieval communities placed in this mountain treasure.
                    </p>
                    <p>
                        Today, Spanish sage continues its cultural legacy as the type of sage most commonly used in traditional 
                        Spanish cooking, where its unique flavor profile adds depth and complexity to regional dishes while 
                        providing the digestive and health benefits that Spanish cooks have relied upon for generations.
                    </p>
                    
                     
                    
                     
                </div>

                <div className="profile-section">
                    <h3>🛢️ Oil Description & Precautions</h3>
                    <div className="oil-properties">
                        <div className="property-item">
                            <strong>Production:</strong> Steam distillation of the leaves
                        </div>
                        <div className="property-item">
                            <strong>Color:</strong> Pale yellow
                        </div>
                        <div className="property-item">
                            <strong>Viscosity:</strong> Thin
                        </div>
                        <div className="property-item">
                            <strong>Shelf life:</strong> 2-3 years
                        </div>
                    </div>
                    <div className="precautions">
                        <h4>⚠️ Precautions</h4>
                        <p><strong>Pregnancy & Breastfeeding:</strong> Avoid using Spanish sage essential oil during pregnancy and while breastfeeding.</p>
                        <p><strong>Moderation Required:</strong> Use in moderation due to its potent properties and high concentration of active compounds.</p>
                        <p><strong>Epilepsy/Seizures:</strong> Avoid with epilepsy or other seizure disorders due to camphor content.</p>
                        <p><strong>High Blood Pressure:</strong> Use with caution if you have high blood pressure conditions.</p>
                        <p><strong>Skin Sensitivity:</strong> May irritate sensitive skin. Always dilute properly and perform a patch test.</p>
                        <p><strong>Children:</strong> Not recommended for children under 10 years old.</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌸 Scent Profile & Blending</h3>
                    <p className="scent-description">
                        <strong>Scent:</strong> Fresh, herbaceous, camphoraceous with lavender-like undertones, sage intensity, and Mediterranean mountain clarity
                    </p>
                    <div className="blending-oils">
                        <h4>Blends well with:</h4>
                        <div className="oil-tags">
                            <span className="oil-tag">Lavender</span>
                            <span className="oil-tag">Rosemary</span>
                            <span className="oil-tag">Eucalyptus</span>
                            <span className="oil-tag">Thyme</span>
                            <span className="oil-tag">Pine</span>
                            <span className="oil-tag">Lemon</span>
                            <span className="oil-tag">Bergamot</span>
                            <span className="oil-tag">Frankincense</span>
                            <span className="oil-tag">Geranium</span>
                            <span className="oil-tag">Clary Sage</span>
                            <span className="oil-tag">Juniper Berry</span>
                            <span className="oil-tag">Cedarwood</span>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>💊 Medicinal Uses</h3>
                    <p className="medicinal-intro">
                        Spanish sage essential oil offers a broad spectrum of therapeutic properties, reflecting its historical reputation as a cure-all:
                    </p>
                    <div className="medicinal-categories">
                        <div className="medicinal-category">
                            <h4>🔥 Skin Conditions & Wound Care</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Acne</span>
                                <span className="condition-tag">Boils</span>
                                <span className="condition-tag">Cuts & Scrapes</span>
                                <span className="condition-tag">Dermatitis</span>
                                <span className="condition-tag">Eczema</span>
                                <span className="condition-tag">Inflammation</span>
                                <span className="condition-tag">Skin Infections</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🫁 Respiratory System</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Asthma</span>
                                <span className="condition-tag">Colds</span>
                                <span className="condition-tag">Coughs</span>
                                <span className="condition-tag">Flu</span>
                                <span className="condition-tag">Laryngitis</span>
                                <span className="condition-tag">Sinus Congestion</span>
                                <span className="condition-tag">Sore Throat</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>💪 Muscular & Joint Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Arthritis</span>
                                <span className="condition-tag">Muscle Aches</span>
                                <span className="condition-tag">Joint Pain</span>
                                <span className="condition-tag">Rheumatism</span>
                                <span className="condition-tag">Sprains & Strains</span>
                                <span className="condition-tag">Tension</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🌸 Women's Health & Circulation</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Menopausal Discomforts</span>
                                <span className="condition-tag">Menstrual Cramps</span>
                                <span className="condition-tag">Circulation</span>
                                <span className="condition-tag">Varicose Veins</span>
                                <span className="condition-tag">Cold Extremities</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🧠 Mental & Neurological</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Headaches</span>
                                <span className="condition-tag">Mental Fatigue</span>
                                <span className="condition-tag">Stress</span>
                                <span className="condition-tag">Memory Support</span>
                                <span className="condition-tag">Focus Enhancement</span>
                            </div>
                        </div>
                        
                        <div className="medicinal-category">
                            <h4>🍽️ Digestive & General Health</h4>
                            <div className="condition-tags">
                                <span className="condition-tag">Indigestion</span>
                                <span className="condition-tag">Digestive Upset</span>
                                <span className="condition-tag">Fever</span>
                                <span className="condition-tag">General Inflammation</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section highlight-section">
                    <h3>⛰️ Mountain Medicine</h3>
                    <p className="historical-note">
                        From the rugged mountains of Spain and southern France comes this remarkable sage that earned 
                        legendary status as a cure-all and longevity herb. Spanish mountain communities believed that 
                        regular use of this "salvare" (to be saved) plant could extend life and protect against disease. 
                        During medieval plagues, it was one of the most trusted protective remedies, burned in homes and 
                        carried for protection. This mountain wisdom has been passed down through generations, making 
                        Spanish sage an essential ingredient in traditional Spanish cuisine and folk medicine.
                    </p>
                </div>

                <div className="profile-section">
                    <h3>🌟 Traditional & Modern Applications</h3>
                    <div className="modern-uses">
                        <div className="use-category">
                            <h4>🍴 Culinary Tradition</h4>
                            <p>The preferred sage for Spanish cooking, adding flavor and digestive benefits to traditional dishes</p>
                        </div>
                        <div className="use-category">
                            <h4>🧘 Meditation & Focus</h4>
                            <p>Camphoraceous properties support mental clarity, concentration, and spiritual practices</p>
                        </div>
                        <div className="use-category">
                            <h4>💆 Therapeutic Massage</h4>
                            <p>Circulation enhancement and muscle tension relief in aromatherapy bodywork</p>
                        </div>
                        <div className="use-category">
                            <h4>🏠 Natural Disinfectant</h4>
                            <p>Traditional room fumigation and modern antimicrobial applications</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🌿 Lavender-Like Character</h3>
                    <div className="lavender-connection">
                        <h4>🌸 Aromatic Bridge</h4>
                        <p>
                            Spanish sage's unique "lavandulifolia" (lavender-like foliage) creates an aromatic bridge 
                            between the herbaceous intensity of sage and the soothing qualities of lavender family plants. 
                            This makes it particularly valuable for those who find regular sage too intense but need 
                            stronger therapeutic action than lavender provides.
                        </p>
                        <h4>🏔️ Mountain Terroir</h4>
                        <p>
                            Growing in the challenging mountain environments of Spain and southern France, this sage 
                            develops concentrated therapeutic compounds while maintaining the refined, almost lavender-like 
                            aromatic qualities that make it distinctive among sage species.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🛡️ Historical Protection</h3>
                    <div className="historical-protection">
                        <h4>🦠 Medieval Shield</h4>
                        <p>
                            During the plague years of medieval Europe, Spanish sage was one of the most trusted 
                            protective herbs. Communities would burn it in their homes, carry sprigs for protection, 
                            and use it in various preparations to ward off the devastating disease that claimed 
                            countless lives across the continent.
                        </p>
                        <h4>⏳ Longevity Legend</h4>
                        <p>
                            Spanish mountain folk believed that regular use of this sage could contribute to longevity, 
                            viewing it not merely as a cure for illness but as a pathway to a longer, healthier life. 
                            This belief in its life-extending properties made it a treasured daily herb rather than 
                            just an occasional remedy.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>🧬 Active Compounds</h3>
                    <p className="scientific-note">
                        Spanish sage's therapeutic properties come from its rich concentration of active compounds including 
                        camphor, 1,8-cineole, α-pinene, and various flavonoids. The camphoraceous nature, similar to spike 
                        lavender, provides its distinctive respiratory and circulatory benefits, while the sage compounds 
                        contribute antimicrobial, anti-inflammatory, and cognitive-supporting properties. This unique 
                        chemical profile explains both its historical reputation as a cure-all and its continued relevance 
                        in modern aromatherapy practice.
                    </p>
                </div>
            </div>
        </div>
    );
};


export { EssentialOilProfile_Lavender_EN, EssentialOilProfile_Lemon_EN, EssentialOilProfile_Mandarin_EN, EssentialOilProfile_Pine_EN, EssentialOilProfile_TeaTree_EN, EssentialOilProfile_Myrrh_EN, EssentialOilProfile_Sandalwood_EN, EssentialOilProfile_Ginger_EN, EssentialOilProfile_Rosemary_EN, EssentialOilProfile_ClarySage_EN, EssentialOilProfile_SpanishSage_EN };