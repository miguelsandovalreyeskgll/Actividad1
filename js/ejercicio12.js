function convertir() {
    let pesos = document.getElementById("pesos").value;
    let tasaCambio = 0.055;

    if (pesos == "") {
        alert("Ingresa una cantidad en pesos mexicanos");
        return;
    }

    if (isNaN(pesos) || parseFloat(pesos) <= 0) {
        alert("Ingresa un valor numérico positivo");
        return;
    }

    let dolares = parseFloat(pesos) * tasaCambio;
    document.getElementById("dolares").value = dolares.toFixed(2);
}
