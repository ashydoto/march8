document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendGreeting');
    const messagePopup = document.getElementById('messagePopup');
    const closePopup = document.getElementById('closePopup');
    const fallingHeartsContainer = document.getElementById('fallingHearts');
    
    // Function to create falling hearts animation
    function createFallingHearts() {
        fallingHeartsContainer.innerHTML = '';
        
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💘'];
        const numberOfHearts = 30;
        
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('falling-heart');
            
            // Random heart type
            const randomHeartIndex = Math.floor(Math.random() * heartSymbols.length);
            heart.textContent = heartSymbols[randomHeartIndex];
            
            // Random position
            const leftPosition = Math.random() * 100;
            heart.style.left = `${leftPosition}%`;
            
            // Random start delay
            const delay = Math.random() * 3;
            heart.style.animationDelay = `${delay}s`;
            
            // Random duration
            const duration = Math.random() * 3 + 2;
            heart.style.animationDuration = `${duration}s`;
            
            fallingHeartsContainer.appendChild(heart);
        }
    }
    
    // Handle button click
    sendButton.addEventListener('click', function() {
        // Show the popup message
        messagePopup.classList.add('active');
        
        // Create falling hearts animation
        createFallingHearts();
        
        // Simulate sending with vibration (if supported)
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    });
    
    // Close the popup when clicking the close button
    closePopup.addEventListener('click', function() {
        messagePopup.classList.remove('active');
    });
    
    // Close the popup when clicking outside of it
    messagePopup.addEventListener('click', function(event) {
        if (event.target === messagePopup) {
            messagePopup.classList.remove('active');
        }
    });
});