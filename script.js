document.addEventListener('DOMContentLoaded', () => {
    // 1. Landing Screen Open Handler
    const landingScreen = document.getElementById('landingScreen');
    const mainContent = document.getElementById('mainContent');
    const openBtn = document.getElementById('openBtn');

    openBtn.addEventListener('click', () => {
        landingScreen.style.opacity = '0';
        setTimeout(() => {
            landingScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }, 500);
    });

    // 2. Interactive Cake Game (3-stage eating)
    const cakeBox = document.getElementById('cakeBox');
    const cakeDisplay = document.getElementById('cakeDisplay');
    const cakeStatus = document.getElementById('cakeStatus');

    let cakeStage = 0; // 0: Full, 1: First bite, 2: Second bite, 3: Eaten

    const cakeStages = [
        { emoji: '🎂', text: 'Full Cake (3 BITES LEFT)' },
        { emoji: '🍰', text: 'Yum! First Bite Taken! (2 BITES LEFT)' },
        { emoji: '🍓', text: 'Almost gone! (1 BITE LEFT)' },
        { emoji: '🍽️✨', text: 'Delicious! The Cake is finished! 🎉' }
    ];

    cakeBox.addEventListener('click', () => {
        if (cakeStage < 3) {
            cakeStage++;
        } else {
            cakeStage = 0; // Reset game
        }
        cakeDisplay.textContent = cakeStages[cakeStage].emoji;
        cakeStatus.textContent = cakeStages[cakeStage].text;
    });

    // 3. Wish Form Handler
    const wishForm = document.getElementById('wishForm');
    const wishesList = document.getElementById('wishesList');

    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('senderName');
        const messageInput = document.getElementById('wishMessage');

        const senderName = nameInput.value.trim();
        const wishMessage = messageInput.value.trim();

        if (senderName && wishMessage) {
            const wishCard = document.createElement('div');
            wishCard.classList.add('wish-card');
            wishCard.innerHTML = `<strong>${escapeHTML(senderName)} ✨:</strong> ${escapeHTML(wishMessage)}`;

            wishesList.insertBefore(wishCard, wishesList.firstChild);

            nameInput.value = '';
            messageInput.value = '';
        }
    });

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});
