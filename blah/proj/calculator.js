function calculator(op) {
    let a = Number(document.getElementById("input-1").value); /*two input calculator, so fetch both inputs from html doc*/
    let b = Number(document.getElementById("input-2").value);

    if (isNaN(a) || isNaN(b)) { /*not so robust NaN check and error catch*/
        display("invalid input");
        return;
    }

    let result;
    switch (op) { /*switch flowchart for arithmetic operations*/
        case "+": /*add*/
            result = a + b;
            break;
        case "-": /*subtract*/
            result = a - b;
            break;
        case "*": /*multiply*/
            result = a * b;
            break;
        case "/":
            if (b === 0) { /*when dividing check if dividing by 0*/
                display("Err: div by 0");
                return;
            }
            result = a / b;
            break;
        case "**":
            result = 1;
            for (let i = 0; i < b; i++) { /*for loop as required for power func*/
                result *= a;
            }
            break;
        default:
            display("invalid input");
            return;
    }
    display(result);
}

function display(result) {
    let elemOut = document.getElementById("output");
    elemOut.innerHTML = String(result);
    elemOut.className = "";
    if (Number(result) < 0) {
        elemOut.className = "is-negative";
    }
}

function clearCalc() {
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("output").innerHTML = "";
}
