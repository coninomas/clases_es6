class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual
    }
    set montoBrutoAnual(nuevo_monto) {
        this._montoBrutoAnual = nuevo_monto;
        console.info(nuevo_monto);
    }

    get deducciones() {
        return this._deducciones
    }
    set deducciones(nueva_deduccion) {
        this._deducciones = nueva_deduccion;
        console.info(nueva_deduccion);
    }   
};

export function CalcularImpuestos(montoBrutoAnual, deducciones) {
    return (montoBrutoAnual - deducciones) * 0.21;
   };