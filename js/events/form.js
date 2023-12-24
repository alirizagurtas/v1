export const identity = function (formElement) {

    const element = document.getElementsByName(formElement)[0];

    element.setAttribute('novalidate', '');

    const options = {
        selector: element,
        lang: localStorage.getItem('lang'),
        rules: {
            maxLength: {
                value: 11,
                message: {
                    tr: `T.C. kimlik numarası 11 haneden fazla olamaz.`,
                    en: `The Turkish ID number cannot be more than 11 digits.`,
                }
            },
            regex: {
                value: '/^[1-9]{1}[0-9]{9}[02468]{1}$/',
                message: {
                    tr: 'Hatalı regex'
                },
            },
        },
        controller: {
            digitControl: '/[^0]/',
            direction: 'start',
            event: 'throw',
        },
        formatter: {
            display: 'XXX XXX XXX XX',
        },
        filter: {
            trim: 'all',
            multiSpaceControl: false,
        },
        event: 'blur',
    };

    handler(options);

    return {

        options
    };

};


function handler(options) {

    let event = options.event;
    let selector = options.selector;
    let valid = true;

    selector.addEventListener(event, function (e) {
        x(e, options);
    });

}

function x(e, options) {

    let len = Number(e.target.value.length);
    let maxLen = Number(options.rules.maxLength.value);
    let display = document.getElementsByClassName('display')[0];
    let valid = false;

    if (len > maxLen) {
        let lang = localStorage.getItem('lang');
        console.log(options);
        console.log(options.rules.maxLength.message[lang]);
        e.target.nextElementSibling.textContent = options.rules.maxLength.message[lang];
        e.target.nextElementSibling.hidden = false;
    } else if (len <= maxLen) {
        e.target.nextElementSibling.hidden = true;
    }

    display.textContent = valid;

};
