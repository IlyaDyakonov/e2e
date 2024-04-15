import './css/style.css';
import Validation from './js/logic.js';
import Cards from './js/card.js';
// import { checkCardValidity } from './js/logic.js';


const c = new Cards();
c.addCard();



// const i = v.checkCardValidity();
// const tr = document.querySelector('.card-number');
document.querySelector('.buttonSend').addEventListener('click', () => {
    // Здесь можете вызвать ваш метод или выполнить нужные действия
    console.log('Кнопка .buttonSend была нажата');
    const v = new Validation();
    v.isValidCart();
    // Возможно, здесь будет вызов метода или выполнение нужных действий
});
