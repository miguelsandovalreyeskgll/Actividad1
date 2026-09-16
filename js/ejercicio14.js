function calcular() {
    let entrada = document.getElementById("numeros").value;

    if (entrada == "") {
        alert("Ingresa números separados por comas");
        return;
    }

    let valores = entrada.split(",");

    for (let i = 0; i < valores.length; i++) {
        if (valores[i].trim() == "" || isNaN(valores[i])) {
            alert("Ingresa números válidos separados por comas");
            return;
        }
    }

    let numeros = valores.map(Number);

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let suma = numeros.reduce(function(total, valor) {
    return total + valor; });

    let promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio;
}