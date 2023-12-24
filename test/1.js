// export class FormEvents {

//     static submit() {

//     }
//     static input(e) {

//         if (e.type == 'input') {
//             let targetElement = e.target;
//             Module.inputLengthCheck(targetElement); //uzunluğu maxlength attr alır.
//             Module.firstDigitBlock(targetElement, '0');
//         }

//     }
//     static blur() {

//     }
//     static change() {

//     }
//     static contextmenu() {

//     }
//     static focus() {

//     }
//     static invalid() {

//     }
//     static reset() {

//     }
//     static search() {

//     }
//     static select() {

//     }
// }

export function formValidation(formSelector) {

    const form = document.querySelector(formSelector);
    form.addEventListener('submit', e => e.preventDefault());
    form.setAttribute('novalidate', '');

}


export const formValidation = (formSelector) => {

    const form = document.querySelector(formSelector);

    form.addEventListener('submit', e => e.preventDefault());
    form.setAttribute('novalidate', '');
    /*
        const elementsGroup = (elements) => {
            [...elements].forEach((element) => {
                // console.log(element);
            });
    
        };

    elementsGroup(form);
    
    */

    let text = '    4534534    345435      34  !   ';

    const patterns = {
        identityCard: {
            event: {
                event: 'keydown',
            },
            attribute: {
                type: text,
                required: true,
                minLength: null,
                maxLength: 11,
                autocomplate: false,
            },
            control: {
                firstDigitControl: true
            },
            pattern: {
                pattern: '/^[1-9]{1}[0-9]{9}[02468]{1}$/',
            },
            filter: {
                trim: 'end',
                multiSpaceTrim: true,
            },
            formatter: {

            }
        }
    };

    function control(patterns) {

        let text = patterns.identityCard.data;
        let direction = patterns.identityCard.trim;
        let result = [];

        function trimControl(text, direction) {

            if (direction) {
                if ((direction == 'start')) {
                    result.push(text.trimStart());
                    return;
                }
                else if (direction == 'end') {
                    result.push(text.trimEnd());
                    return;
                }
                else {
                    result.push(text.trim());
                    return;
                }
            }

        }

        trimControl(text, direction);
        return [
            result,
        ];
    }

    // console.log(control(patterns)[0]);



    const validationRules = [
        {
            attribute: 'maxlength',
            controlMethod: 'keydown',
            isValid: function () {

            },
            errorMessage: '',
            displayFormat: function () {

            }
        },
        {
            attribute: 'pattern',
            controlMethod: 'input',
            isValid: function () {

            },
            errorMessage: '',
            displayFormat: function () {

            }
        },
    ];
};