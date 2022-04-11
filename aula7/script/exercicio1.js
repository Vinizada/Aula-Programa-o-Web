function mostraDados(){
    alert("Vinícius Lima, moro em Cachoeirinha - RS")
}

function mostraDadosDigitados(){
    let componenteTexto = document.getElementById("campoDigitacao");
    let valorDigitado = componenteTexto.value;

    if (!validaDadosDigitados(valorDigitado)){
        alert(valorDigitado);
    }   
}

function validaDadosDigitados(valorDigitado){
    
    if(valorDigitado.value == ""){
        
        alert("Digite algo na caixa!");
        return true;

    }else{

        alert("Sucesso!");
        return false;

    }
}

function validaCadastroPessoa(){

    let validacao = false;

    let variavelNome = document.getElementById("nome").value;
    let variavelIdade = document.getElementById("idade").value;
    let variavelRg = document.getElementById("rg").value;
    let variavelEndereco = document.getElementById("endereco").value;

    if(variavelNome == ""){
        alert("Campo de nome vazio!");
        validacao = true;
    }
    
    if(variavelIdade == ""){
        alert("Campo de idade vazio!");
        validacao = true;
    }
    
    if(variavelRg == ""){
        alert("Campo de rg vazio!");
        validacao = true;
    }
    
    if (variavelEndereco == ""){
        alert("Campo de endereço vazio!");
        validacao = true;
    }

    if (!validacao){

        alert("Cadastro realizado com sucesso!");

    }

}

function validaCadastroProduto(){

    let validacao = false;

    let variavelNomeProduto = document.getElementById("nomeProduto").value;
    let variavelPrecoProduto = document.getElementById("precoProduto").value;

    if(variavelNomeProduto == ""){
        validacao = true;
    }
    
    if(variavelPrecoProduto == ""){
        validacao = true;
    }

    if(validacao){
        alert("Informações incorretas!");
    }else{
        alert("Cadastro correto!");
    }

    return validacao;

}