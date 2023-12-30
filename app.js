let display = document.getElementById('display');

function addDisplay(input) {
    display.value += input;
}
function ac() {
    display.value = "";
}
function process() {
    display.value = eval(display.value);
}