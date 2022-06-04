const inputText = document.querySelector(".input_text");
const mensaje = document.querySelector("#parrafo");
const div_esperar = document.querySelector("#esperar");
const div_resultado = document.querySelector("#resultado");


// BOTONES //
function botonencriptar() {
    if (inputText.value) {
        const textoEncriptado = encriptar(inputText.value);
        mensaje.textContent = textoEncriptado;

        div_resultado.classList.remove("no_mostrar");
        div_esperar.classList.add("no_mostrar");

    } else {
        div_esperar.classList.remove("no_mostrar");
        div_resultado.classList.add("no_mostrar");
    }

}

function botondesencriptar() {
    if (inputText.value) {
        const textoDesencriptado = desencriptar(inputText.value);
        mensaje.textContent = textoDesencriptado;

        div_resultado.classList.remove("no_mostrar");
        div_esperar.classList.add("no_mostrar");

    } else {
        div_esperar.classList.remove("no_mostrar");
        div_resultado.classList.add("no_mostrar");
    }
}

function botoncopiar() {
    navigator.clipboard.writeText(mensaje.textContent)
        .then(() => {
            console.log("Este es el texto que se copió en el portapapeles", mensaje.textContent);
            alert("¡El texto ha sido copiado!");
        })
        .catch(err => {
            console.log('Ha habido un error al copiar', err);
        });

}

// ENCRIPTAR //
function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    inputText.value = "";
    return StringParaEncriptar;
}

// DESENCRIPTAR //
function desencriptar(StringParaEncriptado) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    StringParaEncriptado = StringParaEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptado.includes(matrizCodigo[i][0])) {
            StringParaEncriptado = StringParaEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return StringParaEncriptado;
}
