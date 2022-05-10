$(window).on("load",comienzo);

function comienzo(){
	$("#anyadir").on("click",anyadirTabla);
    $("#borrar").on("click",borrarFila);
    $("#modif").on("click",modifNom);
    $("#borrarFila").on("click",borrarNumFila);
    $("#borrarTodo").on("click",borrarTodo);
}

function borrarTodo(){
    //vacio la tabla
    $("#tabla>tbody").empty();
}

function anyadirTabla(){
    let cod = $("#cod").val().toLowerCase().trim();
    let nom = $("#nom").val().toLowerCase().trim();
    
    if (cod!="" && nom!=""){
        //llamo a las funciones que comprueban si el valor es correcto
        let esnum = solonum(cod);
        let espal = solopalabra(nom);
        //si ambos son correctos
        if (esnum && espal) {
            //obtengo las filas de la tabla
            let filas=$("#tabla>tbody>tr");
            let ausente=true;
            let pos=0;
            while (ausente && pos < $(filas).length){
                //obtengo las celdas de la fila
                let celdas=$(filas).eq(pos).find("td");
                //compruebo que el valor de la primera celda es igual al codigo introducido
                if ($(celdas).eq(0).text()==cod){
                    ausente=false;
                    alert("el código introducido ya existe en la tabla.");
                } //convierto el valor de la celda a decimal para ordenar por valor numerico
                else if (parseInt($(celdas).eq(0).text(),10) > cod){
                    ausente=false;
                    $(filas).eq(pos).before("<tr><td>"+cod+"</td><td>"+nom+"</td></tr>");
                }
                pos+=1;
            }
            if (ausente)
                $("#tabla>tbody").append("<tr><td>"+cod+"</td><td>"+nom+"</td></tr>");
        }

	}
}

function borrarFila(){
    let cod = $("#cod").val().toLowerCase().trim();
    let nom = $("#nom").val().toLowerCase().trim();
    
    if (cod != "") {
        let esnum = solonum(cod);
        if (esnum) {
            let filas=$("#tabla>tbody>tr");
            let ausente=true;
            let pos=0;
            while (ausente && pos < $(filas).length){
                let celdas=$(filas).eq(pos).find("td");
                //convierto a decimal para comprobar que el valor de la celda es igual al introducido
                if (parseInt($(celdas).eq(0).text(),10)==cod){
                    ausente=false;
                    //borro la fila en la posicion encontrada
                    $(filas).eq(pos).remove();
                }
                pos+=1;
            }
            if (ausente)
                alert("El código introducido no existe en la tabla");

        }
    }
}

function modifNom(){
    let cod = $("#cod").val().toLowerCase().trim();
    let nom = $("#nom").val().toLowerCase().trim();
    if (cod != "" && nom != "") {
        let esnum = solonum(cod);
        let espal = solopalabra(nom);
        
        if (esnum && espal) {
            let filas=$("#tabla>tbody>tr");
            let ausente=true;
            let pos=0;
            while (ausente && pos < $(filas).length){
                let celdas=$(filas).eq(pos).find("td");
                //convierto a decimal para comprobar que el valor de la celda es igual al introducido
                if (parseInt($(celdas).eq(0).text(),10)==cod){
                    ausente=false;
                    //el valor de la celda 1 corresponde con el nombre, con text cambiamos el valor
                    $(celdas).eq(1).text(nom);
                }
                pos+=1;
            }
            if (ausente)
                alert("El código introducido no existe en la tabla");
        }
    }
}

function borrarNumFila(){
    let numFila = $("#numFila").val().toLowerCase().trim();
    if (numFila != "") {
        let esnum = solonum(numFila);
        if (esnum) {
            let filas=$("#tabla>tbody>tr");
            //si el numero de fila introducido es mayor al existente o se introduce 0
            if (numFila > $(filas).length || numFila == "0")
                alert("El número de fila introducido no existe.");
            else
                $(filas).eq(numFila-1).remove();
        }
    }    
}

function solonum(dato){
    let esnum= true;
    let pos = 0;
    while (esnum && pos < dato.length) {
        if (dato.charAt(pos) < "0" || dato.charAt(pos) > "9") {
            esnum = false;
        }
        pos+=1;
    }
    return esnum;
}

function solopalabra(dato){
    let esp = "áéíóúñ";
    let espal= true;
    let pos = 0;
    while (espal && pos < dato.length) {
        if (dato.charAt(pos) < "a" || dato.charAt(pos) > "z") {
            if (!esp.includes(dato.charAt(pos))) {
                espal = false;
            }
        }
        pos+=1;
    }
    return espal;
}

