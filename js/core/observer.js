export function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (revealEls.length === 0) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { 
            if (e.isIntersecting) { 
                e.target.classList.add('is-visible'); 
                io.unobserve(e.target); 
            } 
        });
    }, { threshold: 0.12 });
    
    revealEls.forEach(el => io.observe(el));
}
