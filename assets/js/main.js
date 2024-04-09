import { CalcularImpuestos } from "./impuestos.js";
import cliente1 from "./clientes.js";

const impuestoFinal = CalcularImpuestos(1234, 452);

console.log(`El cliente ${cliente1} debera pagar ${impuestoFinal}pesos en impuestos`);

