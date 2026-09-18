export function initNavigation() {
    /* ---- Scroll Header ---- */
    const header = document.getElementById('siteHeader');
    const backTop = document.getElementById('backTop');
    
    if (header || backTop) {
        window.addEventListener('scroll', () => {
            if (header) header.classList.toggle('scrolled', window.scrollY > 60);
            if (backTop) backTop.classList.toggle('is-visible', window.scrollY > 400);
        });
    }

    if (backTop) {
        backTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Mobile Nav ---- */
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const overlay   = document.getElementById('mobileNavOverlay');

    if (hamburger && mobileNav && overlay) {
        function closeMobileNav() {
            hamburger.classList.remove('is-open');
            mobileNav.classList.remove('is-open');
            overlay.classList.remove('is-open');
        }

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-open');
            mobileNav.classList.toggle('is-open');
            overlay.classList.toggle('is-open');
        });

        overlay.addEventListener('click', closeMobileNav);
        
        // Add listeners to mobile nav links to close the menu
        const navLinks = mobileNav.querySelectorAll('a.nav-link, .btn-consulta');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }
}
