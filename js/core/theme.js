export function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    
    const themeIcon = themeBtn.querySelector('i');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'ri-sun-fill';
    }

    themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            if (themeIcon) themeIcon.className = 'ri-moon-fill';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.className = 'ri-sun-fill';
            localStorage.setItem('theme', 'dark');
        }
    });
}
