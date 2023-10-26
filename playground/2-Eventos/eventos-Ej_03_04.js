function errorVerificacion(input) {
    input.classList.remove("ok-border");
    input.classList.toggle("error-border");
}

function okVerificacion(input) {
    input.classList.remove("error-border");
    input.classList.toggle("ok-border");
}

/*
//Resolución Ejercicio 3
verificar.onclick = function (e) {
    
    let userVerf = "pepe";
    let passVerf = "1234";

    let usuario = user.value;
    let password = pass.value;

    let textVerif = "";

    if(usuario!=userVerf){
        
        errorVerificacion(user);
        user.value="";
        pass.value="";
        textVerif="El usuario no es correcto";
        verificacion.style="color:red;"

    }else{
        
        okVerificacion(user);
        
        if(password!=passVerf){
            errorVerificacion(pass);
            textVerif="La contraseña no es correcta";
            verificacion.style="color:red;"
        }else{
            okVerificacion(pass);
        }
    }

    verificacion.textContent = textVerif;
    
    e.preventDefault();
}
*/

//Resolución Ejercicio 4
verificar.onclick = function (e) {

    var usuarios = [{nombre:"ivan",password:"5678"},{nombre:"pepe",password:"1234"},{nombre:"luis",password:"admin1"}];

    var usu = user.value;
    var passw = pass.value;
    var textVerif = "";

    var usuarioEncontrado = false;
    var passwordEncontrada = false;

    

    console.log("----------------")

    for(var i = 0; i<usuarios.length;i++){

        if(usuarios[i].nombre==usu){
        
            usuarioEncontrado = true;

            if (usuarios[i].password==passw){

                passwordEncontrada=true;
                break
            
            } else {
                passwordEncontrada=false;
                break;
            }

        } else {

            usuarioEncontrado = false;
        
        }   

    }

    console.log(usu)
    console.log(passw)
    console.log(usuarioEncontrado)
    console.log(passwordEncontrada)

    if (usuarioEncontrado) {

        okVerificacion(user);

        if (passwordEncontrada) {

            okVerificacion(pass);
    
        } else {
    
            errorVerificacion(pass);
            user.value="";
            pass.value="";
            textVerif="La contraseña no es correcta";
            verificacion.style="color:red;";
    
        }

    } else {

        errorVerificacion(user);
        user.value="";
        pass.value="";
        textVerif="El usuario no es correcto";
        verificacion.style="color:red;";

    }

    

    verificacion.textContent = textVerif;
    
    e.preventDefault();
}
