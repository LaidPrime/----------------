let sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    // Перебирает все, вызывает функцию для каждого слайдера.
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

        i = (i + 1) % slide.length; // (*1)

        slide[i].classList.add('block');
    }

    function showPrevSlide() {
        slide[i].classList.remove('block');
        if (i == 0) {
            i = slide.length - 1;
        }
        else {
            i = i - 1;
        }

        slide[i].classList.add('block');
    }
}