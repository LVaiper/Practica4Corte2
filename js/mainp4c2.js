var arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log("Arreglo: "+arreglo);

//Calcular promedio
function promedio(arreglo){
    let suma=0;
    
    for (let cons=0 ; cons<20 ; cons++){
        suma = suma + (arreglo[cons]);
    }

    suma = suma/20;
    return suma;
}
console.log("El promedio es: " + promedio(arreglo));



//Imprimir cantidad de pares
function pares(arreglo){
    let suma = 0;
    for (let i = 0; i < 20; i++) {
        if (arreglo[i] % 2 == 0){
            suma = (suma + 1); 
        }
    }

    return suma;
}
console.log("Cantidad de valores pares en el arreglo: "+ pares(arreglo));



//Arreglo descendente
function orden(arreglo){
    let suma = 0;
    
    return arreglo.sort(function(a, b) {
        return b - a;
    });
}
console.log("Orden de mayor a menor: "+orden(arreglo));

function llenar(){
    var limite = document.getElementById('limite').value;
    var Listanumeros = document.getElementById('numeros');
    var myArray = [];
    let aleatorio;

    for(let i = 1; i <= limite; i++) { 
        myArray.push(i);
    }
    myArray=ascendente(myArray);

    for(let con = 0 ; con < limite ; con++){
        Listanumeros.options[con] = new Option(myArray[con]);

    }

    
}

function limpiar(){
    document.getElementById("numeros").innerHTML = "";
}

function numAleatorio(){
    var Listanumeros = new Array();
    var limite = document.getElementById('limite').value;
    var numeros = document.getElementById("numeros");
    
    //Validar rango de numero adecuado
    if(limite<1 || limite>50 || limite=="" || limite==0) {
        alert("Limite minimo o maximo alcanzado");
        limite=="" || limite==0 || limite>50 || limite<1 ? errorLimite.style.visibility = 'visible' : errorLimite.style.visibility = 'hidden';
    }
    else{
        //Añadir al arreglo
        Listanumeros.length = limite;
        for (let i=0; i<Listanumeros.length; i++) {
            Listanumeros[i] = i+1; 
        }
        //Imprimir arreglo dentro del rango
        for (let i=0; i<Listanumeros.length; i++) {
            var aux = rango(1,50);
            if (Listanumeros.indexOf(aux)==-1) {
                Listanumeros[i] = aux;
            } 
        }
        //Arreglo ordenado
        Listanumeros = ordenMenMay(Listanumeros);

        //Imprimir arreglo ordenado
        for (let con=0; con<limite; con++) {
            numeros.options[con] = new Option(Listanumeros[con]);
        }

    }
    //Arreglo dividido en pares e impares
    paresImpares(Listanumeros);
    
}

//Calcular rango
function rango(min, max) {
    let a = max - min + 1;
    let b = Math.random() * a;
    let res = Math.floor(b) + min;
    return res;
}

//Ordenar ascendente
function ordenMenMay(arreglo){
    return arreglo.sort(function(a, b){
        return a-b});
}


function paresImpares(arreglo){
    var par=0;
    var imp=0;
    var porPares=0;
    var porImpares=0;
    var dif=0;

    //Calcular pares e impares
    for(let i= 0; i<arreglo.length; i++){
        if((arreglo[i] % 2) ==0){
            par++;
        }
        else{
            imp++;
        }
    }
    
    //Calcular porcentaje
    porPares=((par*100)/arreglo.length).toFixed(0);
    porImpares=((imp*100)/arreglo.length).toFixed(0);

    //Imprimir porcentaje
    document.getElementById("porPares").innerHTML=porPares+"%";
    document.getElementById("porImpares").innerHTML=porImpares+"%";
    
    //Calcular simetria
    dif=(porPares-porImpares);
    if (dif<0) {
        dif=dif*-1;
    }
    if (dif>25) {
        document.getElementById("EsSimetrico").innerHTML="NO ES SIMETRICO";
    }
    else{
        document.getElementById("EsSimetrico").innerHTML="SI ES SIMETRICO";
    }

}