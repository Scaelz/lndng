document.addEventListener('DOMContentLoaded', function () {
    // Конфигурация галереи
    const galleryPhotos = [
        "https://picsum.dev//static/42/800/600",
        "https://picsum.dev//static/1/800/600",
        "https://picsum.dev//static/2/800/600",
        "https://picsum.dev//static/3/800/600",
        "https://picsum.dev//static/4/800/600",
        "https://picsum.dev//static/5/800/600",
        "https://picsum.dev//static/6/800/600",
    ];

    function initPhotoDrum() {
        const container = document.getElementById('photoDrum');
        const dotsContainer = document.getElementById('galleryDots');
        let interval = runInterval();
        // Создаем слайды
        galleryPhotos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url(${photo})`;
            container.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            dot.addEventListener('click', () => {
                goToSlide(index);
                clearInterval(interval);
                interval = runInterval();
            });
            dotsContainer.appendChild(dot);
        });

        // Автопереключение
        let currentIndex = 0;
        const slides = document.querySelectorAll('.gallery-slide');
        const dots = document.querySelectorAll('.gallery-dot');

        function goToSlide(index) {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function runInterval() {
            return setInterval(() => {
                const nextIndex = (currentIndex + 1) % galleryPhotos.length;
                goToSlide(nextIndex);
            }, 7000);
        }

        interval.stop
    }

    initPhotoDrum();

    // Параллакс эффект для героя
    const parallaxBg = document.getElementById('parallax-bg');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    const animateOnScroll = function () {
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

    window.addEventListener('scroll', function () {
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
        button.addEventListener('click', function () {
            alert('Спасибо за интерес к нашему фестивалю! На данный момент это демонстрационная версия. В реальном проекте здесь будет форма оплаты.');
        });
    });

    // Анимация для программы
    const programItems = document.querySelectorAll('.program__item');

    programItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.height = '300px';
        });

        item.addEventListener('mouseleave', function () {
            this.style.height = '80px';
        });
    });

    // Эффект эмбилайт для программы
    const programGlow = document.querySelector('.program__glow');

    programItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const color = this.getAttribute('data-color');
            const rect = this.getBoundingClientRect();

            // Позиция подсветки по центру элемента
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            programGlow.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    transparent 0%,
                    ${color + '4D'} 70%
                )
            `;
            programGlow.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function () {
            programGlow.style.opacity = '0';
        });

        item.addEventListener('mousemove', function (e) {
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

    // Мобильное меню
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');

        // Блокировка скролла при открытом меню
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                burger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Закрытие меню при ресайзе
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Данные спикеров
const speakers = [
  {
    name: "Иван Петров",
    photo: "https://picsum.dev//static/37/800/600",
    bio: "Психолог с 10-летним опытом, специалист по семейным отношениям...",
    events: [
      "1 августа: Мастер-класс 'Гармония в семье'",
      "2 августа: Лекция 'Дети и родители'"
    ]
  },
  // Добавьте других спикеров
];

function initSpeakers() {
  const container = document.getElementById('speakersContainer');
  const infoContainer = document.getElementById('speakerInfo');
  
  // Создаем аватары спикеров
  speakers.forEach((speaker, index) => {
    const avatar = document.createElement('img');
    avatar.className = 'speaker-avatar';
    avatar.src = speaker.photo;
    avatar.alt = speaker.name;
    avatar.dataset.index = index;
    
    // Позиционируем аватары с небольшим смещением
    avatar.style.left = `${100 + index * 80}px`;
    avatar.style.top = `${index % 2 === 0 ? 40 : 60}px`;
    
    avatar.addEventListener('click', () => showSpeakerInfo(index));
    container.appendChild(avatar);
  });
  
  // Инициализация первого спикера
  if (speakers.length > 0) {
    document.querySelector('.speaker-avatar').classList.add('active');
    showSpeakerInfo(0);
  }
  
  // Управление стрелками
  let currentSpeaker = 0;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  function updateSpeaker(index) {
    document.querySelector('.speaker-avatar.active').classList.remove('active');
    currentSpeaker = index;
    document.querySelectorAll('.speaker-avatar')[currentSpeaker].classList.add('active');
    showSpeakerInfo(currentSpeaker);
  }
  
  prevBtn.addEventListener('click', () => {
    const newIndex = (currentSpeaker - 1 + speakers.length) % speakers.length;
    updateSpeaker(newIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    const newIndex = (currentSpeaker + 1) % speakers.length;
    updateSpeaker(newIndex);
  });
}

function showSpeakerInfo(index) {
  const speaker = speakers[index];
  const infoContainer = document.getElementById('speakerInfo');
  
  infoContainer.innerHTML = `
    <div class="speaker-photo-container">
      <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-photo">
    </div>
    <div class="speaker-bio">
      <h3>${speaker.name}</h3>
      <p>${speaker.bio}</p>
    </div>
    <div class="speaker-events">
      <h4>Мероприятия:</h4>
      <ul>
        ${speaker.events.map(event => `<li>${event}</li>`).join('')}
      </ul>
    </div>
  `;
  
  infoContainer.classList.add('active');
  
  // Обновляем активный аватар
  document.querySelector('.speaker-avatar.active').classList.remove('active');
  document.querySelectorAll('.speaker-avatar')[index].classList.add('active');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initSpeakers);