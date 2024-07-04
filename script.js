function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleLanguage() {
    const enText = document.getElementById('about-en');
    const ruText = document.getElementById('about-ru');

    if (enText.style.display === 'none') {
        enText.style.display = 'block';
        ruText.style.display = 'none';
    } else {
        enText.style.display = 'none';
        ruText.style.display = 'block';
    }
}