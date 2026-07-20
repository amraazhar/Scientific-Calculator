let display = document.getElementById("display");

function calculate(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function solve() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}
