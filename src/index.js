import './css/style.css';
import Validation from './js/logic.js';
import Cards from './js/card.js';


const c = new Cards();
c.addCard();

document.querySelector('.buttonSend').addEventListener('click', () => {
    console.log('Кнопка .buttonSend была нажата');
    const v = new Validation();
    v.isValidCart();
});
