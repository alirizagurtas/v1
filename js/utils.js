function inputLengthCheck(el) {

    let maxLength = el.getAttribute('maxlength');
    let currentLength = el.value.length;

    try {
        if (currentLength > maxLength) {
            el.value = el.value.slice(0, maxLength);
            throw new Error(`İzin verilen maxlength:(${maxLength}) sınırını aştınız.`);
        }

    } catch (error) {
        console.log('%c' + error.message, 'color:yellow');
    }

};

function firstDigitBlock(el, firstDigit) {

    try {
        if (el.value[0] === firstDigit) {
            el.value = el.value.slice(0, 0);
            throw new Error(`T.C Kimlik numarası ${firstDigit} ile başlayamaz!`);
        }
    } catch (error) {
        console.log('%c' + error.message, 'color:yellow');
    }

};

function blockKey(e) {
    result.textContent = e.key + ' - ' + e.code;
    e.preventDefault();
};

export {
    inputLengthCheck,
    firstDigitBlock,
    blockKey
};