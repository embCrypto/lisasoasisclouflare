import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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

// English profiles
import { 
    EssentialOilProfile_Lavender_EN, 
    EssentialOilProfile_Lemon_EN, 
    EssentialOilProfile_Mandarin_EN, 
    EssentialOilProfile_Pine_EN, 
    EssentialOilProfile_TeaTree_EN, 
    EssentialOilProfile_Myrrh_EN, 
    EssentialOilProfile_Sandalwood_EN, 
    EssentialOilProfile_Ginger_EN, 
    EssentialOilProfile_Rosemary_EN, 
    EssentialOilProfile_ClarySage_EN, 
    EssentialOilProfile_SpanishSage_EN 
} from '../components/OilProfiles';

// German profiles
import { 
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
} from '../components/OilProfilesDE';

import { 
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
} from '../components/OilProfilesRO';

import ScrollToTop from '../components/ScrollToTop';

function ProfileOfEssentialOils() {
    const { language, currentLanguage } = useLanguage();
    const [currentProfile, setCurrentProfile] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    
    
        // Get language-specific oil profiles
        const getOilProfiles = () => {
            const profileMaps = {
                en: {
                    profiles: [
                        { component: <EssentialOilProfile_ClarySage_EN />, name: 'Clary Sage' },
                        { component: <EssentialOilProfile_Ginger_EN />, name: 'Ginger' },
                        { component: <EssentialOilProfile_Lavender_EN />, name: 'Lavender' },
                        { component: <EssentialOilProfile_Lemon_EN />, name: 'Lemon' },
                        { component: <EssentialOilProfile_Mandarin_EN />, name: 'Mandarin' },
                        { component: <EssentialOilProfile_Myrrh_EN />, name: 'Myrrh' },
                        { component: <EssentialOilProfile_Pine_EN />, name: 'Pine' },
                        { component: <EssentialOilProfile_Rosemary_EN />, name: 'Rosemary' },
                        { component: <EssentialOilProfile_Sandalwood_EN />, name: 'Sandalwood' },
                        { component: <EssentialOilProfile_SpanishSage_EN />, name: 'Spanish Sage' },
                        { component: <EssentialOilProfile_TeaTree_EN />, name: 'Tea Tree' }
                    ]
                },
                de: {
                    profiles: [
                        { component: <EssentialOilProfile_ClarySage_DE />, name: 'Muskatellersalbei' },
                        { component: <EssentialOilProfile_Ginger_DE />, name: 'Ingwer' },
                        { component: <EssentialOilProfile_Lavender_DE />, name: 'Lavendel' },
                        { component: <EssentialOilProfile_Lemon_DE />, name: 'Zitrone' },
                        { component: <EssentialOilProfile_Mandarin_DE />, name: 'Mandarine' },
                        { component: <EssentialOilProfile_Myrrh_DE />, name: 'Myrrhe' },
                        { component: <EssentialOilProfile_Pine_DE />, name: 'Kiefer' },
                        { component: <EssentialOilProfile_Rosemary_DE />, name: 'Rosmarin' },
                        { component: <EssentialOilProfile_Sandalwood_DE />, name: 'Sandelholz' },
                        { component: <EssentialOilProfile_SpanishSage_DE />, name: 'Spanischer Salbei' },
                        { component: <EssentialOilProfile_TeaTree_DE />, name: 'Teebaum' }
                    ]
                },
                ro: {
                    profiles: [
                        { component: <EssentialOilProfile_ClarySage_RO />, name: 'Salvie Sclarea' },
                        { component: <EssentialOilProfile_Ginger_RO />, name: 'Ghimbir' },
                        { component: <EssentialOilProfile_Lavender_RO />, name: 'Lavandă' },
                        { component: <EssentialOilProfile_Lemon_RO />, name: 'Lămâie' },
                        { component: <EssentialOilProfile_Mandarin_RO />, name: 'Mandarină' },
                        { component: <EssentialOilProfile_Myrrh_RO />, name: 'Smirnă' },
                        { component: <EssentialOilProfile_Pine_RO />, name: 'Pin' },
                        { component: <EssentialOilProfile_Rosemary_RO />, name: 'Rozmarin' },
                        { component: <EssentialOilProfile_Sandalwood_RO />, name: 'Lemn de Santal' },
                        { component: <EssentialOilProfile_SpanishSage_RO />, name: 'Salvie Spaniolă' },
                        { component: <EssentialOilProfile_TeaTree_RO />, name: 'Arbore de Ceai' }
                    ]
                }
            };
    
            const images = [
                clarySageImage,
                gingerImage,
                lavendelImage,
                lemonImage,
                mandarinImage,
                myrrhImage,
                pineTreeImage,
                rosemaryImage,
                sandalwoodImage,
                spanishSageImage,
                teaTree
            ];
    
            const icons = ['🌿', '🫚', '💜', '🍋', '🍊', '⚗️', '🌲', '🌿', '🪵', '🌿', '🌿'];
    
            // Add fallback to 'en' if language is not found
            const this_currentLanguage = currentLanguage || 'en';
            const profileMap = profileMaps[this_currentLanguage] || profileMaps['en'];
    
            return profileMap.profiles.map((profile, index) => ({
                ...profile,
                image: images[index],
                icon: icons[index]
            }));
        };
    
    
        // Get language-specific text
        const getText = () => {
            const texts = {
                en: {
                    title: 'Essential Oil Profiles',
                    subtitle: 'Discover the therapeutic properties, uses, and benefits of nature\'s most powerful essential oils. Navigate through our comprehensive profiles to learn about each oil\'s unique characteristics.',
                    searchTitle: '🔍 Search & Navigate Profiles',
                    searchPlaceholder: 'Search essential oils (e.g., lavender, sage, myrrh)...',
                    availableProfiles: 'Available Oil Profiles',
                    noResults: 'No oil profiles found matching',
                    trySearching: 'Try searching for "lavender", "sage", or "myrrh"',
                    swipeInstructions: '👆 Swipe left or right to navigate profiles',
                    profilesAvailable: 'Essential Oil Profiles Available!',
                    exploreCollection: 'Explore our comprehensive collection of essential oil profiles. Each profile includes detailed information about therapeutic uses, blending recommendations, safety precautions, and historical background to guide your natural wellness journey.',
                    categories: {
                        floral: '🌸 Floral & Herbal',
                        citrus: '🍊 Citrus',
                        woody: '🌲 Woody & Resinous',
                        warming: '🌶️ Warming & Spicy'
                    },
                    categoryItems: {
                        floral: 'Lavender, Clary Sage, Spanish Sage, Rosemary',
                        citrus: 'Lemon, Mandarin',
                        woody: 'Pine, Myrrh, Sandalwood, Tea Tree',
                        warming: 'Ginger'
                    }
                },
                de: {
                    title: 'Ätherische Öl Profile',
                    subtitle: 'Entdecken Sie die therapeutischen Eigenschaften, Anwendungen und Vorteile der kraftvollsten ätherischen Öle der Natur. Navigieren Sie durch unsere umfassenden Profile, um die einzigartigen Eigenschaften jedes Öls kennenzulernen.',
                    searchTitle: '🔍 Profile Suchen & Navigieren',
                    searchPlaceholder: 'Ätherische Öle suchen (z.B. Lavendel, Salbei, Myrrhe)...',
                    availableProfiles: 'Verfügbare Öl-Profile',
                    noResults: 'Keine Öl-Profile gefunden für',
                    trySearching: 'Versuchen Sie "Lavendel", "Salbei" oder "Myrrhe"',
                    swipeInstructions: '👆 Links oder rechts wischen zum Navigieren',
                    profilesAvailable: 'Ätherische Öl Profile verfügbar!',
                    exploreCollection: 'Entdecken Sie unsere umfassende Sammlung ätherischer Öl-Profile. Jedes Profil enthält detaillierte Informationen über therapeutische Anwendungen, Mischungsempfehlungen, Sicherheitsvorkehrungen und historischen Hintergrund für Ihre natürliche Wellness-Reise.',
                    categories: {
                        floral: '🌸 Blumig & Kräuterig',
                        citrus: '🍊 Zitrusfrüchte',
                        woody: '🌲 Holzig & Harzig',
                        warming: '🌶️ Wärmend & Würzig'
                    },
                    categoryItems: {
                        floral: 'Lavendel, Muskatellersalbei, Spanischer Salbei, Rosmarin',
                        citrus: 'Zitrone, Mandarine',
                        woody: 'Kiefer, Myrrhe, Sandelholz, Teebaum',
                        warming: 'Ingwer'
                    }
                },
                ro: {
                    title: 'Profile Uleiuri Esențiale',
                    subtitle: 'Descoperiți proprietățile terapeutice, utilizările și beneficiile celor mai puternice uleiuri esențiale ale naturii. Navigați prin profilurile noastre cuprinzătoare pentru a învăța despre caracteristicile unice ale fiecărui ulei.',
                    searchTitle: '🔍 Căutare & Navigare Profile',
                    searchPlaceholder: 'Căutați uleiuri esențiale (ex. lavandă, salvie, smirnă)...',
                    availableProfiles: 'Profile Uleiuri Disponibile',
                    noResults: 'Nu s-au găsit profile pentru',
                    trySearching: 'Încercați să căutați "lavandă", "salvie" sau "smirnă"',
                    swipeInstructions: '👆 Glisați stânga sau dreapta pentru navigare',
                    profilesAvailable: 'Profile Uleiuri Esențiale Disponibile!',
                    exploreCollection: 'Explorați colecția noastră cuprinzătoare de profile de uleiuri esențiale. Fiecare profil include informații detaliate despre utilizările terapeutice, recomandări de amestec, măsuri de siguranță și istoric pentru a vă ghida în călătoria wellness naturală.',
                    categories: {
                        floral: '🌸 Florale & Ierburi',
                        citrus: '🍊 Citrice',
                        woody: '🌲 Lemnoase & Rășinoase',
                        warming: '🌶️ Încălzitoare & Picante'
                    },
                    categoryItems: {
                        floral: 'Lavandă, Salvie Sclarea, Salvie Spaniolă, Rozmarin',
                        citrus: 'Lămâie, Mandarină',
                        woody: 'Pin, Smirnă, Lemn de Santal, Arbore de Ceai',
                        warming: 'Ghimbir'
                    }
                }
            };
            
            // Add fallback to 'en' if language is not found
            const this_currentLanguage = currentLanguage || 'en';
            return texts[this_currentLanguage] || texts['en'];
        };
    
    // ...rest of your existing code...

    const oilProfiles = getOilProfiles();
    
        const text = getText();
    
    // ...rest of your existing code...
    
    // Check if mobile on component mount and window resize
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    // Navigation functions
    const nextProfile = () => {
        setCurrentProfile((prev) => (prev + 1) % oilProfiles.length);
    };
    
    const prevProfile = () => {
        setCurrentProfile((prev) => (prev - 1 + oilProfiles.length) % oilProfiles.length);
    };
    
    const goToProfile = (index) => {
        setCurrentProfile(index);
        // Scroll to carousel with smooth animation
        setTimeout(() => {
            const carouselElement = document.querySelector('.oil-profiles-carousel');
            if (carouselElement) {
                carouselElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 100);
    };
    
    // Filter profiles based on search term
    const filteredProfiles = oilProfiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Touch handlers for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    
    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        
        if (isLeftSwipe && currentProfile < oilProfiles.length - 1) {
            nextProfile();
        }
        if (isRightSwipe && currentProfile > 0) {
            prevProfile();
        }
    };
    
    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft' && currentProfile > 0) {
                prevProfile();
            } else if (e.key === 'ArrowRight' && currentProfile < oilProfiles.length - 1) {
                nextProfile();
            }
        };
        
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentProfile, oilProfiles.length]);
    
    return (
        <div className="page-container" style={{ maxWidth: '950px', margin: '0 auto' }}>
            <br />
            <div className="step-card" style={{ padding: '30px' }}>
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
                    {text.title}
                </h1>
                <p style={{ marginBottom: '30px', fontSize: '18px', textAlign: 'center' }}>
                    {text.subtitle}
                </p>
                
                {/* Search Section */}
                <div style={{ 
                    marginBottom: '40px', 
                    padding: '25px',
                    background: 'rgba(143, 188, 143, 0.1)',
                    borderRadius: '15px',
                    border: '2px solid rgba(143, 188, 143, 0.3)'
                }}>
                    <h3 style={{ 
                        color: '#2d5016', 
                        marginBottom: '20px', 
                        textAlign: 'center',
                        fontSize: '20px'
                    }}>
                        {text.searchTitle}
                    </h3>
                    
                    {/* Search Bar */}
                    <div style={{ marginBottom: '25px' }}>
                        <input
                            type="text"
                            placeholder={text.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px 20px',
                                fontSize: '16px',
                                border: '2px solid rgba(143, 188, 143, 0.5)',
                                borderRadius: '25px',
                                outline: 'none',
                                background: 'rgba(255, 255, 255, 0.9)',
                                color: '#2d5016',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#8fbc8f';
                                e.target.style.boxShadow = '0 4px 12px rgba(143, 188, 143, 0.3)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(143, 188, 143, 0.5)';
                                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                            }}
                        />
                    </div>
                    
                    {/* Quick Navigation - Available Profiles */}
                    <div>
                        <h4 style={{ 
                            color: '#2d5016', 
                            marginBottom: '15px',
                            fontSize: '16px',
                            textAlign: 'center'
                        }}>
                            {text.availableProfiles} ({filteredProfiles.length})
                        </h4>
                        
                        {filteredProfiles.length > 0 ? (
                            <div style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '12px',
                                justifyContent: 'center'
                            }}>
                                {filteredProfiles.map((profile, index) => {
                                    const originalIndex = oilProfiles.findIndex(p => p.name === profile.name);
                                    return (
                                        <button
                                            key={profile.name}
                                            onClick={() => goToProfile(originalIndex)}
                                            style={{
                                                background: currentProfile === originalIndex ? '#8fbc8f' : 'rgba(255, 255, 255, 0.9)',
                                                border: currentProfile === originalIndex ? '2px solid #2d5016' : '2px solid rgba(143, 188, 143, 0.5)',
                                                borderRadius: '20px',
                                                padding: '12px 20px',
                                                cursor: 'pointer',
                                                color: currentProfile === originalIndex ? '#2d5016' : '#4a6741',
                                                fontSize: '14px',
                                                fontWeight: currentProfile === originalIndex ? 'bold' : 'normal',
                                                transition: 'all 0.3s ease',
                                                boxShadow: currentProfile === originalIndex ? '0 4px 12px rgba(143, 188, 143, 0.4)' : '0 2px 6px rgba(0,0,0,0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (currentProfile !== originalIndex) {
                                                    e.target.style.background = 'rgba(143, 188, 143, 0.2)';
                                                    e.target.style.borderColor = '#8fbc8f';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (currentProfile !== originalIndex) {
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                                    e.target.style.borderColor = 'rgba(143, 188, 143, 0.5)';
                                                    e.target.style.transform = 'translateY(0)';
                                                }
                                            }}
                                        >
                                            <span style={{ fontSize: '16px' }}>{profile.icon}</span>
                                            {profile.name}
                                            {currentProfile === originalIndex && (
                                                <span style={{ fontSize: '12px', marginLeft: '4px' }}>👁️</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div style={{ 
                                textAlign: 'center', 
                                color: '#666', 
                                fontStyle: 'italic',
                                padding: '20px'
                            }}>
                                {text.noResults} "{searchTerm}"
                                <br />
                                <small>{text.trySearching}</small>
                            </div>
                        )}
                    </div>
                </div>
                <br/>
                {/* Carousel Container */}
                <div className="oil-profiles-carousel" style={{ marginBottom: '20px' }}>
                    {/* Navigation Controls at Top */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        gap: isMobile ? '10px' : '20px',
                        marginBottom: isMobile ? '15px' : '20px',
                        padding: isMobile ? '10px' : '15px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Left Arrow */}
                        <button
                            onClick={prevProfile}
                            disabled={currentProfile === 0}
                            style={{
                                background: currentProfile === 0 ? 'rgba(143, 188, 143, 0.3)' : 'rgba(143, 188, 143, 0.8)',
                                border: 'none',
                                borderRadius: '50%',
                                width: isMobile ? '40px' : '45px',
                                height: isMobile ? '40px' : '45px',
                                fontSize: isMobile ? '16px' : '18px',
                                color: currentProfile === 0 ? '#999' : '#2d5016',
                                cursor: currentProfile === 0 ? 'not-allowed' : 'pointer',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                            onMouseEnter={(e) => {
                                if (currentProfile !== 0 && !isMobile) {
                                    e.target.style.background = '#8fbc8f';
                                    e.target.style.transform = 'scale(1.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentProfile !== 0 && !isMobile) {
                                    e.target.style.background = 'rgba(143, 188, 143, 0.8)';
                                    e.target.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            ‹
                        </button>
                        
                        {/* Profile Indicator */}
                        <div style={{ 
                            textAlign: 'center',
                            color: '#2d5016',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 'bold',
                            minWidth: isMobile ? '150px' : '200px',
                            flex: '1',
                            maxWidth: '300px'
                        }}>
                            <span style={{ 
                                fontSize: isMobile ? '18px' : '20px', 
                                marginRight: '8px' 
                            }}>
                                {oilProfiles[currentProfile].icon}
                            </span>
                            <div style={{ 
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.2'
                            }}>
                                {oilProfiles[currentProfile].name} {currentLanguage === 'en' ? 'Essential Oil' : language === 'de' ? 'Ätherisches Öl' : 'Ulei Esențial'}
                            </div>
                            <div style={{ 
                                fontSize: isMobile ? '12px' : '14px', 
                                fontWeight: 'normal',
                                color: '#4a6741',
                                marginTop: '5px'
                            }}>
                                ({currentProfile + 1} {currentLanguage === 'en' ? 'of' : currentLanguage === 'de' ? 'von' : 'din'} {oilProfiles.length})
                            </div>
                        </div>
                        
                        {/* Right Arrow */}
                        <button
                            onClick={nextProfile}
                            disabled={currentProfile === oilProfiles.length - 1}
                            style={{
                                background: currentProfile === oilProfiles.length - 1 ? 'rgba(143, 188, 143, 0.3)' : 'rgba(143, 188, 143, 0.8)',
                                border: 'none',
                                borderRadius: '50%',
                                width: isMobile ? '40px' : '45px',
                                height: isMobile ? '40px' : '45px',
                                fontSize: isMobile ? '16px' : '18px',
                                color: currentProfile === oilProfiles.length - 1 ? '#999' : '#2d5016',
                                cursor: currentProfile === oilProfiles.length - 1 ? 'not-allowed' : 'pointer',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                            onMouseEnter={(e) => {
                                if (currentProfile !== oilProfiles.length - 1 && !isMobile) {
                                    e.target.style.background = '#8fbc8f';
                                    e.target.style.transform = 'scale(1.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentProfile !== oilProfiles.length - 1 && !isMobile) {
                                    e.target.style.background = 'rgba(143, 188, 143, 0.8)';
                                    e.target.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            ›
                        </button>
                    </div>
                    
                    {/* Mobile Swipe Instructions */}
                    {isMobile && (
                        <div style={{
                            textAlign: 'center',
                            fontSize: '12px',
                            color: '#4a6741',
                            marginBottom: '15px',
                            padding: '8px',
                            background: 'rgba(143, 188, 143, 0.1)',
                            borderRadius: '8px',
                            border: '1px solid rgba(143, 188, 143, 0.3)'
                        }}>
                            {text.swipeInstructions}
                        </div>
                    )}
                    
                    {/* Profile Display Area - Only Current Profile */}
                    <div 
                        className="oil-profiles-container"
                        onTouchStart={isMobile ? onTouchStart : undefined}
                        onTouchMove={isMobile ? onTouchMove : undefined}
                        onTouchEnd={isMobile ? onTouchEnd : undefined}
                        style={{
                            cursor: isMobile ? 'grab' : 'default',
                            minHeight: isMobile ? '300px' : '400px',
                            overflow: 'hidden',
                            borderRadius: '10px',
                            boxShadow: isMobile ? '0 2px 10px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.1)',
                            position: 'relative',
                            touchAction: isMobile ? 'pan-y' : 'auto'
                        }}
                    >
                        <div style={{
                            transform: isMobile ? `translateX(0%)` : 'none',
                            transition: 'transform 0.3s ease',
                            width: '100%'
                        }}>
                            {oilProfiles[currentProfile].component}
                        </div>
                    </div>
                </div>
                
                {/* Bullet Point Navigation */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    marginBottom: '30px' 
                }}>
                    {oilProfiles.map((profile, index) => (
                        <button
                            key={index}
                            onClick={() => goToProfile(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                background: currentProfile === index ? '#8fbc8f' : 'rgba(143, 188, 143, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: currentProfile === index ? '0 2px 8px rgba(143, 188, 143, 0.5)' : 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (currentProfile !== index) {
                                    e.target.style.background = 'rgba(143, 188, 143, 0.6)';
                                    e.target.style.transform = 'scale(1.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentProfile !== index) {
                                    e.target.style.background = 'rgba(143, 188, 143, 0.3)';
                                    e.target.style.transform = 'scale(1)';
                                }
                            }}
                            title={profile.name}
                        />
                    ))}
                </div>
                
                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '30px', 
                    padding: '20px',
                    background: 'rgba(143, 188, 143, 0.1)',
                    borderRadius: '15px'
                }}>
                    <h3 style={{ color: '#2d5016', marginBottom: '15px' }}>
                        🌿 {oilProfiles.length} {text.profilesAvailable}
                    </h3>
                    <p style={{ color: '#4a6741', marginBottom: '15px' }}>
                        {text.exploreCollection}
                    </p>
                    
                    {/* Profile Categories */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '15px', 
                        marginTop: '20px' 
                    }}>
                        <div style={{ 
                            background: 'rgba(255, 255, 255, 0.6)', 
                            padding: '15px', 
                            borderRadius: '10px',
                            border: '2px solid rgba(143, 188, 143, 0.3)'
                        }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{text.categories.floral}</h4>
                            <div style={{ fontSize: '14px', color: '#4a6741' }}>
                                {text.categoryItems.floral}
                            </div>
                        </div>
                        
                        <div style={{ 
                            background: 'rgba(255, 255, 255, 0.6)', 
                            padding: '15px', 
                            borderRadius: '10px',
                            border: '2px solid rgba(143, 188, 143, 0.3)'
                        }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{text.categories.citrus}</h4>
                            <div style={{ fontSize: '14px', color: '#4a6741' }}>
                                {text.categoryItems.citrus}
                            </div>
                        </div>
                        
                        <div style={{ 
                            background: 'rgba(255, 255, 255, 0.6)', 
                            padding: '15px', 
                            borderRadius: '10px',
                            border: '2px solid rgba(143, 188, 143, 0.3)'
                        }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{text.categories.woody}</h4>
                            <div style={{ fontSize: '14px', color: '#4a6741' }}>
                                {text.categoryItems.woody}
                            </div>
                        </div>
                        
                        <div style={{ 
                            background: 'rgba(255, 255, 255, 0.6)', 
                            padding: '15px', 
                            borderRadius: '10px',
                            border: '2px solid rgba(143, 188, 143, 0.3)'
                        }}>
                            <h4 style={{ color: '#2d5016', marginBottom: '10px' }}>{text.categories.warming}</h4>
                            <div style={{ fontSize: '14px', color: '#4a6741' }}>
                                {text.categoryItems.warming}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ 
                    marginTop: '40px', 
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '10px',
                    borderTop: '3px solid #8fbc8f'
                }}>
                    <h4 style={{ color: '#2d5016', marginBottom: '10px', fontSize: '16px' }}>
                        {currentLanguage === 'en' ? 'References' : currentLanguage === 'de' ? 'Referenzen' : 'Referințe'}
                    </h4>
                    <p style={{ 
                        color: '#4a6741', 
                        fontSize: '14px', 
                        fontStyle: 'italic',
                        margin: '0',
                        lineHeight: '1.5'
                    }}>
                        {currentLanguage === 'de' ? 'Vgl.' : currentLanguage === 'ro' ? 'Vezi' : 'See'} Kynes, Sandra. Llewellyn's Complete Book of Essential Oils. Llewellyn Publications, 2019.
                    </p>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}

export default ProfileOfEssentialOils;