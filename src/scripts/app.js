import test from './common/_fullscreen_menu'
import autorization from './common/_autorization';

console.log('in index.js');
test('Привет webpack');
// autorization();
var autorjs = autorization()
console.log(autorjs)


// const slider = require('./common/slider');

// slider(); // инициализируем слайдерs