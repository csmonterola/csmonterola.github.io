const toggleButton = document.getElementById('toggle-dark-mode');
const modeIcon = toggleButton.querySelector('.mode-icon');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
});
