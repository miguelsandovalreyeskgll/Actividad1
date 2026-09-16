function agregarElemento() {
    let input = document.getElementById("nuevoElemento");
    let lista = document.getElementById("lista");
    let texto = input.value.trim();

    if (texto !== "") {
        let li = document.createElement("li");
        li.classList.add("elemento");

        let textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger", "btn-sm");

        botonEliminar.onclick = function () {
            li.remove();
        };

        li.appendChild(botonEliminar);
        lista.appendChild(li);
        input.value = "";
    } else {
        alert("Escribe algo para agregar a la lista.");
    }
}
