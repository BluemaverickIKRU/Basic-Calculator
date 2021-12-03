var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var operation = document.getElementById('operator');
var result = document.getElementById('result');
var enter = document.getElementById('enter');

function onClickEnter() {
    switch(operation.value) {
        case('+'):
            result.textContent = Number(num1.value) + Number(num2.value);
            break;
        case('-'):
            result.textContent = Number(num1.value) - Number(num2.value);
            break; 
       case('*'):
            result.textContent = Number(num1.value) * Number(num2.value);
            break; 
        case('/'):
            result.textContent = Number(num1.value) / Number(num2.value);
            break;
        default:
            alert('Invalid Operation!!');
    }
}

function removeResult() {
    result.textContent = "";
}

enter.addEventListener('click',onClickEnter);
num1.addEventListener('click',removeResult);
num2.addEventListener('click',removeResult);
operation.addEventListener('click',removeResult);
