var buttons = document.getElementsByClassName('button')
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operator = null;
var operand3 = null;

function clear() {
    display.innerHTML = "";

}
function sum() {
    operand3 = operand2 + operand1;
    display.innerText = operand3;
}
function subtract() {
    operand3 = operand1 - operand2;
    display.innerText = operand3;
}
function Multiply() {
    operand3 = operand1 * operand2;
    display.innerText = operand3;
}
function Divide() {
    operand3 = operand1 / operand2;
    display.innerText = operand3;
}
for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        display.innerText += value;
        if (value == '+') {
            operator = '+';
            operand1 = Number.parseFloat(display.innerText);
            clear();

        }
        else if (value == '-') {
            operator = '-';
            operand1 = Number.parseFloat(display.innerText);
            clear();

        }
        else if (value == '*') {
            operator = '*';
            operand1 = Number.parseFloat(display.innerText);
            clear();

        }
        else if (value == '/') {
            operator = '/';
            operand1 = Number.parseFloat(display.innerText);
            clear();

        }
        else if (value == 'AC') {
            clear();
        }
        else if (value == '=') {
            operand2 = Number.parseFloat(display.innerText);
            if (operator == '+') { sum(); }
            if (operator == '-') { subtract(); }
            if (operator == '*') { Multiply(); }
            if (operator == '/') { Divide(); }
        }

    });}
    
        document.addEventListener('keydown', function (event) {
            if(event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18  ){
                return false;
            }
            var value = String.fromCharCode(event.keyCode);
            display.innerText += value;
var values = event.keyCode;
// var val = Number.parseInt(values);
            if (values == '187') {
                operator = '+';
                operand1 = Number.parseFloat(display.innerText);
                clear();

            }
            else if (values == 189) {
                operator = '-';
                operand1 = Number.parseFloat(display.innerText);
                clear();

            }
            else if (values == 56) {
                operator = '*';
                operand1 = Number.parseFloat(display.innerText);
                clear();

            }
            else if (values == 191) {
                operator = '/';
                operand1 = Number.parseFloat(display.innerText);
                clear();

            }
            else if (values == 8) {
                clear();
            }
            else if (values == 13) {
                operand2 = Number.parseFloat(display.innerText);
                if (operator == '+') { sum(); }
                if (operator == '-') { subtract(); }
                if (operator == '*') { Multiply(); }
                if (operator == '/') { Divide(); }
            }
          
        });
    
