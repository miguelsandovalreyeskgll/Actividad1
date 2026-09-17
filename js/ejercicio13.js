function verificar() {
    let edad = document.getElementById("edad").value;

    if (edad == "") {
        alert("Ingresa tu edad");
        return;
    }

    if (isNaN(edad) || parseInt(edad) <= 0) {
        alert("Ingresa un número positivo");
        return;
    }

    if (parseInt(edad) >= 18) {
        document.getElementById("resultado").value = "Puedes votar";
    } else {
        document.getElementById("resultado").value = "No puedes votar";
    }
}