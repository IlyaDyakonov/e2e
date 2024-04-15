import visa from "../image/visa.png";
import unionpay from "../image/unionpay.png";
import paypal from "../image/paypal.png";
import mir from "../image/MIR.png";
import mastercard from "../image/MasterCard.png";
import jcb from "../image/jcb.png";
import discover from "../image/discover.png";
import stripe from "../image/stripe.png";
import google from "../image/google.png";


export default class Cards {
    addCard() {
        var divElement = document.createElement('div');
        document.body.appendChild(divElement);
        const ul = document.createElement('ul');
        divElement.appendChild(ul);

        var li1 = document.createElement('li');
        var imageMIR = document.createElement('img');
        imageMIR.src = mir;
        imageMIR.id = 1;
        imageMIR.alt = "логотип MIR";
        imageMIR.title = "MIR";
        li1.classList.add("payment");
        li1.appendChild(imageMIR);

        var li2 = document.createElement('li');
        var imagePayPal = document.createElement('img');
        imagePayPal.src = paypal;
        imagePayPal.id = 2;
        imagePayPal.alt = "логотип paypal";
        imagePayPal.title = "PayPal";
        li2.classList.add("payment");
        li2.appendChild(imagePayPal);

        var li3 = document.createElement('li');
        var imageJCB = document.createElement('img');
        imageJCB.src = jcb;
        imageJCB.id = 3;
        imageJCB.alt = "логотип JCB";
        imageJCB.title = "JCB";
        li3.classList.add("payment");
        li3.appendChild(imageJCB);

        var li4 = document.createElement('li');
        var imageVisa = document.createElement('img');
        imageVisa.src = visa;
        imageVisa.id = 4;
        imageVisa.alt = "логотип visa";
        imageVisa.title = "Visa";
        li4.classList.add("payment");
        li4.appendChild(imageVisa);

        var li5 = document.createElement('li');
        var imageMasterCard = document.createElement('img');
        imageMasterCard.src = mastercard;
        imageMasterCard.id = 5;
        imageMasterCard.alt = "логотип MasterCard";
        imageMasterCard.title = "MasterCard";
        li5.classList.add("payment");
        li5.appendChild(imageMasterCard);

        var li6 = document.createElement('li');
        var imageDiscover = document.createElement('img');
        imageDiscover.src = discover;
        imageDiscover.id = 6;
        imageDiscover.alt = "логотип Discover";
        imageDiscover.title = "Discover";
        li6.classList.add("payment");
        li6.appendChild(imageDiscover);

        var li7 = document.createElement('li');
        var imageUnionPay = document.createElement('img');
        imageUnionPay.src = unionpay;
        imageUnionPay.id = 7;
        imageUnionPay.alt = "логотип UnionPay";
        imageUnionPay.title = "UnionPay";
        li7.classList.add("payment");
        li7.appendChild(imageUnionPay);

        var li8 = document.createElement('li');
        var imageGoogle = document.createElement('img');
        imageGoogle.src = google;
        imageGoogle.id = 8;
        imageGoogle.alt = "логотип Google";
        imageGoogle.title = "Google";
        li8.classList.add("payment");
        li8.appendChild(imageGoogle);

        var li9 = document.createElement('li');
        var imageStripe = document.createElement('img');
        imageStripe.src = stripe;
        imageStripe.id = 9;
        imageStripe.alt = "логотип Stripe";
        imageStripe.title = "Stripe";
        li9.classList.add("payment");
        li9.appendChild(imageStripe);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        ul.appendChild(li7);
        ul.appendChild(li8);
        ul.appendChild(li9);
    }
}
