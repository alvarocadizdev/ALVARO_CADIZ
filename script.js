const Pantalla = document.getElementById("pantalla");

function mostrarPantalla(input){
    Pantalla.value += input;
}

function calcular(){
    try {
        Pantalla.value = eval(Pantalla.value);
    } catch (error) {
        Pantalla.value='Error';
    }
}


function borrar(){
    Pantalla.value ='';
}