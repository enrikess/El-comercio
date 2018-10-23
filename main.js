var lista_numeros = [];

//metodo de la burbuja para el ordenamiento
var burbuja = lista => {
    arr = lista.map(Number);
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


//agregar numero al array
var agregar = () => {
    var numero = document.getElementById('numero').value;
    var confirma = true;
    // validar que existan mas de 2 numeros en la lista
    if (lista_numeros.length>0) {
        document.getElementById('ordenar').style.display = "table";
    }

    //recorrer el array para validar que no existe
    for (let i = 0; i < lista_numeros.length; i++) {

        //si el numero se repite cambia el estado de "confirma" a false
        if (numero == lista_numeros[i]) {
            confirma = false;
            break;
        }
    }

    // si no se repite el numero se agregara al array
    if (confirma) {
        lista_numeros.push(numero);
        document.getElementById('alerta-error').style.display = "none";

    } else {
        document.getElementById('alerta').innerHTML = `El numero ${numero} ya se encuentra en la lista   `;
        document.getElementById('alerta-error').style.display = "block";
    }


    //armar el html
    text = "<div class='listado'>";
    for (let i = 0; i < lista_numeros.length; i++) {
        //si el numero se repite cambia el estado de "confirma" a false
        text += `<div class='unidad'> ${lista_numeros[i]} </div>`;
    }
    text += "</div>"


    document.getElementById('lista_numeros').innerHTML = text;
    return lista_numeros;
}

var ordenar = () => {
    var ordenado = burbuja(lista_numeros);
    //armar el html
    text = "<div class='listado'>";
    for (let i = 0; i < ordenado.length; i++) {
        //si el numero se repite cambia el estado de "confirma" a false
        text += `<div class='unidad'> ${ordenado[i]} </div>`;
    }
    text += "</div>"

    document.getElementById('ordenados_numeros').innerHTML = text;

}
//limpiar input y cadenas
var limpiar = () => {
    lista_numeros = [];
    document.getElementById('ordenados_numeros').innerHTML = '';
    document.getElementById('lista_numeros').innerHTML = '';
    document.getElementById('numero').value = '';
}