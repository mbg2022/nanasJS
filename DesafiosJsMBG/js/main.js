//Inicio desafío complementario Entrega 1-6
/*
alert("La idea es que ingreses un  número PRINCIPAL P , y otro número NÚMERO N yo te digo si el PRINCIPAL es divisible o no por ese NÚMERO");
alert("Poder repetirlo la cantidad de veces que me digas");
let nombre = prompt("Ingresá tu nombre:");
alert("Hola" + " " + nombre);

let principal = +prompt("Ingresa un número: ");
let cantidadVeces = +prompt("Ingresá la cantidad de veces que quieres consultar");

let divisor = +prompt("Ingresa el divisor: ");



if (Number(cantidadVeces)) {

    if (cantidadVeces === 0) {
        alert(nombre + " ,estás seguro que no querés consultar ? ");
    }
    if (cantidadVeces === "") {
        alert(nombre + " ,tenes que ingresar un valor numérico ? ");
    }
    if (cantidadVeces < 0) {
        alert(nombre + " ,debés ingresar un número mayor a 0 ");
    } else {

        for (i = 1; i <= cantidadVeces; i++) {

            if ((principal % divisor) == 0) {
                alert("Genial!!! el número " + principal + " es divisible por " + divisor);

            } else {
                alert("Alpiste perdiste, el número " + principal + " NO es divisible por " + divisor);
                exit;

            }
            if (i != cantidadVeces) {
                divisor = +prompt("Ingresa el divisor: ");
            }

        }
    }
} else {
    alert(nombre + "El valor ingresado debe ser numérico");

}
*/
//Fin de desafío complementario 1-6

//Inicio Desafío Entrega 6-6
/*La idea es preguntarle al usuario la cantidad de horas que requiere una niñera, y que seleccione la niñera que quiere. Con esa información se le devuelve el Importe que deberá abonar de acuerdo a la niñera seleccionada*/

/*Inicio Desafío 6
class Ninieras {
    constructor(nombreNiniera, valorHora) {
        this.nombreNiniera = nombreNiniera
        this.valorHora = valorHora
    }
    calcularValorCuidado(nombreNiniera, precio, cantidadHoras) {
        alert("El valor del cuidado de " + ninieraSeleccionada + " por " + cantidadHoras + " horas " + "es de $" + (this.valorHora * cantidadHoras))
    }
}
const niniera1 = new Ninieras("Mariana", 450)
const niniera2 = new Ninieras("Sol", 650)
const niniera3 = new Ninieras("Erica", 500)
const niniera4 = new Ninieras("Paula", 550)
const niniera5 = new Ninieras("Julieta", 450)

let cantidadHoras = +(prompt("Ingrese la cantidad de horas de cuidado que requiere"))
while ((!Number(cantidadHoras))) {
    alert("La cantidad de horas debe ser un valor numérico"), +(prompt("Ingrese la cantidad de horas de cuidado que requiere"))

}
let ninieraSeleccionada = (prompt("Escriba el nombre de la niñera que quiere contratar, teniendo en cuenta que las niñeras disponibles en el catálogo son: Mariana, Sol, Erica, Paula, Julieta"))



switch (ninieraSeleccionada) {
    case "Mariana":
        ninieraSeleccionada = niniera1.nombreNiniera;
        niniera1.calcularValorCuidado(ninieraSeleccionada, niniera1.valorHora, cantidadHoras);
        break;
    case "Sol":
        ninieraSeleccionada = niniera2.nombreNiniera;
        niniera2.calcularValorCuidado(ninieraSeleccionada, niniera2.valorHora, cantidadHoras);
        break;
    case "Erica":
        ninieraSeleccionada = niniera3.nombreNiniera;
        niniera3.calcularValorCuidado(ninieraSeleccionada, niniera3.valorHora, cantidadHoras);
        break;
    case "Paula":
        ninieraSeleccionada = niniera4.nombreNiniera;
        niniera4.calcularValorCuidado(ninieraSeleccionada, niniera4.valorHora, cantidadHoras);
        break;
    case "Julieta":
        ninieraSeleccionada = niniera5.nombreNiniera;
        niniera5.calcularValorCuidado(ninieraSeleccionada, niniera5.valorHora, cantidadHoras);
        break;
    default:
        break;


}
Fin desafío 6*/

/*Desafío complementario incorporar array entrega 15-6 */

class Ninieras {
    constructor(nombreNiniera, valorHora) {
        this.nombreNiniera = nombreNiniera
        this.valorHora = valorHora
    }
    calcularValorCuidado(nombreNiniera, precio, cantidadHoras) {
        alert("El valor del cuidado de " + ninieraSeleccionada + " por " + cantidadHoras + " horas " + "es de $" + (this.valorHora * cantidadHoras))
    }
}
//Declaro el array de niñeras
const ninieras = []

let cantidadNinieras = +prompt("Ingrese la cantidad de niñeras que quiere dar de alta: ")
if (cantidadNinieras > 0) {
    for (i = 0; i < cantidadNinieras; i++) {
        let nombreNiniera = prompt("Ingresar nombre niñera").toLocaleUpperCase();

        let valorHora = +prompt("Ingrese su valor hora");
        ninieras.push(new Ninieras(nombreNiniera, valorHora))
    }
} else {
    alert("El valor ingresado es incorrecto")
}

if (ninieras.length > 0) {
    let verDetalleNinieras = prompt("Ha ingresado " + ninieras.length + "niñeras a la base de datos, desea ver el detalle? S/N")


    if (verDetalleNinieras.toLocaleUpperCase() === "S") {
        alert("Ver detalle: ");
        for (const niniera of ninieras) {

            alert("Nombre niñera: " + niniera.nombreNiniera + ", valor Hora: " +
                niniera.valorHora)
        }


    } else {
        alert("ocultarDetalle")
    }
} else {
    alert("ocurio un error al ingresar las niñeras a la base")
}