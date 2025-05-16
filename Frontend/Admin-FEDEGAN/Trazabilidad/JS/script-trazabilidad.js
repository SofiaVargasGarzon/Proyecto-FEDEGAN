function inicializarTrazabilidad() {
    const menuButtons = document.querySelectorAll('.buton-menu');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const contentSections = document.querySelectorAll('.contenido-nacional, .contenido-internacional');
            contentSections.forEach(section => section.style.display = 'none');

            const targetSection = document.querySelector('.' + button.getAttribute('data-target'));
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
}
