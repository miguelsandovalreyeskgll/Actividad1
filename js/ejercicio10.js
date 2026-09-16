function convertir() {
    let celsius = document.getElementById("celsius").value;

    if (celsius === "") {
        alert("Ingresa una temperatura en grados Celsius");
        return;
    }

    if (isNaN(celsius)) {
        alert("Ingresa un valor numérico");
        return;
    }

    let fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
}
