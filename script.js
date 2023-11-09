// Подключаем GSAP с использованием CDN
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js";
document.head.appendChild(script);

// Дожидаемся загрузки GSAP и начинаем анимацию
script.onload = () => {
    // Находим элемент заголовка
    const title = document.querySelector(".animated-text");
    // Находим элемент карточки
    const card = document.querySelector(".card");

    // Создаем анимации с использованием GSAP
    gsap.fromTo(title, { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0, ease: "power3.out" });
    gsap.fromTo(card, { opacity: 0, scale: 0.8 }, { duration: 1, opacity: 1, scale: 1, ease: "power3.out", delay: 0.5 });
};
