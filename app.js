"use strict";
import { identity } from './js/events/form.js';

let form = document.getElementsByName('login-form')[0].addEventListener('submit', e => e.preventDefault());

let lang = document.getElementById('lang');

setLS(lang);

let result = identity('identityCard');

lang.addEventListener('change', function (e) {
    e.preventDefault();
    let selector = result.options.selector;
    selector.nextElementSibling.textContent = result.options.rules.maxLength.message[this.value];
});

document.addEventListener('click', () => {
    // console.log(localStorage.getItem('lang'));
});


function setLS(lang) {
    localStorage.setItem('lang', lang.value);
}

function getLS() {
    return localStorage.getItem('lang');
}