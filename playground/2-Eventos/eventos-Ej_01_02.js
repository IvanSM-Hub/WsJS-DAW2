function sumar(num1,num2){
    return num1+num2;
}

function restar(num1,num2){
    return num1-num2;
}

function multiplicar(num1,num2){
    return num1*num2;
}

function dividir(num1,num2){
    return num1/num2;
}

//Ejercicio1:
sumarNum.onclick = function (e){
    
    //Cojemos los numeros que me pasa por los campos.
    let campo1 = document.getElementById("num1");
    let num1 = parseFloat(campo1.value);
    let campo2 = document.getElementById("num2");
    let num2 = parseFloat(campo2.value);
    
    resultado.value=sumar(num1,num2);

    e.preventDefault();

}

restarNum.onclick = function (e){
    
    //Cojemos los numeros que me pasa por los campos.
    let campo1 = document.getElementById("num1");
    let num1 = parseFloat(campo1.value);
    let campo2 = document.getElementById("num2");
    let num2 = parseFloat(campo2.value);

    resultado.value=restar(num1,num2);

    e.preventDefault();

}

multiplicarNum.onclick = function (e){
    
    //Cojemos los numeros que me pasa por los campos.
    let campo1 = document.getElementById("num1");
    let num1 = parseFloat(campo1.value);
    let campo2 = document.getElementById("num2");
    let num2 = parseFloat(campo2.value);

    resultado.value=multiplicar(num1,num2);

    e.preventDefault();

}

dividirNum.onclick = function (e){
    
    //Cojemos los numeros que me pasa por los campos.
    let campo1 = document.getElementById("num1");
    let num1 = parseFloat(campo1.value);
    let campo2 = document.getElementById("num2");
    let num2 = parseFloat(campo2.value);

    resultado.value=dividir(num1,num2);

    e.preventDefault();

}

