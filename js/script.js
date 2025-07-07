document.addEventListener('DOMContentLoaded', function() {
    // Параллакс эффект для героя
    const parallaxBg = document.getElementById('parallax-bg');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация появления элементов при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section__inner, .program__item, .ticket');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Инициализация при загрузке

    // Изменение хедера при скролле
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Фейковые кнопки покупки билетов
    const buyButtons = document.querySelectorAll('.ticket__buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Спасибо за интерес к нашему фестивалю! На данный момент это демонстрационная версия. В реальном проекте здесь будет форма оплаты.');
        });
    });

    // Анимация для программы
    const programItems = document.querySelectorAll('.program__item');
    
    programItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.height = '300px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.height = '80px';
        });
    });

    // Эффект эмбилайт для программы
    const programGlow = document.querySelector('.program__glow');

    programItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const color = this.getAttribute('data-color');
            const rect = this.getBoundingClientRect();
            
            // Позиция подсветки по центру элемента
            const x = rect.left + rect.width/2;
            const y = rect.top + rect.height/2;
            
            programGlow.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    transparent 0%,
                    ${color + '4D'} 70%
                )
            `;
            programGlow.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            programGlow.style.opacity = '0';
        });
        
        item.addEventListener('mousemove', function(e) {
            const color = this.getAttribute('data-color');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Подсветка следует за курсором внутри элемента
            programGlow.style.background = `
                radial-gradient(
                    circle at ${x + rect.left}px ${y + rect.top}px,
                    transparent 0%,
                    ${color + '4D'} 70%
                )
            `;
        });
    });
});