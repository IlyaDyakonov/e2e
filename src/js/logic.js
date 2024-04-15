export default class Validation {
    constructor() {
        this.number = 0;
        this.button = document.querySelector('.buttonSend');
    }

    isValid() {
        let sum = 0;
        let parity = this.number.length % 2;
        for (let i = 0; i < this.number.length; i++) {
            let digit = parseInt(this.number[i]);
            if ((i + parity) % 2 === 0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }
        return sum % 10 === 0;
    }

    // принадлежность к платёжной системе
    isValidCart() {
        const cardNumber = document.querySelector('.card-number');
        const pay = document.querySelectorAll('.payment');
        this.number = parseInt(cardNumber.value);
        if (this.number.toString().length === 16 && this.isValid()) {
            this.inviteDom();
        } else {
            for (let i = 1; i < 10; i++) {
                const liElementsRemove = document.getElementById(i);
                liElementsRemove.classList.remove('invalid');
                }
            alert('Пожалуйста введите корректный номер карты');
        }
    }

    // работа с ДОМ
    inviteDom() {
        let firstDigit = this.number.toString()[0];
        const liElementsAdd = document.getElementById(firstDigit);
        for (let i = 1; i < 10; i++) {
            const liElementsRemove = document.getElementById(i);
            liElementsRemove.classList.add('invalid');
            }
        if (liElementsAdd.id === firstDigit){
            liElementsAdd.classList.remove('invalid');
        } 
    }
}
