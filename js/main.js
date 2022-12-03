const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) =>  {
    console.log("cliquei no robo")
})

function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("Bem-vindo ao Robotron 200")
}

dizOi("Joao")