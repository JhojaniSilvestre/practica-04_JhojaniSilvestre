$(window).on("load",comienzo);

function comienzo(){
$("#boton").on("click",mostrarRegiones);
}

function mostrarRegiones(){
    /*---------------------------------------------------------------------------------------*/
    //para borrar todos los nodos option existentes de la select con id region
    $( "#region>option" ).remove();
    /*---------------------------------------------------------------------------------------*/
    let al = new Array("Baden-Wurtemberg", "Baviera", "Berlín", "Brandeburgo", "Bremen", "Hamburgo", "Hesse", 
    "Mecklemburgo-Pomerania Occidental", "Baja Sajonia", "Renania del NorteWestfalia", "Renania-Palatinado", 
    "Sarre", "Sajonia", "Sajonia-Anhalt", "Shleswig-Holstein", "Turingia");
    let fr = new Array("Alsacia", "Aquitania", "Auvernia", "Borgona", "Bretaña", "ChampagneArdenne", "Córcega", "Franche-Comté", 
    "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pirineos", "Nord Pas-de-Calais", "Normandía", "País del Loira", "Paris Ile-de-France", 
    "Picardía", "Poitou-Charentes", "Provenza", "Rhône-Alpes", "Riviera Costa Azul", "Valle del Loira");
    let ig = new Array("Gran Londres (Greater London)", "Sudeste de Inglaterra (South East England)", "Sudoeste de Inglaterra (South West England)", 
    "Midlands del Oeste (West Midlands)", "Noroeste de Inglaterra (North West England)", "Nordeste de Inglaterra (North East England)", 
    "Yorkshire y Humber (Yorkshire and the Humber)","Midlands Oriental (East Midlands)","Este de Inglaterra (East of England)");
    let it = new Array("Abruzzo", "Basilicata", "Calabria", "Campania", "Cerdeña", "Emilia Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", 
    "Lombardia", "Marche", "Molise", "Piamonte", "Puglia", "Sicilia","Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto");
    let pt = new Array("Alentejo", "Algarve", "Gran Lisboa", "Región de Lisboa", "Lisboa y Valle del Tajo", "Regiones Autónomas de Portugal", 
    "Región Centro (Portugal)", "Región Norte (Portugal)");
    
    //obtengo un conjunto con los option seleccionados
    let option = $("#paises>option:selected");

    if ($(option).length > 0) {
        //obtengo el valor de la posicion 0, que es el pais seleccionado
        let paisSelected = $(option).eq(0).val();
        //eval busca una variable que sea igual al valor del parametro indicado
        let regiones = eval(paisSelected); //devuelve el array que corresponde al valor encontrado

        for (let i = 0; i < regiones.length; i++) {
            //valor = $(regiones).eq(i);
            //creo los nodos option con el valor correspondiente en la select con id region
            $("#region").append("<option>"+regiones[i]+"</option>");
        }
    }
    else{
        alert("Debe seleccionar un pais");
    }

}