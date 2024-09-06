let screen = document.getElementById('screen');
let input = '';

function appendNum(num) {
    input += num;
    screen.innerText = input;
}

function calculate() {
    try {
        input = eval(input).toString();
        screen.innerText = input;
    } catch (e) {
        screen.innerText = 'Error';
        input = '';
    }
}

function clearScreen() {
    input = '';
    screen.innerText = '0';
}