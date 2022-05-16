let pergunta = prompt(
  "você deseja adicionar uma comida na sua lista de compras?"
);

let congelados=[]
let doces=[]
let laticinios=[]


//Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
while (pergunta === "sim") {
  let qual = prompt("qual comida você deseja inserir?");

  //Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas
  let categoria = prompt(
    "em qual categoria essa comida se encaixa, congelados, doces, laticinios?,"
  );

  if(categoria=="congelados"){
      congelados.push(qual)
  }

  if(categoria=="doces"){
      doces.push(qual)
  }
  if(categoria=="laticinios"){
      laticinios.push(qual)
  }

  pergunta = prompt(
    "você deseja adicionar uma comida na sua lista de compras?"
  );
} 
if (pergunta === "não") {
  alert(`minha lista de compras 
  lista de congelados:${congelados}
  lista de doces:${doces}
  lista de laticinios:${laticinios}`);
}
else if(pergunta === "remover"){
	if(doces.length === 0 && congelados.length === 0 && laticinios.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
		alert(`A lista está vazia!`);
	} else {  //se a lista não estiver vazia
		remover = prompt(`Lista de compras:\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
	if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
