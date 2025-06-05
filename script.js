// Create floating dots
const dotsContainer = document.querySelector('.background-dots');
const numberOfDots = 1500;

for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'floating-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = Math.random() * 10 + 's';
    dot.style.animationDuration = (Math.random() * 10 + 15) + 's';
    dotsContainer.appendChild(dot);
} 