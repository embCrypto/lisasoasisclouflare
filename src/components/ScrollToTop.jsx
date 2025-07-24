import { useState, useEffect } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#8fbc8f',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '20px',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                display: isVisible ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: 1 // Always fully visible
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7aa67a';
                e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8fbc8f';
                e.target.style.transform = 'scale(1)';
            }}
            title="Scroll to top"
        >
            ↑
        </button>
    );

}

export default ScrollToTop;
