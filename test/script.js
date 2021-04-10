function calculate() {
    let a = parseInt(document.querySelector("#waarde1").value)
    let b = parseInt(document.querySelector("#waarde2").value)
    let op = document.querySelector("#operator").value
    let calculate1

    if(op == "add") {
        calculate1 = a + b;
    } else if (op == "min") {
        calculate1 = a - b;
    } else if (op == "div") {
        calculate1 = a / b
    } else if (op == "mul") {
        calculate1 = a * b
    }

    document.querySelector("#result").innerHTML = calculate1

}

