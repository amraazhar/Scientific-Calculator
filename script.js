let display = document.getElementById("display");


// Add value to display
function calculate(value) {
    display.value += value;
}


// Clear display
function clearDisplay() {
    display.value = "";
}


// Delete last character
function deleteNumber() {
    display.value = display.value.slice(0, -1);
}


// Calculate result
function solve() {

    try {

        let expression = display.value;

        // Convert scientific functions

        expression = expression.replace(/√/g, "Math.sqrt");
        expression = expression.replace(/π/g, "Math.PI");

        let result = eval(expression);

        display.value = result;

    } catch {

        display.value = "Error";

    }

}
