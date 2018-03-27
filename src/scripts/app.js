// import test from './common/_fullscreen_menu'
// import autorization from './common/_autorization';

console.log('in index.js');
// test('Привет webpack');
// autorization();
// var autorjs = autorization()
// console.log(autorjs)

// const slider = require('./common/slider');

// slider(); // инициализируем слайдерs

const buttonAutorization = document.getElementById('autorization'),
    panelInfo = document.querySelector('.main_info'),
    panelOrder = document.querySelector('.main_order'),
    buttonIndex = document.querySelector('.order__form-button_main'),
    section = document.querySelector('.index-section')


console.log(buttonAutorization)
console.log(panelInfo)
console.log(panelOrder)
console.log(buttonIndex)
console.log(section)

if (buttonAutorization !== null) {

//     window.addEventListener('load', () => {
//     section.classList.add('flipInX');
// });


buttonAutorization.addEventListener('click', (e) => {
    e.preventDefault();
    buttonAutorization.style.display = 'none';

    panelInfo.classList.add('visuallyhidden')
    panelOrder.classList.remove('visuallyhidden')

})

buttonIndex.addEventListener('click', () => {
    buttonAutorization.style.display = 'block';
    panelOrder.classList.add('visuallyhidden')
    panelInfo.classList.remove('visuallyhidden')
})

}
