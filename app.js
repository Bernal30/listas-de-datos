
let programingLanguages = ['Java', ' C', ' C++', ' Kotlin', ' Python'];

function valorElementoHTML(etiqueta, texto) {
    let elementoHTML = document.getElementById(etiqueta);
    return elementoHTML.innerHTML = texto;
}

//condiciones iniciales
function initialCondition() {
    valorElementoHTML('info_array', 'Aqui aparecerá la información del Array.')
    valorElementoHTML('muestra_array', `En la siguiente lista se muestran algunos lenguajes de programación: ${programingLanguages}.`);
    return; 
}

initialCondition();

//cuando el boton es clicado llama a la función infoLista()
let butonInfoArray = document.getElementById('boton_info_array');
butonInfoArray.onclick = function (){
    return infoLista();
}

//muestra la longitud del array y el ultijmo elemento del array
function infoLista() {
    let longitudArreglo = programingLanguages.length;
    let ultimoElementoArreglo = programingLanguages[programingLanguages.length - 1];
    return valorElementoHTML('info_array', (`El múmero de elementos de la lista es ${longitudArreglo} y el ultimo elemento es ${ultimoElementoArreglo}.`));
}

//se agragan más lenjuages en el array y se muestran en el parrafo
let butonAdd = document.getElementById('boton_mas_lenguajes');
butonAdd.onclick = function () {
    addLanguages();
    return valorElementoHTML('muestra_array', `En la siguiente lista se muestran algunos lenguajes de programación: ${programingLanguages}.`);
}

function addLanguages() {
    return programingLanguages.push(' Rust', ' Ruby', ' GoLang');
}

//se elimina el ultimo item del array
function removeLastElement() {
    return programingLanguages.pop();
}

//se vuelve a la condición inicial
let rebootButton = document.getElementById('reboot');
rebootButton.onclick = function () {
    //se quitan los ultimos 3 elementos de array
    for (let i = 0; i < 3; i++) {
        removeLastElement();
    }
    //se vuelve a la condición inicial
    return initialCondition();
}
