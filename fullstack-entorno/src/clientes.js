class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
        console.info(nueva_deduccion);
    }
}

let cliente1 = new Cliente('Claudia');
console.info(cliente1.nombre);

export default cliente1;