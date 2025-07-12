function Calcular() {

    altura = parseFloat(document.getElementById("altura").value)
    peso = parseFloat(document.getElementById("peso").value)

    //Verifica si los datos ingresados son correctos, si lo son calcula el IMC y el Estado
    if (altura > 0 & peso > 0) {
        imc = (Imc(altura, peso)).toFixed(2)
        estado = Estado(imc)
        document.getElementById("res").innerHTML = "Tu IMC es: " + imc + " , El estado es: " + estado
    }
    else {

        document.getElementById("res").innerHTML = "Ingrese datos correctos"
    }

}


// IMC
function Imc(altura, peso) {

    altura = altura / 100
    imc = peso / (altura * altura)
    return imc
}


//Estado

function Estado(imc) {
    if (imc < 15) {
        return ("Delgadez muy Severa")
    }
    if (imc >= 15 && imc <= 15.9) {
        return "Delgadez Severa"
    }
    if (imc >= 16 && imc <= 18.4) {
        return "Delgadez"
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Correcto"
    }
    if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso"
    }
    if (imc >= 30 && imc <= 34.9) {
        return "Obesidad Moderada"
    }
    if (imc >= 35 && imc <= 39.9) {
        return "Obesidad Severa"
    }
    if (imc >= 40) {
        return "Obesidad Mórbida"
    }
}
function Borrar(){
    document.getElementById("res").innerHTML=" "
}