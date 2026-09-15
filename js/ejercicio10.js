const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertir = document.getElementById("convertir");

convertir.addEventListener("click", function () {
    if (celsius.value === "") {
        alert("Ingresa una temperatura en grados Celsius.");
        return;
    }

    if (isNaN(celsius.value)) {
        alert("Ingresa un valor numérico.");
        return;
    }

    const resultado = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = resultado + "°F";
});
