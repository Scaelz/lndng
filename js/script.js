document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".partner__description");
      const content = item.querySelector(".partner__description__extra");
      const arrow = button.querySelector("svg");

      // Переключаем текущий аккордеон
      if (content.classList.contains("max-h-0")) {
        content.classList.remove("max-h-0");
        content.classList.add("max-h-[2000px]");
        arrow.classList.add("rotate-180");
      } else {
        content.classList.remove("max-h-[2000px]");
        content.classList.add("max-h-0");
        arrow.classList.remove("rotate-180");
      }
    });
  });
  // Параллакс эффект для героя
  const parallaxBg = document.getElementById("parallax-bg");

  // window.addEventListener("scroll", function () {
  //   const scrollPosition = window.pageYOffset;
  //   parallaxBg.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  // });

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
      this.style.maxHeight = this.scrollHeight + 300 + "px";
    });

    item.addEventListener("mouseleave", function () {
      this.style.maxHeight = "";
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
    name: "Ирина Дмитроченкова",
    title: "Организатор и эксперт фестиваля",
    company: "",
    position: 10,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "images/speakers/ira.jpg",
    bio: `Руководитель АНО Институт Семейной Терапии и Организационного Консультирования "ИСТОК", консультант "Статус психологии",  надёжный помощник в решении сложных проблем!
<br>Серьёзно и весело, глубоко и легко.`,
    bioList: [
      "системный семейный терапевт",
      "автор и ведущая индивидуальных и групповых программ (в т.ч. семейных и процессуальных), клиентских и обучающих",
      "кризисный психолог",
      "тренер процессуально ориентированной психологии",
      "травматерапевт, волонтёр республиканской клинической психоневрологической больницы Донецкой Народной Республики",
      "автор обучающего курса по работе с ПТСР",
      "Юнгианский аналитик и сказкотерапевт",
      "поэтесса, бард и писательница-фантаст",
    ],

    events: [
      `3d-практику голосовой гармонизации.
Это уникальная мощная гармонизирующая практика, позволяющая 
- устранить тревожность, 
- достичь состояния покоя, силы и радости`,
      `познакомлю  в МК по сказкотерапии "Путь героя" с волшебными возможностями в жизни. 
Мария Луиза фон Франц: "Сказка - это не просто красивая волшебная история, это закодированное послание человечеству о том, что такое мир  и как в нём жить человеку".
Сказки могут помочь не только ребёнку, но и взрослому человеку а решении его жизненных задач. Здорово, когда можно решить серьёзные дела, играя. `,
      `прочту свои стихи, посвящённые любви, Родине, Дню ВДВ
      <br>Это удивительная гармонизирующая практика сплочения и сонастройки семьи или группы, где вы:
- найдете возможности глубокого слышания и понимания партнёров и близких людей, 
- Выведете себя на новый уровень коллективных вибраций!`,
    ],
  },
  {
    id: 2,
    name: "Лариса Николаева",
    title: "Организатор и эксперт фестиваля",
    company: "",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "images/speakers/larisa.jpg",
    bio: `Буду для вас маяком на пути к счастливой семейной  жизни!`,
    bioList: [
      "кризисный психолог",
      "гипнолог",
      "мастер телесных практик",
      "автор курса 'Точка опоры'",
      "мама пятерых детей",
      "и...нахожусь в 30-летнем семейном союзе с любимым человеком 🕺🏼💞",
    ],
    events: [
      `Практический мастер-класс "Секреты семейной жизни" (сб, вс):
      <br>- Мы узнаем об этапах создания прочных взаимоотношений от знакомства до воспитания счастливых потомков👶🏼
      <br>- Углубим навыки   взаимопонимания
      <br>- Научимся разрешать конфликты на ранней стадии возникновения
      <br>- Найдём возможность внутреннего баланса
      <br>- Узнаем об огромном потенциале, хранящемся в умении позитивно мыслить
      <br>- И ещё много полезных знаний и навыков заложено в программу фестиваля!`,
    ],
  },
  {
    id: 3,
    name: "Людмила Кукушкина",
    title: "Эксперт фестиваля",
    position: "10",
    company: "",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    photo: "images/speakers/kukushkina.jpg",
    bio: `Практический психолог, член Международной ассоциации психологов, консультант по личностному росту и развитию личности, проверенные методики для решения сложных задач.
Простые шаги к лучшей жизни.`,
    bioList: [
      "EMDR/ДПДГ специалист",
      "Эксперт-консультант комплексной когнитивно-поведенческой терапии (КПТ 3-х поколений)",
      "Автор и ведущая тренингов, семинаров, мастер классов по самопознанию, развитию и достижению результатов в любых жизненных сферах",
      "Психолог интегративного подхода, подбираю оптимальный путь решения проблемы каждого конкретного доверителя, обеспечивая комплексный подход к поддержке, консультированию и личностному развитию",
    ],
    events: [
      `познакомлю с методом ДПДГ (десенсебилизация и проработка движением глаз) и проведу групповую переработку.`,
      `выполним упражнение на основе Транзактного анализа Э.Берна “Любовь к себе” для повышения самооценки и удовлетворения от жизни.`,
      `проведу мастер-классы и упражнения по техникам самопомощи при возникновении тревожных состояний, страхов, паники (КПТ, психосоматика), ведь когда мы справляемся с тревожностью, мы начинаем видеть ситуацию и мир яснее, и действовать смелей и рациональней. `,
      `проделаем практическую работу: пререведем мечту, желание, идею в цель и составим план действий для ее реализации с выполнением конкретных задач.`,
      `освоим технику исследования личных границ. 
Личные границы определяют человека, его возможности, желания, ощущения и отношения с другими людьми.`,
    ],
  },
  {
    id: 4,
    name: "Анна Соколова",
    title: "Эксперт фестиваля",
    position: 10,
    company: "",
    color: "text-red-500",
    bgColor: "bg-red-100",
    photo: "images/speakers/sokolova.jpg",
    bio: `Руководитель психологической службы ВГМУ им. Н.Н.Бурденко. Психолог ЦКЗ Олимп Пять.`,
    events: [
      `медитативную практику "Вечерний релакс"
      <br>- Снимем напряжение, усталость
      <br>- Почувствуем расслабление и легкость во всем теле
      <br>- Наполнимся звуковой гармонией тибетских чаш`,
      `практику "Возвращение к себе"
      <br>- Уберем напряжение через физические упражнения
      <br>- Гармонизируем физическое и психическое состояние с поющими чашами
      <br>- Проведем технику "Две точки" для устранения препятствий в любых жизненных ситуациях
      <br>- Наполнимся зарядом энергии и настроимся на успех`,
      `медитативную практику "Гормональный перезапуск. Омоложение"
      <br>- Баланс гормонов — это основа здоровья, молодости и хорошего самочувствия! 
      <br>- Запрограммируем клетки на здоровье и омоложение!`,
    ],
  },
  {
    id: 5,
    name: "Елена Динерштейн",
    title: "Эксперт фестиваля",
    company: "",
    color: "text-green-500",
    bgColor: "bg-green-100",
    photo: "images/speakers/dynershtein.jpg",
    bio: `Педагог психолог - кинезиолог. Преподаватель международного колледжа кинезиологии. Преподаватель Московского института кинезиологии, чнен ассоциации профессиональных кинезиологов. Преподаватель образовательной кинезиологии, член международной ассоциации образовательной кинезиологии.`,
    events: [
      `зарядку для мозга (нейрогимнастика)`,
      `танец меридианов`,
      `комплекс кинезиологических упражнений для гармонизации сознания, подсознания и тела.`,
    ],
  },
  {
    id: 6,
    name: "Алексей Лисенко",
    title: "Эксперт фестиваля",
    company: "",
    position: 1,
    color: "text-lime-500",
    bgColor: "bg-lime-100",
    photo: "images/speakers/Lysenko.jpg",
    bio: `практикующий психолог, бизнес-психолог, коуч, гипнолог, специалист по работе с эмоциями, НЛП-консультант, автор-разработчик тренингов, техник, и психологических инструментов.`,
    bioList: [
      "специалист по психосоматике с практикой в 1000 кейсов и 10000 часов практики",
      "автор и ведущий тренингов",
      "опыт работы с участниками СВО и членами их семей",
    ],
    events: [
      `лекция с элементами практики "Они вернутся"
      <br>Это уникальная лекция, на которой ты узнаешь
      <br>- с чем сталкиваются те, кто ушел из мирной жизни в точки боевых действий
      <br>- что они там думают про мирную жизнь здесь
      <br>- что заставляет их возвращаться в мирную жизнь
      <br>- что не дает им вернуться и гонит обратно
      <br>- правда ли, что те, кто ушли туда - меняются, и приходят уже другими
      <br>- как начать жить с тем, кто вернулся оттуда`,
      `мастер-класс "Психосоматика на практике"
      <br>- что такое психосоматика, чем она является, и чем не является точно
      <br>- где границы психосоматики и шарлатанства от психосоматики
      <br>- как самому диагностировать психосоматику
      <br>- практические инструменты психосоматики`,
      `мастер-класс для тех, кто не верит в психосоматику, но продолжает ходить по врачам из года в год`,
    ],
  },
  {
    id: 7,
    name: "Елена Попова-Солнечная",
    title: "Эксперт фестиваля",
    company: "",
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    photo: "images/speakers/popova.jpg",
    bio: ``,
    bioList: [
      "ценностно-ориентированый психолог для детей и взрослых",
      "ведущая Женской Академии (от института ЦОП О.Г.Гадецкого)",
      "коуч Радикального прощения",
      "игропрактик",
      "автор Т-игры 'Возвращение на Орбиту' и Т-программы 'Навигатор семейного счастья'",
      "пишу стихи",
    ],
    events: [
      "Мини-тренинг 'Свобода в прощении'. Познакомлю вас с волшебным методом, который позволяет легко отпускать прошлое и освобождаться от психосоматических проявлений травмирующего опыта.",
      "Ресурсную т-игру 'НА ВОЛНЕ'. Мы с вами отправимся в путешествие по глубинам своего бессознательного, и вы:<br>- поймёте, где теряете ресурс и где найти ресурс для реализации вашего запроса;<br>- наполнитесь светом и откроете кладовые своей внутренней силы;<br>- научитесь видеть мир в ярких красках и легко менять настроение;<br>- расширите границы того, что считаете возможным;<br>- обнаружите глубинные сценарии, управляющие жизнью;<br>- и самое главное - наполнитесь ресурсом!",
    ],
  },
  {
    id: 8,
    name: "Ирина Агупова",
    title: "Эксперт фестиваля",
    company: "",
    position: 10,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
    photo: "images/speakers/agupova.jpg",
    bio: `Работаю с пациентами различного уровня личностной организации от нормы до пограничного уровня.`,
    bioList: [
      "медицинский сертифицированный психолог психоаналитического направления",
      "ТФП-практик (терапия фокусированная на переносе)",
      "Работаю в КУЗВО ВОКПНД, провожу патопсихологические обследования как взрослых, так и детей",
      "Консультирую и терапевтирую в мед. центре «Статус психология» по вопросам психического здоровья",
      "Провожу групповую поддерживающую терапию «Анонимные интеллектуалы»",
      "Разработала доказательную модель консультирования в паре одновременно психиатра и медицинского психолога",
    ],
    events: [
      "Работу с эмоциональным выгоранием с помощью метафорических карт «Зонтики» - как часть психотерапевтической группы",
    ],
  },
  {
    id: 9,
    name: "Валерия Морозова",
    title: "Эксперт фестиваля",
    company: "",
    position: 10,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    photo: "images/speakers/morozova.jpg",
    bio: `Специализируюсь на работе с начинающими экспертами в сфере мягких ниш, которые хотят начать проявляться и заявлять о себе, увеличить свой доход через экспертность.
Через работу с мышлением помогаю раскрыть свои сильные стороны и достичь желаемых результатов. `,
    bioList: [
      "нейрокоуч по международным стандартам ICI",
      "дипломированный игропрактик",
      "специалист НейроГрафики",
      "представитель МЕЖДУНАРОДНОЙ ШКОЛЫ ИГРОПРАКТИКИ в Воронеже",
      "руководитель клуба развития 'ВРЕМЯ ПЕРВЫХ'",
    ],
    events: [
      `На фестивале проведу для вас игру "Подсказки вселенной". Это универсальная игра для работы с запросом в любой сфере! Игра будет полезна для тех, кто хочет:<br>- управлять своей жизнью;<br>- определить, на каком жизненном этапе он находится;<br>- понять, какой урок ему сейчас важно усвоить;<br>- расставить приоритеты;<br>- понять, куда двигаться дальше;<br>- увидеть возможности и ресурсы;<br>- понять, что важно проявить в себе, что раскрыть;<br>- увидеть закономерности в своей жизни;<br>- осознать, на своем ли пути он находится;<br>- получить ответы на свои вопросы;<br>- быть в гармонии с собой и миром;<br>- осознать ключевое послание жизни в данный момент;`,
    ],
  },
  {
    id: 10,
    name: "Катерина Голден",
    title: "Эксперт фестиваля",
    company: "",
    color: "text-sky-500",
    bgColor: "bg-sky-100",
    photo: "images/speakers/golden.jpg",
    bio: `Финансовый психолог, коуч по самореализации`,
    bioList: [
      "600+ часов практики",
      "автор и ведущая индивидуальных курсовых терапий «Денежный поток» и «Здоровая самооценка»",
      "мама 2х летней дочки",
      "После работы со мной у девушек-экспертов:",
      "появляется время, энергия и желание на целевые действия для развития своего дела",
      "доход увеличивается без выгорания, потому что уходит лишнее напряжение и суета",
    ],
    events: [
      "Индивидуальные консультации по запросам увеличения дохода, расширения своих финансовых возможностей, самореализации, уверенности в себе.",
      "Мастер-класс «Деньги на спокойном. Убираем лишнюю тревогу»<br>- выявим и проработаем бессознательную программу, которая заставляет вас жить в режиме «работаю, тревожно отдыхаю и выгораю» и запрещает вам тратить деньги на себя;<br>- после практики уйдет лишнее напряжение с темы денег, позволите им приходить в вашу жизнь легко, начнете замечать жизнь и изобилие денег в мире.",
      "Мастер-Класс «Деньги без ограничений. Пробиваем финансовый потолок»<br>- выявим и проработаем бессознательную программу, которая мешает вам расти в доходе;<br>- расширим ваши финансовые возможности;<br>- после практики почувствуйте себя ВсёМогущей и откройте неисчерпаемый источник идей для увеличения дохода.",
    ],
  },
  {
    id: 11,
    name: "Ольга Танчук",
    title: "Эксперт фестиваля",
    company: "",
    color: "text-teal-500",
    bgColor: "bg-teal-100",
    photo: "images/speakers/tkachuk.jpg",
    bio: `Помогаю женщинам:`,
    bioList: [
      "раскрыть свой потенциал",
      "принять силу и поддержку Рода",
      "зазвучать Собой",
    ],
    events: [
      "Системные расстановки под ваш запрос в субботу",
      "Расстановку по принятию благословения 7 колен Рода в завершении фестиваля в воскресенье<br>Это глубинная исцеляющая практика для каждого присоединившегося, где вы сможете:<br>- увидеть, что именно в вашей системе блокирует деньги, счастливые отношения и реализацию;<br>- переупаковать ваши сценарии в желаемые;<br>- запустить перемены на практике, а не в теории",
    ],
  },
  {
    id: 13,
    name: "Нонна Царевская",
    title: "Эксперт фестиваля",
    company: "",
    position: 10,
    color: "text-fuchsia-500",
    bgColor: "bg-fuchsia-100",
    photo: "images/speakers/tsarevskaya.jpg",
    bio: `Клинический психолог (12 лет)`,
    bioList: [
      "организатор тренингов и ретритов",
      "ведущая медитаций и практик (эмоционально-образная терапия по Линде)",
      "НЛП практик",
    ],
    events: [
      "Практику избавления от страхов, тревог, панических атак",
      '"5 Тибетских жемчужин"- гармонизирующую технику',
      "Дам позитивный настрой для достижения целей",
      'Проведу групповую альфа-медитацию "Мой идеальный, счастливый день"',
    ],
  },
  {
    id: 14,
    name: "Сергей Летников",
    title: "Эксперт фестиваля",
    company: "",
    position: 70,
    color: "text-slate-500",
    bgColor: "bg-slate-100",
    photo: "images/speakers/letnikov.jpg",
    bio: ``,
    bioList: [
      "организатор тренингов и ретритов",
      "ведущая медитаций и практик (эмоционально-образная терапия по Линде)",
      "НЛП практик",
    ],
    events: [
      "Сессию, во время которой ты сможешь поисследовать свои сны и фантазии с помощью специальных карт. Они помогут:<br>- Понять скрытые причины конфликтов;<br>- Улучшить отношения в семье;<br>- Найти гармонию и душевный покой;<br>- Понять посыл часто повторяющихся снов <br><br>Просто рассказывая о своих всплывающих чувствах, мы вдруг понимаем, куда идти. <br> Сделайте шаг к новой жизни!",
    ],
  },
];

const masters = [
  {
    id: 1,
    name: "Татьяна Чурсина",
    position: 30,
    title: "Организатор и эксперт фестиваля",
    company: "",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    photo: "images/speakers/tanya.jpg",
    bio: `Проводник в мир гармонии, движения и саморазвития!`,
    bioList: [
      "организатор мероприятий и ретритов",
      "ведущая медитаций, т-игр и практик (в т.ч. телесных)",
      "инструктор по йоге",
      "фитнес-тренер",
      "проводник гвоздестояния",
      "цифровой коуч",
    ],
    events: [
      `практику состояния в пятницу`,
      `практику йоги (в сб и вс утром)`,
      `трансформационную игру`,
      `групповой Ом-чантинг!
       <br>Это мощная гармонизирующая практика, где вы:
<br>- Устраните тревожность.
<br>- Выведете себя на новый уровень вибраций!
<br>- Погрузитесь в атмосферу глубокого расслабления и исцеления под волшебные звуки поющих чаш.`,
    ],
  },
  {
    id: 2,
    name: "Татьяна Морева",
    title: "Эксперт фестиваля",
    company: "",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    photo: "images/speakers/moreva.jpg",
    bio: ``,
    bioList: [
      "Действительный Член Международного союза педагогов-художников",
      "Архитектор (Воронежская государственная архитектурно-строительная академия)",
      "Менеджер (Санкт-Петербургская государственная инженерно-экономическая академия)",
      "Преподаватель изобразительного и декоративно-прикладного искусства (Южный университет (ИУБиП) г. Ростов-на-Дону)",
      "Сертифицированный специалист «Методики акварельной живописи в системе дополнительного образования» (РФ территория «Сириус» Образовательный Фонд «Талант и успех»)",
      "Дизайнер (международный университет высоких технологий)",
      "Иконописец (Иконописная школа Покровского собора)",
      "Воронежская региональная государственная телерадиовещательная компания (государственное учреждение). Должность - арт-менеджер.",
      "ООО «Камелот медиа». Дизайнер.",
      "ООО «Издательство Камелот Медиа». Дизайнер.",
      "Рекламное агентство «Максима-Воронеж». Дизайнер.",
      "Типография ООО «Джаст принт». Дизайнер.",
      "Муниципальное бюджетное учреждение дополнительного образования Детская школа искусств №6. Преподаватель.",
    ],
    events: [
      ` мастер класс по акварельной живописи, напишем пейзаж
«Рисуй не просто пейзаж — рисуй настроение!»`,
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
                    <img style="${speaker.position ? `object-position: 0% ${speaker.position}%` : ''}" src="${speaker.photo}" alt="${speaker.name}" class="w-full h-full rounded-full object-cover">
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
    }" class="w-64 h-128 rounded-lg object-cover border-4 ${
      speaker.color
    } border-opacity-50 mb-6">
                        <h3 class="person-name text-2xl font-bold text-gray-800">${
                          speaker.name
                        }</h3>
                        <p class="person-title text-lg ${speaker.color}">${
      speaker.title
    }</p>
                        <p class="text-gray-600">${speaker.company}</p>
                    </div>
                    
                    <div class="${entity}-bio">
                        <h4 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-user ${
                              speaker.color
                            } mr-2"></i> Обо мне
                        </h4>
                        <p class="text-gray-700 leading-relaxed">${
                          speaker.bio
                        }</p>
                        ${speaker?.bioList?.map(
                          (e) =>
                            `<br><i class="fas fa-circle text-xs mt-2 mr-2 ${speaker.color} opacity-70"></i>${e}`
                        )}
                    </div>
                    
                    <div class="${entity}-events">
                        <h4 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-calendar-alt ${
                              speaker.color
                            } mr-2"></i> Проведу для тебя
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
