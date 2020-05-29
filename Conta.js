export class Conta {
 constructor(saldoInicial, cliente, agencia) {

  this._saldo = saldoInicial;
  this._cliente = cliente;
  this._agencia = agencia;

  if (this.constructor == Conta) {
   console.log("Você não deveria instanciar um objeto do tipo conta");

  }
 }

 sacar(valor) {
  let taxa = 1;
  return this._sacar(valor, taxa);
 }

 _sacar(valor, taxa) {
  const ValorSacado = taxa * valor;
  if (this._saldo >= ValorSacado) {
   this._saldo -= ValorSacado;
   return ValorSacado;
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