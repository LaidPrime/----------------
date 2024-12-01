let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
    // Перебирает все, вызывает функцию для каждого.
    init_slider(sliders[i]);
}

function init_slider(slider) {
    // Значение slider: Очередной sliders[i], переданный при вызове функции.

    let slide = slider.querySelectorAll('.slide');
    // Вместо document.query... Получается список всех class="slide"
    // которые находятся где-то внутри текущего элемента slider.

    let next = slider.querySelector('.next-button');
    let prev = slider.querySelector('.prev-button');

    let i = 0;
    // Номер текущего "открытого" слайда.

    next.addEventListener('click', showNextSlide);
    prev.addEventListener('click', showPrevSlide);

    function showNextSlide() {
        slide[i].classList.remove('block');
        // slide[i] - открытый слайд. Скрываем.

        i = (i + 1) % slide.length; // (*1)

        slide[i].classList.add('block');
        // slide[i] - следующий слайд. Показываем.
    }

    function showPrevSlide() {
        slide[i].classList.remove('block');
        // slide[i] - открытый слайд. Скрываем.
        if (i == 0) {
            i = slide.length - 1;
        }
        else {
            i = i - 1;
        }

        slide[i].classList.add('block');
        // slide[i] - следующий слайд. Показываем.
    }
}





// Получаем элементы слайдера
// let slider = document.querySelector('.slider');
// let prevButton = document.querySelector('.prev-button');
// let nextButton = document.querySelector('.next-button');
// let slides = Array.from(slider.querySelectorAll('img'));
// let slideCount = slides.length;
// let slideIndex = 0;

// // Устанавливаем обработчики событий для кнопок
// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// // Функция для показа предыдущего слайда
// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
// }

// // Функция для показа следующего слайда
// function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     updateSlider();
// }

// // Функция для обновления отображения слайдера
// function updateSlider() {
//     slides.forEach((slide, index) => {
//         if (index === slideIndex) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// }

// Инициализация слайдера
// updateSlider();