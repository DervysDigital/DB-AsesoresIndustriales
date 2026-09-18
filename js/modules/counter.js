function animateCount(el, target, duration = 1800) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { 
            el.textContent = target; 
            clearInterval(timer); 
            return; 
        }
        el.textContent = Math.floor(start);
    }, 16);
}

export function initCounter() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const elYears = document.getElementById('countYears');
            const elCerts = document.getElementById('countCerts');
            const elCourses = document.getElementById('countCourses');

            if (elYears) animateCount(elYears, 30);
            if (elCerts) animateCount(elCerts, 3);
            if (elCourses) animateCount(elCourses, 10);
            
            heroObserver.disconnect();
        }
    }, { threshold: 0.4 });
    
    heroObserver.observe(heroSection);
}
