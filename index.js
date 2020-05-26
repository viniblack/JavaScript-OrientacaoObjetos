class Cliente {

 nome;
 cpf;
}

class ContaCorrente {

 agencia;
 _saldo = 0;

 sacar(valor) {

  if (this._saldo >= valor) {
   this._saldo -= valor;
  } else console.log("Saldo insuficiente");
 }

 depositar(valor) {
  if (valor > 0) {
   this._saldo += valor;
  }
 }
}

const cliente1 = new Cliente;
cliente1.nome = "Vinicius";
cliente1.cpf = 22986677338;

const cliente2 = new Cliente;
cliente2.nome = "João";
cliente2.cpf = 83092274094;

const contaCorrenteRicado = new ContaCorrente();
contaCorrenteRicado.agencia = 1001;

contaCorrenteRicado.depositar(100);
contaCorrenteRicado.sacar(50)

console.log(contaCorrenteRicado);