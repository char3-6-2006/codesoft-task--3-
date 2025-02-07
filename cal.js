
let display = document.getElementById("display");

function appendValue(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = "";
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}