class AutoConcesionaria {
    constructor(modelo) {
        this._modelo = modelo;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelon) {
        this._modelo = modelon;
    }

    calcularDescuento() {
        switch (this._modelo.toLowerCase()) {
            case 'ford fiesta':
                return 5;
            case 'ford focus':
                return 10;
            default:
                return 0;
        }
    }
}
let modeloIngresado = prompt("Ingrese el modelo del auto (ford fiesta o ford focus):");

let auto = new AutoConcesionaria(modeloIngresado);

let descuento = auto.calcularDescuento();
alert("El descuento para el " + auto.modelo + " es del " + descuento + "%.");