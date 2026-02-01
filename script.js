// Find the NO button by checking text content
const buttons = document.querySelectorAll('button');
const noButton = Array.from(buttons).find(btn => btn.textContent.trim() === 'NO');

// Add event listener to the NO button
if (noButton) {
  noButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Generate random position
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    // Move the button
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  });
} else {
  console.log('NO button not found');
}