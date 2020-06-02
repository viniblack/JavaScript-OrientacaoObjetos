export class Conta {
 constructor(saldoInicial, cliente, agencia) {

  if (this.constructor == Conta) {
   throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");

  }

  this._saldo = saldoInicial;
  this._cliente = cliente;
  this._agencia = agencia;
 }

 sacar(valor) {
  throw new Error("O método Sacar da conta é abstrato")
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