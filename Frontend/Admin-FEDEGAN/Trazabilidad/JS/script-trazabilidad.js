const menuButtons = document.querySelectorAll('.buton-menu');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        menuButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
        
        // Hide all content sections
        const contentSections = document.querySelectorAll('.contenido-nacional, .contenido-internacional');
        contentSections.forEach(section => section.style.display = 'none');
        
        // Show the corresponding content section
        const targetSection = document.querySelector('.' + button.getAttribute('data-target'));
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
}
);