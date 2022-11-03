function calculate() {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op3 = parseFloat(document.getElementById("op3").value);
    const action = document.getElementById("op2").value;

    switch (action) {
        case "+":
            document.getElementById("answ").value = op3 + op1;
            console.log(op3 + op1);
            break;
        case "-":
            document.getElementById("answ").value = op1 - op3;
            break;
        case "/":
            document.getElementById("answ").value = op1 / op3;
            break;
        case "x":
            document.getElementById("answ").value = op1 * op3;
            break;
        default:
            alert("Wrong action! Try again.")
    }

}