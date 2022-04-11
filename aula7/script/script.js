
       function mostrarDados(valorNome, valorIdade){

        alert("Nome informado: " + valorNome + "\nIdade informada: " + valorIdade);

   }

   function leDados(){

        let nome  = prompt("Digite o seu nome: ");

        let idade = prompt("Digite a sua idade: ");

        mostrarDados(nome, idade);

   }

   function mostrarDadosColoridos(){

    let nome  = prompt("Digite o seu nome: ");

    let idade = prompt("Digite a sua idade: ");

    document.write("<font color=red>  "+ nome + "</font>");

    document.write("\n<font color=blue>"+  idade + "</font>");

   }

   function calculadora(){

    let valor1 = prompt("Digite o primeiro valor: ");

    let valor2 = prompt("Digite o segundo valor: ");

    let soma = parseInt(valor1) +  parseInt(valor2);

        alert("Valor do cálculo: " + soma);

   }

   function calculadoraComOperacao(){

    let valor1 =  prompt("digite o valor 1");

    let valor2 =  prompt("digite o valor 2");

    let operacao =  prompt("digite a operacão: 1 = somar, 2 = subtracao");

   if(operacao == 1){

   var somaTotal = parseInt(valor1) + parseInt(valor2);

   alert("soma: " + somaTotal);

}else if(operacao == 2){

    let subTotal = parseInt(valor1) - parseInt(valor2);

    alert("subtracao: " + subTotal);
}else{

    alert("opcao invalida");
}

}

function insereInformacoesProdutos(){

  let nome =  prompt("digite o nome");

  let preco =  prompt("digite o preco");

  let precoNumerico = parseFloat(preco);

    if(precoNumerico >= 100 ){

    alert("produto maior/igual que 100");

}else{

    alert("produto do produto é menor que 100");
}

}



function mostraNomeECidadeNascimento(){

for(let i=0; i < 100; i++){

document.write("Vinícius, Porto Alegre<br>");

}

}

function validaEntradaUsuario(nome, idade){

if(nome == ""){

    alert("Nome invalido, digite novamente.");

    return false;
}

if(idade < 0 || idade > 120){

    alert("Idade invalida");

    return false;
}

return true;

}

function insereValoresUsuario(){

let nome  = prompt("Digite o seu nome: ");

let idade = prompt("Digite a sua idade: ");

let retornoFuncao = validaEntradaUsuario(nome,idade);

if(retornoFuncao == true){

alert("Dados preenchidos com sucesso. Obrigado");

}

}