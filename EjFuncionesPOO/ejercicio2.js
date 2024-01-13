class Calculadora {
    constructor(numero1, numero2) {
        this._numero1 = numero1;
        this._numero2 = numero2;
    }

    // Métodos get y set para los números
    get numero1() {
        return this._numero1;
    }

    set numero1(num1) {
        this._numero1 = num1;
    }

    get numero2() {
        return this._numero2;
    }

    set numero2(num2) {
        this._numero2 = num2;
    }

    sumar() {
        return this._numero1 + this._numero2;
    }

    restar() {
        return this._numero1 - this._numero2;
    }

    multiplicar() {
        return this._numero1 * this._numero2;
    }

    dividir() {
        if (this._numero2 !== 0) {
            return this._numero1 / this._numero2;
        } else {
            return "Error, es un numero sin division";
        }
    }
}

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

let calculadora = new Calculadora(num1, num2);

let opcion = parseInt(prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));

switch (opcion) {
    case 1:
        alert("La suma es: " + calculadora.sumar());
        break;
    case 2:
        alert("La resta es:" + calculadora.restar());
        break;
    case 3:
        alert("La multiplicacion es: " + calculadora.multiplicar());
        break;
    case 4:
        alert("La division es: " + calculadora.dividir());
        break;
    default:
        alert("Opcion no valida.");
}
