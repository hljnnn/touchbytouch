function spawnHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    // Random positions (calculated for mobile screen)
    const x = Math.random() * (gameArea.clientWidth - 60);
    const y = Math.random() * (gameArea.clientHeight - 60);
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // "pointerdown" is faster than "click" on mobile
    heart.addEventListener('pointerdown', (e) => {
        e.preventDefault(); // Prevents ghost clicks
        score++;
        scoreDisplay.textContent = score;
        heart.remove();
        spawnHeart();
    });

    gameArea.appendChild(heart);

    // Fade out effect
    setTimeout(() => {
        if(heart.parentElement) {
            heart.style.transition = "opacity 0.5s";
            heart.style.opacity = "0";
            setTimeout(() => heart.remove(), 500);
        }
    }, 1200);
}