document.getElementById('cambiarnombre').onclick = function () {
    console.log("hola mundo");
    document.getElementById("nombre").innerHTML = "Esteban Marquisio";
}

document.getElementById('cambiarImagen').onclick = function () {
    console.log("probando funcion");
    document.getElementById("myImage").src="ImagenCV2.jpg";
}

document.getElementById('btn_color').onclick = function () {
    document.getElementById("fondo").style.background = "#FF0000";
}
