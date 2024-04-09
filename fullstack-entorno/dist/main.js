"use strict";

var _impuestos = require("./impuestos.js");
var _clientes = _interopRequireDefault(require("./clientes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestoFinal = (0, _impuestos.CalcularImpuestos)(1234, 452);
console.log("El cliente ".concat(_clientes["default"], " debera pagar ").concat(impuestoFinal, "pesos en impuestos"));