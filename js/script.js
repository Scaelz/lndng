// Плавная прокрутка для меню
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация кнопки
const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
});
button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
});
