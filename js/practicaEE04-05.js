$(window).on("load",comienzo);

function comienzo(){
	$("#alcazar").on("mouseenter", darEstilo);
    $("#alcazar").on("mouseleave", quitarEstilo);

    $("#medina").on("mouseenter", asignarEstilo);
    $("#medina").on("mouseleave", asignarEstilo);
}

function darEstilo(){
    $("#alcazar").addClass("primero");
}

function quitarEstilo(){
    $("#alcazar").removeClass("primero");
}

function asignarEstilo(){
    //si no tiene el estilo se lo asigna, si lo tiene se lo quita
    $("#medina").toggleClass("primero");
}

