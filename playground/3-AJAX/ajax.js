
function procesarRespuesta(jsonDoc) {

    var objetoJson = JSON.parse(jsonDoc);
    console.log(objetoJson);

    var arrayTamanyo = objetoJson.pizzeria.tamaños;
    var arrayIngredientes = objetoJson.pizzeria.ingredientes;

    var br = document.createElement("br");

    for(let tamanyo of arrayTamanyo) {
        
        let input = document.createElement("input");
        input.type="radio";
        input.name="size";
        input.id=tamanyo.tamaño;
        input.value=tamanyo.precio;

        let label = document.createElement("label");
        label.for = tamanyo.tamaño;

        elegirTamanyo.after(br);
        elegirTamanyo.after(label);
        elegirTamanyo.after(input);
        
    }

}

const URL = "http://127.0.0.1:5500/WsJS-DAW2/playground/3-AJAX/";
const RECURSO = "json/pizzeria.json";

window.onload = function () {

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if(this.readyState==4){
            if (this.status == 200) {
                procesarRespuesta(this.responseText)//Obtenemos el valor en texto
            } else {
                alert("Algo ha salido mal")
            }
        }
    }

    xmlHttp.open('GET', URL + RECURSO, true)
    xmlHttp.send(null)

}
