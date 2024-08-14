document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
    });
});
