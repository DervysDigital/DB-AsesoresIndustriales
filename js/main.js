import { initTheme } from './core/theme.js';
import { initScrollReveal } from './core/observer.js';
import { initNavigation } from './modules/navigation.js';
import { initModals } from './modules/modal.js';
import { initTabs } from './modules/tabs.js';
import { initCounter } from './modules/counter.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollReveal();
    initNavigation();
    initModals();
    initTabs();
    initCounter();
});
