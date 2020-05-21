class Cliente {

 nome;
 cpf;
}

class ContaCorrente {

 agencia;
 saldo;

 sacar(valor) {

  if (this.saldo >= valor) {
   this.saldo -= valor;
   console.log(clinteJoao.saldo);
  }else console.log("Saldo insuficiente");
  
 }
}

const cliente1 = new Cliente;
cliente1.nome = "Vinicius";
cliente1.cpf = 22986677338;

const cliente2 = new Cliente;
cliente2.nome = "João";
cliente2.cpf = 83092274094;

const contaCorrenteRicado = new ContaCorrente();
contaCorrenteRicado.saldo = 0;
contaCorrenteRicado.agencia = 1001;


console.log(contaCorrenteRicado.saldo);
contaCorrenteRicado.saldo = 20;
console.log(contaCorrenteRicado.saldo);
contaCorrenteRicado.sacar(10)


console.log(cliente1, '\n', cliente2)