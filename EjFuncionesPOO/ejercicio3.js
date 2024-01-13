class Alumno {
    constructor(nota1, nota2, nota3) {
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
    }

    get nota1() {
        return this._nota1;
    }

    set nota1(nota1) {
        this._nota1 = nota1;
    }

    get nota2() {
        return this._nota2;
    }

    set nota2(nota2) {
        this._nota2 = nota2;
    }

    get nota3() {
        return this._nota3;
    }

    set nota3(nota3) {
        this._nota3 = nota3;
    }

    calcularPromedio() {
        return (this._nota1 + this._nota2 + this._nota3) / 3;
    }

    estadonota() {
        const promedio = this.calcularPromedio();
        return promedio >= 7 ? "Aprobado" : "Reprobado";
    }
}

let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

let alumno = new Alumno(nota1, nota2, nota3);

alert("El promedio es: " + alumno.calcularPromedio().toFixed(2));
alert("El alumno esta: " + alumno.estadonota());
