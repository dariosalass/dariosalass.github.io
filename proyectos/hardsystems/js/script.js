function toggleMenu() {
    var menu = document.getElementById("menu-principal");
    var btn = document.getElementById("boton-menu");
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        btn.innerHTML = "MENU";
    } else {
        menu.style.display = "flex";
        btn.innerHTML = "CERRAR";
    }
}

function aplicarPromo() {
    var banner = document.getElementById("banner-oferta");
    var titulo = document.getElementById("titulo-oferta");
    
    titulo.innerHTML = "¡CÓDIGO APLICADO!";
    banner.style.borderColor = "#00ff88";
}

function mostrarStock() {
    var stock = document.getElementById("stock-1");
    stock.style.display = "inline-block";
}

function ocultarStock() {
    var stock = document.getElementById("stock-1");
    stock.style.display = "none";
}

function resaltarInput() {
    var input = document.getElementById("nombre");
    input.style.backgroundColor = "#1a1d24";
}

function comprobarInput() {
    var input = document.getElementById("nombre");
    input.style.backgroundColor = "";
    
    if (input.value === "") {
        input.style.borderColor = "#ff3366";
    } else {
        input.style.borderColor = "#22252b";
    }
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    
    if (nombre === "" || email === "") {
        alert("Error: Nombre y email son obligatorios.");
        return false; 
    } else {
        alert("Datos enviados correctamente al sistema.");
        return true; 
    }
}