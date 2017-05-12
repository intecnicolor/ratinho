var botaoAmei = document.querySelectorAll(".botao.gostei");

function amar() {

	if(this.className == "botao gostei fa-stack fa fa-heart ativo") {
		this.className = "botao gostei fa-stack fa fa-heart";
	}
	else {
		this.className = "botao gostei fa-stack fa fa-heart ativo";
	}
}


for (var i = 0; i < botaoAmei.length; i++){
	botaoAmei[i].onclick = amar;
}



// FORMUMARIO
// 1.pegar o campo com query.Selector

var nome = document.querySelector(".formNome");

// 2.criar validação
function validarNome() {
	// pegar o campo nome ; já ta feito, variavel nome
	// pegar valor dele
	var valorNome = nome.value;
	
	// verificar se o valor é vazio

	if(valorNome == "") { 
		// se for vazio deixar o campo vermelho
		//  adiciona uma classe no campo nome
		nome.parentNode.classList.add("errado");
	}

	else {
		idade.parentNode.classList.remove("errado");
	}
}	

// 3. Executar validação ao sair do foco do campo
nome.onblur = validarNome;



var idade = document.querySelector(".formIdade");

function validarIdade() {
	var valorIdade = idade.value;

	if(valorIdade < 18) {
		idade.parentNode.classList.add("errado");
	}

	else {
		idade.parentNode.classList.remove("errado");
	}
}

idade.onblur = validarIdade;


// selecionar fomulario
var formulario = document.querySelector("#formSugestoes");

//  criar a função que vai ser executada ao submeter o formulario

function adicionarBalao(){
	// criar balao que é um elemento
	var balao = document.CreateElement("div");
	balao.classList.add ("balao");

	// depois inserir dentro da tag baloesResposta
	var baloes = document.querySelector("#baloesResposta");
	baloes.appendChild(balao);
	return false;



}
// funcao criar balao
// atrelar função ao evento: 
formulario.onsubmit = adicionarBalao;




// outra forma

var mensagem = document.querySelector(".formMensagem");



