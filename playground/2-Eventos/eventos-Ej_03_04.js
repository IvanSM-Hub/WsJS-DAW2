
class Usuario {
    usuario;
    password;

    constructor(usuario,password){
        this.usuario=usuario;
        this.password=password;
    }

    get getUsuario(){
        return this.usuario;
    }

    set setUsuario(value){
        this.usuario=value;
    }

    get getPassword(){
        return this.password;
    }

    set setPassword(value){
        this.password=value;
    }

}

function cargarUsuarios () {
    let usuarios = [user1,user2,user3];
    var user1 = new Usuario ("ivan","admin");
    var user2 = new Usuario ("luis","4689");
    var user3 = new Usuario ("pepe","1234");
    return usuarios;
}

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

    let usu = user.value;
    let passw = pass.value;
    let textVerif = "";

    let usuarios = cargarUsuarios();

    //console.log(usu);
    //console.log(passw);
    console.log(usuarios[0].getUsuario);
    

    for(var int; int<usuarios.length;i++){

        if(usu!=usuarios[i].getUsuario()){
            errorVerificacion(user);
            user.value="";
            pass.value="";
            textVerif="El usuario no es correcto";
            verificacion.style="color:red;"
    
        }else{
            
            okVerificacion(user);
            
            if(passw!=usuarios[i].getPassword){
                errorVerificacion(pass);
                textVerif="La contraseña no es correcta";
                verificacion.style="color:red;"
            }else{
                okVerificacion(pass);
            }
        }

    }

    verificacion.textContent = textVerif;
    
    e.preventDefault();
}
