$(window).on("load",comienzo);

var contImg = 1; //variable global para controlar el numero de la imagen

function comienzo(){
/*------------------------------cambiar imagenes ----------------------------*/
$("#boton").on("click",cambiarImagen);

/*------------------------------C.Autonomas ----------------------------*/
//al hacer clic en cualquiera de los input hijos de la clase
$(".c_autonom > input").on("click",infoCAutonom);

}

function cambiarImagen(){
    //si la imagen es menor que 7
    if (contImg < 7 ) {
        contImg++; //se incrementa el contador y asignamos su valor al nombre de la imagen
        $("#imagenes").attr("src", "img/b#.jpg".replace("#", contImg));
    }
    else{ //sino, devolvemos al contador el valor 1
        contImg = 1; //asignamos su valor al nombre de la imagen
        $("#imagenes").attr("src", "img/b#.jpg".replace("#", contImg));
    }  
    //console.log(contImg);
}

function infoCAutonom(){
    /*---------------------------------------------------------------------------------------*/
    //para vaciar el div con id info
    $( "#info" ).empty();
    /*---------------------------------------------------------------------------------------*/

    let ga = new Array("La Coruña","Lugo","Orense","Pontevedra");
    let an = new Array("Almeria","Cadiz","Cordoba","Granada","Huelva","Jaen","Malaga","Sevilla");
    let cl = new Array("Avila","Burgos","Leon","Salamanca","Segovia","Soria","Valladolid","Zamora");

    //creo la lista no ordenada para las multiprovinciales
    let ul = $("<ul>", {id: "multi"});
    $("#info").append(ul);
    //obtengo el nombre del id del boton pulsado al invocar la funcion
    let botonPulsado = $(this).attr('id');
    //console.log(botonPulsado);

    if (botonPulsado == "cb") {
        $("#info").append("Cantabria es una comunidad autónoma española de carácter uniprovincial, definida como comunidad histórica en su Estatuto de Autonomía.");
        $("#info").css({"backgroundColor": "red", "color": "white", "font-family": "Courier New", "font-size": "14pt"});
    }
    else if (botonPulsado == "as") {
        $("#info").append("El Principado de Asturias es una comunidad autónoma uniprovincial de España, con una población de 1 028 244 habitantes (INE 2018).");
        $("#info").css({"backgroundColor": "blue", "color": "yellow", "font-family": "Cambria", "font-size": "13pt"});
    }
    else if (botonPulsado == "ga") {
        //funcion que crea los nodos li con las provincias para la lista no ordenada
        listaProv(ga);
        //creo los divs para distribuir la informacion
        $("#info").append("<div>Galicia es una comunidad autónoma española, considerada nacionalidad histórica según su estatuto de autonomía, situada en el noroeste de la península ibérica.</div>");
        $("#info").append("<div>La capital es la ciudad de Santiago de Compostela, mientras que Vigo es el municipio más poblado.</div>");
        $("#info").append("<div>Geográficamente, está bañada al oeste por el océano Atlántico y al norte por el mar Cantábrico. Limita al sur con Portugal y al este con Asturias y Castilla y León (provincias de León y de Zamora).</div>");
        //le añado el estilo
        $("#info").css({"backgroundColor": "blue", "color": "white", "font-family": "Comic Sans MS", "font-size": "14pt"});
    }
    else if (botonPulsado == "an") {
        listaProv(an);
        //creo los divs para distribuir la informacion
        $("#info").append("<div>Andalucía es una comunidad autónoma española reconocida como nacionalidad histórica por su Estatuto de Autonomía</div>");
        $("#info").append("<div>Su capital es Sevilla, sede del Consejo de Gobierno de la Junta de Andalucía y del Parlamento.</div>");
        $("#info").append("<div>La sede del Tribunal Superior de Justicia de Andalucía se encuentra en Granada.</div>");
        //le añado el estilo
        $("#info").css({"backgroundColor": "green", "color": "white", "font-family": "Calibri", "font-size": "13pt"});
    }
    else if (botonPulsado == "cl"){
        listaProv(cl);
        //creo los divs para distribuir la informacion
        $("#info").append("<div>Castilla y León es una comunidad autónoma española, referida como comunidad histórica y cultural en su Estatuto de Autonomía.</div>");
        $("#info").append("<div>Se constituyó como preautonomía en 1978​ y adquirió su estatus de comunidad autónoma en 1983.</div>");
        $("#info").append("<div>Su territorio se sitúa en la parte norte de la meseta de la península ibérica y se corresponde mayoritariamente con la parte española de la cuenca hidrográfica del Duero.</div>");
        //le añado el estilo
        $("#info").css({"backgroundColor": "yellow", "color": "red", "font-family": "Verdana", "font-size": "12pt"});
    }
}

function listaProv(provincias){
    for (let i = 0; i < provincias.length; i++) {
        //creo los nodos li con el valor correspondiente en la select con id region
        $("#multi").append("<li>"+provincias[i]+"</li>");
    }
}





