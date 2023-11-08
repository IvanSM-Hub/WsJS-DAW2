
//Procesar Respuesta Asincrona
function procesarRespuesta(jsonDoc) {
    
    //Obtenemos el archivo JSON
    var objetoJson = JSON.parse(jsonDoc);

    //Segmentamos los datos del JSON por Tamaño y Ingredientes
    var arrayTamanyo = objetoJson.pizzeria.tamaños;
    var arrayIngredientes = objetoJson.pizzeria.ingredientes;

    //Vaciamos los campos para evitar diplicidades o crear elementos demás
    elegirTamanyo.innerHTML = "";
    elegirIngrediente.innerHTML="";
    resultado.innerText="";

    //Variables de Nodos HTML
    var input;
    var label;
    var br;

    //Recorremos el arrayTamanyo para montar los inputs de tamaños
    for(let tamanyo of arrayTamanyo) {
        
        input = document.createElement("input");
        input.type="radio";
        input.name="size";
        input.id=tamanyo.tamaño;
        input.value=tamanyo.precio;

        label = document.createElement("label");
        label.for = tamanyo.tamaño;
        label.innerText="Pizza "+tamanyo.tamaño;

        br = document.createElement("br");

        elegirTamanyo.appendChild(input);
        elegirTamanyo.appendChild(label);
        elegirTamanyo.appendChild(br);
        
    }

    //Recorremos el arrayIngredientes para montar los inputs de ingredientes
    for(let ingrediente of arrayIngredientes) {
        
        input = document.createElement("input");
        input.type="checkbox";
        input.name="ingredientes";
        input.id=ingrediente.ingrediente;
        input.value=ingrediente.precio;

        label = document.createElement("label");
        label.for = ingrediente.ingrediente;
        label.innerText="Añadir "+ingrediente.ingrediente;

        br = document.createElement("br");

        elegirIngrediente.appendChild(input);
        elegirIngrediente.appendChild(label);
        elegirIngrediente.appendChild(br);
        
    }

}

//Función para procesar el precio del pedido
function procesarPedido () {

    //Inicializamos el precio a 0
    var precioPizza = 0;

    //Obtenemos todos los elementos con name "size" e "ingredientes"
    let size = document.getElementsByName("size");
    let ingrediente = document.getElementsByName("ingredientes");

    //Recorremos "size" obteniendo el valor del elemento seleccionado y sumandolo a la variable precioPizza
    for(let i=0;i<size.length;i++){
        if(size[i].checked){
            precioPizza+=parseInt(size[i].value);
            break
        }
    }

    //Recorremos "ingrediente" obteniendo el valor del elemento seleccionado y sumandolo a la variable precioPizza
    for(let i=0;i<ingrediente.length;i++){
        if(ingrediente[i].checked){
            precioPizza+=parseInt(ingrediente[i].value);
            break
        }
    }

    //Comprobamos el resultado de precioPizza
    console.log(precioPizza);

    //Pintamos en el HTML el resultado del pedido seleccionado
    resultado.innerText="El precio de tu pedido es: "+precioPizza;

}

//Constantes simulando la conexión a servidor para la práctiva
const URL = "http://127.0.0.1:5500/WsJS-DAW2/playground/3-AJAX/";
const RECURSO = "json/pizzeria.json";

//Esta función nos permite mediante una petición http, acceder al JSON y traernos la información para acto seguido llamar a la función procesarRespuesta. 
function cargar () {

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', URL + RECURSO, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {
        if(this.readyState==4){
            if (this.status == 200) {
                procesarRespuesta(this.responseText)
            } else {
                alert("No se han podido cargar los elementos")
            }
        }
    }

}

window.onload = cargar;

actualizar.onclick = cargar;

submit.onclick = procesarPedido;