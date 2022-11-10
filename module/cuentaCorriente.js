export class cuentaCorriente {
	cliente;
	numeroDeCuenta;
	agencia;
	#saldoDeCuenta;
	constructor() {
		this.cliente = null;
		this.numeroDeCuenta = " ";
		this.agencia = " ";
		this.#saldoDeCuenta = 0;
	}
	depositoEnCuenta(cantidad) {
		if (cantidad > 0) this.#saldoDeCuenta += cantidad;
		else console.log("No se puede depositar");
		return this.#saldoDeCuenta;
	}
	retiroEnCuenta(cantidad) {
		if (this.#saldoDeCuenta - cantidad >= 0) {
			this.#saldoDeCuenta -= cantidad;
			return this.#saldoDeCuenta;
		} else console.log("saldo insuficiente");
		//this.#saldoDeCuenta-=cantidad;
	}
	verSaldo() {
		return this.#saldoDeCuenta;
	}
	transferirACuenta(cantidad, cuentaDestino) {
		this.retiroEnCuenta(cantidad);
		cuentaDestino.depositoEnCuenta(cantidad);
	}
}