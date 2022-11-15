const nrButtons = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

class Calculator {
    constructor() {
        this.currVal = null;
        this.prevVal = null;
        this.currOperation = null;
    }

    clear() {
        this.currVal = "0";
        this.prevVal = null;
        this.currOperation = null;
        this.currVal = null;
        document.getElementById("textarea").innerHTML = "";
    }

    appendNumber(number) {
        this.currVal == null ? this.currVal = number.toString() : this.currVal += number.toString();
        if (this.prevVal != null){
            document.getElementById("textarea").innerHTML = this.prevVal + this.currOperation + this.currVal;
        } else {
            document.getElementById("textarea").innerHTML = this.currVal;
        }
    }

    chooseOperator(sign) {
        this.currOperation = sign;
        if (this.currVal !== ""){
            this.prevVal = this.currVal;
        }
        document.getElementById("textarea").innerHTML = this.currVal + sign;
        this.currVal = "";

    }

    calculate(){
        if (this.currVal !== ""){
            let answer;
            if (this.currOperation === "÷") {
                answer = parseFloat(this.prevVal) / parseFloat(this.currVal);
            } else if (this.currOperation === "*") {
                answer = parseFloat(this.prevVal) * parseFloat(this.currVal);
            } else if (this.currOperation === "-") {
                answer = parseFloat(this.prevVal) - parseFloat(this.currVal);
            } else if (this.currOperation === "+") {
                answer = parseFloat(this.prevVal) + parseFloat(this.currVal);
            } else {
                answer = "Error";
            }
            this.clear();
            document.getElementById("textarea").innerHTML = answer;
            this.currVal = answer;
        }
    }

}

const calculator = new Calculator();

nrButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML);
    })
})

operation.forEach(operator => {
    operator.addEventListener("click", () => {
        if (calculator.currOperation != null) {
            calculator.compute();
        }
        calculator.chooseOperator(operator.innerHTML);
    })
});

document.getElementById("clear").addEventListener("click", () => {
    calculator.clear();
});

document.getElementById("equals").addEventListener("click", () => {
    calculator.calculate();
})