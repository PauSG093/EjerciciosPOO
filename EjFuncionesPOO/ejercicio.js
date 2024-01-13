// Definir la clase OperacionesMatematicas
class OperacionesMatematicas {
    constructor(numero1, numero2) {
        this._numero1 = numero1;
        this._numero2 = numero2;
    }

    get numero1() {
        return this._numero1;
    }

    set numero1(numero1) {
        this._numero1 = numero1;
    }

    get numero2() {
        return this._numero2;
    }

    set numero2(numero2) {
        this._numero2 = numero2;
    }

    calcularSuma() {
        return this._numero1 + this._numero2;
    }

    calcularMultiplicacion() {
        return this._numero1 * this._numero2;
    }
}

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

let operaciones = new OperacionesMatematicas(num1, num2);

alert("La suma es:" + operaciones.calcularSuma());
alert("La multiplicacion es:" + operaciones.calcularMultiplicacion());

