function Calculate() {
    var firstnum = parseFloat(document.getElementById("firstnum").value);
    var secondnum = parseFloat(document.getElementById("secondnum").value);
    var result;
    var operator = document.getElementById("operator").value;

    if (isNaN(firstnum) || isNaN(secondnum)) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    switch (operator) {
        case "add":
            result = firstnum + secondnum;
            break;
        case "subtract":
            result = firstnum - secondnum;
            break;
        case "multiply":
            result = firstnum * secondnum;
            break;
        case "divide":
            if (secondnum !== 0) {
                result = firstnum / secondnum;
            } else {
                result = "HATA!";
            }
            break;
    }
    document.getElementById("result").value = result;
}

function Reset() {
    document.getElementById("firstnum").value = null;
    document.getElementById("secondnum").value = null;
    document.getElementById("result").value = null;
    document.getElementById("operator").value = "add";
}