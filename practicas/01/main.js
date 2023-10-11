
/**
* Función que crea un formulario creado dinámicamente mediante JS
*/
function crearForms() {

    let forms = document.createElement("form");
    cajaForms.appendChild(forms);
    forms.id="formulario";
    forms.method="post";
    forms.action="urlServidor";

    let fieldSet = document.createElement("fieldSet");
    forms.appendChild(fieldSet);

    let legend = document.createElement("legend");
    let legendText = document.createTextNode("Datos Personales:");

    fieldSet.appendChild(legend);
    legend.appendChild(legendText);

    for (i=1 ; i<=3 ; i++){
        let campoText = document.createElement("input")
        campoText.id=i+1;
        campoText.type="text";
        switch (i){
            case 1:
                campoText.name="dni";
                campoText.placeholder="DNI";
                break;
            case 2:
                campoText.name="nombre";
                campoText.placeholder="Introduce tu nombre";
                break;
            case 3:
                campoText.name="apellidos";
                campoText.placeholder="Introduce tus apellidos";
                break;
        }
        campoText.className="camposForms";
        fieldSet.appendChild(campoText);
    }

    let submit = document.createElement("input");
    submit.type="submit";
    submit.name="enviar";
    submit.className="submit";

    fieldSet.appendChild(submit);

    console.log(forms);

}//End crearForms()