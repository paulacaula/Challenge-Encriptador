const entrada =document.querySelector(".entrada")
const salida =document.querySelector(".salida")

function btnEncriptar(){
    const textoEncriptado = encriptar(entrada.value)
    salida.value = textoEncriptado
    entrada.value =""
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(entrada.value)
    salida.value = textoDesencriptado
    entrada.value =""
}

// Función para encriptar el texto ingresado en el textarea de entrada
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


// Función para desencriptar el texto ingresado en el textarea de salida
function btdesencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// Función para copiar el contenido del textarea de salida al portapapeles
function copiarContenido() {
    const salida = document.getElementById('salida');
    
    // Seleccionar el contenido del textarea
    salida.select();

    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    // Mostrar mensaje de copiado
    alert('¡Texto copiado al portapapeles!');
}
