var Promise = require('es6-promise-polyfill').Promise;
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import card from './modules/card';
import calc from './modules/calc';
import forms from './modules/forms';
import slides from './modules/slides';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    slides({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal( '.modal', '[data-modal]', modalTimerId);
    timer('.timer', '2023-06-12');
    card();
    calc();
    forms('form', modalTimerId);
});
