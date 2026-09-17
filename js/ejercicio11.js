function convertir() {
    let kilometros = document.getElementById("kilometros").value;

    if (kilometros == "") {
        alert("Ingresa una distancia en kilómetros");
        return;
    }

    if (isNaN(kilometros)) {
        alert("Ingresa un valor numérico");
        return;
    }

    let millas = parseFloat(kilometros) * 0.621371;
    document.getElementById("millas").value = millas;
}
