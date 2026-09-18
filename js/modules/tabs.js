export function initTabs() {
    const tabBtns = document.querySelectorAll('.js-tab-btn');
    if (tabBtns.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTabId = btn.getAttribute('data-tab');
            if (!targetTabId) return;

            // Remove active classes
            document.querySelectorAll('.js-tab-btn').forEach(b => b.classList.remove('is-active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('is-active'));
            
            // Add active classes
            btn.classList.add('is-active');
            const targetPanel = document.getElementById('tab-' + targetTabId);
            if (targetPanel) {
                targetPanel.classList.add('is-active');
            }
        });
    });
}
