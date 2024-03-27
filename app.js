
let programingLanguages = ['Java', ' C', ' C++', ' Kotlin', ' Python'];

function valorElementoHTML(etiqueta, texto) {
    let elementoHTML = document.getElementById(etiqueta);
    return elementoHTML.innerHTML = texto;
}

valorElementoHTML('muestra_array', `En la siguiente lista se muestran algunos lenguajes de programación: ${programingLanguages}.`);

//cuando el boton el clicado llama a la función infoLista()
let butonInfoArray = document.getElementById('boton_info_array');
butonInfoArray.onclick = function (){
    infoLista();
}

//muestra la longitud del array y el ultijmo elemento del array
function infoLista() {
    let longitudArreglo = programingLanguages.length;
    let ultimoElementoArreglo = programingLanguages[programingLanguages.length - 1];
    return valorElementoHTML('info_array', (`El múmero de elementos de la lista es ${longitudArreglo} y el ultimo elemento es ${ultimoElementoArreglo}.`));
}

let butonAdd = document.getElementById('boton_mas_lenguajes');
butonAdd.onclick = function () {
    addLanguages();
    return valorElementoHTML('muestra_array', `En la siguiente lista se muestran algunos lenguajes de programación: ${programingLanguages}.`);
}

function addLanguages() {
    return programingLanguages.push(' Rust', ' Ruby', ' GoLang');
}
