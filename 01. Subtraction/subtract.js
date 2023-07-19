function subtract() {
    let firstNum = Number(document.querySelector("#firstNumber").value);
    let secondNum = Number(document.querySelector("#secondNumber").value);

    let result = firstNum - secondNum;

    let output = document.querySelector('#result');
    output.textContent = result;
}