export function initModals() {
    // Open Modals via .js-open-modal triggers
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.js-open-modal');
        if (trigger) {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-target');
            if (targetId) {
                const targetModal = document.getElementById(targetId);
                if (targetModal) {
                    targetModal.classList.add('is-open');
                }
            }
        }
    });

    // Close modal when clicking the overlay background (outside content)
    document.addEventListener('click', (e) => {
        // Close via overlay backdrop click
        if (e.target.classList.contains('wa-modal-overlay')) {
            e.target.classList.remove('is-open');
            return;
        }

        // Close via the X button
        const closeBtn = e.target.closest('.wa-close-btn');
        if (closeBtn) {
            const modal = closeBtn.closest('.wa-modal-overlay');
            if (modal) modal.classList.remove('is-open');
            return;
        }

        // Close when clicking a wa-option link (and then the link navigates)
        const waOption = e.target.closest('.wa-option');
        if (waOption) {
            const modal = waOption.closest('.wa-modal-overlay');
            if (modal) modal.classList.remove('is-open');
            // Let the link navigate naturally
        }
    });
}
