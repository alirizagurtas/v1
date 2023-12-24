import { FormItem } from './js/events/keyboard.js';

class Regex extends FormItem {

    constructor() {
        this.patterns = {
            identity: {
                tr: '/^[1-9]{1}[0-9]{9}[02468]{1}$/g/',
                us: null,
                en: null
            },
            creditCard: '/^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/',
            iban: {
                tr: '/TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/',
                de: '/DE[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/',
                default: '^[a-zA-Z]{2}(?:0[2-9]|[1-8][0-9]|9[0-8])[a-zA-Z0-9]{4}[0-9]{6}[a-zA-Z0-9]{0,20}$'
            },
            phoneNumber: {
                gsm: {
                    tr: '/^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/'
                },
                office: {
                    tr: '/^(0)([2348]{1})([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/'
                }
            },
            licensePlate: {
                tr: '/^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/'
            },
            birthDate: '/^([1-9]|[12][0-9]|3[01])(|\/|\.|\-|\s)?(0[1-9]|1[12])\2(19[0-9]{2}|200[0-9]|201[0-8])$/',
            removeMultiSpace: '/\s\s+/g'

        };
    }

    removeMultiSpace(data) {

        pattern = /\s\s+/g; // remove multi space text pattern

    }
}