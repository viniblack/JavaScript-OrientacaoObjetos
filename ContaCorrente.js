import { Cliente } from "./Cliente.js"

export class ContaCorrente {

  static numeroDeConta = 0;
  // #saldo =0 https://github.com/tc39/                   proposal-class-fields#private-fields

  set cliente(novoValor) {

    if (novoValor instanceof Cliente)
      this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {

    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeConta++;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transfirir(valor, conta) {
    const ValorSacado = this.sacar(valor);
    conta.depositar(ValorSacado);
  }
}
