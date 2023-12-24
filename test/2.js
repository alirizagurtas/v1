
/*

data - pattern="card-identity[tc]";
data - pattern="card-credit";
data - pattern="bank-iban";
data - pattern="login-username";
data - pattern="login-email";
data - pattern="password";



<input name="credit-card"
    class="form-control"
    data-pattern="card-credit"
    type="number"
    inputmode="numeric"
    placeholder="Kredi kartı numaranızı giriniz."
    maxlength="16"
    autocomplete="off">
    <label>IBAN numaranızı giriniz</label>
    <input name="iban"
        class="form-control"
        data-pattern="bank-iban"
        type="number"
        inputmode="numeric"
        placeholder="IBAN numaranızı giriniz."
        maxlength="26"
        autocomplete="off">
        <button class="btn btn-success"
            type="submit">add</button>;

*/

function inputCheck(e) {
    console.log();
    console.log(e.target.dataset.pattern);
    return;
    // let pattern = this.data
    // let getPattern = new FormPatterns(this.dataset.patters)

    let keys2 = {
        event: e,
        sendKey: e.key,
        types: ['allow', 'deny'],
        type: types[0],
        keys: ['ArrowUp', 'ArrowDown', 'E', 'e', '.', ',', '-', '_', ' ', '+'],
    };
    let rules = {
        event: e,
        sendKey: e.key,

        element: 'input',
        elementType: 'text',

        inputType: 'number',
        keyboardType: 'numeric',

        allowChar: [0 - 9],
        denyChar: ['ArrowUp', 'ArrowDown', 'E', 'e', '.', ',', '-', '_', ' ', '+'],

        denyFirstChar: true,
        denyLastChar: false,
        firstChar: 0,
        lastChar: null,

        minLength: 5,
        maxLength: 11,

        type: 'deny', // ['allow','deny']
        keys: ['ArrowUp', 'ArrowDown', 'E', 'e', '.', ',', '-', '_', ' ', '+'],
    };

    KeyboardEvents.keyDown(rules);

}

startConfig();

/*
 
class FormPatterns {
    constructor(pattern) {
        if (pattern)
            this.keys = ['ArrowUp', 'ArrowDown', 'E', 'e', '.', ',', '-', '_', ' ', '+'];
    }
}
 
let x = new FormPatterns('tc-identity-card');
console.log(x);
 
function setInput() {
    let x = Array.from(form);
    x.forEach((item) => console.log(item));
}
 
setInput();
 
*/


export class KeyboardEvents {

    static keyDown(data) {

        if (data.event.type === 'keydown') {
            if (data.type === 'bloked') {
                if (data.blokedKeys.includes(data.sendKey)) {
                    data.event.preventDefault();
                    console.log(`"${data.sendKey}" key is bloked!`);
                }
            }
            else {
                return false;
            }
        }
    }

    static keyUp(e) {

    }
}
