document.addEventListener("DOMContentLoaded", function () {
  // Параллакс эффект для героя
  const parallaxBg = document.getElementById("parallax-bg");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });

  // Плавная прокрутка для навигации
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Анимация появления элементов при скролле
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".section__inner, .program__item, .ticket"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animated");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Инициализация при загрузке

  // Изменение хедера при скролле
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Фейковые кнопки покупки билетов
  const buyButtons = document.querySelectorAll(".ticket__buy");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert(
        "Спасибо за интерес к нашему фестивалю! На данный момент это демонстрационная версия. В реальном проекте здесь будет форма оплаты."
      );
    });
  });

  // Анимация для программы
  const programItems = document.querySelectorAll(".program__item");

  programItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.height = "300px";
    });

    item.addEventListener("mouseleave", function () {
      this.style.height = "80px";
    });
  });

  // Эффект эмбилайт для программы
  const programGlow = document.querySelector(".program__glow");

  programItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const color = this.getAttribute("data-color");
      const rect = this.getBoundingClientRect();

      // Позиция подсветки по центру элемента
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      programGlow.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    transparent 0%,
                    ${color + "4D"} 70%
                )
            `;
      programGlow.style.opacity = "1";
    });

    item.addEventListener("mouseleave", function () {
      programGlow.style.opacity = "0";
    });

    item.addEventListener("mousemove", function (e) {
      const color = this.getAttribute("data-color");
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Подсветка следует за курсором внутри элемента
      programGlow.style.background = `
                radial-gradient(
                    circle at ${x + rect.left}px ${y + rect.top}px,
                    transparent 0%,
                    ${color + "4D"} 70%
                )
            `;
    });
  });

  // Мобильное меню
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");

    // Блокировка скролла при открытом меню
    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        burger.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Закрытие меню при ресайзе
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

const speakers = [
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
];

const masters = [
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
  {
    id: 1,
    name: "Анна Смирнова",
    title: "Маркетолог",
    company: "TechSolutions Inc.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Анна имеет более 10 лет опыта в цифровом маркетинге. Специализируется на стратегиях роста для технологических стартапов. Автор бестселлера 'Маркетинг в эпоху цифровых технологий'.",
    events: [
      "Цифровой маркетинг 2023 - 15 июня",
      "TechConf - 22 августа",
      "Стартап Weekend - 5 октября",
    ],
  },
  {
    id: 2,
    name: "Иван Петров",
    title: "Data Scientist",
    company: "DataMind AI",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Иван - эксперт в области машинного обучения и анализа данных. Разработал несколько инновационных алгоритмов для обработки больших данных. Преподает в ведущих университетах страны.",
    events: [
      "AI Conference - 10 июля",
      "Big Data Summit - 18 сентября",
      "Tech Future - 12 ноября",
    ],
  },
  {
    id: 3,
    name: "Елена Козлова",
    title: "UX/UI Дизайнер",
    company: "Creative Minds",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Елена создает интуитивно понятные интерфейсы для сложных систем. Ее работы получили несколько международных наград. Верит, что хороший дизайн должен быть незаметным.",
    events: [
      "Design Week - 3 июля",
      "UX Forum - 21 августа",
      "Креативные технологии - 8 декабря",
    ],
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    title: "Разработчик блокчейн",
    company: "ChainTech",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Дмитрий - один из ведущих экспертов по блокчейн-технологиям в стране. Участвовал в разработке нескольких успешных криптопроектов. Активно продвигает идеи децентрализации.",
    events: [
      "Blockchain Expo - 25 июля",
      "Crypto Future - 14 сентября",
      "FinTech Conference - 30 ноября",
    ],
  },
  {
    id: 5,
    name: "Ольга Новикова",
    title: "HR Директор",
    company: "PeopleFirst Corp.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Ольга специализируется на построении корпоративных культур в быстрорастущих компаниях. Разработала уникальную методику подбора персонала для IT-сферы.",
    events: [
      "HR Summit - 5 августа",
      "Управление талантами - 19 октября",
      "Будущее работы - 15 декабря",
    ],
  },
  {
    id: 6,
    name: "Михаил Соколов",
    title: "Кибербезопасность",
    company: "SecureNet",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Михаил - эксперт по информационной безопасности с 15-летним стажем. Провел более 200 аудитов безопасности для крупных корпораций. Автор популярного курса по этичному хакингу.",
    events: [
      "Security Days - 12 августа",
      "Кибербезопасность 2023 - 28 октября",
      "TechDefence - 10 декабря",
    ],
  },
];

// Отрисовка спикеров
function drawSpeakers(entity, list) {
  function renderSpeakers() {
    const container = document.getElementById(`${entity}s-container`);
    container.innerHTML = "";

    let currentRow = document.createElement("div");
    currentRow.className = `${entity}-row`;
    container.appendChild(currentRow);

    let rowWidth = 0;
    const circleSize = 80; // Размер кружка
    const overlap = 20; // Перекрытие

    list.forEach((speaker, index) => {
      const speakerElement = document.createElement("div");
      speakerElement.className = `${entity}-circle rounded-full ${
        speaker.color
      } ${
        speaker.bgColor
      } w-20 h-20 flex items-center justify-center border-4 border-white mr-${
        -overlap / 2
      } ml-${-overlap / 2}`;
      speakerElement.style.marginRight = `-${overlap}px`;
      speakerElement.innerHTML = `
                    <img src="${speaker.photo}" alt="${speaker.name}" class="w-full h-full rounded-full object-cover">
                `;

      // Расчет ширины ряда
      rowWidth += circleSize - overlap;

      // Если не помещается в текущий ряд, создаем новый
      if (rowWidth > container.offsetWidth && index > 0) {
        currentRow = document.createElement("div");
        currentRow.className = `${entity}-row`;
        container.appendChild(currentRow);
        rowWidth = circleSize;
      }

      currentRow.appendChild(speakerElement);

      // Обработчик клика
      speakerElement.addEventListener("click", () => {
        // Плавное переключение активного спикера
        const prevActive = document.querySelector(`.${entity}-circle.active`);
        if (prevActive) {
          prevActive.classList.remove("active");
          setTimeout(() => {
            speakerElement.classList.add("active");
            renderSpeakerInfo(speaker);
          }, 50); // Небольшая задержка для плавности
        } else {
          speakerElement.classList.add("active");
          renderSpeakerInfo(speaker);
        }
      });
    });
  }

  // Отрисовка информации о спикере
  function renderSpeakerInfo(speaker) {
    const container = document.getElementById(`${entity}-info-container`);
    container.className = `${entity}-info bg-white rounded-xl shadow-lg overflow-hidden ${speaker.bgColor} bg-opacity-20 mb-12`;
    container.innerHTML = `
                <div class="${entity}-info-grid grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                    <div class="${entity}-photo flex flex-col items-center">
                        <img src="${speaker.photo}" alt="${
      speaker.name
    }" class="w-64 h-64 rounded-full object-cover border-4 ${
      speaker.color
    } border-opacity-50 mb-6">
                        <h3 class="text-2xl font-bold text-gray-800">${
                          speaker.name
                        }</h3>
                        <p class="text-lg ${speaker.color}">${speaker.title}</p>
                        <p class="text-gray-600">${speaker.company}</p>
                    </div>
                    
                    <div class="${entity}-bio">
                        <h4 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-user ${
                              speaker.color
                            } mr-2"></i> Биография
                        </h4>
                        <p class="text-gray-700 leading-relaxed">${
                          speaker.bio
                        }</p>
                    </div>
                    
                    <div class="${entity}-events">
                        <h4 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-calendar-alt ${
                              speaker.color
                            } mr-2"></i> Мероприятия
                        </h4>
                        <ul class="space-y-3">
                            ${speaker.events
                              .map(
                                (event) => `
                                <li class="flex items-start">
                                    <i class="fas fa-circle text-xs mt-2 mr-2 ${speaker.color} opacity-70"></i>
                                    <span class="text-gray-700">${event}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                </div>
            `;

    // Показываем контейнер с информацией
    container.classList.add("active");
  }

  // Инициализация при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    renderSpeakers();

    // При изменении размера окна перерисовываем спикеров
    window.addEventListener("resize", () => {
      renderSpeakers();
    });

    // Клик по первому спикеру при загрузке
    setTimeout(() => {
      const firstSpeaker = document.querySelector(`.${entity}-circle`);
      if (firstSpeaker) {
        firstSpeaker.click();
      }
    }, 300);
  });
}

drawSpeakers("speaker", speakers);
drawSpeakers("master", masters);

// Конфигурация галереи
const drumPhotos = [
  "./images/photos/1.jpg",
  "./images/photos/2.jpg",
  "./images/photos/4.jpg",
  "./images/photos/5.jpg",
  "./images/photos/6.jpg",
  "./images/photos/7.jpg",
  "./images/photos/8.jpg",
  "./images/photos/9.jpg",
  "./images/photos/10.jpg",
  "./images/photos/11.jpg",
  "./images/photos/12.jpg",
  "./images/photos/13.jpg",
  "./images/photos/14.jpg",
];

function initPhotoDrum() {
  const track = document.getElementById("drumTrack");
  const pagination = document.getElementById("drumPagination");
  let currentIndex = 0;
  let autoScrollInterval;
  const slideCount = drumPhotos.length;

  // Создаем слайды
  drumPhotos.forEach((photo, index) => {
    // Добавляем слайд
    const slide = document.createElement("div");
    slide.className = "drum-slide";
    slide.innerHTML = `<img src="${photo}" class="drum-image" alt="Фото ${
      index + 1
    }">`;
    track.appendChild(slide);

    // Добавляем точку пагинации
    const dot = document.createElement("div");
    dot.className = "drum-dot";
    dot.dataset.index = index;
    dot.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(dot);
  });

  // Функция переключения слайда
  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Обновляем активную точку
    document.querySelectorAll(".drum-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    // Сбрасываем таймер автопрокрутки
    resetAutoScroll();
  }

  // Автопрокрутка
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);
    }, 7000);
  }

  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }

  // Инициализация
  goToSlide(0);
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", initPhotoDrum);
