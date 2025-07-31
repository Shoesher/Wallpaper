document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainer = document.querySelector('.wallpaper-container');
    new Parallax(parallaxContainer);


    const interactiveEye = document.querySelector('.glowing-eye');
    if (interactiveEye) {
        interactiveEye.addEventListener('click', () => {
            alert('Eye clicked!'); // Example interaction
            // Add more complex interactions here
        });
        interactiveEye.addEventListener('mouseover', () => {
            interactiveEye.style.boxShadow = '0 0 30px #00ffff'; // Example hover effect
        });
        interactiveEye.addEventListener('mouseout', () => {
            interactiveEye.style.boxShadow = '0 0 20px #ff00ff';
        });
    }
});