const botao = document.querySelector ("#btn"); // criar uma variável constante para que o seletor encontre onde quero que tenha a função

const imagem1 = document.querySelector ("#imagempri");

const frase = document.querySelector ("#fraseprincipal");


btn.addEventListener ("click", function () { //aqui coloca o nome da id para adicionar o evento
    if (botao.value == 'primeiro'){
        imagem1.src = "desesperado.png"
        frase.innerText = "De tarde, ele ficou desesperado\n porque encontrou a princesa\n presa no castelo!"
        botao.value = 'segundo'
    }

    else if (botao.value == "segundo"){
        imagem1.src = "feliz.png"
        frase.innerText = "À noite, ele voltou feliz\n e saltitante pois conseguiu\n resgatar a princesa!"
        botao.value = "terceiro"
    }

    else {
        imagem1.src = "preocupado.png"
        frase.innerText = "Pela manhã, ele estava\nextremamente preocupado\nporque Bowser havia\nsequestrado a princesa."
        botao.value = "primeiro"
    }
  });

