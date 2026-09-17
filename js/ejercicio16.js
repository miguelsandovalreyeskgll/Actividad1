const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

function calcularOperacion(operacion) {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1 == "" || numero2 == "" || isNaN(numero1) || isNaN(numero2)) {
        Swal.fire("Error", "Ingresa valores numéricos válidos", "error");
        return;
    }

    let a = Number(numero1);
    let b = Number(numero2);
    let resultado;

    if (operacion == "suma") {
        resultado = sumar(a, b);
    } else if (operacion == "resta") {
        resultado = restar(a, b);
    } else if (operacion == "multiplicacion") {
        resultado = multiplicar(a, b);
    } else if (operacion == "division") {
        resultado = dividir(a, b);
    }

    document.getElementById("resultado").value = resultado;
}