const buttons = document.querySelectorAll('.menu-button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    });
});