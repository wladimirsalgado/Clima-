let chave = "2d3fa354012decdaf18f31938845354c"

function colocanaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + " °C "
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + " % "

}

async function buscarcidade (cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then (resposta => resposta.json())

        colocanaTela(dados)

}



function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}