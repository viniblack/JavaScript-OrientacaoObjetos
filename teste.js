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

const clienteVinicius = new Cliente;
clienteVinicius.nome = "Vinicius";
clienteVinicius.cpf = 22938844003;

const clinteJoao = new ContaCorrente();
clinteJoao.saldo = 0;
clinteJoao.agencia = 2412;

console.log(clinteJoao.saldo);
clinteJoao.saldo = 200;
console.log(clinteJoao.saldo);
clinteJoao.sacar(20)




console.log(clienteVinicius);