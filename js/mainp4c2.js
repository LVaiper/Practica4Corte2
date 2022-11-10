var arreglo=new Array(20);
/*Diseña una función que reciba como argumento un arreglo de valores
enteros de 20 posiciones , regrese el valor promedio de los elementos del arreglo.*/

function promedio(){
    let promedio=0;
    for(let i=0; i<arreglo.length; i++){
arreglo[i]=Number(prompt("Escribe un numero:"));
promedio=promedio + arreglo[i];
    }
    console.log('promedio:'+ promedio/20);
}

/* Diseñe una función que reciba como argumento un arreglo de 20 valores
numéricos enteros, y me regrese la cantidad de valores pares que existe en el
arreglo*/

function contadorpar(){
    let contadorpar=0;
    for(let i=0; i<arreglo.length; i++){
arreglo[i]=Number(prompt("Escribe un numero:"));
if(arreglo[i]%2==0){
    contadorpar++;    
} 
    }


console.log(' cantidad de pares  ' + contadorpar);

}
function orden(){
    for(let i=0; i<arreglo.length; i++){
        arreglo[i]=Number(prompt("Escribe un numero: "));
        }
        console.log('Nuevo arreglo: ' + arreglo.sort(function(a,b){return b-a}));
}
function genera(){
let limite= document.getElementById('Limite').value;
let lsNumeros = document.getElementById ('idnumeros');
for (let con =0;con<limite; ++ con) {

    lsNumeros.options[con] = new Option(con,'texto',con);
}

}
function generar(){
    let limite= document.getElementById('Limite2').value;
    let lsNumeros = document.getElementById ('idnumeros2');
    let num=0;
    let impar=0;
    let par=0;
    for (let con =0;con<limite; ++ con) {
        num=(Math.random()*50).toFixed(0);

    
        lsNumeros.options[con] = new Option(num,'texto',num);
        if(num%2==0){
            par++;
        }else{
            impar++;
        }
    }
   
    let ppar=(par/limite)*100;
let pinpar=(impar/limite)*100;
document.getElementById('pares').innerText=par;
document.getElementById('inpares').innerText=impar;
if(Math.abs(ppar-pinpar)<=25){
    document.getElementById('simetrico').innerText="es simetrico";
}else{
    document.getElementById('simetrico').innerText="no es simetrico";
}
    
    }