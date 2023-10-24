
/**
* Función que crea un formulario creado dinámicamente mediante JS
*/
function crearForms() {

    //Constructor del formulario
    let forms = document.createElement("form");
    cajaForms.appendChild(forms);
    forms.id = "formulario";
    forms.method = "post";
    forms.action = "urlServidor";

    let fieldSet = document.createElement("fieldSet");
    forms.appendChild(fieldSet);

    let legend = document.createElement("legend");
    let legendText = document.createTextNode("Datos Personales:");

    fieldSet.appendChild(legend);
    legend.appendChild(legendText);

    //CAMPOS DEL FORMULARIO

    //Inputs type texto: DNI | Nombre | Apellidos
    for (i = 1; i <= 3; i++) {
        let campoText = document.createElement("input")
        campoText.id = i + 1;
        campoText.type = "text";
        switch (i) {
            case 1:
                campoText.name = "dni";
                campoText.placeholder = "DNI";
                break;
            case 2:
                campoText.name = "nombre";
                campoText.placeholder = "Introduce tu nombre";
                break;
            case 3:
                campoText.name = "apellidos";
                campoText.placeholder = "Introduce tus apellidos";
                break;
        }
        campoText.className = "camposForms";
        fieldSet.appendChild(campoText);
    }

    let superHabilidad = document.createElement("p");
    superHabilidad.style="margin-bottom:5px;margin-top:15px;font-weight:bold;"
    let textoSuperhabilidad = document.createTextNode("Superpoder:");

    fieldSet.appendChild(superHabilidad);
    superHabilidad.appendChild(textoSuperhabilidad)

    //Checkbox
    for (i = 0; i < 5; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        let br = document.createElement("br");
        let textoCheckbox;
        switch (i) {
            case 0:
                checkbox.name = "tipoFuerza";
                checkbox.value = "tipoFuerza";
                textoCheckbox = document.createTextNode("Poder de fuerza física");
                break;
            case 1:
                checkbox.name = "tipoVelocidad";
                checkbox.value = "tipoVelocidad";
                textoCheckbox = document.createTextNode("Velocidad superhumana");
                break;
            case 2:
                checkbox.name = "tipoFuego";
                checkbox.value = "tipoFuego";
                textoCheckbox = document.createTextNode("Poder elemental de fuego");
                break;
            case 3:
                checkbox.name = "tipoElectico";
                checkbox.value = "tipoElectrico";
                textoCheckbox = document.createTextNode("Poder elemental eléctrico");
                break;
            case 4:
                checkbox.name = "tipoVuelo";
                checkbox.value = "tipoVuelo";
                textoCheckbox = document.createTextNode("Poder de levitación");
                break;
        }

        fieldSet.appendChild(checkbox);
        fieldSet.appendChild(textoCheckbox);
        fieldSet.appendChild(br);
        console.log(textoCheckbox);
        
    }

    for (i=0 ; i>2 ; i++) {



    }

    //Botón de enviar
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.name = "enviar";
    submit.className = "submit";
    fieldSet.appendChild(submit);

    //Control de fallos
    console.log(forms);

}//End crearForms()

//Función para ocultar el botón de crear formulario y así evitar que se formen más formularios
function borrarEvento() {
    botonCrearForms.style="display:none;";
}