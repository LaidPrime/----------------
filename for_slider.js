// JavaScript файл который нужен для создания слайдера
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0
let lengthItems = items.length - 1;

// функция кнопки вперед
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
}
// функция кнопки назад
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    }
    else {
        active = active - 1;
    }
    reloadSlider();
}
// функция анимации перехода
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}