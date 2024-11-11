// Массив цитат
const quotes = [
    "Не бойтесь ошибаться, это часть пути к успеху.",
    "Всегда стремитесь быть лучше, чем вчера.",
    "Каждый день – это новая возможность.",
    "Успех приходит к тем, кто упорно идет к цели.",
    "Научитесь отдыхать, а не бросать.",
    "Кто хороший мальчик?)"

];

// Получаем элементы страницы
const quoteText = document.getElementById("quoteText");
const quoteButton = document.getElementById("quoteButton");

// Добавляем событие на кнопку
quoteButton.addEventListener("click", function () {
    // Получаем случайную цитату из массива
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Устанавливаем текст цитаты в элемент quoteText
    quoteText.textContent = randomQuote;
});
