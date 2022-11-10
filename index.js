import { cuentaCliente } from "./module/cuentaCliente.js";
import { cuentaCorriente } from "./module/cuentaCorriente.js";
const cliente1 = new cuentaCliente("Fulanite", "329847", "3489");

const cuentaDeFulanite = new cuentaCorriente();
cuentaDeFulanite.numeroDeCuenta = "1";
cuentaDeFulanite.agencia = "12";
cuentaDeFulanite.cliente = cliente1;

let saldo = cuentaDeFulanite.verSaldo(); //That is not working,

cuentaDeFulanite.depositoEnCuenta(100);
console.log(cuentaDeFulanite.retiroEnCuenta(10));
saldo = cuentaDeFulanite.depositoEnCuenta(200); // sólo mantiene el valor dependiendo de la posición en la que fue declarado, así que probablemente no debamos usarlo así, ya veremos con las siguientes clases

cuentaDeFulanite.depositoEnCuenta(200);
console.log("el saldo actual es:", saldo);
cuentaDeFulanite.verSaldo();
console.log(cuentaDeFulanite.verSaldo());
console.log(saldo); // This mother fluffed
saldo = cuentaDeFulanite.verSaldo();
console.log(saldo);
saldo = cuentaDeFulanite.depositoEnCuenta(5);
console.log(saldo);
console.log(cuentaDeFulanite);

//FIXME
const cliente2 = new cuentaCliente("Perenganite", "340", "34829");
const cuentaDePerenganite = new cuentaCorriente();
cuentaDePerenganite.numeroDeCuenta = 2;
cuentaDePerenganite.agencia = "32";
cuentaDePerenganite.cliente = cliente2;
console.log("Antes de la transferencia", cuentaDePerenganite.verSaldo());
//FIXME

cuentaDeFulanite.transferirACuenta(143, cuentaDePerenganite);
console.log("Después de la transferencia", cuentaDePerenganite.verSaldo());
const cliente3 = new cuentaCliente("Jaimico", "3849", "34970");
const cuentaDeJaimico = new cuentaCorriente();

cuentaDeJaimico.agencia = "908";
cuentaDeJaimico.cliente = cliente3;
cuentaDeJaimico.depositoEnCuenta(100);
cuentaDeJaimico.transferirACuenta(10, cuentaDeFulanite);
console.log("Cuenta de Jaimico, saldo", cuentaDeJaimico.verSaldo());
console.log("-----------------------");
console.log("fulanite---------", cuentaDeFulanite);
console.log("perenganite-------", cuentaDePerenganite);
console.log("jaimico-----------", cuentaDeJaimico);
console.log("_____________________________-");

console.log(cuentaDePerenganite);
cuentaDePerenganite.cliente = "Perenganite";
console.log("1 log-----", cuentaDePerenganite.cliente);
console.log("2 log-----", cuentaDeFulanite.cliente);
