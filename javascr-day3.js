//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

const área = prompt("Você quer seguir para: front-end ou back-end?")

//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

if(área == "front-end"){
    let linguagem = prompt("você quer aprender React ou Vue?")
}

if(área == "back-end"){
    let linguagem = prompt("você quer aprender C# ou Java?")
}

//3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

const fim = prompt("agora você iara se especializar, ou se tornarn Fullstack ")  

const mensagemFinal = `"parabens Você escolheu ${fim}"`

alert(mensagemFinal)

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}