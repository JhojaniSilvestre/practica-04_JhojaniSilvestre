$(window).on("load",comienzo);

function comienzo(){
	$("#aplicacoches").on("click",aplicacoches);
    $("#aplicatabla").on("click",aplicatabla);
}

function aplicacoches(){
    //se generan los numeros random
    let num1 = Math.random() * 256;
    let num2 = Math.random() * 256;
    let num3 = Math.random() * 256;
    //odd() para los impares
    $("#tablacoches>tbody>tr").odd().css("background-color", "rgb("+num1+","+num2+","+num3+")");
    //even() para los pares
    $("#tablacoches>tbody>tr").even().css("backgroundColor", "rgb("+num3+","+num1+","+num2+")");
}

function aplicatabla(){
    let num1 = Math.random() * 256;
    let num2 = Math.random() * 256;
    let num3 = Math.random() * 256;

    $("#cochestabla>tbody>tr").odd().css("background-color", "rgb("+num1+","+num2+","+num3+")");
    $("#cochestabla>tbody>tr").even().css("backgroundColor", "rgb("+num3+","+num1+","+num2+")");
}
