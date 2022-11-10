import { cuentaCliente } from "./module/cuentaCliente.js";
import { cuentaCorriente } from "./module/cuentaCorriente.js";
const cliente1 = new cuentaCliente("Fulanite", "329847", "3489");

const cuentaDeFulanite = new cuentaCorriente(cliente1, 1, 12);

let saldo = cuentaDeFulanite.verSaldo(); //That is not working,

cuentaDeFulanite.depositoEnCuenta(100);
console.log(cuentaDeFulanite.retiroEnCuenta(10));
saldo = cuentaDeFulanite.depositoEnCuenta(200); // sólo mantiene el valor dependiendo de la posición en la que fue declarado, así que probablemente no debamos usarlo así, ya veremos con las siguientes clases

cuentaDeFulanite.depositoEnCuenta(200);
console.log("el saldo actual es:", saldo);
saldo = cuentaDeFulanite.depositoEnCuenta(5);

const cliente2 = new cuentaCliente("Perenganite", "340", "34829");
const cuentaDePerenganite = new cuentaCorriente(cliente2, 2, 32);
console.log("Número de cuentas totales", cuentaCorriente.numTotalDeCuentas);

cuentaDeFulanite.transferirACuenta(143, cuentaDePerenganite);

const cliente3 = new cuentaCliente("Jaimico", "3849", "34970");
const cuentaDeJaimico = new cuentaCorriente(cliente3, 3, 908);

console.log("Número de cuentas totales", cuentaCorriente.numTotalDeCuentas);
