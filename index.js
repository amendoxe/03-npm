import { cuentaCliente } from "./module/cuentaCliente.js";
import { cuentaCorriente } from "./module/cuentaCorriente.js";
const cliente1 = new cuentaCliente();
cliente1.nombreCliente = "Fulanite";
cliente1.dniCliente = 329847;
cliente1.rutCliente = 3489;

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

const cliente2 = new cuentaCliente();
cuentaCliente.nombreCliente = "Perenganite";
cuentaCliente.dniCliente = "340";
cuentaCliente.rutCliente = "34829";
const cuentaDePerenganite = new cuentaCorriente();
cuentaCorriente.numeroDeCuenta = "2";
cuentaDeFulanite.agencia = "32";
cuentaDeFulanite.cliente = cliente2;
console.log("Antes de la transferencia", cuentaDePerenganite.verSaldo());

cuentaDeFulanite.transferirACuenta(143, cuentaDePerenganite);
console.log("Después de la transferencia", cuentaDePerenganite.verSaldo());
const cuenta3 = new cuentaCliente();
cuenta3.nombreCliente = "Jaimico";
cuenta3.dniCliente = "3849";
cuenta3.rutCliente = "34970";
const cuentaDeJaimico = new cuentaCorriente();
cuentaDeJaimico.agencia = "908";
cuentaDeJaimico.cliente = cuenta3;
cuentaDeJaimico.depositoEnCuenta(100);
cuentaDeJaimico.transferirACuenta(10, cuentaDeFulanite);
console.log("Cuenta de jaimico, saldo", cuentaDeJaimico.verSaldo());
