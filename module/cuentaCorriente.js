import { cuentaCliente } from "./cuentaCliente.js";

export class cuentaCorriente {
	#cliente;
	numeroDeCuenta;
	agencia;
	#saldoDeCuenta;
	set cliente(value) {
		if (value instanceof cuentaCliente) this.#cliente = value;
	}

	get cliente() {
		return this.#cliente;
	}

	constructor(cliente, numeroDeCuenta, agencia) {
		this.#cliente = cliente;
		this.numeroDeCuenta = numeroDeCuenta;
		this.agencia = agencia;
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
	}

	verSaldo() {
		return this.#saldoDeCuenta;
	}

	transferirACuenta(cantidad, cuentaDestino) {
		this.retiroEnCuenta(cantidad);
		cuentaDestino.depositoEnCuenta(cantidad);
	}
}
