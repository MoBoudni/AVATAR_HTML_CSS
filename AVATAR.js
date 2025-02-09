document.addEventListener('DOMContentLoaded', () => {
    // Konstanten für häufig verwendete Selektoren
    const SELECTORS = {
        button: '.content button',
        navLinks: 'nav a',
        container: '.container',
        content: '.content'
    };

    // Aktuelle aktive Sektion
    let activeSection = document.querySelector(`${SELECTORS.content}.active`);

    // Button-Klick-Handler
    const button = document.querySelector(SELECTORS.button);
    if (button) {
        button.addEventListener('click', () => {
            alert('Weitere Informationen folgen in Kürze!');
        });
    }

    // Navigation Handler
    const navLinks = document.querySelectorAll(SELECTORS.navLinks);
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Aktive Sektion aktualisieren
                if (activeSection) {
                    activeSection.classList.remove('active');
                }
                targetSection.classList.add('active');
                activeSection = targetSection;

                // Smooth Scroll zur Zielsektion
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Container Hover-Effekte
    const container = document.querySelector(SELECTORS.container);
    if (container) {
        const backgrounds = {
            default: "linear-gradient(to right, rgba(1, 2, 45, 0.9) 30%, rgba(0, 0, 0, 0.53)), url('avatar-2009.webp')",
            hover: "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.53) 30%), url('new-avatar-image.webp')"
        };

        container.addEventListener('mouseenter', () => {
            container.style.backgroundImage = backgrounds.hover;
        });

        container.addEventListener('mouseleave', () => {
            container.style.backgroundImage = backgrounds.default;
        });
    }
});